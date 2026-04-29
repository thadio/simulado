<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function load_env(string $path): array
{
    if (!is_file($path)) {
        return [];
    }

    $env = [];
    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || substr($line, 0, 1) === '#' || strpos($line, '=') === false) {
            continue;
        }

        [$key, $value] = explode('=', $line, 2);
        $value = trim($value);
        if (
            strlen($value) >= 2
            && (($value[0] === '"' && $value[strlen($value) - 1] === '"')
                || ($value[0] === "'" && $value[strlen($value) - 1] === "'"))
        ) {
            $value = substr($value, 1, -1);
        }
        $env[trim($key)] = $value;
    }

    return $env;
}

function db(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $env = load_env(__DIR__ . '/.env');
    $host = $env['DB_HOST'] ?? '127.0.0.1';
    $port = $env['DB_PORT'] ?? '3306';
    $name = $env['DB_NAME'] ?? '';
    $charset = $env['DB_CHARSET'] ?? 'utf8mb4';
    $user = $env['DB_USER'] ?? '';
    $password = $env['DB_PASSWORD'] ?? '';

    $dsn = "mysql:host={$host};port={$port};dbname={$name};charset={$charset}";
    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    setup_schema($pdo);
    return $pdo;
}

function setup_schema(PDO $pdo): void
{
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS simulado_attempts (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            respondent_name VARCHAR(120) NOT NULL,
            started_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX idx_started_at (started_at),
            INDEX idx_respondent_name (respondent_name)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS simulado_answers (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            attempt_id INT UNSIGNED NOT NULL,
            question_id INT UNSIGNED NOT NULL,
            selected_answer TINYINT UNSIGNED NOT NULL,
            correct_answer TINYINT UNSIGNED NOT NULL,
            is_correct TINYINT(1) NOT NULL,
            answered_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            UNIQUE KEY uq_attempt_question (attempt_id, question_id),
            INDEX idx_attempt_id (attempt_id),
            CONSTRAINT fk_simulado_answers_attempt
                FOREIGN KEY (attempt_id) REFERENCES simulado_attempts(id)
                ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
}

function request_body(): array
{
    $body = json_decode(file_get_contents('php://input'), true);
    return is_array($body) ? $body : [];
}

function ranking(PDO $pdo): array
{
    $rows = $pdo->query("
        SELECT
            a.id,
            a.respondent_name,
            a.started_at,
            a.updated_at,
            COUNT(ans.id) AS answered_count,
            COALESCE(SUM(ans.is_correct), 0) AS correct_count,
            CASE
                WHEN COUNT(ans.id) = 0 THEN 0
                ELSE ROUND((COALESCE(SUM(ans.is_correct), 0) / COUNT(ans.id)) * 100, 2)
            END AS percent_correct
        FROM simulado_attempts a
        LEFT JOIN simulado_answers ans ON ans.attempt_id = a.id
        GROUP BY a.id, a.respondent_name, a.started_at, a.updated_at
        ORDER BY percent_correct DESC, correct_count DESC, answered_count DESC, a.updated_at ASC
        LIMIT 100
    ")->fetchAll();

    $position = 1;
    foreach ($rows as &$row) {
        $row['position'] = $position++;
        $row['id'] = (int) $row['id'];
        $row['answered_count'] = (int) $row['answered_count'];
        $row['correct_count'] = (int) $row['correct_count'];
        $row['percent_correct'] = (float) $row['percent_correct'];
    }

    return $rows;
}

try {
    $pdo = db();
    $action = $_GET['action'] ?? '';

    if ($_SERVER['REQUEST_METHOD'] === 'GET' && $action === 'ranking') {
        json_response(['ok' => true, 'ranking' => ranking($pdo)]);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'start') {
        $body = request_body();
        $name = trim((string) ($body['name'] ?? ''));
        if ($name === '') {
            json_response(['ok' => false, 'message' => 'Informe o nome do respondente.'], 422);
        }

        $name = function_exists('mb_substr') ? mb_substr($name, 0, 120) : substr($name, 0, 120);
        $stmt = $pdo->prepare('INSERT INTO simulado_attempts (respondent_name) VALUES (:name)');
        $stmt->execute(['name' => $name]);

        json_response([
            'ok' => true,
            'attempt_id' => (int) $pdo->lastInsertId(),
            'respondent_name' => $name,
        ]);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'answer') {
        $body = request_body();
        $attemptId = (int) ($body['attempt_id'] ?? 0);
        $questionId = (int) ($body['question_id'] ?? 0);
        $selectedAnswer = (int) ($body['selected_answer'] ?? -1);
        $correctAnswer = (int) ($body['correct_answer'] ?? -1);

        if ($attemptId <= 0 || $questionId <= 0 || $selectedAnswer < 0 || $correctAnswer < 0) {
            json_response(['ok' => false, 'message' => 'Dados de resposta inválidos.'], 422);
        }

        $stmt = $pdo->prepare("
            INSERT INTO simulado_answers
                (attempt_id, question_id, selected_answer, correct_answer, is_correct)
            VALUES
                (:attempt_id, :question_id, :selected_answer, :correct_answer, :is_correct)
            ON DUPLICATE KEY UPDATE
                selected_answer = VALUES(selected_answer),
                correct_answer = VALUES(correct_answer),
                is_correct = VALUES(is_correct),
                updated_at = CURRENT_TIMESTAMP
        ");
        $stmt->execute([
            'attempt_id' => $attemptId,
            'question_id' => $questionId,
            'selected_answer' => $selectedAnswer,
            'correct_answer' => $correctAnswer,
            'is_correct' => $selectedAnswer === $correctAnswer ? 1 : 0,
        ]);

        $pdo->prepare('UPDATE simulado_attempts SET updated_at = CURRENT_TIMESTAMP WHERE id = :id')
            ->execute(['id' => $attemptId]);

        json_response(['ok' => true, 'ranking' => ranking($pdo)]);
    }

    json_response(['ok' => false, 'message' => 'Endpoint não encontrado.'], 404);
} catch (Throwable $e) {
    json_response(['ok' => false, 'message' => $e->getMessage()], 500);
}

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
        CREATE TABLE IF NOT EXISTS simulado_schema_meta (
            meta_key VARCHAR(80) PRIMARY KEY,
            meta_value VARCHAR(255) NOT NULL,
            updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS simulado_questions (
            id INT UNSIGNED PRIMARY KEY,
            theme VARCHAR(120) NOT NULL,
            stem TEXT NOT NULL,
            position INT UNSIGNED NOT NULL,
            active TINYINT(1) NOT NULL DEFAULT 1,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX idx_position (position),
            INDEX idx_theme (theme)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS simulado_question_options (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            question_id INT UNSIGNED NOT NULL,
            option_index TINYINT UNSIGNED NOT NULL,
            option_text TEXT NOT NULL,
            explanation TEXT NOT NULL,
            is_correct TINYINT(1) NOT NULL DEFAULT 0,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            UNIQUE KEY uq_question_option (question_id, option_index),
            INDEX idx_question_id (question_id),
            CONSTRAINT fk_simulado_question_options_question
                FOREIGN KEY (question_id) REFERENCES simulado_questions(id)
                ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS simulado_attempts (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            respondent_name VARCHAR(120) NOT NULL,
            exam_type VARCHAR(40) NOT NULL DEFAULT 'general',
            exam_label VARCHAR(160) NOT NULL DEFAULT 'Bloco geral',
            started_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX idx_started_at (started_at),
            INDEX idx_respondent_name (respondent_name),
            INDEX idx_exam_type (exam_type)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");

    ensure_attempt_columns($pdo);

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

    seed_questions($pdo);
}

function column_exists(PDO $pdo, string $table, string $column): bool
{
    if (!preg_match('/^[a-zA-Z0-9_]+$/', $table) || !preg_match('/^[a-zA-Z0-9_]+$/', $column)) {
        throw new InvalidArgumentException('Nome de tabela ou coluna inválido.');
    }

    $stmt = $pdo->query("SHOW COLUMNS FROM `{$table}` LIKE " . $pdo->quote($column));
    return (bool) $stmt->fetch();
}

function ensure_attempt_columns(PDO $pdo): void
{
    if (!column_exists($pdo, 'simulado_attempts', 'exam_type')) {
        $pdo->exec("ALTER TABLE simulado_attempts ADD exam_type VARCHAR(40) NOT NULL DEFAULT 'general' AFTER respondent_name");
    }

    if (!column_exists($pdo, 'simulado_attempts', 'exam_label')) {
        $pdo->exec("ALTER TABLE simulado_attempts ADD exam_label VARCHAR(160) NOT NULL DEFAULT 'Bloco geral' AFTER exam_type");
    }

    try {
        $pdo->exec("ALTER TABLE simulado_attempts ADD INDEX idx_exam_type (exam_type)");
    } catch (Throwable $e) {
        // Índice já existente em instalações atualizadas.
    }
}

function legacy_questions(): array
{
    $questions = [];
    $path = __DIR__ . '/questions.js';
    if (is_file($path)) {
        $contents = trim((string) file_get_contents($path));
        $contents = preg_replace('/^const\s+QUESTIONS\s*=\s*/', '', $contents);
        $contents = preg_replace('/;\s*$/', '', (string) $contents);
        $decodedQuestions = json_decode((string) $contents, true);
        if (is_array($decodedQuestions)) {
            $questions = $decodedQuestions;
        }
    }

    $extraPath = __DIR__ . '/extra_questions.php';
    if (is_file($extraPath)) {
        $extraQuestions = require $extraPath;
        if (is_array($extraQuestions)) {
            $questions = array_merge($questions, $extraQuestions);
        }
    }

    $conceptPath = __DIR__ . '/concept_questions.php';
    if (is_file($conceptPath)) {
        $conceptQuestions = require $conceptPath;
        if (is_array($conceptQuestions)) {
            $questions = array_merge($questions, $conceptQuestions);
        }
    }

    return $questions;
}

function improve_stem(string $theme, string $stem): string
{
    $stem = trim($stem);
    $prefixes = [
        'List' => 'Sobre List em Java Collections',
        'Map' => 'Sobre Map em Java Collections',
        'Classe Abstrata' => 'Sobre classes abstratas em Java',
        'Interface' => 'Sobre interfaces em Java',
        'Arquitetura em Camadas' => 'Em uma arquitetura em camadas',
        'JDBC' => 'Sobre JDBC',
        'Clean Code' => 'Considerando Clean Code',
        'Nomes, Métodos, Atributos e Comentários' => 'Sobre nomes, métodos, atributos e comentários',
        'Coesão e Acoplamento' => 'Sobre coesão e acoplamento',
        'Números Mágicos e Constantes' => 'Sobre números mágicos e constantes',
    ];

    if (str_ends_with($stem, ':')) {
        $stem = rtrim($stem, ':') . '?';
    }

    if (preg_match('/^(Qual|Em|Uma|Um|Por que|Se|No|Quando|O que|Diferença)/u', $stem)) {
        return $stem;
    }

    return ($prefixes[$theme] ?? 'Sobre o tema') . ', ' . lcfirst($stem);
}

function improve_explanation(string $theme, string $option, bool $isCorrect): string
{
    $option = rtrim(trim($option), ". \t\n\r\0\x0B");
    if ($isCorrect) {
        return "Correta: {$option}. Esta alternativa aplica o conceito de {$theme} de forma precisa e representa a prática esperada em Java.";
    }

    $lower = function_exists('mb_strtolower') ? mb_strtolower($option, 'UTF-8') : strtolower($option);
    if (str_contains($lower, 'sempre') || str_contains($lower, 'nunca') || str_contains($lower, 'obrigatória')) {
        return "Incorreta: {$option}. A afirmação é absoluta demais; em {$theme}, o comportamento depende da API, da implementação e do contexto de uso.";
    }
    if (str_contains($lower, 'map') || str_contains($lower, 'chave') || str_contains($lower, 'valor')) {
        return "Incorreta: {$option}. Essa ideia pertence a estruturas chave-valor ou a outro contexto, não ao conceito cobrado nesta questão sobre {$theme}.";
    }
    if (str_contains($lower, 'list') || str_contains($lower, 'set') || str_contains($lower, 'arraylist') || str_contains($lower, 'linkedlist')) {
        return "Incorreta: {$option}. A alternativa mistura características de coleções diferentes ou usa uma implementação que não resolve o cenário apresentado.";
    }
    if (str_contains($lower, 'controller') || str_contains($lower, 'service') || str_contains($lower, 'repository') || str_contains($lower, 'view')) {
        return "Incorreta: {$option}. A responsabilidade citada fica na camada errada; separar papéis é essencial para manter baixo acoplamento e boa manutenção.";
    }
    if (str_contains($lower, 'sql') || str_contains($lower, 'jdbc') || str_contains($lower, 'connection') || str_contains($lower, 'resultset')) {
        return "Incorreta: {$option}. O item confunde uma API ou recurso de persistência com o conceito específico que a pergunta está avaliando.";
    }
    if (str_contains($lower, 'não compila') || str_contains($lower, 'erro') || str_contains($lower, 'exception')) {
        return "Incorreta: {$option}. Essa consequência não é garantida pelo conceito; pode haver erro em outros cenários, mas não é a resposta técnica desta questão.";
    }

    return "Incorreta: {$option}. A alternativa não descreve corretamente o conceito de {$theme} cobrado na pergunta.";
}

function seed_questions(PDO $pdo): void
{
    if (function_exists('set_time_limit')) {
        @set_time_limit(180);
    }

    $seedVersion = '2026-04-29-2';
    $count = (int) $pdo->query('SELECT COUNT(*) FROM simulado_questions')->fetchColumn();
    $versionStmt = $pdo->prepare('SELECT meta_value FROM simulado_schema_meta WHERE meta_key = :key');
    $versionStmt->execute(['key' => 'questions_seed_version']);
    $currentVersion = (string) ($versionStmt->fetchColumn() ?: '');

    if ($count > 0 && $currentVersion === $seedVersion) {
        return;
    }

    $questions = legacy_questions();
    if ($questions === []) {
        return;
    }

    $existingIds = [];
    if ($count > 0) {
        $existingIds = array_flip(array_map('intval', $pdo->query('SELECT id FROM simulado_questions')->fetchAll(PDO::FETCH_COLUMN)));
    }

    $pdo->beginTransaction();
    try {
        $questionStmt = $pdo->prepare("
            INSERT INTO simulado_questions (id, theme, stem, position)
            VALUES (:id, :theme, :stem, :position)
            ON DUPLICATE KEY UPDATE
                theme = VALUES(theme),
                stem = VALUES(stem),
                position = VALUES(position),
                active = 1,
                updated_at = CURRENT_TIMESTAMP
        ");
        $optionStmt = $pdo->prepare("
            INSERT INTO simulado_question_options
                (question_id, option_index, option_text, explanation, is_correct)
            VALUES
                (:question_id, :option_index, :option_text, :explanation, :is_correct)
            ON DUPLICATE KEY UPDATE
                option_text = VALUES(option_text),
                explanation = VALUES(explanation),
                is_correct = VALUES(is_correct),
                updated_at = CURRENT_TIMESTAMP
        ");

        foreach ($questions as $position => $question) {
            $questionId = (int) ($question['id'] ?? ($position + 1));
            if ($currentVersion !== '' && isset($existingIds[$questionId])) {
                continue;
            }

            $theme = trim((string) ($question['theme'] ?? 'Geral'));
            $questionStmt->execute([
                'id' => $questionId,
                'theme' => $theme,
                'stem' => improve_stem($theme, (string) ($question['stem'] ?? '')),
                'position' => $position + 1,
            ]);

            $correctIndex = (int) ($question['answer'] ?? -1);
            foreach (($question['options'] ?? []) as $index => $option) {
                $isCorrect = (int) $index === $correctIndex;
                $explanation = (string) ($question['explanations'][$index] ?? improve_explanation($theme, (string) $option, $isCorrect));
                $optionStmt->execute([
                    'question_id' => $questionId,
                    'option_index' => (int) $index,
                    'option_text' => (string) $option,
                    'explanation' => $explanation,
                    'is_correct' => $isCorrect ? 1 : 0,
                ]);
            }
        }

        $metaStmt = $pdo->prepare("
            INSERT INTO simulado_schema_meta (meta_key, meta_value)
            VALUES (:key, :value)
            ON DUPLICATE KEY UPDATE
                meta_value = VALUES(meta_value),
                updated_at = CURRENT_TIMESTAMP
        ");
        $metaStmt->execute([
            'key' => 'questions_seed_version',
            'value' => $seedVersion,
        ]);

        $pdo->commit();
    } catch (Throwable $e) {
        $pdo->rollBack();
        throw $e;
    }
}

function request_body(): array
{
    $body = json_decode(file_get_contents('php://input'), true);
    return is_array($body) ? $body : [];
}

function exam_options(): array
{
    return [
        'concepts' => [
            'label' => 'Bloco de conceitos',
            'question_ids' => range(201, 280),
        ],
        'general' => [
            'label' => 'Bloco geral',
        ],
        'macro_collections' => [
            'label' => 'Tema macro: Collections',
            'themes' => ['List', 'Map'],
        ],
        'macro_oo' => [
            'label' => 'Tema macro: Orientação a objetos',
            'themes' => ['Classe Abstrata', 'Interface'],
        ],
        'macro_architecture' => [
            'label' => 'Tema macro: Camadas, MVC e JDBC',
            'themes' => ['Arquitetura em Camadas', 'JDBC', 'MVC e Camadas'],
        ],
        'macro_quality' => [
            'label' => 'Tema macro: Qualidade de código',
            'themes' => ['Clean Code', 'Nomes, Métodos, Atributos e Comentários', 'Coesão e Acoplamento', 'Números Mágicos e Constantes'],
        ],
    ];
}

function normalize_exam_type(string $examType): string
{
    $examType = trim($examType);
    return isset(exam_options()[$examType]) ? $examType : 'general';
}

function exam_label(string $examType): string
{
    $options = exam_options();
    return (string) ($options[$examType]['label'] ?? $options['general']['label']);
}

function question_allowed_for_exam(array $question, string $examType): bool
{
    $options = exam_options();
    $config = $options[$examType] ?? $options['general'];
    if ($examType === 'general') {
        return true;
    }

    if (isset($config['question_ids'])) {
        return in_array((int) $question['id'], $config['question_ids'], true);
    }

    if (isset($config['themes'])) {
        return in_array((string) $question['theme'], $config['themes'], true);
    }

    return true;
}

function ranking(PDO $pdo): array
{
    $rows = $pdo->query("
        SELECT
            a.id,
            a.respondent_name,
            a.exam_type,
            a.exam_label,
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
        GROUP BY a.id, a.respondent_name, a.exam_type, a.exam_label, a.started_at, a.updated_at
        ORDER BY percent_correct DESC, correct_count DESC, answered_count DESC, a.updated_at ASC
        LIMIT 100
    ")->fetchAll();

    $position = 1;
    foreach ($rows as &$row) {
        $row['position'] = $position++;
        $row['id'] = (int) $row['id'];
        $row['exam_type'] = (string) ($row['exam_type'] ?? 'general');
        $row['exam_label'] = (string) ($row['exam_label'] ?? exam_label($row['exam_type']));
        $row['answered_count'] = (int) $row['answered_count'];
        $row['correct_count'] = (int) $row['correct_count'];
        $row['percent_correct'] = (float) $row['percent_correct'];
    }

    return $rows;
}

function questions(PDO $pdo, string $examType = 'general'): array
{
    $examType = normalize_exam_type($examType);
    $questionRows = $pdo->query("
        SELECT id, theme, stem
        FROM simulado_questions
        WHERE active = 1
        ORDER BY position ASC, id ASC
    ")->fetchAll();

    if ($questionRows === []) {
        return [];
    }

    $questionRows = array_values(array_filter(
        $questionRows,
        static fn(array $question): bool => question_allowed_for_exam($question, $examType)
    ));

    if ($questionRows === []) {
        return [];
    }

    $optionRows = $pdo->query("
        SELECT question_id, option_index, option_text
        FROM simulado_question_options
        ORDER BY question_id ASC, option_index ASC
    ")->fetchAll();

    $optionsByQuestion = [];
    foreach ($optionRows as $option) {
        $questionId = (int) $option['question_id'];
        $optionsByQuestion[$questionId][] = [
            'index' => (int) $option['option_index'],
            'text' => $option['option_text'],
        ];
    }

    $questions = array_map(static function (array $question) use ($optionsByQuestion): array {
        $id = (int) $question['id'];
        $options = $optionsByQuestion[$id] ?? [];
        shuffle($options);
        return [
            'id' => $id,
            'theme' => $question['theme'],
            'stem' => $question['stem'],
            'options' => $options,
        ];
    }, $questionRows);

    shuffle($questions);

    return $questions;
}

function answer_feedback(PDO $pdo, int $questionId, int $selectedAnswer): array
{
    $stmt = $pdo->prepare("
        SELECT option_index, option_text, explanation, is_correct
        FROM simulado_question_options
        WHERE question_id = :question_id
        ORDER BY option_index ASC
    ");
    $stmt->execute(['question_id' => $questionId]);
    $options = $stmt->fetchAll();

    if ($options === []) {
        json_response(['ok' => false, 'message' => 'Questão não encontrada.'], 404);
    }

    $correctAnswer = null;
    $selectedExists = false;
    $feedback = [];
    foreach ($options as $option) {
        $index = (int) $option['option_index'];
        $isCorrect = (int) $option['is_correct'] === 1;
        if ($index === $selectedAnswer) {
            $selectedExists = true;
        }
        if ($isCorrect) {
            $correctAnswer = $index;
        }
        $feedback[] = [
            'index' => $index,
            'text' => $option['option_text'],
            'explanation' => $option['explanation'],
            'is_correct' => $isCorrect,
            'selected' => $index === $selectedAnswer,
        ];
    }

    if (!$selectedExists || $correctAnswer === null) {
        json_response(['ok' => false, 'message' => 'Alternativa inválida.'], 422);
    }

    return [
        'selected_answer' => $selectedAnswer,
        'correct_answer' => $correctAnswer,
        'is_correct' => $selectedAnswer === $correctAnswer,
        'feedback' => $feedback,
    ];
}

function attempt_score(PDO $pdo, int $attemptId): array
{
    $stmt = $pdo->prepare("
        SELECT
            COUNT(*) AS answered_count,
            COALESCE(SUM(is_correct), 0) AS correct_count
        FROM simulado_answers
        WHERE attempt_id = :attempt_id
    ");
    $stmt->execute(['attempt_id' => $attemptId]);
    $row = $stmt->fetch() ?: ['answered_count' => 0, 'correct_count' => 0];

    return [
        'answered_count' => (int) $row['answered_count'],
        'correct_count' => (int) $row['correct_count'],
    ];
}

try {
    $pdo = db();
    $action = $_GET['action'] ?? '';

    if ($_SERVER['REQUEST_METHOD'] === 'GET' && $action === 'ranking') {
        json_response(['ok' => true, 'ranking' => ranking($pdo)]);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET' && $action === 'questions') {
        $examType = normalize_exam_type((string) ($_GET['exam_type'] ?? 'general'));
        json_response(['ok' => true, 'questions' => questions($pdo, $examType)]);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'start') {
        $body = request_body();
        $name = trim((string) ($body['name'] ?? ''));
        if ($name === '') {
            json_response(['ok' => false, 'message' => 'Informe o nome do respondente.'], 422);
        }

        $name = function_exists('mb_substr') ? mb_substr($name, 0, 120) : substr($name, 0, 120);
        $examType = normalize_exam_type((string) ($body['exam_type'] ?? 'general'));
        $examLabel = exam_label($examType);
        $selectedQuestions = questions($pdo, $examType);
        if ($selectedQuestions === []) {
            json_response(['ok' => false, 'message' => 'Nenhuma pergunta encontrada para este tipo de prova.'], 422);
        }

        $stmt = $pdo->prepare('
            INSERT INTO simulado_attempts (respondent_name, exam_type, exam_label)
            VALUES (:name, :exam_type, :exam_label)
        ');
        $stmt->execute([
            'name' => $name,
            'exam_type' => $examType,
            'exam_label' => $examLabel,
        ]);

        json_response([
            'ok' => true,
            'attempt_id' => (int) $pdo->lastInsertId(),
            'respondent_name' => $name,
            'exam_type' => $examType,
            'exam_label' => $examLabel,
            'questions' => $selectedQuestions,
        ]);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'answer') {
        $body = request_body();
        $attemptId = (int) ($body['attempt_id'] ?? 0);
        $questionId = (int) ($body['question_id'] ?? 0);
        $selectedAnswer = (int) ($body['selected_answer'] ?? -1);

        if ($attemptId <= 0 || $questionId <= 0 || $selectedAnswer < 0) {
            json_response(['ok' => false, 'message' => 'Dados de resposta inválidos.'], 422);
        }

        $attemptStmt = $pdo->prepare('SELECT id FROM simulado_attempts WHERE id = :id');
        $attemptStmt->execute(['id' => $attemptId]);
        if (!$attemptStmt->fetch()) {
            json_response(['ok' => false, 'message' => 'Tentativa não encontrada.'], 404);
        }

        $answer = answer_feedback($pdo, $questionId, $selectedAnswer);

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
            'correct_answer' => $answer['correct_answer'],
            'is_correct' => $answer['is_correct'] ? 1 : 0,
        ]);

        $pdo->prepare('UPDATE simulado_attempts SET updated_at = CURRENT_TIMESTAMP WHERE id = :id')
            ->execute(['id' => $attemptId]);

        json_response([
            'ok' => true,
            'answer' => $answer,
            'score' => attempt_score($pdo, $attemptId),
            'ranking' => ranking($pdo),
        ]);
    }

    json_response(['ok' => false, 'message' => 'Endpoint não encontrado.'], 404);
} catch (Throwable $e) {
    json_response(['ok' => false, 'message' => $e->getMessage()], 500);
}

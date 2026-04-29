<?php
declare(strict_types=1);

function concept_question_feedback(string $theme, string $stem, string $option, string $correctOption, bool $isCorrect): string
{
    $option = rtrim(trim($option), ". \t\n\r\0\x0B");
    $correctOption = rtrim(trim($correctOption), ". \t\n\r\0\x0B");

    if ($isCorrect) {
        return "Correta: {$option}. A alternativa define o conceito cobrado em '{$stem}' sem misturar responsabilidades ou APIs.";
    }

    return "Incorreta: {$option}. Para esta pergunta, a referência correta é '{$correctOption}'; a alternativa mistura conceitos ou desloca a responsabilidade para outro tema.";
}

function concept_questions(): array
{
    $specs = [
        [201, 'List', 'O que uma List representa em Java Collections?', ['Coleção ordenada por posição que pode aceitar elementos duplicados.', 'Estrutura chave-valor sem ordem posicional.', 'Coleção que nunca aceita elementos repetidos.', 'Classe exclusiva para conexão com banco.', 'Contrato de camada Controller.'], 0],
        [202, 'List', 'Qual é o papel do índice em uma List?', ['Identificar a posição de um elemento na sequência.', 'Definir a chave única de um Map.', 'Abrir uma transação JDBC.', 'Indicar a camada da arquitetura.', 'Substituir nomes de métodos.'], 0],
        [203, 'List', 'Qual diferença conceitual existe entre List e Set?', ['List preserva uma sequência posicional; Set representa conjunto sem duplicidade.', 'List sempre ordena alfabeticamente; Set sempre usa SQL.', 'List é camada de View; Set é camada Service.', 'List não aceita objetos; Set aceita apenas objetos.', 'Não existe diferença em Java.'], 0],
        [204, 'List', 'O que significa dizer que ArrayList tem bom acesso por índice?', ['Buscar elemento por posição costuma ser eficiente.', 'Inserir no começo nunca desloca elementos.', 'Cada elemento possui uma chave textual.', 'A lista é automaticamente sincronizada.', 'A classe é abstrata.'], 0],

        [205, 'Map', 'O que um Map representa?', ['Estrutura que associa chaves a valores.', 'Lista ordenada apenas por índice numérico.', 'Classe base para herança obrigatória.', 'Objeto visual de uma página HTML.', 'Comentário que explica regra de negócio.'], 0],
        [206, 'Map', 'Qual restrição conceitual existe para chaves em um Map?', ['Uma chave identifica no máximo um valor por vez.', 'Toda chave deve ser uma List.', 'Chaves nunca podem ser objetos.', 'Chaves são sempre ordenadas por inserção.', 'Chaves substituem métodos de Service.'], 0],
        [207, 'Map', 'Por que equals e hashCode importam em chaves de HashMap?', ['Porque definem igualdade lógica e localização da chave na estrutura.', 'Porque renderizam a View automaticamente.', 'Porque abrem e fecham conexões JDBC.', 'Porque tornam a classe obrigatoriamente abstrata.', 'Porque eliminam a necessidade de nomes claros.'], 0],
        [208, 'Map', 'Quando Map é mais adequado que List?', ['Quando a busca principal é por uma chave conhecida.', 'Quando a ordem posicional é a única informação relevante.', 'Quando se quer impedir qualquer valor duplicado.', 'Quando se precisa criar uma interface funcional.', 'Quando a regra pertence ao CSS.'], 0],

        [209, 'Clean Code', 'O que Clean Code prioriza?', ['Código claro, simples, coeso e fácil de manter.', 'Código com o menor número possível de caracteres.', 'Código com comentários em todas as linhas.', 'Código concentrado em uma única classe.', 'Código sem nomes de domínio.'], 0],
        [210, 'Clean Code', 'Qual é uma ideia central sobre métodos em Clean Code?', ['Métodos devem ter responsabilidade clara e nome coerente.', 'Métodos devem misturar persistência, tela e regra.', 'Métodos bons não precisam ter nomes expressivos.', 'Métodos devem receber sempre muitos parâmetros.', 'Métodos devem esconder erros em catch vazio.'], 0],
        [211, 'Clean Code', 'Qual é o problema de duplicação de código?', ['A mesma regra pode divergir quando uma mudança ocorre.', 'Aumenta automaticamente a coesão.', 'Garante melhor performance em qualquer cenário.', 'Substitui testes automatizados.', 'Transforma List em Map.'], 0],
        [212, 'Clean Code', 'Quando um comentário é útil?', ['Quando explica uma decisão ou contexto que o código não torna óbvio.', 'Quando repete exatamente o nome do método.', 'Quando contradiz a implementação.', 'Quando tenta compensar nomes ruins sem refatoração.', 'Quando descreve cada atribuição simples.'], 0],

        [213, 'Classe Abstrata', 'O que é uma classe abstrata?', ['Classe que pode reunir comportamento comum e exigir especializações.', 'Classe que só contém constantes public static final.', 'Classe que sempre pode ser instanciada diretamente.', 'Interface com estado obrigatório de instância.', 'Repository de banco de dados.'], 0],
        [214, 'Classe Abstrata', 'O que é um método abstrato?', ['Declaração sem corpo que deve ser implementada por subclasse concreta.', 'Método privado que sempre acessa JDBC.', 'Método que não pode ser sobrescrito.', 'Método que só existe em Controller.', 'Comentário com regra de negócio.'], 0],
        [215, 'Classe Abstrata', 'Quando uma classe abstrata costuma fazer sentido?', ['Quando há base comum real e pontos de variação nas subclasses.', 'Quando só se quer evitar criar bons nomes.', 'Quando não há relação entre as classes.', 'Quando a View precisa executar SQL.', 'Quando todos os métodos são utilitários sem estado.'], 0],
        [216, 'Classe Abstrata', 'Qual limitação uma classe abstrata possui?', ['Não pode ser instanciada diretamente.', 'Não pode ter construtor.', 'Não pode ter método concreto.', 'Não pode ter atributo.', 'Não pode participar de herança.'], 0],

        [217, 'Interface', 'O que uma interface define?', ['Um contrato de comportamento que classes podem implementar.', 'Uma tabela física de banco.', 'Uma lista de elementos duplicados.', 'Uma classe sempre instanciável.', 'Uma regra visual de CSS.'], 0],
        [218, 'Interface', 'Por que interfaces reduzem acoplamento?', ['Permitem depender de contratos em vez de implementações concretas.', 'Obrigam todo código a usar herança múltipla de classes.', 'Eliminam a necessidade de arquitetura.', 'Substituem nomes expressivos.', 'Fazem SQL ficar no Controller.'], 0],
        [219, 'Interface', 'O que é uma implementação de interface?', ['Classe que fornece o comportamento exigido pelo contrato.', 'Comentário que descreve um método.', 'Número literal sem nome.', 'Resultado de uma consulta JDBC.', 'Índice de uma List.'], 0],
        [220, 'Interface', 'Quando uma interface é coesa?', ['Quando seus métodos pertencem ao mesmo contrato ou papel.', 'Quando contém todos os métodos imagináveis do sistema.', 'Quando mistura View, banco e envio de e-mail.', 'Quando usa nomes genéricos para tudo.', 'Quando substitui todas as classes do domínio.'], 0],

        [221, 'Arquitetura em Camadas', 'Qual é o objetivo da arquitetura em camadas?', ['Separar responsabilidades para organizar mudanças e dependências.', 'Colocar toda regra no arquivo HTML.', 'Impedir criação de interfaces.', 'Fazer cada classe acessar diretamente todas as outras.', 'Trocar banco por comentário.'], 0],
        [222, 'Arquitetura em Camadas', 'Qual é o papel típico do Controller?', ['Receber entrada externa e delegar o caso de uso.', 'Executar toda consulta SQL manualmente.', 'Guardar estado principal do domínio.', 'Renderizar a regra de negócio dentro do banco.', 'Substituir Repository e Service.'], 0],
        [223, 'Arquitetura em Camadas', 'Qual é o papel típico do Service?', ['Concentrar orquestração e regras de aplicação.', 'Desenhar CSS da tela.', 'Representar exclusivamente uma linha do ResultSet.', 'Armazenar cada número mágico.', 'Ser apenas um alias de List.'], 0],
        [224, 'Arquitetura em Camadas', 'Qual é o papel típico do Repository?', ['Encapsular acesso a dados e persistência.', 'Receber clique do usuário diretamente.', 'Renderizar HTML.', 'Definir todos os nomes de métodos.', 'Substituir Model e View.'], 0],
        [225, 'Arquitetura em Camadas', 'O que é Model no contexto de uma aplicação em camadas?', ['Objeto que representa dados, estado ou conceito do domínio.', 'Arquivo CSS que define cores.', 'Controller que monta SQL.', 'Comentário obrigatório em cada método.', 'Constante numérica sem nome.'], 0],
        [226, 'Arquitetura em Camadas', 'Qual é o papel da View?', ['Apresentar dados e interação visual ao usuário.', 'Executar regra central de desconto.', 'Gerenciar transação JDBC.', 'Implementar todos os repositories.', 'Definir hashCode das chaves.'], 0],

        [227, 'JDBC', 'O que é JDBC?', ['API Java para acesso a bancos relacionais.', 'Coleção ordenada de objetos duplicados.', 'Princípio de nomeação de métodos.', 'Camada visual obrigatória.', 'Forma de declarar interface funcional.'], 0],
        [228, 'JDBC', 'O que Connection representa em JDBC?', ['Uma conexão com o banco de dados.', 'Uma alternativa de uma questão.', 'Um contrato de Service.', 'Uma classe abstrata de domínio.', 'Uma constante de regra.'], 0],
        [229, 'JDBC', 'Para que serve PreparedStatement?', ['Executar SQL parametrizado com mais segurança e clareza.', 'Substituir a camada View.', 'Guardar chaves e valores em memória.', 'Criar classe abstrata automaticamente.', 'Ordenar uma List.'], 0],
        [230, 'JDBC', 'O que ResultSet representa?', ['O cursor sobre linhas retornadas por uma consulta.', 'A lista de métodos de uma interface.', 'O controller de uma tela.', 'A constante de tempo de sessão.', 'Uma chave de HashMap.'], 0],

        [231, 'Nomes, Métodos, Atributos e Comentários', 'O que caracteriza um bom nome de método?', ['Comunica claramente a ação ou consulta realizada.', 'É sempre a menor abreviação possível.', 'Esconde o efeito colateral.', 'Mistura vários conceitos genéricos.', 'Repete o nome da classe sem contexto.'], 0],
        [232, 'Nomes, Métodos, Atributos e Comentários', 'O que caracteriza um bom nome de atributo?', ['Expressa o dado ou estado representado no domínio.', 'Usa letras soltas para economizar espaço.', 'Descreve uma camada sem relação com a classe.', 'Inclui SQL completo no nome.', 'Evita qualquer termo do domínio.'], 0],
        [233, 'Nomes, Métodos, Atributos e Comentários', 'Qual problema nomes genéricos como item, data e valor podem causar?', ['Podem esconder o significado real no contexto.', 'Sempre tornam o código mais limpo.', 'Impedem duplicação automaticamente.', 'Substituem testes.', 'Resolvem acoplamento alto.'], 0],
        [234, 'Nomes, Métodos, Atributos e Comentários', 'Qual comentário tende a ser ruim?', ['Comentário que apenas repete uma linha óbvia de código.', 'Comentário que explica uma regra legal complexa.', 'Comentário sobre limitação documentada de biblioteca.', 'Comentário que registra decisão arquitetural incomum.', 'Javadoc de API pública não trivial.'], 0],

        [235, 'Coesão e Acoplamento', 'O que é coesão?', ['Grau em que responsabilidades de uma unidade pertencem ao mesmo propósito.', 'Número de chaves dentro de um Map.', 'Quantidade de linhas retornadas pelo JDBC.', 'Forma de ordenar uma List.', 'Nome obrigatório de uma interface.'], 0],
        [236, 'Coesão e Acoplamento', 'O que é acoplamento?', ['Grau de dependência entre partes do sistema.', 'Regra que impede duplicidade em List.', 'Tipo de comentário de método.', 'Resultado de executeQuery.', 'Número mágico convertido em constante.'], 0],
        [237, 'Coesão e Acoplamento', 'O que indica baixa coesão?', ['Uma classe ter responsabilidades pouco relacionadas.', 'Uma classe ter métodos focados no mesmo caso de uso.', 'Um Repository encapsular persistência.', 'Um Service depender de interface.', 'Um nome deixar a intenção clara.'], 0],
        [238, 'Coesão e Acoplamento', 'O que indica acoplamento alto?', ['Muitas classes dependerem diretamente de detalhes concretos umas das outras.', 'Uso de contrato bem definido.', 'Responsabilidades pequenas e separadas.', 'Constantes nomeadas perto da regra.', 'View sem regra de negócio.'], 0],

        [239, 'Números Mágicos e Constantes', 'O que é número mágico?', ['Literal usado sem nome que esconde significado de regra.', 'Número zero em um contador óbvio.', 'Constante com nome e unidade claros.', 'Índice exibido de uma alternativa.', 'Código de status documentado por enum.'], 0],
        [240, 'Números Mágicos e Constantes', 'Por que extrair constantes ajuda?', ['Dá nome ao significado e facilita manutenção da regra.', 'Remove automaticamente todo acoplamento.', 'Substitui arquitetura em camadas.', 'Impede qualquer duplicidade em List.', 'Faz PreparedStatement desnecessário.'], 0],
    ];

    return array_map(static function (array $spec): array {
        [$id, $theme, $stem, $options, $answer] = $spec;
        $correctOption = $options[$answer];

        return [
            'id' => $id,
            'theme' => $theme,
            'stem' => $stem,
            'options' => $options,
            'answer' => $answer,
            'explanations' => array_map(
                static fn(string $option, int $index): string => concept_question_feedback($theme, $stem, $option, $correctOption, $index === $answer),
                $options,
                array_keys($options)
            ),
        ];
    }, $specs);
}

return concept_questions();

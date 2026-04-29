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

        [241, 'Java Básico', 'O que é Java?', ['Linguagem de programação orientada a objetos e plataforma de execução.', 'Banco de dados relacional embutido no navegador.', 'Editor de código exclusivo da Oracle.', 'Framework web que substitui todo backend.', 'Arquivo de configuração do Maven.'], 0],
        [242, 'Java Básico', 'O que é a JVM?', ['Máquina virtual que executa bytecode Java.', 'Biblioteca de componentes visuais do Spring.', 'Gerenciador de dependências do Maven.', 'Classe principal de qualquer projeto.', 'Banco usado automaticamente por JDBC.'], 0],
        [243, 'Java Básico', 'O que é bytecode em Java?', ['Código intermediário gerado pela compilação e executado pela JVM.', 'Código SQL escrito dentro do Repository.', 'Comentário especial de documentação.', 'Arquivo de propriedades do Spring Boot.', 'Método construtor de uma classe.'], 0],
        [244, 'Java Básico', 'Qual é a diferença conceitual entre JDK e JRE?', ['JDK inclui ferramentas de desenvolvimento; JRE é voltado à execução.', 'JRE compila código; JDK apenas abre IDE.', 'JDK é framework web; JRE é banco de dados.', 'Não há diferença entre eles.', 'JRE é usado apenas com Maven.'], 0],
        [245, 'Java Básico', 'O que é uma classe em Java?', ['Modelo que define atributos e comportamentos de objetos.', 'Valor fixo usado para substituir número mágico.', 'Arquivo de dependências do Maven.', 'Linha retornada por ResultSet.', 'Chave de um HashMap.'], 0],
        [246, 'Java Básico', 'O que é um objeto?', ['Instância de uma classe em tempo de execução.', 'Arquivo .java antes da compilação.', 'Pacote que agrupa classes.', 'Comando SQL parametrizado.', 'Anotação do Spring Boot.'], 0],
        [247, 'Java Básico', 'O que é um atributo de classe ou instância?', ['Dado que representa estado associado a uma classe ou objeto.', 'Ação executada por um método.', 'Dependência baixada pelo Maven.', 'Nome do pacote raiz.', 'Camada visual da aplicação.'], 0],
        [248, 'Java Básico', 'O que é um método em Java?', ['Bloco nomeado de comportamento que pode receber parâmetros e retornar valor.', 'Arquivo que agrupa dependências.', 'Instância de uma classe.', 'Pasta obrigatória do sistema operacional.', 'Tabela criada pelo JDBC.'], 0],
        [249, 'Java Básico', 'O que é um parâmetro de método?', ['Valor recebido pelo método para usar em sua execução.', 'Arquivo gerado pelo compilador.', 'Classe que inicia o Spring Boot.', 'Nome alternativo de package.', 'Conexão aberta com banco.'], 0],
        [250, 'Java Básico', 'O que é o tipo de retorno de um método?', ['Tipo do valor que o método promete devolver.', 'Nome do arquivo .java.', 'Configuração de porta do servidor.', 'Camada que chama o Repository.', 'Versão do Maven instalada.'], 0],
        [251, 'Java Básico', 'O que é um construtor?', ['Bloco usado para inicializar uma nova instância de uma classe.', 'Método que sempre retorna String.', 'Arquivo XML de dependências.', 'Interface de acesso ao banco.', 'Comentário obrigatório antes de cada classe.'], 0],
        [252, 'Java Básico', 'O que caracteriza sobrecarga de métodos?', ['Métodos com mesmo nome e listas de parâmetros diferentes.', 'Método sobrescrever implementação da superclasse.', 'Classe ter muitos atributos sem coesão.', 'Aplicação subir em duas portas.', 'Maven baixar duas versões iguais sempre.'], 0],
        [253, 'Java Básico', 'O que caracteriza sobrescrita de método?', ['Subclasse fornecer nova implementação para método herdado compatível.', 'Criar método com mesmo nome e parâmetros diferentes na mesma classe.', 'Trocar nome do package.', 'Adicionar dependência no pom.xml.', 'Criar uma nova tabela no banco.'], 0],
        [254, 'Java Básico', 'O que é encapsulamento?', ['Controlar acesso ao estado interno e expor operações adequadas.', 'Colocar todas as classes no mesmo arquivo.', 'Executar bytecode sem JVM.', 'Misturar View e Repository.', 'Baixar dependências automaticamente.'], 0],
        [255, 'Java Básico', 'O que é herança?', ['Mecanismo em que uma classe reutiliza e especializa comportamento de outra.', 'Associação de chaves e valores.', 'Arquivo de configuração do Maven.', 'Separação entre Controller e View.', 'Execução de query SQL.'], 0],
        [256, 'Java Básico', 'O que é polimorfismo?', ['Capacidade de tratar diferentes implementações por um mesmo contrato ou tipo base.', 'Uso exclusivo de números mágicos.', 'Map ordenado por chave.', 'Classe sem nenhum método.', 'Arquivo que instala uma IDE.'], 0],
        [257, 'Java Básico', 'O que significa public em Java?', ['Modificador que permite acesso amplo ao membro ou tipo.', 'Tipo primitivo para números inteiros.', 'Comando para iniciar Maven.', 'Anotação obrigatória do Spring.', 'Método que fecha conexão JDBC.'], 0],
        [258, 'Java Básico', 'O que significa private em Java?', ['Modificador que restringe acesso ao próprio tipo.', 'Classe que não pode ser instanciada.', 'Pacote padrão do Spring Boot.', 'Arquivo compilado pela JVM.', 'Dependência de teste.'], 0],
        [259, 'Java Básico', 'O que significa static?', ['Membro associado à classe, não a uma instância específica.', 'Método que nunca pode receber parâmetro.', 'Classe obrigatoriamente abstrata.', 'Objeto salvo em banco automaticamente.', 'Package importado por Maven.'], 0],
        [260, 'Java Básico', 'O que significa final em uma variável?', ['Depois de atribuída, a referência ou valor não pode ser reatribuído.', 'A variável vira pública automaticamente.', 'A variável é salva no banco.', 'A variável só existe em interfaces.', 'A variável passa a ser um método.'], 0],
        [261, 'Java Básico', 'O que é um package?', ['Agrupamento lógico de classes e interfaces por namespace.', 'Arquivo que executa bytecode.', 'Objeto criado por new.', 'Método especial de inicialização.', 'Tabela de ranking.'], 0],
        [262, 'Java Básico', 'Para que serve import em Java?', ['Permitir referenciar tipos de outros pacotes com nome mais curto.', 'Instalar biblioteca externa no Maven.', 'Criar construtor automaticamente.', 'Executar uma query SQL.', 'Transformar classe em interface.'], 0],
        [263, 'Java Básico', 'O que é uma exception?', ['Objeto que representa uma condição de erro ou fluxo excepcional.', 'Lista ordenada de elementos.', 'Classe que sempre compila sem JVM.', 'Arquivo de configuração do IDE.', 'Anotação do Maven.'], 0],
        [264, 'Java Básico', 'Qual é a ideia de try-catch?', ['Tentar executar um bloco e tratar exceções que possam ocorrer.', 'Criar uma classe e um package ao mesmo tempo.', 'Baixar dependências do Maven.', 'Definir endpoint REST automaticamente.', 'Transformar List em Map.'], 0],
        [265, 'Java Básico', 'O que é generics em Java?', ['Recurso para parametrizar tipos, como List<String>.', 'Comentário gerado pela IDE.', 'Tipo de banco de dados relacional.', 'Servidor embutido do Spring Boot.', 'Método construtor sem argumentos.'], 0],
        [266, 'Java Básico', 'O que é uma enum?', ['Tipo que representa conjunto fixo de constantes nomeadas.', 'Lista que aceita duplicados.', 'Classe que sempre acessa JDBC.', 'Arquivo de build do Maven.', 'Pacote da IDE.'], 0],
        [267, 'Java Básico', 'O que é uma anotação em Java?', ['Metadado associado ao código, como @Override ou @SpringBootApplication.', 'Valor obrigatório de todo atributo.', 'Tipo de loop.', 'Arquivo compilado pela JVM.', 'Número mágico extraído.'], 0],
        [268, 'Java Básico', 'O que é o método main?', ['Ponto de entrada tradicional de uma aplicação Java executável.', 'Construtor padrão de qualquer classe.', 'Arquivo que lista dependências Maven.', 'Interface principal de Repository.', 'Método que toda classe abstrata precisa ter.'], 0],
        [269, 'IDE e Ferramentas', 'O que é uma IDE?', ['Ambiente de desenvolvimento com editor, execução, depuração e apoio ao código.', 'Máquina virtual que executa bytecode.', 'Gerenciador de dependências obrigatório.', 'Classe Java compilada.', 'Banco relacional em memória.'], 0],
        [270, 'IDE e Ferramentas', 'O que é debug?', ['Processo de inspecionar a execução para entender e corrigir problemas.', 'Compilar bytecode para código nativo sempre.', 'Criar package automaticamente no Maven.', 'Baixar dependências do Spring.', 'Transformar classe em objeto.'], 0],
        [271, 'Maven', 'O que é Maven?', ['Ferramenta de build e gerenciamento de dependências para projetos Java.', 'Linguagem alternativa à Java.', 'IDE oficial do Spring.', 'Servidor de banco de dados.', 'Tipo de classe abstrata.'], 0],
        [272, 'Maven', 'O que é pom.xml?', ['Arquivo de configuração Maven com dependências, plugins e dados do projeto.', 'Classe principal da JVM.', 'Interface do Spring Boot.', 'Arquivo de bytecode.', 'Tabela criada pelo JDBC.'], 0],
        [273, 'Maven', 'O que é uma dependência em um projeto Maven?', ['Biblioteca externa declarada para ser usada pelo projeto.', 'Método chamado por herança.', 'Objeto criado por construtor.', 'Nome de package obrigatório.', 'Valor final de uma constante.'], 0],
        [274, 'Maven', 'O que é o ciclo de build?', ['Sequência de fases para limpar, compilar, testar e empacotar o projeto.', 'Ordem das alternativas de uma prova.', 'Fluxo de execução de um loop for.', 'Hierarquia de packages da IDE.', 'Conjunto de colunas do banco.'], 0],
        [275, 'Spring Boot', 'O que é Spring Boot?', ['Framework que facilita criar aplicações Spring com configuração inicial simplificada.', 'Máquina virtual que executa Java.', 'Gerenciador de dependências sem pom.xml.', 'Tipo primitivo da linguagem.', 'Comando SQL de criação de tabela.'], 0],
        [276, 'Spring Boot', 'O que é um starter no Spring Boot?', ['Dependência agregadora que reúne bibliotecas comuns para uma funcionalidade.', 'Método main gerado pelo compilador.', 'Construtor vazio obrigatório.', 'Classe que representa qualquer Map.', 'Arquivo que substitui a JVM.'], 0],
        [277, 'Spring Boot', 'O que é injeção de dependência?', ['Fornecer dependências a um objeto sem ele criar diretamente suas implementações.', 'Concatenar SQL com entrada do usuário.', 'Instalar uma IDE por Maven.', 'Transformar bytecode em código fonte.', 'Repetir métodos em várias classes.'], 0],
        [278, 'Spring Boot', 'O que é um bean no Spring?', ['Objeto gerenciado pelo container do Spring.', 'Linha retornada por ResultSet.', 'Arquivo .class gerado pelo javac.', 'Constante de enum.', 'Package raiz de uma aplicação.'], 0],
        [279, 'Spring Boot', 'Qual é o papel de @RestController?', ['Marcar classe que expõe endpoints HTTP retornando dados.', 'Declarar uma classe abstrata.', 'Configurar dependência Maven.', 'Criar uma List imutável.', 'Definir chave primária no banco.'], 0],
        [280, 'Spring Boot', 'O que é application.properties ou application.yml?', ['Arquivo de configuração da aplicação Spring Boot.', 'Arquivo obrigatório de bytecode.', 'Classe de teste unitário.', 'Anotação para sobrescrita.', 'Package padrão do Java.'], 0],
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

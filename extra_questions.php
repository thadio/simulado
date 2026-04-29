<?php
declare(strict_types=1);

function extra_question_feedback(string $theme, string $stem, string $option, string $correctOption, bool $isCorrect): string
{
    $option = rtrim(trim($option), ". \t\n\r\0\x0B");
    $correctOption = rtrim(trim($correctOption), ". \t\n\r\0\x0B");

    if ($isCorrect) {
        return "Correta: {$option}. Para '{$stem}', essa alternativa é a que melhor representa o conceito de {$theme} porque descreve o comportamento esperado sem exageros ou mistura de responsabilidades.";
    }

    return "Incorreta: {$option}. Nesta questão sobre {$theme}, a referência correta é '{$correctOption}'; esta alternativa confunde o conceito, desloca a responsabilidade ou afirma algo que a API/prática não garante.";
}

function extra_questions(): array
{
    $specs = [
        [101, 'List', 'Qual implementação de List é mais indicada quando predominam leituras por índice?', ['LinkedList, porque cada acesso por índice é direto.', 'ArrayList, porque usa array interno e tem acesso posicional eficiente.', 'HashSet, porque mantém índices numéricos.', 'TreeMap, porque ordena posições automaticamente.', 'Queue, porque permite buscar qualquer índice em O(1).'], 1],
        [102, 'List', 'O que acontece ao chamar add(elemento) em uma ArrayList sem informar índice?', ['O elemento é inserido no fim da lista.', 'O elemento substitui a posição zero.', 'A lista é ordenada automaticamente.', 'A operação falha se já existir elemento igual.', 'A lista se torna imutável.'], 0],
        [103, 'List', 'Qual afirmação sobre ListIterator está correta?', ['Permite apenas percorrer para frente.', 'Pode percorrer nos dois sentidos e alterar a lista de forma controlada.', 'É exclusivo de HashMap.', 'Sempre cria uma cópia imutável da lista.', 'Impede qualquer chamada a remove().'], 1],
        [104, 'List', 'Por que remover por índice em uma ArrayList pode custar O(n)?', ['Porque elementos posteriores podem precisar ser deslocados.', 'Porque a JVM sempre faz consulta SQL.', 'Porque ArrayList não permite remoção.', 'Porque o índice precisa ser uma String.', 'Porque o método remove é abstrato.'], 0],
        [105, 'List', 'Qual chamada verifica se uma List possui determinado elemento?', ['exists(elemento)', 'has(elemento)', 'contains(elemento)', 'findKey(elemento)', 'includeIndex(elemento)'], 2],
        [106, 'List', 'Qual cuidado existe ao usar Arrays.asList(...) em Java?', ['A lista resultante tem tamanho fixo em relação ao array original.', 'A lista sempre é thread-safe.', 'A lista nunca permite set().', 'A lista sempre é vazia.', 'A lista converte tudo para String.'], 0],
        [107, 'List', 'Qual opção cria uma cópia mutável a partir de uma lista existente?', ['List.copyOf(lista)', 'Collections.unmodifiableList(lista)', 'new ArrayList<>(lista)', 'List.of(lista)', 'lista.stream() sem collect'], 2],
        [108, 'List', 'Qual método retorna a quantidade de elementos de uma List?', ['length()', 'size()', 'countRows()', 'capacity()', 'totalIndex()'], 1],
        [109, 'List', 'Qual comparação é adequada para verificar igualdade lógica entre duas listas?', ['Usar == sempre.', 'Usar equals(), considerando ordem e elementos.', 'Comparar apenas size().', 'Comparar apenas hashCode().', 'Converter para Map obrigatoriamente.'], 1],
        [110, 'List', 'Quando LinkedList pode ser uma escolha razoável?', ['Quando há muitas operações nas extremidades e uso como deque.', 'Quando todo acesso é aleatório por índice.', 'Quando é necessário chave-valor.', 'Quando a lista precisa ser sempre imutável.', 'Quando se quer impedir null por padrão.'], 0],

        [111, 'Map', 'Qual método retorna um valor padrão quando a chave não existe?', ['getOrDefault()', 'defaultValue()', 'findOrCreate()', 'containsDefault()', 'getElseThrowAlways()'], 0],
        [112, 'Map', 'O que keySet() retorna em um Map?', ['Uma visão das chaves do mapa.', 'Uma cópia obrigatoriamente imutável dos valores.', 'Uma lista ordenada de pares.', 'A conexão JDBC do mapa.', 'O valor da primeira chave.'], 0],
        [113, 'Map', 'Qual método é mais adequado para iterar chaves e valores juntos?', ['entrySet()', 'onlyKeys()', 'size()', 'clear()', 'hashCode()'], 0],
        [114, 'Map', 'Em HashMap, qual requisito é importante para uma chave personalizada?', ['Implementar equals e hashCode de forma consistente.', 'Ser obrigatoriamente final e abstrata.', 'Estender ArrayList.', 'Ter todos os campos públicos.', 'Implementar JDBC.'], 0],
        [115, 'Map', 'Qual implementação de Map é sincronizada por métodos historicamente?', ['HashMap', 'TreeMap', 'Hashtable', 'LinkedHashMap', 'EnumMap'], 2],
        [116, 'Map', 'Qual implementação costuma ser eficiente para chaves enum?', ['EnumMap', 'WeakHashMap', 'TreeMap obrigatório', 'ArrayList', 'LinkedList'], 0],
        [117, 'Map', 'O que computeIfAbsent pode fazer?', ['Criar e associar um valor quando a chave ainda não possui valor.', 'Remover todas as chaves ausentes.', 'Ordenar o mapa por valor.', 'Transformar Map em List imutável.', 'Fechar conexões JDBC.'], 0],
        [118, 'Map', 'Qual afirmação sobre valores em HashMap é correta?', ['Valores precisam ser únicos.', 'Valores podem se repetir.', 'Valores são sempre ordenados.', 'Valores nunca podem ser null.', 'Valores precisam ser chaves também.'], 1],
        [119, 'Map', 'Qual método remove uma entrada por chave?', ['deleteValue()', 'remove(chave)', 'dropKey()', 'clear(chave)', 'exclude()'], 1],
        [120, 'Map', 'Qual risco existe ao iterar um HashMap esperando ordem fixa?', ['HashMap não garante ordem de iteração.', 'HashMap sempre ordena alfabeticamente.', 'HashMap não aceita iteração.', 'HashMap só tem uma chave.', 'HashMap transforma chaves em índices.'], 0],

        [121, 'Classe Abstrata', 'Qual membro uma classe abstrata pode declarar?', ['Apenas métodos abstratos.', 'Campos, construtores e métodos concretos ou abstratos.', 'Somente constantes public static final.', 'Somente métodos privados.', 'Somente métodos static.'], 1],
        [122, 'Classe Abstrata', 'O que acontece se uma subclasse não implementar todos os métodos abstratos herdados?', ['Ela também deve ser declarada abstrata.', 'Ela vira interface automaticamente.', 'Ela compila como classe concreta normal.', 'Ela remove os métodos herdados.', 'Ela passa a ser final.'], 0],
        [123, 'Classe Abstrata', 'Qual modificador não combina com uma classe abstrata top-level?', ['public', 'abstract', 'final', 'package-private', 'Nenhum modificador explícito'], 2],
        [124, 'Classe Abstrata', 'Por que um construtor de classe abstrata pode existir?', ['Para inicializar estado comum usado por subclasses.', 'Para permitir new direto da classe abstrata.', 'Para substituir todos os métodos abstratos.', 'Para impedir herança.', 'Para criar uma tabela automaticamente.'], 0],
        [125, 'Classe Abstrata', 'Qual uso tende a ser inadequado para classe abstrata?', ['Representar base comum real entre subclasses.', 'Forçar herança apenas para reutilizar um método utilitário isolado.', 'Definir método template com passos especializados.', 'Guardar estado comum protegido por encapsulamento.', 'Compartilhar invariantes de domínio.'], 1],
        [126, 'Classe Abstrata', 'Qual relação é exigida por extends em classe abstrata?', ['A subclasse herda da classe abstrata.', 'A subclasse implementa múltiplas classes abstratas.', 'A classe abstrata vira enum.', 'A classe abstrata deixa de ter construtor.', 'A subclasse perde seus campos.'], 0],
        [127, 'Classe Abstrata', 'Um método concreto em classe abstrata serve para:', ['Fornecer comportamento comum às subclasses.', 'Impedir qualquer sobrescrita em Java.', 'Criar automaticamente uma interface.', 'Substituir o compilador.', 'Executar somente SQL.'], 0],
        [128, 'Classe Abstrata', 'Qual alternativa descreve melhor o padrão Template Method?', ['Classe base define esqueleto do algoritmo e subclasses completam passos.', 'Cada classe copia todo o algoritmo sem herança.', 'Controller executa SQL diretamente.', 'Map ordena todas as regras de negócio.', 'Interface armazena estado de instância obrigatório.'], 0],
        [129, 'Classe Abstrata', 'Qual visibilidade costuma ser útil para estado acessado por subclasses com cuidado?', ['protected', 'always public', 'private top-level', 'native', 'transient obrigatório'], 0],
        [130, 'Classe Abstrata', 'Qual frase é verdadeira sobre métodos abstratos?', ['Não podem ter corpo na própria declaração abstrata.', 'Devem ser static.', 'Devem ser private para polimorfismo.', 'Sempre retornam void.', 'Só existem em interfaces.'], 0],

        [131, 'Interface', 'Qual afirmação sobre constantes em interface é correta?', ['Campos são public static final por padrão.', 'Campos são sempre privados de instância.', 'Campos exigem construtor.', 'Campos podem mudar por objeto.', 'Campos substituem atributos de entidade.'], 0],
        [132, 'Interface', 'Uma interface funcional possui:', ['Exatamente um método abstrato.', 'Nenhum método.', 'Apenas métodos private.', 'Dois construtores.', 'Um campo de instância obrigatório.'], 0],
        [133, 'Interface', 'Qual anotação ajuda a documentar uma interface funcional?', ['@FunctionalInterface', '@AbstractClass', '@RepositoryOnly', '@ListValue', '@SqlMap'], 0],
        [134, 'Interface', 'Por que interfaces favorecem testes?', ['Permitem substituir implementações reais por fakes ou mocks.', 'Eliminam a necessidade de assertivas.', 'Obrigam teste manual.', 'Impedem injeção de dependência.', 'Executam banco em memória automaticamente.'], 0],
        [135, 'Interface', 'Qual risco existe em interface muito grande?', ['Clientes passam a depender de métodos que não usam.', 'A interface fica mais coesa automaticamente.', 'Java proíbe compilação sempre.', 'Ela vira classe abstrata.', 'Ela impede qualquer implementação.'], 0],
        [136, 'Interface', 'Qual princípio está relacionado a interfaces pequenas e específicas?', ['Interface Segregation Principle.', 'Single Table Principle.', 'Magic Number Principle.', 'Hash Collision Principle.', 'Controller First Principle.'], 0],
        [137, 'Interface', 'Default methods foram introduzidos principalmente para:', ['Adicionar comportamento padrão sem quebrar implementações existentes.', 'Permitir estado mutável obrigatório.', 'Substituir classes concretas sempre.', 'Remover public dos métodos.', 'Impedir polimorfismo.'], 0],
        [138, 'Interface', 'Qual alternativa mostra dependência por contrato?', ['private final UsuarioRepository repository;', 'new UsuarioRepositoryJdbc() espalhado em todos os métodos.', 'Controller monta SQL em String.', 'View instancia Connection.', 'Model conhece HTML.'], 0],
        [139, 'Interface', 'Uma classe que implementa uma interface deve:', ['Fornecer implementação para métodos abstratos ou ser abstrata.', 'Ser sempre final.', 'Ter o mesmo nome da interface.', 'Usar JDBC obrigatoriamente.', 'Declarar todos os métodos como static.'], 0],
        [140, 'Interface', 'Qual é uma boa prática ao nomear interface de domínio?', ['Usar nome que represente o contrato, como Notificador ou PedidoRepository.', 'Usar sempre I antes de qualquer nome sem pensar no padrão do projeto.', 'Usar nomes genéricos como Coisa.', 'Usar nomes de tabelas físicas sempre.', 'Usar números mágicos no nome.'], 0],

        [141, 'Arquitetura em Camadas', 'Onde deve ficar uma regra como calcular desconto de pedido?', ['Service ou domínio, conforme desenho da aplicação.', 'Controller de forma obrigatória.', 'Arquivo CSS.', 'Script SQL concatenado na tela.', 'View HTML.'], 0],
        [142, 'Arquitetura em Camadas', 'Qual camada recebe dados externos e adapta para o caso de uso?', ['Controller', 'Repository', 'Banco', 'Entidade pura sempre', 'Driver JDBC'], 0],
        [143, 'Arquitetura em Camadas', 'Qual camada encapsula consultas e comandos de persistência?', ['Repository/DAO', 'View', 'Controller visual', 'DTO de entrada', 'Arquivo README'], 0],
        [144, 'Arquitetura em Camadas', 'Por que evitar SQL no Controller?', ['Porque mistura transporte, regra e persistência, aumentando acoplamento.', 'Porque Java não permite String no Controller.', 'Porque Repository não pode existir.', 'Porque SQL só roda em interface.', 'Porque List deixa de aceitar duplicados.'], 0],
        [145, 'Arquitetura em Camadas', 'Qual objeto costuma transportar dados entre camadas ou pela API?', ['DTO', 'CSS', 'DriverManager', 'Hash collision', 'Magic number'], 0],
        [146, 'Arquitetura em Camadas', 'O que caracteriza um Service coeso?', ['Métodos relacionados a um caso de uso ou regra de negócio.', 'Responsabilidade por renderizar todas as telas.', 'Abrir conexão JDBC em cada Controller.', 'Misturar login, PDF, imposto e CSS sem relação.', 'Guardar constantes sem nome.'], 0],
        [147, 'Arquitetura em Camadas', 'Qual dependência tende a ser inadequada?', ['Repository chamando Controller.', 'Controller chamando Service.', 'Service chamando Repository.', 'View exibindo dados preparados.', 'Repository usando driver de banco.'], 0],
        [148, 'Arquitetura em Camadas', 'Qual benefício vem de Repository como interface?', ['Trocar JDBC por JPA ou implementação fake com menor impacto.', 'Eliminar regra de negócio.', 'Impedir testes unitários.', 'Forçar Controller gigante.', 'Fazer o banco chamar a View.'], 0],
        [149, 'Arquitetura em Camadas', 'Qual sintoma indica vazamento de responsabilidade?', ['View contendo regra de cálculo de desconto.', 'Service validando regra de domínio.', 'Repository executando SELECT.', 'Controller recebendo requisição.', 'DTO carregando campos de entrada.'], 0],
        [150, 'Arquitetura em Camadas', 'Em uma aplicação simples, camadas ainda ajudam porque:', ['Organizam mudanças e deixam responsabilidades mais claras.', 'Obrigam duplicar todo código.', 'Eliminam necessidade de nomes bons.', 'Substituem banco de dados.', 'Fazem toda classe ser abstrata.'], 0],

        [151, 'JDBC', 'Qual classe costuma fornecer conexões JDBC simples?', ['DriverManager', 'ArrayList', 'HashSet', 'ThreadLocalRandom', 'StringBuilder'], 0],
        [152, 'JDBC', 'Qual chamada avança para a próxima linha de um ResultSet?', ['next()', 'move()', 'advanceRow()', 'get()', 'fetchKey()'], 0],
        [153, 'JDBC', 'Qual método confirma manualmente uma transação quando autoCommit está falso?', ['commit()', 'save()', 'flushHtml()', 'executeQuery()', 'closeOnly()'], 0],
        [154, 'JDBC', 'Qual método desfaz alterações pendentes em uma transação?', ['rollback()', 'undoList()', 'clearMap()', 'revertClass()', 'cancelView()'], 0],
        [155, 'JDBC', 'Por que não concatenar entrada do usuário em SQL?', ['Aumenta risco de SQL Injection.', 'Impede uso de List.', 'Transforma SELECT em classe abstrata.', 'Remove o driver JDBC.', 'Garante ordenação natural.'], 0],
        [156, 'JDBC', 'Qual chamada em PreparedStatement define um parâmetro String?', ['setString(indice, valor)', 'putString(chave, valor)', 'addString(valor)', 'bindMap(valor)', 'setTextOnly(valor)'], 0],
        [157, 'JDBC', 'Qual índice é usado nos parâmetros de PreparedStatement?', ['Começa em 1.', 'Começa em 0 sempre.', 'Começa em -1.', 'Usa letras obrigatoriamente.', 'Não existe índice.'], 0],
        [158, 'JDBC', 'Qual prática melhora liberação de Connection, PreparedStatement e ResultSet?', ['try-with-resources', 'Variáveis globais estáticas mutáveis', 'Ignorar close()', 'Finalizer manual', 'Thread.sleep após consulta'], 0],
        [159, 'JDBC', 'Qual resultado executeUpdate normalmente retorna?', ['Quantidade de linhas afetadas.', 'Um ResultSet obrigatório.', 'Uma interface funcional.', 'Uma List ordenada por padrão.', 'A senha do banco.'], 0],
        [160, 'JDBC', 'Onde tratar SQLException de forma adequada?', ['Em camada de persistência ou tradução de erro coerente com a arquitetura.', 'Sempre escondendo sem log ou contexto.', 'Dentro do CSS.', 'Na entidade sem relação com banco.', 'Na interface de usuário como SQL bruto.'], 0],

        [161, 'Clean Code', 'Qual sinal indica método com responsabilidade demais?', ['Ele valida entrada, acessa banco, envia e-mail e renderiza tela.', 'Ele tem nome claro e pequeno.', 'Ele chama uma dependência por interface.', 'Ele usa constante nomeada.', 'Ele retorna um valor simples.'], 0],
        [162, 'Clean Code', 'Qual refatoração reduz duplicação de regra?', ['Extrair método ou serviço compartilhado quando a regra é a mesma.', 'Copiar o bloco para mais classes.', 'Trocar nomes claros por abreviações.', 'Adicionar comentário repetindo o código.', 'Espalhar números mágicos.'], 0],
        [163, 'Clean Code', 'Qual nome comunica melhor uma regra de negócio?', ['validarLimiteCredito()', 'x()', 'fazTudo()', 'metodo2()', 'proc()'], 0],
        [164, 'Clean Code', 'Qual comentário agrega valor?', ['Explicar uma limitação externa que não aparece no código.', 'Repetir que i++ incrementa i.', 'Dizer que getNome retorna nome quando isso já é óbvio.', 'Compensar método confuso sem refatorar.', 'Descrever cada linha simples.'], 0],
        [165, 'Clean Code', 'Qual prática deixa erro mais compreensível?', ['Mensagens e exceções com contexto relevante.', 'catch vazio.', 'Retornar null sem contrato.', 'Ignorar falhas silenciosamente.', 'Usar código genérico ERRO1 sempre.'], 0],
        [166, 'Clean Code', 'Qual alternativa melhora leitura de uma condição complexa?', ['Extrair predicados com nomes claros.', 'Adicionar mais operadores sem quebra.', 'Usar números sem nome.', 'Colocar tudo em uma linha enorme.', 'Trocar nomes por letras.'], 0],
        [167, 'Clean Code', 'Qual abordagem é melhor para parâmetros demais?', ['Criar objeto de parâmetro ou rever a responsabilidade.', 'Adicionar mais parâmetros sem análise.', 'Usar Object para tudo.', 'Guardar tudo em variáveis globais.', 'Concatenar em String única.'], 0],
        [168, 'Clean Code', 'Qual escolha evita surpresa no código?', ['Método fazer exatamente o que o nome promete.', 'Método salvarUsuario também apagar pedidos.', 'Getter alterar banco.', 'Validação depender de número mágico oculto.', 'Comentário contradizer implementação.'], 0],
        [169, 'Clean Code', 'Qual métrica isolada não garante Clean Code?', ['Quantidade de linhas apenas.', 'Legibilidade.', 'Baixo acoplamento.', 'Coesão.', 'Testabilidade.'], 0],
        [170, 'Clean Code', 'Qual atitude é coerente ao encontrar código difícil de testar?', ['Reduzir acoplamento e separar responsabilidades.', 'Adicionar sleeps nos testes.', 'Misturar mais camadas.', 'Remover nomes expressivos.', 'Colocar tudo como static global.'], 0],

        [171, 'Nomes, Métodos, Atributos e Comentários', 'Qual nome de variável é mais expressivo para dias de atraso?', ['diasAtraso', 'd', 'x1', 'valor', 'tmp'], 0],
        [172, 'Nomes, Métodos, Atributos e Comentários', 'Qual nome de método indica claramente efeito colateral?', ['enviarEmailConfirmacao()', 'email()', 'dados()', 'ok()', 'valor()'], 0],
        [173, 'Nomes, Métodos, Atributos e Comentários', 'Qual atributo combina com uma classe Pedido?', ['dataCriacao', 'controllerHtml', 'sqlCompletoDaTela', 'corBotaoPrincipal', 'driverConnectionGlobal'], 0],
        [174, 'Nomes, Métodos, Atributos e Comentários', 'Quando uma abreviação é aceitável?', ['Quando é comum no domínio e entendida pela equipe.', 'Sempre que economizar caracteres.', 'Quando esconder regra de negócio.', 'Quando substituir documentação necessária.', 'Quando tornar nomes ambíguos.'], 0],
        [175, 'Nomes, Métodos, Atributos e Comentários', 'Qual nome evita booleano ambíguo?', ['isPagamentoAprovado()', 'pagamento()', 'status()', 'x()', 'faz()'], 0],
        [176, 'Nomes, Métodos, Atributos e Comentários', 'Qual comentário deve ser evitado?', ['Comentário que contradiz ou repete código simples.', 'Comentário sobre decisão arquitetural incomum.', 'Comentário sobre bug de biblioteca externa documentado.', 'Javadoc de API pública complexa.', 'Nota sobre regra legal pouco óbvia.'], 0],
        [177, 'Nomes, Métodos, Atributos e Comentários', 'Qual nome de classe é mais claro para persistência de usuários?', ['UsuarioRepository', 'Coisa', 'Manager2', 'DadosX', 'FazTudo'], 0],
        [178, 'Nomes, Métodos, Atributos e Comentários', 'Qual prática melhora comentários existentes?', ['Remover comentários óbvios e melhorar nomes do código.', 'Adicionar comentário em cada linha.', 'Manter comentário desatualizado.', 'Trocar nomes bons por siglas.', 'Duplicar explicação sem contexto.'], 0],
        [179, 'Nomes, Métodos, Atributos e Comentários', 'Qual método parece consulta sem alterar estado?', ['buscarUsuarioPorId()', 'excluirUsuario()', 'salvarUsuario()', 'enviarEmail()', 'atualizarSenha()'], 0],
        [180, 'Nomes, Métodos, Atributos e Comentários', 'Qual problema existe em nomes genéricos como data ou info?', ['Podem esconder significado específico do domínio.', 'Sempre melhoram encapsulamento.', 'Impedem compilação.', 'Criam interface automaticamente.', 'Eliminam comentários ruins.'], 0],

        [181, 'Coesão e Acoplamento', 'Qual classe tende a ter alta coesão?', ['CalculadoraFrete com regras de frete.', 'SistemaUtil com login, banco, PDF e layout.', 'Controller que monta SQL e HTML.', 'Entidade que envia e-mail diretamente.', 'Repository que valida clique do usuário.'], 0],
        [182, 'Coesão e Acoplamento', 'Qual exemplo mostra acoplamento concreto alto?', ['Service instanciando new UsuarioRepositoryJdbc() diretamente.', 'Service recebendo UsuarioRepository por interface.', 'Repository encapsulando SQL.', 'Controller delegando ao Service.', 'View exibindo dados.'], 0],
        [183, 'Coesão e Acoplamento', 'Qual técnica reduz acoplamento em testes?', ['Injeção de dependência.', 'Variável global mutável.', 'SQL no Controller.', 'Classe utilitária gigante.', 'Número mágico.'], 0],
        [184, 'Coesão e Acoplamento', 'Qual mudança indica baixa coesão?', ['Alterar uma classe por motivos sem relação entre si.', 'Alterar Service por mudança de regra de negócio.', 'Alterar Repository por mudança no SQL.', 'Alterar View por mudança visual.', 'Alterar DTO por campo de entrada.'], 0],
        [185, 'Coesão e Acoplamento', 'Qual relação é mais saudável?', ['Service depende de contrato de Repository.', 'Repository depende da View.', 'Model depende do Controller.', 'Banco depende do CSS.', 'Interface depende de classe concreta específica.'], 0],
        [186, 'Coesão e Acoplamento', 'Qual efeito comum do acoplamento alto?', ['Mudanças pequenas causam efeitos colaterais em muitas partes.', 'Testes ficam automaticamente simples.', 'Código fica obrigatoriamente mais legível.', 'Responsabilidades se separam sozinhas.', 'Interfaces deixam de compilar.'], 0],
        [187, 'Coesão e Acoplamento', 'Qual pergunta ajuda a avaliar coesão?', ['Os métodos da classe trabalham para a mesma responsabilidade?', 'A classe tem o maior número possível de métodos?', 'A classe acessa todas as camadas?', 'A classe evita nomes claros?', 'A classe usa números mágicos?'], 0],
        [188, 'Coesão e Acoplamento', 'Qual pergunta ajuda a avaliar acoplamento?', ['Quantas partes concretas precisam mudar junto com esta classe?', 'Qual é a cor da tela?', 'Quantos comentários existem por linha?', 'A lista tem duplicados?', 'O método retorna void?'], 0],
        [189, 'Coesão e Acoplamento', 'Qual refatoração melhora uma classe Deus?', ['Dividir responsabilidades em componentes coesos.', 'Adicionar mais métodos nela.', 'Renomear para Util.', 'Tornar todos os membros static.', 'Adicionar comentários repetitivos.'], 0],
        [190, 'Coesão e Acoplamento', 'Qual princípio se relaciona diretamente com motivo único de mudança?', ['Single Responsibility Principle.', 'Magic Number Rule.', 'HashMap Ordering Rule.', 'JDBC Commit Rule.', 'Array Capacity Rule.'], 0],

        [191, 'Números Mágicos e Constantes', 'Qual exemplo mostra número mágico?', ['if (tentativas > 3) sem explicar o 3.', 'if (tentativas > MAX_TENTATIVAS_LOGIN).', 'Duration.ofMinutes(TEMPO_EXPIRACAO_MINUTOS).', 'private static final int IDADE_MINIMA = 18.', 'usar enum para status.'], 0],
        [192, 'Números Mágicos e Constantes', 'Qual constante tem unidade clara?', ['TEMPO_EXPIRACAO_MS', 'TEMPO', 'VALOR', 'X', 'N'], 0],
        [193, 'Números Mágicos e Constantes', 'Por que incluir unidade no nome da constante?', ['Evita confusão entre segundos, minutos e milissegundos.', 'Faz Java compilar mais rápido sempre.', 'Transforma int em String.', 'Remove necessidade de testes.', 'Impede uso de métodos.'], 0],
        [194, 'Números Mágicos e Constantes', 'Qual literal costuma ser aceitável sem constante?', ['0 ou 1 em contadores simples e óbvios.', 'Código de regra fiscal complexo.', 'Tempo de expiração de sessão.', 'Limite de tentativas de login.', 'Percentual de desconto promocional.'], 0],
        [195, 'Números Mágicos e Constantes', 'Qual refatoração melhora if (idade >= 18)?', ['Extrair IDADE_MINIMA_MAIORIDADE se o 18 representa regra de domínio.', 'Trocar 18 por 19 sem nome.', 'Adicionar comentário e duplicar em todos os lugares.', 'Mover o número para a View.', 'Concatenar o número em SQL.'], 0],
        [196, 'Números Mágicos e Constantes', 'Onde uma constante deve morar preferencialmente?', ['Perto da regra ou em tipo de domínio coerente.', 'Em qualquer classe aleatória.', 'Somente em comentário.', 'No CSS sempre.', 'Em variável local chamada x.'], 0],
        [197, 'Números Mágicos e Constantes', 'Qual risco existe ao duplicar o mesmo número mágico?', ['Uma mudança futura pode atualizar um ponto e esquecer outro.', 'O compilador sempre recusa.', 'O Map perde chaves.', 'A interface vira classe final.', 'O JDBC fecha sozinho.'], 0],
        [198, 'Números Mágicos e Constantes', 'Qual alternativa expressa melhor uma regra de desconto?', ['private static final BigDecimal DESCONTO_CLIENTE_VIP = ...', 'BigDecimal x = ...', 'double valor = 0.13 espalhado no código', 'int n = 2', 'String regra = "valor" sem contexto'], 0],
        [199, 'Números Mágicos e Constantes', 'Qual nome de constante evita ambiguidade?', ['LIMITE_MAXIMO_ITENS_CARRINHO', 'MAX', 'VAL', 'NUM', 'CONFIG'], 0],
        [200, 'Números Mágicos e Constantes', 'Quando um número mágico vira problema de manutenção?', ['Quando representa regra que pode mudar ou precisa ser entendida.', 'Quando aparece como incremento i++ simples.', 'Quando está em teste com nome claro explicando o cenário.', 'Quando é zero em comparação óbvia.', 'Quando faz parte de API bem documentada e nomeada.'], 0],
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
                static fn(string $option, int $index): string => extra_question_feedback($theme, $stem, $option, $correctOption, $index === $answer),
                $options,
                array_keys($options)
            ),
        ];
    }, $specs);
}

return extra_questions();

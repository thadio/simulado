const QUESTIONS = [
  {
    "id": 1,
    "theme": "List",
    "stem": "Qual característica define corretamente uma List em Java?",
    "options": [
      "Não permite elementos duplicados.",
      "Mantém uma sequência ordenada de inserção/acesso.",
      "Armazena pares chave-valor.",
      "É sempre imutável.",
      "Só aceita tipos primitivos."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Não permite elementos duplicados. — não corresponde ao comportamento/conceito correto em List.",
      "Correta: Mantém uma sequência ordenada de inserção/acesso. — esta alternativa expressa o conceito técnico adequado para o tema List.",
      "Incorreta: Armazena pares chave-valor. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: É sempre imutável. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Só aceita tipos primitivos. — não corresponde ao comportamento/conceito correto em List."
    ]
  },
  {
    "id": 2,
    "theme": "List",
    "stem": "Em um ArrayList, qual operação tende a ser O(1) em média?",
    "options": [
      "Inserção no início.",
      "Remoção no meio.",
      "Acesso por índice.",
      "Busca por valor sem índice.",
      "Ordenação automática."
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: Inserção no início. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Remoção no meio. — não corresponde ao comportamento/conceito correto em List.",
      "Correta: Acesso por índice. — esta alternativa expressa o conceito técnico adequado para o tema List.",
      "Incorreta: Busca por valor sem índice. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Ordenação automática. — não corresponde ao comportamento/conceito correto em List."
    ]
  },
  {
    "id": 3,
    "theme": "List",
    "stem": "Qual afirmação sobre LinkedList é tecnicamente mais correta?",
    "options": [
      "Usa array redimensionável internamente.",
      "Tem acesso aleatório por índice mais eficiente que ArrayList.",
      "É baseada em nós encadeados.",
      "Não implementa List.",
      "Não permite elementos null."
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: Usa array redimensionável internamente. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Tem acesso aleatório por índice mais eficiente que ArrayList. — não corresponde ao comportamento/conceito correto em List.",
      "Correta: É baseada em nós encadeados. — esta alternativa expressa o conceito técnico adequado para o tema List.",
      "Incorreta: Não implementa List. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Não permite elementos null. — não corresponde ao comportamento/conceito correto em List."
    ]
  },
  {
    "id": 4,
    "theme": "List",
    "stem": "Qual método remove todos os elementos de uma List?",
    "options": [
      "deleteAll()",
      "remove()",
      "clear()",
      "drop()",
      "empty(index)"
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: deleteAll() — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: remove() — não corresponde ao comportamento/conceito correto em List.",
      "Correta: clear() — esta alternativa expressa o conceito técnico adequado para o tema List.",
      "Incorreta: drop() — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: empty(index) — não corresponde ao comportamento/conceito correto em List."
    ]
  },
  {
    "id": 5,
    "theme": "List",
    "stem": "Qual diferença é correta entre List e Set?",
    "options": [
      "List permite duplicados; Set não permite duplicados.",
      "Set mantém sempre ordem de inserção; List nunca mantém.",
      "List só aceita String; Set aceita qualquer tipo.",
      "Set é sempre mais lento.",
      "List é chave-valor."
    ],
    "answer": 0,
    "explanations": [
      "Correta: List permite duplicados; Set não permite duplicados. — esta alternativa expressa o conceito técnico adequado para o tema List.",
      "Incorreta: Set mantém sempre ordem de inserção; List nunca mantém. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: List só aceita String; Set aceita qualquer tipo. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Set é sempre mais lento. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: List é chave-valor. — não corresponde ao comportamento/conceito correto em List."
    ]
  },
  {
    "id": 6,
    "theme": "List",
    "stem": "Qual código cria uma lista mutável de String?",
    "options": [
      "List<String> nomes = new ArrayList<>();",
      "Map<String> nomes = new HashMap<>();",
      "List nomes = new String();",
      "ArrayList<int> nomes = new ArrayList<>();",
      "Set<String, Integer> nomes = new Set<>();"
    ],
    "answer": 0,
    "explanations": [
      "Correta: List<String> nomes = new ArrayList<>(); — esta alternativa expressa o conceito técnico adequado para o tema List.",
      "Incorreta: Map<String> nomes = new HashMap<>(); — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: List nomes = new String(); — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: ArrayList<int> nomes = new ArrayList<>(); — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Set<String, Integer> nomes = new Set<>(); — não corresponde ao comportamento/conceito correto em List."
    ]
  },
  {
    "id": 7,
    "theme": "List",
    "stem": "Qual risco existe ao remover itens de uma List dentro de um for-each?",
    "options": [
      "NullPointerException obrigatória.",
      "ConcurrentModificationException.",
      "StackOverflowError.",
      "ClassNotFoundException.",
      "SQLException."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: NullPointerException obrigatória. — não corresponde ao comportamento/conceito correto em List.",
      "Correta: ConcurrentModificationException. — esta alternativa expressa o conceito técnico adequado para o tema List.",
      "Incorreta: StackOverflowError. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: ClassNotFoundException. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: SQLException. — não corresponde ao comportamento/conceito correto em List."
    ]
  },
  {
    "id": 8,
    "theme": "List",
    "stem": "Qual alternativa representa melhor o uso de List.of(...) em Java moderno?",
    "options": [
      "Cria uma lista imutável.",
      "Cria sempre um LinkedList.",
      "Cria lista sincronizada.",
      "Cria lista que aceita null livremente.",
      "Cria um Map."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Cria uma lista imutável. — esta alternativa expressa o conceito técnico adequado para o tema List.",
      "Incorreta: Cria sempre um LinkedList. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Cria lista sincronizada. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Cria lista que aceita null livremente. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Cria um Map. — não corresponde ao comportamento/conceito correto em List."
    ]
  },
  {
    "id": 9,
    "theme": "List",
    "stem": "Se a principal operação for buscar por posição numérica, qual implementação tende a ser melhor?",
    "options": [
      "LinkedList",
      "ArrayList",
      "HashMap",
      "TreeMap",
      "HashSet"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: LinkedList — não corresponde ao comportamento/conceito correto em List.",
      "Correta: ArrayList — esta alternativa expressa o conceito técnico adequado para o tema List.",
      "Incorreta: HashMap — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: TreeMap — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: HashSet — não corresponde ao comportamento/conceito correto em List."
    ]
  },
  {
    "id": 10,
    "theme": "List",
    "stem": "Qual é o papel dos generics em List<String>?",
    "options": [
      "Garantir tipo em tempo de compilação.",
      "Transformar String em primitivo.",
      "Impedir totalmente ClassCastException em qualquer cenário.",
      "Criar uma tabela no banco.",
      "Sincronizar a lista."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Garantir tipo em tempo de compilação. — esta alternativa expressa o conceito técnico adequado para o tema List.",
      "Incorreta: Transformar String em primitivo. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Impedir totalmente ClassCastException em qualquer cenário. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Criar uma tabela no banco. — não corresponde ao comportamento/conceito correto em List.",
      "Incorreta: Sincronizar a lista. — não corresponde ao comportamento/conceito correto em List."
    ]
  },
  {
    "id": 11,
    "theme": "Map",
    "stem": "Qual estrutura representa pares chave-valor?",
    "options": [
      "List",
      "Set",
      "Map",
      "Queue",
      "Stack"
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: List — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Set — não corresponde ao comportamento/conceito correto em Map.",
      "Correta: Map — esta alternativa expressa o conceito técnico adequado para o tema Map.",
      "Incorreta: Queue — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Stack — não corresponde ao comportamento/conceito correto em Map."
    ]
  },
  {
    "id": 12,
    "theme": "Map",
    "stem": "Em um HashMap, o que acontece ao fazer put com uma chave já existente?",
    "options": [
      "Cria chave duplicada.",
      "Lança erro sempre.",
      "Substitui o valor anterior.",
      "Remove a chave.",
      "Ordena automaticamente."
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: Cria chave duplicada. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Lança erro sempre. — não corresponde ao comportamento/conceito correto em Map.",
      "Correta: Substitui o valor anterior. — esta alternativa expressa o conceito técnico adequado para o tema Map.",
      "Incorreta: Remove a chave. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Ordena automaticamente. — não corresponde ao comportamento/conceito correto em Map."
    ]
  },
  {
    "id": 13,
    "theme": "Map",
    "stem": "Qual implementação ordena naturalmente pelas chaves?",
    "options": [
      "HashMap",
      "LinkedHashMap",
      "TreeMap",
      "Hashtable",
      "ArrayList"
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: HashMap — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: LinkedHashMap — não corresponde ao comportamento/conceito correto em Map.",
      "Correta: TreeMap — esta alternativa expressa o conceito técnico adequado para o tema Map.",
      "Incorreta: Hashtable — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: ArrayList — não corresponde ao comportamento/conceito correto em Map."
    ]
  },
  {
    "id": 14,
    "theme": "Map",
    "stem": "Qual característica do HashMap está correta?",
    "options": [
      "É sincronizado por padrão.",
      "Mantém ordem natural das chaves.",
      "Usa hashing para localizar entradas.",
      "Não permite valores duplicados.",
      "Não permite valores null."
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: É sincronizado por padrão. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Mantém ordem natural das chaves. — não corresponde ao comportamento/conceito correto em Map.",
      "Correta: Usa hashing para localizar entradas. — esta alternativa expressa o conceito técnico adequado para o tema Map.",
      "Incorreta: Não permite valores duplicados. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Não permite valores null. — não corresponde ao comportamento/conceito correto em Map."
    ]
  },
  {
    "id": 15,
    "theme": "Map",
    "stem": "Qual método obtém um valor por chave?",
    "options": [
      "find()",
      "get()",
      "select()",
      "fetch()",
      "take()"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: find() — não corresponde ao comportamento/conceito correto em Map.",
      "Correta: get() — esta alternativa expressa o conceito técnico adequado para o tema Map.",
      "Incorreta: select() — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: fetch() — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: take() — não corresponde ao comportamento/conceito correto em Map."
    ]
  },
  {
    "id": 16,
    "theme": "Map",
    "stem": "Qual método verifica se uma chave existe?",
    "options": [
      "hasKey()",
      "containsKey()",
      "exists()",
      "containsValueKey()",
      "isKey()"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: hasKey() — não corresponde ao comportamento/conceito correto em Map.",
      "Correta: containsKey() — esta alternativa expressa o conceito técnico adequado para o tema Map.",
      "Incorreta: exists() — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: containsValueKey() — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: isKey() — não corresponde ao comportamento/conceito correto em Map."
    ]
  },
  {
    "id": 17,
    "theme": "Map",
    "stem": "Qual afirmação sobre chaves de Map é correta?",
    "options": [
      "Podem ser duplicadas.",
      "Precisam ser únicas.",
      "São sempre números.",
      "Nunca podem ser objetos.",
      "São sempre ordenadas."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Podem ser duplicadas. — não corresponde ao comportamento/conceito correto em Map.",
      "Correta: Precisam ser únicas. — esta alternativa expressa o conceito técnico adequado para o tema Map.",
      "Incorreta: São sempre números. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Nunca podem ser objetos. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: São sempre ordenadas. — não corresponde ao comportamento/conceito correto em Map."
    ]
  },
  {
    "id": 18,
    "theme": "Map",
    "stem": "Por que equals e hashCode são importantes em HashMap?",
    "options": [
      "Porque definem identidade lógica das chaves.",
      "Porque substituem o banco de dados.",
      "Porque impedem uso de memória.",
      "Porque tornam o Map imutável.",
      "Porque ordenam os valores."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Porque definem identidade lógica das chaves. — esta alternativa expressa o conceito técnico adequado para o tema Map.",
      "Incorreta: Porque substituem o banco de dados. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Porque impedem uso de memória. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Porque tornam o Map imutável. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Porque ordenam os valores. — não corresponde ao comportamento/conceito correto em Map."
    ]
  },
  {
    "id": 19,
    "theme": "Map",
    "stem": "Qual implementação preserva ordem de inserção?",
    "options": [
      "TreeMap",
      "HashMap",
      "LinkedHashMap",
      "EnumMap",
      "WeakHashMap"
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: TreeMap — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: HashMap — não corresponde ao comportamento/conceito correto em Map.",
      "Correta: LinkedHashMap — esta alternativa expressa o conceito técnico adequado para o tema Map.",
      "Incorreta: EnumMap — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: WeakHashMap — não corresponde ao comportamento/conceito correto em Map."
    ]
  },
  {
    "id": 20,
    "theme": "Map",
    "stem": "Qual erro conceitual é mais grave ao usar Map?",
    "options": [
      "Usar String como chave.",
      "Usar objeto mutável como chave e alterar campos usados em hashCode.",
      "Usar Integer como valor.",
      "Chamar get depois de put.",
      "Iterar sobre entrySet."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Usar String como chave. — não corresponde ao comportamento/conceito correto em Map.",
      "Correta: Usar objeto mutável como chave e alterar campos usados em hashCode. — esta alternativa expressa o conceito técnico adequado para o tema Map.",
      "Incorreta: Usar Integer como valor. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Chamar get depois de put. — não corresponde ao comportamento/conceito correto em Map.",
      "Incorreta: Iterar sobre entrySet. — não corresponde ao comportamento/conceito correto em Map."
    ]
  },
  {
    "id": 21,
    "theme": "Classe Abstrata",
    "stem": "O que é uma classe abstrata?",
    "options": [
      "Classe que não pode ter atributos.",
      "Classe que não pode ser instanciada diretamente.",
      "Classe que não pode ter construtor.",
      "Classe que não pode implementar interface.",
      "Classe final."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Classe que não pode ter atributos. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Correta: Classe que não pode ser instanciada diretamente. — esta alternativa expressa o conceito técnico adequado para o tema Classe Abstrata.",
      "Incorreta: Classe que não pode ter construtor. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Classe que não pode implementar interface. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Classe final. — não corresponde ao comportamento/conceito correto em Classe Abstrata."
    ]
  },
  {
    "id": 22,
    "theme": "Classe Abstrata",
    "stem": "Uma classe abstrata pode conter:",
    "options": [
      "Apenas métodos abstratos.",
      "Apenas atributos constantes.",
      "Métodos abstratos e concretos.",
      "Somente métodos static.",
      "Somente métodos private."
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: Apenas métodos abstratos. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Apenas atributos constantes. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Correta: Métodos abstratos e concretos. — esta alternativa expressa o conceito técnico adequado para o tema Classe Abstrata.",
      "Incorreta: Somente métodos static. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Somente métodos private. — não corresponde ao comportamento/conceito correto em Classe Abstrata."
    ]
  },
  {
    "id": 23,
    "theme": "Classe Abstrata",
    "stem": "Qual palavra-chave declara uma classe abstrata?",
    "options": [
      "interface",
      "abstract",
      "virtual",
      "contract",
      "extends"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: interface — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Correta: abstract — esta alternativa expressa o conceito técnico adequado para o tema Classe Abstrata.",
      "Incorreta: virtual — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: contract — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: extends — não corresponde ao comportamento/conceito correto em Classe Abstrata."
    ]
  },
  {
    "id": 24,
    "theme": "Classe Abstrata",
    "stem": "Um método abstrato:",
    "options": [
      "Possui corpo obrigatório.",
      "Não possui implementação na classe abstrata.",
      "Deve ser private.",
      "Deve ser static.",
      "Não pode ser sobrescrito."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Possui corpo obrigatório. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Correta: Não possui implementação na classe abstrata. — esta alternativa expressa o conceito técnico adequado para o tema Classe Abstrata.",
      "Incorreta: Deve ser private. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Deve ser static. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Não pode ser sobrescrito. — não corresponde ao comportamento/conceito correto em Classe Abstrata."
    ]
  },
  {
    "id": 25,
    "theme": "Classe Abstrata",
    "stem": "Por que usar classe abstrata?",
    "options": [
      "Para compartilhar estado/comportamento comum e exigir especializações.",
      "Para substituir banco de dados.",
      "Para impedir herança.",
      "Para criar somente constantes.",
      "Para tornar tudo estático."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Para compartilhar estado/comportamento comum e exigir especializações. — esta alternativa expressa o conceito técnico adequado para o tema Classe Abstrata.",
      "Incorreta: Para substituir banco de dados. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Para impedir herança. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Para criar somente constantes. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Para tornar tudo estático. — não corresponde ao comportamento/conceito correto em Classe Abstrata."
    ]
  },
  {
    "id": 26,
    "theme": "Classe Abstrata",
    "stem": "Uma subclasse concreta de classe abstrata deve:",
    "options": [
      "Ignorar métodos abstratos.",
      "Implementar todos os métodos abstratos herdados ou também ser abstrata.",
      "Ser sempre final.",
      "Não possuir construtor.",
      "Ser interface."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Ignorar métodos abstratos. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Correta: Implementar todos os métodos abstratos herdados ou também ser abstrata. — esta alternativa expressa o conceito técnico adequado para o tema Classe Abstrata.",
      "Incorreta: Ser sempre final. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Não possuir construtor. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Ser interface. — não corresponde ao comportamento/conceito correto em Classe Abstrata."
    ]
  },
  {
    "id": 27,
    "theme": "Classe Abstrata",
    "stem": "Classe abstrata pode ter construtor?",
    "options": [
      "Não, nunca.",
      "Sim, para inicialização comum chamada pelas subclasses.",
      "Somente se não tiver métodos abstratos.",
      "Somente se for final.",
      "Somente em Java 7."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Não, nunca. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Correta: Sim, para inicialização comum chamada pelas subclasses. — esta alternativa expressa o conceito técnico adequado para o tema Classe Abstrata.",
      "Incorreta: Somente se não tiver métodos abstratos. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Somente se for final. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Somente em Java 7. — não corresponde ao comportamento/conceito correto em Classe Abstrata."
    ]
  },
  {
    "id": 28,
    "theme": "Classe Abstrata",
    "stem": "Qual combinação é válida?",
    "options": [
      "abstract final class A",
      "abstract class A",
      "private abstract class A em arquivo público top-level",
      "interface abstract final A",
      "final abstract method m()"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: abstract final class A — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Correta: abstract class A — esta alternativa expressa o conceito técnico adequado para o tema Classe Abstrata.",
      "Incorreta: private abstract class A em arquivo público top-level — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: interface abstract final A — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: final abstract method m() — não corresponde ao comportamento/conceito correto em Classe Abstrata."
    ]
  },
  {
    "id": 29,
    "theme": "Classe Abstrata",
    "stem": "Diferença principal entre classe abstrata e interface tradicional:",
    "options": [
      "Classe abstrata pode manter estado de instância.",
      "Interface sempre tem banco.",
      "Classe abstrata não permite herança.",
      "Interface sempre é concreta.",
      "Não existe diferença."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Classe abstrata pode manter estado de instância. — esta alternativa expressa o conceito técnico adequado para o tema Classe Abstrata.",
      "Incorreta: Interface sempre tem banco. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Classe abstrata não permite herança. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Interface sempre é concreta. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Não existe diferença. — não corresponde ao comportamento/conceito correto em Classe Abstrata."
    ]
  },
  {
    "id": 30,
    "theme": "Classe Abstrata",
    "stem": "No design, classe abstrata mal usada pode causar:",
    "options": [
      "Acoplamento forte por herança inadequada.",
      "Fim da compilação Java.",
      "Obrigatoriedade de SQL.",
      "Impossibilidade de usar List.",
      "Exclusão automática de métodos."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Acoplamento forte por herança inadequada. — esta alternativa expressa o conceito técnico adequado para o tema Classe Abstrata.",
      "Incorreta: Fim da compilação Java. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Obrigatoriedade de SQL. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Impossibilidade de usar List. — não corresponde ao comportamento/conceito correto em Classe Abstrata.",
      "Incorreta: Exclusão automática de métodos. — não corresponde ao comportamento/conceito correto em Classe Abstrata."
    ]
  },
  {
    "id": 31,
    "theme": "Interface",
    "stem": "Uma interface representa principalmente:",
    "options": [
      "Contrato de comportamento.",
      "Tabela física.",
      "Objeto já instanciado.",
      "Coleção ordenada.",
      "Arquivo SQL."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Contrato de comportamento. — esta alternativa expressa o conceito técnico adequado para o tema Interface.",
      "Incorreta: Tabela física. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Objeto já instanciado. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Coleção ordenada. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Arquivo SQL. — não corresponde ao comportamento/conceito correto em Interface."
    ]
  },
  {
    "id": 32,
    "theme": "Interface",
    "stem": "Qual palavra-chave uma classe usa para assumir uma interface?",
    "options": [
      "extends",
      "implements",
      "inherits",
      "uses",
      "contracts"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: extends — não corresponde ao comportamento/conceito correto em Interface.",
      "Correta: implements — esta alternativa expressa o conceito técnico adequado para o tema Interface.",
      "Incorreta: inherits — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: uses — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: contracts — não corresponde ao comportamento/conceito correto em Interface."
    ]
  },
  {
    "id": 33,
    "theme": "Interface",
    "stem": "Uma classe Java pode implementar:",
    "options": [
      "Apenas uma interface.",
      "Nenhuma interface.",
      "Múltiplas interfaces.",
      "Somente interfaces abstratas.",
      "Somente interfaces com atributos."
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: Apenas uma interface. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Nenhuma interface. — não corresponde ao comportamento/conceito correto em Interface.",
      "Correta: Múltiplas interfaces. — esta alternativa expressa o conceito técnico adequado para o tema Interface.",
      "Incorreta: Somente interfaces abstratas. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Somente interfaces com atributos. — não corresponde ao comportamento/conceito correto em Interface."
    ]
  },
  {
    "id": 34,
    "theme": "Interface",
    "stem": "Métodos de interface, tradicionalmente, são:",
    "options": [
      "private por padrão.",
      "public abstract por padrão.",
      "final por padrão.",
      "synchronized por padrão.",
      "native por padrão."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: private por padrão. — não corresponde ao comportamento/conceito correto em Interface.",
      "Correta: public abstract por padrão. — esta alternativa expressa o conceito técnico adequado para o tema Interface.",
      "Incorreta: final por padrão. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: synchronized por padrão. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: native por padrão. — não corresponde ao comportamento/conceito correto em Interface."
    ]
  },
  {
    "id": 35,
    "theme": "Interface",
    "stem": "Qual é uma vantagem de programar para interfaces?",
    "options": [
      "Aumenta acoplamento concreto.",
      "Facilita substituição de implementações.",
      "Impede testes.",
      "Remove necessidade de nomes claros.",
      "Obriga uso de herança múltipla de classes."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Aumenta acoplamento concreto. — não corresponde ao comportamento/conceito correto em Interface.",
      "Correta: Facilita substituição de implementações. — esta alternativa expressa o conceito técnico adequado para o tema Interface.",
      "Incorreta: Impede testes. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Remove necessidade de nomes claros. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Obriga uso de herança múltipla de classes. — não corresponde ao comportamento/conceito correto em Interface."
    ]
  },
  {
    "id": 36,
    "theme": "Interface",
    "stem": "Interface pode conter default methods?",
    "options": [
      "Sim, em versões modernas do Java.",
      "Não, nunca.",
      "Somente se for abstract class.",
      "Somente com JDBC.",
      "Somente se não tiver métodos."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Sim, em versões modernas do Java. — esta alternativa expressa o conceito técnico adequado para o tema Interface.",
      "Incorreta: Não, nunca. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Somente se for abstract class. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Somente com JDBC. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Somente se não tiver métodos. — não corresponde ao comportamento/conceito correto em Interface."
    ]
  },
  {
    "id": 37,
    "theme": "Interface",
    "stem": "Qual exemplo é melhor para interface?",
    "options": [
      "PagamentoService define pagar().",
      "Usuario com campos nome e cpf.",
      "Classe com 50 atributos.",
      "Constante solta sem contexto.",
      "ArrayList interno."
    ],
    "answer": 0,
    "explanations": [
      "Correta: PagamentoService define pagar(). — esta alternativa expressa o conceito técnico adequado para o tema Interface.",
      "Incorreta: Usuario com campos nome e cpf. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Classe com 50 atributos. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Constante solta sem contexto. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: ArrayList interno. — não corresponde ao comportamento/conceito correto em Interface."
    ]
  },
  {
    "id": 38,
    "theme": "Interface",
    "stem": "Interface ajuda no baixo acoplamento porque:",
    "options": [
      "O consumidor depende do contrato, não da implementação concreta.",
      "Ela elimina objetos.",
      "Ela impede polimorfismo.",
      "Ela obriga todos os métodos serem static.",
      "Ela acessa diretamente o banco."
    ],
    "answer": 0,
    "explanations": [
      "Correta: O consumidor depende do contrato, não da implementação concreta. — esta alternativa expressa o conceito técnico adequado para o tema Interface.",
      "Incorreta: Ela elimina objetos. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Ela impede polimorfismo. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Ela obriga todos os métodos serem static. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Ela acessa diretamente o banco. — não corresponde ao comportamento/conceito correto em Interface."
    ]
  },
  {
    "id": 39,
    "theme": "Interface",
    "stem": "Qual erro comum em interface?",
    "options": [
      "Definir contrato pequeno e claro.",
      "Criar interface gigantesca com métodos não relacionados.",
      "Usar implementação mock em testes.",
      "Separar comportamento.",
      "Usar nomes no infinitivo ou substantivo coerente."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Definir contrato pequeno e claro. — não corresponde ao comportamento/conceito correto em Interface.",
      "Correta: Criar interface gigantesca com métodos não relacionados. — esta alternativa expressa o conceito técnico adequado para o tema Interface.",
      "Incorreta: Usar implementação mock em testes. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Separar comportamento. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Usar nomes no infinitivo ou substantivo coerente. — não corresponde ao comportamento/conceito correto em Interface."
    ]
  },
  {
    "id": 40,
    "theme": "Interface",
    "stem": "Em arquitetura em camadas, Repository como interface permite:",
    "options": [
      "Trocar implementação de persistência com menor impacto.",
      "Eliminar Model.",
      "Controller acessar SQL diretamente.",
      "Criar número mágico.",
      "Impedir injeção de dependência."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Trocar implementação de persistência com menor impacto. — esta alternativa expressa o conceito técnico adequado para o tema Interface.",
      "Incorreta: Eliminar Model. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Controller acessar SQL diretamente. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Criar número mágico. — não corresponde ao comportamento/conceito correto em Interface.",
      "Incorreta: Impedir injeção de dependência. — não corresponde ao comportamento/conceito correto em Interface."
    ]
  },
  {
    "id": 41,
    "theme": "Arquitetura em Camadas",
    "stem": "Qual fluxo é mais adequado?",
    "options": [
      "Controller → Service → Repository → Banco",
      "Repository → Controller → Banco → Service",
      "Model → Controller → SQL → View",
      "Banco → View → Service",
      "Service → View → Repository → Controller"
    ],
    "answer": 0,
    "explanations": [
      "Correta: Controller → Service → Repository → Banco — esta alternativa expressa o conceito técnico adequado para o tema Arquitetura em Camadas.",
      "Incorreta: Repository → Controller → Banco → Service — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Model → Controller → SQL → View — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Banco → View → Service — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Service → View → Repository → Controller — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas."
    ]
  },
  {
    "id": 42,
    "theme": "Arquitetura em Camadas",
    "stem": "Responsabilidade principal do Controller:",
    "options": [
      "Receber requisições e delegar o caso de uso.",
      "Executar SQL diretamente.",
      "Guardar senha do banco.",
      "Conter toda regra de negócio.",
      "Representar tabela."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Receber requisições e delegar o caso de uso. — esta alternativa expressa o conceito técnico adequado para o tema Arquitetura em Camadas.",
      "Incorreta: Executar SQL diretamente. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Guardar senha do banco. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Conter toda regra de negócio. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Representar tabela. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas."
    ]
  },
  {
    "id": 43,
    "theme": "Arquitetura em Camadas",
    "stem": "Responsabilidade principal do Service:",
    "options": [
      "Renderizar HTML.",
      "Concentrar regra de negócio/orquestração.",
      "Executar exclusivamente SELECT.",
      "Ser entidade JPA.",
      "Ser arquivo CSS."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Renderizar HTML. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Correta: Concentrar regra de negócio/orquestração. — esta alternativa expressa o conceito técnico adequado para o tema Arquitetura em Camadas.",
      "Incorreta: Executar exclusivamente SELECT. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Ser entidade JPA. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Ser arquivo CSS. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas."
    ]
  },
  {
    "id": 44,
    "theme": "Arquitetura em Camadas",
    "stem": "Responsabilidade principal do Repository:",
    "options": [
      "Acesso a dados/persistência.",
      "Criar tela.",
      "Validar clique do usuário.",
      "Controlar CSS.",
      "Definir regra de negócio fiscal."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Acesso a dados/persistência. — esta alternativa expressa o conceito técnico adequado para o tema Arquitetura em Camadas.",
      "Incorreta: Criar tela. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Validar clique do usuário. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Controlar CSS. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Definir regra de negócio fiscal. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas."
    ]
  },
  {
    "id": 45,
    "theme": "Arquitetura em Camadas",
    "stem": "Responsabilidade principal do Model:",
    "options": [
      "Representar dados/domínio.",
      "Abrir conexão HTTP.",
      "Renderizar template.",
      "Escolher cor do botão.",
      "Ser sempre controller."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Representar dados/domínio. — esta alternativa expressa o conceito técnico adequado para o tema Arquitetura em Camadas.",
      "Incorreta: Abrir conexão HTTP. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Renderizar template. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Escolher cor do botão. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Ser sempre controller. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas."
    ]
  },
  {
    "id": 46,
    "theme": "Arquitetura em Camadas",
    "stem": "O que é errado em uma arquitetura em camadas?",
    "options": [
      "Controller chamar Service.",
      "Service chamar Repository.",
      "Repository acessar banco.",
      "Controller montar SQL diretamente.",
      "Model representar entidade."
    ],
    "answer": 3,
    "explanations": [
      "Incorreta: Controller chamar Service. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Service chamar Repository. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Repository acessar banco. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Correta: Controller montar SQL diretamente. — esta alternativa expressa o conceito técnico adequado para o tema Arquitetura em Camadas.",
      "Incorreta: Model representar entidade. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas."
    ]
  },
  {
    "id": 47,
    "theme": "Arquitetura em Camadas",
    "stem": "Por que separar camadas?",
    "options": [
      "Para reduzir coesão.",
      "Para aumentar mistura de responsabilidades.",
      "Para melhorar manutenção e testabilidade.",
      "Para obrigar duplicação.",
      "Para impedir mudanças."
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: Para reduzir coesão. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Para aumentar mistura de responsabilidades. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Correta: Para melhorar manutenção e testabilidade. — esta alternativa expressa o conceito técnico adequado para o tema Arquitetura em Camadas.",
      "Incorreta: Para obrigar duplicação. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Para impedir mudanças. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas."
    ]
  },
  {
    "id": 48,
    "theme": "Arquitetura em Camadas",
    "stem": "Em MVC, View é responsável por:",
    "options": [
      "Exibição/interface.",
      "Persistência SQL.",
      "Regra principal de negócio.",
      "Conexão JDBC.",
      "HashMap."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Exibição/interface. — esta alternativa expressa o conceito técnico adequado para o tema Arquitetura em Camadas.",
      "Incorreta: Persistência SQL. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Regra principal de negócio. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Conexão JDBC. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: HashMap. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas."
    ]
  },
  {
    "id": 49,
    "theme": "Arquitetura em Camadas",
    "stem": "Um antipadrão comum é:",
    "options": [
      "Fat Controller com regra de negócio demais.",
      "Service com métodos claros.",
      "Repository isolado.",
      "Model simples.",
      "Interfaces pequenas."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Fat Controller com regra de negócio demais. — esta alternativa expressa o conceito técnico adequado para o tema Arquitetura em Camadas.",
      "Incorreta: Service com métodos claros. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Repository isolado. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Model simples. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Interfaces pequenas. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas."
    ]
  },
  {
    "id": 50,
    "theme": "Arquitetura em Camadas",
    "stem": "Qual dependência é mais adequada?",
    "options": [
      "Controller depende de Service.",
      "Repository depende de Controller.",
      "Model depende de View.",
      "Banco depende de Controller.",
      "CSS depende de Repository."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Controller depende de Service. — esta alternativa expressa o conceito técnico adequado para o tema Arquitetura em Camadas.",
      "Incorreta: Repository depende de Controller. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Model depende de View. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: Banco depende de Controller. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas.",
      "Incorreta: CSS depende de Repository. — não corresponde ao comportamento/conceito correto em Arquitetura em Camadas."
    ]
  },
  {
    "id": 51,
    "theme": "JDBC",
    "stem": "JDBC é:",
    "options": [
      "API Java para acesso a bancos relacionais.",
      "Framework CSS.",
      "Servidor web.",
      "Linguagem de consulta diferente de SQL.",
      "Coleção List."
    ],
    "answer": 0,
    "explanations": [
      "Correta: API Java para acesso a bancos relacionais. — esta alternativa expressa o conceito técnico adequado para o tema JDBC.",
      "Incorreta: Framework CSS. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Servidor web. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Linguagem de consulta diferente de SQL. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Coleção List. — não corresponde ao comportamento/conceito correto em JDBC."
    ]
  },
  {
    "id": 52,
    "theme": "JDBC",
    "stem": "Qual objeto representa uma conexão com o banco?",
    "options": [
      "Statement",
      "ResultSet",
      "Connection",
      "DriverList",
      "Map"
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: Statement — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: ResultSet — não corresponde ao comportamento/conceito correto em JDBC.",
      "Correta: Connection — esta alternativa expressa o conceito técnico adequado para o tema JDBC.",
      "Incorreta: DriverList — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Map — não corresponde ao comportamento/conceito correto em JDBC."
    ]
  },
  {
    "id": 53,
    "theme": "JDBC",
    "stem": "Qual objeto executa SQL parametrizado com segurança melhor?",
    "options": [
      "Statement",
      "PreparedStatement",
      "ResultSet",
      "ArrayList",
      "Scanner"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Statement — não corresponde ao comportamento/conceito correto em JDBC.",
      "Correta: PreparedStatement — esta alternativa expressa o conceito técnico adequado para o tema JDBC.",
      "Incorreta: ResultSet — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: ArrayList — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Scanner — não corresponde ao comportamento/conceito correto em JDBC."
    ]
  },
  {
    "id": 54,
    "theme": "JDBC",
    "stem": "Por que PreparedStatement ajuda contra SQL Injection?",
    "options": [
      "Concatena strings mais rápido.",
      "Separa comandos SQL de parâmetros.",
      "Remove necessidade de banco.",
      "Transforma SQL em HTML.",
      "Não executa consultas."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Concatena strings mais rápido. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Correta: Separa comandos SQL de parâmetros. — esta alternativa expressa o conceito técnico adequado para o tema JDBC.",
      "Incorreta: Remove necessidade de banco. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Transforma SQL em HTML. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Não executa consultas. — não corresponde ao comportamento/conceito correto em JDBC."
    ]
  },
  {
    "id": 55,
    "theme": "JDBC",
    "stem": "Qual objeto percorre resultados de uma consulta?",
    "options": [
      "ResultSet",
      "Connection",
      "DriverManager",
      "PreparedStatement",
      "Repository"
    ],
    "answer": 0,
    "explanations": [
      "Correta: ResultSet — esta alternativa expressa o conceito técnico adequado para o tema JDBC.",
      "Incorreta: Connection — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: DriverManager — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: PreparedStatement — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Repository — não corresponde ao comportamento/conceito correto em JDBC."
    ]
  },
  {
    "id": 56,
    "theme": "JDBC",
    "stem": "Qual método é típico para SELECT?",
    "options": [
      "executeQuery()",
      "executeUpdate()",
      "executeDeleteOnly()",
      "runSelectMap()",
      "commitQuery()"
    ],
    "answer": 0,
    "explanations": [
      "Correta: executeQuery() — esta alternativa expressa o conceito técnico adequado para o tema JDBC.",
      "Incorreta: executeUpdate() — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: executeDeleteOnly() — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: runSelectMap() — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: commitQuery() — não corresponde ao comportamento/conceito correto em JDBC."
    ]
  },
  {
    "id": 57,
    "theme": "JDBC",
    "stem": "Qual método é típico para INSERT/UPDATE/DELETE?",
    "options": [
      "executeQuery()",
      "executeUpdate()",
      "nextResult()",
      "getConnectionOnly()",
      "openQuery()"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: executeQuery() — não corresponde ao comportamento/conceito correto em JDBC.",
      "Correta: executeUpdate() — esta alternativa expressa o conceito técnico adequado para o tema JDBC.",
      "Incorreta: nextResult() — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: getConnectionOnly() — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: openQuery() — não corresponde ao comportamento/conceito correto em JDBC."
    ]
  },
  {
    "id": 58,
    "theme": "JDBC",
    "stem": "Boa prática com recursos JDBC:",
    "options": [
      "Nunca fechar conexão.",
      "Usar try-with-resources.",
      "Guardar Connection global estática sempre.",
      "Criar SQL por concatenação de entrada do usuário.",
      "Ignorar SQLException."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Nunca fechar conexão. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Correta: Usar try-with-resources. — esta alternativa expressa o conceito técnico adequado para o tema JDBC.",
      "Incorreta: Guardar Connection global estática sempre. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Criar SQL por concatenação de entrada do usuário. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Ignorar SQLException. — não corresponde ao comportamento/conceito correto em JDBC."
    ]
  },
  {
    "id": 59,
    "theme": "JDBC",
    "stem": "Em camadas, código JDBC deve ficar preferencialmente no:",
    "options": [
      "Controller",
      "Repository/DAO",
      "View",
      "Model puro",
      "CSS"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Controller — não corresponde ao comportamento/conceito correto em JDBC.",
      "Correta: Repository/DAO — esta alternativa expressa o conceito técnico adequado para o tema JDBC.",
      "Incorreta: View — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Model puro — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: CSS — não corresponde ao comportamento/conceito correto em JDBC."
    ]
  },
  {
    "id": 60,
    "theme": "JDBC",
    "stem": "Qual problema ocorre se conexões não forem fechadas?",
    "options": [
      "Vazamento de recursos/conexões.",
      "Aumento automático da segurança.",
      "Transformação em interface.",
      "Melhora garantida de performance.",
      "Conversão para List."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Vazamento de recursos/conexões. — esta alternativa expressa o conceito técnico adequado para o tema JDBC.",
      "Incorreta: Aumento automático da segurança. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Transformação em interface. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Melhora garantida de performance. — não corresponde ao comportamento/conceito correto em JDBC.",
      "Incorreta: Conversão para List. — não corresponde ao comportamento/conceito correto em JDBC."
    ]
  },
  {
    "id": 61,
    "theme": "Clean Code",
    "stem": "Clean Code prioriza:",
    "options": [
      "Código legível, simples e manutenível.",
      "Código com nomes curtos sempre.",
      "Comentários em todas as linhas.",
      "Números mágicos espalhados.",
      "Métodos enormes."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Código legível, simples e manutenível. — esta alternativa expressa o conceito técnico adequado para o tema Clean Code.",
      "Incorreta: Código com nomes curtos sempre. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Comentários em todas as linhas. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Números mágicos espalhados. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Métodos enormes. — não corresponde ao comportamento/conceito correto em Clean Code."
    ]
  },
  {
    "id": 62,
    "theme": "Clean Code",
    "stem": "Um método limpo deve tender a:",
    "options": [
      "Fazer uma coisa bem definida.",
      "Fazer todas as regras do sistema.",
      "Ter centenas de linhas.",
      "Ter nome genérico como processaTudo.",
      "Misturar banco, tela e regra."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Fazer uma coisa bem definida. — esta alternativa expressa o conceito técnico adequado para o tema Clean Code.",
      "Incorreta: Fazer todas as regras do sistema. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Ter centenas de linhas. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Ter nome genérico como processaTudo. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Misturar banco, tela e regra. — não corresponde ao comportamento/conceito correto em Clean Code."
    ]
  },
  {
    "id": 63,
    "theme": "Clean Code",
    "stem": "Comentário é mais adequado quando:",
    "options": [
      "Explica uma decisão não óbvia.",
      "Repete exatamente o código.",
      "Substitui nome ruim.",
      "Esconde código confuso.",
      "Aparece em toda linha."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Explica uma decisão não óbvia. — esta alternativa expressa o conceito técnico adequado para o tema Clean Code.",
      "Incorreta: Repete exatamente o código. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Substitui nome ruim. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Esconde código confuso. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Aparece em toda linha. — não corresponde ao comportamento/conceito correto em Clean Code."
    ]
  },
  {
    "id": 64,
    "theme": "Clean Code",
    "stem": "Qual exemplo é mais limpo?",
    "options": [
      "int x;",
      "int idadeMinimaParaCadastro;",
      "int a1;",
      "String coisa;",
      "double valor2;"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: int x; — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Correta: int idadeMinimaParaCadastro; — esta alternativa expressa o conceito técnico adequado para o tema Clean Code.",
      "Incorreta: int a1; — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: String coisa; — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: double valor2; — não corresponde ao comportamento/conceito correto em Clean Code."
    ]
  },
  {
    "id": 65,
    "theme": "Clean Code",
    "stem": "Qual prática viola Clean Code?",
    "options": [
      "Remover duplicação.",
      "Criar constantes nomeadas.",
      "Usar nomes expressivos.",
      "Misturar responsabilidades sem necessidade.",
      "Métodos pequenos."
    ],
    "answer": 3,
    "explanations": [
      "Incorreta: Remover duplicação. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Criar constantes nomeadas. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Usar nomes expressivos. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Correta: Misturar responsabilidades sem necessidade. — esta alternativa expressa o conceito técnico adequado para o tema Clean Code.",
      "Incorreta: Métodos pequenos. — não corresponde ao comportamento/conceito correto em Clean Code."
    ]
  },
  {
    "id": 66,
    "theme": "Clean Code",
    "stem": "Código duplicado deve ser:",
    "options": [
      "Mantido para ficar explícito.",
      "Refatorado quando representa mesma regra.",
      "Copiado para todas as classes.",
      "Comentado e esquecido.",
      "Transformado em número mágico."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Mantido para ficar explícito. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Correta: Refatorado quando representa mesma regra. — esta alternativa expressa o conceito técnico adequado para o tema Clean Code.",
      "Incorreta: Copiado para todas as classes. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Comentado e esquecido. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Transformado em número mágico. — não corresponde ao comportamento/conceito correto em Clean Code."
    ]
  },
  {
    "id": 67,
    "theme": "Clean Code",
    "stem": "Qual nome de método é melhor?",
    "options": [
      "faz()",
      "processa()",
      "calcularTotalPedido()",
      "xpto()",
      "metodo1()"
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: faz() — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: processa() — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Correta: calcularTotalPedido() — esta alternativa expressa o conceito técnico adequado para o tema Clean Code.",
      "Incorreta: xpto() — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: metodo1() — não corresponde ao comportamento/conceito correto em Clean Code."
    ]
  },
  {
    "id": 68,
    "theme": "Clean Code",
    "stem": "Qual situação indica baixa legibilidade?",
    "options": [
      "Nomes claros.",
      "Responsabilidades separadas.",
      "Condição enorme com números sem contexto.",
      "Constantes bem nomeadas.",
      "Método pequeno."
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: Nomes claros. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Responsabilidades separadas. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Correta: Condição enorme com números sem contexto. — esta alternativa expressa o conceito técnico adequado para o tema Clean Code.",
      "Incorreta: Constantes bem nomeadas. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Método pequeno. — não corresponde ao comportamento/conceito correto em Clean Code."
    ]
  },
  {
    "id": 69,
    "theme": "Clean Code",
    "stem": "Clean Code se relaciona com testes porque:",
    "options": [
      "Código claro e desacoplado é mais testável.",
      "Testes substituem nomes bons.",
      "Código testável deve ser confuso.",
      "Só código ruim precisa teste.",
      "Testes impedem coesão."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Código claro e desacoplado é mais testável. — esta alternativa expressa o conceito técnico adequado para o tema Clean Code.",
      "Incorreta: Testes substituem nomes bons. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Código testável deve ser confuso. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Só código ruim precisa teste. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Testes impedem coesão. — não corresponde ao comportamento/conceito correto em Clean Code."
    ]
  },
  {
    "id": 70,
    "theme": "Clean Code",
    "stem": "Qual refatoração é mais adequada para método gigante?",
    "options": [
      "Dividir em métodos menores com nomes claros.",
      "Adicionar mais comentários apenas.",
      "Renomear para executarTudo.",
      "Colocar tudo no Controller.",
      "Duplicar o método."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Dividir em métodos menores com nomes claros. — esta alternativa expressa o conceito técnico adequado para o tema Clean Code.",
      "Incorreta: Adicionar mais comentários apenas. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Renomear para executarTudo. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Colocar tudo no Controller. — não corresponde ao comportamento/conceito correto em Clean Code.",
      "Incorreta: Duplicar o método. — não corresponde ao comportamento/conceito correto em Clean Code."
    ]
  },
  {
    "id": 71,
    "theme": "Nomes, Métodos, Atributos e Comentários",
    "stem": "Bom nome de atributo:",
    "options": [
      "x",
      "d",
      "nomeCompleto",
      "aux",
      "temp2"
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: x — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: d — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Correta: nomeCompleto — esta alternativa expressa o conceito técnico adequado para o tema Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: aux — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: temp2 — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários."
    ]
  },
  {
    "id": 72,
    "theme": "Nomes, Métodos, Atributos e Comentários",
    "stem": "Bom nome de método booleano:",
    "options": [
      "processar()",
      "isAtivo()",
      "dados()",
      "valor()",
      "classe()"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: processar() — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Correta: isAtivo() — esta alternativa expressa o conceito técnico adequado para o tema Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: dados() — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: valor() — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: classe() — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários."
    ]
  },
  {
    "id": 73,
    "theme": "Nomes, Métodos, Atributos e Comentários",
    "stem": "Nome de método deve normalmente:",
    "options": [
      "Descrever ação/comportamento.",
      "Ser uma letra.",
      "Ser sempre abreviado.",
      "Conter SQL inteiro.",
      "Ser igual ao nome da classe sempre."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Descrever ação/comportamento. — esta alternativa expressa o conceito técnico adequado para o tema Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Ser uma letra. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Ser sempre abreviado. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Conter SQL inteiro. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Ser igual ao nome da classe sempre. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários."
    ]
  },
  {
    "id": 74,
    "theme": "Nomes, Métodos, Atributos e Comentários",
    "stem": "Comentários ruins geralmente:",
    "options": [
      "Explicam decisão arquitetural relevante.",
      "Repetem o óbvio que o código já diz.",
      "Documentam API pública complexa.",
      "Alertam sobre restrição externa.",
      "Explicam workaround necessário."
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Explicam decisão arquitetural relevante. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Correta: Repetem o óbvio que o código já diz. — esta alternativa expressa o conceito técnico adequado para o tema Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Documentam API pública complexa. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Alertam sobre restrição externa. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Explicam workaround necessário. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários."
    ]
  },
  {
    "id": 75,
    "theme": "Nomes, Métodos, Atributos e Comentários",
    "stem": "Qual nome evita ambiguidade?",
    "options": [
      "calcularDescontoPromocional()",
      "calc()",
      "doIt()",
      "handle()",
      "coisa()"
    ],
    "answer": 0,
    "explanations": [
      "Correta: calcularDescontoPromocional() — esta alternativa expressa o conceito técnico adequado para o tema Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: calc() — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: doIt() — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: handle() — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: coisa() — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários."
    ]
  },
  {
    "id": 76,
    "theme": "Nomes, Métodos, Atributos e Comentários",
    "stem": "Atributos devem representar:",
    "options": [
      "Estado relevante do objeto.",
      "Qualquer variável temporária global.",
      "SQL da tela sempre.",
      "Nomes sem contexto.",
      "Comentários."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Estado relevante do objeto. — esta alternativa expressa o conceito técnico adequado para o tema Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Qualquer variável temporária global. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: SQL da tela sempre. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Nomes sem contexto. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Comentários. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários."
    ]
  },
  {
    "id": 77,
    "theme": "Nomes, Métodos, Atributos e Comentários",
    "stem": "Um método chamado salvarUsuario deve:",
    "options": [
      "Salvar usuário.",
      "Enviar e-mail, gerar PDF, calcular imposto e abrir tela.",
      "Apagar banco.",
      "Ordenar List sem relação.",
      "Alterar CSS."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Salvar usuário. — esta alternativa expressa o conceito técnico adequado para o tema Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Enviar e-mail, gerar PDF, calcular imposto e abrir tela. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Apagar banco. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Ordenar List sem relação. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Alterar CSS. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários."
    ]
  },
  {
    "id": 78,
    "theme": "Nomes, Métodos, Atributos e Comentários",
    "stem": "Qual comentário é justificável?",
    "options": [
      "// incrementa i",
      "// soma a+b",
      "// workaround para limitação documentada do driver JDBC X",
      "// cria usuário em criarUsuario",
      "// retorna nome em getNome"
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: // incrementa i — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: // soma a+b — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Correta: // workaround para limitação documentada do driver JDBC X — esta alternativa expressa o conceito técnico adequado para o tema Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: // cria usuário em criarUsuario — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: // retorna nome em getNome — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários."
    ]
  },
  {
    "id": 79,
    "theme": "Nomes, Métodos, Atributos e Comentários",
    "stem": "Nomes técnicos devem ser:",
    "options": [
      "Consistentes com o domínio e a camada.",
      "Sempre abreviados.",
      "Sempre em inglês misturado com português aleatório.",
      "Iguais em todas as classes.",
      "Ocultos em comentários."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Consistentes com o domínio e a camada. — esta alternativa expressa o conceito técnico adequado para o tema Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Sempre abreviados. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Sempre em inglês misturado com português aleatório. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Iguais em todas as classes. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Ocultos em comentários. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários."
    ]
  },
  {
    "id": 80,
    "theme": "Nomes, Métodos, Atributos e Comentários",
    "stem": "Qual opção melhora manutenção?",
    "options": [
      "Nomes expressivos e comentários apenas quando agregam contexto.",
      "Comentários para compensar código ruim.",
      "Variáveis genéricas.",
      "Métodos longos.",
      "Números sem nome."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Nomes expressivos e comentários apenas quando agregam contexto. — esta alternativa expressa o conceito técnico adequado para o tema Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Comentários para compensar código ruim. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Variáveis genéricas. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Métodos longos. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários.",
      "Incorreta: Números sem nome. — não corresponde ao comportamento/conceito correto em Nomes, Métodos, Atributos e Comentários."
    ]
  },
  {
    "id": 81,
    "theme": "Coesão e Acoplamento",
    "stem": "Alta coesão significa:",
    "options": [
      "Classe com responsabilidades relacionadas.",
      "Classe fazendo tudo.",
      "Dependência direta de todas as camadas.",
      "Código sem métodos.",
      "Uso obrigatório de static."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Classe com responsabilidades relacionadas. — esta alternativa expressa o conceito técnico adequado para o tema Coesão e Acoplamento.",
      "Incorreta: Classe fazendo tudo. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Dependência direta de todas as camadas. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Código sem métodos. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Uso obrigatório de static. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento."
    ]
  },
  {
    "id": 82,
    "theme": "Coesão e Acoplamento",
    "stem": "Baixo acoplamento significa:",
    "options": [
      "Menor dependência entre componentes concretos.",
      "Todas as classes dependem de todas.",
      "Controller acessa banco direto.",
      "Sem interfaces.",
      "Código duplicado."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Menor dependência entre componentes concretos. — esta alternativa expressa o conceito técnico adequado para o tema Coesão e Acoplamento.",
      "Incorreta: Todas as classes dependem de todas. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Controller acessa banco direto. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Sem interfaces. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Código duplicado. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento."
    ]
  },
  {
    "id": 83,
    "theme": "Coesão e Acoplamento",
    "stem": "Qual exemplo tem baixa coesão?",
    "options": [
      "UsuarioService apenas regras de usuário.",
      "RelatorioController apenas endpoints de relatório.",
      "Classe UtilGeral com login, banco, PDF, e-mail e cálculo fiscal.",
      "UsuarioRepository apenas persistência de usuário.",
      "Pedido com dados de pedido."
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: UsuarioService apenas regras de usuário. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: RelatorioController apenas endpoints de relatório. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Correta: Classe UtilGeral com login, banco, PDF, e-mail e cálculo fiscal. — esta alternativa expressa o conceito técnico adequado para o tema Coesão e Acoplamento.",
      "Incorreta: UsuarioRepository apenas persistência de usuário. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Pedido com dados de pedido. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento."
    ]
  },
  {
    "id": 84,
    "theme": "Coesão e Acoplamento",
    "stem": "Qual reduz acoplamento?",
    "options": [
      "Depender de interfaces.",
      "Instanciar implementação concreta em todos os lugares.",
      "Usar new Repository no Controller.",
      "Misturar SQL e tela.",
      "Criar métodos gigantes."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Depender de interfaces. — esta alternativa expressa o conceito técnico adequado para o tema Coesão e Acoplamento.",
      "Incorreta: Instanciar implementação concreta em todos os lugares. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Usar new Repository no Controller. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Misturar SQL e tela. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Criar métodos gigantes. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento."
    ]
  },
  {
    "id": 85,
    "theme": "Coesão e Acoplamento",
    "stem": "Por que acoplamento alto é ruim?",
    "options": [
      "Dificulta mudanças e testes.",
      "Melhora manutenção.",
      "Impede bugs sempre.",
      "Torna código menor sempre.",
      "Remove dependências."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Dificulta mudanças e testes. — esta alternativa expressa o conceito técnico adequado para o tema Coesão e Acoplamento.",
      "Incorreta: Melhora manutenção. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Impede bugs sempre. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Torna código menor sempre. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Remove dependências. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento."
    ]
  },
  {
    "id": 86,
    "theme": "Coesão e Acoplamento",
    "stem": "Qual camada acoplada incorretamente?",
    "options": [
      "Controller conhece Service.",
      "Service conhece Repository.",
      "Repository conhece JDBC.",
      "Model conhece View HTML.",
      "View conhece dados exibidos."
    ],
    "answer": 3,
    "explanations": [
      "Incorreta: Controller conhece Service. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Service conhece Repository. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Repository conhece JDBC. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Correta: Model conhece View HTML. — esta alternativa expressa o conceito técnico adequado para o tema Coesão e Acoplamento.",
      "Incorreta: View conhece dados exibidos. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento."
    ]
  },
  {
    "id": 87,
    "theme": "Coesão e Acoplamento",
    "stem": "Coesão está relacionada a:",
    "options": [
      "Responsabilidade interna.",
      "Cor do sistema.",
      "Tamanho do banco.",
      "Versão do navegador.",
      "Quantidade de memória física apenas."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Responsabilidade interna. — esta alternativa expressa o conceito técnico adequado para o tema Coesão e Acoplamento.",
      "Incorreta: Cor do sistema. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Tamanho do banco. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Versão do navegador. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Quantidade de memória física apenas. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento."
    ]
  },
  {
    "id": 88,
    "theme": "Coesão e Acoplamento",
    "stem": "Acoplamento está relacionado a:",
    "options": [
      "Dependência entre partes do sistema.",
      "Apenas identação.",
      "Apenas comentários.",
      "Apenas List.",
      "Apenas Map."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Dependência entre partes do sistema. — esta alternativa expressa o conceito técnico adequado para o tema Coesão e Acoplamento.",
      "Incorreta: Apenas identação. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Apenas comentários. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Apenas List. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Apenas Map. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento."
    ]
  },
  {
    "id": 89,
    "theme": "Coesão e Acoplamento",
    "stem": "Uma interface entre Service e Repository pode:",
    "options": [
      "Reduzir dependência da implementação concreta.",
      "Aumentar SQL Injection.",
      "Eliminar necessidade de nomes.",
      "Quebrar List.",
      "Forçar classe abstrata."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Reduzir dependência da implementação concreta. — esta alternativa expressa o conceito técnico adequado para o tema Coesão e Acoplamento.",
      "Incorreta: Aumentar SQL Injection. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Eliminar necessidade de nomes. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Quebrar List. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Forçar classe abstrata. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento."
    ]
  },
  {
    "id": 90,
    "theme": "Coesão e Acoplamento",
    "stem": "Bom design busca:",
    "options": [
      "Alta coesão e baixo acoplamento.",
      "Baixa coesão e alto acoplamento.",
      "Alto acoplamento sempre.",
      "Tudo em uma classe.",
      "Sem responsabilidades definidas."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Alta coesão e baixo acoplamento. — esta alternativa expressa o conceito técnico adequado para o tema Coesão e Acoplamento.",
      "Incorreta: Baixa coesão e alto acoplamento. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Alto acoplamento sempre. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Tudo em uma classe. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento.",
      "Incorreta: Sem responsabilidades definidas. — não corresponde ao comportamento/conceito correto em Coesão e Acoplamento."
    ]
  },
  {
    "id": 91,
    "theme": "Números Mágicos e Constantes",
    "stem": "Número mágico é:",
    "options": [
      "Valor literal sem contexto no código.",
      "Constante bem nomeada.",
      "Variável local com nome claro.",
      "Classe abstrata.",
      "Interface funcional."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Valor literal sem contexto no código. — esta alternativa expressa o conceito técnico adequado para o tema Números Mágicos e Constantes.",
      "Incorreta: Constante bem nomeada. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Variável local com nome claro. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Classe abstrata. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Interface funcional. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes."
    ]
  },
  {
    "id": 92,
    "theme": "Números Mágicos e Constantes",
    "stem": "Qual exemplo evita número mágico?",
    "options": [
      "if (idade >= 18)",
      "if (idade >= IDADE_MINIMA_MAIORIDADE)",
      "if (x > 7)",
      "if (p == 3)",
      "if (tipo == 2)"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: if (idade >= 18) — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Correta: if (idade >= IDADE_MINIMA_MAIORIDADE) — esta alternativa expressa o conceito técnico adequado para o tema Números Mágicos e Constantes.",
      "Incorreta: if (x > 7) — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: if (p == 3) — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: if (tipo == 2) — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes."
    ]
  },
  {
    "id": 93,
    "theme": "Números Mágicos e Constantes",
    "stem": "Por que números mágicos são ruins?",
    "options": [
      "Dificultam compreensão e manutenção.",
      "Aumentam segurança.",
      "Melhoram compilação sempre.",
      "São obrigatórios em Java.",
      "Substituem comentários."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Dificultam compreensão e manutenção. — esta alternativa expressa o conceito técnico adequado para o tema Números Mágicos e Constantes.",
      "Incorreta: Aumentam segurança. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Melhoram compilação sempre. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: São obrigatórios em Java. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Substituem comentários. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes."
    ]
  },
  {
    "id": 94,
    "theme": "Números Mágicos e Constantes",
    "stem": "Onde definir constante de domínio?",
    "options": [
      "Em local nomeado e coerente com a regra.",
      "Espalhada em todos os métodos.",
      "Apenas no comentário.",
      "Dentro do SQL concatenado.",
      "Em variável x."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Em local nomeado e coerente com a regra. — esta alternativa expressa o conceito técnico adequado para o tema Números Mágicos e Constantes.",
      "Incorreta: Espalhada em todos os métodos. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Apenas no comentário. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Dentro do SQL concatenado. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Em variável x. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes."
    ]
  },
  {
    "id": 95,
    "theme": "Números Mágicos e Constantes",
    "stem": "Qual nome de constante é mais claro?",
    "options": [
      "N",
      "VALOR",
      "MAX_TENTATIVAS_LOGIN",
      "X1",
      "COD"
    ],
    "answer": 2,
    "explanations": [
      "Incorreta: N — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: VALOR — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Correta: MAX_TENTATIVAS_LOGIN — esta alternativa expressa o conceito técnico adequado para o tema Números Mágicos e Constantes.",
      "Incorreta: X1 — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: COD — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes."
    ]
  },
  {
    "id": 96,
    "theme": "Números Mágicos e Constantes",
    "stem": "Qual alternativa é melhor?",
    "options": [
      "Thread.sleep(300000)",
      "Thread.sleep(TEMPO_EXPIRACAO_SESSAO_MS)",
      "Thread.sleep(x)",
      "Thread.sleep(5*60*1000) sem nome",
      "Thread.sleep(valor) sem contexto"
    ],
    "answer": 1,
    "explanations": [
      "Incorreta: Thread.sleep(300000) — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Correta: Thread.sleep(TEMPO_EXPIRACAO_SESSAO_MS) — esta alternativa expressa o conceito técnico adequado para o tema Números Mágicos e Constantes.",
      "Incorreta: Thread.sleep(x) — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Thread.sleep(5*60*1000) sem nome — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Thread.sleep(valor) sem contexto — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes."
    ]
  },
  {
    "id": 97,
    "theme": "Números Mágicos e Constantes",
    "stem": "Números mágicos podem aparecer em:",
    "options": [
      "Condições, cálculos e tempos sem nome.",
      "Somente em List.",
      "Somente em Map.",
      "Somente em interface.",
      "Nunca em Java."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Condições, cálculos e tempos sem nome. — esta alternativa expressa o conceito técnico adequado para o tema Números Mágicos e Constantes.",
      "Incorreta: Somente em List. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Somente em Map. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Somente em interface. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Nunca em Java. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes."
    ]
  },
  {
    "id": 98,
    "theme": "Números Mágicos e Constantes",
    "stem": "Quando literal numérico pode ser aceitável?",
    "options": [
      "Quando é óbvio e universal no contexto, como incremento unitário simples.",
      "Sempre.",
      "Nunca.",
      "Somente se for 999.",
      "Somente em Controller."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Quando é óbvio e universal no contexto, como incremento unitário simples. — esta alternativa expressa o conceito técnico adequado para o tema Números Mágicos e Constantes.",
      "Incorreta: Sempre. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Nunca. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Somente se for 999. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Somente em Controller. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes."
    ]
  },
  {
    "id": 99,
    "theme": "Números Mágicos e Constantes",
    "stem": "Qual refatoração é adequada?",
    "options": [
      "Extrair constante com nome expressivo.",
      "Adicionar comentário e manter tudo igual sempre.",
      "Duplicar em outra classe.",
      "Trocar por outro número sem nome.",
      "Mover para View."
    ],
    "answer": 0,
    "explanations": [
      "Correta: Extrair constante com nome expressivo. — esta alternativa expressa o conceito técnico adequado para o tema Números Mágicos e Constantes.",
      "Incorreta: Adicionar comentário e manter tudo igual sempre. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Duplicar em outra classe. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Trocar por outro número sem nome. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Mover para View. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes."
    ]
  },
  {
    "id": 100,
    "theme": "Números Mágicos e Constantes",
    "stem": "Número mágico em regra de negócio deve ser evitado porque:",
    "options": [
      "A regra fica escondida no valor literal.",
      "Java não compila.",
      "Map deixa de funcionar.",
      "Interface vira classe.",
      "JDBC fecha conexão."
    ],
    "answer": 0,
    "explanations": [
      "Correta: A regra fica escondida no valor literal. — esta alternativa expressa o conceito técnico adequado para o tema Números Mágicos e Constantes.",
      "Incorreta: Java não compila. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Map deixa de funcionar. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: Interface vira classe. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes.",
      "Incorreta: JDBC fecha conexão. — não corresponde ao comportamento/conceito correto em Números Mágicos e Constantes."
    ]
  }
];
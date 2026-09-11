# Sondagem e solos

Abas 2 e 3. Aqui entra o perfil do subsolo — o dado que governa todo o resto.

## Sondagem / NSPT

A sondagem é lançada **metro a metro**: para cada profundidade, um valor de
\(N_{SPT}\) e uma classificação de solo.

| Coluna | Conteúdo |
| :-- | :-- |
| Profundidade | 1 m, 2 m, 3 m… |
| \(N_{SPT}\) | Número de golpes |
| Tipo de solo | Classificação por frações — ver abaixo |

### Tipos de solo

O solo é classificado pelas frações que o compõem, na ordem em que predominam —
quinze combinações ao todo:

| | | |
| :-- | :-- | :-- |
| Areia | Silte | Argila |
| Areia siltosa | Silte arenoso | Argila arenosa |
| Areia siltoargilosa | Silte arenoargiloso | Argila arenossiltosa |
| Areia argilosa | Silte argiloso | Argila siltosa |
| Areia argilossiltosa | Silte argiloarenoso | Argila siltoarenosa |

!!! warning "A classificação escolhe os parâmetros de cálculo"

    Não é rótulo. É ela que seleciona \(K\) e \(lpha\) de Aoki-Velloso,
    \(C\) de Décourt-Quaresma, \(lpha_T\) de Teixeira e o fator \(m\) das
    molas.

    Trocar **areia siltosa** por **silte arenoso** reduz \(K\) de 0,80 para
    0,55 MPa, **31 % a menos de resistência de ponta**. Ver
    [Tabelas de parâmetros](../formulacoes/tabelas.md).

### Múltiplos furos

O SPX aceita mais de um perfil de sondagem no mesmo projeto, cada um
identificado. Estacas diferentes podem ser associadas a furos diferentes — é o
que permite tratar uma obra onde o subsolo varia de um lado a outro.

### Leitor editável de PDFs

O SPX lê boletins de sondagem direto do **PDF**, extraindo profundidades, golpes
e descrição do solo para a tabela. A extração é **editável**: o que sair errado
se corrige antes de calcular.

Numa obra com quinze furos de vinte metros são trezentas linhas a digitar, e
cada uma é uma chance de trocar **areia siltosa** por **silte arenoso**.

!!! warning "Confira a classificação do solo"

    Extração automática depende do layout do boletim. Confira sempre a tabela
    resultante contra o original, com atenção à **classificação do solo** — é ela que
    seleciona os parâmetros de todos os métodos.

!!! tip "No SPX AI a leitura é inteligente"

    O [SPX AI](../../spx-ai/recursos-ia.md#leitura-inteligente-de-pdfs) lida com
    variação de formato, tabelas com células mescladas e descrições fora do
    padrão — os laudos que o leitor comum não interpreta.

### Perfil 3D {: #perfil-3d }

Com mais de um furo, o SPX interpola a estratigrafia e apresenta um **perfil
tridimensional** do terreno. É o recurso que o SPO não tem, e serve para duas
coisas: perceber camadas que mergulham e justificar, visualmente, por que duas
estacas próximas receberam comprimentos diferentes.

## Propriedades dos Solos

Terceira aba. Traz os parâmetros por camada — pesos específicos e o que mais
alimenta a tensão geostática usada no
[recalque](../formulacoes/recalque.md#parcela-do-solo).

O programa oferece uma tabela de **pesos específicos típicos** por consistência
e compacidade, acessível pela própria aba, para quem não tem ensaio.

!!! note "Valor adotado na ausência de dado"

    Quando não há correspondência na tabela, o programa adota
    \(\gamma = 18\) kN/m³. É valor razoável para solo médio, mas registre a
    premissa na memória de cálculo quando ele governar o resultado.

## Boas práticas

- **Não dimensione com a ponta no último metro investigado.** Os métodos
  precisam de camadas abaixo da ponta para compor o \(N_p\); na última cota,
  o programa repete o último valor, o que é otimista se o perfil estava
  melhorando.
- **Desconfie de \(N_{SPT} > 50\).** Está fora da faixa de calibração da
  maioria das correlações.
- **Sondagem rasa produz projeto raso.** Se o perfil não alcança a profundidade
  necessária, a tabela de capacidade simplesmente termina — e a leitura correta
  é "falta investigação", não "a estaca não passa".

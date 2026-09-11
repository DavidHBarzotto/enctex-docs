# Dimensionamento

Segunda aba. É onde se escolhe **como o bloco é calculado** e se obtêm as
armaduras.

## Comportamento do bloco

A primeira escolha, e a que mais importa:

| Opção | Disponível em |
| :-- | :-- |
| Bloco Rígido (Compressão) | PCO e PCX |
| Bloco Rígido (Arrancamento/Tração) | PCO e PCX |
| Bloco Flexível (Compressão) | **Só PCX** |
| Bloco Flexível (Arrancamento/Tração) | **Só PCX** |

!!! warning "Rígido ou flexível não é preferência"

    É uma questão de **comportamento**, decidida pela geometria. O critério da
    NBR 6118 compara a altura do bloco com a distância da face do pilar ao eixo
    da estaca.

    Um bloco esbelto calculado como rígido tem a armadura **subestimada**: a
    biela que o modelo supõe não chega a se formar, e o que acontece de fato é
    flexão. Ver [Verificações](../formulacoes/verificacoes.md#rigidez-do-bloco).

## Modelo (apenas para rígido)

| Modelo | O que faz |
| :-- | :-- |
| **Blévot** | Fórmula clássica, tabelada por arranjo. [Formulação](../formulacoes/blevot.md) |
| **MBT** | Bielas e tirantes dos Comentários do IBRACON, com espraiamento calculado. [Formulação](../formulacoes/mbt.md) |

O MBT tende a dar braço de alavanca menor e, portanto, **mais armadura** que
Blévot para o mesmo bloco.

!!! tip "Calcule pelos dois"

    Divergência grande entre eles sinaliza bloco em que a geometria do nó está
    governando — e nesse caso vale rodar o modelo em
    [elementos finitos](../formulacoes/elementos-finitos.md) para ver o campo de
    tensões real.

### Fator KR (Blévot)

Disponível quando o modelo é Blévot: **0,90** ou **0,95**.

É o coeficiente que pondera a contribuição da dimensão do pilar na fórmula do
tirante. O valor menor é o conservador — resulta em mais armadura.

## Modelo (apenas flexível)

Aparece no [PCX](../../pcx/index.md), quando o comportamento escolhido é
flexível:

| Modelo | Hipótese |
| :-- | :-- |
| **Viga biapoiada** | As estacas são os apoios. Com 3 ou mais estacas, o programa usa análise de **grelha** |
| **Viga engastada e livre** | Balanço a partir do pilar |

Ver [blocos flexíveis](../../pcx/blocos-flexiveis.md).

## Bitolas

As bitolas disponíveis para o quadro de ferro são escolhidas por bloco.

!!! warning "Comportamento, modelo, KR e bitolas são POR BLOCO"

    Mudar qualquer um deles no Bloco 1 não afeta o Bloco 2. É o comportamento
    correto num projeto com blocos de portes diferentes — mas significa que
    conferir um bloco não confere os demais.

## Resultados

A aba apresenta:

**Análise de tensões e limites (bielas)** — as tensões nos nós, sob o pilar e
sobre as estacas, comparadas com os limites.

**Armadura principal de tração** — o tirante, por lado do polígono de estacas.

**Comparação com o MEF**, quando o modelo em elementos finitos foi resolvido:
tensão no meio da biela, ângulo da biela, tensão máxima e média nos nós do
pilar e das estacas. É a conferência direta entre o modelo idealizado e o campo
real.

!!! info "Uma nota que o programa emite, e vale ler"

    Para blocos com **mais de quatro estacas**, os fatores de esmagamento de
    Blévot são **extrapolados** — os ensaios originais cobriram de duas a
    quatro estacas.

    Não invalida o resultado, mas é exatamente o tipo de premissa que deve
    constar da memória de cálculo.

## Mensagens

??? question "Tensão no nó acima do limite"

    O concreto está esmagando. Armadura não resolve: aumente a altura do bloco,
    a seção do pilar ou o \(f_{ck}\). Ver
    [Verificações](../formulacoes/verificacoes.md#nos-de-compressao).

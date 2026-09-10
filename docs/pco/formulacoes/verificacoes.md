# Verificações

Além da armadura de tirante, o bloco precisa passar em verificações que o
modelo de bielas não resolve sozinho.

## Nós de compressão

Os nós são os pontos em que as bielas se encontram: sob o pilar e sobre cada
estaca. É neles que a tensão é máxima.

O limite é o da NBR 6118 para nó com bielas:

\[
f_{cd1} = 0{,}85\,\alpha_{v2}\,f_{cd}
\qquad
\alpha_{v2} = 1 - \frac{f_{ck}}{250}
\]

No [MBT](mbt.md) essa verificação **é o próprio critério** que define a
profundidade de espraiamento — o modelo procura o \(y\) em que a tensão cai até
\(f_{cd1}\). Em Blévot, ela é feita à parte.

!!! warning "Nó reprovado não se resolve com armadura"

    Se a tensão no nó supera \(f_{cd1}\), o concreto está esmagando. Acrescentar
    aço não muda nada: o caminho é **aumentar a altura do bloco**, **ampliar a
    seção do pilar** ou **subir o \(f_{ck}\)**.

    O mesmo vale para a biela.

## Punção

A punção é o risco de o pilar **perfurar** o bloco, arrancando um tronco de
cone de concreto. Ela governa quando o bloco é relativamente baixo e o pilar
concentrado.

O PCO verifica a punção conforme a NBR 6118, nas superfícies críticas
pertinentes.

!!! info "Punção e rigidez"

    Em bloco **rígido** bem proporcionado, a punção raramente governa: a biela
    leva a carga às estacas antes de a superfície de punção se formar.

    Ela passa a importar à medida que o bloco se aproxima do comportamento
    flexível — que é exatamente a faixa em que o modelo de bielas perde
    validade e o [PCX](../../pcx/index.md) oferece o cálculo como viga.

## Cisalhamento

A verificação ao esforço cortante segue a NBR 6118.

Em **bloco flexível** calculado como viga — recurso do
[PCX](../../pcx/blocos-flexiveis.md) — o cortante é verificado com o critério
de viga, e a armadura transversal é dimensionada quando a reação supera a
parcela resistida pelo concreto.

## Rigidez do bloco

A classificação entre rígido e flexível não é detalhe de nomenclatura: ela
decide **qual formulação vale**.

| Comportamento | Modelo aplicável |
| :-- | :-- |
| **Rígido** | Bielas e tirantes — [Blévot](blevot.md) ou [MBT](mbt.md) |
| **Flexível** | Viga à flexão simples — [PCX](../../pcx/blocos-flexiveis.md) |

O critério de rigidez da NBR 6118 compara a altura do bloco com a distância da
face do pilar ao eixo da estaca. Bloco que não atende à condição não forma
biela bem definida, e dimensioná-lo por Blévot subestima a armadura.

!!! tip "Na dúvida, calcule dos dois jeitos"

    Um bloco na fronteira entre rígido e flexível merece as duas contas. Se a
    armadura de flexão simples for maior que a de tirante, é ela que deve
    prevalecer — a diferença mede o quanto o bloco já não se comporta como
    rígido.

    É para isso que o [PCX](../../pcx/index.md) existe.

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - As verificações cobrem **estado limite último**. Fissuração e
      deformação em serviço não são verificadas.
    - **Fendilhamento e cintamento** — a armadura que costura o espalhamento
      da compressão sob o pilar — não estão contemplados.
    - A **ancoragem** do tirante nas extremidades é decisiva no bloco: o
      tirante só existe se estiver ancorado além do eixo da estaca. Confira o
      detalhamento.
    - Situações transitórias — bloco durante a concretagem, arrasamento das
      estacas — estão fora do escopo.

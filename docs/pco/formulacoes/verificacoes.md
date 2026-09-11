# Verificações

Além da armadura de tirante, o bloco precisa passar em verificações que o
modelo de bielas não resolve sozinho.

---

## Rigidez do bloco

A classificação entre rígido e flexível não é nomenclatura: ela decide **qual
formulação vale**.

A NBR 6118 (22.7.1) define que os blocos "podem ser considerados rígidos ou
flexíveis por critério análogo ao definido para sapatas". Na direção
considerada:

\[
h \ge \frac{A - a_p}{3}
\]

onde \(h\) é a altura do bloco, \(A\) a dimensão do bloco naquela direção e
\(a_p\) a dimensão do pilar na mesma direção.

Um critério equivalente e mais direto de usar: o bloco pode ser considerado
rígido quando o **ângulo da biela for maior ou igual a 45°**.

### O que a norma diz sobre cada comportamento

**Bloco rígido** (22.2.7.1) — o comportamento estrutural é caracterizado por:

- trabalho à flexão nas duas direções, usualmente simulado por bielas e
  tirantes, mas com **trações essencialmente concentradas nas linhas sobre as
  estacas** — reticulado definido pelo eixo das estacas, com **faixas de
  largura igual a 1,2 vez o diâmetro da estaca**;
- forças transmitidas do pilar para as estacas essencialmente por **bielas de
  compressão**, de forma e dimensões complexas;
- trabalho ao cisalhamento também em duas direções, **não apresentando ruínas
  por tração diagonal, e sim por compressão das bielas**, analogamente às
  sapatas.

**Bloco flexível** — "para esse tipo de bloco deve ser realizada uma análise
mais completa, desde a distribuição dos esforços nas estacas, dos tirantes de
tração, do cisalhamento, até a necessidade da verificação da punção".

| Comportamento | Modelo aplicável |
| :-- | :-- |
| **Rígido** | Bielas e tirantes — [Blévot](blevot.md) ou [MBT](mbt.md) |
| **Flexível** | Viga à flexão — [PCX](../../pcx/blocos-flexiveis.md) |

!!! tip "Na fronteira, calcule dos dois jeitos"

    Um bloco esbelto calculado como rígido tem a armadura **subestimada**: a
    biela que o modelo supõe não chega a se formar, e o que acontece de fato é
    flexão.

    Se a armadura de flexão resultar maior que a de tirante, é ela que deve
    prevalecer — a diferença mede o quanto o bloco já não se comporta como
    rígido.

---

## Nós de compressão

Os nós são os pontos em que as bielas se encontram: sob o pilar e sobre cada
estaca. É neles que a tensão é máxima — e **os dois têm limites diferentes**.

| Nó | Tipo | Limite NBR 6118 |
| :-- | :-- | :-- |
| Sob o pilar | CCC — só compressão | \(f_{cd1} = 0{,}85\,\alpha_{v2}\,f_{cd}\) |
| Sobre a estaca | CCT — duas compressões e uma tração | \(f_{cd3} = 0{,}72\,\alpha_{v2}\,f_{cd}\) |

com \(\alpha_{v2} = 1 - f_{ck}/250\).

No [MBT](mbt.md) essa verificação **é o próprio critério** que define a
profundidade de espraiamento. Em [Blévot](blevot.md), os limites são outros —
\(\alpha_{lim} K_R f_{cd}\), com \(\alpha_{lim}\) de 1,4 a 2,1 conforme o
número de estacas —, estabelecidos pelos próprios ensaios dos autores.

!!! warning "Nó reprovado não se resolve com armadura"

    Se a tensão supera o limite, o concreto está esmagando. Acrescentar aço não
    muda nada: o caminho é **aumentar a altura do bloco**, **ampliar a seção do
    pilar** ou **subir o \(f_{ck}\)**.

!!! info "Os limites da norma não consideram confinamento"

    \(f_{cd1}\) e \(f_{cd3}\) foram estabelecidos para **elementos planos**. Um
    bloco é tridimensional, e o confinamento gerado pelo detalhamento em gaiola
    aumenta substancialmente a resistência do concreto — Blévot mediu bielas
    rompendo a mais de 150 % da resistência média.

    Por isso esses limites são conservadores quando aplicados a blocos. É uma
    conservação conhecida e aceita, não um erro.

---

## Punção

A punção é o risco de o pilar **perfurar** o bloco, arrancando um tronco de
cone de concreto.

!!! info "Em bloco rígido bem proporcionado, ela não governa"

    As bielas comprimidas **não apresentam risco de ruptura por punção** desde
    que a inclinação fique no intervalo \(40^\circ \le \alpha \le 55^\circ\) —
    exatamente a faixa que delimita a altura útil em
    [Blévot](blevot.md#altura-util).

    É coerente com o que a norma diz do bloco rígido: ele não rompe por tração
    diagonal, e sim por compressão das bielas.

A punção passa a importar à medida que o bloco se aproxima do comportamento
flexível — e a própria NBR 6118 cita a "necessidade da verificação da punção"
justamente ao tratar do bloco flexível.

A tensão resistente no contorno \(C_1\), definido pelo perímetro do pilar
contido no bloco, segue a analogia com lajes:

\[
\tau_{Rd} = 0{,}27\,\alpha_{v2}\,f_{cd}
\qquad\qquad
\tau_{Sd} = \frac{P}{C_1\,d}
\]

---

## Cisalhamento

Em **bloco rígido**, o cisalhamento é absorvido pelas bielas — a norma é
explícita ao dizer que não há ruína por tração diagonal.

Em **bloco flexível** calculado como viga — recurso do
[PCX](../../pcx/blocos-flexiveis.md) — o cortante é verificado com critério de
viga, e a armadura transversal é dimensionada quando a reação supera a parcela
resistida pelo concreto.

---

## Ancoragem do tirante

Decisiva, e frequentemente subestimada: **o tirante só existe se estiver
ancorado**. Um tirante que termina antes do eixo da estaca é uma barra solta na
base do bloco.

A NBR 6118 (22.7.4.1.1) prescreve que as barras se estendam **de face a face**
do bloco, terminem em **gancho nas duas extremidades**, e que a ancoragem seja
medida **a partir das faces internas das estacas**.

!!! warning "É o que inviabiliza muitos blocos flexíveis"

    A ancoragem da armadura do pilar dentro do bloco é uma das verificações
    mais importantes para o funcionamento estrutural, e é **um dos principais
    fatores que inviabilizam o dimensionamento de blocos flexíveis** — o bloco
    baixo simplesmente não tem altura para ancorar o arranque do pilar.

    A própria altura mínima do bloco rígido tem esse segundo condicionante:
    \(d > \ell_{b,\phi,pil}\).

---

## Fendilhamento

A NBR 6118 (22.7.3) determina que, **na região de contato entre o pilar e o
bloco, os efeitos de fendilhamento devem ser considerados**.

!!! warning validade "O PCO não verifica fendilhamento"

    A armadura que costura o espalhamento da compressão sob o pilar não está
    implementada. Em bloco sobre **uma estaca** ela é a armadura principal — e
    ali o programa não se aplica.

    Nos demais casos, calcule-a à parte e registre na memória.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - As verificações cobrem **estado limite último**. Fissuração e deformação
      em serviço não são verificadas.
    - **Fendilhamento e cintamento** não estão contemplados.
    - Situações transitórias — bloco durante a concretagem, arrasamento das
      estacas — estão fora do escopo.
    - A verificação de nós pelo campo de tensões exige o modelo em elementos
      finitos resolvido. Sem ele, a checagem recai nas áreas idealizadas do
      modelo de bielas, que supõem distribuição uniforme onde há concentração.

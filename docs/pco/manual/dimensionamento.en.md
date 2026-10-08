# Design

The second tab. This is where you choose **how the pile cap is calculated** and
obtain the reinforcement.

## Pile cap behaviour { #comportamento-do-bloco }

The first choice, and the one that matters most:

| Option | Available in |
| :-- | :-- |
| Rigid Cap (Compression) | PCO and PCX |
| Rigid Cap (Uplift/Tension) | PCO and PCX |
| Flexible Cap (Compression) | **PCX only** |
| Flexible Cap (Uplift/Tension) | **PCX only** |

!!! warning "Rigid or flexible is not a preference"

    It is a question of **behaviour**, decided by the geometry. The NBR 6118
    criterion compares the depth of the cap with the distance from the column
    face to the pile axis.

    A slender cap designed as rigid has its reinforcement **underestimated**:
    the strut the model assumes never forms, and what actually happens is
    bending. See [Checks](../formulacoes/verificacoes.md#rigidez-do-bloco).

## Model (rigid only) { #modelo-apenas-para-rigido }

| Model | What it does |
| :-- | :-- |
| **Blévot** | Classic formula, tabulated by arrangement. [Formulation](../formulacoes/blevot.md) |
| **MBT** | Strut and tie from the IBRACON Commentaries, with calculated spreading. [Formulation](../formulacoes/mbt.md) |

MBT tends to give a smaller lever arm and therefore **more reinforcement** than
Blévot for the same cap.

!!! tip "Calculate with both"

    A large divergence between them signals a cap in which the node geometry
    is governing — and in that case it is worth running the
    [finite element](../formulacoes/elementos-finitos.md) model to see the real
    stress field.

### KR factor (Blévot) { #fator-kr-blevot }

Available when the model is Blévot: **0.90** or **0.95**.

It is the coefficient that accounts for the **loss of concrete strength over
time due to sustained loads — the Rüsch effect**. It enters the stress limit of
the struts:

\[
\sigma_{cd,b,lim} = \alpha_{lim}\,K_R\,f_{cd}
\]

with \(\alpha_{lim}\) equal to 1.4, 1.75 or 2.1 depending on whether the cap
has two, three, or four or more piles.

!!! info "It does not touch the reinforcement"

    \(K_R\) acts **only on the stress limit**, not on the tie force. Adopting
    0.90 is the conservative choice: it makes the strut check more
    restrictive, without changing the calculated steel area.

    See [Blévot & Frémy](../formulacoes/blevot.md#o-limite-e-o-coeficiente-kr).

## Model (flexible only) { #modelo-apenas-flexivel }

Appears in [PCX](../../pcx/index.md), when the chosen behaviour is flexible:

| Model | Assumption |
| :-- | :-- |
| **Simply supported beam** | The piles are the supports. With 3 or more piles, the program uses a **grillage** analysis |
| **Cantilever beam** | Cantilever from the column |

See [flexible pile caps](../../pcx/blocos-flexiveis.md).

## Bar sizes { #bitolas }

The bar sizes available for the bar schedule are chosen per pile cap.

!!! warning "Behaviour, model, KR and bar sizes are set PER PILE CAP"

    Changing any of them in Cap 1 does not affect Cap 2. It is the correct
    behaviour in a project with caps of different sizes — but it means that
    checking one cap does not check the others.

## Results { #resultados }

The tab shows:

**Stress analysis and limits (struts)** — the stresses at the nodes, under the
column and over the piles, compared with the limits.

**Main tension reinforcement** — the tie, per side of the pile polygon.

**Comparison with FEM**, when the finite element model has been solved: stress
at mid-strut, strut angle, maximum and average stress at the column and pile
nodes. It is the direct check between the idealised model and the real field.

!!! info "A note the program issues, worth reading"

    For caps with **more than four piles**, Blévot's crushing factors are
    **extrapolated** — the original tests covered two to four piles.

    It does not invalidate the result, but it is exactly the kind of
    assumption that should be stated in the calculation report.

## Messages { #mensagens }

??? question "Node stress above the limit"

    The concrete is crushing. Reinforcement does not solve it: increase the
    cap depth, the column section or \(f_{ck}\). See
    [Checks](../formulacoes/verificacoes.md#nos-de-compressao).

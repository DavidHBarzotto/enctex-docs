# Strut-and-Tie Method (MBT)

The model of **Santos, Marquesi & Stucchi (2015)**, published in IBRACON's
*Comentários Técnicos e Exemplos de Aplicação da ABNT NBR 6118:2014*
(technical commentaries and worked examples on NBR 6118:2014).

It arose from a concrete need: the 2014 revision of NBR 6118 introduced
**strength limits for nodes and struts** that did not exist before, and those
limits are lower than those of Blévot's method. A cap that passed by Blévot
might not pass the code — and a method was missing that reconciled the two
without the excessive conservatism of Fusco's method.

MBT combines Blévot's classic model with Fusco's **load spreading concept**.

---

## The spreading problem { #o-problema-do-espraiamento }

In Blévot, the vertical projection of the strut is the effective depth \(d\),
and the column dimension enters through a tabulated term.

MBT looks at the node under the column. The load does not enter the cap
through the exact area of the column: it **spreads** as it penetrates the
concrete, at 45°, and the effective compression area grows with depth. The
strut starts at the point where the stress over this enlarged area drops to
the resisting limit.

Calling this depth \(y\), the enlarged area is

\[
A_{amp} = (a_p + 2y)\,(b_p + 2y)
\]

and the internal lever arm becomes

\[
z = d - \frac{y}{2}
\]

!!! info "The difference in geometry, in one sentence"

    Blévot defines the tangent of the angle by the ratio \(d/L_{proj}\); MBT
    defines it by \(z/L_{proj}\), with \(z = d - 0.5y\).

    Since \(z < d\), the MBT strut is **flatter** than Blévot's — and the tie is
    more heavily loaded, so there is more reinforcement.

The width of the strut in the node region comes from

\[
a_{bie} = \frac{a_p}{2} + y\cos\theta
\qquad\text{or}\qquad
a_{bie} = \frac{a_{p,amp}}{2}\,\sin\theta
\]

---

## The two nodal limits, and they are different { #os-dois-limites-nodais-e-eles-sao-diferentes }

This is the point most often got wrong. NBR 6118 (item 22.3.2) defines
**different** limits depending on the node type:

\[
\sigma^{bie}_{cd,pilar} = \frac{F_{d,pilar}}{A_{amp,pilar}\,\sin^2\theta} \;\le\; f_{cd1}
\]

\[
\sigma^{bie}_{cd,est} = \frac{F_{d,est}}{A_{amp,est}\,\sin^2\theta} \;\le\; f_{cd3}
\]

with

\[
f_{cd1} = 0.85\,\alpha_{v2}\,f_{cd}
\qquad
f_{cd3} = 0.72\,\alpha_{v2}\,f_{cd}
\qquad
\alpha_{v2} = 1 - \frac{f_{ck}}{250}
\]

| Node | Type | Forces acting on it | Limit |
| :-- | :-- | :-- | :-- |
| Under the column | **CCC** | Compression only | \(f_{cd1} = 0.85\,\alpha_{v2}f_{cd}\) |
| Over the pile | **CCT** | Two compressions and **one tension** | \(f_{cd3} = 0.72\,\alpha_{v2}f_{cd}\) |

!!! warning "The pile node allows 15 % less stress"

    It is the tie that makes the difference: the node over the pile anchors the
    tension reinforcement, and the tension cracks the concrete in the nodal
    region, reducing the compressive stress it can bear.

    Using \(f_{cd1}\) at both nodes — the easy mistake — **overestimates the
    capacity of the pile node by 18 %**. In a cap where the pile governs, it is
    the difference between passing and failing.

The strength of the node under the column is adopted, **on the safe side**, as
the value from item 22.1 of NBR 6118 for the CCC node, **regardless of the
number of piles**.

---

## The iterative procedure { #o-roteiro-iterativo }

Since the stress depends on \(\sin^2\theta\), and \(\theta\) depends on \(y\),
there is no closed-form solution. The procedure is:

1. Adopt a value of \(y\) — for example, \(y = 0.2d\).
2. Determine the inclination of the strut, with **\(\theta \ge 45^\circ\)
   desirable**.
3. Check the compressive stress at the node under the column.
4. If it is not equal to the strength limit, **iterate \(y\)** until the
   design stress equals the resistance.
5. Determine the final inclination of the strut and the main reinforcement
   over the piles.
6. Check the compressive stresses at the nodes over the piles.
7. Determine the distribution, skin and other secondary reinforcement.

PCO automates steps 1 to 4: it searches directly for the \(y\) at which the
stress at the column node equals \(f_{cd1}\).

### Three restrictions of the method { #tres-restricoes-do-metodo }

1. The **spreading is always at 45°**. The method does not allow another
   inclination, and the program does not let you change it.
2. In caps on **two piles**, spreading occurs **only in the longitudinal
   direction** of the cap.
3. The strut starts from the centre of the original column's sub-area, **at
   height \(y/2\)**.

---

## The limit on y { #o-limite-de-y }

Spreading does not grow indefinitely: it is confined by the dimensions of the
cap.

\[
a_p + 2y \le 0.85\,L_{x,bloco}
\qquad
b_p + 2y \le 0.85\,L_{y,bloco}
\]

!!! info "Why not 0.4d"

    A limit \(y \le 0.4d\) appears in the literature, often quoted as if it were
    part of MBT. **It is not**: it comes from another formulation.

    What MBT recommends is to control the **depth of the neutral axis**, in the
    same way as is done in bending to ensure plastic deformation capacity. The
    criterion indicated in the preliminary studies is

    \[
    \frac{y}{d} \le 0.3
    \]

    The method's assumption is that the ULS is reached when the strength of the
    upper node **and** the resisting force of the reinforcement are exhausted
    at the same time — and this is only appropriate if the lower node over the
    pile, or the strut, does not exhaust its strength first.

---

## Blévot or MBT? { #blevot-ou-mbt }

| | Blévot & Frémy | MBT |
| :-- | :-- | :-- |
| Tangent of the angle | \(d / L_{proj}\) | \(z / L_{proj}\), with \(z = d - 0.5y\) |
| Column dimension | Sub-area \(a_p/4\) | Area enlarged by 45° spreading |
| Limit at the column node | \(\alpha_{lim} K_R f_{cd}\) — 1.4 to 2.1 depending on the no. of piles | \(f_{cd1} = 0.85\,\alpha_{v2}f_{cd}\) |
| Limit at the pile node | The same | \(f_{cd3} = 0.72\,\alpha_{v2}f_{cd}\) |
| Reinforcement | Less; with a 15 % increase in two-pile caps | **More**, in general |
| Backing | 116 tests of its own | IBRACON Commentaries on NBR 6118 |

!!! tip "How to choose"

    MBT is the model aligned with the IBRACON Commentaries on the current code,
    and it builds the node check into the lever arm calculation itself. If you
    need to justify the design against the current NBR 6118, it is the direct
    route.

    Blévot remains useful as a reference and an order-of-magnitude check — it
    is the method with which most of the built stock was designed.

    **MBT produces more reinforcement than Blévot in most cases.** The
    exception may occur precisely in caps on two piles, because of the 1.15
    factor Blévot applies there.

### Comparison with tests { #comparacao-com-ensaios }

The ratio between measured and predicted failure load, over the set of tests
analysed by Santos et al.:

| Method | Mean | Coefficient of variation |
| :-- | --: | --: |
| Blévot | 1.19 | 0.21 |
| MBT (Santos et al.) | 1.21 to 1.23 | 0.19 to 0.20 |
| Fusco | 1.49 | 0.17 |

MBT has a safety level **equivalent to Blévot's**, with slightly lower
scatter. Fusco is much more conservative, because of the vertical stress
limit in the pile region.

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - Valid for a **rigid cap**, like Blévot.
    - The search for \(y\) **caps** at the geometric limit. When it caps without
      the stress dropping to the limit, the cap does not have the geometry for
      the load: the way out is to increase the depth, the column section or
      \(f_{ck}\) — not the reinforcement.
    - The 45° spreading is an **idealisation**. The real stress field is
      curved, and that is what the [finite element](elementos-finitos.md) model
      lets you check.
    - The NBR 6118 node and strut limits were established for **planar
      elements** and **do not account for the confinement** present in a
      three-dimensional cap. That is why they are conservative here — Blévot
      observed struts failing at stresses above 150 % of the mean concrete
      strength, an effect of the confinement produced by cage detailing.
    - Based on that observation, Santos et al. propose **removing the
      \(\alpha_{v2}\) factor** in the upper node check for caps with four or
      more piles. PCO does not adopt this proposal: it keeps \(\alpha_{v2}\),
      which is the code text.

# Checks

In addition to the tie reinforcement, the cap must pass checks that the strut
model does not resolve on its own.

---

## Pile cap rigidity { #rigidez-do-bloco }

The classification as rigid or flexible is not nomenclature: it decides
**which formulation applies**.

NBR 6118 (22.7.1) states that pile caps "may be considered rigid or flexible
by a criterion analogous to that defined for spread footings". In the
direction considered:

\[
h \ge \frac{A - a_p}{3}
\]

where \(h\) is the depth of the cap, \(A\) the dimension of the cap in that
direction and \(a_p\) the column dimension in the same direction.

An equivalent and more direct criterion: the cap can be considered rigid when
the **strut angle is greater than or equal to 45°**.

### What the code says about each behaviour { #o-que-a-norma-diz-sobre-cada-comportamento }

**Rigid pile cap** (22.2.7.1) — its structural behaviour is characterised by:

- bending in both directions, usually simulated by struts and ties, but with
  **tension essentially concentrated along the lines over the piles** — a grid
  defined by the pile axes, with **strips 1.2 times the pile diameter wide**;
- forces transmitted from the column to the piles essentially by
  **compression struts**, of complex shape and dimensions;
- shear also acting in two directions, **not failing by diagonal tension, but
  by compression of the struts**, analogously to spread footings.

**Flexible pile cap** — "for this type of cap a more complete analysis must be
carried out, from the distribution of forces among the piles, the tension
ties and shear, to the need to check punching".

| Behaviour | Applicable model |
| :-- | :-- |
| **Rigid** | Strut and tie — [Blévot](blevot.md) or [MBT](mbt.md) |
| **Flexible** | Beam in bending — [PCX](../../pcx/blocos-flexiveis.md) |

!!! tip "On the boundary, calculate both ways"

    A slender cap designed as rigid has its reinforcement **underestimated**:
    the strut the model assumes never forms, and what actually happens is
    bending.

    If the bending reinforcement turns out larger than the tie reinforcement,
    it is the one that should prevail — the difference measures how far the
    cap no longer behaves as rigid.

---

## Compression nodes { #nos-de-compressao }

The nodes are the points where the struts meet: under the column and over each
pile. That is where the stress is highest — and **the two have different
limits**.

| Node | Type | NBR 6118 limit |
| :-- | :-- | :-- |
| Under the column | CCC — compression only | \(f_{cd1} = 0.85\,\alpha_{v2}\,f_{cd}\) |
| Over the pile | CCT — two compressions and one tension | \(f_{cd3} = 0.72\,\alpha_{v2}\,f_{cd}\) |

with \(\alpha_{v2} = 1 - f_{ck}/250\).

In [MBT](mbt.md) this check **is the very criterion** that defines the
spreading depth. In [Blévot](blevot.md), the limits are different —
\(\alpha_{lim} K_R f_{cd}\), with \(\alpha_{lim}\) from 1.4 to 2.1 depending on
the number of piles —, established by the authors' own tests.

!!! warning "A failed node is not fixed with reinforcement"

    If the stress exceeds the limit, the concrete is crushing. Adding steel
    changes nothing: the way out is to **increase the cap depth**, **enlarge
    the column section** or **raise \(f_{ck}\)**.

!!! info "The code limits do not consider confinement"

    \(f_{cd1}\) and \(f_{cd3}\) were established for **planar elements**. A cap
    is three-dimensional, and the confinement produced by cage detailing
    substantially increases the concrete strength — Blévot measured struts
    failing at more than 150 % of the mean strength.

    That is why these limits are conservative when applied to caps. It is a
    known and accepted conservatism, not an error.

---

## Punching { #puncao }

Punching is the risk of the column **punching through** the cap, pulling out a
truncated cone of concrete.

!!! info "In a well proportioned rigid cap, it does not govern"

    The compressed struts **present no risk of punching failure** as long as
    the inclination stays within \(40^\circ \le \alpha \le 55^\circ\) — exactly
    the range that bounds the effective depth in
    [Blévot](blevot.md#altura-util).

    This is consistent with what the code says about the rigid cap: it does not
    fail by diagonal tension, but by compression of the struts.

Punching starts to matter as the cap approaches flexible behaviour — and
NBR 6118 itself mentions the "need to check punching" precisely when dealing
with the flexible cap.

The resisting stress on the perimeter \(C_1\), defined by the perimeter of the
column within the cap, follows the analogy with slabs:

\[
\tau_{Rd} = 0.27\,\alpha_{v2}\,f_{cd}
\qquad\qquad
\tau_{Sd} = \frac{P}{C_1\,d}
\]

---

## Shear { #cisalhamento }

In a **rigid cap**, shear is carried by the struts — the code is explicit that
there is no diagonal tension failure.

In a **flexible cap** designed as a beam — a [PCX](../../pcx/blocos-flexiveis.md)
feature — shear is checked with a beam criterion, and transverse
reinforcement is designed when the reaction exceeds the share resisted by the
concrete.

---

## Tie anchorage { #ancoragem-do-tirante }

Decisive, and often underestimated: **the tie only exists if it is anchored**.
A tie that stops short of the pile axis is a loose bar at the bottom of the
cap.

NBR 6118 (22.7.4.1.1) requires the bars to extend **from face to face** of the
cap, to end in **hooks at both ends**, and the anchorage to be measured **from
the inner faces of the piles**.

!!! warning "It is what makes many flexible caps unfeasible"

    The anchorage of the column reinforcement inside the cap is one of the most
    important checks for structural behaviour, and it is **one of the main
    factors that make flexible caps unfeasible to design** — a shallow cap
    simply does not have the depth to anchor the column starter bars.

    The minimum depth of the rigid cap itself has this second constraint:
    \(d > \ell_{b,\phi,pil}\).

---

## Splitting { #fendilhamento }

NBR 6118 (22.7.3) requires that **splitting effects be considered in the
contact region between the column and the cap**.

!!! warning validade "PCO does not check splitting"

    The reinforcement that ties the spreading of compression under the column
    is not implemented. In a cap on **one pile** it is the main reinforcement —
    and there the program does not apply.

    In other cases, calculate it separately and record it in the report.

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - The checks cover the **ultimate limit state**. Cracking and deformation in
      service are not checked.
    - **Splitting and confinement reinforcement** are not covered.
    - Transient situations — the cap during concreting, cutting off the piles —
      are outside the scope.
    - Checking the nodes against the stress field requires the solved finite
      element model. Without it, the check falls back on the idealised areas of
      the strut model, which assume a uniform distribution where there is
      concentration.

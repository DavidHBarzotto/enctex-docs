# Section optimisation

The feature exclusive to SBX. SBO answers *"does this section work?"*; SBX
answers the reverse question: **what is the cheapest section that works?**

---

## The method { #o-metodo }

**Sequential quadratic programming** — SLSQP, from `scipy.optimize`. It is a
gradient-based method for constrained non-linear optimisation.

The choice is explained by the shape of the problem. The variables are
**continuous** — width and depth in centimetres —, the cost function is smooth
almost everywhere in the domain, and the space has only two dimensions. In a
problem like this, a gradient method converges in dozens of evaluations,
whereas a metaheuristic would spend thousands to reach the same point.

!!! info "Why not enumerate, as in the pile cap optimiser"

    The GCX pile cap optimiser enumerates exhaustively, because there the space
    is **discrete and small** — catalogue bar sizes, an integer number of
    piles.

    Not here: \(b\) and \(h\) are continuous. Enumerating would require
    discretising, and a discretisation giving the same precision would have
    thousands of points. The gradient is the right tool for a continuous
    variable.

---

## The variables { #as-variaveis }

| Section | Variables |
| :-- | :-- |
| Rectangular | width \(b\) and depth \(h\) |
| T | web width \(b_w\) and depth \(h\) |

In the T section, the **flange is given** — \(b_f\) and \(h_f\) do not vary.
It makes sense: the flange is usually the slab, whose geometry comes from
outside the beam.

---

## The objective function { #a-funcao-objetivo }

\[
C = c_{concreto}\cdot V_c \;+\; c_{aço}\cdot\left(P_s + P_{sw}\right)
\]

with \(V_c\) the volume of concrete per metre of beam, \(P_s\) the weight of
the longitudinal reinforcement and \(P_{sw}\) that of the transverse
reinforcement, both using a density of **7850 kg/m³**.

The weight of the stirrups takes the section perimeter into account:

\[
P_{sw} = \frac{A_{sw}}{10^4}\cdot 7850 \cdot \frac{2(b+h)}{100}
\]

### Consumption mode { #o-modo-consumo }

!!! tip "Setting both costs to zero changes what is optimised"

    If you enter a **zero cost** for concrete and steel, the objective becomes
    the **total geometric volume** — concrete plus steel, converted by
    density:

    \[
    C = V_c + \frac{P_s + P_{sw}}{7850}
    \]

    It is useful when you do not have reliable prices, or want the section with
    the lowest material consumption regardless of price. The result changes:
    steel and concrete compete for volume, not for money.

---

## The constraints { #as-restricoes }

### Variable bounds { #limites-das-variaveis }

| Variable | Minimum | Maximum |
| :-- | --: | --: |
| \(b\) or \(b_w\) | 12 cm | 100 cm |
| \(h\) (rectangular) | 20 cm | 300 cm |
| \(h\) (T section) | \(h_f + 5\) cm | 300 cm |

The 12 cm minimum is the NBR 6118 minimum beam width.

### The beam cannot be wider than it is deep { #a-viga-nao-pode-ser-mais-larga-que-alta }

\[
h \ge b
\]

It is the only explicit inequality constraint. Without it, the optimiser would
find flat sections — efficient on paper, odd on site.

### The structural checks enter from the inside { #as-verificacoes-estruturais-entram-por-dentro }

Here is the most important design decision: **the checks are not constraints
of the optimiser**. Each evaluation of the objective function runs the
complete design — bending, shear, torsion, strut interaction — and, when it
fails, returns a **penalty**:

\[
C_{inviável} = 10^6 + b\,h
\]

This way the optimiser only explores sections that actually pass, without
needing analytical expressions for each code constraint — which would number
in the dozens and would change with every code revision.

---

## The initial guess { #o-chute-inicial }

SLSQP is a **local** method: it descends from where it starts. If it starts at
an infeasible section, the gradient of the penalty does not guide it out.

That is why there is a preliminary search. Starting from the section you
entered, while it is infeasible:

1. increase \(h\) by 10 cm;
2. if still infeasible, increase \(b\) by 5 cm;
3. repeat, up to 20 times.

Enlarging the section is the shortest path to feasibility, which is why the
search moves in that direction.

---

## Minimums built into the evaluation { #minimos-embutidos-na-avaliacao }

Two reinforcements enter the cost even when the calculation does not require
them — because they will be built anyway:

| Reinforcement | Value |
| :-- | :-- |
| Minimum longitudinal | \(A_s \ge 3.14\) cm² — four 10 mm bars |
| Skin | \(0.10\%\,b\,h\) for \(h \ge 60\) cm; \(0.05\%\,b\,h\) for \(h \ge 50\) cm; zero below |

Without these minimums, the optimiser would see deep beams as cheaper than they
are: skin reinforcement grows with depth and is precisely what holds back the
elongation of the section.

---

## What to do with the result { #o-que-fazer-com-o-resultado }

!!! warning "The result is continuous; the site is not"

    The optimiser returns something like \(b = 17.3\) cm and \(h = 62.8\) cm.
    No formwork is built like that.

    **Round up**, in multiples of 5 cm, and **run SBO on the rounded section**
    to confirm that it passes. Rounding up almost always keeps feasibility —
    but "almost always" is not "always", and confirming costs one click.

!!! warning "Check whether the optimisation converged"

    SLSQP reports whether it converged. When it does not — which happens with
    very constrained sections, or when the initial guess does not reach the
    feasible region in 20 steps —, the value returned **is not an optimum**, it
    is the point where it stopped.

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - **The optimum is local, not global.** SLSQP descends from the starting
      point. A different initial section may lead to a different result. If the
      result is surprising, try another starting point and compare.
    - The **infeasibility penalty is discontinuous**. Gradient methods assume a
      smooth function, and at the boundary between feasible and infeasible
      that assumption breaks down — the optimiser may oscillate there. The
      \(b\,h\) term in the penalty still points towards smaller sections, which
      are more infeasible; it is the feasible initial guess that compensates for
      this, not the gradient.
    - It optimises **a single section**, with the forces you entered. It does
      not consider that reducing the beam depth changes the self-weight, and
      with it the forces themselves — that feedback is yours.
    - It does not consider **standardisation**: each beam is optimised on its
      own. On a project, ten beams with ten different sections cost more in
      formwork than the sum of the individual optima suggests.
    - It does not consider **serviceability limit states**. The cheapest
      section at ULS may have an unacceptable deflection — which is the common
      case in slender beams.
    - The prices are **yours**. The result is only as good as they are: an
      outdated steel cost shifts the optimum in the wrong direction.

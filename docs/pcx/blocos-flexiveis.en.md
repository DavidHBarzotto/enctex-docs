# Flexible pile caps

The feature exclusive to PCX. When the cap does not meet the rigidity
condition, the strut does not form in a well-defined way and the real
behaviour is **bending**: the cap works as a beam supported on the piles.

The basis is **Silva (2021)**, published in REEC, which compared the three
structural models — strut and tie, simply supported beam and cantilever beam
— by reliability analysis.

---

## When to use it { #quando-usar }

The NBR 6118 criterion is \(h \ge (A - a_p)/3\) in the direction considered,
or, equivalently, **strut angle \(\ge 45^\circ\)**. A cap that does not meet it
is flexible. See
[Checks](../pco/formulacoes/verificacoes.md#rigidez-do-bloco).

!!! warning "Designing a flexible cap by Blévot underestimates the reinforcement"

    It is not a difference of refinement: the strut model assumes a resisting
    mechanism that **does not exist** in that cap. The reinforcement it returns
    is that of a tie which is not what is actually working.

---

## The two models { #os-dois-modelos }

| Model | Assumption |
| :-- | :-- |
| **Simply supported beam** | The piles are the supports; the column applies the load within the span |
| **Cantilever beam** | Cantilever from the column |

The **cantilever** beam model allows displacements in the cap — the pile or
the cap may settle —, but requires the **column to remain undisplaced**, or to
settle uniformly with the cap and the piles.

!!! info "With 3 or more piles, it becomes a grillage"

    The simply supported beam is one-dimensional, and a cap with three or more
    piles is not. In these cases the program automatically switches to a
    **grillage analysis**, which distributes bending in both directions.

---

## Design moment { #momento-atuante }

=== "Simply supported beam"

    \[
    M_{Sd} = \frac{P\,L}{4}
    \]

=== "Cantilever beam"

    \[
    M_{Sd} = \frac{P}{2}\left(\frac{L}{2} - \left(\frac{b}{2} - 0.15\,b\right)\right)
    \]

with \(L\) the distance between pile axes and \(b\) the column dimension.

!!! info "The 15 % distance from the column face"

    It comes from Alonso (2010), and depends on the **column's moment of
    inertia**: \(0.15\,b\) is recommended for columns of large inertia
    (\(b \ge 60\) cm) and \(0.5\,b\) for columns of small inertia.

    It exists because the fixity does not occur at the column face, but a
    little inside it — and the stiffer the column, the closer to the face.

---

## Bending reinforcement { #armadura-de-flexao }

Simple bending design of a rectangular section according to NBR 6118, with
\(\alpha_c = 0.85\) and \(\lambda = 0.8\) for \(f_{ck} \le 50\) MPa.

The neutral axis position comes from equilibrium:

\[
0.272\,f_{cd}\,b\,x^2 - 0.68\,f_{cd}\,b\,d\,x + M_{Sd} = 0
\]

and the reinforcement from

\[
A_s = \frac{0.68\,f_{cd}\,b\,x}{f_{yd}}
\]

The corresponding resisting moment can be written directly as a function of
the reinforcement:

\[
M_{Rd} = A_s f_{yd}\left(d - \frac{A_s f_{yd}}{1.7\,b\,f_{cd}}\right)
\]

### Ductility limit { #limite-de-ductilidade }

\[
\frac{x}{d} \le 0.45 \qquad (f_{ck} \le 50\ \text{MPa})
\]

Above that the section fails without warning — the concrete crushes before the
steel yields. The program **warns you** and caps it at 0.45, but the warning
is meant to be read: the solution is to increase the depth, \(f_{ck}\) or use
compression reinforcement.

!!! warning "Moment above what the section can resist"

    When the discriminant is negative, the section does not resist even with
    \(x = 0.45d\). The way out is the same: depth, \(f_{ck}\) or compression
    reinforcement.

    For strut angles below 35°, Silva (2021) found that the concrete reaches
    **domain 4** and compression reinforcement becomes necessary.

### Minimum reinforcement { #armadura-minima }

\[
\rho_{min} =
\begin{cases}
0.0015 & f_{ck} \le 30\ \text{MPa} \\[4pt]
0.0015 + \dfrac{f_{ck} - 30}{50}\,0.0005 & f_{ck} > 30\ \text{MPa}
\end{cases}
\]

with \(A_{s,min} = \rho_{min}\,b\,h\). When it governs, the program warns you.

---

## Strut check { #verificacao-da-biela }

Even in the beam model, the concrete compression must be checked:

\[
R_1 = 0.27\,\alpha_{v2}\,f_{cd}\,b\,d
\qquad\qquad
S_1 = \frac{P}{2}
\]

---

## Transverse reinforcement { #armadura-transversal }

Beam shear criterion. The resistance is the sum of the concrete and steel
contributions:

\[
V_{Rd} = 0.6\,b\,d\,f_{ctd} \;+\; \frac{A_{sw}}{s}\,0.9\,d\,f_{yd}
\]

with \(f_{ctd} = 0.15\,f_{ck}^{2/3}\).

If the reaction of the most heavily loaded pile does not exceed the concrete
contribution, **minimum detailing** stirrups are adopted, at 20 cm spacing. If
it does, the following is designed

\[
\frac{A_{sw}}{s} = \frac{V - V_c}{0.9\,d\,f_{yd}}
\]

and the adopted spacing lies between **5 and 20 cm**.

!!! info "The most loaded reaction, not the sum"

    Shear is checked against the reaction of the **most heavily loaded** pile
    — it is what defines the critical section, next to the most stressed
    support.

---

## Flexible cap in tension { #bloco-flexivel-tracionado }

PCX handles **Flexible Cap (Uplift/Tension)** explicitly. The mechanism is
reversed: the bending reinforcement moves to the opposite face, and the
anchorage check gains weight — in uplift, it is the anchorage that holds.

---

## What the reliability analysis showed { #o-que-a-analise-de-confiabilidade-mostrou }

Silva (2021) applied Monte Carlo with one million simulations to a two-pile
cap, varying the strut inclination from 30° to 60°, and compared the three
models. The results guide the choice:

| Finding | Practical consequence |
| :-- | :-- |
| The **simply supported beam** produces reinforcement ratios more than 30 % higher than the strut model | It is the least recommended model: bar spacing becomes tight and encourages cracking |
| The **cantilever beam** results in reinforcement close to the strut-and-tie value — less than 6 % difference for \(\theta > 40^\circ\) | It is the most economical flexible alternative |
| The **strut-and-tie** model gives the least reinforcement, but only reaches \(\beta \ge 3.8\) with \(\theta > 60^\circ\) (fck 20) or \(\theta > 45^\circ\) (fck 30) | Meeting the rigid cap criterion **does not guarantee** adequate reliability |
| The strut-and-tie tie equation is independent of \(f_{ck}\) | An inconsistency of the model: increasing \(f_{ck}\) should reduce the reinforcement |

!!! warning validade "Do not design below 35°"

    Because of the significant loss of stiffness when reducing the depth of the
    cap, the guidance is **not to design caps with a strut angle below 35°**,
    even using flexible models — because of the increased displacements and
    the possibility of second-order effects.

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - Modelling as a beam is a **simplification of a solid**. It represents the
      slender cap well; in a cap on the boundary, neither the beam nor the strut
      describes the behaviour precisely, and the defensible practice is to
      adopt the envelope of both.
    - The **grillage** analysis distributes bending in both directions assuming
      linear elastic behaviour. There is no cracking or plastic
      redistribution.
    - \(x/d \le 0.45\) and the minimum reinforcement apply to
      \(f_{ck} \le 50\) MPa.
    - **The failure function for excessive deformation was not checked** by
      Silva (2021): there is no estimate in the literature of the maximum
      allowable deformation for pile caps. Since flexible models are more
      susceptible to deformation, this is an acknowledged gap.
    - The **anchorage of the column reinforcement** inside the cap is not
      checked here — and it is one of the main factors that make flexible caps
      unfeasible in practice.
    - Span-to-depth ratios below 2 (angles above 50°) make it a **deep beam**,
      and warping of the section is not accounted for.
    - **Splitting and confinement reinforcement** are not checked, here as in
      the rigid cap.

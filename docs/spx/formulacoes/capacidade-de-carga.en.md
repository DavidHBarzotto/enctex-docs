# Bearing capacity

SPX calculates bearing capacity by three Brazilian semi-empirical methods, side
by side, for **every possible toe level**. The result is a table by depth, not
a single number.

All of them start from the same decomposition:

\[
R = R_p + R_L
\]

From there on **they diverge, and not only in the coefficients**. The most
important difference — and the one that most confuses anyone comparing results
— is in the **form of the shaft term**:

| Method | Shaft resistance | What \(N\) represents |
| :-- | :-- | :-- |
| **Aoki-Velloso** | \(R_L = U \sum (r_L \, \Delta L)\) — summed layer by layer | \(N_L\) of the layer of thickness \(\Delta L\) |
| **Décourt-Quaresma** | \(R_L = r_L \, U \, L\) — a single value over the whole shaft | \(N_L\) **averaged along the shaft** |
| **Teixeira** | \(R_L = \beta \, N_L \, U \, L\) — likewise | \(N_L\) **averaged along the shaft** |

Only Aoki-Velloso integrates friction layer by layer. In the other two, the
shaft receives **a single stress**, calculated from the average \(N_{SPT}\) —
and applying them in Aoki's summation form gives a different result from the
method.

---

## Aoki-Velloso (1975) { #aoki-velloso-1975 }

### Origin { #origem }

The method was born from correlations with the **CPT**, through the cone tip
resistance (\(q_c\)) and the sleeve friction (\(f_s\)):

\[
r_p = \frac{q_c}{F_1}
\qquad\qquad
r_L = \frac{f_s}{F_2}
\]

Since CPT is little used in Brazil, \(q_c\) was replaced by a correlation with
the SPT, \(q_c = K \, N_{SPT}\), and friction by the friction ratio
\(\alpha = f_s / q_c\).

### Formulation { #formulacao }

\[
r_p = \frac{K \, N_p}{F_1}
\qquad\qquad
r_L = \frac{\alpha \, K \, N_L}{F_2}
\]

\[
R = \frac{K \, N_p}{F_1}A_p \;+\; \frac{U}{F_2}\sum_{1}^{n}\left(\alpha \, K \, N_L \, \Delta L\right)
\]

| Symbol | Meaning |
| :-- | :-- |
| \(K\) | Soil coefficient, in MPa — [table](tabelas.md#aoki-velloso) |
| \(\alpha\) | Soil friction ratio, in % — same table |
| \(F_1, F_2\) | Correction factors by pile type — [table](tabelas.md#fatores-de-execucao) |
| \(N_p\) | \(N_{SPT}\) **at the toe bearing level** |
| \(N_L\) | **Average** \(N_{SPT}\) **in the layer** of thickness \(\Delta L\) |

### The correction factors { #os-fatores-de-correcao }

\(F_1\) and \(F_2\) cover the **scale effect** — the difference between the
pile (prototype) and the CPT cone (model) — and the influence of the
construction method.

Since \(F_1 > 1.0\), the pile's toe resistance turns out **lower than the
cone's**: this is the reverse scale effect, and it is experimentally proven.

\(F_2\) should equal \(F_1\), but it also includes a reading correction: in
the mechanical cone, the lower part of the Begemann sleeve generates a tip
resistance that can double the friction reading. Hence
\(F_1 \le F_2 \le 2F_1\), and the authors adopted the most conservative
assumption:

\[
F_2 = 2\,F_1
\]

!!! note "If the data come from an electric cone"

    In the electric cone and the piezocone the reading is taken at the tip,
    without this error. When using the method with CPT data instead of SPT,
    \(F_2 = F_1\) should be adopted.

---

## Décourt-Quaresma (1978) { #decourt-quaresma-1978 }

### Formulation { #formulacao_1 }

\[
R_L = r_L \, U \, L
\qquad\qquad
R_p = r_p \, A_p
\]

Note that \(R_L\) **is not a summation**: a single friction stress multiplies
the perimeter and the whole length of the shaft.

### The friction stress { #a-tensao-de-atrito }

Décourt (1982) turned the authors' original table into this expression:

\[
r_L = 10\left(\frac{N_L}{3} + 1\right) \qquad [\text{kPa}]
\]

where \(N_L\) is the \(N_{SPT}\) **averaged along the shaft**, **with no
distinction of soil type**.

!!! warning "Three rules about the shaft average"

    1. **Lower bound \(N_L \ge 3\)** and **upper bound \(N_L \le 15\)**.
    2. Décourt (1982) extends the ceiling to \(N_L = 50\) for displacement
       piles and piles bored with bentonite, **keeping \(N_L \le 15\)** for
       Strauss piles and open caissons.
    3. The \(N\) values used to evaluate the **toe resistance are not
       included** in the shaft average.

### The toe resistance { #a-resistencia-de-ponta }

\[
r_p = C \, N_p
\]

\(N_p\) is the average of **three values**: the one at the toe level, the one
immediately above and the one immediately below. The coefficient \(C\) depends
on the soil — [table](tabelas.md#decourt-quaresma) —, fitted with 41 load
tests on precast concrete piles.

### Décourt's factors (1996) { #os-fatores-de-decourt-1996 }

\[
R = \alpha \, C \, N_p \, A_p \;+\; \beta \, 10\left(\frac{N_L}{3}+1\right) U \, L
\]

They extend the method to bored piles — with bentonite slurry or in general,
including open caissons —, CFA, root piles and piles grouted under high
pressure. The values are in the [tables](tabelas.md#fatores-alfa-e-beta).

!!! info "The original method remains for three types"

    For **precast, steel and Franki** piles, \(\alpha = \beta = 1\) — that is,
    the 1978 method without correction.

### Allowable load criterion { #criterio-de-carga-admissivel }

Décourt proposes partial factors, and that is what SPX applies:

\[
P_a = \frac{R_p}{4} + \frac{R_L}{1.3}
\]

The toe takes 4 and the shaft 1.3 because the reliability of the two terms is
different: friction is mobilised with millimetre-scale displacements, whereas
the toe requires settlements of the order of 10 % of the diameter to develop
fully — at the working load, it is not there yet.

For a **bored pile in compression** the additional limit
\(P_a \le 1.25\,R_L\) applies, and the program adopts the smaller value. In
**tension**, the toe is discarded altogether: \(P_a = R_L/1.3\).

---

## Teixeira (1996) { #teixeira-1996 }

### Formulation { #formulacao_2 }

A unified equation, with two parameters that multiply \(N_{SPT}\) directly:

\[
R = R_p + R_L = \alpha \, N_p \, A_p + \beta \, N_L \, U \, L
\]

Here \(\alpha\) and \(\beta\) are already in **kPa** — they are not
dimensionless like Décourt's, despite the same name.

| Symbol | Meaning |
| :-- | :-- |
| \(N_p\) | Average \(N_{SPT}\) over the interval from **4 diameters above** the toe to **1 diameter below** |
| \(N_L\) | \(N_{SPT}\) **averaged along the shaft** |
| \(\alpha\) | Function of the soil **and** the pile type — [table](tabelas.md#teixeira) |
| \(\beta\) | Function of the pile type **only** — same table |

The \([-4D, +D]\) window is the most physically grounded definition of the
three: the stress bulb under the toe extends in proportion to the diameter. As
a consequence, **the same profile gives different toe values for different
diameters** — which is correct, and often surprises those comparing it with
the other methods.

### Allowable load criterion { #criterio-de-carga-admissivel_1 }

SPX applies the general NBR 6122 criterion, \(P_a = R/2\), and for bored piles
it also adopts \(P_a = R_L/4 + R_p/1.5\), keeping the **smaller** of the two.

---

## Comparison { #comparacao }

| | Aoki-Velloso | Décourt-Quaresma | Teixeira |
| :-- | :-- | :-- | :-- |
| Form of \(R_L\) | Sum by layer | Single stress × \(U L\) | Single stress × \(U L\) |
| Shaft \(N\) | Average in the layer | **Average over the shaft**, \(3 \le N_L \le 15\) | **Average over the shaft** |
| Toe \(N\) | At the toe level | Average of 3 values | Average over \([-4D, +D]\) |
| Distinguishes shaft soil? | Yes, through \(\alpha K\) | **No** | No — β depends only on the pile |
| Depends on diameter? | Only in \(A_p\) and \(U\) | Only in \(A_p\) and \(U\) | **Also in \(N_p\)** |
| Coefficient units | \(K\) in MPa, \(\alpha\) in % | \(C\) in kPa | \(\alpha, \beta\) in kPa |

!!! tip "How to read the divergence"

    The three should not agree, and excessive agreement is more suspicious than
    divergence.

    - **A heterogeneous profile** separates Aoki from the other two: only
      Aoki integrates friction layer by layer, while Décourt and Teixeira
      flatten the shaft into an average.
    - **A profile with high \(N\) along the shaft** separates Décourt: the
      ceiling on the average (15 or 50, depending on the pile) truncates the
      shaft contribution.
    - **A large diameter** separates Teixeira, because of the windowed
      \(N_p\).

    The defensible practice is to adopt the **smallest** of the three, or the
    method with known regional calibration, recording the choice in the
    calculation report.

---

## Group effect { #efeito-de-grupo }

Everything above applies to the **single pile**. The capacity of the group may
differ from the sum of the individual piles, and this is quantified by the
efficiency:

\[
\eta = \frac{R_g}{\sum R_i}
\]

The current understanding, supported by tests on groups, is that the
efficiency is **generally equal to or greater than one**:

| Situation | Efficiency |
| :-- | :-- |
| Piles of any type in clay | \(\approx 1\) |
| Bored piles in any soil | \(\approx 1\) |
| Driven piles in sand, especially loose | **> 1** — up to 1.5 or 1.7 |

!!! note "SPX does not apply a group gain"

    There is no appropriate theory or formula to estimate the efficiency, and
    current design practice **does not take** possible benefits into account —
    which is the conservative stance. The program follows this practice: it
    designs per single pile.

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - All three are **semi-empirical**, calibrated against load tests from a
      limited data set. Aoki-Velloso fitted \(F_1\) and \(F_2\) with 63 tests;
      Décourt-Quaresma fitted \(C\) with 41, on precast concrete piles.
    - **Teixeira holds for \(4 < N_{SPT} < 40\)** — the declared range of the
      \(\alpha\) table. Outside it, it extrapolates.
    - **Teixeira does not apply** to floating precast concrete piles in thick
      layers of soft sensitive clay, with \(N_{SPT} < 3\). In that case the
      author tabulates \(r_L\) directly by the nature of the sediment — 20 to
      30 kPa in fluvial-lagoonal clay, 60 to 80 kPa in transitional clay.
    - **They are only valid with \(N_{SPT}\)** from standard penetration
      borings in accordance with NBR 6484.
    - **They do not cover** collapsible, expansive or soft organic soils,
      weathered rock or boulders.
    - **They do not consider** negative skin friction, which must be added
      separately where there is recent fill or lowering of the water table.
    - The original correlations are **broad**, not regional. The recommended
      approach is to keep the formulation and replace \(K\) and \(\alpha\) with
      local correlations of proven validity — such as Alonso (1980) for São
      Paulo and Danziger & Velloso (1986) for Rio de Janeiro.
    - NBR 6122 requires a **load test** above certain numbers of piles. No
      semi-empirical method waives it.

---

## Result presented { #resultado-apresentado }

Each method's table shows, by level:

| Column | Content |
| :-- | :-- |
| Levels (m) | Toe depth, negative |
| \(R_L\) (kN) | Shaft resistance down to that level |
| \(R_p\) (kN) | Toe resistance at that level |
| \(R_t\) (kN) | Sum of the two |
| Final \(P_a\) (kN) | Allowable load, with the applicable factors and limits |

For bored piles in compression, Décourt-Quaresma adds the columns
`Pa escavada` (bored) and `Pa Dec-Qua`, showing the limit and the unlimited
value side by side — so you can see **which criterion governed**.

# Parameter tables

The coefficients of the semi-empirical methods, according to Cintra & Aoki,
*Fundações por estacas: projeto geotécnico*.

!!! warning "Coefficients with the same name, different meanings"

    \(\alpha\) appears in all three methods meaning different things:

    - In **Aoki-Velloso** it is the friction ratio \(f_s/q_c\),
      **dimensionless**, in %.
    - In **Décourt (1996)** it is a toe correction factor, **dimensionless**.
    - In **Teixeira** it is a stress, in **kPa**, that multiplies \(N_{SPT}\).

    The same goes for \(\beta\). They are not interchangeable.

---

## Aoki-Velloso { #aoki-velloso }

### Coefficient K and friction ratio α { #coeficiente-k-e-razao-de-atrito }

Table 1.3 — Aoki and Velloso (1975).

| Soil | \(K\) (MPa) | \(\alpha\) (%) |
| :-- | --: | --: |
| Sand | 1.00 | 1.4 |
| Silty sand | 0.80 | 2.0 |
| Silty-clayey sand | 0.70 | 2.4 |
| Clayey sand | 0.60 | 3.0 |
| Clayey-silty sand | 0.50 | 2.8 |
| Silt | 0.40 | 3.0 |
| Sandy silt | 0.55 | 2.2 |
| Sandy-clayey silt | 0.45 | 2.8 |
| Clayey silt | 0.23 | 3.4 |
| Clayey-sandy silt | 0.25 | 3.0 |
| Clay | 0.20 | 6.0 |
| Sandy clay | 0.35 | 2.4 |
| Sandy-silty clay | 0.30 | 2.8 |
| Silty clay | 0.22 | 4.0 |
| Silty-sandy clay | 0.33 | 3.0 |

!!! note "K and α are inversely related"

    Clean sand has a high \(K\) (1.00 MPa) and a low \(\alpha\) (1.4 %): it
    resists a lot at the toe and little by friction. Clay is the opposite —
    0.20 MPa and 6.0 %. That is why a pile in clay works by its shaft and a
    pile in dense sand works by its toe.

### Correction factors F1 and F2 {: #fatores-de-execucao }

Table 1.5 — updated values, adapted from Aoki and Velloso (1975).

| Pile type | \(F_1\) | \(F_2\) |
| :-- | :-- | :-- |
| Franki | 2.50 | \(2F_1\) |
| Steel | 1.75 | \(2F_1\) |
| Precast | \(1 + D/0.80\) | \(2F_1\) |
| Bored | 3.0 | \(2F_1\) |
| Root, CFA and Omega | 2.0 | \(2F_1\) |

The factors are **divisors**: the larger they are, the lower the capacity. The
scale reflects the effect of construction on the soil — driven piles densify
the ground and get the smallest factors; bored piles, which relieve stresses,
get the largest.

!!! info "Where the updated values came from"

    The original table (1975) only had Franki 2.50, Steel 1.75 and Precast
    1.75.

    - **Precast**: Aoki (1985) found that the method was too conservative for
      small diameters and proposed \(F_1 = 1 + D/0.80\), with \(D\) in metres
      — the diameter or side of the shaft section.
    - **Bored**: \(F_1 = 3.0\) and \(F_2 = 6.0\), from Aoki and Alonso (1991).
    - **Root, CFA and Omega**: \(F_1 = 2.0\) and \(F_2 = 4.0\), from Velloso and
      Lopes (2002).

---

## Décourt-Quaresma { #decourt-quaresma }

### Characteristic soil coefficient C { #coeficiente-caracteristico-do-solo-c }

Table 1.6 — Décourt and Quaresma (1978). Fitted with 41 load tests on precast
concrete piles.

| Soil type | \(C\) (kPa) |
| :-- | --: |
| Clay | 120 |
| Clayey silt \*  | 200 |
| Sandy silt \* | 250 |
| Sand | 400 |

\* weathered rock — residual soils.

### Décourt's α and β factors (1996) {: #fatores-alfa-e-beta }

Tables 1.7 and 1.8. Note that the classification is in **three families** —
clays, intermediate soils and sands —, not by the full soil code.

**Factor α**, on the toe resistance:

| Soil type | Bored in general | Bored (bentonite) | CFA | Root | Grouted under high pressure |
| :-- | --: | --: | --: | --: | --: |
| Clays | 0.85 | 0.85 | 0.30 \* | 0.85 \* | 1.00 \* |
| Intermediate soils | 0.60 | 0.60 | 0.30 \* | 0.60 \* | 1.00 \* |
| Sands | 0.50 | 0.50 | 0.30 \* | 0.50 \* | 1.00 \* |

**Factor β**, on the shaft resistance:

| Soil type | Bored in general | Bored (bentonite) | CFA | Root | Grouted under high pressure |
| :-- | --: | --: | --: | --: | --: |
| Clays | 0.80 \* | 0.90 \* | 1.00 \* | 1.50 \* | 3.00 \* |
| Intermediate soils | 0.65 \* | 0.75 \* | 1.00 \* | 1.50 \* | 3.00 \* |
| Sands | 0.50 \* | 0.60 \* | 1.00 \* | 1.50 \* | 3.00 \* |

\* indicative values only, given the small amount of data available.

!!! warning "The direction of the variation: clay on top, sand at the bottom"

    In \(\alpha\), **clay** gets the highest value (0.85) and **sand** the
    lowest (0.50). It is counter-intuitive for those who expect sand to resist
    more — but the factor does not measure resistance; it measures **how much
    of the original method can be used** in that soil with that construction
    method. Boring relieves the toe more in sand than in clay, and that is what
    the factor penalises.

    Swapping the rows reverses the result: a bored pile in sand would get 70 %
    more toe resistance than it should.

!!! info "Three types are left out"

    Precast, steel and Franki piles keep \(\alpha = \beta = 1\) — the original
    1978 method, without correction.

---

## Teixeira { #teixeira }

Valid for \(4 < N_{SPT} < 40\).

### Parameter α (kPa) { #parametro-kpa }

Table 1.9 — Teixeira (1996). It depends on the soil **and** on the pile type.

| Soil | Precast and steel section | Franki | Open bored | Root |
| :-- | --: | --: | --: | --: |
| Silty clay | 110 | 100 | 100 | 100 |
| Clayey silt | 160 | 120 | 110 | 110 |
| Sandy clay | 210 | 160 | 130 | 140 |
| Sandy silt | 260 | 210 | 160 | 160 |
| Clayey sand | 300 | 240 | 200 | 190 |
| Silty sand | 360 | 300 | 240 | 220 |
| Sand | 400 | 340 | 270 | 260 |
| Sand with gravel | 440 | 380 | 310 | 290 |

### Parameter β (kPa) { #parametro-kpa_1 }

Table 1.10 — it depends **only** on the pile type.

| Pile type | \(\beta\) (kPa) |
| :-- | --: |
| Precast and steel section | 4 |
| Franki | 5 |
| Open bored | 4 |
| Root | 6 |

### Shaft friction in soft sensitive clay { #atrito-lateral-em-argila-mole-sensivel }

Table 1.11 — for the case in which the method **does not apply**: floating
precast concrete piles in thick layers of soft sensitive clay, with \(N_{SPT}\)
normally below 3. Here \(r_L\) is tabulated directly, by the nature of the
sediment.

| Sediment | \(r_L\) (kPa) |
| :-- | --: |
| Fluvial-lagoonal clay (SFL) | 20 to 30 |
| Transitional clay (AT) | 60 to 80 |

**SFL** — Holocene fluvial-lagoonal and bay clays, down to about 20 to 25 m
deep, with \(N_{SPT} < 3\), dark grey, slightly overconsolidated.

**AT** — Pleistocene transitional clays, underlying the SFL, with \(N_{SPT}\)
from 4 to 8, sometimes light grey, with higher preconsolidation stresses than
the SFL.

!!! warning "The program's table covers more types than the source"

    Teixeira tabulated **four** pile types. SPX offers seven, and the remaining
    three — bored with slurry, CFA and Omega — receive **extrapolated** values,
    not published by the author.

    Record this in the calculation report when using the method for these
    types.

---

## Coefficient m for Kh { #coeficiente-m-para-kh }

Used in the [soil reaction](reacao-do-solo.md), not in the bearing capacity.
Selected by the dominant fraction — sandy and silty soils use the sand table,
clayey soils the clay table.

### Sands and silts (kN/m⁴) { #areias-e-siltes-knm4 }

| \(N_{SPT}\) | Density | \(m\) |
| --: | :-- | --: |
| 1–6 | Loose | 1500 – 2750 |
| 7–39 | Medium dense | 3000 – 7850 |
| 40–49 | Dense | 8000 – 14300 |
| 50 | Very dense | 15000 |

The table is defined point by point for each integer \(N_{SPT}\), with a linear
progression per range: about 154 kN/m⁴ per blow in the medium dense range and
700 in the dense range.

### Clays (kN/m⁴) { #argilas-knm4 }

| \(N_{SPT}\) | Consistency | \(m\) |
| --: | :-- | --: |
| 0 | Semi-liquid | 250 |
| 1–2 | Very soft | 750 – 1125 |
| 3–5 | Soft | 1500 – 2500 |
| 6–11 | Medium | 3000 – 4667 |
| 12–21 | Stiff | 5000 – 6800 |
| 22–29 | Very stiff | 7000 – 8750 |
| 30 | Hard | 9000 |

!!! warning validade "Capping outside the range"

    Above the last tabulated \(N_{SPT}\) — 50 for sands, 30 for clays — the
    program adopts the last value, **without extrapolating**. A clay with
    \(N = 45\) receives the same \(m\) as one with \(N = 30\).

    It is the conservative decision, but it means that, in very strong soils,
    the model underestimates the horizontal stiffness and overestimates the
    displacements.

---

## Soil deformation modulus { #modulo-de-deformabilidade-do-solo }

Used in [settlement](recalque.md). Aoki (1984):

| Pile type | \(E_0\) |
| :-- | :-- |
| Driven | \(6 \, K \, N_{SPT}\) |
| CFA | \(4 \, K \, N_{SPT}\) |
| Bored | \(3 \, K \, N_{SPT}\) |

with \(K\) from the [Aoki-Velloso](#aoki-velloso) table.

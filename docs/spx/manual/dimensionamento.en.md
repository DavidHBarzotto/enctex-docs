# Design

The sixth tab. It designs the circular reinforced concrete section for the
internal forces from the analysis, in accordance with NBR 6118.

## Inputs { #entradas }

| Field | Unit | Note |
| :-- | :-- | :-- |
| \(f_{ck}\) | MPa | Concrete strength |
| \(f_{yk}\) | MPa | Longitudinal steel, usually 500 (CA-50) |
| \(E_s\) | MPa | Steel modulus, default 210 000 |
| Longitudinal bar diameter \(\phi_\ell\) | mm | |
| Number of bars | — | Leave it on automatic for the program to search |
| Stirrup diameter \(\phi_t\) | mm | Minimum \(\max(5;\, \phi_\ell/4)\) |
| Cover | cm | Comes from the exposure class, but can be edited |
| Buckling length \(\ell_e\) | cm | See the note below |

!!! warning "The buckling length is your judgement"

    \(\ell_e\) is an input, not a calculated value. Determining it for a
    partially embedded pile requires judgement: the embedded length is
    restrained by the soil, but the stiffness of that restraint depends on
    \(K_h\) itself. A pile fully embedded in competent soil rarely has a
    buckling problem; one with an exposed length does.

## Longitudinal reinforcement { #armadura-longitudinal }

The program checks the section for **biaxial bending with axial force**,
combining the moments of the two axes vectorially and adding the second-order
effect when \(40 < \lambda \le 140\).

The result is shown as an \(N\)–\(M\) **interaction diagram**: the boundary of
the section with the adopted reinforcement, and the design point marked on
it. The reading is immediate — you see the margin, not just the verdict.

| Situation | Reading |
| :-- | :-- |
| Point well inside the curve | Generous section; consider reducing the reinforcement or the diameter |
| Point close to the boundary | Tight design, but valid |
| Point outside | Insufficient section — increase the reinforcement, \(f_{ck}\) or the diameter |

!!! note "Minimum of 6 bars"

    A circular section requires at least six longitudinal bars, by code
    requirement. Even when the calculation does not require reinforcement, this
    detailing minimum usually prevails — for lifting, driving and tying into
    the cap.

### Reinforcement not required { #dispensa-de-armadura }

When \(\sigma_{sd} = N_d/A_c \le 5\) MPa **and** \(\sigma_{sd} \le 0.85
f_{ck}\), the calculation does not require reinforcement. The program flags
the condition, but the decision to take advantage of it is the designer's.

## Transverse reinforcement { #armadura-transversal }

Stirrups are designed by **Model I** of NBR 6118.

The first check is **strut crushing**. If \(\tau_{wd} > \tau_{wu}\), the
program **refuses** the design with an explicit message: no reinforcement can
fix strut crushing; the pile diameter or the concrete strength must be
increased.

The result shows:

| Output | Content |
| :-- | :-- |
| \(V_d\) | Design shear, combining the two axes |
| Code minimum area | \(A_{sw,min}\) in cm²/m |
| Effective area adopted | The larger of the calculated and the minimum |
| Stirrup diameter | As entered |
| Adopted spacing \(s\) | The smallest of theoretical, code and detailing |
| Stirrups per metre | \(100/s\) |

!!! info "Which criterion governed the spacing"

    The adopted spacing is the **smallest** of three limits — the theoretical
    one from the calculation, the ULS code limit and the detailing limit
    (\(\min(20\text{ cm};\, D;\, 12\phi_\ell)\)) — with a lower bound of 5 cm.

    In piles, the detailing criterion often governs: the shear is usually
    modest, and what tightens the stirrups is the geometric limit.

    See [shear formulation](../formulacoes/dimensionamento.md#esforco-cortante).

## Error messages { #mensagens-de-erro }

??? question "\"Invalid stirrup diameter. Minimum required: X mm\""

    The stirrup must be at least \(\max(5\text{ mm};\, \phi_\ell/4)\).
    Increase \(\phi_t\) or reduce \(\phi_\ell\).

??? question "\"Strut crushing\""

    The section is insufficient for the shear. Increase the pile diameter or
    \(f_{ck}\) — reinforcement does not solve it.

??? question "The point falls outside the interaction diagram"

    The section cannot resist the \(N\)–\(M\) combination. Increase the
    reinforcement, \(f_{ck}\) or the diameter. If \(\lambda\) is high, much of
    the moment may be second-order — in that case, increasing the diameter is
    more effective than adding reinforcement.

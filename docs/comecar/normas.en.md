# Standards

## What each program references { #o-que-cada-programa-referencia }

| Standard | Title | SPO · SPX · SPX AI | PCO · PCX |
| :-- | :-- | :--: | :--: |
| **NBR 6122** | Design and construction of foundations | ● | |
| **NBR 6118** | Design of concrete structures | ● | ● |
| **NBR 8681** | Actions and safety of structures | | ● |
| **NBR 6120** | Loads for the design of building structures | | ● |

In addition to the Brazilian standards, the programs use established
formulations from other sources — the semi-empirical bearing capacity methods
(Aoki-Velloso, Décourt-Quaresma, Teixeira), the Cintra & Aoki settlement
estimate and, for pile caps, the **IBRACON** Commentaries on NBR 6118 and
**CEB/FIP** recommendations. Each one is identified on the formulation page
that uses it.

## Where the standards come in { #onde-as-normas-entram }

### NBR 6122 — Foundations { #nbr-6122-fundacoes }

It enters the calculation of the allowable load. The standard's general
criterion is applied to the ultimate resistance:

\[
P_a = \frac{R_{total}}{2}
\]

with a global safety factor of 2. Some methods impose additional, more
restrictive checks — Décourt-Quaresma separates the toe and shaft factors, and
bored piles have their own limit. The program applies **the smallest** of the
applicable criteria. See
[Bearing capacity](../spx/formulacoes/capacidade-de-carga.md).

### NBR 6118 — Concrete { #nbr-6118-concreto }

It comes in on two fronts:

- **Durability** — the environmental exposure class defines the nominal cover:

    | Class | Exposure | Cover |
    | :-- | :-- | --: |
    | CAA I | Mild | 3.0 cm |
    | CAA II | Moderate | 3.0 cm |
    | CAA III | Severe | 4.0 cm |
    | CAA IV | Very severe | 5.0 cm |

- **Design** — biaxial bending with axial force of the circular section, shear
  and reinforcement detailing.

### NBR 8681 — Actions and safety { #nbr-8681-acoes-e-seguranca }

Used in the pile cap programs for load combinations and partial factors.

## What remains the designer's responsibility { #o-que-fica-a-cargo-do-projetista }

This section is as important as the previous one. The programs do **not**
decide:

- **The choice of bearing capacity method.** Aoki-Velloso, Décourt-Quaresma
  and Teixeira give different results for the same borehole; which one best
  represents the site is a matter of engineering judgement, supported by
  regional experience and, when available, load tests.
- **The quality of the site investigation.** Shallow boreholes, excessive
  spacing between them or a doubtful tactile-visual classification produce
  equally doubtful results, without the program being able to notice.
- **The allowable settlement.** The program estimates settlement; how much the
  structure can tolerate depends on the structure, not on the foundation.
- **Load test verification**, when the standard requires it.
- **Group behaviour** beyond the simplified estimate provided.
- **Special conditions** — collapsible or expansive soils, landfills, negative
  skin friction, nearby excavations, varying water table.

!!! warning "Technical responsibility"

    The project is signed by the responsible engineer, not by the program. The
    formulation documentation exists precisely so that this signature is an
    informed one: it states which calculation was done, with which
    coefficients and within which range of validity.

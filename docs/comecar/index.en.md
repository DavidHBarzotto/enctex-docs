# Getting started

This section applies to all five programs. Whatever is specific to each one is
in the product manual.

<div class="grid cards" markdown>

-   :material-download:{ .lg .middle } **[Installation](instalacao.md)**

    ---

    Requirements, procedure and where each program is installed.

-   :material-key-outline:{ .lg .middle } **[Licensing](licenciamento.md)**

    ---

    Activation, licence types, changing machines and offline use.

-   :material-axis-arrow:{ .lg .middle } **[Conventions and units](convencoes.md)**

    ---

    Signs, axes, units and the numeric soil codes.

-   :material-book-check-outline:{ .lg .middle } **[Standards](normas.md)**

    ---

    What each program references, and what remains the designer's
    responsibility.

</div>

## The program family { #a-familia-de-programas }

The five programs fall into two lines, and it is worth understanding how they
relate before choosing:

**SP line — Simple Pile: piles and their caps**

| Program | Full name | Version | Adds |
| :-- | :-- | :-- | :-- |
| SPO | Simple Pile One | 1.0.1 | The core: bearing capacity, settlement, structural analysis, design and detailing |
| SPX | Simple Pile X | 1.0.1 | Raked piles, stratigraphic profile modelling and an editable reader for borehole PDFs |
| SPX AI | SPX AI | 1.0.1 | AI automation, intelligent PDF reading, DWG/DXF plan import and generation commands |

**PC line — Pile Cap: caps on piles**

| Program | Full name | Version | Adds |
| :-- | :-- | :-- | :-- |
| PCO | Pile Cap One | 1.0.2 | Rigid pile caps by strut-and-tie |
| PCX | Pile Cap X | 1.0.2 | Flexible pile caps, designed as a simply supported or fixed-end beam |

**SB line — Simple Beam: beams (free)**

| Program | Full name | Version | Adds |
| :-- | :-- | :-- | :-- |
| SBO | Simple Beam One | 1.0.1 | Bending, shear, torsion and moment-curvature, in rectangular and T sections |
| SBX | Simple Beam X | 1.0.1 | Section optimisation: the lowest-cost geometry that resists the internal forces |

Each line is cumulative: SPX does everything SPO does, and SPX AI does
everything SPX does. The same holds for PCO and PCX, which share the
calculation core — PCX is PCO with flexible pile caps enabled.

!!! tip "Which one to choose"

    If your work is vertical piles with boreholes entered by hand, SPO does the
    job. SPX becomes worthwhile when there are **raked piles**, when the
    stratigraphy needs to be modelled between boreholes, or when the logs come
    as PDFs. SPX AI pays for itself when the project volume is large enough
    that building pile caps and piles by hand becomes a bottleneck.

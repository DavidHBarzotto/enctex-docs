---
title: EnCteX Documentation
template: home.html
hide:
  - navigation
  - toc
hero_titulo: Technical documentation for EnCteX software.
hero_texto: User manuals and calculation formulations for piles, pile caps and reinforced concrete beams — with assumptions, standards and limits of validity.
hero_botao: Get started
hero_botao2: Explore the products
---

# EnCteX Documentation { .ex-oculto }

Each product has two layers of documentation, and they answer different
questions:

- The **manual** answers *how to operate it* — installation, licensing, tabs,
  workflow, export.
- The **formulations** answer *what the program calculates* — methods,
  assumptions, safety factors, standards and, above all, **the limits of
  validity**.

The second layer exists because foundation software is not an acceptable black
box. The designer signs the project, not the software; to sign it, they need to
know which formulation was applied, with which coefficients and within which
range it holds.

## The programs { #os-programas }

<div class="grid cards" markdown>

-   :material-pillar:{ .lg .middle } **SPO**

    ---

    The pile core of SPX, without raked piles or stratigraphic modelling. Same
    geotechnical methods and same structural design.

    [:octicons-arrow-right-24: SPO documentation](spo/index.md)

-   :material-pillar:{ .lg .middle } **SPX**

    ---

    Piles: bearing capacity by three methods, settlement, subgrade reaction
    coefficients, finite element structural analysis, design for biaxial
    bending with axial force, DXF detailing and calculation report. Includes
    raked piles and stratigraphic modelling of the SPT.

    [:octicons-arrow-right-24: SPX documentation](spx/index.md)

-   :material-robot-outline:{ .lg .middle } **SPX AI**

    ---

    SPX with AI automation: intelligent PDF reading, DWG/DXF plan import and
    commands to generate pile caps and piles.

    [:octicons-arrow-right-24: SPX AI documentation](spx-ai/index.md)

-   :material-cube-outline:{ .lg .middle } **PCO**

    ---

    **Pile Cap One** — **rigid** pile caps, by Blévot & Frémy and by the
    strut-and-tie model (MBT) of the IBRACON Commentaries, with finite element
    verification.

    [:octicons-arrow-right-24: PCO documentation](pco/index.md)

-   :material-cube-outline:{ .lg .middle } **PCX**

    ---

    **Pile Cap X** — everything in PCO, plus the design of **flexible** pile
    caps, modelled as a simply supported or fixed-end beam.

    [:octicons-arrow-right-24: PCX documentation](pcx/index.md)

-   :material-format-align-bottom:{ .lg .middle } **SBO** · free

    ---

    **Simple Beam One** — reinforced concrete beams in bending, shear and
    torsion, with rectangular and T sections and a moment-curvature diagram.

    [:octicons-arrow-right-24: SBO documentation](sbo/index.md)

-   :material-tune-variant:{ .lg .middle } **SBX** · free

    ---

    **Simple Beam X** — SBO with **section optimisation**: it finds the
    lowest-cost geometry that resists the internal forces.

    [:octicons-arrow-right-24: SBX documentation](sbx/index.md)

</div>

## Where to start { #por-onde-comecar }

If this is your first contact with any of the programs, three pages are worth
reading before the product manual:

- [**Installation**](comecar/instalacao.md) — requirements and procedure.
- [**Conventions and units**](comecar/convencoes.md) — signs, axes, units and
  the numeric soil codes. It is the page that prevents the most common
  data-entry error.
- [**Standards**](comecar/normas.md) — what each program references.

!!! warning "About the scope of this documentation"

    It describes **what the programs do**; it does not replace engineering
    judgement or the standards. Semi-empirical bearing capacity methods were
    calibrated against a limited set of tests; outside that range, they
    extrapolate. Each formulation page states the range of validity of the
    method it describes, and that range must be read as part of the result.

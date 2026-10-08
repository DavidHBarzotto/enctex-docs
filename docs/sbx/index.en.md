# SBX — Simple Beam X

**Version 1.0.1** · Windows 64-bit · **Free**

Everything [SBO](../sbo/index.md) does, with one addition: instead of just
checking the section you entered, SBX **finds the cheapest section** that
resists the same forces.

## What it adds { #o-que-ele-acrescenta }

<div class="grid cards" markdown>

-   :material-function-variant:{ .lg .middle } **Section optimisation**

    ---

    Sequential quadratic programming over width and depth, with the code
    checks inside the objective function.

    [:octicons-arrow-right-24: How it works](otimizacao.md)

-   :material-cash-multiple:{ .lg .middle } **Material costs**

    ---

    Concrete and steel prices as input. Setting both to zero makes it minimise
    material consumption instead of money.

    [:octicons-arrow-right-24: The objective function](otimizacao.md#a-funcao-objetivo)

</div>

In the interface, the difference is an **Optimise Section** button and two
cost fields. The rest is identical.

## Documentation { #documentacao }

SBX contains SBO in full, and the documentation follows the same logic as the
rest of the line: **what applies to SBO applies to SBX**, and only the
difference is documented here.

<div class="grid cards" markdown>

-   :material-tune-variant:{ .lg .middle } **[Optimisation](otimizacao.md)**

    ---

    The method, the variables, the constraints, the initial guess and — above
    all — what to do with a continuous result in a world of formwork in
    multiples of 5 cm.

-   :material-function:{ .lg .middle } **[SBO formulations](../sbo/formulacoes/index.md)**

    ---

    Bending, shear, torsion and moment-curvature. Identical — optimisation does
    not change the calculation, it only searches for the geometry.

-   :material-book-education-outline:{ .lg .middle } **[References](../sbo/referencias.md)**

    ---

    The bibliography, shared by both.

</div>

!!! info "Optimisation does not change the calculation"

    SBX uses exactly the same design core as SBO. For each trial section, it
    runs the complete design — bending, shear, torsion and strut interaction —
    and only considers feasible what passes everything.

    What optimisation does is **search**, not relax.

## When it pays for itself { #quando-ele-se-paga }

SBO does the job when you already have the section defined — by project
standardisation, coordination with the architecture, or practice.

SBX becomes worthwhile when the section is **free** and volume matters:
projects with many identical beams, precast elements, or feasibility studies
in which a difference of a few centimetres is multiplied by hundreds of
members.

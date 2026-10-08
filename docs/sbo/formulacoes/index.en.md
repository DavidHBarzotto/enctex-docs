# SBO formulations

What the program calculates, with which assumptions and within which range of
validity.

This section applies in full to [SBX](../../sbx/index.md), which shares the
same core — it only adds [section optimisation](../../sbx/otimizacao.md).

## The calculation chain { #a-cadeia-de-calculo }

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Materials</strong> — fck, fyk, Es and the partial factors
    <span class="consome">define fcd, fyd and the stress-block parameters</span></div>
  <div class="nivel"><strong>Simple bending</strong> — longitudinal reinforcement
    <span class="consome">consumes: materials, geometry and Mk</span></div>
  <div class="nivel"><strong>Shear and torsion</strong> — transverse reinforcement
    <span class="consome">consumes: materials, geometry, Vk and Tk</span></div>
  <div class="nivel"><strong>Strut interaction</strong> — the criterion that can fail the section
    <span class="consome">consumes: shear and torsion together</span></div>
  <div class="nivel"><strong>Detailing</strong> — bar sizes, number of bars, provided As
    <span class="consome">consumes: the calculated reinforcement</span></div>
  <div class="nivel"><strong>Moment-curvature</strong> — stiffness and ductility
    <span class="consome">consumes: geometry and provided reinforcement</span></div>
</div>

## The pages { #as-paginas }

<div class="grid cards" markdown>

-   **[Simple bending](flexao.md)**

    ---

    Rectangular and T sections, tension-only and compression reinforcement,
    the parabola-rectangle diagram parameters and the minimum reinforcement.

-   **[Shear and torsion](cortante-torcao.md)**

    ---

    Model I, equivalent hollow section and the interaction check — the point at
    which the two compete for the same strut.

-   **[Moment-curvature](momento-curvatura.md)**

    ---

    The non-linear analysis with the real constitutive relationship, and what
    it shows about stiffness and ductility.

</div>

## How to read these pages { #como-ler-estas-paginas }

Each one ends with the **limits of validity**, in its own coloured block:

!!! warning validade "Range of application"

    It delimits where the method holds. Read it as part of the result, not as a
    footnote.

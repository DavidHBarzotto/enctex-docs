# SPX formulations

This section describes **what the program calculates** — the methods, the
assumptions, the coefficients and, above all, the limits of validity of each
one.

It exists because foundation software should not be a black box. The project
is signed by the engineer, and to sign it you need to know which calculation
was done.

## How to read these pages { #como-ler-estas-paginas }

Each page follows the same structure:

1. **The formulation**, with the equations as the program applies them.
2. **The implementation decisions** — the points where the method allows more
   than one reading and the program chose one. They are what explain
   divergence between different programs using "the same method".
3. **The limits of validity**, marked like this:

!!! warning validade "Range of application"

    This block appears on every page and delimits where the method holds. Read
    it as part of the result, not as a footnote.

## The calculation chain { #a-cadeia-de-calculo }

The modules are not independent: each one consumes the previous one.

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Borehole</strong> — NSPT and soil codes
    <span class="consome">the input to everything</span></div>
  <div class="nivel"><strong>Bearing capacity</strong> — Aoki · Décourt · Teixeira
    <span class="consome">consumes: borehole</span></div>
  <div class="nivel"><strong>Pile length</strong>
    <span class="consome">consumes: bearing capacity</span></div>
  <div class="nivel"><strong>Settlement</strong> — Cintra &amp; Aoki
    <span class="consome">consumes: bearing capacity</span></div>
  <div class="nivel"><strong>Soil reaction</strong> — Kh and Kv
    <span class="consome">consumes: borehole and length</span></div>
  <div class="nivel"><strong>Structural analysis</strong> — PyNite
    <span class="consome">consumes: soil reaction</span></div>
  <div class="nivel"><strong>Design</strong> — NBR 6118
    <span class="consome">consumes: structural analysis</span></div>
  <div class="nivel"><strong>DXF detailing and calculation report</strong>
    <span class="consome">consumes: design and settlement</span></div>
</div>

A practical consequence: **changing the borehole changes everything**. The
soil classification selects \(K\), \(\alpha\), \(C\) and \(m\), which in turn
define capacity, settlement, spring stiffness, internal forces and
reinforcement. There is no way to change the profile and reuse an earlier
design.

## The pages { #as-paginas }

<div class="grid cards" markdown>

-   **[Bearing capacity](capacidade-de-carga.md)**

    ---

    Aoki-Velloso, Décourt-Quaresma and Teixeira. How each one defines the toe
    \(N\), and why that is the main source of divergence between them.

-   **[Settlement](recalque.md)**

    ---

    Cintra & Aoki, group settlement and the Van der Veen load × settlement
    curve.

-   **[Soil reaction](reacao-do-solo.md)**

    ---

    Winkler springs, \(K_h = m \cdot z\) and \(K_v\) from the allowable stress.

-   **[Structural analysis](analise-estrutural.md)**

    ---

    3D frame on an elastic foundation, with raked piles.

-   **[Design](dimensionamento.md)**

    ---

    Biaxial bending with axial force with interaction diagram, second order
    and shear.

-   **[Parameter tables](tabelas.md)**

    ---

    All the coefficients, with the logic behind the scales.

</div>

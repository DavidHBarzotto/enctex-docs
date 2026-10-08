# PCO formulations

What the program calculates, with which assumptions and within which range of
validity.

This section applies in full to [PCX](../../pcx/index.md), which shares the
calculation core — PCX only adds the
[flexible pile caps](../../pcx/blocos-flexiveis.md).

## The two paths { #os-dois-caminhos }

A pile cap can be designed in two ways, and the choice is not a matter of
taste: it depends on **how the cap behaves**.

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Rigid pile cap</strong> — the load goes down through compressed struts
    <span class="consome">Blévot &amp; Frémy · MBT (IBRACON)</span></div>
  <div class="nivel"><strong>Flexible pile cap</strong> — the cap works in bending, as a beam
    <span class="consome">available in PCX</span></div>
</div>

The rigidity criterion is in [Checks](verificacoes.md#rigidez-do-bloco).

## The calculation chain { #a-cadeia-de-calculo }

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Column actions</strong> — N, Mx, My, Fx, Fy
    <span class="consome">the input</span></div>
  <div class="nivel"><strong>NBR 8681 combination</strong> — normal ultimate cases
    <span class="consome">consumes: actions</span></div>
  <div class="nivel"><strong>Pile reactions</strong> — analytical or by finite elements
    <span class="consome">consumes: combinations and geometry</span></div>
  <div class="nivel"><strong>Strut model</strong> — Blévot or MBT
    <span class="consome">consumes: reactions</span></div>
  <div class="nivel"><strong>Tie reinforcement</strong>
    <span class="consome">consumes: strut model</span></div>
  <div class="nivel"><strong>Checks</strong> — nodes, punching, shear
    <span class="consome">consumes: model and geometry</span></div>
  <div class="nivel"><strong>Detailing and report</strong>
    <span class="consome">consumes: reinforcement and checks</span></div>
</div>

## The pages { #as-paginas }

<div class="grid cards" markdown>

-   **[Blévot & Frémy](blevot.md)**

    ---

    The classic method: the internal truss, the strut check, the 1.15 factor
    and the code's complementary reinforcement.

-   **[Formulas by arrangement](arranjos.md)**

    ---

    The closed-form expressions for two to seven piles, with effective depth,
    stress limits, and main and complementary reinforcement.

-   **[MBT — Strut and Tie](mbt.md)**

    ---

    The model of the IBRACON Commentaries on NBR 6118, with the spreading of
    the column load calculated instead of tabulated.

-   **[Finite elements](elementos-finitos.md)**

    ---

    The pile cap as a solid, in a hexahedral or tetrahedral mesh — to check the
    assumptions of the strut model.

-   **[Load combinations](combinacoes.md)**

    ---

    NBR 8681, with the correct treatment of favourable permanent actions.

-   **[Checks](verificacoes.md)**

    ---

    Compression nodes, punching, shear and the rigidity criterion.

</div>

## How to read these pages { #como-ler-estas-paginas }

Each one ends with the **limits of validity**, in its own coloured block:

!!! warning validade "Range of application"

    It delimits where the method holds. Read it as part of the result, not as a
    footnote — it is the information that separates using it from using it
    wrongly.

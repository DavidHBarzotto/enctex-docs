# SPO — Simple Pile One

**Version 1.0.1** · Windows 64-bit

A complete platform for pile analysis, design and detailing, covering the main
pile construction methods used in Brazil.

## Project limits { #limites-do-projeto }

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">pile caps</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">piles per cap</span></div>
  <div class="limite"><span class="valor">200</span><span class="rotulo">piles in total</span></div>
  <div class="limite"><span class="valor">20</span><span class="rotulo">boreholes</span></div>
</div>

The ceiling of **200 piles in total** is the one that matters in practice: a
hundred caps of thirty piles would be three thousand, and that is not what the
program supports. The limits act together, and whichever is reached first
governs.

## Pile types { #tipos-de-estaca }

| | | |
| :-- | :-- | :-- |
| Bored with slurry | Continuous flight auger (CFA) | Precast |
| Bored without slurry | Omega | Franki |
| Root pile | | |

## What it does { #o-que-ele-faz }

<div class="grid cards" markdown>

-   **Bearing capacity**

    ---

    Three semi-empirical methods side by side — Aoki-Velloso,
    Décourt-Quaresma and Teixeira — with results by level.

    [:octicons-arrow-right-24: Formulation](../spx/formulacoes/capacidade-de-carga.md)

-   **Settlement**

    ---

    Cintra & Aoki, group settlement and the Van der Veen load × settlement
    curve.

    [:octicons-arrow-right-24: Formulation](../spx/formulacoes/recalque.md)

-   **Structural design**

    ---

    Biaxial bending with axial force of a circular section with interaction
    diagram, and shear by the truss model.

    [:octicons-arrow-right-24: Formulation](../spx/formulacoes/dimensionamento.md)

-   **Reinforcement detailing**

    ---

    **Interactive** detailing and DXF export.

    [:octicons-arrow-right-24: Manual](../spx/manual/detalhamento.md)

-   **Report**

    ---

    Interactive, editable calculation report in DOCX.

    [:octicons-arrow-right-24: Manual](../spx/manual/relatorio.md)

-   **Soil-structure interaction**

    ---

    Winkler springs and finite element structural analysis.

    [:octicons-arrow-right-24: Formulation](../spx/formulacoes/analise-estrutural.md)

</div>

## Documentation { #documentacao }

SPO is the **core** of the SP line: SPX is SPO with two extra features, and
SPX AI is SPX with AI automation. All three share the same calculation engine.

That is why the documentation is not written three times — it would be three
copies to keep in sync, and the first divergence between them would be a
design error waiting to happen. **The SPX manual and formulations apply in
full to SPO** in the common modules, which are almost all of them.

<div class="grid cards" markdown>

-   :material-book-open-variant:{ .lg .middle } **[Manual](../spx/manual/interface.md)**

    ---

    Interface, pile cap setup, borehole, geotechnical results, structural
    analysis, design, detailing and report.

-   :material-function-variant:{ .lg .middle } **[Formulations](../spx/formulacoes/index.md)**

    ---

    Bearing capacity, settlement, soil reaction, structural analysis, design
    and parameter tables.

-   :material-swap-horizontal:{ .lg .middle } **[What changes in SPO](diferencas.md)**

    ---

    The two SPX features that SPO does not have, and what to do without them.

-   :material-book-education-outline:{ .lg .middle } **[References](../spx/referencias.md)**

    ---

    The bibliography, shared by all three.

</div>

## Difference from SPX { #diferenca-para-o-spx }

SPO does **not have**:

- **Raked pile analysis** — individual rake and azimuth.
- **Stratigraphic profile modelling** — interpolation between boreholes and 3D
  profile.
- **Editable reader for borehole PDFs**.

[:octicons-arrow-right-24: Details and alternatives](diferencas.md)

# SPX — Simple Pile X

**Version 1.0.1** · Windows 64-bit

SPX covers the complete cycle of a single pile or a pile group under a cap:
from the borehole to the detailing drawing, through bearing capacity,
settlement, structural analysis with soil-structure interaction and reinforced
concrete design.

Compared with SPO, it adds **raked piles**, **stratigraphic profile
modelling** and the **editable reader for borehole PDFs**.

## Project limits { #limites-do-projeto }

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">pile caps</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">piles per cap</span></div>
  <div class="limite"><span class="valor">200</span><span class="rotulo">piles in total</span></div>
  <div class="limite"><span class="valor">20</span><span class="rotulo">boreholes</span></div>
</div>

The first three act **together**, and whichever is reached first governs: a
hundred caps of thirty piles would be three thousand, and the real ceiling is
two hundred.

## What it does { #o-que-ele-faz }

<div class="grid cards" markdown>

-   **Bearing capacity**

    ---

    Three semi-empirical methods side by side — Aoki-Velloso,
    Décourt-Quaresma and Teixeira — with results by level, so the length can
    be chosen by reading down the column.

    [:octicons-arrow-right-24: Formulation](formulacoes/capacidade-de-carga.md)

-   **Settlement**

    ---

    Cintra & Aoki, separating the elastic shortening of the pile from the soil
    contribution. Group settlement and load × settlement curve by Van der Veen.

    [:octicons-arrow-right-24: Formulation](formulacoes/recalque.md)

-   **Soil-structure interaction**

    ---

    Horizontal and vertical Winkler springs, with \(K_h\) increasing with
    depth and \(K_v\) from the allowable stress.

    [:octicons-arrow-right-24: Formulation](formulacoes/reacao-do-solo.md)

-   **Structural analysis**

    ---

    3D frame in finite elements on an elastic foundation, with raked piles
    defined by rake and azimuth.

    [:octicons-arrow-right-24: Formulation](formulacoes/analise-estrutural.md)

-   **Design**

    ---

    Biaxial bending with axial force of a circular section with interaction
    diagram, second-order effects by curvature and shear by the truss model.

    [:octicons-arrow-right-24: Formulation](formulacoes/dimensionamento.md)

-   **Outputs**

    ---

    DXF detailing and DOCX calculation report, ready for drawing sheets and
    project files.

    [:octicons-arrow-right-24: Manual](manual/detalhamento.md)

-   **Borehole PDF reader**

    ---

    Editable extraction of PDF borehole logs, so you don't type three hundred
    rows of \(N_{SPT}\) by hand.

    [:octicons-arrow-right-24: Manual](manual/sondagem.md)

</div>

## Workflow { #fluxo-de-trabalho }

SPX is organised in eight tabs, which follow the natural order of the project.
The rule is simple: **each tab depends on the previous ones**.

<div class="fluxo" markdown="0">
  <div class="etapa"><span class="n">1</span>Pile cap setup</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">2</span>Borehole / NSPT</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">3</span>Soil properties</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">4</span>Geotechnical results</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">5</span>Structural analysis</div>
  <div class="seta">→</div>
  <div class="etapa ramo"><span class="n">6</span>Design</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">7</span>DXF detailing</div>
  <div class="etapa"><span class="n">8</span>Report</div>
</div>

<small>Step 6 feeds both final outputs: the drawing and the calculation
report.</small>

| # | Tab | What is decided there |
| :-: | :-- | :-- |
| 1 | Pile Cap Setup | Geometry, number and arrangement of piles, pile type, restraints, materials, cover |
| 2 | Borehole / NSPT | \(N_{SPT}\) profile and soil codes, metre by metre |
| 3 | Soil Properties | Unit weights and parameters per layer |
| 4 | Geotechnical Results | Bearing capacity by the three methods and settlement |
| 5 | Structural Analysis | Finite element model and internal forces along the pile |
| 6 | Design | Longitudinal and transverse reinforcement |
| 7 | Detailing (DXF) | Construction drawing |
| 8 | Report | Calculation report in DOCX |

!!! tip "Tab 4 is the decision point"

    This is where the pile length is chosen. The table gives the allowable load
    for **every possible toe level**, by the three methods side by side. A
    large divergence between the methods is information, not a defect: it
    shows that the profile is sensitive to the formulation and that the case
    deserves a load test.

## Pile types { #tipos-de-estaca }

| Type | Aoki-Velloso | Décourt-Quaresma | Teixeira |
| :-- | :--: | :--: | :--: |
| Bored with slurry | ● | ● | ● |
| Bored without slurry | ● | ● | ● |
| Continuous flight auger (CFA) | ● | ● | ● |
| Precast | ● | ● | ● |
| Root pile | ● | ● | ● |
| Franki | ● | ● | ● |
| Omega | ● | ● | ● |

The coefficients for each combination are in
[Parameter tables](formulacoes/tabelas.md).

## Next steps { #proximos-passos }

- [Interface](manual/interface.md) — a tour of the eight tabs.
- [Formulations](formulacoes/index.md) — what the program calculates, and how.
- [References](referencias.md) — the bibliography.

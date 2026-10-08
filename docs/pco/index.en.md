# PCO — Pile Cap One

**Version 1.0.2** · Windows 64-bit

A platform for the analysis, design and detailing of pile caps, in accordance
with the Brazilian technical standards.

## Project limits { #limites-do-projeto }

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">pile caps per project</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">piles per cap</span></div>
  <div class="limite"><span class="valor">1 to N</span><span class="rotulo">piles per cap</span></div>
  <div class="limite"><span class="valor">&gt;1</span><span class="rotulo">column per cap</span></div>
</div>

## What it does { #o-que-ele-faz }

<div class="grid cards" markdown>

-   :material-vector-triangle:{ .lg .middle } **Strut and tie**

    ---

    Design by **Blévot & Frémy** and by the **Strut-and-Tie Method (MBT)** of
    the IBRACON Commentaries on NBR 6118.

    [:octicons-arrow-right-24: Formulation](formulacoes/blevot.md)

-   :material-cube-scan:{ .lg .middle } **Finite elements**

    ---

    **Hexahedral or tetrahedral** mesh of the pile cap, to check the stress
    field against the strut-and-tie assumptions.

    [:octicons-arrow-right-24: Formulation](formulacoes/elementos-finitos.md)

-   :material-scale-balance:{ .lg .middle } **Load combinations**

    ---

    Normal ultimate combinations according to **NBR 8681**, with the correct
    treatment of favourable and unfavourable permanent actions.

    [:octicons-arrow-right-24: Formulation](formulacoes/combinacoes.md)

-   :material-check-decagram-outline:{ .lg .middle } **Checks**

    ---

    Punching, shear and compression nodes.

    [:octicons-arrow-right-24: Formulation](formulacoes/verificacoes.md)

-   :material-shape-outline:{ .lg .middle } **Columns of any shape**

    ---

    Rectangular, circular, I/H section, U section, hollow rectangular and
    hollow circular — and **more than one column per cap**.

    [:octicons-arrow-right-24: Manual](manual/bloco.md)

-   :material-file-export-outline:{ .lg .middle } **Outputs**

    ---

    Interactive reinforcement detailing, DXF export and an editable technical
    report.

    [:octicons-arrow-right-24: Manual](manual/detalhamento.md)

</div>

## Integration with the SP line { #integracao-com-a-linha-sp }

PCO **communicates with SPO, SPX and SPX AI**. In practice, this closes the
loop of deep foundation design: the SP line programs design the pile —
bearing capacity, length, reinforcement — and PCO designs the cap that sits on
top of them, receiving the geometry and the reactions instead of requiring
them to be entered again.

## Workflow { #fluxo-de-trabalho }

<div class="fluxo" markdown="0">
  <div class="etapa"><span class="n">1</span>Cap and pile geometry</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">2</span>Columns and sections</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">3</span>Actions and combinations</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">4</span>Pile reactions</div>
  <div class="seta">→</div>
  <div class="etapa ramo"><span class="n">5</span>Design</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">6</span>DXF detailing</div>
  <div class="etapa"><span class="n">7</span>Report</div>
</div>

## Difference from PCX { #diferenca-para-o-pcx }

PCO designs **rigid pile caps**. [PCX](../pcx/index.md) adds the design of
**flexible pile caps**, modelled as a simply supported or fixed-end beam.

The two share the same core: PCX is PCO with flexible pile caps enabled. All
of this documentation — manual and formulations — applies in full to PCX.

!!! tip "When PCO is enough"

    If your pile caps meet the rigidity condition — most ordinary building pile
    caps do —, PCO does the job. PCX is justified when slender caps appear, in
    which the strut does not form in a well-defined way and the real behaviour
    is bending.

## Next steps { #proximos-passos }

- [Interface](manual/interface.md) — a tour of the program.
- [Formulations](formulacoes/index.md) — what it calculates, and how.
- [References](referencias.md) — the bibliography.

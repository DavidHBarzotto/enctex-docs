# Interface

SPX is organised in **eight tabs**, in project order. Each one depends on the
previous ones: there is no point jumping to design without the borehole
entered.

| # | Tab | Delivers |
| :-: | :-- | :-- |
| 1 | [Pile Cap Setup](bloco.md) | Geometry, piles, materials |
| 2 | [Borehole / NSPT](sondagem.md) | Subsoil profile |
| 3 | [Soil Properties](sondagem.md#propriedades-dos-solos) | Unit weights and parameters |
| 4 | [Geotechnical Results](resultado-geotecnico.md) | Bearing capacity and settlement |
| 5 | [Structural Analysis](analise-estrutural.md) | Internal forces along the pile |
| 6 | [Design](dimensionamento.md) | Reinforcement |
| 7 | [Detailing (DXF)](detalhamento.md) | Construction drawing |
| 8 | [Report](relatorio.md) | Calculation report |

## Order matters { #a-ordem-importa }

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

!!! warning "Changing earlier data invalidates what came after"

    Changing the diameter in tab 1, or an \(N_{SPT}\) in tab 2, invalidates
    capacity, settlement, internal forces and reinforcement. The program warns
    you when it detects a change in geotechnical parameters after a
    calculation, but the golden rule is to **reprocess from tab 4 onwards**
    whenever you go back.

## General features { #recursos-gerais }

### Dark mode { #modo-escuro }

SPX has a light and a dark theme. The choice applies to the whole interface,
including the generated charts — they are redrawn with the theme palette, not
just inverted.

### 3D view { #visualizacao-3d }

Two three-dimensional features help you check the input:

- **Pile coordinate system** — shows the X, Y and Z axes with the pile drawn,
  to settle any doubt about the direction of a force.
- **3D view of the pile cap** — shows the piles in position, with the rakes
  applied. It is the quickest way to spot a swapped azimuth.

### Processing { #processamento }

Long calculations — the finite element analysis and the geotechnical
processing of many piles — show a progress window. The time grows with the
number of piles and with the depth of the borehole.

## Conventions { #convencoes }

Before your first project, it is worth reading
[Conventions and units](../../comecar/convencoes.md). The two points that cause
the most errors:

1. **The soil classification selects the parameters.** *Silty sand* and
   *sandy silt* have similar names and reversed compositions: swapping them
   changes \(K\) from 0.80 to 0.55 MPa.
2. **Positive axial force is compression.** With a negative value the program
   switches to a tension calculation, ignoring the toe.

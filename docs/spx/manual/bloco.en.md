# Pile Cap Setup

The first tab. It defines the geometry, the number and arrangement of piles,
the pile type, the materials and the cover.

## Fields { #campos }

### Pile geometry { #geometria-das-estacas }

| Field | Unit | Note |
| :-- | :-- | :-- |
| No. of Piles in the Cap | — | From 1 to 30 |
| Specific Arrangement | — | Enabled depending on the number of piles |
| Pile Diameter | m | Enters \(A_p\), \(U\) and, in the Teixeira method, also \(N_p\) |
| Pile Type | — | Selects the construction coefficients of the three methods |
| Axis spacing | cm | Centre-to-centre distance between piles |
| Head Restraint | — | Pinned or Fixed |

### Available arrangements { #arranjos-disponiveis }

Up to eight piles, the program offers **named arrangements** — the layouts
established in practice for each count. Above that, the distribution follows a
rectangular pattern.

| No. | Arrangements |
| :-: | :-- |
| 1, 2 | Single |
| 3 | Triangle · Linear (X axis) · Linear (Y axis) |
| 4 | Square |
| 5 | Square + 1 centre · Pentagonal · Rectangular (2 and 3) |
| 6 | Rectangular (2×3) · Hexagonal |
| 8 | Rectangular (3-2-3) · Rectangular (4×2) · Rectangular (2×4) |
| 9 to 30 | Rectangular |

The **Specific Arrangement** field is only enabled when there is more than one
option for that count.

### Project limits { #limites-do-projeto }

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">pile caps</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">piles per cap</span></div>
  <div class="limite"><span class="valor">200</span><span class="rotulo">piles in total</span></div>
  <div class="limite"><span class="valor">20</span><span class="rotulo">boreholes</span></div>
</div>

The ceiling of **200 piles in total** is the one that matters in practice: a
hundred caps of thirty piles each would be three thousand, and that is not
what the program supports. The three limits act together, and whichever is
reached first governs.

### Pile cap and materials { #bloco-e-materiais }

| Field | Unit | Note |
| :-- | :-- | :-- |
| Cap Depth | m | |
| Head Level | m | Level of the pile head. Negative = cut off below ground |
| Edge Distance / Cover | cm | Distance from the cap face to the axis of the outer pile |
| Soil Height | m | |
| Exposure Class | — | CAA I to IV, defines the nominal cover |
| Unit Weight | kN/m³ | Of the concrete |

!!! info "The head level changes the structural model"

    A head **below** zero means a pile cut off under the cap: the top node gets
    a soil spring, because there is ground around it.

    A head **at zero or above** leaves the node free — the pile has an exposed
    length and behaves like a column fixed in the soil, with much larger
    displacements.

    See [Structural analysis](../formulacoes/analise-estrutural.md#cota-de-topo-abaixo-do-terreno).

### Exposure class { #classe-de-agressividade }

| Class | Environment | Cover |
| :-- | :-- | --: |
| CAA I | Mild | 3.0 cm |
| CAA II | Moderate | 3.0 cm |
| CAA III | Severe | 4.0 cm |
| CAA IV | Very severe | 5.0 cm |

The cover enters the calculation of the effective depth \(d\) and therefore the
design for bending and shear.

## Coordinates and loads per pile { #coordenadas-e-esforcos-por-estaca }

The **Pile Coordinates and Loads** table is the heart of the tab. In it each
pile receives:

- its position in the cap (X, Y);
- the loads applied at the head — axial force, shears and moments.

The sign follows the [general convention](../../comecar/convencoes.md#sinais-dos-esforcos):
positive axial force is compression.

## Raked piles { #estacas-inclinadas }

SPX allows an **individual rake** — each pile in the cap can have its own rake
and azimuth. The feature opens a dedicated dialog.

| Parameter | Meaning |
| :-- | :-- |
| Rake | Angle from the vertical |
| Azimuth | Direction of the rake in the horizontal plane |

!!! tip "Check it in 3D"

    A swapped azimuth is the most common mistake, and it is invisible in the
    table. The 3D view of the pile cap shows the piles in their real position —
    two seconds of checking that prevent an entire project from being wrong.

Raked piles usually require enabling the **vertical springs \(K_v\)** in the
structural analysis: without them, the raked pile is free to slide along its
own axis.

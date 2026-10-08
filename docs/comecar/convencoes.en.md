# Conventions and units

This is the page that prevents the most common data-entry error. It is worth
reading before your first project.

## Axis system { #sistema-de-eixos }

The programs use a **right-handed system with Z pointing down**, with its
origin at the pile head.

| Axis | Positive direction |
| :-- | :-- |
| **X** | Horizontal |
| **Y** | Horizontal, perpendicular to X |
| **Z** | **Downward**, along the pile |

Z pointing down is the geotechnical convention: depth increases with Z, and
borehole levels are read in the same direction in which the pile goes down.

!!! tip "Check it in the program itself"

    SPX includes a 3D view of the coordinate system, with the pile and the
    three axes drawn. Use it whenever you are unsure about the direction of a
    force.

## Sign convention for forces { #sinais-dos-esforcos }

| Force | Positive means |
| :-- | :-- |
| Axial \(N\) | **Compression** — load acting downward, in the Z direction |
| Axial \(N < 0\) | **Tension** — the program changes the bearing capacity method |
| Shear \(V_x\) | To the right, in the X direction |
| Shear \(V_y\) | In the Y direction |
| Moment \(M_x\), \(M_y\) | Clockwise |

!!! warning "The sign of the axial force changes the calculation"

    It is not just a matter of the sign in the output. With \(N < 0\) the
    program treats the pile as **in tension**, ignores the toe resistance and
    applies the tension safety factor. See
    [Bearing capacity](../spx/formulacoes/capacidade-de-carga.md).

## Units { #unidades }

Input and output use the SI units customary in Brazilian geotechnical
practice.

| Quantity | Unit | Where it appears |
| :-- | :-- | :-- |
| Length, diameter, depth | m | Pile and pile cap geometry |
| Concrete cover | cm | Environmental exposure class |
| Force | kN | Applied loads, \(R_p\), \(R_l\), \(P_a\) |
| Moment | kN·m | Applied moments |
| Soil stress | kPa | \(r_p\), \(r_l\), parameter \(K\) |
| Concrete strength \(f_{ck}\) | MPa | Materials |
| Modulus of elasticity \(E_c\) | MPa on input, kPa in calculation | Elastic settlement |
| Unit weight \(\gamma\) | kN/m³ | Geostatic stress |
| Factor \(m\) | kN/m⁴ | Horizontal subgrade reaction coefficient |
| Unit \(K_h\), \(K_v\) | kN/m³ | Soil reaction |
| Springs \(K_h\), \(K_v\) | kN/m | Input to the finite element model |
| Settlement | m in calculation, **mm** in presentation | Results and charts |

!!! note "Settlement in millimetres"

    Internally, settlement is calculated in metres, but every result shown —
    table, chart and report — is in **millimetres**, the unit in which
    allowable settlement is discussed.

## Soil types { #tipos-de-solo }

SPX classifies the soil by the fractions it consists of, in order of
predominance. There are fifteen combinations:

| | | |
| :-- | :-- | :-- |
| Sand | Silt | Clay |
| Silty sand | Sandy silt | Sandy clay |
| Silty-clayey sand | Sandy-clayey silt | Sandy-silty clay |
| Clayey sand | Clayey silt | Silty clay |
| Clayey-silty sand | Clayey-sandy silt | Silty-sandy clay |

The name reads as the composition: *silty-clayey sand* is predominantly sand,
then silt, then clay.

!!! warning "The classification selects the design parameters"

    The soil type is not a label: it selects \(K\) and \(\alpha\) in the
    Aoki-Velloso table, \(C\) in Décourt-Quaresma, \(\alpha_T\) in Teixeira and
    the factor \(m\) for the springs.

    Swapping **silty sand** for **sandy silt** — similar names, reversed
    compositions — changes \(K\) from 0.80 to 0.55 MPa, i.e.
    **31 % less toe resistance**. Check the classification in the borehole log
    before entering it.

Not every method uses the full classification. **Décourt-Quaresma** works with
only three families — clays, intermediate soils and sands — and the
**horizontal subgrade reaction coefficient** only distinguishes sandy and silty
soils from clayey ones.

## Borehole discretisation { #discretizacao-da-sondagem }

The borehole is entered **metre by metre**: one \(N_{SPT}\) value and one soil
code per metre. Result levels are negative, measured from the ground surface:
−1 m, −2 m, and so on.

Every bearing capacity table is presented by level — for each possible toe
depth, what the allowable load would be. That is what lets you choose the pile
length by reading down the column, instead of trying one length at a time.

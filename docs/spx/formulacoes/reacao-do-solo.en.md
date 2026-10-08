# Soil reaction — Kh and Kv

To analyse the pile under horizontal load, the soil must be represented. SPX
uses the **Winkler** model: the soil becomes a set of independent springs, one
per metre of pile, and the pile becomes a beam on an elastic foundation.

It is a simplified model — independent springs do not transmit forces to each
other, while real soil does — but it is what underpins current design practice
for laterally loaded piles.

---

## Horizontal coefficient Kh { #coeficiente-horizontal-kh }

### Variation with depth { #variacao-com-a-profundidade }

For soils whose stiffness increases with confinement, the following is
adopted:

\[
K_h(z) = m \cdot z
\]

with \(K_h\) in kN/m³, \(z\) in metres and \(m\) in **kN/m⁴**. The coefficient
\(m\) is looked up in a table by soil nature and \(N_{SPT}\):

| Dominant soil | Table used |
| :-- | :-- |
| Sandy and silty soils | \(m\) table for sands |
| Clayey soils | \(m\) table for clays |

Outside the tabulated range, the value is capped at the nearest end — \(N\)
above the maximum uses the last value, \(N\) below the minimum uses the first.
Unidentified soil receives \(m = 0.01\) kN/m⁴, a deliberately tiny but
**non-zero** value: a spring with zero stiffness would make the stiffness
matrix singular and break the analysis.

### From unit stiffness to nodal spring { #da-rigidez-unitaria-a-mola-nodal }

The concentrated spring at each node multiplies \(K_h\) by the tributary area:

\[
K_{h,mola} = K_h \cdot D \cdot \ell_{infl}
\]

where \(D\) is the diameter and \(\ell_{infl}\) is the length of pile that the
node represents.

!!! info "Half strip at the ends"

    The tributary length is **1.0 m** at internal nodes and **0.5 m** at the
    first and last node of the pile. The reason is geometric: a node in the
    middle represents half a metre above and half below; a node at the end only
    has soil on one side.

    Without this care, the total stiffness of the model would be overestimated
    by one metre of soil that does not exist.

---

## Vertical coefficient Kv { #coeficiente-vertical-kv }

\(K_v\) represents the vertical reaction of the shaft — the mobilised shaft
friction as a spring. It is obtained by an empirical correlation with the
allowable soil stress, estimated by

\[
\sigma_{adm} = 0.2 \cdot N_{SPT} \quad [\text{kgf/cm}^2]
\]

With \(\sigma_{adm}\), \(K_v\) is interpolated in an empirical table ranging
from 0.25 to 4.00 kgf/cm² (0.65 to 8.00 kgf/cm³), and converted to SI:

\[
1 \text{ kgf/cm}^3 = 9\,806.65 \text{ kN/m}^3
\]

The nodal spring follows the same tributary area rule, including the half
strip at the ends:

\[
K_{v,mola} = K_v \cdot D \cdot \ell_{infl}
\]

!!! note "\(K_v\) is optional"

    The analysis can be run with horizontal springs only. The vertical springs
    are enabled as an option and matter above all for **raked piles**, where
    the vertical load produces a transverse component and vice versa — without
    \(K_v\), the raked pile is free to move down along its axis.

---

## Results table { #tabela-de-resultados }

The soil reaction tab shows, per metre:

| Column | Unit | Content |
| :-- | :-- | :-- |
| Depth | m | Node depth |
| Nspt | — | \(N_{SPT}\) of the layer |
| \(m\) | kN/m⁴ | Coefficient from the table |
| \(K_h\) | kN/m³ | \(m \cdot z\) |
| Strip | m | Tributary length (0.5 or 1.0) |
| \(K_h\) Spring | kN/m | Stiffness concentrated at the node |
| \(K_v\) Spring | kN/m | Vertical stiffness concentrated at the node |

The table is truncated at the **pile length**: borehole layers below the toe
do not generate springs, because there is no pile there to react against
them.

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - **Winkler ignores the continuity of the soil.** Independent springs do not
      transmit forces to each other, which overestimates local stiffness and
      underestimates the reach of the deformation.
    - \(K_h = m \cdot z\) assumes stiffness **increasing with depth**, an
      assumption valid for sands and normally consolidated clays. In
      overconsolidated clay, with roughly constant stiffness, the model is less
      suitable.
    - The values of \(m\) come from a correlation with \(N_{SPT}\), with
      considerable scatter.
    - The model is **linear**: the spring responds in proportion to the
      displacement, without limit. For large displacements, the soil yields and
      the stiffness drops — a behaviour that would require *p-y* curves, which
      are out of scope.
    - The correlation \(\sigma_{adm} = 0.2 N\) is a rough rule of thumb.

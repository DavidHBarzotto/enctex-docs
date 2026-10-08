# Structural analysis

The pile is analysed as a **3D frame in finite elements**, supported on an
elastic foundation. The solver is [PyNite](https://github.com/JWock82/PyNite),
a matrix structural analysis library.

The result of this analysis — moments, shears and axial forces along the shaft
— is what feeds the [design](dimensionamento.md).

---

## The model { #o-modelo }

### Discretisation { #discretizacao }

The pile is divided into nodes **metre by metre**, matching the borehole
discretisation. This is no accident: each node needs a spring, and the spring
comes from the soil layer at that metre.

The nodes go from the head to the toe, ordered from top to bottom. The head
node receives the applied loads.

### Section and material { #secao-e-material }

Solid circular section:

\[
A = \frac{\pi D^2}{4}
\qquad
I_y = I_z = \frac{\pi D^4}{64}
\qquad
J = 2 I_z
\]

The material is defined by \(E_c\), Poisson's ratio \(\nu\) (default 0.20) and
a unit weight of 25 kN/m³, with

\[
G = \frac{E_c}{2(1+\nu)}
\]

### Elastic supports { #apoios-elasticos }

Each node receives springs according to the [soil reaction](reacao-do-solo.md):

| Direction | Spring | When |
| :-- | :-- | :-- |
| DX, DY | \(K_h\) | Always |
| DZ | \(K_v\) | Only when the vertical springs are enabled |

Torsion (RZ) is restrained to stabilise the model — a circular pile under
transverse load has no significant torsion, and leaving it free would create a
rigid-body mode.

!!! info "Surface nodes receive no spring"

    Nodes less than 0.10 m deep have their spring set to zero. The soil at the
    surface is the least confined and the most subject to erosion, excavation
    and seasonal variation — relying on its reaction is an optimism that
    practice does not confirm.

---

## Head level below ground { #cota-de-topo-abaixo-do-terreno }

When the pile head is **embedded** — cut off below ground level, the normal
situation under a cap —, the head node has soil around it and receives the
spring corresponding to its depth.

When the head is **at ground level or above**, it is left free. This is the
case of a pile with an exposed length, which behaves like a column fixed in
the soil.

!!! warning "A modelling precaution"

    The nodes are positioned at the **borehole levels**, not at distances
    measured from the pile head. It looks like a detail, but it is what ensures
    that the \(K_h\) of a given depth is applied at the right depth:
    positioning the nodes from the head would make the model sink with the
    pile, applying the 3 m stiffness at the 5 m level and lengthening the
    modelled member.

---

## Raked piles { #estacas-inclinadas }

SPX models raked piles with two angles:

| Parameter | Meaning |
| :-- | :-- |
| **Rake** | Angle from the vertical |
| **Azimuth** | Direction of the rake in the horizontal plane |

The horizontal position of each node is obtained by projecting the drop from
the head:

\[
x = (z_{topo} - z) \cdot \tan(i) \cdot \cos(az)
\qquad
y = (z_{topo} - z) \cdot \tan(i) \cdot \sin(az)
\]

The projection is measured **from the pile head**, not from ground level — a
pile cut off at 2 m only starts to depart from the vertical from there.

!!! tip "Individual rake"

    In a pile cap, each pile can have its own rake and azimuth. That is what
    allows fan arrangements to resist horizontal loads — the classic case of a
    bridge abutment or a structure under earth pressure.

---

## Analysis per axis { #analise-por-eixo }

The analysis is carried out **per axis** — one model for X and another for Y
—, each with the shear and moment of its own direction. The two results are
then combined in the design, which treats the bending as biaxial with axial
force.

This separation is what allows one plane model to be used at a time, which is
numerically more stable, without losing the biaxial interaction in the section
check.

---

## Results { #resultados }

The analysis produces, along the shaft:

- **Horizontal displacement** — the most widely used serviceability criterion
  for laterally loaded piles.
- **Bending moment** — usually at its maximum a few metres below the surface,
  and it is what designs the longitudinal reinforcement.
- **Shear force** — designs the stirrups.
- **Axial force** — decreasing with depth, due to the mobilised friction.

The charts are interactive and can be exported to the report.

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - The model is **linear elastic**. The concrete does not crack and the soil
      does not yield. For service displacements this is acceptable; close to
      failure, it is not.
    - The flexural stiffness uses the **gross** concrete section. NBR 6118
      allows a reduction for cracking in second-order analyses, which would
      make the displacements larger and redistribute the moments.
    - Winkler springs do not represent interaction between piles in the same
      cap. In a group with small spacing, the effective stiffness per pile is
      lower than calculated.
    - The 1 m discretisation limits the resolution of the maximum moment. In
      short or very stiff piles, the peak may fall between nodes.

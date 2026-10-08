# Structural Analysis

The fifth tab. It builds the finite element model of the pile on an elastic
foundation and returns the internal forces that will be used to design the
section.

## What the model represents { #o-que-o-modelo-representa }

The pile becomes a 3D frame discretised **metre by metre**, with a soil spring
at each node. The springs come from the
[soil reaction](../formulacoes/reacao-do-solo.md): \(K_h\) in the horizontal
directions and, optionally, \(K_v\) in the vertical.

The analysis runs **per axis** — one model for X and another for Y —, and the
two results are combined in the design as biaxial bending with axial force.

## Options { #opcoes }

| Option | Effect |
| :-- | :-- |
| Consider \(K_v\) | Enables the vertical springs. Matters above all for raked piles |
| Axis | Chooses which model to view, X or Y |
| Modulus of elasticity | \(E_c\) of the pile; if omitted, the program adopts one by pile type |
| Poisson's ratio | Default 0.20 |
| Self-weight | Distributed load along the shaft |

!!! tip "When to enable \(K_v\)"

    In a **vertical** pile under horizontal load, the vertical springs change
    little. In a **raked** pile they are essential: without \(K_v\), nothing
    prevents the pile from sliding along its own axis, and the displacements
    come out unrealistic.

## Results { #resultados }

The tab shows, along the depth:

| Diagram | Used for |
| :-- | :-- |
| Horizontal displacement | Serviceability check — it is the usual criterion for laterally loaded piles |
| Bending moment | Designs the longitudinal reinforcement |
| Shear force | Designs the stirrups |
| Axial force | Shows how much of the load has already been transferred by friction |

The charts are interactive and can be included in the report.

!!! info "Where the maximum moment is"

    In a pile under horizontal load, the maximum moment is rarely at the head:
    it usually appears a few metres below the surface, where the soil
    stiffness is still low but the pile has already gained lever arm. That peak
    is what designs the reinforcement, and that is why the longitudinal
    reinforcement cannot be stopped just below the cap.

## Precautions { #cuidados }

!!! warning "The model is linear elastic"

    The concrete does not crack and the soil does not yield. For service
    displacements this is acceptable; close to failure, it is not. The flexural
    stiffness uses the **gross** concrete section — NBR 6118 allows a reduction
    for cracking, which would increase displacements.

    See [limits of validity](../formulacoes/analise-estrutural.md#limites-de-validade).

- **The discretisation is 1 m.** In short or very stiff piles, the moment peak
  may fall between nodes and be underestimated.
- **Shallow nodes have no spring.** Above 0.10 m depth the stiffness is
  deliberately set to zero: the surface soil is subject to erosion, excavation
  and seasonal variation.
- **Springs do not interact.** In a cap with small spacing, the effective
  stiffness per pile is lower than calculated.

## Processing { #processamento }

The analysis opens a progress window. The time grows with the number of piles
and with the depth — a cap with eight piles on a 20 m borehole runs sixteen
models, two per pile.

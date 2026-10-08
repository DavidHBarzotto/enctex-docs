# Pile cap setup

The first tab. It defines the pile cap geometry, the position of the piles,
the columns and the actions.

## Piles { #estacas }

| Field | Note |
| :-- | :-- |
| Number of piles | From **1 to 30** per cap |
| Position | X and Y coordinates of each pile |
| Diameter | Defines the area of the node over the pile |
| Axis spacing | Governs the lever arm of the struts |

The outline of the pile cap is the **convex hull** of the piles plus the edge
distance — not a circumscribed rectangle. That polygon is what enters the
self-weight calculation and the finite element mesh.

!!! tip "Spacing is the most sensitive variable"

    Moving the piles apart flattens the strut and **increases the tie
    reinforcement**, as well as enlarging the cap in plan. Moving them closer
    reduces the tie, but there is a construction minimum — piles that are too
    close interfere with each other during construction and in capacity.

## Columns { #pilares }

PCO accepts **more than one column per pile cap**, each in its own tab, with
its own section, position and actions.

### Available sections { #secoes-disponiveis }

| Section | |
| :-- | :-- |
| Rectangular | |
| Circular | |
| I/H section | |
| U section | |
| Hollow rectangular | |
| Hollow circular | |

!!! info "Non-rectangular sections become an equivalent dimension"

    Blévot's formulas require a column dimension \(a_p\) in the direction
    considered. For sections that are not rectangles, the program calculates
    the **equivalent dimension** preserving the contact area that defines the
    compression node under the column.

    It is the correct approximation for the strut model, which sees the column
    as the region through which the load enters the cap — not as its exact
    shape.

## Actions { #acoes }

Each column receives the five force components:

| Component | Meaning |
| :-- | :-- |
| \(N\) | Axial force |
| \(M_x\), \(M_y\) | Moments |
| \(F_x\), \(F_y\) | Shears |

Actions are classified as **permanent** and **variable**, and the program
builds the normal ultimate combinations of NBR 8681 from there.

!!! warning "Classify permanent and variable correctly"

    It is not a formality. The code requires \(\gamma_g = 1.0\) on the
    permanent action when it **relieves** the effect of a variable one, and
    \(1.4\) when it aggravates it — and PCO tests both assumptions precisely
    because "favourable" changes from check to check.

    An action entered as permanent when it is variable — or the reverse —
    invalidates the whole combination. See
    [Load combinations](../formulacoes/combinacoes.md).

The **self-weight of the pile cap** is calculated by the program from the real
volume, with \(\gamma_{concreto} = 25\) kN/m³ (NBR 6120), and enters as a
permanent action.

## Finite element simulation { #simulacao-em-elementos-finitos }

With the geometry and actions entered, the tab solves the pile cap as a solid.

| Option | When to use it |
| :-- | :-- |
| **Hexahedral** mesh | Regular geometry — converges better with fewer elements |
| **Tetrahedral** mesh | Irregular arrangements, cut-outs, many columns |

The result gives the stress field, the pile reactions and the stresses at the
nodes — under the column and over the piles.

!!! note "FEM is optional for design"

    Blévot and MBT are analytical. The finite element model serves to **check**
    the assumptions and to verify the nodes against the real stress field,
    which is more rigorous than the analytical check.

    On a critical pile cap, run it. See
    [Finite elements](../formulacoes/elementos-finitos.md).

## 3D view { #visualizacao-3d }

The pile cap is drawn with the piles and columns in position. Use it before
calculating: a swapped coordinate is the most common input error, and it is
invisible in the table.

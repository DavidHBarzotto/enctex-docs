# Finite elements

The strut-and-tie model is an **idealisation**: it assumes where compression
flows and where tension appears, and designs from that. Finite element
analysis solves the cap as a three-dimensional solid and shows the stress
field that actually develops.

It does not replace the strut model — it replaces **faith** in it.

## The mesh { #a-malha }

PCO builds the mesh over the real polygon of the cap, with two element types:

| Element | When to use it |
| :-- | :-- |
| **Hexahedral** | Caps with regular geometry. Converges faster and with fewer elements for the same accuracy |
| **Tetrahedral** | Geometries that hexahedra do not fill well — irregular arrangements, cut-outs, many columns |

!!! tip "Start with hexahedral"

    For the ordinary cap — rectangular, piles in a regular arrangement — the
    hexahedron gives a better result with a coarser mesh. The tetrahedron is
    the way out when the geometry cannot reasonably be divided into hexahedra.

## What to read in the result { #o-que-se-le-no-resultado }

The analysis returns the stress field in the solid. Three readings matter:

**Where compression really flows.** The principal compressive stress
trajectories draw the real struts. Comparing them with the assumed struts
shows whether the truss model represents that cap — in a deep, well
proportioned cap they coincide; in a shallow, wide cap, compression spreads
in a way no simple truss reproduces.

**Where tension appears.** The idealised tie is a bar at the bottom. In the
solid, tension occupies a region, and the height of that region tells you
whether concentrating all the reinforcement at the bottom is appropriate or
whether it needs to go higher.

**Whether any node is overloaded.** The analytical node check uses idealised
areas. The solid shows the real concentration.

## Node check { #verificacao-dos-nos }

PCO uses the FEM result to check the stresses at the compression nodes — under
the column and over the piles — against the NBR 6118 limits.

!!! warning "Without FEM solved, the check is analytical"

    Checking the nodes against the stress field **requires the solved model**.
    Without it, the program falls back on the analytical check, with the
    idealised areas of the strut model.

    The distinction is not academic: the analytical check may pass a cap that
    the stress field fails, because it assumes a uniform distribution where
    there is concentration. If the cap is critical, **run the FEM**.

## Pile reactions { #reacoes-nas-estacas }

The finite element model also provides the distribution of reactions among
the piles — which, in a cap with several columns or eccentric loading, is not
the one returned by the linear distribution formula.

Since the model is **linear**, the load combination can be solved case by case
and the reactions enveloped afterwards. See
[Load combinations](combinacoes.md).

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - The model is **linear elastic**. The concrete does not crack, the steel
      does not yield, there is no plasticity. Close to failure, the real field
      redistributes in a way the linear model does not capture — and it is
      precisely that redistribution that underpins the strut model.
    - Therefore: **linear FEM does not replace the strut-and-tie model**. It
      checks assumptions and locates concentrations; the design still comes
      from the truss model, which is what the code supports.
    - The piles enter as supports. Their real stiffness — which the
      [SP line](../../spx/index.md) programs calculate — changes the
      distribution of reactions in a statically indeterminate cap.
    - Mesh refinement influences the result in regions of concentration. A peak
      stress at a re-entrant corner grows with refinement and does not
      converge: it is a geometric singularity, not a real force.

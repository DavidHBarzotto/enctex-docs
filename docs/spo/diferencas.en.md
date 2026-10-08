# What changes in SPO

SPO is the core of the SP line. This page lists what [SPX](../spx/index.md)
adds and what to do without each feature — so that you read the
[SPX manual](../spx/manual/interface.md) already knowing what to skip.

## Raked piles { #estacas-inclinadas }

**SPX and SPX AI only.**

In SPO all piles are vertical. There is no individual rake or azimuth, and the
rake dialog does not exist.

What this means when reading the manual:

- In [Pile cap setup](../spx/manual/bloco.md#estacas-inclinadas), the raked
  piles section does not apply.
- In [Structural analysis](../spx/formulacoes/analise-estrutural.md#estacas-inclinadas),
  the projection by rake and azimuth does not apply — all nodes lie on the same
  vertical axis.
- The **vertical springs \(K_v\)** are still available, but lose the importance
  they have in raked piles. In a vertical pile under horizontal load, they
  barely change the result.

!!! tip "Without raked piles, how to resist horizontal loads"

    Fan-arranged raked piles are the classic solution for earth pressure and
    braking forces. Without them, the way forward is to design the vertical
    piles for bending with axial force, which SPO does in full — it just leads
    to sturdier members.

    If the project is dominated by horizontal loads — bridge abutments,
    retaining structures —, SPX quickly pays for itself.

## Stratigraphic profile modelling { #modelagem-de-perfil-estratigrafico }

**SPX and SPX AI only.**

SPO accepts boreholes, and more than one. What it does not do is **interpolate
the stratigraphy between boreholes** or present a three-dimensional profile of
the ground.

In practice:

- Each pile is associated with one borehole and uses that borehole's profile.
- There is no virtual borehole at an intermediate position.
- In [Boreholes and soils](../spx/manual/sondagem.md#perfil-3d), the 3D
  profile section does not apply.

!!! info "When this matters"

    In homogeneous ground, assigning each pile to the nearest borehole is
    enough, and it is what has been done for decades.

    Stratigraphic modelling becomes worthwhile when the layers **dip** — and
    then the "nearest borehole" choice may assign a pile a profile that is not
    its own. It is also what visually explains why two neighbouring piles were
    given different lengths.

## Editable reader for borehole PDFs { #leitor-editavel-de-pdfs-de-sondagem }

**SPX and SPX AI only.**

In SPO the borehole is entered in the table. In
[Boreholes and soils](../spx/manual/sondagem.md#leitor-editavel-de-pdfs), the
PDF reader section does not apply.

!!! warning "This is where the time goes"

    A site with fifteen boreholes twenty metres deep means three hundred rows
    to type, each with an \(N_{SPT}\) and a soil classification — and each one
    is a chance to swap **silty sand** for **sandy silt**, which changes \(K\)
    from 0.80 to 0.55 MPa.

    If the volume of borehole logs is large, the SPX PDF reader is the feature
    that gives back the most time. See
    [conventions](../comecar/convencoes.md#tipos-de-solo).

## What is identical { #o-que-e-identico }

Everything else. In particular:

| Module | |
| :-- | :-- |
| Bearing capacity | Aoki-Velloso, Décourt-Quaresma and Teixeira |
| Settlement | Cintra & Aoki, group, Van der Veen |
| Soil reaction | \(K_h = m \cdot z\) and \(K_v\) |
| Structural analysis | Finite elements on an elastic foundation |
| Design | Biaxial bending with axial force and shear, NBR 6118 |
| Detailing | Interactive, with DXF export |
| Report | Editable calculation report |
| Project limits | 100 pile caps · 30 piles/cap · 200 piles · 20 boreholes |
| Pile types | All seven |

The [formulations](../spx/formulacoes/index.md) apply without reservation.

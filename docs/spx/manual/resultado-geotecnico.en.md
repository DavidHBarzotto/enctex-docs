# Geotechnical Results

The fourth tab, and the decision point of the project: this is where the
**pile length** is chosen.

The tab has four sub-tabs:

| Sub-tab | Content |
| :-- | :-- |
| Aoki–Velloso | Capacity by level |
| Décourt–Quaresma | Capacity by level |
| Teixeira | Capacity by level |
| Settlement (Cintra & Aoki) | Settlement, load × settlement curve, axial force diagram |

## How to read the table { #como-ler-a-tabela }

Each method presents one row **per possible toe level**:

| Column | Unit | Content |
| :-- | :-- | :-- |
| Levels | m | Toe depth, negative |
| Cumul. \(R_l\) | kN | Shaft friction accumulated from the head down to the level |
| \(R_p\) | kN | Toe resistance at that level |
| \(R_t\) | kN | Sum of the two |
| Final \(P_a\) | kN | **Allowable load**, with factors and limits already applied |

The procedure is straightforward: go down the Final \(P_a\) column until you
find the first value that exceeds the pile load. That level is the required
length.

!!! tip "That's why the table is by level"

    Programs that return a single number force you to try lengths until you get
    it right. With the whole \(P_a(z)\) curve in one run, the choice becomes a
    matter of reading a column — and it also shows **how much you would gain**
    by going one metre deeper, which is the information needed to decide
    between lengthening the pile or increasing the diameter.

### Extra columns for bored piles { #colunas-extras-em-estacas-escavadas }

For a bored pile in compression, Décourt-Quaresma adds:

| Column | Content |
| :-- | :-- |
| Bored Pa | The \(1.25\,R_l\) limit |
| Dec-Qua Pa | The method's value, without the limit |

The Final \(P_a\) column shows the **smaller** of the two. Having all three
side by side shows which criterion governed — information that often
justifies changing the pile type.

## The three methods diverge { #os-tres-metodos-divergem }

And they should. The main source of divergence is **which \(N_{SPT}\) each one
uses at the toe**:

| Method | Toe \(N\) |
| :-- | :-- |
| Aoki-Velloso | The layer immediately below |
| Décourt-Quaresma | Average of three layers |
| Teixeira | Average over the window \([-4D, +D]\) |

!!! info "How to interpret it"

    - **A large divergence** usually indicates a profile with an abrupt change
      near the toe. Aoki separates from the other two because a one-metre stiff
      lens supports its toe on its own.
    - **Teixeira standing out from the others** points to the influence of the
      diameter: only Teixeira sizes the \(N_p\) window as a function of \(D\).
    - **Excessive agreement** is more suspicious than divergence — it usually
      means a homogeneous profile, where all three reduce to the same average.

    The defensible practice is to adopt the **smallest** of the three, or the
    method with known regional calibration, recording the choice in the
    calculation report.

## Settlement { #recalque }

The fourth sub-tab provides:

- **Estimated settlement** by the Cintra & Aoki method, split into the elastic
  shortening of the pile and the soil contribution.
- **Group settlement**, by the \(\rho_{max}\sqrt{n}\) estimate.
- The Van der Veen **load × settlement curve**, anchored at the working point.
- The **axial force diagram** along the shaft.

The result is given in **millimetres**.

!!! warning "Allowable settlement is not the program's decision"

    SPX estimates how much the foundation settles. How much the structure can
    tolerate is a property of the structure — and **differential**
    settlements between supports, which are what actually damage buildings,
    require comparing the foundations with each other.

    See [limits of validity](../formulacoes/recalque.md#limites-de-validade).

## Geotechnical check { #verificacao-geotecnica }

The program issues a check for each pile, comparing the applied load with the
allowable load at the adopted level. Changing geotechnical parameters after
calculating triggers a warning — the result on screen no longer matches the
input, and it must be reprocessed.

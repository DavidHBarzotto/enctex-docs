# Detailing (DXF)

The seventh tab. It generates the construction drawing of the pile and exports
it as **DXF**, ready for the drawing sheet.

## Workflow { #fluxo }

1. **Analyse and Group Piles** — identifies identical piles and gathers them
   into groups.
2. **Generate View** — draws the detailing on screen.
3. **Fit Drawing** — adjusts the zoom.
4. **Export DXF** — saves the file.

The **Clear Drawing** button discards the current view.

## Grouping { #agrupamento }

Grouping is the feature that saves you from detailing the same pile twenty
times. The program compares the piles in the project and gathers those with
the same geometry, length and reinforcement.

| Mode | When to use it |
| :-- | :-- |
| Individual Pile | To detail a specific member |
| Identified Group | To detail a type, representing all identical ones |

!!! tip "Detail by group, not by pile"

    On a site with forty piles and three types, detailing by group produces
    three drawings instead of forty — and that is how the sheet is read on
    site. Grouping also feeds the [report](relatorio.md), which can be issued
    using the same logic.

## Drawing parameters { #parametros-do-desenho }

| Field | Unit | Effect |
| :-- | :-- | :-- |
| Embedment | cm | Penetration of the reinforcement into the cap |
| Anchorage \(L_b\) | cm | Anchorage length |
| Automatic \(L_b\) (40Ø) | — | Calculates \(L_b = 40\phi\) |
| Tapered (Necked) Toe | — | Draws the necked toe |

!!! note "\(L_b = 40\phi\) is a rule of thumb"

    The automatic option adopts forty diameters, a usual and conservative value
    for common situations. The rigorous NBR 6118 anchorage length depends on
    the bond condition, the concrete class and the ratio between calculated and
    provided area.

    When anchorage is critical — tension piles in particular — calculate it and
    enter the value manually.

## The DXF file { #o-arquivo-dxf }

The DXF comes out at full scale, in separate layers, and opens in any CAD
program. Files are named by pile or by group, depending on the mode chosen —
`Detalhamento_Grupo_1_Sondagem_1.dxf`, for example, identifies the group and
the reference borehole.

!!! warning "The drawing is the 'as-built' of what was calculated"

    The detailing reflects the current design. If you go back to the previous
    tabs and change anything — borehole, geometry, reinforcement —,
    **regenerate the drawing**. The DXF exported earlier stays on disk and is
    not updated on its own.

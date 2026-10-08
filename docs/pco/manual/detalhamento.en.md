# Detailing

The third tab. It draws the pile cap reinforcement and exports it as **DXF**,
ready for the drawing sheet.

## What is drawn { #o-que-e-desenhado }

The detailing is **interactive**: the drawing responds to the choices of bar
size and arrangement; it is not a fixed output.

| Element | |
| :-- | :-- |
| Main tension reinforcement | The tie, per side of the pile polygon |
| Distribution reinforcement | |
| Stirrups | When the model requires them — a flexible cap designed as a beam |
| Pile cap geometry | Outline, piles and columns in plan and section |

## Bar schedule { #quadro-de-ferro }

The schedule lists the bars by mark, with size, length, quantity and weight.

!!! info "The schedule uses the SAME steel as the design text"

    They are not two separate calculations. The reinforcement shown in the bar
    schedule comes from the same source as the text in the design tab —
    including Blévot's formulas tabulated by arrangement.

    This is deliberate: a schedule that diverges from the report is the kind of
    inconsistency that only shows up on site.

## DXF export { #exportacao-em-dxf }

The file is produced at full scale, in separate layers, and opens in any CAD
program. Files are named by pile cap — `Detalhamento_Bloco_1.dxf`, for
example.

!!! warning "Regenerate after any change"

    The drawing reflects the current design. If you go back to the previous
    tabs and change geometry, actions, model or bar sizes, **regenerate**. The
    DXF already exported stays on disk and does not update on its own.

## Tie anchorage { #ancoragem-do-tirante }

It deserves specific attention: the tie only exists if it is **anchored
beyond the pile axis**. It is the end that ensures the tensile force is
actually transferred — a tie that stops short of that is a loose bar at the
bottom of the cap.

Check the anchorage length in the detailing before issuing the sheet.

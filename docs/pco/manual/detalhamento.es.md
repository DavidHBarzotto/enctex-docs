# Detallado

Tercera pestaña. Dibuja las armaduras del encepado y las exporta en **DXF**,
listas para la lámina.

## Qué se dibuja { #o-que-e-desenhado }

El detallado es **interactivo**: el dibujo responde a las elecciones de
diámetro y disposición; no es una salida fija.

| Elemento | |
| :-- | :-- |
| Armadura principal de tracción | El tirante, por lado del polígono de pilotes |
| Armadura de reparto | |
| Estribos | Cuando el modelo los exige — encepado flexible calculado como viga |
| Geometría del encepado | Contorno, pilotes y pilares en planta y corte |

## Planilla de armaduras { #quadro-de-ferro }

La planilla relaciona las barras por posición, con diámetro, longitud,
cantidad y peso.

!!! info "La planilla usa el MISMO acero que el texto del dimensionamiento"

    No son dos cálculos. La armadura que aparece en la planilla viene de la
    misma fuente que el texto de la pestaña de dimensionamiento — incluidas las
    fórmulas de Blévot tabuladas por disposición.

    Es deliberado: que la planilla y la memoria diverjan es el tipo de
    inconsistencia que solo aparece en obra.

## Exportación a DXF { #exportacao-em-dxf }

El archivo sale a escala real, en capas separadas, y abre en cualquier CAD.
Los archivos se nombran por encepado — `Detalhamento_Bloco_1.dxf`, por
ejemplo.

!!! warning "Regenere después de cualquier cambio"

    El dibujo refleja el dimensionamiento actual. Si vuelve a las pestañas
    anteriores y cambia la geometría, las acciones, el modelo o los diámetros,
    **regenere**. El DXF ya exportado sigue en el disco y no se actualiza solo.

## Anclaje del tirante { #ancoragem-do-tirante }

Merece una atención específica: el tirante solo existe si está **anclado más
allá del eje del pilote**. Es el extremo que garantiza que la fuerza de
tracción se transfiera de hecho — un tirante que termina antes de eso es una
barra suelta en la base del encepado.

Verifique la longitud de anclaje en el detallado antes de emitir la lámina.

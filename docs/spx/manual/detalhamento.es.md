# Detallado (DXF)

Séptima pestaña. Genera el plano de ejecución del pilote y lo exporta en
**DXF**, listo para la lámina.

## Flujo { #fluxo }

1. **Analizar y Agrupar Pilotes** — identifica pilotes idénticos y los reúne en
   grupos.
2. **Generar Visualización** — dibuja el detallado en pantalla.
3. **Encuadrar Dibujo** — ajusta el zoom.
4. **Exportar DXF** — guarda el archivo.

El botón **Limpiar Dibujo** descarta la visualización actual.

## Agrupamiento { #agrupamento }

El agrupamiento es la función que evita detallar veinte veces el mismo pilote.
El programa compara los pilotes del proyecto y reúne los que tienen la misma
geometría, longitud y armadura.

| Modo | Cuándo usarlo |
| :-- | :-- |
| Pilote Individual | Detallar una pieza específica |
| Grupo Identificado | Detallar un tipo, representando a todos los iguales |

!!! tip "Detalle por grupo, no por pilote"

    En una obra con cuarenta pilotes y tres tipos, detallar por grupo produce
    tres planos en lugar de cuarenta — y así es como se lee la lámina en obra.
    El agrupamiento también alimenta el [informe](relatorio.md), que puede
    emitirse con la misma lógica.

## Parámetros del dibujo { #parametros-do-desenho }

| Campo | Unidad | Efecto |
| :-- | :-- | :-- |
| Empotramiento | cm | Penetración de la armadura en el encepado |
| Anclaje \(L_b\) | cm | Longitud de anclaje |
| \(L_b\) Automático (40Ø) | — | Calcula \(L_b = 40\phi\) |
| Punta Cónica (Estrangulada) | — | Dibuja la punta estrangulada |

!!! note "\(L_b = 40\phi\) es una regla práctica"

    La opción automática adopta cuarenta diámetros, un valor usual y
    conservador para las situaciones corrientes. La longitud de anclaje
    rigurosa de la NBR 6118 depende de la situación de adherencia, de la clase
    del hormigón y de la relación entre el área calculada y la efectiva.

    Cuando el anclaje sea crítico — sobre todo en pilotes traccionados —,
    calcúlelo e ingrese el valor manualmente.

## El archivo DXF { #o-arquivo-dxf }

El DXF sale con el dibujo a escala real, en capas separadas, y abre en
cualquier CAD. Los archivos se nombran por pilote o por grupo, según el modo
elegido — `Detalhamento_Grupo_1_Sondagem_1.dxf`, por ejemplo, identifica el
grupo y la perforación de referencia.

!!! warning "El dibujo es el 'as-built' de lo que se calculó"

    El detallado refleja el dimensionamiento actual. Si vuelve a las pestañas
    anteriores y cambia cualquier cosa — sondeo, geometría, armadura —,
    **regenere el dibujo**. El DXF exportado antes sigue en el disco y no se
    actualiza solo.

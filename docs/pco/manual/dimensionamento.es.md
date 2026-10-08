# Dimensionamiento

Segunda pestaña. Es donde se elige **cómo se calcula el encepado** y se
obtienen las armaduras.

## Comportamiento del encepado { #comportamento-do-bloco }

La primera elección, y la que más importa:

| Opción | Disponible en |
| :-- | :-- |
| Encepado Rígido (Compresión) | PCO y PCX |
| Encepado Rígido (Arrancamiento/Tracción) | PCO y PCX |
| Encepado Flexible (Compresión) | **Solo PCX** |
| Encepado Flexible (Arrancamiento/Tracción) | **Solo PCX** |

!!! warning "Rígido o flexible no es una preferencia"

    Es una cuestión de **comportamiento**, decidida por la geometría. El
    criterio de la NBR 6118 compara la altura del encepado con la distancia de
    la cara del pilar al eje del pilote.

    Un encepado esbelto calculado como rígido tiene la armadura
    **subestimada**: la biela que supone el modelo no llega a formarse, y lo
    que ocurre de hecho es flexión. Vea
    [Verificaciones](../formulacoes/verificacoes.md#rigidez-do-bloco).

## Modelo (solo para rígido) { #modelo-apenas-para-rigido }

| Modelo | Qué hace |
| :-- | :-- |
| **Blévot** | Fórmula clásica, tabulada por disposición. [Formulación](../formulacoes/blevot.md) |
| **MBT** | Bielas y tirantes de los Comentarios del IBRACON, con expansión calculada. [Formulación](../formulacoes/mbt.md) |

El MBT tiende a dar un brazo de palanca menor y, por lo tanto, **más
armadura** que Blévot para el mismo encepado.

!!! tip "Calcule con ambos"

    Una gran divergencia entre ellos señala un encepado en el que la geometría
    del nudo está gobernando — y en ese caso conviene ejecutar el modelo de
    [elementos finitos](../formulacoes/elementos-finitos.md) para ver el campo
    de tensiones real.

### Factor KR (Blévot) { #fator-kr-blevot }

Disponible cuando el modelo es Blévot: **0,90** o **0,95**.

Es el coeficiente que tiene en cuenta la **pérdida de resistencia del hormigón
a lo largo del tiempo debida a cargas permanentes — el efecto Rüsch**. Entra en
el límite de tensión de las bielas:

\[
\sigma_{cd,b,lim} = \alpha_{lim}\,K_R\,f_{cd}
\]

con \(\alpha_{lim}\) igual a 1,4, 1,75 o 2,1 según el encepado tenga dos,
tres, o cuatro o más pilotes.

!!! info "No modifica la armadura"

    \(K_R\) actúa **solo sobre el límite de tensión**, no sobre la fuerza del
    tirante. Adoptar 0,90 es la elección conservadora: hace más restrictiva la
    verificación de la biela, sin alterar el área de acero calculada.

    Vea [Blévot & Frémy](../formulacoes/blevot.md#o-limite-e-o-coeficiente-kr).

## Modelo (solo flexible) { #modelo-apenas-flexivel }

Aparece en el [PCX](../../pcx/index.md), cuando el comportamiento elegido es
flexible:

| Modelo | Hipótesis |
| :-- | :-- |
| **Viga biapoyada** | Los pilotes son los apoyos. Con 3 o más pilotes, el programa usa un análisis de **emparrillado** |
| **Viga empotrada y libre** | Voladizo a partir del pilar |

Vea [encepados flexibles](../../pcx/blocos-flexiveis.md).

## Diámetros de barra { #bitolas }

Los diámetros disponibles para la planilla de armaduras se eligen por
encepado.

!!! warning "Comportamiento, modelo, KR y diámetros son POR ENCEPADO"

    Cambiar cualquiera de ellos en el Encepado 1 no afecta al Encepado 2. Es el
    comportamiento correcto en un proyecto con encepados de distinto tamaño —
    pero significa que verificar un encepado no verifica los demás.

## Resultados { #resultados }

La pestaña presenta:

**Análisis de tensiones y límites (bielas)** — las tensiones en los nudos,
bajo el pilar y sobre los pilotes, comparadas con los límites.

**Armadura principal de tracción** — el tirante, por lado del polígono de
pilotes.

**Comparación con el MEF**, cuando se resolvió el modelo de elementos finitos:
tensión en el centro de la biela, ángulo de la biela, tensión máxima y media en
los nudos del pilar y de los pilotes. Es la verificación directa entre el
modelo idealizado y el campo real.

!!! info "Una nota que emite el programa, y vale la pena leer"

    Para encepados con **más de cuatro pilotes**, los factores de
    aplastamiento de Blévot son **extrapolados** — los ensayos originales
    cubrieron de dos a cuatro pilotes.

    No invalida el resultado, pero es exactamente el tipo de hipótesis que debe
    constar en la memoria de cálculo.

## Mensajes { #mensagens }

??? question "Tensión en el nudo por encima del límite"

    El hormigón se está aplastando. La armadura no lo resuelve: aumente la
    altura del encepado, la sección del pilar o el \(f_{ck}\). Vea
    [Verificaciones](../formulacoes/verificacoes.md#nos-de-compressao).

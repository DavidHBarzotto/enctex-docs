# Verificaciones

Además de la armadura del tirante, el encepado debe pasar verificaciones que el
modelo de bielas no resuelve por sí solo.

---

## Rigidez del encepado { #rigidez-do-bloco }

La clasificación entre rígido y flexible no es nomenclatura: decide **qué
formulación vale**.

La NBR 6118 (22.7.1) define que los encepados "pueden considerarse rígidos o
flexibles por un criterio análogo al definido para las zapatas". En la
dirección considerada:

\[
h \ge \frac{A - a_p}{3}
\]

donde \(h\) es la altura del encepado, \(A\) la dimensión del encepado en esa
dirección y \(a_p\) la dimensión del pilar en la misma dirección.

Un criterio equivalente y más directo de usar: el encepado puede considerarse
rígido cuando el **ángulo de la biela es mayor o igual a 45°**.

### Qué dice la norma sobre cada comportamiento { #o-que-a-norma-diz-sobre-cada-comportamento }

**Encepado rígido** (22.2.7.1) — el comportamiento estructural se caracteriza
por:

- trabajo a flexión en las dos direcciones, usualmente simulado por bielas y
  tirantes, pero con **tracciones esencialmente concentradas en las líneas
  sobre los pilotes** — una retícula definida por el eje de los pilotes, con
  **franjas de ancho igual a 1,2 veces el diámetro del pilote**;
- fuerzas transmitidas del pilar a los pilotes esencialmente por **bielas de
  compresión**, de forma y dimensiones complejas;
- trabajo a cortante también en dos direcciones, **sin roturas por tracción
  diagonal, sino por compresión de las bielas**, análogamente a las zapatas.

**Encepado flexible** — "para este tipo de encepado debe realizarse un
análisis más completo, desde la distribución de los esfuerzos en los pilotes,
los tirantes de tracción y el cortante, hasta la necesidad de verificar el
punzonamiento".

| Comportamiento | Modelo aplicable |
| :-- | :-- |
| **Rígido** | Bielas y tirantes — [Blévot](blevot.md) o [MBT](mbt.md) |
| **Flexible** | Viga a flexión — [PCX](../../pcx/blocos-flexiveis.md) |

!!! tip "En el límite, calcule de las dos formas"

    Un encepado esbelto calculado como rígido tiene la armadura
    **subestimada**: la biela que supone el modelo no llega a formarse, y lo
    que ocurre de hecho es flexión.

    Si la armadura de flexión resulta mayor que la del tirante, es la que debe
    prevalecer — la diferencia mide cuánto el encepado ya no se comporta como
    rígido.

---

## Nudos de compresión { #nos-de-compressao }

Los nudos son los puntos en que se encuentran las bielas: bajo el pilar y
sobre cada pilote. Es en ellos donde la tensión es máxima — y **los dos tienen
límites distintos**.

| Nudo | Tipo | Límite NBR 6118 |
| :-- | :-- | :-- |
| Bajo el pilar | CCC — solo compresión | \(f_{cd1} = 0{,}85\,\alpha_{v2}\,f_{cd}\) |
| Sobre el pilote | CCT — dos compresiones y una tracción | \(f_{cd3} = 0{,}72\,\alpha_{v2}\,f_{cd}\) |

con \(\alpha_{v2} = 1 - f_{ck}/250\).

En el [MBT](mbt.md) esta verificación **es el propio criterio** que define la
profundidad de expansión. En [Blévot](blevot.md), los límites son otros —
\(\alpha_{lim} K_R f_{cd}\), con \(\alpha_{lim}\) de 1,4 a 2,1 según el número
de pilotes —, establecidos por los propios ensayos de los autores.

!!! warning "Un nudo reprobado no se resuelve con armadura"

    Si la tensión supera el límite, el hormigón se está aplastando. Agregar
    acero no cambia nada: el camino es **aumentar la altura del encepado**,
    **ampliar la sección del pilar** o **subir el \(f_{ck}\)**.

!!! info "Los límites de la norma no consideran el confinamiento"

    \(f_{cd1}\) y \(f_{cd3}\) se establecieron para **elementos planos**. Un
    encepado es tridimensional, y el confinamiento generado por el detallado en
    jaula aumenta sustancialmente la resistencia del hormigón — Blévot midió
    bielas rompiendo a más del 150 % de la resistencia media.

    Por eso estos límites son conservadores aplicados a encepados. Es un
    conservadurismo conocido y aceptado, no un error.

---

## Punzonamiento { #puncao }

El punzonamiento es el riesgo de que el pilar **perfore** el encepado,
arrancando un tronco de cono de hormigón.

!!! info "En un encepado rígido bien proporcionado, no gobierna"

    Las bielas comprimidas **no presentan riesgo de rotura por punzonamiento**
    siempre que la inclinación quede en el intervalo
    \(40^\circ \le \alpha \le 55^\circ\) — exactamente el rango que delimita el
    canto útil en [Blévot](blevot.md#altura-util).

    Es coherente con lo que dice la norma del encepado rígido: no rompe por
    tracción diagonal, sino por compresión de las bielas.

El punzonamiento empieza a importar a medida que el encepado se acerca al
comportamiento flexible — y la propia NBR 6118 cita la "necesidad de verificar
el punzonamiento" justamente al tratar del encepado flexible.

La tensión resistente en el contorno \(C_1\), definido por el perímetro del
pilar contenido en el encepado, sigue la analogía con las losas:

\[
\tau_{Rd} = 0{,}27\,\alpha_{v2}\,f_{cd}
\qquad\qquad
\tau_{Sd} = \frac{P}{C_1\,d}
\]

---

## Cortante { #cisalhamento }

En un **encepado rígido**, el cortante es absorbido por las bielas — la norma
es explícita al decir que no hay rotura por tracción diagonal.

En un **encepado flexible** calculado como viga — función del
[PCX](../../pcx/blocos-flexiveis.md) — el cortante se verifica con criterio de
viga, y la armadura transversal se dimensiona cuando la reacción supera la
parcela resistida por el hormigón.

---

## Anclaje del tirante { #ancoragem-do-tirante }

Decisivo, y frecuentemente subestimado: **el tirante solo existe si está
anclado**. Un tirante que termina antes del eje del pilote es una barra suelta
en la base del encepado.

La NBR 6118 (22.7.4.1.1) prescribe que las barras se extiendan **de cara a
cara** del encepado, terminen en **gancho en los dos extremos**, y que el
anclaje se mida **a partir de las caras internas de los pilotes**.

!!! warning "Es lo que hace inviables muchos encepados flexibles"

    El anclaje de la armadura del pilar dentro del encepado es una de las
    verificaciones más importantes para el funcionamiento estructural, y es
    **uno de los principales factores que hacen inviable el dimensionamiento
    de encepados flexibles** — el encepado bajo simplemente no tiene altura
    para anclar la armadura de espera del pilar.

    La propia altura mínima del encepado rígido tiene ese segundo
    condicionante: \(d > \ell_{b,\phi,pil}\).

---

## Hendimiento { #fendilhamento }

La NBR 6118 (22.7.3) determina que, **en la región de contacto entre el pilar
y el encepado, deben considerarse los efectos de hendimiento**.

!!! warning validade "El PCO no verifica el hendimiento"

    La armadura que cose la expansión de la compresión bajo el pilar no está
    implementada. En un encepado sobre **un pilote** es la armadura principal —
    y allí el programa no se aplica.

    En los demás casos, calcúlela aparte y regístrela en la memoria.

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - Las verificaciones cubren el **estado límite último**. La fisuración y la
      deformación en servicio no se verifican.
    - **El hendimiento y el zunchado** no están contemplados.
    - Las situaciones transitorias — el encepado durante el hormigonado, el
      descabezado de los pilotes — están fuera del alcance.
    - La verificación de los nudos por el campo de tensiones exige el modelo de
      elementos finitos resuelto. Sin él, la comprobación recae en las áreas
      idealizadas del modelo de bielas, que suponen una distribución uniforme
      donde hay concentración.

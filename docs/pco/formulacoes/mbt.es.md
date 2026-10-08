# Método de Bielas y Tirantes (MBT)

El modelo de **Santos, Marquesi & Stucchi (2015)**, publicado en los
*Comentários Técnicos e Exemplos de Aplicação da ABNT NBR 6118:2014* del
IBRACON.

Nació de una necesidad concreta: la revisión de la NBR 6118 en 2014 introdujo
**límites de resistencia de nudos y bielas** que antes no existían, y esos
límites son inferiores a los del método de Blévot. Un encepado que pasaba por
Blévot podía no pasar por la norma — y faltaba un método que conciliara las
dos cosas sin el conservadurismo excesivo del método de Fusco.

El MBT combina el modelo clásico de Blévot con el **concepto de apertura de
carga** de Fusco.

---

## El problema de la expansión { #o-problema-do-espraiamento }

En Blévot, la proyección vertical de la biela es el canto útil \(d\), y la
dimensión del pilar entra por un término tabulado.

El MBT mira el nudo bajo el pilar. La carga no entra en el encepado por el
área exacta del pilar: **se expande** al penetrar en el hormigón, a 45°, y el
área efectiva de compresión crece con la profundidad. La biela nace en el
punto en que la tensión en esa área ampliada cae hasta el límite resistente.

Llamando \(y\) a esa profundidad, el área ampliada es

\[
A_{amp} = (a_p + 2y)\,(b_p + 2y)
\]

y el brazo de palanca interno pasa a ser

\[
z = d - \frac{y}{2}
\]

!!! info "La diferencia de geometría en una frase"

    Blévot define la tangente del ángulo por la razón \(d/L_{proj}\); el MBT la
    define por \(z/L_{proj}\), con \(z = d - 0{,}5y\).

    Como \(z < d\), la biela del MBT es **más tendida** que la de Blévot — y el
    tirante está más cargado, por lo tanto más armadura.

El ancho de la biela en la región del nudo sale de

\[
a_{bie} = \frac{a_p}{2} + y\cos\theta
\qquad\text{o}\qquad
a_{bie} = \frac{a_{p,amp}}{2}\,\text{sen}\,\theta
\]

---

## Los dos límites nodales, y son distintos { #os-dois-limites-nodais-e-eles-sao-diferentes }

Este es el punto en que más se yerra. La NBR 6118 (ítem 22.3.2) define límites
**distintos** según el tipo de nudo:

\[
\sigma^{bie}_{cd,pilar} = \frac{F_{d,pilar}}{A_{amp,pilar}\,\text{sen}^2\theta} \;\le\; f_{cd1}
\]

\[
\sigma^{bie}_{cd,est} = \frac{F_{d,est}}{A_{amp,est}\,\text{sen}^2\theta} \;\le\; f_{cd3}
\]

con

\[
f_{cd1} = 0{,}85\,\alpha_{v2}\,f_{cd}
\qquad
f_{cd3} = 0{,}72\,\alpha_{v2}\,f_{cd}
\qquad
\alpha_{v2} = 1 - \frac{f_{ck}}{250}
\]

| Nudo | Tipo | Fuerzas que actúan en él | Límite |
| :-- | :-- | :-- | :-- |
| Bajo el pilar | **CCC** | Solo compresión | \(f_{cd1} = 0{,}85\,\alpha_{v2}f_{cd}\) |
| Sobre el pilote | **CCT** | Dos compresiones y **una tracción** | \(f_{cd3} = 0{,}72\,\alpha_{v2}f_{cd}\) |

!!! warning "El nudo del pilote admite un 15 % menos de tensión"

    Es el tirante el que marca la diferencia: el nudo sobre el pilote ancla la
    armadura traccionada, y la tracción fisura el hormigón en la región nodal,
    reduciendo la tensión de compresión que soporta.

    Usar \(f_{cd1}\) en los dos nudos — el error fácil — **sobrestima en un
    18 % la capacidad del nudo del pilote**. En un encepado en que gobierna el
    pilote, es la diferencia entre aprobar y reprobar.

La resistencia del nudo bajo el pilar se adopta, **del lado de la seguridad**,
como el valor del ítem 22.1 de la NBR 6118 para el nudo CCC,
**independientemente de la cantidad de pilotes**.

---

## El procedimiento iterativo { #o-roteiro-iterativo }

Como la tensión depende de \(\text{sen}^2\theta\), y \(\theta\) depende de
\(y\), no hay solución cerrada. El procedimiento es:

1. Se adopta un \(y\) — por ejemplo, \(y = 0{,}2d\).
2. Se determina la inclinación de la biela, siendo **deseable
   \(\theta \ge 45^\circ\)**.
3. Se verifica la tensión de compresión en el nudo bajo el pilar.
4. Si no es igual al límite de resistencia, **se itera \(y\)** hasta que la
   tensión solicitante iguale la resistente.
5. Se determina la inclinación final de la biela y las armaduras principales
   sobre los pilotes.
6. Se verifican las tensiones de compresión en los nudos sobre los pilotes.
7. Se determinan las armaduras de reparto, de piel y las demás secundarias.

El PCO automatiza los pasos 1 a 4: busca directamente el \(y\) en que la
tensión en el nudo del pilar iguala \(f_{cd1}\).

### Tres restricciones del método { #tres-restricoes-do-metodo }

1. La **expansión es siempre a 45°**. El método no admite otra inclinación, y
   el programa no permite modificarla.
2. En encepados sobre **dos pilotes**, la expansión ocurre **solo en el
   sentido longitudinal** del encepado.
3. La biela parte del centro de la subárea del pilar original, **a la altura
   \(y/2\)**.

---

## El límite de y { #o-limite-de-y }

La expansión no crece indefinidamente: está confinada por las dimensiones del
encepado.

\[
a_p + 2y \le 0{,}85\,L_{x,bloco}
\qquad
b_p + 2y \le 0{,}85\,L_{y,bloco}
\]

!!! info "Por qué no 0,4d"

    En la literatura aparece un límite \(y \le 0{,}4d\), frecuentemente citado
    como si fuera del MBT. **No lo es**: viene de otra formulación.

    Lo que recomienda el MBT es controlar la **profundidad de la línea
    neutra**, de modo análogo a lo que se hace en flexión para garantizar la
    capacidad de deformación plástica. El criterio indicado en los estudios
    preliminares es

    \[
    \frac{y}{d} \le 0{,}3
    \]

    La hipótesis del método es que el ELU se alcanza cuando la resistencia del
    nudo superior **y** la fuerza resistente de la armadura se agotan al mismo
    tiempo — y eso solo es adecuado si el nudo inferior sobre el pilote, o la
    biela, no agotan antes sus resistencias.

---

## ¿Blévot o MBT? { #blevot-ou-mbt }

| | Blévot & Frémy | MBT |
| :-- | :-- | :-- |
| Tangente del ángulo | \(d / L_{proj}\) | \(z / L_{proj}\), con \(z = d - 0{,}5y\) |
| Dimensión del pilar | Subárea \(a_p/4\) | Área ampliada por expansión a 45° |
| Límite en el nudo del pilar | \(\alpha_{lim} K_R f_{cd}\) — 1,4 a 2,1 según el n.º de pilotes | \(f_{cd1} = 0{,}85\,\alpha_{v2}f_{cd}\) |
| Límite en el nudo del pilote | El mismo | \(f_{cd3} = 0{,}72\,\alpha_{v2}f_{cd}\) |
| Armadura | Menor; con mayoración del 15 % en encepados de 2 pilotes | **Mayor**, en general |
| Respaldo | 116 ensayos propios | Comentarios del IBRACON a la NBR 6118 |

!!! tip "Cómo elegir"

    El MBT es el modelo alineado con los Comentarios del IBRACON a la norma
    vigente, e incorpora la verificación del nudo en el propio cálculo del
    brazo de palanca. Si necesita justificar el dimensionamiento contra la
    NBR 6118 actual, es el camino directo.

    Blévot sigue siendo útil como referencia y verificación de orden de
    magnitud — es el método con que se dimensionó la mayor parte del parque
    construido.

    **El MBT produce más armadura que Blévot en la mayoría de los casos.** La
    excepción puede darse justamente en encepados sobre dos pilotes, por el
    factor 1,15 que Blévot aplica allí.

### Comparación con ensayos { #comparacao-com-ensaios }

La razón entre la carga de rotura medida y la prevista, en el conjunto de
ensayos analizados por Santos et al.:

| Método | Promedio | Coef. de variación |
| :-- | --: | --: |
| Blévot | 1,19 | 0,21 |
| MBT (Santos et al.) | 1,21 a 1,23 | 0,19 a 0,20 |
| Fusco | 1,49 | 0,17 |

El MBT tiene un nivel de seguridad **equivalente al de Blévot**, con una
dispersión ligeramente menor. Fusco es bastante más conservador, por el límite
de tensión vertical en la región del pilote.

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - Vale para **encepado rígido**, como Blévot.
    - La búsqueda de \(y\) **se satura** en el límite geométrico. Cuando se
      satura sin que la tensión baje al límite, el encepado no tiene geometría
      para la carga: el camino es aumentar la altura, la sección del pilar o el
      \(f_{ck}\) — no la armadura.
    - La expansión a 45° es una **idealización**. El campo de tensiones real es
      curvo, y es lo que permite verificar el modelo de
      [elementos finitos](elementos-finitos.md).
    - Los límites de nudos y bielas de la NBR 6118 se establecieron para
      **elementos planos** y **no consideran el confinamiento** que existe en
      un encepado tridimensional. Por eso son conservadores aquí — Blévot
      observó bielas rompiendo con tensiones superiores al 150 % de la
      resistencia media del hormigón, efecto del confinamiento generado por el
      detallado en jaula.
    - A partir de esa observación, Santos et al. proponen **eliminar el factor
      \(\alpha_{v2}\)** en la verificación del nudo superior para encepados con
      cuatro o más pilotes. El PCO no adopta esa propuesta: mantiene
      \(\alpha_{v2}\), que es el texto normativo.

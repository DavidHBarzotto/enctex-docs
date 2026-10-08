# Optimización de la sección

La función exclusiva del SBX. El SBO responde *"¿esta sección aguanta?"*; el
SBX responde la pregunta inversa: **¿cuál es la sección más barata que
aguanta?**

---

## El método { #o-metodo }

**Programación cuadrática secuencial** — SLSQP, de `scipy.optimize`. Es un
método de optimización no lineal con restricciones, basado en el gradiente.

La elección se explica por la forma del problema. Las variables son
**continuas** — ancho y altura en centímetros —, la función de costo es suave
en casi todo el dominio, y el espacio tiene solo dos dimensiones. En un
problema así, un método de gradiente converge en decenas de evaluaciones,
mientras que una metaheurística gastaría miles para llegar al mismo punto.

!!! info "Por qué no enumerar, como en el optimizador de encepados"

    El optimizador de encepados del GCX enumera exhaustivamente, porque allí el
    espacio es **discreto y pequeño** — diámetros de catálogo, número entero de
    pilotes.

    Aquí no: \(b\) y \(h\) son continuos. Enumerar exigiría discretizar, y la
    discretización que diera la misma precisión tendría miles de puntos. El
    gradiente es la herramienta correcta para una variable continua.

---

## Las variables { #as-variaveis }

| Sección | Variables |
| :-- | :-- |
| Rectangular | ancho \(b\) y altura \(h\) |
| T | ancho del alma \(b_w\) y altura \(h\) |

En la sección en T, el **ala está dada** — \(b_f\) y \(h_f\) no varían. Tiene
sentido: el ala suele ser la losa, cuya geometría viene de fuera de la viga.

---

## La función objetivo { #a-funcao-objetivo }

\[
C = c_{concreto}\cdot V_c \;+\; c_{aço}\cdot\left(P_s + P_{sw}\right)
\]

con \(V_c\) el volumen de hormigón por metro de viga, \(P_s\) el peso de la
armadura longitudinal y \(P_{sw}\) el de las transversales, ambos con una masa
específica de **7850 kg/m³**.

El peso de los estribos considera el perímetro de la sección:

\[
P_{sw} = \frac{A_{sw}}{10^4}\cdot 7850 \cdot \frac{2(b+h)}{100}
\]

### El modo consumo { #o-modo-consumo }

!!! tip "Poner los dos costos en cero cambia lo que se optimiza"

    Si informa un **costo cero** para el hormigón y el acero, el objetivo pasa
    a ser el **volumen geométrico total** — hormigón más acero, convertido por
    la masa específica:

    \[
    C = V_c + \frac{P_s + P_{sw}}{7850}
    \]

    Es útil cuando no tiene precios confiables, o quiere la sección de menor
    consumo de material independientemente del precio. El resultado cambia:
    el acero y el hormigón pasan a competir por volumen, y no por dinero.

---

## Las restricciones { #as-restricoes }

### Límites de las variables { #limites-das-variaveis }

| Variable | Mínimo | Máximo |
| :-- | --: | --: |
| \(b\) o \(b_w\) | 12 cm | 100 cm |
| \(h\) (rectangular) | 20 cm | 300 cm |
| \(h\) (sección en T) | \(h_f + 5\) cm | 300 cm |

El mínimo de 12 cm es el ancho mínimo de viga de la NBR 6118.

### La viga no puede ser más ancha que alta { #a-viga-nao-pode-ser-mais-larga-que-alta }

\[
h \ge b
\]

Es la única restricción explícita de desigualdad. Sin ella, el optimizador
encontraría secciones acostadas — eficientes en el papel, extrañas en obra.

### Las verificaciones estructurales entran por dentro { #as-verificacoes-estruturais-entram-por-dentro }

Esta es la decisión más importante del diseño: **las verificaciones no son
restricciones del optimizador**. Cada evaluación de la función objetivo
ejecuta el dimensionamiento completo — flexión, cortante, torsión, interacción
de bielas — y, cuando falla, devuelve una **penalización**:

\[
C_{inviável} = 10^6 + b\,h
\]

Así el optimizador solo recorre secciones que de hecho pasan, sin necesitar
expresiones analíticas de cada restricción normativa — que serían decenas, y
cambiarían con cada revisión de la norma.

---

## El valor inicial { #o-chute-inicial }

SLSQP es un método **local**: desciende desde el punto donde empieza. Si
empieza en una sección inviable, el gradiente de la penalización no lo guía
hacia afuera.

Por eso hay una búsqueda previa. Partiendo de la sección que usted informó,
mientras sea inviable:

1. aumenta \(h\) en 10 cm;
2. si todavía es inviable, aumenta \(b\) en 5 cm;
3. repite, hasta 20 veces.

Agrandar la sección es el camino más corto hacia la viabilidad, y por eso la
búsqueda avanza en esa dirección.

---

## Mínimos incluidos en la evaluación { #minimos-embutidos-na-avaliacao }

Dos armaduras entran en el costo aun cuando el cálculo no las exige — porque
se ejecutarán de todos modos:

| Armadura | Valor |
| :-- | :-- |
| Longitudinal mínima | \(A_s \ge 3{,}14\) cm² — cuatro barras de 10 mm |
| De piel | \(0{,}10\%\,b\,h\) para \(h \ge 60\) cm; \(0{,}05\%\,b\,h\) para \(h \ge 50\) cm; cero por debajo |

Sin estos mínimos, el optimizador vería las vigas altas como más baratas de lo
que son: la armadura de piel crece con la altura y es justamente lo que frena
el alargamiento de la sección.

---

## Qué hacer con el resultado { #o-que-fazer-com-o-resultado }

!!! warning "El resultado es continuo; la obra no"

    El optimizador devuelve algo como \(b = 17{,}3\) cm y \(h = 62{,}8\) cm.
    Ningún encofrado se ejecuta así.

    **Redondee hacia arriba**, en múltiplos de 5 cm, y **ejecute el SBO en la
    sección redondeada** para confirmar que pasa. Redondear hacia arriba casi
    siempre mantiene la viabilidad — pero "casi siempre" no es "siempre", y la
    confirmación cuesta un clic.

!!! warning "Verifique si la optimización convergió"

    El SLSQP informa si convergió. Cuando no converge — lo que ocurre en
    secciones muy restringidas, o cuando el valor inicial no alcanza la región
    viable en 20 pasos —, el valor devuelto **no es un óptimo**, es el punto
    donde se detuvo.

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - **El óptimo es local, no global.** SLSQP desciende desde el punto
      inicial. Una sección inicial distinta puede llevar a un resultado
      distinto. Si el resultado sorprende, pruebe otro punto de partida y
      compare.
    - La **penalización por inviabilidad es discontinua**. Los métodos de
      gradiente presuponen una función suave, y en la frontera entre viable e
      inviable esa hipótesis se rompe — el optimizador puede oscilar ahí. El
      término \(b\,h\) en la penalización todavía apunta hacia secciones
      menores, que son más inviables; es el valor inicial viable el que
      compensa eso, no el gradiente.
    - Optimiza **una sección aislada**, con los esfuerzos que usted informó. No
      considera que reducir la altura de la viga cambia el peso propio, y con él
      los propios esfuerzos — esa retroalimentación es suya.
    - No considera la **estandarización**: cada viga se optimiza sola. En una
      obra, diez vigas con diez secciones distintas cuestan más en encofrado de
      lo que sugiere la suma de los óptimos individuales.
    - No considera los **estados límite de servicio**. La sección más barata en
      el ELU puede tener una flecha inaceptable — y es el caso común en vigas
      esbeltas.
    - Los precios son **suyos**. El resultado es tan bueno como ellos: un costo
      del acero desactualizado desplaza el óptimo en la dirección equivocada.

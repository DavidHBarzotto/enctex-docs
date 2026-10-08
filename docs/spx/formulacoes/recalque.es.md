# Asentamiento

Un pilote de longitud \(L\), con la base a una distancia \(C\) de la
superficie del **estrato indeformable** — el techo rocoso o la capa tan rígida
que las deformaciones por debajo de ella pueden despreciarse —, sufre dos
tipos de deformación bajo la carga vertical \(P\):

\[
\rho = \rho_e + \rho_s
\]

| Parcela | Qué es |
| :-- | :-- |
| \(\rho_e\) | **Acortamiento elástico del propio pilote**, como pieza estructural comprimida, con la base mantenida inmóvil |
| \(\rho_s\) | **Asentamiento del suelo** — la compresión de los estratos entre la base del pilote y el estrato indeformable |

En consecuencia, la longitud pasa a \(L - \rho_e\) y la distancia al estrato
indeformable a \(C - \rho_s\).

---

## Acortamiento elástico { #encurtamento-elastico }

### El diagrama de esfuerzo axil { #o-diagrama-de-esforco-normal }

La fuerza axil **no es constante** a lo largo del fuste: cae de \(P\) en la
cabeza a \(P_p\) en la base, por la transferencia de carga al suelo por
fricción.

La metodología es la de **Aoki (1979)**, y parte de tres hipótesis:

1. La carga aplicada es mayor que la resistencia lateral y menor que la
   capacidad de carga: \(R_L < P < R\).
2. **Toda la fricción lateral está movilizada.**
3. La reacción en la punta equilibra lo que sobra, y es inferior a la
   resistencia de punta en la rotura: \(P_p = P - R_L < R_p\).

Suponiendo una variación lineal de \(P(z)\) en cada segmento correspondiente a
una capa, el esfuerzo axil **medio** en cada segmento es:

\[
P_1 = P - \frac{R_{L1}}{2}
\]
\[
P_2 = P - R_{L1} - \frac{R_{L2}}{2}
\]
\[
P_3 = P - R_{L1} - R_{L2} - \frac{R_{L3}}{2}
\]

— y así sucesivamente: la carga ya transferida por encima del segmento, más la
**mitad** de la que se transfiere dentro de él.

### La ley de Hooke { #a-lei-de-hooke }

\[
\rho_e = \frac{1}{A \, E_c} \sum \left(P_i \, L_i\right)
\]

con \(A\) el área de la sección transversal del fuste y \(E_c\) el módulo de
elasticidad del hormigón, supuesto constante.

### Módulo de elasticidad { #modulo-de-elasticidade }

A falta de un valor específico:

| Tipo de pilote | \(E_c\) |
| :-- | --: |
| Prefabricado | 28 a 30 GPa |
| Hélice continua, Franki y pila excavada | 21 GPa |
| Strauss y excavado en seco | 18 GPa |

Como referencia: acero 210 GPa, madera del orden de 10 GPa.

!!! note "Comparación con el pilar"

    En un pilar, el diagrama de axiles es constante e igual a \(P\), y el
    acortamiento vale simplemente \(P L / A E_c\). El pilote difiere porque el
    suelo va descargando el fuste — y por eso el cálculo necesita el diagrama,
    no solo la carga en la cabeza.

---

## Asentamiento del suelo { #recalque-do-solo }

Por el principio de acción y reacción, el pilote aplica al suelo las cargas
\(R_{Li}\) a lo largo del fuste y la carga \(P_p\) junto a la base. Las capas
entre la base y el estrato indeformable se deforman bajo esa carga.

La metodología es la de **Aoki (1984)**.

### Incremento de tensiones { #acrescimo-de-tensoes }

Suponiendo una propagación de tensiones **1:2**, el incremento en la línea
media de una capa de espesor \(H\), situada a una distancia vertical \(h\) del
punto de aplicación, es:

Para la reacción de punta:

\[
\Delta\sigma_p = \frac{4\,P_p}{\pi\left(D + h + \dfrac{H}{2}\right)^{2}}
\]

donde \(D\) es el diámetro de la **base** del pilote.

Para cada parcela de resistencia lateral, aplicada en el centroide del
segmento respectivo:

\[
\Delta\sigma_i = \frac{4\,R_{Li}}{\pi\left(D + h + \dfrac{H}{2}\right)^{2}}
\]

donde \(D\) es el diámetro del **fuste**. El incremento total en la capa es

\[
\Delta\sigma = \Delta\sigma_p + \sum \Delta\sigma_i
\]

!!! info "Todas las parcelas, capa a capa"

    El procedimiento se repite para **cada capa** entre la base del pilote y el
    estrato indeformable. No es una tensión única repartida sobre un área fija:
    cada capa recibe la contribución de la punta **y** de todos los segmentos
    del fuste, cada una atenuada por su propia distancia.

### Asentamiento por la Teoría de la Elasticidad { #recalque-pela-teoria-da-elasticidade }

\[
\rho_s = \sum \left(\frac{\Delta\sigma}{E_s}\,H\right)
\]

### Módulo de deformabilidad del suelo { #modulo-de-deformabilidade-do-solo }

Por la expresión adaptada de **Janbu (1963)**:

\[
E_s = E_0 \left(\frac{\sigma_0 + \Delta\sigma}{\sigma_0}\right)^{n}
\]

| Símbolo | Significado |
| :-- | :-- |
| \(E_0\) | Módulo del suelo **antes** de la ejecución del pilote |
| \(\sigma_0\) | Tensión geostática **en el centro de la capa** |
| \(n\) | Exponente que depende de la naturaleza del suelo |

\[
n =
\begin{cases}
0{,}5 & \text{materiales granulares} \\
0 & \text{arcillas duras y rígidas}
\end{cases}
\]

En arena, el módulo crece con el incremento de tensiones; en arcilla, no — y
eso es lo que traduce el exponente.

Para \(E_0\), Aoki (1984) considera:

| Tipo de pilote | \(E_0\) |
| :-- | :-- |
| Hincados | \(6 \, K \, N_{SPT}\) |
| Hélice continua | \(4 \, K \, N_{SPT}\) |
| Excavados | \(3 \, K \, N_{SPT}\) |

con \(K\) el coeficiente empírico del método
[Aoki-Velloso](capacidade-de-carga.md#aoki-velloso-1975), función del tipo de
suelo.

---

## Curva carga × asentamiento { #curva-carga-recalque }

Aoki (1979) propone predecir la curva conociendo **un punto** de ella, por la
expresión de **Van der Veen (1953)**:

\[
P = R\left(1 - e^{-a\rho}\right)
\]

Calculada la capacidad de carga \(R\) y estimado el asentamiento \(\rho\) para
una carga \(P\), el parámetro que define la forma de la curva sale de:

\[
a = \frac{-\ln\left(1 - P/R\right)}{\rho}
\]

!!! warning "El rango en que vale el punto de anclaje"

    La carga usada para anclar la curva debe estar entre la resistencia lateral
    y la mitad de la capacidad:

    \[
    R_L < P \le \frac{R}{2}
    \]

    Es la misma condición de las hipótesis del acortamiento elástico — toda la
    fricción movilizada, y la punta todavía lejos de la rotura. Fuera de ella,
    la curva deja de representar el comportamiento.

La curva **no es una predicción independiente**: es la interpolación de
Van der Veen anclada en un único punto. Sirve para visualizar el margen hasta
la rotura y la no linealidad esperada, no como sustituta de una prueba de
carga.

---

## Efecto de grupo { #efeito-de-grupo }

Los grupos de pilotes **siempre** asientan más que el pilote aislado bajo la
misma carga:

\[
\rho_g = \alpha \, \rho_i
\]

Los valores experimentales indican \(\alpha\) entre **1,6 y 4,0**, según el
tamaño y la forma del grupo, para modelos de pilotes hincados en arena
medianamente compacta (Cintra, 1987).

!!! warning validade "Las fórmulas geométricas no son confiables"

    Las fórmulas de la literatura que estiman \(\alpha\) **solo por parámetros
    geométricos del grupo** no son confiables: las variables más importantes
    son la **deformabilidad del estrato entre la base de los pilotes y el
    estrato indeformable** y el **espesor de ese estrato** — ninguna de las dos
    aparece en la geometría.

    Hay casos de obra en que grupos grandes asentaron lo mismo que un pilote
    aislado, porque los pilotes estaban cerca del estrato indeformable.

    El SPX aplica la estimación simplificada \(\rho_g = \rho_{max}\sqrt{n}\),
    que es una de esas fórmulas geométricas. **Trate el resultado como orden de
    magnitud.** Para grupos grandes o críticos, el método más completo es el de
    Aoki & Lopes (1975), que considera la interacción entre todos los
    elementos.

### Asentamiento admisible { #recalque-admissivel }

Para cimentaciones usuales por pilotes, los valores de **Meyerhof (1976)**:

| Suelo | Asentamiento admisible |
| :-- | --: |
| Arena | 25 mm |
| Arcilla | 50 mm |

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - El método estima el asentamiento **inmediato**. En arcillas saturadas la
      consolidación continúa durante años y **no** está contemplada.
    - Las hipótesis del acortamiento elástico exigen \(R_L < P < R\) con
      **toda la fricción movilizada**. Para cargas por debajo de \(R_L\), el
      diagrama de axiles es otro y el cálculo sobrestima el acortamiento.
    - \(E_0\) viene de una correlación con \(N_{SPT}\), con la dispersión
      propia de un método empírico. Trate el resultado como orden de magnitud.
    - La posición del **estrato indeformable** gobierna \(\rho_s\): sin saber
      dónde está, no hay forma de delimitar las capas que se comprimen.
    - El asentamiento **admisible** es un atributo de la estructura, no de la
      cimentación.
    - Los asentamientos **diferenciales** entre apoyos — que son los que de
      hecho dañan las estructuras — exigen comparar las cimentaciones entre sí,
      y no están en el alcance del análisis del pilote aislado.
    - Los suelos colapsables, expansivos o sometidos a descenso del nivel
      freático están fuera del modelo.

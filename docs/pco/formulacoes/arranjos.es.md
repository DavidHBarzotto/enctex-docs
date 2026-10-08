# Fórmulas por disposición

Las expresiones cerradas del [Método de las Bielas](blevot.md) para cada
configuración de pilotes, según Bastos (2023) y la NBR 6118.

En todas: \(N\) es la carga del pilar, \(e\) la distancia entre ejes de
pilotes, \(a_p\) la dimensión del pilar, \(d\) el canto útil, \(A_p\) el área
del pilar y \(A_e\) el área del pilote.

!!! info "El pilar rectangular se convierte en un cuadrado equivalente"

    Las formulaciones suponen un **pilar de sección cuadrada**, con centro
    coincidente con el centro geométrico del encepado. Para un pilar
    rectangular, se adopta

    \[
    a_{p,eq} = \sqrt{a_p \cdot b_p}
    \]

---

## Resumen { #resumo }

| Pilotes | Disposición | \(R_s\) | \(\sigma_{lim}\) en el pilar | \(\sigma_{lim}\) en el pilote |
| :-: | :-- | :-- | :-- | :-- |
| 2 | Lineal | \(\dfrac{N}{8}\dfrac{2e-a_p}{d}\) | \(1{,}4\,K_R f_{cd}\) | \(1{,}4\,K_R f_{cd}\) |
| 3 | Triángulo | \(\dfrac{N}{9}\dfrac{e\sqrt3-0{,}9a_p}{d}\) | \(1{,}75\,K_R f_{cd}\) | \(1{,}75\,K_R f_{cd}\) |
| 4 | Cuadrado | \(\dfrac{N\sqrt2}{16}\dfrac{2e-a_p}{d}\) | \(2{,}1\,K_R f_{cd}\) | \(2{,}1\,K_R f_{cd}\) |
| 5 | Cuadrado + centro | \(\dfrac{4}{5}\dfrac{N\sqrt2}{16}\dfrac{2e-a_p}{d}\) | \(2{,}6\,K_R f_{cd}\) | \(2{,}1\,K_R f_{cd}\) |
| 5 | Pentágono | \(\dfrac{0{,}85N}{5d}\left(e-\dfrac{a_p}{3{,}4}\right)\) | no requerida | no requerida |
| 6 | Pentágono + centro | \(\dfrac{0{,}85N}{6d}\left(e-\dfrac{a_p}{3{,}4}\right)\) | no requerida | no requerida |
| 6 | Hexágono | \(\dfrac{N}{6d}\left(e-\dfrac{a_p}{4}\right)\) | no requerida | no requerida |
| 7 | Hexágono + centro | — (ver abajo) | no requerida | no requerida |

"No requerida" significa: **si el canto útil se adopta dentro del intervalo
\(d_{min} \le d \le d_{máx}\), no es necesario verificar la tensión en las
bielas.** Es el propio intervalo el que garantiza la inclinación segura.

!!! warning "Atención al encepado de cinco pilotes con uno en el centro"

    Es la única disposición en que **el límite en el pilar difiere del límite
    en el pilote**: \(2{,}6\,K_R f_{cd}\) contra \(2{,}1\,K_R f_{cd}\). En las
    demás, los dos límites coinciden.

---

## Tres pilotes — triángulo { #tres-estacas-triangulo }

Se supone el pilar cuadrado, con centro coincidente con el centro geométrico
del encepado. El esquema de fuerzas se analiza según una de las **medianas**
del triángulo formado por los centros de los pilotes.

\[
\tan\alpha = \frac{d}{e\dfrac{\sqrt3}{3} - 0{,}3\,a_p}
\qquad
R_s = \frac{N}{9}\left(\frac{e\sqrt3 - 0{,}9\,a_p}{d}\right)
\qquad
R_c = \frac{N}{3\,\text{sen}\,\alpha}
\]

### Canto útil { #altura-util }

| Criterio | Intervalo |
| :-- | :-- |
| Blévot, \(40^\circ \le \alpha \le 55^\circ\) | \(0{,}485\left(e - 0{,}52a_p\right) \le d \le 0{,}825\left(e - 0{,}52a_p\right)\) |
| Machado (1985), \(45^\circ \le \alpha \le 55^\circ\) | \(0{,}58\left(e - \dfrac{a_p}{2}\right) \le d \le 0{,}825\left(e - \dfrac{a_p}{2}\right)\) |

### Bielas { #bielas }

\[
A_b = \frac{A_p}{3}\,\text{sen}\,\alpha \ \text{(pilar)}
\qquad
A_b = A_e\,\text{sen}\,\alpha \ \text{(pilote)}
\]

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p\,\text{sen}^2\alpha}
\qquad
\sigma_{cd,b,est} = \frac{N_d}{3\,A_e\,\text{sen}^2\alpha}
\qquad
\sigma_{lim} = 1{,}75\,K_R\,f_{cd}
\]

### Armadura principal { #armadura-principal }

\(R_s\) actúa en la dirección de las **medianas**. Para obtener la componente
en la dirección de los ejes de los pilotes, por la ley de los senos:

\[
\frac{R_s}{\text{sen}\,120^\circ} = \frac{R'_s}{\text{sen}\,30^\circ}
\qquad\Longrightarrow\qquad
R'_s = R_s\frac{\sqrt3}{3}
\]

lo que resulta en la **armadura paralela a los lados**:

\[
A_{s,lado} = \frac{\sqrt3\,N_d}{27\,d\,f_{yd}}\left(e\sqrt3 - 0{,}9\,a_p\right)
\]

!!! info "Por qué paralela a los lados, y no en las medianas"

    La disposición con armadura en las **medianas** se usó mucho en el pasado,
    pero tiene dos defectos: la superposición de los tres haces de barras en el
    centro del encepado, y una fisuración elevada en las caras laterales
    causada por la falta de apoyo en los extremos de las barras — la llamada
    *"armadura en vacío"*.

    Además, **no cumple la NBR 6118 (22.7.4.1.1)**, que exige al menos el 85 %
    de la armadura de flexión en las franjas definidas por los pilotes.

    La configuración recomendada es la **armadura principal paralela a los
    lados, con malla ortogonal** — la más usada en Brasil, con menor
    fisuración y mayor economía.

### Dimensiones en planta { #dimensoes-em-planta }

Según la sugerencia de Campos (2015), la dimensión \(A\) del ala del triángulo
vale aproximadamente \(1{,}154\,a\), con \(a\) la distancia del eje del pilote
a la cara.

---

## Cuatro pilotes — cuadrado { #quatro-estacas-quadrado }

\[
\tan\alpha = \frac{d}{e\dfrac{\sqrt2}{2} - a_p\dfrac{\sqrt2}{4}}
\qquad
R_s = \frac{N\sqrt2}{16}\left(\frac{2e - a_p}{d}\right)
\qquad
R_c = \frac{N}{4\,\text{sen}\,\alpha}
\]

\(R_s\) es la fuerza de tracción **en la dirección de las diagonales**.

### Canto útil { #altura-util_1 }

Para \(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = 0{,}71\left(e - \frac{a_p}{2}\right)
\qquad\qquad
d_{máx} = e - \frac{a_p}{2}
\]

### Bielas { #bielas_1 }

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p\,\text{sen}^2\alpha}
\qquad
\sigma_{cd,b,est} = \frac{N_d}{4\,A_e\,\text{sen}^2\alpha}
\qquad
\sigma_{lim} = 2{,}1\,K_R\,f_{cd}
\]

### Armadura principal { #armadura-principal_1 }

Hay cuatro detallados posibles, y **no son equivalentes**:

| Detallado | Desempeño |
| :-- | :-- |
| a) Dirección de las diagonales | Fisuras laterales excesivas ya con cargas reducidas |
| **b) Paralela a los lados** | **Uno de los más eficientes — el más usual en la práctica** |
| c) Diagonales + paralela a los lados | — |
| d) Malla única | Carga de rotura inferior a las demás, eficiencia del 80 %; mejor desempeño frente a la fisuración |

Los detallados **a**, **c** y **d** no cumplen la prescripción de la NBR 6118
(22.7.4.1.1) de que más del 85 % de la armadura quede en las franjas de los
pilotes.

Para el detallado **b**, con adición de malla:

\[
A_{s,lado} = \frac{N_d}{16\,d\,f_{yd}}\left(2e - a_p\right)
\]

\[
A_{s,malha} = 0{,}25\,A_{s,lado} \ \ge\ \frac{A_{s,susp}}{4}
\qquad\text{(en cada dirección)}
\]

\[
A_{s,susp} = \frac{N_d}{6\,f_{yd}}
\]

---

## Cinco pilotes — cuadrado con uno en el centro { #cinco-estacas-quadrado-com-uma-no-centro }

El procedimiento es el del encepado sobre cuatro pilotes, **sustituyendo \(N\)
por \(\frac{4}{5}N\)** — el pilote central recibe su parte sin generar
tirante.

\[
R_s = \frac{4}{5}\cdot\frac{N\sqrt2}{16}\cdot\frac{2e - a_p}{d}
\]

### Canto útil { #altura-util_2 }

Para \(45^\circ \le \alpha \le 55^\circ\), el mismo del encepado de cuatro
pilotes:

\[
d_{min} = 0{,}71\left(e - \frac{a_p}{2}\right)
\qquad
d_{máx} = e - \frac{a_p}{2}
\]

### Bielas { #bielas_2 }

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p\,\text{sen}^2\alpha}
\qquad
\sigma_{cd,b,est} = \frac{N_d}{5\,A_e\,\text{sen}^2\alpha}
\]

\[
\sigma_{lim,pil} = 2{,}6\,K_R\,f_{cd}
\qquad\qquad
\sigma_{lim,est} = 2{,}1\,K_R\,f_{cd}
\]

### Armaduras { #armaduras }

\[
A_{s,lado} = \frac{4}{5}\cdot\frac{N_d}{16\,d\,f_{yd}}\left(2e-a_p\right)
= \frac{N_d}{20\,d\,f_{yd}}\left(2e - a_p\right)
\]

\[
A_{s,malha} = 0{,}25\,A_{s,lado} \ \ge\ \frac{A_{s,susp}}{4}
\qquad\qquad
A_{s,susp} = \frac{N_d}{7{,}5\,f_{yd}}
\]

!!! tip "Pilar muy alargado"

    Para pilares muy rectangulares, se proyecta un **encepado rectangular**
    sobre cinco pilotes, tratado como encepado de cuatro pilotes con las
    fórmulas adaptadas a las distancias distintas.

    Otra opción es disponer una fila con tres pilotes y otra con dos — en ese
    caso el cálculo se asemeja al de los encepados con más de seis pilotes.

---

## Cinco pilotes — pentágono { #cinco-estacas-pentagono }

Los pilotes quedan en los vértices de un pentágono, con el centro del pilar
cuadrado coincidente con su centro geométrico.

\[
\tan\alpha = \frac{d}{0{,}85\,e - 0{,}25\,a_p}
\qquad
R_s = \frac{0{,}85\,N}{5\,d}\left(e - \frac{a_p}{3{,}4}\right)
\]

### Canto útil { #altura-util_3 }

Para \(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = 0{,}85\left(e - \frac{a_p}{3{,}4}\right)
\qquad
d_{máx} = 1{,}2\left(e - \frac{a_p}{3{,}4}\right)
\]

!!! info "Verificación de bielas no requerida"

    Si \(d\) se adopta entre \(d_{min}\) y \(d_{máx}\), **no es necesario
    verificar las tensiones de compresión en las bielas**.

### Armaduras { #armaduras_1 }

Descomponiendo en la dirección paralela a los lados, con
\(R'_s = \dfrac{R_s}{2\cos 54^\circ}\):

\[
A_{s,lado} = \frac{0{,}725\,N_d}{5\,d\,f_{yd}}\left(e - \frac{a_p}{3{,}4}\right)
\]

\[
A_{s,malha} = 0{,}25\,A_{s,lado} \ \ge\ \frac{A_{s,susp,tot}}{5}
\qquad\qquad
A_{s,susp,tot} = \frac{N_d}{7{,}5\,f_{yd}}
\]

---

## Seis pilotes — pentágono con uno en el centro { #seis-estacas-pentagono-com-uma-no-centro }

Se procede como en el encepado sobre cinco pilotes en pentágono,
**sustituyendo \(N\) por \(\frac{5N}{6}\)**:

\[
R_s = \frac{0{,}85\,N}{6\,d}\left(e - \frac{a_p}{3{,}4}\right)
\]

Canto útil idéntico al del pentágono de cinco pilotes, y verificación de
bielas igualmente no requerida dentro del intervalo.

Por la ley de los senos, \(R'_s = R_s\dfrac{\text{sen}\,54^\circ}{\text{sen}\,72^\circ} = 0{,}85\,R_s\):

\[
A_{s,lado} = \frac{0{,}725\,N_d}{6\,d\,f_{yd}}\left(e - \frac{a_p}{3{,}4}\right)
\]

\[
A_{s,malha} = 0{,}25\,A_{s,lado} \ \ge\ \frac{A_{s,susp,tot}}{5}
\qquad\qquad
A_{s,susp,tot} = \frac{N_d}{7{,}5\,f_{yd}}
\]

---

## Seis pilotes — hexágono { #seis-estacas-hexagono }

Los pilotes quedan junto a los vértices del hexágono, con el pilar cuadrado
centrado.

\[
\tan\alpha = \frac{d}{e - \dfrac{a_p}{4}}
\qquad
R_s = \frac{N}{6\,d}\left(e - \frac{a_p}{4}\right)
\]

### Canto útil { #altura-util_4 }

Para \(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = e - \frac{a_p}{4}
\qquad
d_{máx} = 1{,}43\left(e - \frac{a_p}{4}\right)
\]

Verificación de bielas no requerida dentro del intervalo.

### Armaduras { #armaduras_2 }

Aquí la ley de los senos da \(\dfrac{R_s}{\text{sen}\,60^\circ} = \dfrac{R'_s}{\text{sen}\,60^\circ}\),
es decir, \(R'_s = R_s\) — la descomposición no altera la fuerza.

\[
A_{s,lado} = \frac{N_d}{6\,d\,f_{yd}}\left(e - \frac{a_p}{4}\right)
\qquad\text{(en cada uno de los 6 lados)}
\]

\[
A_{s,malha} = 0{,}25\,A_{s,lado}
\]

---

## Seis pilotes — rectangular { #seis-estacas-retangular }

Indicado para pilares rectangulares y alargados. Las fuerzas \(R_{sx}\) y
\(R_{sy}\) se tratan por separado en cada dirección, con las distancias
correspondientes.

---

## Siete pilotes — hexágono con uno en el centro { #sete-estacas-hexagono-com-uma-no-centro }

El séptimo pilote queda en el centro del encepado, bajo el pilar. Para
\(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = e - \frac{a_p}{4}
\qquad
d_{máx} = 1{,}43\left(e - \frac{a_p}{4}\right)
\]

La compresión en las bielas **no necesita verificarse** si \(d\) está en el
intervalo.

Las armaduras se disponen en la dirección de las **diagonales**, con
**zunchos paralelos a los lados**:

\[
A_{s,diag} = \frac{(1-k)\,N_d}{7\,d\,f_{yd}}\left(e - \frac{a_p}{4}\right)
\qquad
A_{s,cinta} = \frac{k\,N_d}{7\,d\,f_{yd}}\left(e - \frac{a_p}{4}\right)
\]

con

\[
\frac{2}{5} \le k \le \frac{3}{5}
\]

El parámetro \(k\) reparte la fuerza entre las diagonales y los zunchos — es
una elección de proyecto dentro de ese rango.

---

## Armaduras complementarias { #armaduras-complementares }

Valen para **cualquier número de pilotes**: las prescripciones de la NBR 6118
para armaduras en malla y de suspensión son generales.

### Armadura en malla { #armadura-em-malha }

La NBR 6118 (22.7.4.1.2) exige, para controlar la fisuración, una armadura
inferior adicional, independiente de la armadura principal de flexión, en
malla uniformemente distribuida en dos direcciones ortogonales,
correspondiente al **20 % del total de las fuerzas de tracción en cada una de
ellas**.

### Armadura de suspensión { #armadura-de-suspensao }

La NBR 6118 (22.7.4.1.3) exige armadura de suspensión para la parte de carga a
equilibrar si se prevé armadura de reparto para más del **25 % de los
esfuerzos totales** o si la separación entre pilotes es mayor que **tres veces
la altura del encepado**.

De modo general, independientemente de ello, puede prescribirse:

\[
A_{s,susp,tot} = \frac{N_d}{1{,}5\,n_e\,f_{yd}}
\]

con \(n_e\) el número de pilotes. La armadura por cara es el total dividido por
el número de caras del encepado.

!!! info "Para qué sirve"

    La armadura de suspensión evita fisuras en las regiones **entre los
    pilotes**. Pueden aparecer porque se forman bielas comprimidas que
    transfieren parte de la carga del pilar a las regiones **inferiores** del
    encepado, entre los pilotes, y que se apoyan en las armaduras paralelas a
    los lados.

    De ahí nacen tracciones que deben **suspenderse** hacia las regiones
    superiores del encepado, desde donde llegan a los pilotes.

### Armadura superior { #armadura-superior }

\[
A_{s,sup} = 0{,}2\,A_s
\qquad\text{(en cada dirección de la malla)}
\]

### Armadura de piel { #armadura-de-pele }

En cada cara vertical lateral, en forma de estribos o barras horizontales:

\[
A_{sp,face} = \frac{1}{8}\,A_{s,total}
\]

con \(A_{s,total}\) la armadura principal total — \(3A_{s,lado}\) en el
encepado de tres pilotes, \(4A_{s,lado}\) en el de cuatro, y así
sucesivamente.

**Separación:** \(s \le \min\left(\dfrac{d}{3};\ 20\ \text{cm}\right)\), y
\(s \ge 8\) cm por recomendación práctica.

---

## Método del CEB-70 { #metodo-do-ceb-70 }

Alternativa al Método de las Bielas para encepados rígidos, semejante al
procedimiento de las zapatas. La altura del encepado queda limitada por

\[
\frac{2}{3}c \le h \le 2c
\qquad\text{y}\qquad
d \ge \ell_{b,\phi,pil}
\]

donde \(c\) es la distancia de la cara del pilar al eje del pilote más alejado.

El método calcula la **armadura principal para la flexión**, determinada en
relación con una sección de referencia \(S_1\) situada **dentro del pilar**, a
\(0{,}15\,a_p\) de la cara — y verifica la resistencia del encepado a las
fuerzas cortantes.

!!! note "El PCO no implementa el CEB-70"

    Los modelos ofrecidos son [Blévot](blevot.md) y [MBT](mbt.md). El CEB-70
    figura aquí como referencia, por ser uno de los métodos históricamente más
    utilizados en Brasil y aceptado por la norma.

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - Todas las expresiones suponen un **pilar centrado** y **pilotes
      igualmente separados** del centro del pilar. Con momentos o
      excentricidad, la formulación pura no se aplica.
    - Suponen un **pilar de sección cuadrada** — el rectangular entra por el
      equivalente \(a_{p,eq} = \sqrt{a_p b_p}\), una aproximación tanto peor
      cuanto más alargado sea el pilar.
    - Los intervalos de canto útil vienen de \(45^\circ \le \alpha \le
      55^\circ\) (Machado) o \(40^\circ \le \alpha \le 55^\circ\) (Blévot).
      **Fuera de ellos, la exención de verificar las bielas no vale**, y deben
      verificarse explícitamente.
    - Los límites \(\sigma_{lim}\) son los de **Blévot**, no los de la
      NBR 6118 vigente. Para verificar contra la norma actual, use el
      [MBT](mbt.md#os-dois-limites-nodais-e-eles-sao-diferentes).
    - Los ensayos de Blévot cubrieron encepados de hasta **seis pilotes**. Las
      expresiones para siete pilotes y para disposiciones compuestas
      extrapolan esa base experimental.

# Blévot & Frémy

El método clásico de encepado rígido, también llamado **Método de las
Bielas**. Admite una **celosía** como modelo resistente en el interior del
encepado: plana en los encepados sobre dos pilotes, espacial en los demás. Las
barras comprimidas son resistidas por el hormigón — las **bielas** — y las
traccionadas por la armadura — los **tirantes**.

Es el método simplificado más empleado en Brasil, por tres razones: tiene un
amplio respaldo experimental — **116 ensayos de Blévot & Frémy**, entre otros
—, tiene una tradición consolidada aquí y en Europa, y el modelo de celosía es
intuitivo.

## Cuándo se recomienda el método { #quando-o-metodo-e-recomendado }

- La carga es **casi centrada**. Puede emplearse para cargas no centradas
  admitiendo que todos los pilotes tienen la mayor carga — lo que tiende a
  hacer el dimensionamiento antieconómico.
- Todos los pilotes están **igualmente separados** del centro del pilar.

---

## El modelo, en el encepado sobre dos pilotes { #o-modelo-no-bloco-sobre-duas-estacas }

La carga \(N\) llega por el pilar y baja por dos bielas inclinadas hasta los
pilotes. Del polígono de fuerzas salen la tracción en la base y la compresión
en la biela.

La inclinación de la biela es el parámetro que lo gobierna todo:

\[
\tan\alpha = \frac{d}{\dfrac{e}{2} - \dfrac{a_p}{4}}
\]

donde \(d\) es el canto útil, \(e\) la distancia entre ejes de pilotes y \(a_p\)
la dimensión del pilar en la dirección de \(e\). El término \(a_p/4\) es el
centro de la **subárea** del pilar: se divide el pilar en tantas partes como
pilotes haya, y la carga parte del centro geométrico de cada subárea.

De ahí:

\[
R_s = \frac{N}{8}\cdot\frac{2e - a_p}{d}
\qquad\qquad
R_c = \frac{N}{2\sin\alpha}
\]

\(R_s\) es la fuerza de tracción en el tirante y \(R_c\) la compresión en la
biela.

!!! info "La forma general"

    Para cualquier número de pilotes, la fuerza en el tirante es

    \[
    F_{td} = N_{d,estaca}\cdot\cot\theta
    \qquad\text{con}\qquad
    \cot\theta = \frac{L_{proj}}{d}
    \]

    donde \(L_{proj}\) es la proyección horizontal de la biela — la distancia
    del centro de la subárea de carga al eje del pilote. En un encepado
    simétrico sobre cuatro pilotes,
    \(L_{proj} = \left(\dfrac{\ell}{2} - \dfrac{a_p}{4}\right)\sqrt{2}\).

    En encepados sobre **tres o más** pilotes, \(F_{td}\) se descompone en las
    direcciones de las armaduras.

!!! tip "Las fórmulas de cada disposición"

    Este capítulo desarrolla el encepado sobre dos pilotes, que es donde la
    geometría aparece más clara. Las expresiones cerradas para **tres a siete
    pilotes** — con sus intervalos de canto útil, límites de tensión y
    armaduras — están en [Fórmulas por disposición](arranjos.md).

---

## Canto útil { #altura-util }

Las bielas comprimidas **no presentan riesgo de rotura por punzonamiento**
siempre que la inclinación quede en el rango ensayado:

\[
40^\circ \le \alpha \le 55^\circ
\]

lo que delimita el canto útil en

\[
0{,}419\left(e - \frac{a_p}{2}\right) \;\le\; d \;\le\; 0{,}714\left(e - \frac{a_p}{2}\right)
\]

Machado (1985) recomienda el rango más estrecho \(45^\circ \le \alpha \le
55^\circ\), resultando \(d_{min} = 0{,}5\left(e - a_p/2\right)\) y
\(d_{máx} = 0{,}71\left(e - a_p/2\right)\).

!!! warning "La altura tiene además un segundo condicionante"

    La NBR 6118 (22.7.4.1.4) prescribe que **el encepado debe tener altura
    suficiente para permitir el anclaje de la armadura de espera de los
    pilares**:

    \[
    d > \ell_{b,\phi,pil}
    \]

    En un encepado bajo con un pilar muy armado, es esta condición la que
    gobierna — no la inclinación de la biela.

La altura total es \(h = d + d'\), con \(d' \ge \max(5\ \text{cm};\ a_{est}/5)\),
donde \(a_{est} = \dfrac{\sqrt{\pi}}{2}\,\phi_e\) es el lado del pilote cuadrado
de área equivalente al circular.

---

## Verificación de las bielas { #verificacao-das-bielas }

El área de la biela **varía a lo largo de la altura**, y por eso se verifican
las dos secciones extremas — junto al pilar y junto al pilote:

\[
A_b = \frac{A_p}{2}\sin\alpha \quad \text{(en el pilar)}
\qquad
A_b = A_e \sin\alpha \quad \text{(en el pilote)}
\]

Con \(R_{cd} = N_d/(2\sin\alpha)\), las tensiones resultan:

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p \sin^2\alpha}
\qquad\qquad
\sigma_{cd,b,est} = \frac{N_d}{2\,A_e \sin^2\alpha}
\]

El \(\sin^2\alpha\) aparece dos veces por la misma razón: una proyección
convierte la fuerza a la dirección de la biela, la otra convierte el área.

### El límite, y el coeficiente KR { #o-limite-e-o-coeficiente-kr }

\[
\sigma_{cd,b,lim} = \alpha_{lim}\,K_R\,f_{cd}
\]

| N.º de pilotes | \(\alpha_{lim}\) |
| :-: | --: |
| 2 | 1,4 |
| 3 | 1,75 |
| 4 o más | 2,1 |

El límite **crece con el número de pilotes** por el confinamiento: cuantos más
pilotes, más confinado el hormigón en la región nodal, y mayor la tensión que
soporta.

!!! info "Qué es el KR"

    \(K_R\) queda entre **0,90 y 0,95** y es el coeficiente que tiene en cuenta
    la **pérdida de resistencia del hormigón a lo largo del tiempo debida a
    cargas permanentes — el efecto Rüsch**.

    No tiene relación con la geometría del encepado ni con la armadura del
    tirante: actúa solo sobre el límite de tensión. Adoptar 0,90 es la
    elección conservadora.

!!! warning "Una biela reprobada no se resuelve con armadura"

    Si \(\sigma_{cd,b} > \sigma_{cd,b,lim}\), el hormigón se aplasta. El camino
    es aumentar la altura del encepado, ampliar la sección del pilar o subir el
    \(f_{ck}\).

---

## Armadura principal { #armadura-principal }

Blévot verificó en los ensayos que **la fuerza medida en la armadura principal
fue un 15 % superior a la indicada por el cálculo teórico**. Por eso el tirante
se mayora:

\[
R_s = \frac{1{,}15\,N}{8}\cdot\frac{2e - a_p}{d}
\qquad\Longrightarrow\qquad
A_s = \frac{1{,}15\,N_d\,(2e - a_p)}{8\,d\,f_{yd}}
\]

!!! info "El factor 1,15 es específico de los encepados sobre dos pilotes"

    En los encepados sobre **tres o más** pilotes ese factor no existe. Allí,
    en lugar de mayorar, se descompone \(F_{td}\) en las direcciones de las
    armaduras.

    Blévot propuso el 1,15 para no obtener coeficientes de seguridad menores
    que los especificados en la época.

### Dónde va la armadura { #onde-a-armadura-fica }

La NBR 6118 (22.7.4.1.1) es explícita: la armadura de flexión **debe
disponerse esencialmente — más del 85 % — en las franjas definidas por los
pilotes**, en equilibrio con las respectivas bielas. Las franjas tienen un
ancho igual a **1,2 veces el diámetro del pilote**.

Las barras deben extenderse **de cara a cara** del encepado y terminar en
**gancho en los dos extremos**. El anclaje se mide **a partir de las caras
internas de los pilotes**.

Para estimar la longitud del encepado sobre dos pilotes, con anclaje sin gancho
y \(\alpha = 0{,}7\):

\[
\ell_{bl,2} = e - \phi_e + 2\left(0{,}7\,\ell_b + c + \phi_\ell\right)
\]

---

## Armaduras complementarias { #armaduras-complementares }

La NBR 6118 (22.7.4.1.5) hace **obligatorias** las armaduras laterales y
superior en encepados con dos o más pilotes en una única línea.

| Armadura | Valor |
| :-- | :-- |
| Superior | \(A_{s,sup} = 0{,}2\,A_s\) |
| Piel y estribos verticales, por cara | \(\left(\dfrac{A_{sp}}{s}\right)_{min} = \left(\dfrac{A_{sw}}{s}\right)_{min} = 0{,}075\,B\) cm²/m |

con \(B\) el ancho del encepado en cm.

**Separaciones:**

- Armadura de piel: \(s \le \min(d/3;\ 20\ \text{cm})\), y \(s \ge 8\) cm por
  recomendación práctica.
- Estribos verticales **sobre los pilotes**:
  \(s \le \min\left(15\ \text{cm};\ 0{,}5\,a_{est}\right)\).
- Estribos verticales en las demás posiciones: \(s \le 20\) cm.

---

## Encepado sobre un pilote { #bloco-sobre-uma-estaca }

Caso particular: el encepado es un **elemento de transferencia**, necesario
porque la base del pilar no coincide con el área del pilote. La armadura
principal resiste el **hendimiento**, y está compuesta por estribos
horizontales cerrados:

\[
T = \frac{1}{4}\,P\,\frac{\phi_e - a_p}{\phi_e} \cong 0{,}25\,P
\qquad\qquad
A_s = \frac{T_d}{f_{yd}}
\]

El canto útil puede estimarse en torno a \(1{,}0\) a \(1{,}2\,\phi_e\).

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - Vale para **encepado rígido**. En un encepado esbelto la biela no se
      forma de manera definida y el comportamiento es de flexión — vea
      [encepados flexibles](../../pcx/blocos-flexiveis.md).
    - El rango ensayado es \(40^\circ < \theta < 55^\circ\), siendo
      recomendable \(\theta \ge 45^\circ\). Fuera de él, el método extrapola la
      base experimental.
    - Presupone **carga casi centrada** y pilotes **igualmente separados** del
      centro del pilar. Con momentos actuando, las cargas en los pilotes
      difieren y la formulación pura no se aplica: la práctica es adoptar,
      como carga vertical equivalente, la reacción del pilote más cargado
      multiplicada por el número de pilotes — una simplificación conservadora.
    - Los ensayos cubrieron encepados de hasta seis pilotes. Cantidades
      altas, pilar excéntrico o varios pilares extrapolan la base
      experimental.
    - **Los límites de tensión de Blévot no son los de la NBR 6118 vigente.**
      La revisión de 2014 introdujo límites nodales más restrictivos, y un
      encepado que pasaba por Blévot puede no pasar por ellos. Vea
      [MBT](mbt.md) y [Verificaciones](verificacoes.md).
    - Comparado con ensayos, el método es **ligeramente conservador**: la
      razón entre la carga de rotura medida y la prevista tiene un promedio de
      1,19.

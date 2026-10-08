# Análisis estructural

El pilote se analiza como **pórtico espacial por elementos finitos**, apoyado
sobre base elástica. El solucionador es [PyNite](https://github.com/JWock82/PyNite),
una biblioteca de análisis matricial de estructuras.

El resultado de este análisis — momentos, cortantes y axiles a lo largo del
fuste — es lo que alimenta el [dimensionamiento](dimensionamento.md).

---

## El modelo { #o-modelo }

### Discretización { #discretizacao }

El pilote se divide en nudos **metro a metro**, coincidiendo con la
discretización del sondeo. No es casualidad: cada nudo necesita un resorte, y
el resorte viene de la capa de suelo de ese metro.

Los nudos van de la cabeza a la punta, ordenados de arriba hacia abajo. El nudo
de la cabeza recibe las cargas aplicadas.

### Sección y material { #secao-e-material }

Sección circular maciza:

\[
A = \frac{\pi D^2}{4}
\qquad
I_y = I_z = \frac{\pi D^4}{64}
\qquad
J = 2 I_z
\]

El material se define por \(E_c\), el coeficiente de Poisson \(\nu\)
(predeterminado 0,20) y un peso específico de 25 kN/m³, con

\[
G = \frac{E_c}{2(1+\nu)}
\]

### Apoyos elásticos { #apoios-elasticos }

Cada nudo recibe resortes según la [reacción del suelo](reacao-do-solo.md):

| Dirección | Resorte | Cuándo |
| :-- | :-- | :-- |
| DX, DY | \(K_h\) | Siempre |
| DZ | \(K_v\) | Solo cuando se activan los resortes verticales |

La torsión (RZ) se bloquea para estabilizar el modelo — un pilote circular
bajo carga transversal no tiene torsión significativa, y dejarla libre crearía
un modo de cuerpo rígido.

!!! info "Los nudos superficiales no reciben resorte"

    Los nudos a menos de 0,10 m de profundidad tienen el resorte anulado. El
    suelo en la superficie es el menos confinado y el más sujeto a erosión,
    excavación y variación estacional — contar con su reacción es un optimismo
    que la práctica no confirma.

---

## Cota de cabeza por debajo del terreno { #cota-de-topo-abaixo-do-terreno }

Cuando la cabeza del pilote está **enterrada** — descabezada por debajo del
nivel del terreno, situación normal bajo un encepado —, el nudo de la cabeza
tiene suelo alrededor y recibe el resorte correspondiente a su profundidad.

Cuando la cabeza está **al nivel del terreno o por encima**, queda libre. Es
el caso del pilote con un tramo expuesto, que se comporta como un pilar
empotrado en el suelo.

!!! warning "Una precaución de modelado"

    Los nudos se posicionan en la **cota del sondeo**, no a distancias medidas
    desde la cabeza del pilote. Parece un detalle, pero es lo que garantiza que
    el \(K_h\) de una profundidad se aplique en la profundidad correcta:
    posicionar los nudos desde la cabeza haría que el modelo se hundiera junto
    con el pilote, aplicando la rigidez de 3 m en la cota de 5 m y alargando la
    pieza modelada.

---

## Pilotes inclinados { #estacas-inclinadas }

El SPX modela los pilotes inclinados con dos ángulos:

| Parámetro | Significado |
| :-- | :-- |
| **Inclinación** | Ángulo con la vertical |
| **Azimut** | Dirección de la inclinación en el plano horizontal |

La posición horizontal de cada nudo se obtiene proyectando la caída desde la
cabeza:

\[
x = (z_{topo} - z) \cdot \tan(i) \cdot \cos(az)
\qquad
y = (z_{topo} - z) \cdot \tan(i) \cdot \sin(az)
\]

La proyección se mide **desde la cabeza del pilote**, no desde el nivel del
terreno — un pilote descabezado a 2 m solo empieza a apartarse de la vertical
a partir de allí.

!!! tip "Inclinación individual"

    En un encepado, cada pilote puede recibir su propia inclinación y azimut.
    Es lo que permite armar disposiciones en abanico para resistir esfuerzos
    horizontales — el caso clásico del estribo de puente o de una estructura
    bajo empuje.

---

## Análisis por eje { #analise-por-eixo }

El análisis se realiza **por eje** — un modelo para X y otro para Y —, cada
uno con el cortante y el momento de su dirección. Los dos resultados se
combinan luego en el dimensionamiento, que trata la flexión como compuesta
oblicua.

Esta separación es lo que permite usar un modelo plano a la vez, más estable
numéricamente, sin perder la interacción biaxial en la verificación de la
sección.

---

## Resultados { #resultados }

Del análisis salen, a lo largo del fuste:

- **Desplazamiento horizontal** — el criterio de servicio más usado en
  pilotes con carga transversal.
- **Momento flector** — con su máximo generalmente a pocos metros de la
  superficie, y es el que dimensiona la armadura longitudinal.
- **Esfuerzo cortante** — dimensiona los estribos.
- **Esfuerzo axil** — decreciente con la profundidad, por la fricción
  movilizada.

Los gráficos son interactivos y pueden exportarse al informe.

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - El modelo es **elástico lineal**. Ni el hormigón fisura ni el suelo
      plastifica. Para desplazamientos de servicio esto es aceptable; cerca de
      la rotura, no.
    - La rigidez a flexión usa la **sección bruta** de hormigón. La NBR 6118
      admite una reducción por fisuración en análisis de segundo orden, lo que
      haría mayores los desplazamientos y redistribuiría los momentos.
    - Los resortes de Winkler no representan la interacción entre pilotes del
      mismo encepado. En un grupo con poca separación, la rigidez efectiva por
      pilote es menor que la calculada.
    - La discretización de 1 m limita la resolución del momento máximo. En
      pilotes cortos o muy rígidos, el pico puede caer entre nudos.

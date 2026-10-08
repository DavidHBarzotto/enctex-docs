# Configuración del Encepado

Primera pestaña. Define la geometría, el número y la disposición de los
pilotes, el tipo de pilote, los materiales y el recubrimiento.

## Campos { #campos }

### Geometría de los pilotes { #geometria-das-estacas }

| Campo | Unidad | Observación |
| :-- | :-- | :-- |
| N.º de Pilotes en el Encepado | — | De 1 a 30 |
| Disposición Específica | — | Habilitado según el número de pilotes |
| Diámetro del Pilote | m | Entra en \(A_p\), \(U\) y, en el método de Teixeira, también en \(N_p\) |
| Tipo de Pilote | — | Selecciona los coeficientes de ejecución de los tres métodos |
| Separación entre ejes | cm | Distancia entre ejes de pilotes |
| Vinculación de la Cabeza | — | Articulada o Empotrada |

### Disposiciones disponibles { #arranjos-disponiveis }

Hasta ocho pilotes, el programa ofrece **disposiciones con nombre** — las
configuraciones que la práctica consagró para cada cantidad. Por encima de eso,
la distribución sigue el patrón rectangular.

| N.º | Disposiciones |
| :-: | :-- |
| 1, 2 | Única |
| 3 | Triángulo · Lineal (eje X) · Lineal (eje Y) |
| 4 | Cuadrado |
| 5 | Cuadrado + 1 centro · Pentagonal · Rectangular (2 y 3) |
| 6 | Rectangular (2×3) · Hexagonal |
| 8 | Rectangular (3-2-3) · Rectangular (4×2) · Rectangular (2×4) |
| 9 a 30 | Rectangular |

El campo **Disposición Específica** solo se habilita cuando hay más de una
opción para esa cantidad.

### Límites del proyecto { #limites-do-projeto }

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">encepados</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">pilotes por encepado</span></div>
  <div class="limite"><span class="valor">200</span><span class="rotulo">pilotes en total</span></div>
  <div class="limite"><span class="valor">20</span><span class="rotulo">sondeos</span></div>
</div>

El tope de **200 pilotes en total** es el que vale en la práctica: cien
encepados de treinta pilotes cada uno serían tres mil, y eso no es lo que
admite el programa. Los tres límites actúan juntos, y el primero que se
alcanza es el que gobierna.

### Encepado y materiales { #bloco-e-materiais }

| Campo | Unidad | Observación |
| :-- | :-- | :-- |
| Altura del Encepado | m | |
| Nivel de la Cabeza | m | Cota de la cabeza del pilote. Negativo = descabezado bajo el terreno |
| Vuelo / Recubrimiento | cm | Distancia de la cara del encepado al eje del pilote exterior |
| Altura del Suelo | m | |
| Clase de Agresividad | — | CAA I a IV, define el recubrimiento nominal |
| Peso Específico | kN/m³ | Del hormigón |

!!! info "El nivel de la cabeza cambia el modelo estructural"

    Una cabeza **por debajo** de cero significa un pilote descabezado bajo el
    encepado: el nudo superior recibe un resorte de suelo, porque hay terreno a
    su alrededor.

    Una cabeza **en cero o por encima** deja el nudo libre — el pilote tiene un
    tramo expuesto y se comporta como un pilar empotrado en el suelo, con
    desplazamientos mucho mayores.

    Vea [Análisis estructural](../formulacoes/analise-estrutural.md#cota-de-topo-abaixo-do-terreno).

### Clase de agresividad { #classe-de-agressividade }

| Clase | Ambiente | Recubrimiento |
| :-- | :-- | --: |
| CAA I | Débil | 3,0 cm |
| CAA II | Moderada | 3,0 cm |
| CAA III | Fuerte | 4,0 cm |
| CAA IV | Muy fuerte | 5,0 cm |

El recubrimiento entra en el cálculo del canto útil \(d\) y, por lo tanto, en el
dimensionamiento a flexión y a cortante.

## Coordenadas y esfuerzos por pilote { #coordenadas-e-esforcos-por-estaca }

La tabla **Coordenadas y Esfuerzos de los Pilotes** es el corazón de la
pestaña. En ella cada pilote recibe:

- su posición en el encepado (X, Y);
- los esfuerzos aplicados en la cabeza — axil, cortantes y momentos.

El signo sigue la [convención general](../../comecar/convencoes.md#sinais-dos-esforcos):
el axil positivo es compresión.

## Pilotes inclinados { #estacas-inclinadas }

El SPX permite **inclinación individual** — cada pilote del encepado puede
tener su propia inclinación y azimut. La función abre un diálogo dedicado.

| Parámetro | Significado |
| :-- | :-- |
| Inclinación | Ángulo con la vertical |
| Azimut | Dirección de la inclinación en el plano horizontal |

!!! tip "Verifíquelo en 3D"

    El azimut invertido es el error más común, y es invisible en la tabla. La
    visualización 3D del encepado muestra los pilotes en su posición real — dos
    segundos de verificación que evitan un proyecto entero equivocado.

Los pilotes inclinados generalmente exigen activar los **resortes verticales
\(K_v\)** en el análisis estructural: sin ellos, el pilote inclinado queda
libre para deslizar en la dirección de su propio eje.

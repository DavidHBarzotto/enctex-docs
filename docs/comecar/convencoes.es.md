# Convenciones y unidades

Esta es la página que evita el error más común de carga de datos. Vale la pena
leerla antes del primer proyecto.

## Sistema de ejes { #sistema-de-eixos }

Los programas usan un sistema **dextrógiro con Z hacia abajo**, con origen en
la cabeza del pilote.

| Eje | Sentido positivo |
| :-- | :-- |
| **X** | Horizontal |
| **Y** | Horizontal, perpendicular a X |
| **Z** | **Hacia abajo**, a lo largo del pilote |

El eje Z hacia abajo es la convención geotécnica: la profundidad crece con Z,
y las cotas del sondeo se leen en la misma dirección en que baja el pilote.

!!! tip "Verifíquelo en el propio programa"

    El SPX incluye una visualización 3D del sistema de coordenadas, con el
    pilote y los tres ejes dibujados. Úsela siempre que tenga dudas sobre el
    sentido de un esfuerzo.

## Signos de los esfuerzos { #sinais-dos-esforcos }

| Esfuerzo | Positivo significa |
| :-- | :-- |
| Axil \(N\) | **Compresión** — carga hacia abajo, en el sentido de Z |
| Axil \(N < 0\) | **Tracción** — el programa cambia el método de cálculo de la capacidad |
| Cortante \(V_x\) | Hacia la derecha, en el sentido de X |
| Cortante \(V_y\) | En el sentido de Y |
| Momento \(M_x\), \(M_y\) | Sentido horario |

!!! warning "El signo del axil cambia el cálculo"

    No es solo una cuestión de signo en la salida. Con \(N < 0\) el programa
    entiende **pilote traccionado**, desprecia la resistencia de punta y aplica
    el factor de seguridad de tracción. Vea
    [Capacidad de carga](../spx/formulacoes/capacidade-de-carga.md).

## Unidades { #unidades }

La entrada y la salida están en las unidades del SI habituales en la geotecnia
brasileña.

| Magnitud | Unidad | Dónde aparece |
| :-- | :-- | :-- |
| Longitud, diámetro, profundidad | m | Geometría del pilote y del encepado |
| Recubrimiento | cm | Clase de agresividad ambiental |
| Fuerza | kN | Cargas aplicadas, \(R_p\), \(R_l\), \(P_a\) |
| Momento | kN·m | Momentos aplicados |
| Tensión del suelo | kPa | \(r_p\), \(r_l\), parámetro \(K\) |
| Resistencia del hormigón \(f_{ck}\) | MPa | Materiales |
| Módulo de elasticidad \(E_c\) | MPa en la entrada, kPa en el cálculo | Asentamiento elástico |
| Peso específico \(\gamma\) | kN/m³ | Tensión geostática |
| Factor \(m\) | kN/m⁴ | Coeficiente de reacción horizontal |
| \(K_h\), \(K_v\) unitarios | kN/m³ | Reacción del suelo |
| Resortes \(K_h\), \(K_v\) | kN/m | Entrada del modelo de elementos finitos |
| Asentamiento | m en el cálculo, **mm** en la presentación | Resultados y gráficos |

!!! note "Asentamiento en milímetros"

    Internamente el asentamiento se calcula en metros, pero todo resultado
    presentado — tabla, gráfico e informe — está en **milímetros**, que es la
    unidad en que se discute el asentamiento admisible.

## Tipos de suelo { #tipos-de-solo }

El SPX clasifica el suelo por las fracciones que lo componen, en el orden en
que predominan. Son quince combinaciones:

| | | |
| :-- | :-- | :-- |
| Arena | Limo | Arcilla |
| Arena limosa | Limo arenoso | Arcilla arenosa |
| Arena limoarcillosa | Limo arenoarcilloso | Arcilla arenolimosa |
| Arena arcillosa | Limo arcilloso | Arcilla limosa |
| Arena arcillolimosa | Limo arcilloarenoso | Arcilla limoarenosa |

El nombre se lee como la composición: *arena limoarcillosa* es
predominantemente arena, luego limo, luego arcilla.

!!! warning "La clasificación elige los parámetros de cálculo"

    El tipo de suelo no es una etiqueta: es lo que selecciona \(K\) y
    \(\alpha\) en la tabla de Aoki-Velloso, \(C\) en la de Décourt-Quaresma,
    \(\alpha_T\) en la de Teixeira y el factor \(m\) de los resortes.

    Cambiar **arena limosa** por **limo arenoso** — nombres parecidos,
    composiciones invertidas — cambia \(K\) de 0,80 a 0,55 MPa, es decir,
    **31 % menos de resistencia de punta**. Verifique la clasificación del
    informe antes de cargarla.

No todos los métodos usan la clasificación completa. **Décourt-Quaresma**
trabaja solo con tres familias — arcillas, suelos intermedios y arenas — y el
**coeficiente de reacción horizontal** distingue solo los suelos arenosos y
limosos de los arcillosos.

## Discretización del sondeo { #discretizacao-da-sondagem }

El sondeo se carga **metro a metro**: un valor de \(N_{SPT}\) y un código de
suelo por metro. Las cotas de resultado salen negativas, medidas desde la
superficie: −1 m, −2 m, y así sucesivamente.

Toda tabla de capacidad de carga se presenta por cota — para cada profundidad
posible de la punta, cuál sería la carga admisible. Eso es lo que permite
elegir la longitud del pilote leyendo la columna, en lugar de probar una
longitud a la vez.

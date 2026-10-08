# Análisis Estructural

Quinta pestaña. Arma el modelo de elementos finitos del pilote sobre base
elástica y devuelve los esfuerzos con los que se dimensionará la sección.

## Qué representa el modelo { #o-que-o-modelo-representa }

El pilote se convierte en un pórtico espacial discretizado **metro a metro**,
con un resorte de suelo en cada nudo. Los resortes salen de la
[reacción del suelo](../formulacoes/reacao-do-solo.md): \(K_h\) en las
direcciones horizontales y, opcionalmente, \(K_v\) en la vertical.

El análisis se ejecuta **por eje** — un modelo para X y otro para Y —, y los
dos resultados se combinan en el dimensionamiento como flexión compuesta
oblicua.

## Opciones { #opcoes }

| Opción | Efecto |
| :-- | :-- |
| Considerar \(K_v\) | Activa los resortes verticales. Importa sobre todo en pilotes inclinados |
| Eje | Elige qué modelo visualizar, X o Y |
| Módulo de elasticidad | \(E_c\) del pilote; si se omite, el programa lo adopta por tipo |
| Coeficiente de Poisson | Predeterminado 0,20 |
| Peso propio | Carga distribuida a lo largo del fuste |

!!! tip "Cuándo activar \(K_v\)"

    En un pilote **vertical** bajo carga horizontal, los resortes verticales
    cambian poco. En un pilote **inclinado** son esenciales: sin \(K_v\), nada
    impide que el pilote deslice en la dirección de su propio eje, y los
    desplazamientos resultan irreales.

## Resultados { #resultados }

La pestaña presenta, a lo largo de la profundidad:

| Diagrama | Sirve para |
| :-- | :-- |
| Desplazamiento horizontal | Verificación de servicio — es el criterio usual en pilotes con carga transversal |
| Momento flector | Dimensiona la armadura longitudinal |
| Esfuerzo cortante | Dimensiona los estribos |
| Esfuerzo axil | Muestra cuánto de la carga ya se transfirió por fricción |

Los gráficos son interactivos y pueden incluirse en el informe.

!!! info "Dónde está el momento máximo"

    En un pilote bajo carga horizontal, el momento máximo rara vez está en la
    cabeza: suele aparecer a pocos metros de la superficie, donde la rigidez del
    suelo todavía es baja pero el pilote ya ganó brazo. Es ese pico el que
    dimensiona la armadura, y por eso la armadura longitudinal no puede
    interrumpirse justo debajo del encepado.

## Precauciones { #cuidados }

!!! warning "El modelo es elástico lineal"

    Ni el hormigón fisura ni el suelo plastifica. Para desplazamientos de
    servicio esto es aceptable; cerca de la rotura, no. La rigidez a flexión
    usa la sección **bruta** de hormigón — la NBR 6118 admite una reducción por
    fisuración, lo que aumentaría los desplazamientos.

    Vea [límites de validez](../formulacoes/analise-estrutural.md#limites-de-validade).

- **La discretización es de 1 m.** En pilotes cortos o muy rígidos, el pico de
  momento puede caer entre nudos y quedar subestimado.
- **Los nudos superficiales no tienen resorte.** Por encima de 0,10 m de
  profundidad la rigidez se anula a propósito: el suelo superficial está
  sujeto a erosión, excavación y variación estacional.
- **Los resortes no interactúan.** En un encepado con poca separación, la
  rigidez efectiva por pilote es menor que la calculada.

## Procesamiento { #processamento }

El análisis abre una ventana de progreso. El tiempo crece con el número de
pilotes y con la profundidad — un encepado de ocho pilotes en un sondeo de
20 m ejecuta dieciséis modelos, dos por pilote.

# Qué cambia en el SPO

El SPO es el núcleo de la línea SP. Esta página enumera lo que agrega el
[SPX](../spx/index.md) y qué hacer sin cada función — para que la lectura del
[manual del SPX](../spx/manual/interface.md) se haga sabiendo de antemano qué
ignorar.

## Pilotes inclinados { #estacas-inclinadas }

**Solo en el SPX y el SPX AI.**

En el SPO todos los pilotes son verticales. No hay inclinación ni azimut
individuales, y el diálogo de inclinación no existe.

Lo que esto implica en la lectura del manual:

- En [Configuración del encepado](../spx/manual/bloco.md#estacas-inclinadas),
  la sección de pilotes inclinados no se aplica.
- En [Análisis estructural](../spx/formulacoes/analise-estrutural.md#estacas-inclinadas),
  la proyección por inclinación y azimut no se aplica — todos los nudos quedan
  sobre el mismo eje vertical.
- Los **resortes verticales \(K_v\)** siguen disponibles, pero pierden la
  importancia que tienen en el pilote inclinado. En un pilote vertical bajo
  carga horizontal, apenas cambian el resultado.

!!! tip "Sin pilotes inclinados, cómo resistir esfuerzos horizontales"

    Los pilotes inclinados en abanico son la solución clásica para empujes y
    frenado. Sin ellos, el camino es dimensionar los pilotes verticales a
    flexión compuesta, lo que el SPO hace íntegramente — solo resulta en piezas
    más robustas.

    Si el proyecto depende de esfuerzos horizontales — estribos de puente,
    estructuras de contención —, el SPX se paga rápido.

## Modelado del perfil estratigráfico { #modelagem-de-perfil-estratigrafico }

**Solo en el SPX y el SPX AI.**

El SPO acepta sondeos, y más de uno. Lo que no hace es **interpolar la
estratigrafía entre perforaciones** ni presentar el perfil tridimensional del
terreno.

En la práctica:

- Cada pilote se asocia a una perforación y usa el perfil de esa perforación.
- No hay sondeo virtual en una posición intermedia.
- En [Sondeos y suelos](../spx/manual/sondagem.md#perfil-3d), la sección de
  perfil 3D no se aplica.

!!! info "Cuándo pesa esto"

    En terreno homogéneo, asociar cada pilote a la perforación más cercana es
    suficiente, y es lo que se hace desde hace décadas.

    El modelado estratigráfico pasa a valer cuando las capas **buzan** — y ahí
    la elección de la "perforación más cercana" puede asignar a un pilote un
    perfil que no es el suyo. También es lo que justifica, visualmente, por qué
    dos pilotes vecinos recibieron longitudes distintas.

## Lector editable de PDFs de sondeo { #leitor-editavel-de-pdfs-de-sondagem }

**Solo en el SPX y el SPX AI.**

En el SPO el sondeo se carga en la tabla. En
[Sondeos y suelos](../spx/manual/sondagem.md#leitor-editavel-de-pdfs), la
sección del lector de PDF no se aplica.

!!! warning "Aquí es donde se va el tiempo"

    Una obra con quince perforaciones de veinte metros son trescientas filas
    para digitar, cada una con un \(N_{SPT}\) y una clasificación de suelo — y
    cada una es una oportunidad de cambiar **arena limosa** por
    **limo arenoso**, lo que cambia \(K\) de 0,80 a 0,55 MPa.

    Si el volumen de informes es grande, el lector de PDF del SPX es la función
    que más tiempo devuelve. Vea
    [convenciones](../comecar/convencoes.md#tipos-de-solo).

## Lo que es idéntico { #o-que-e-identico }

Todo lo demás. En particular:

| Módulo | |
| :-- | :-- |
| Capacidad de carga | Aoki-Velloso, Décourt-Quaresma y Teixeira |
| Asentamiento | Cintra & Aoki, grupo, Van der Veen |
| Reacción del suelo | \(K_h = m \cdot z\) y \(K_v\) |
| Análisis estructural | Elementos finitos sobre base elástica |
| Dimensionamiento | Flexión compuesta oblicua y cortante, NBR 6118 |
| Detallado | Interactivo, con exportación a DXF |
| Informe | Memoria de cálculo editable |
| Límites del proyecto | 100 encepados · 30 pilotes/encepado · 200 pilotes · 20 sondeos |
| Tipos de pilote | Los siete |

Las [formulaciones](../spx/formulacoes/index.md) valen sin reservas.

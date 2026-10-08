# Interfaz

El SPX está organizado en **ocho pestañas**, en el orden del proyecto. Cada una
depende de las anteriores: no sirve de nada saltar al dimensionamiento sin el
sondeo cargado.

| # | Pestaña | Entrega |
| :-: | :-- | :-- |
| 1 | [Configuración del Encepado](bloco.md) | Geometría, pilotes, materiales |
| 2 | [Sondeo / NSPT](sondagem.md) | Perfil del subsuelo |
| 3 | [Propiedades de los Suelos](sondagem.md#propriedades-dos-solos) | Pesos específicos y parámetros |
| 4 | [Resultado Geotécnico](resultado-geotecnico.md) | Capacidad de carga y asentamiento |
| 5 | [Análisis Estructural](analise-estrutural.md) | Esfuerzos a lo largo del pilote |
| 6 | [Dimensionamiento](dimensionamento.md) | Armaduras |
| 7 | [Detallado (DXF)](detalhamento.md) | Plano de ejecución |
| 8 | [Informe](relatorio.md) | Memoria de cálculo |

## El orden importa { #a-ordem-importa }

<div class="fluxo" markdown="0">
  <div class="etapa"><span class="n">1</span>Configuración del encepado</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">2</span>Sondeo / NSPT</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">3</span>Propiedades de los suelos</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">4</span>Resultado geotécnico</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">5</span>Análisis estructural</div>
  <div class="seta">→</div>
  <div class="etapa ramo"><span class="n">6</span>Dimensionamiento</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">7</span>Detallado DXF</div>
  <div class="etapa"><span class="n">8</span>Informe</div>
</div>

<small>La etapa 6 alimenta las dos salidas finales: el plano y la memoria de
cálculo.</small>

!!! warning "Cambiar un dato anterior invalida lo que vino después"

    Cambiar el diámetro en la pestaña 1, o un \(N_{SPT}\) en la pestaña 2,
    invalida la capacidad, el asentamiento, los esfuerzos y la armadura. El
    programa avisa cuando detecta un cambio de parámetros geotécnicos después
    de un cálculo, pero la regla de oro es **reprocesar desde la pestaña 4 en
    adelante** siempre que vuelva atrás.

## Funciones generales { #recursos-gerais }

### Modo oscuro { #modo-escuro }

El SPX tiene tema claro y oscuro. La elección vale para toda la interfaz,
incluidos los gráficos generados — se redibujan con la paleta del tema, no se
invierten simplemente.

### Visualización 3D { #visualizacao-3d }

Dos funciones tridimensionales ayudan a verificar la entrada:

- **Sistema de coordenadas del pilote** — muestra los ejes X, Y y Z con el
  pilote dibujado, para despejar dudas sobre el sentido de un esfuerzo.
- **Visualización 3D del encepado** — muestra los pilotes en su posición, con
  las inclinaciones aplicadas. Es la forma más rápida de notar un azimut
  invertido.

### Procesamiento { #processamento }

Los cálculos largos — el análisis por elementos finitos y el procesamiento
geotécnico de muchos pilotes — muestran una ventana de progreso. El tiempo
crece con el número de pilotes y con la profundidad del sondeo.

## Convenciones { #convencoes }

Antes del primer proyecto, conviene leer
[Convenciones y unidades](../../comecar/convencoes.md). Los dos puntos que más
errores generan:

1. **La clasificación del suelo elige los parámetros.** *Arena limosa* y
   *limo arenoso* tienen nombres parecidos y composiciones invertidas:
   cambiarlos modifica \(K\) de 0,80 a 0,55 MPa.
2. **El axil positivo es compresión.** Con un valor negativo el programa pasa a
   calcular tracción, despreciando la punta.

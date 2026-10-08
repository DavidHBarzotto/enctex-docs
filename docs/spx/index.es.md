# SPX — Simple Pile X

**Versión 1.0.1** · Windows 64 bits

El SPX cubre el ciclo completo de un pilote aislado o de un grupo bajo
encepado: del sondeo al plano de detallado, pasando por la capacidad de carga,
el asentamiento, el análisis estructural con interacción suelo-estructura y el
dimensionamiento en hormigón armado.

Respecto del SPO, agrega **pilotes inclinados**, **modelado del perfil
estratigráfico** y el **lector editable de PDFs de sondeo**.

## Límites del proyecto { #limites-do-projeto }

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">encepados</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">pilotes por encepado</span></div>
  <div class="limite"><span class="valor">200</span><span class="rotulo">pilotes en total</span></div>
  <div class="limite"><span class="valor">20</span><span class="rotulo">sondeos</span></div>
</div>

Los tres primeros actúan **juntos**, y el primero que se alcanza gobierna: cien
encepados de treinta pilotes serían tres mil, y el tope real es doscientos.

## Qué hace { #o-que-ele-faz }

<div class="grid cards" markdown>

-   **Capacidad de carga**

    ---

    Tres métodos semiempíricos en paralelo — Aoki-Velloso, Décourt-Quaresma y
    Teixeira — con resultado por cota, para elegir la longitud leyendo la
    columna.

    [:octicons-arrow-right-24: Formulación](formulacoes/capacidade-de-carga.md)

-   **Asentamiento**

    ---

    Cintra & Aoki, separando la parcela elástica del pilote de la parcela del
    suelo. Asentamiento de grupo y curva carga × asentamiento por Van der Veen.

    [:octicons-arrow-right-24: Formulación](formulacoes/recalque.md)

-   **Interacción suelo-estructura**

    ---

    Resortes de Winkler horizontales y verticales, con \(K_h\) creciente con la
    profundidad y \(K_v\) por tensión admisible.

    [:octicons-arrow-right-24: Formulación](formulacoes/reacao-do-solo.md)

-   **Análisis estructural**

    ---

    Pórtico espacial por elementos finitos sobre base elástica, con pilotes
    inclinados por inclinación y azimut.

    [:octicons-arrow-right-24: Formulación](formulacoes/analise-estrutural.md)

-   **Dimensionamiento**

    ---

    Flexión compuesta oblicua de sección circular con diagrama de interacción,
    segundo orden por curvatura y cortante por el modelo de celosía.

    [:octicons-arrow-right-24: Formulación](formulacoes/dimensionamento.md)

-   **Salidas**

    ---

    Detallado en DXF y memoria de cálculo en DOCX, listos para el plano y para
    el expediente del proyecto.

    [:octicons-arrow-right-24: Manual](manual/detalhamento.md)

-   **Lector de PDFs de sondeo**

    ---

    Extracción editable de informes en PDF, para no digitar trescientas filas
    de \(N_{SPT}\) a mano.

    [:octicons-arrow-right-24: Manual](manual/sondagem.md)

</div>

## Flujo de trabajo { #fluxo-de-trabalho }

El SPX está organizado en ocho pestañas, que siguen el orden natural del
proyecto. La regla es simple: **cada pestaña depende de las anteriores**.

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

| # | Pestaña | Qué se decide en ella |
| :-: | :-- | :-- |
| 1 | Configuración del Encepado | Geometría, número y disposición de pilotes, tipo de pilote, vinculación, materiales, recubrimiento |
| 2 | Sondeo / NSPT | Perfil de \(N_{SPT}\) y códigos de suelo, metro a metro |
| 3 | Propiedades de los Suelos | Pesos específicos y parámetros por capa |
| 4 | Resultado Geotécnico | Capacidad de carga por los tres métodos y asentamiento |
| 5 | Análisis Estructural | Modelo de elementos finitos y esfuerzos a lo largo del pilote |
| 6 | Dimensionamiento | Armadura longitudinal y transversal |
| 7 | Detallado (DXF) | Plano de ejecución |
| 8 | Informe | Memoria de cálculo en DOCX |

!!! tip "La pestaña 4 es el punto de decisión"

    Es en ella donde se elige la longitud del pilote. La tabla muestra la carga
    admisible para **cada cota posible de punta**, por los tres métodos en
    paralelo. Una gran divergencia entre los métodos es información, no un
    defecto: indica que el perfil es sensible a la formulación y que el caso
    merece una prueba de carga.

## Tipos de pilote { #tipos-de-estaca }

| Tipo | Aoki-Velloso | Décourt-Quaresma | Teixeira |
| :-- | :--: | :--: | :--: |
| Excavado con lodo | ● | ● | ● |
| Excavado sin lodo | ● | ● | ● |
| Hélice continua | ● | ● | ● |
| Prefabricado | ● | ● | ● |
| Raíz | ● | ● | ● |
| Franki | ● | ● | ● |
| Omega | ● | ● | ● |

Los coeficientes de cada combinación están en
[Tablas de parámetros](formulacoes/tabelas.md).

## Próximos pasos { #proximos-passos }

- [Interfaz](manual/interface.md) — el recorrido por las ocho pestañas.
- [Formulaciones](formulacoes/index.md) — qué calcula el programa, y cómo.
- [Referencias](referencias.md) — la bibliografía.

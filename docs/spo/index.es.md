# SPO — Simple Pile One

**Versión 1.0.1** · Windows 64 bits

Plataforma completa para el cálculo, dimensionamiento y detallado de pilotes,
que cubre los principales métodos constructivos utilizados en Brasil.

## Límites del proyecto { #limites-do-projeto }

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">encepados</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">pilotes por encepado</span></div>
  <div class="limite"><span class="valor">200</span><span class="rotulo">pilotes en total</span></div>
  <div class="limite"><span class="valor">20</span><span class="rotulo">sondeos</span></div>
</div>

El tope de **200 pilotes en total** es el que vale en la práctica: cien
encepados de treinta pilotes serían tres mil, y eso no es lo que admite el
programa. Los límites actúan juntos, y el primero que se alcanza es el que
gobierna.

## Tipos de pilote { #tipos-de-estaca }

| | | |
| :-- | :-- | :-- |
| Excavado con lodo | Hélice continua | Prefabricado |
| Excavado sin lodo | Omega | Franki |
| Raíz | | |

## Qué hace { #o-que-ele-faz }

<div class="grid cards" markdown>

-   **Capacidad de carga**

    ---

    Tres métodos semiempíricos en paralelo — Aoki-Velloso, Décourt-Quaresma y
    Teixeira — con resultado por cota.

    [:octicons-arrow-right-24: Formulación](../spx/formulacoes/capacidade-de-carga.md)

-   **Asentamiento**

    ---

    Cintra & Aoki, asentamiento de grupo y curva carga × asentamiento de
    Van der Veen.

    [:octicons-arrow-right-24: Formulación](../spx/formulacoes/recalque.md)

-   **Dimensionamiento estructural**

    ---

    Flexión compuesta oblicua de sección circular con diagrama de interacción,
    y cortante por el modelo de celosía.

    [:octicons-arrow-right-24: Formulación](../spx/formulacoes/dimensionamento.md)

-   **Detallado de armaduras**

    ---

    Detallado **interactivo** y exportación a DXF.

    [:octicons-arrow-right-24: Manual](../spx/manual/detalhamento.md)

-   **Informe**

    ---

    Memoria de cálculo interactiva y editable, en DOCX.

    [:octicons-arrow-right-24: Manual](../spx/manual/relatorio.md)

-   **Interacción suelo-estructura**

    ---

    Resortes de Winkler y análisis estructural por elementos finitos.

    [:octicons-arrow-right-24: Formulación](../spx/formulacoes/analise-estrutural.md)

</div>

## Documentación { #documentacao }

El SPO es el **núcleo** de la línea SP: el SPX es el SPO con dos funciones más,
y el SPX AI es el SPX con automatización por IA. Los tres comparten el mismo
motor de cálculo.

Por eso la documentación no se triplica — serían tres copias para mantener
sincronizadas, y la primera divergencia entre ellas sería un error de proyecto
esperando ocurrir. **El manual y las formulaciones del SPX valen íntegramente
para el SPO** en los módulos comunes, que son casi todos.

<div class="grid cards" markdown>

-   :material-book-open-variant:{ .lg .middle } **[Manual](../spx/manual/interface.md)**

    ---

    Interfaz, configuración del encepado, sondeo, resultado geotécnico,
    análisis estructural, dimensionamiento, detallado e informe.

-   :material-function-variant:{ .lg .middle } **[Formulaciones](../spx/formulacoes/index.md)**

    ---

    Capacidad de carga, asentamiento, reacción del suelo, análisis
    estructural, dimensionamiento y tablas de parámetros.

-   :material-swap-horizontal:{ .lg .middle } **[Qué cambia en el SPO](diferencas.md)**

    ---

    Las dos funciones del SPX que el SPO no tiene, y qué hacer sin ellas.

-   :material-book-education-outline:{ .lg .middle } **[Referencias](../spx/referencias.md)**

    ---

    La bibliografía, común a los tres.

</div>

## Diferencia con el SPX { #diferenca-para-o-spx }

El SPO **no tiene**:

- **Cálculo de pilotes inclinados** — inclinación y azimut individuales.
- **Modelado del perfil estratigráfico** — interpolación entre perforaciones y
  perfil 3D.
- **Lector editable de PDFs de sondeo**.

[:octicons-arrow-right-24: Detalles y alternativas](diferencas.md)

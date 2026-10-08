# Formulaciones del PCO

Qué calcula el programa, con qué hipótesis y dentro de qué rango de validez.

Esta sección vale íntegramente para el [PCX](../../pcx/index.md), que comparte
el núcleo de cálculo — el PCX solo agrega los
[encepados flexibles](../../pcx/blocos-flexiveis.md).

## Los dos caminos { #os-dois-caminhos }

Un encepado sobre pilotes puede calcularse de dos maneras, y la elección no es
de gusto: depende de **cómo se comporta el encepado**.

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Encepado rígido</strong> — la carga baja por bielas comprimidas
    <span class="consome">Blévot &amp; Frémy · MBT (IBRACON)</span></div>
  <div class="nivel"><strong>Encepado flexible</strong> — el encepado trabaja a flexión, como viga
    <span class="consome">disponible en el PCX</span></div>
</div>

El criterio de rigidez está en [Verificaciones](verificacoes.md#rigidez-do-bloco).

## La cadena de cálculo { #a-cadeia-de-calculo }

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Acciones en el pilar</strong> — N, Mx, My, Fx, Fy
    <span class="consome">la entrada</span></div>
  <div class="nivel"><strong>Combinación NBR 8681</strong> — casos últimos normales
    <span class="consome">consume: acciones</span></div>
  <div class="nivel"><strong>Reacciones en los pilotes</strong> — analítica o por elementos finitos
    <span class="consome">consume: combinaciones y geometría</span></div>
  <div class="nivel"><strong>Modelo de bielas</strong> — Blévot o MBT
    <span class="consome">consume: reacciones</span></div>
  <div class="nivel"><strong>Armadura del tirante</strong>
    <span class="consome">consume: modelo de bielas</span></div>
  <div class="nivel"><strong>Verificaciones</strong> — nudos, punzonamiento, cortante
    <span class="consome">consume: modelo y geometría</span></div>
  <div class="nivel"><strong>Detallado e informe</strong>
    <span class="consome">consume: armadura y verificaciones</span></div>
</div>

## Las páginas { #as-paginas }

<div class="grid cards" markdown>

-   **[Blévot & Frémy](blevot.md)**

    ---

    El método clásico: la celosía interna, la verificación de las bielas, el
    factor 1,15 y las armaduras complementarias de la norma.

-   **[Fórmulas por disposición](arranjos.md)**

    ---

    Las expresiones cerradas de dos a siete pilotes, con canto útil, límites
    de tensión, armaduras principales y complementarias.

-   **[MBT — Bielas y Tirantes](mbt.md)**

    ---

    El modelo de los Comentarios del IBRACON a la NBR 6118, con la expansión
    de la carga del pilar calculada en lugar de tabulada.

-   **[Elementos finitos](elementos-finitos.md)**

    ---

    El encepado como sólido, en malla hexaédrica o tetraédrica — para verificar
    las hipótesis del modelo de bielas.

-   **[Combinación de acciones](combinacoes.md)**

    ---

    NBR 8681, con el tratamiento correcto de la acción permanente favorable.

-   **[Verificaciones](verificacoes.md)**

    ---

    Nudos de compresión, punzonamiento, cortante y el criterio de rigidez.

</div>

## Cómo leer estas páginas { #como-ler-estas-paginas }

Cada una termina con los **límites de validez**, en el bloque de color propio:

!!! warning validade "Rango de aplicación"

    Delimita dónde vale el método. Léalo como parte del resultado, no como nota
    al pie — es la información que separa usarlo de usarlo mal.

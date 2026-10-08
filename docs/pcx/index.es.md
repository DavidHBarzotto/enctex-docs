# PCX — Pile Cap X

**Versión 1.0.2** · Windows 64 bits

Evolución del [PCO](../pco/index.md) para proyectos más complejos, incluido el
cálculo de **encepados flexibles**.

## Límites del proyecto { #limites-do-projeto }

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">encepados por proyecto</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">pilotes por encepado</span></div>
  <div class="limite"><span class="valor">1 a N</span><span class="rotulo">pilotes por encepado</span></div>
  <div class="limite"><span class="valor">&gt;1</span><span class="rotulo">pilar por encepado</span></div>
</div>

## Qué agrega al PCO { #o-que-ele-acrescenta-ao-pco }

El PCX es el PCO con los **encepados flexibles** habilitados. Todo lo demás es
idéntico — mismo núcleo de cálculo, misma interfaz, mismas verificaciones.

| Comportamiento | PCO | PCX |
| :-- | :--: | :--: |
| Encepado Rígido (Compresión) | ● | ● |
| Encepado Rígido (Arrancamiento/Tracción) | ● | ● |
| Encepado Flexible (Compresión) | | ● |
| Encepado Flexible (Arrancamiento/Tracción) | | ● |

[:octicons-arrow-right-24: Encepados flexibles: la formulación](blocos-flexiveis.md)

!!! info "Por qué esto importa"

    El modelo de bielas y tirantes presupone que la biela **se forma**. Eso
    exige que el encepado sea lo bastante alto en relación con la distancia
    entre la cara del pilar y el eje del pilote.

    En un encepado esbelto la biela no se forma de manera bien definida, y el
    comportamiento real es de **flexión** — el encepado trabaja como viga.
    Calcularlo por Blévot en ese caso **subestima la armadura**.

    Es ese rango el que cubre el PCX.

## Documentación { #documentacao }

El PCX comparte el núcleo de cálculo del PCO, y la documentación sigue la misma
lógica: **las páginas del PCO valen íntegramente para el PCX**, y aquí quedan
solo las diferencias.

<div class="grid cards" markdown>

-   :material-vector-line:{ .lg .middle } **[Encepados flexibles](blocos-flexiveis.md)**

    ---

    Lo que solo hace el PCX: viga biapoyada, viga empotrada y libre, análisis
    de emparrillado, armadura de flexión y estribos.

-   :material-book-open-variant:{ .lg .middle } **[Manual del PCO](../pco/manual/interface.md)**

    ---

    Interfaz, configuración del encepado, dimensionamiento, detallado e
    informe. Idénticos.

-   :material-function-variant:{ .lg .middle } **[Formulaciones del PCO](../pco/formulacoes/index.md)**

    ---

    Blévot, MBT, elementos finitos, combinación de acciones y
    verificaciones. Idénticas.

-   :material-book-education-outline:{ .lg .middle } **[Referencias](../pco/referencias.md)**

    ---

    La bibliografía, común a los dos.

</div>

## Cuándo se justifica el PCX { #quando-o-pcx-se-justifica }

El PCO resuelve el encepado corriente de edificio, que suele cumplir la
condición de rigidez con holgura. El PCX empieza a valer la pena cuando
aparece:

- **Un encepado esbelto** — altura pequeña en relación con la separación de
  los pilotes.
- **Un encepado en el límite** entre rígido y flexible, en el que conviene
  calcular de las dos formas y adoptar el mayor resultado.
- **Un encepado con gran luz entre pilotes**, en el que gobierna la flexión.

!!! tip "En el límite, calcule de las dos formas"

    Si la armadura de flexión simple resulta mayor que la del tirante, es la
    que debe prevalecer — la diferencia mide cuánto el encepado ya dejó de
    comportarse como rígido.

## Integración con la línea SP { #integracao-com-a-linha-sp }

Como el PCO, el PCX **se comunica con el SPO, el SPX y el SPX AI**: recibe la
geometría y las reacciones de los pilotes en lugar de exigir cargarlas de
nuevo.

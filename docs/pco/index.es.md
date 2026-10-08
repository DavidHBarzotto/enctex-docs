# PCO — Pile Cap One

**Versión 1.0.2** · Windows 64 bits

Plataforma para el cálculo, dimensionamiento y detallado de encepados sobre
pilotes, según las normas técnicas brasileñas.

## Límites del proyecto { #limites-do-projeto }

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">encepados por proyecto</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">pilotes por encepado</span></div>
  <div class="limite"><span class="valor">1 a N</span><span class="rotulo">pilotes por encepado</span></div>
  <div class="limite"><span class="valor">&gt;1</span><span class="rotulo">pilar por encepado</span></div>
</div>

## Qué hace { #o-que-ele-faz }

<div class="grid cards" markdown>

-   :material-vector-triangle:{ .lg .middle } **Bielas y tirantes**

    ---

    Dimensionamiento por **Blévot & Frémy** y por el **Método de Bielas y
    Tirantes (MBT)** de los Comentarios del IBRACON a la NBR 6118.

    [:octicons-arrow-right-24: Formulación](formulacoes/blevot.md)

-   :material-cube-scan:{ .lg .middle } **Elementos finitos**

    ---

    Malla **hexaédrica o tetraédrica** del encepado, para verificar el campo de
    tensiones contra las hipótesis de bielas y tirantes.

    [:octicons-arrow-right-24: Formulación](formulacoes/elementos-finitos.md)

-   :material-scale-balance:{ .lg .middle } **Combinación de acciones**

    ---

    Combinaciones últimas normales por la **NBR 8681**, con el tratamiento
    correcto de la acción permanente favorable y desfavorable.

    [:octicons-arrow-right-24: Formulación](formulacoes/combinacoes.md)

-   :material-check-decagram-outline:{ .lg .middle } **Verificaciones**

    ---

    Punzonamiento, cortante y nudos de compresión.

    [:octicons-arrow-right-24: Formulación](formulacoes/verificacoes.md)

-   :material-shape-outline:{ .lg .middle } **Pilares de cualquier forma**

    ---

    Rectangular, circular, perfil I/H, perfil U, rectangular hueco y circular
    hueco — y **más de un pilar por encepado**.

    [:octicons-arrow-right-24: Manual](manual/bloco.md)

-   :material-file-export-outline:{ .lg .middle } **Salidas**

    ---

    Detallado interactivo de armaduras, exportación a DXF e informe técnico
    editable.

    [:octicons-arrow-right-24: Manual](manual/detalhamento.md)

</div>

## Integración con la línea SP { #integracao-com-a-linha-sp }

El PCO **se comunica con el SPO, el SPX y el SPX AI**. En la práctica, esto
cierra el ciclo del proyecto de cimentación profunda: los programas de la línea
SP calculan el pilote — capacidad de carga, longitud, armadura — y el PCO
calcula el encepado que los corona, recibiendo la geometría y las reacciones
en lugar de exigir que se carguen de nuevo.

## Flujo de trabajo { #fluxo-de-trabalho }

<div class="fluxo" markdown="0">
  <div class="etapa"><span class="n">1</span>Geometría del encepado y de los pilotes</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">2</span>Pilares y secciones</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">3</span>Acciones y combinaciones</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">4</span>Reacciones en los pilotes</div>
  <div class="seta">→</div>
  <div class="etapa ramo"><span class="n">5</span>Dimensionamiento</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">6</span>Detallado DXF</div>
  <div class="etapa"><span class="n">7</span>Informe</div>
</div>

## Diferencia con el PCX { #diferenca-para-o-pcx }

El PCO calcula **encepados rígidos**. El [PCX](../pcx/index.md) agrega el
cálculo de **encepados flexibles**, modelados como viga biapoyada o empotrada.

Los dos comparten el mismo núcleo: el PCX es el PCO con los encepados
flexibles habilitados. Toda esta documentación — manual y formulaciones — vale
íntegramente para el PCX.

!!! tip "Cuándo basta el PCO"

    Si sus encepados cumplen la condición de rigidez — la mayoría de los
    encepados corrientes de edificios —, el PCO lo resuelve. El PCX se
    justifica cuando aparecen encepados esbeltos, en los que la biela no se
    forma de manera bien definida y el comportamiento real es de flexión.

## Próximos pasos { #proximos-passos }

- [Interfaz](manual/interface.md) — el recorrido por el programa.
- [Formulaciones](formulacoes/index.md) — qué calcula, y cómo.
- [Referencias](referencias.md) — la bibliografía.

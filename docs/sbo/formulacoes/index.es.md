# Formulaciones del SBO

Qué calcula el programa, con qué hipótesis y dentro de qué rango de validez.

Esta sección vale íntegramente para el [SBX](../../sbx/index.md), que comparte
el mismo núcleo — solo agrega la
[optimización de la sección](../../sbx/otimizacao.md).

## La cadena de cálculo { #a-cadeia-de-calculo }

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Materiales</strong> — fck, fyk, Es y los coeficientes parciales
    <span class="consome">definen fcd, fyd y los parámetros del diagrama</span></div>
  <div class="nivel"><strong>Flexión simple</strong> — armadura longitudinal
    <span class="consome">consume: materiales, geometría y Mk</span></div>
  <div class="nivel"><strong>Cortante y torsión</strong> — armadura transversal
    <span class="consome">consume: materiales, geometría, Vk y Tk</span></div>
  <div class="nivel"><strong>Interacción de bielas</strong> — el criterio que puede reprobar la sección
    <span class="consome">consume: cortante y torsión juntos</span></div>
  <div class="nivel"><strong>Detallado</strong> — diámetros, número de barras, As efectivo
    <span class="consome">consume: las armaduras calculadas</span></div>
  <div class="nivel"><strong>Momento-curvatura</strong> — rigidez y ductilidad
    <span class="consome">consume: geometría y armadura efectiva</span></div>
</div>

## Las páginas { #as-paginas }

<div class="grid cards" markdown>

-   **[Flexión simple](flexao.md)**

    ---

    Sección rectangular y en T, armadura simple y doble, los parámetros del
    diagrama parábola-rectángulo y la armadura mínima.

-   **[Cortante y torsión](cortante-torcao.md)**

    ---

    Modelo I, sección hueca equivalente y la verificación de interacción — el
    punto en que los dos compiten por la misma biela.

-   **[Momento-curvatura](momento-curvatura.md)**

    ---

    El análisis no lineal con la relación constitutiva real, y lo que muestra
    sobre rigidez y ductilidad.

</div>

## Cómo leer estas páginas { #como-ler-estas-paginas }

Cada una termina con los **límites de validez**, en el bloque de color propio:

!!! warning validade "Rango de aplicación"

    Delimita dónde vale el método. Léalo como parte del resultado, no como nota
    al pie.

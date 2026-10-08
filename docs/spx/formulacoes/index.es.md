# Formulaciones del SPX

Esta sección describe **qué calcula el programa** — los métodos, las
hipótesis, los coeficientes y, sobre todo, los límites de validez de cada uno.

Existe porque un programa de cimentaciones no debería ser una caja negra. El
proyecto lo firma el ingeniero, y para firmarlo hay que saber qué cálculo se
hizo.

## Cómo leer estas páginas { #como-ler-estas-paginas }

Cada página sigue la misma estructura:

1. **La formulación**, con las ecuaciones tal como el programa las aplica.
2. **Las decisiones de implementación** — los puntos en los que el método
   admite más de una lectura y el programa eligió una. Son ellos los que
   explican la divergencia entre programas distintos que usan "el mismo
   método".
3. **Los límites de validez**, marcados así:

!!! warning validade "Rango de aplicación"

    Este bloque aparece en todas las páginas y delimita dónde vale el método.
    Léalo como parte del resultado, no como nota al pie.

## La cadena de cálculo { #a-cadeia-de-calculo }

Los módulos no son independientes: cada uno consume el anterior.

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Sondeo</strong> — NSPT y códigos de suelo
    <span class="consome">la entrada de todo</span></div>
  <div class="nivel"><strong>Capacidad de carga</strong> — Aoki · Décourt · Teixeira
    <span class="consome">consume: sondeo</span></div>
  <div class="nivel"><strong>Longitud del pilote</strong>
    <span class="consome">consume: capacidad de carga</span></div>
  <div class="nivel"><strong>Asentamiento</strong> — Cintra &amp; Aoki
    <span class="consome">consume: capacidad de carga</span></div>
  <div class="nivel"><strong>Reacción del suelo</strong> — Kh y Kv
    <span class="consome">consume: sondeo y longitud</span></div>
  <div class="nivel"><strong>Análisis estructural</strong> — PyNite
    <span class="consome">consume: reacción del suelo</span></div>
  <div class="nivel"><strong>Dimensionamiento</strong> — NBR 6118
    <span class="consome">consume: análisis estructural</span></div>
  <div class="nivel"><strong>Detallado DXF y memoria de cálculo</strong>
    <span class="consome">consume: dimensionamiento y asentamiento</span></div>
</div>

Una consecuencia práctica: **cambiar el sondeo cambia todo**. La clasificación
del suelo selecciona \(K\), \(\alpha\), \(C\) y \(m\), que a su vez definen la
capacidad, el asentamiento, la rigidez de los resortes, los esfuerzos y la
armadura. No hay forma de alterar el perfil y aprovechar un dimensionamiento
anterior.

## Las páginas { #as-paginas }

<div class="grid cards" markdown>

-   **[Capacidad de carga](capacidade-de-carga.md)**

    ---

    Aoki-Velloso, Décourt-Quaresma y Teixeira. Cómo define cada uno el \(N\)
    de punta, y por qué esa es la principal fuente de divergencia entre ellos.

-   **[Asentamiento](recalque.md)**

    ---

    Cintra & Aoki, asentamiento de grupo y curva carga × asentamiento de
    Van der Veen.

-   **[Reacción del suelo](reacao-do-solo.md)**

    ---

    Resortes de Winkler, \(K_h = m \cdot z\) y \(K_v\) por tensión admisible.

-   **[Análisis estructural](analise-estrutural.md)**

    ---

    Pórtico espacial sobre base elástica, con pilotes inclinados.

-   **[Dimensionamiento](dimensionamento.md)**

    ---

    Flexión compuesta oblicua con diagrama de interacción, segundo orden y
    cortante.

-   **[Tablas de parámetros](tabelas.md)**

    ---

    Todos los coeficientes, con la lógica detrás de las escalas.

</div>

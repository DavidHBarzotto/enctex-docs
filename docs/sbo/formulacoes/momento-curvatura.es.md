# Momento-curvatura

Análisis no lineal de la sección: en lugar de responder "cuánto acero",
responde **cómo se comporta la sección** a medida que se carga, hasta la
rotura.

Es lo que muestra la rigidez efectiva y la ductilidad — dos cosas que el
dimensionamiento en estado límite último no revela.

---

## La relación tensión-deformación real { #a-relacao-tensao-deformacao-real }

El dimensionamiento usa el **bloque rectangular equivalente**, una
simplificación conveniente para integrar a mano. El análisis no lineal usa la
relación **parábola-rectángulo** de la NBR 6118, que es la curva real:

\[
\sigma_c =
\begin{cases}
0{,}85\,f_{cd}\left[1 - \left(1 - \dfrac{\varepsilon_c}{\varepsilon_{c2}}\right)^{n}\right]
  & 0 \le \varepsilon_c \le \varepsilon_{c2} \\[10pt]
0{,}85\,f_{cd} & \varepsilon_{c2} < \varepsilon_c \le \varepsilon_{cu}
\end{cases}
\]

El tramo parabólico sube hasta \(\varepsilon_{c2}\); a partir de ahí la tensión
queda constante hasta la deformación última.

---

## El procedimiento { #o-procedimento }

Para cada valor de curvatura \(\chi\), la sección está en equilibrio cuando la
resultante de compresión en el hormigón y la de tracción en el acero se
anulan. La incógnita es la **profundidad de la línea neutra**.

El programa la encuentra por **bisección** — `scipy.optimize.bisect` —,
buscando entre límites físicos aceptables la posición en que el equilibrio
cierra. Con la línea neutra conocida, el momento resistente correspondiente
sale de la integración de las tensiones.

Repitiendo esto para una secuencia de curvaturas — 100 pasos por defecto — se
construye el diagrama \(M\)–\(\chi\).

!!! info "Por qué bisección, y no Newton"

    La bisección es más lenta que Newton, pero **no depende de la derivada** y
    no diverge. La relación constitutiva del hormigón tiene un punto anguloso
    en \(\varepsilon_{c2}\), donde la parábola encuentra la meseta — y es
    exactamente el tipo de discontinuidad de la derivada que hace que Newton
    dé un paso equivocado.

    Con cien puntos por diagrama, la diferencia de velocidad es irrelevante.

---

## Qué muestra el diagrama { #o-que-o-diagrama-mostra }

**La rigidez efectiva.** La pendiente inicial del diagrama es la rigidez
\(EI\) de la sección no fisurada; después de la fisuración cae, y es esa
rigidez reducida — no la de la sección bruta — la que gobierna los
desplazamientos reales.

**La ductilidad.** La longitud de la meseta antes de la rotura indica cuánta
rotación soporta la sección. Es lo que permite (o no) la redistribución de
momentos que presupone el coeficiente \(\beta\) del dimensionamiento — vea
[flexión](flexao.md#parametros-do-diagrama).

**El tipo de rotura.** Una sección subarmada hace fluir el acero antes de
aplastar el hormigón, y el diagrama tiene una meseta larga. Una sobrearmada
rompe por el hormigón, y el diagrama termina abruptamente — rotura frágil, sin
aviso.

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - Es un análisis **de sección**, no de pieza. No proporciona flechas: para
      eso habría que integrar la curvatura a lo largo de la luz, con el
      diagrama de momentos.
    - No considera el **tension stiffening** — la contribución del hormigón
      traccionado entre fisuras. Eso subestima la rigidez en la fase
      fisurada.
    - No considera la **fluencia** ni la **retracción**, que en servicio
      reducen sustancialmente la rigidez con el tiempo.
    - Usa los valores **de cálculo** de las resistencias. Para un diagrama que
      represente el comportamiento esperado — y no el de proyecto —, serían
      necesarios valores medios.
    - El diagrama es **monotónico**: no representa ciclos de carga y descarga,
      ni el comportamiento bajo acciones repetidas.

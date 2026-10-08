# Combinación de acciones

Las combinaciones últimas normales siguen la **NBR 8681:2003**, sección
5.1.3.1 — que es la misma prescripción reproducida en la Tabla 11.1 de la
NBR 6118.

## La combinación { #a-combinacao }

Para cada acción variable probada como **principal**, se arma un caso en que
entra íntegramente y las demás entran reducidas por \(\psi_0\):

\[
F_d = \sum \gamma_g F_{g,k} + \gamma_q F_{q1,k} + \gamma_q \sum \psi_{0j} F_{qj,k}
\]

con \(\gamma_f = 1{,}4\) en las combinaciones normales.

Cada caso es un **vector completo** \(\{N, M_x, M_y, F_x, F_y\}\) — los cinco
componentes del esfuerzo en el pilar —, y no una envolvente componente a
componente.

!!! info "Por qué caso por caso, y no la envolvente antes"

    Envolver los esfuerzos del pilar **antes** de resolver y resolver **una vez
    por caso** dan el mismo resultado cuando la respuesta es lineal en los
    cinco componentes — que es el caso de la fórmula analítica de reacción en
    el pilote, y también del modelo de elementos finitos, que es lineal.

    Pero la lista de casos existe porque solo ella permite ejecutar el
    solucionador **una vez por caso** y envolver las **reacciones**. Envolver
    antes obligaría a resolver con un vector "combinado" que desprecia los
    signos — y el signo importa: un momento que alivia un pilote sobrecarga el
    opuesto.

## Acción permanente favorable { #acao-permanente-favoravel }

Este es el punto en que la norma exige cuidado y donde es fácil errar en
contra de la seguridad.

Una acción permanente — el peso propio del encepado, siempre en compresión —
puede **aliviar** el efecto adverso de una acción variable de signo opuesto,
como una variable de tracción. Cuando eso ocurre, la NBR 8681 (4.3.3.2 y
Tabla 1) manda usar

\[
\gamma_{g,inf} = 1{,}0
\]

y **no** \(\gamma_{g,sup} = 1{,}4\). Mayorar en 1,4 una acción que está
aliviando sobrestimaría el alivio, y eso va en contra de la seguridad.

### Cómo lo resuelve el PCO { #como-o-pco-resolve }

El problema es que "favorable" **no es un atributo fijo de la acción**:
depende del signo de cada verificación. El mismo peso propio es desfavorable
para la compresión de la biela y favorable para la tracción del pilote.

En lugar de decidirlo en la entrada, el PCO prueba **las dos hipótesis como
casos separados** — \(\gamma_g = 1{,}0\) y \(\gamma_g = 1{,}4\) en las
permanentes — y deja que la envolvente por componente elija sola, para cada
verificación, cuál de las dos es la más desfavorable.

Es más costoso de calcular y libera al usuario de acertar a mano una
clasificación que cambia de verificación en verificación.

## Peso propio { #peso-proprio }

El peso propio del encepado entra como acción permanente, con

\[
\gamma_{concreto} = 25\ \text{kN/m}^3
\]

según la NBR 6120.

El PCO calcula el volumen a partir del polígono real del encepado — la
envolvente convexa de los pilotes con el vuelo —, y no de un rectángulo
circunscrito.

## Encepados traccionados { #blocos-tracionados }

Cuando la combinación resulta en tracción, el encepado cambia de
comportamiento y el programa trata el caso explícitamente. La distinción
importa porque el pilote traccionado no tiene punta que movilizar y el modelo
de bielas se invierte.

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - Cubre las **combinaciones últimas normales**. Las combinaciones
      especiales, de construcción y excepcionales (NBR 8681, 5.1.3.2 a
      5.1.3.4) no están contempladas.
    - No se verifican los **estados límite de servicio** — fisuración y
      deformación excesiva.
    - Los factores \(\psi_0\) dependen de la categoría de uso de la acción
      variable, y son responsabilidad de quien carga las acciones.
    - Las acciones dinámicas, sísmicas y de impacto están fuera del alcance.

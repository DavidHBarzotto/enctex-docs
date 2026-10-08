# Dimensionamiento

Con los esfuerzos del [análisis estructural](analise-estrutural.md), el SPX
dimensiona la sección circular de hormigón armado según la **NBR 6118**.

Son dos verificaciones: flexión compuesta oblicua (armadura longitudinal) y
esfuerzo cortante (armadura transversal).

---

## Flexión compuesta oblicua { #flexao-composta-obliqua }

### Esfuerzos de cálculo { #esforcos-de-calculo }

De los dos modelos — eje X y eje Y — se extraen los máximos, y el momento
resultante se compone vectorialmente:

\[
M_{d,1^a} = \gamma_f \sqrt{M_{kx}^2 + M_{ky}^2}
\qquad
N_d = \gamma_f N_k
\]

con \(\gamma_f = 1{,}4\).

La composición vectorial es legítima en una sección **circular**, que no tiene
dirección preferente: cualquier dirección de momento encuentra la misma
geometría y la misma distribución de armadura.

### Parámetros del diagrama de tensiones { #parametros-do-diagrama-de-tensoes }

Según la clase del hormigón:

=== "\(f_{ck} \le 50\) MPa"

    \[
    \lambda = 0{,}8
    \qquad
    \alpha_c = 0{,}85
    \qquad
    \varepsilon_{cu} = 3{,}5\text{‰}
    \qquad
    \varepsilon_{c2} = 2{,}0\text{‰}
    \]

=== "\(f_{ck} > 50\) MPa"

    \[
    \lambda = 0{,}8 - \frac{f_{ck}-50}{400}
    \qquad
    \alpha_c = 0{,}85\left(1 - \frac{f_{ck}-50}{200}\right)
    \]

    \[
    \varepsilon_{cu} = \frac{2{,}6 + 35\left(\frac{90-f_{ck}}{100}\right)^4}{1000}
    \qquad
    \varepsilon_{c2} = \frac{2{,}0 + 0{,}085\,(f_{ck}-50)^{0,53}}{1000}
    \]

Las resistencias de cálculo salen de \(\gamma_c = 1{,}4\) y
\(\gamma_s = 1{,}15\), con \(\sigma_{cd} = \alpha_c f_{cd}\).

### Efectos de segundo orden { #efeitos-de-segunda-ordem }

El índice de esbeltez usa el radio de giro de la sección circular
(\(i = D/4\)):

\[
\lambda = \frac{\ell_e}{D/4}
\]

Para \(40 < \lambda \le 140\), se agrega el momento de segundo orden por el
**método del pilar patrón con curvatura aproximada**:

\[
M_{2d} = N_d \cdot \frac{\ell_e^2}{10} \cdot \frac{1}{r}
\]

con la curvatura limitada por

\[
\frac{1}{r} = \min\left(\frac{0{,}005}{(\nu + 0{,}5)\,D},\; \frac{0{,}005}{D}\right)
\qquad
\nu = \frac{N_d}{A_c f_{cd}}
\]

El momento total de cálculo es \(M_d = M_{d,1^a} + M_{2d}\).

!!! warning validade "Por encima de λ = 140"

    La NBR 6118 exige métodos más rigurosos para \(\lambda > 140\). El programa
    **no** agrega segundo orden en ese rango — corresponde al proyectista
    verificar si la esbeltez es admisible y, si lo es, tratarla con un análisis
    específico.

### Armadura no requerida { #dispensa-de-armadura }

La armadura puede omitirse cuando la tensión de compresión es lo bastante baja:

\[
\sigma_{sd} = \frac{N_d}{A_c} \le 5\text{ MPa}
\qquad\text{y}\qquad
\sigma_{sd} \le 0{,}85\,f_{ck}
\]

Aun así, suele adoptarse una armadura mínima constructiva por otras razones —
izaje, hinca, anclaje al encepado.

### Diagrama de interacción { #diagrama-de-interacao }

El programa construye el diagrama de interacción \(N\)–\(M\) de la sección con
la armadura adoptada y verifica si el par \((N_d, M_d)\) cae dentro de él. Es
la verificación más transparente posible: se ve el **margen**, y no solo el
veredicto.

El número mínimo de barras es **6**, según la prescripción normativa para la
sección circular.

---

## Esfuerzo cortante { #esforco-cortante }

### Esfuerzo de cálculo { #esforco-de-calculo }

El cortante se compone vectorialmente a partir de los dos modelos:

\[
V_k = \sqrt{V_{kx}^2 + V_{ky}^2}
\qquad
V_d = \gamma_f V_k
\]

### Verificación de la biela { #verificacao-da-biela }

Primero, el aplastamiento del hormigón:

\[
\tau_{wd} = \frac{V_d}{b_w d}
\qquad
\tau_{wu} = \frac{0{,}27\,\alpha_v\,f_{ck}}{\gamma_c}
\qquad
\alpha_v = 1 - \frac{f_{ck}}{250}
\]

Si \(\tau_{wd} > \tau_{wu}\), **la sección es insuficiente** y el programa
rechaza el dimensionamiento: ninguna armadura resuelve el aplastamiento de la
biela, solo aumentar el diámetro o la resistencia del hormigón.

Para la sección circular se adopta \(b_w = D\) y
\(d = D - c - \phi_t - \phi_\ell/2\).

### Armadura transversal { #armadura-transversal }

Por el **Modelo I** de la NBR 6118 (bielas a 45°):

\[
\tau_c = \frac{0{,}126\, f_{ck}^{2/3}}{\gamma_c} \quad (f_{ck} \le 50)
\]

\[
\frac{A_{sw}}{s} = \frac{100\, b_w\, \cdot 1{,}11(\tau_{wd} - \tau_c)}{f_{yd}}
\]

con armadura mínima

\[
\rho_{min} = \frac{0{,}2\, f_{ct,m}}{f_{ywk}}
\qquad
f_{ct,m} = 0{,}30\, f_{ck}^{2/3}
\]

### Separación adoptada { #espacamento-adotado }

La separación es la **menor** entre tres criterios — y el programa muestra
cuál gobernó:

| Criterio | Límite |
| :-- | :-- |
| Teórico | Del \(A_{sw}/s\) calculado |
| Normativo (ELU) | \(\min(0{,}6d;\,30\text{ cm})\), o \(\min(0{,}3d;\,20\text{ cm})\) si \(\tau_{wd} > 0{,}67\,\tau_{wu}\) |
| Constructivo | \(\min(20\text{ cm};\, D;\, 12\phi_\ell)\) |

Con un tope inferior de 5 cm — por debajo de eso no se logra hormigonar.

!!! note "Diámetro mínimo del estribo"

    \(\phi_t \ge \max(5\text{ mm};\, \phi_\ell/4)\). El estribo de 5,0 mm se
    calcula con \(f_{ywk} = 600\) MPa (CA-60); por encima de eso, 500 MPa.

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - El dimensionamiento cubre la **sección circular maciza**. Las secciones
      huecas, metálicas o mixtas no están contempladas.
    - La composición vectorial de los esfuerzos supone que los máximos de X y
      de Y ocurren **en la misma sección**, lo que es conservador cuando no
      ocurren.
    - El segundo orden solo se trata en el rango \(40 < \lambda \le 140\).
    - No se verifican: fatiga, fisuración en servicio, situaciones
      transitorias de hinca o izaje, ni el anclaje de la armadura en el
      encepado.
    - La longitud de pandeo \(\ell_e\) es un dato de entrada. Determinarla en
      un pilote parcialmente enterrado exige criterio — el tramo enterrado
      está contenido por el suelo, pero la rigidez de esa contención depende
      del propio \(K_h\).

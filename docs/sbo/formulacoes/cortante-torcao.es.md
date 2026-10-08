# Cortante y torsión

Los dos se tratan juntos porque **compiten por la misma biela de hormigón** —
y es esa competencia la que capta la verificación de interacción.

---

## Esfuerzo cortante { #esforco-cortante }

Modelo de cálculo I de la NBR 6118: bielas a 45°, con la parcela \(V_c\)
constante.

\[
\tau_{wd} = \frac{V_d}{b_w\,d}
\qquad\qquad
V_d = \gamma_f\,V_k
\]

### Aplastamiento de la biela { #esmagamento-da-biela }

\[
\tau_{wu} = 0{,}27\,\alpha_v\,f_{cd}
\qquad\qquad
\alpha_v = 1 - \frac{f_{ck}}{250}
\]

Si \(\tau_{wd} > \tau_{wu}\), **la sección es insuficiente** y el cálculo se
interrumpe. Ninguna armadura resuelve el aplastamiento de la biela.

### Armadura transversal { #armadura-transversal }

\[
\tau_c =
\begin{cases}
\dfrac{0{,}126\,f_{ck}^{2/3}}{\gamma_c} & f_{ck} \le 50\ \text{MPa} \\[10pt]
\dfrac{0{,}8904\,\ln(1+0{,}11\,f_{ck})}{\gamma_c} & f_{ck} > 50\ \text{MPa}
\end{cases}
\]

\[
\tau_d = \max\left[1{,}11\left(\tau_{wd} - \tau_c\right);\ 0\right]
\qquad\qquad
\frac{A_{sw}}{s} = \frac{100\,b_w\,\tau_d}{f_{ywd}}
\]

!!! info "El acero del estribo se limita a 435 MPa"

    \(f_{ywd} = \min\left(f_{yk}/\gamma_s;\ 435\ \text{MPa}\right)\).

    La norma limita la tensión en la armadura transversal justamente para
    controlar la abertura de las fisuras diagonales en servicio — de nada
    sirve usar acero de alta resistencia en el estribo si va a fisurar antes de
    fluir.

### Armadura mínima { #armadura-minima }

\[
\rho_{sw,min} = \frac{0{,}2\,f_{ct,m}}{f_{ywk}}
\qquad\qquad
f_{ct,m} =
\begin{cases}
0{,}3\,f_{ck}^{2/3} & f_{ck} \le 50 \\[4pt]
2{,}12\,\ln(1+0{,}11 f_{ck}) & f_{ck} > 50
\end{cases}
\]

con \(f_{ywk} \le 500\) MPa y \(A_{sw,min} = \rho_{sw,min}\cdot 100\, b_w\).

---

## Torsión { #torcao }

### La sección hueca equivalente { #a-secao-vazada-equivalente }

La torsión es resistida por un **flujo de cortante cerrado** junto a las caras
— el núcleo contribuye poco. Por eso la sección maciza se sustituye por una
sección hueca equivalente de espesor \(t\).

Partiendo de \(t_0 = \dfrac{b\,h}{2(b+h)}\) y de \(c_1 = d'\):

=== "t₀ ≥ 2c₁"

    \[
    t = t_0
    \qquad
    A_e = (b - t)(h - t)
    \qquad
    u_e = 2(b + h - 2t)
    \]

=== "t₀ < 2c₁"

    \[
    t = \min(t_0;\ b - 2c_1)
    \qquad
    A_e = (b - 2c_1)(h - 2c_1)
    \qquad
    u_e = 2(b + h - 4c_1)
    \]

\(A_e\) es el área limitada por la línea media de la pared, y \(u_e\) el
perímetro de esa línea.

### Tensión y límite { #tensao-e-limite }

\[
\tau_{td} = \frac{T_d}{2\,A_e\,t}
\qquad\qquad
\tau_{tu} = 0{,}25\,\alpha_v\,f_{cd}
\]

### Armaduras { #armaduras }

\[
\frac{A_{sw,t}}{s} = \frac{100\,T_d}{2\,A_e\,f_{yd}}
\qquad\text{(por rama)}
\qquad\qquad
A_{sl,t} = \frac{T_d\,u_e}{2\,A_e\,f_{yd}}
\]

La armadura longitudinal de torsión se distribuye por las caras
**proporcionalmente al perímetro externo** — lo que da parcelas para la cara
inferior, la superior y las dos laterales.

Mínimo, cuando hay torsión:

\[
A_{sl,min} = 0{,}5\,\rho_{sw,min}\,u_e\,b
\]

---

## La verificación de interacción { #a-verificacao-de-interacao }

Es el punto central de este capítulo:

\[
\frac{\tau_{td}}{\tau_{tu}} + \frac{\tau_{wd}}{\tau_{wu}} \;\le\; 1
\]

El cortante y la torsión **suman compresión en la misma biela**. Verificar
cada uno aisladamente contra su propio límite aprueba secciones que la
combinación reprueba — y por eso la norma exige la suma de las razones.

Si la suma supera 1, el cálculo se interrumpe: es aplastamiento, y pide una
sección mayor.

### Separación máxima de los estribos { #espacamento-maximo-dos-estribos }

El mismo indicador gobierna la separación:

| Suma de las razones | Separación máxima |
| :-- | :-- |
| \(\le 0{,}67\) | \(\min(0{,}6\,d;\ 30\ \text{cm})\) |
| \(> 0{,}67\) | \(\min(0{,}3\,d;\ 20\ \text{cm})\) |

Cuanto más cerca del aplastamiento, más juntos los estribos — pasan a coser
fisuras que ya se formaron.

---

## Sumando todo { #somando-tudo }

La armadura transversal total combina las dos parcelas, recordando que el
estribo de torsión cuenta con **dos ramas**:

\[
\frac{A_{sw,tot}}{s} = \frac{A_{sw,v}}{s} + 2\,\frac{A_{sw,t}}{s}
\qquad\ge\ \rho_{sw,min}\cdot 100\,b
\]

Y la armadura longitudinal recibe además el incremento debido al cortante — la
parcela de tracción que el modelo de celosía transfiere al cordón traccionado:

\[
\Delta A_{s,V} = \frac{0{,}5\,V_d}{f_{yd}}
\]

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - La torsión implementada es la de **sección rectangular**. Las secciones
      en T bajo torsión usan el alma como sección de referencia, lo que es una
      aproximación.
    - Modelo I de cortante, con bielas a 45°. El Modelo II, de inclinación
      variable, no está implementado — suele dar menos armadura en piezas muy
      solicitadas.
    - La torsión considerada es la de **equilibrio**. La torsión de
      compatibilidad, que puede despreciarse cuando hay redistribución, es
      decisión del proyectista: si no se carga, el programa no la inventa.
    - No hay verificación de **abertura de fisuras** en servicio, que en piezas
      torsionadas suele ser lo que de hecho gobierna el detallado.
    - Los límites de \(f_{ywd}\) en 435 MPa y de \(f_{ywk}\) en 500 MPa son los
      de la norma para la armadura transversal.

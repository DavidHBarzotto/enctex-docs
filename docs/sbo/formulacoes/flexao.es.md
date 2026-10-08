# Flexión simple

Dimensionamiento a flexión simple normal según la **NBR 6118**, con el
diagrama parábola-rectángulo y el bloque rectangular equivalente.

---

## Materiales { #materiais }

\[
f_{cd} = \frac{f_{ck}}{\gamma_c}
\qquad\qquad
f_{yd} = \frac{f_{yk}}{\gamma_s}
\]

con \(\gamma_c = 1{,}4\), \(\gamma_s = 1{,}15\) y \(\gamma_f = 1{,}4\) por
defecto — todos editables.

### Parámetros del diagrama { #parametros-do-diagrama }

=== "fck ≤ 50 MPa"

    \[
    \lambda = 0{,}8
    \qquad
    \alpha_c = 0{,}85
    \qquad
    \varepsilon_{cu} = 3{,}5\text{‰}
    \]

    \[
    \xi_{lim} = 0{,}8\,\beta - 0{,}35
    \]

=== "fck > 50 MPa"

    \[
    \lambda = 0{,}8 - \frac{f_{ck}-50}{400}
    \qquad
    \alpha_c = 0{,}85\left(1 - \frac{f_{ck}-50}{200}\right)
    \]

    \[
    \varepsilon_{cu} = 2{,}6 + 35\left(\frac{90-f_{ck}}{100}\right)^{4}\text{‰}
    \qquad
    \xi_{lim} = 0{,}8\,\beta - 0{,}45
    \]

!!! info "El coeficiente β y la redistribución"

    \(\beta\) es la **relación de redistribución** de momentos. Con
    \(\beta = 1\) — sin redistribución — resulta \(\xi_{lim} = 0{,}45\) para
    hormigones hasta C50 y \(0{,}35\) por encima, que son los límites de
    ductilidad de la norma.

    Reducir \(\beta\) ajusta \(\xi_{lim}\): cuanto más momento se redistribuye,
    más capacidad de rotación necesita la sección, y más superficial debe
    quedar la línea neutra.

### Acero { #aco }

Diagrama elastoplástico perfecto:

\[
\sigma_s =
\begin{cases}
E_s\,\varepsilon_s & \varepsilon_s < \varepsilon_{yd} \\[4pt]
f_{yd} & \varepsilon_s \ge \varepsilon_{yd}
\end{cases}
\qquad
\varepsilon_{yd} = \frac{f_{yd}}{E_s}
\]

---

## Sección rectangular { #secao-retangular }

El momento reducido es

\[
\mu = \frac{M_d}{b\,d^2\,\sigma_{cd}}
\qquad\text{con}\qquad
\sigma_{cd} = \alpha_c\,f_{cd}
\quad\text{y}\quad
M_d = \gamma_f M_k
\]

y el límite entre armadura simple y doble,

\[
\mu_{lim} = \lambda\,\xi_{lim}\left(1 - 0{,}5\,\lambda\,\xi_{lim}\right)
\]

### Armadura simple — μ ≤ μlim { #armadura-simples-lim }

\[
\xi = \frac{1 - \sqrt{1 - 2\mu}}{\lambda}
\qquad\qquad
A_s = \frac{\lambda\,\xi\,b\,d\,\sigma_{cd}}{f_{yd}}
\]

### Armadura doble — μ > μlim { #armadura-dupla-lim }

La sección no resiste solo con armadura traccionada; entra la armadura
comprimida \(A'_s\). Su deformación, con \(\delta = d'/d\):

\[
\varepsilon'_s = \frac{\varepsilon_{cu}\left(\xi_{lim} - \delta\right)}{\xi_{lim}}
\]

y de ahí

\[
A'_s = \frac{(\mu - \mu_{lim})\,b\,d\,\sigma_{cd}}{(1-\delta)\,\sigma'_s}
\]

\[
A_s = \left[\lambda\,\xi_{lim} + \frac{\mu - \mu_{lim}}{1-\delta}\right]\frac{b\,d\,\sigma_{cd}}{f_{yd}}
\]

!!! warning "Dos condiciones que interrumpen el cálculo"

    **Armadura doble en el dominio 2.** Si
    \(\xi_{lim} < \varepsilon_{cu}/(\varepsilon_{cu}+10)\), la sección estaría
    en el dominio 2 con armadura doble — el hormigón ni siquiera llega a
    aprovecharse. El programa rechaza y pide una sección mayor.

    **Armadura de compresión traccionada.** Si \(\xi_{lim} \le \delta\), la
    línea neutra pasa por encima de \(A'_s\), y la armadura "de compresión"
    estaría traccionada. También rechaza.

    En los dos casos el mensaje es el mismo en la práctica: **aumente la
    sección**. Son situaciones en que el problema es la geometría, no la
    armadura.

---

## Sección en T { #secao-t }

El procedimiento es el de la sección rectangular, con el ala contribuyendo a la
compresión. La lógica se divide según la línea neutra caiga **dentro del ala**
— y ahí la sección se comporta como rectangular de ancho \(b_f\) — o **por
debajo de ella**, caso en que la compresión se reparte entre el ala y el alma.

Entran: ancho del ala \(b_f\), espesor del ala \(h_f\), ancho del alma \(b_w\)
y el canto útil.

---

## Armadura mínima { #armadura-minima }

\[
\rho_{min} =
\begin{cases}
\dfrac{0{,}078\,f_{ck}^{2/3}}{f_{yd}} & f_{ck} \le 50\ \text{MPa} \\[10pt]
\dfrac{0{,}5512\,\ln(1 + 0{,}11\,f_{ck})}{f_{yd}} & f_{ck} > 50\ \text{MPa}
\end{cases}
\]

con el piso absoluto

\[
\rho_{min} \ge 0{,}0015
\qquad\qquad
A_{s,min} = \rho_{min}\,b\,h
\]

Note que la cuantía mínima se aplica sobre el **área bruta \(b\,h\)**, no sobre
\(b\,d\).

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - **Flexión simple normal**, en el plano. La flexión oblicua y la flexión
      compuesta — con esfuerzo axil — no están contempladas.
    - El dimensionamiento es de **sección**, no de pieza: el programa no
      calcula esfuerzos a partir de luces y cargas. Usted informa \(M_k\),
      \(V_k\) y \(T_k\) ya obtenidos de su análisis estructural.
    - No se verifican los **estados límite de servicio** — abertura de fisuras
      y flecha. En vigas esbeltas, la flecha suele gobernar, y no se verifica
      aquí.
    - No hay verificación de **anclaje**, **empalmes** ni **fatiga**.
    - La armadura mínima de piel entra solo en el
      [optimizador del SBX](../../sbx/otimizacao.md); en el dimensionamiento
      directo es una elección del detallado.

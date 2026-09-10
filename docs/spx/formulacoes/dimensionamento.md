# Dimensionamento

Com os esforços da [análise estrutural](analise-estrutural.md), o SPX
dimensiona a seção circular de concreto armado conforme a **NBR 6118**.

São duas verificações: flexão composta oblíqua (armadura longitudinal) e
esforço cortante (armadura transversal).

---

## Flexão composta oblíqua

### Esforços de cálculo

Dos dois modelos — eixo X e eixo Y — extraem-se os máximos, e o momento
resultante é composto vetorialmente:

\[
M_{d,1^a} = \gamma_f \sqrt{M_{kx}^2 + M_{ky}^2}
\qquad
N_d = \gamma_f N_k
\]

com \(\gamma_f = 1{,}4\).

A composição vetorial é legítima em seção **circular**, que não tem direção
preferencial: qualquer direção de momento encontra a mesma geometria e a mesma
distribuição de armadura.

### Parâmetros do diagrama de tensões

Conforme a classe do concreto:

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

As resistências de cálculo saem de \(\gamma_c = 1{,}4\) e
\(\gamma_s = 1{,}15\), com \(\sigma_{cd} = \alpha_c f_{cd}\).

### Efeitos de segunda ordem

O índice de esbeltez usa o raio de giração da seção circular
(\(i = D/4\)):

\[
\lambda = \frac{\ell_e}{D/4}
\]

Para \(40 < \lambda \le 140\), acrescenta-se o momento de segunda ordem pelo
**método do pilar-padrão com curvatura aproximada**:

\[
M_{2d} = N_d \cdot \frac{\ell_e^2}{10} \cdot \frac{1}{r}
\]

com a curvatura limitada por

\[
\frac{1}{r} = \min\left(\frac{0{,}005}{(\nu + 0{,}5)\,D},\; \frac{0{,}005}{D}\right)
\qquad
\nu = \frac{N_d}{A_c f_{cd}}
\]

O momento total de cálculo é \(M_d = M_{d,1^a} + M_{2d}\).

!!! warning validade "Acima de λ = 140"

    A NBR 6118 exige métodos mais rigorosos para \(\lambda > 140\). O programa
    **não** acrescenta segunda ordem nessa faixa — cabe ao projetista verificar
    se a esbeltez é admissível e, se for, tratá-la por análise específica.

### Dispensa de armadura

A armadura pode ser dispensada quando a tensão de compressão é baixa o
bastante:

\[
\sigma_{sd} = \frac{N_d}{A_c} \le 5\text{ MPa}
\qquad\text{e}\qquad
\sigma_{sd} \le 0{,}85\,f_{ck}
\]

Ainda assim, armadura mínima construtiva costuma ser adotada por outras razões
— içamento, cravação, amarração ao bloco.

### Diagrama de interação

O programa constrói o diagrama de interação \(N\)–\(M\) da seção com a
armadura adotada e verifica se o par \((N_d, M_d)\) cai dentro dele. É a
verificação mais transparente possível: vê-se a **margem**, e não apenas o
veredicto.

O número mínimo de barras é **6**, conforme prescrição normativa para seção
circular.

---

## Esforço cortante

### Esforço de cálculo

O cortante é composto vetorialmente a partir dos dois modelos:

\[
V_k = \sqrt{V_{kx}^2 + V_{ky}^2}
\qquad
V_d = \gamma_f V_k
\]

### Verificação da biela

Primeiro, o esmagamento do concreto:

\[
\tau_{wd} = \frac{V_d}{b_w d}
\qquad
\tau_{wu} = \frac{0{,}27\,\alpha_v\,f_{ck}}{\gamma_c}
\qquad
\alpha_v = 1 - \frac{f_{ck}}{250}
\]

Se \(\tau_{wd} > \tau_{wu}\), **a seção é insuficiente** e o programa recusa o
dimensionamento: nenhuma armadura resolve esmagamento de biela, só aumentar o
diâmetro ou a resistência do concreto.

Para a seção circular, adota-se \(b_w = D\) e
\(d = D - c - \phi_t - \phi_\ell/2\).

### Armadura transversal

Pelo **Modelo I** da NBR 6118 (bielas a 45°):

\[
\tau_c = \frac{0{,}126\, f_{ck}^{2/3}}{\gamma_c} \quad (f_{ck} \le 50)
\]

\[
\frac{A_{sw}}{s} = \frac{100\, b_w\, \cdot 1{,}11(\tau_{wd} - \tau_c)}{f_{yd}}
\]

com armadura mínima

\[
\rho_{min} = \frac{0{,}2\, f_{ct,m}}{f_{ywk}}
\qquad
f_{ct,m} = 0{,}30\, f_{ck}^{2/3}
\]

### Espaçamento adotado

O espaçamento é o **menor** entre três critérios — e o programa mostra qual
governou:

| Critério | Limite |
| :-- | :-- |
| Teórico | Do \(A_{sw}/s\) calculado |
| Normativo (ELU) | \(\min(0{,}6d;\,30\text{ cm})\), ou \(\min(0{,}3d;\,20\text{ cm})\) se \(\tau_{wd} > 0{,}67\,\tau_{wu}\) |
| Construtivo | \(\min(20\text{ cm};\, D;\, 12\phi_\ell)\) |

Com trava inferior de 5 cm — abaixo disso não se consegue concretar.

!!! note "Diâmetro mínimo do estribo"

    \(\phi_t \ge \max(5\text{ mm};\, \phi_\ell/4)\). Estribo de 5,0 mm é
    calculado com \(f_{ywk} = 600\) MPa (CA-60); acima disso, 500 MPa.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - O dimensionamento cobre **seção circular cheia**. Seções vazadas,
      metálicas ou mistas não estão contempladas.
    - A composição vetorial dos esforços supõe que os máximos de X e de Y
      ocorrem **na mesma seção**, o que é conservador quando não ocorrem.
    - A segunda ordem só é tratada na faixa \(40 < \lambda \le 140\).
    - Não são verificados: fadiga, fissuração em serviço, situações
      transitórias de cravação ou içamento, nem a ancoragem da armadura no
      bloco.
    - O comprimento de flambagem \(\ell_e\) é dado de entrada. Determiná-lo em
      estaca parcialmente enterrada exige julgamento — o trecho enterrado é
      contido pelo solo, mas a rigidez dessa contenção depende do próprio
      \(K_h\).

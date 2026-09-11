# Cortante e torção

Os dois são tratados juntos porque **competem pela mesma biela de concreto** —
e é essa competição que a verificação de interação captura.

---

## Esforço cortante

Modelo de cálculo I da NBR 6118: bielas a 45°, com a parcela \(V_c\)
constante.

\[
\tau_{wd} = \frac{V_d}{b_w\,d}
\qquad\qquad
V_d = \gamma_f\,V_k
\]

### Esmagamento da biela

\[
\tau_{wu} = 0{,}27\,\alpha_v\,f_{cd}
\qquad\qquad
\alpha_v = 1 - \frac{f_{ck}}{250}
\]

Se \(\tau_{wd} > \tau_{wu}\), **a seção é insuficiente** e o cálculo é
interrompido. Nenhuma armadura resolve esmagamento de biela.

### Armadura transversal

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

!!! info "O aço do estribo é limitado a 435 MPa"

    \(f_{ywd} = \min\left(f_{yk}/\gamma_s;\ 435\ \text{MPa}\right)\).

    A norma limita a tensão na armadura transversal justamente para controlar a
    abertura das fissuras diagonais em serviço — não adianta usar aço de alta
    resistência no estribo se ele vai fissurar antes de escoar.

### Armadura mínima

\[
\rho_{sw,min} = \frac{0{,}2\,f_{ct,m}}{f_{ywk}}
\qquad\qquad
f_{ct,m} =
\begin{cases}
0{,}3\,f_{ck}^{2/3} & f_{ck} \le 50 \\[4pt]
2{,}12\,\ln(1+0{,}11 f_{ck}) & f_{ck} > 50
\end{cases}
\]

com \(f_{ywk} \le 500\) MPa e \(A_{sw,min} = \rho_{sw,min}\cdot 100\, b_w\).

---

## Torção

### A seção vazada equivalente

A torção é resistida por um **fluxo de cisalhamento fechado** junto às faces —
o núcleo pouco contribui. Por isso a seção maciça é substituída por uma seção
vazada equivalente de espessura \(t\).

Partindo de \(t_0 = \dfrac{b\,h}{2(b+h)}\) e de \(c_1 = d'\):

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

\(A_e\) é a área limitada pela linha média da parede, e \(u_e\) o perímetro
dessa linha.

### Tensão e limite

\[
\tau_{td} = \frac{T_d}{2\,A_e\,t}
\qquad\qquad
\tau_{tu} = 0{,}25\,\alpha_v\,f_{cd}
\]

### Armaduras

\[
\frac{A_{sw,t}}{s} = \frac{100\,T_d}{2\,A_e\,f_{yd}}
\qquad\text{(por ramo)}
\qquad\qquad
A_{sl,t} = \frac{T_d\,u_e}{2\,A_e\,f_{yd}}
\]

A armadura longitudinal de torção é distribuída pelas faces
**proporcionalmente ao perímetro externo** — o que dá parcelas para a face
inferior, a superior e as duas laterais.

Mínimo, quando há torção:

\[
A_{sl,min} = 0{,}5\,\rho_{sw,min}\,u_e\,b
\]

---

## A verificação de interação

É o ponto central deste capítulo:

\[
\frac{\tau_{td}}{\tau_{tu}} + \frac{\tau_{wd}}{\tau_{wu}} \;\le\; 1
\]

Cortante e torção **somam compressão na mesma biela**. Verificar cada um
isoladamente contra o seu próprio limite aprova seções que a combinação
reprova — e é por isso que a norma exige a soma das razões.

Se a soma passa de 1, o cálculo é interrompido: é esmagamento, e pede seção
maior.

### Espaçamento máximo dos estribos

O mesmo indicador governa o espaçamento:

| Soma das razões | Espaçamento máximo |
| :-- | :-- |
| \(\le 0{,}67\) | \(\min(0{,}6\,d;\ 30\ \text{cm})\) |
| \(> 0{,}67\) | \(\min(0{,}3\,d;\ 20\ \text{cm})\) |

Quanto mais perto do esmagamento, mais juntos os estribos — eles passam a
costurar fissuras que já se formaram.

---

## Somando tudo

A armadura transversal total combina as duas parcelas, lembrando que o estribo
de torção conta com **dois ramos**:

\[
\frac{A_{sw,tot}}{s} = \frac{A_{sw,v}}{s} + 2\,\frac{A_{sw,t}}{s}
\qquad\ge\ \rho_{sw,min}\cdot 100\,b
\]

E a armadura longitudinal recebe ainda o acréscimo devido ao cortante — a
parcela de tração que o modelo de treliça transfere ao banzo tracionado:

\[
\Delta A_{s,V} = \frac{0{,}5\,V_d}{f_{yd}}
\]

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - A torção implementada é a de **seção retangular**. Seções T sob torção
      usam a alma como seção de referência, o que é aproximação.
    - Modelo I de cortante, com bielas a 45°. O Modelo II, de inclinação
      variável, não está implementado — ele costuma dar armadura menor em
      peças muito solicitadas.
    - A torção considerada é a de **equilíbrio**. Torção de compatibilidade,
      que pode ser desprezada quando há redistribuição, é decisão do
      projetista: se ela não for lançada, o programa não a inventa.
    - Não há verificação de **abertura de fissuras** em serviço, que em peças
      torcidas costuma ser o que de fato governa o detalhamento.
    - Os limites de \(f_{ywd}\) a 435 MPa e de \(f_{ywk}\) a 500 MPa são os da
      norma para armadura transversal.

# Flexão simples

Dimensionamento à flexão simples normal conforme a **NBR 6118**, com o diagrama
parábola-retângulo e o bloco retangular equivalente.

---

## Materiais

\[
f_{cd} = \frac{f_{ck}}{\gamma_c}
\qquad\qquad
f_{yd} = \frac{f_{yk}}{\gamma_s}
\]

com \(\gamma_c = 1{,}4\), \(\gamma_s = 1{,}15\) e \(\gamma_f = 1{,}4\) por
padrão — todos editáveis.

### Parâmetros do diagrama

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

!!! info "O coeficiente β e a redistribuição"

    \(\beta\) é a **relação de redistribuição** de momentos. Com \(\beta = 1\)
    — sem redistribuição — resulta \(\xi_{lim} = 0{,}45\) para concretos até
    C50 e \(0{,}35\) acima, que são os limites de ductilidade da norma.

    Reduzir \(\beta\) aperta \(\xi_{lim}\): quanto mais momento se redistribui,
    mais capacidade de rotação a seção precisa ter, e mais rasa deve ficar a
    linha neutra.

### Aço

Diagrama elasto-plástico perfeito:

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

## Seção retangular

O momento reduzido é

\[
\mu = \frac{M_d}{b\,d^2\,\sigma_{cd}}
\qquad\text{com}\qquad
\sigma_{cd} = \alpha_c\,f_{cd}
\quad\text{e}\quad
M_d = \gamma_f M_k
\]

e o limite entre armadura simples e dupla,

\[
\mu_{lim} = \lambda\,\xi_{lim}\left(1 - 0{,}5\,\lambda\,\xi_{lim}\right)
\]

### Armadura simples — μ ≤ μlim

\[
\xi = \frac{1 - \sqrt{1 - 2\mu}}{\lambda}
\qquad\qquad
A_s = \frac{\lambda\,\xi\,b\,d\,\sigma_{cd}}{f_{yd}}
\]

### Armadura dupla — μ > μlim

A seção não resiste só com armadura tracionada; entra armadura comprimida
\(A'_s\). A deformação nela, com \(\delta = d'/d\):

\[
\varepsilon'_s = \frac{\varepsilon_{cu}\left(\xi_{lim} - \delta\right)}{\xi_{lim}}
\]

e daí

\[
A'_s = \frac{(\mu - \mu_{lim})\,b\,d\,\sigma_{cd}}{(1-\delta)\,\sigma'_s}
\]

\[
A_s = \left[\lambda\,\xi_{lim} + \frac{\mu - \mu_{lim}}{1-\delta}\right]\frac{b\,d\,\sigma_{cd}}{f_{yd}}
\]

!!! warning "Duas condições que interrompem o cálculo"

    **Armadura dupla no domínio 2.** Se
    \(\xi_{lim} < \varepsilon_{cu}/(\varepsilon_{cu}+10)\), a seção estaria no
    domínio 2 com armadura dupla — o concreto nem chega a ser aproveitado. O
    programa recusa e pede seção maior.

    **Armadura de compressão tracionada.** Se \(\xi_{lim} \le \delta\), a linha
    neutra passa acima de \(A'_s\), e a armadura "de compressão" estaria
    tracionada. Também recusa.

    Nos dois casos a mensagem é a mesma na prática: **aumente a seção**. São
    situações em que a geometria é o problema, não a armadura.

---

## Seção T

O procedimento é o da seção retangular, com a mesa contribuindo na compressão.
A lógica se divide conforme a linha neutra caia **dentro da mesa** — e aí a
seção se comporta como retangular de largura \(b_f\) — ou **abaixo dela**, caso
em que a compressão se reparte entre a mesa e a alma.

Entram: largura da mesa \(b_f\), espessura da mesa \(h_f\), largura da alma
\(b_w\) e a altura útil.

---

## Armadura mínima

\[
\rho_{min} =
\begin{cases}
\dfrac{0{,}078\,f_{ck}^{2/3}}{f_{yd}} & f_{ck} \le 50\ \text{MPa} \\[10pt]
\dfrac{0{,}5512\,\ln(1 + 0{,}11\,f_{ck})}{f_{yd}} & f_{ck} > 50\ \text{MPa}
\end{cases}
\]

com o piso absoluto

\[
\rho_{min} \ge 0{,}0015
\qquad\qquad
A_{s,min} = \rho_{min}\,b\,h
\]

Note que a taxa mínima incide sobre a **área bruta \(b\,h\)**, não sobre
\(b\,d\).

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - **Flexão simples normal**, no plano. Flexão oblíqua e flexão composta —
      com esforço normal — não estão contempladas.
    - O dimensionamento é de **seção**, não de peça: o programa não calcula
      esforços a partir de vãos e carregamentos. Você informa \(M_k\), \(V_k\)
      e \(T_k\) já obtidos da sua análise estrutural.
    - Não são verificados **estados limites de serviço** — abertura de fissura
      e flecha. Para vigas esbeltas, a flecha costuma governar, e ela não é
      verificada aqui.
    - Não há verificação de **ancoragem**, **emendas** nem **fadiga**.
    - A armadura mínima de pele entra apenas no
      [otimizador do SBX](../../sbx/otimizacao.md); no dimensionamento direto
      ela é escolha do detalhamento.

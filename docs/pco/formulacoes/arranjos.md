# Fórmulas por arranjo

As expressões fechadas do [Método das Bielas](blevot.md) para cada
configuração de estacas, conforme Bastos (2023) e a NBR 6118.

Em todas: \(N\) é a carga do pilar, \(e\) a distância entre eixos de estacas,
\(a_p\) a dimensão do pilar, \(d\) a altura útil, \(A_p\) a área do pilar e
\(A_e\) a área da estaca.

!!! info "Pilar retangular vira quadrado equivalente"

    As formulações supõem **pilar de seção quadrada**, com centro coincidente
    com o centro geométrico do bloco. Para pilar retangular, adota-se

    \[
    a_{p,eq} = \sqrt{a_p \cdot b_p}
    \]

---

## Resumo

| Estacas | Arranjo | \(R_s\) | \(\sigma_{lim}\) no pilar | \(\sigma_{lim}\) na estaca |
| :-: | :-- | :-- | :-- | :-- |
| 2 | Linear | \(\dfrac{N}{8}\dfrac{2e-a_p}{d}\) | \(1{,}4\,K_R f_{cd}\) | \(1{,}4\,K_R f_{cd}\) |
| 3 | Triângulo | \(\dfrac{N}{9}\dfrac{e\sqrt3-0{,}9a_p}{d}\) | \(1{,}75\,K_R f_{cd}\) | \(1{,}75\,K_R f_{cd}\) |
| 4 | Quadrado | \(\dfrac{N\sqrt2}{16}\dfrac{2e-a_p}{d}\) | \(2{,}1\,K_R f_{cd}\) | \(2{,}1\,K_R f_{cd}\) |
| 5 | Quadrado + centro | \(\dfrac{4}{5}\dfrac{N\sqrt2}{16}\dfrac{2e-a_p}{d}\) | \(2{,}6\,K_R f_{cd}\) | \(2{,}1\,K_R f_{cd}\) |
| 5 | Pentágono | \(\dfrac{0{,}85N}{5d}\left(e-\dfrac{a_p}{3{,}4}\right)\) | dispensada | dispensada |
| 6 | Pentágono + centro | \(\dfrac{0{,}85N}{6d}\left(e-\dfrac{a_p}{3{,}4}\right)\) | dispensada | dispensada |
| 6 | Hexágono | \(\dfrac{N}{6d}\left(e-\dfrac{a_p}{4}\right)\) | dispensada | dispensada |
| 7 | Hexágono + centro | — (ver abaixo) | dispensada | dispensada |

"Dispensada" significa: **se a altura útil for adotada dentro do intervalo
\(d_{min} \le d \le d_{máx}\), não é necessário verificar a tensão nas
bielas.** É o próprio intervalo que garante a inclinação segura.

!!! warning "Atenção ao bloco de cinco estacas com uma no centro"

    É o único arranjo em que **o limite no pilar difere do limite na estaca**:
    \(2{,}6\,K_R f_{cd}\) contra \(2{,}1\,K_R f_{cd}\). Nos demais, os dois
    limites coincidem.

---

## Três estacas — triângulo

O pilar é suposto quadrado, com centro coincidente com o centro geométrico do
bloco. O esquema de forças é analisado segundo uma das **medianas** do
triângulo formado pelos centros das estacas.

\[
\tan\alpha = \frac{d}{e\dfrac{\sqrt3}{3} - 0{,}3\,a_p}
\qquad
R_s = \frac{N}{9}\left(\frac{e\sqrt3 - 0{,}9\,a_p}{d}\right)
\qquad
R_c = \frac{N}{3\,\text{sen}\,\alpha}
\]

### Altura útil

| Critério | Intervalo |
| :-- | :-- |
| Blévot, \(40^\circ \le \alpha \le 55^\circ\) | \(0{,}485\left(e - 0{,}52a_p\right) \le d \le 0{,}825\left(e - 0{,}52a_p\right)\) |
| Machado (1985), \(45^\circ \le \alpha \le 55^\circ\) | \(0{,}58\left(e - \dfrac{a_p}{2}\right) \le d \le 0{,}825\left(e - \dfrac{a_p}{2}\right)\) |

### Bielas

\[
A_b = \frac{A_p}{3}\,\text{sen}\,\alpha \ \text{(pilar)}
\qquad
A_b = A_e\,\text{sen}\,\alpha \ \text{(estaca)}
\]

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p\,\text{sen}^2\alpha}
\qquad
\sigma_{cd,b,est} = \frac{N_d}{3\,A_e\,\text{sen}^2\alpha}
\qquad
\sigma_{lim} = 1{,}75\,K_R\,f_{cd}
\]

### Armadura principal

\(R_s\) atua na direção das **medianas**. Para obter a componente na direção
dos eixos das estacas, pela lei dos senos:

\[
\frac{R_s}{\text{sen}\,120^\circ} = \frac{R'_s}{\text{sen}\,30^\circ}
\qquad\Longrightarrow\qquad
R'_s = R_s\frac{\sqrt3}{3}
\]

resultando na **armadura paralela aos lados**:

\[
A_{s,lado} = \frac{\sqrt3\,N_d}{27\,d\,f_{yd}}\left(e\sqrt3 - 0{,}9\,a_p\right)
\]

!!! info "Por que paralela aos lados, e não nas medianas"

    O arranjo com armadura nas **medianas** foi muito usado no passado, mas tem
    dois defeitos: a superposição dos três feixes de barras no centro do bloco,
    e fissuração elevada nas faces laterais causada pela falta de apoio nas
    extremidades das barras — a chamada *"armadura em vazio"*.

    Além disso, ele **não atende à NBR 6118 (22.7.4.1.1)**, que exige pelo
    menos 85 % da armadura de flexão nas faixas definidas pelas estacas.

    A configuração recomendada é **armadura principal paralela aos lados, com
    malha ortogonal** — mais usada no Brasil, com menor fissuração e maior
    economia.

### Dimensões em planta

Conforme a sugestão de Campos (2015), a dimensão \(A\) da aba do triângulo vale
aproximadamente \(1{,}154\,a\), com \(a\) a distância do eixo da estaca à face.

---

## Quatro estacas — quadrado

\[
\tan\alpha = \frac{d}{e\dfrac{\sqrt2}{2} - a_p\dfrac{\sqrt2}{4}}
\qquad
R_s = \frac{N\sqrt2}{16}\left(\frac{2e - a_p}{d}\right)
\qquad
R_c = \frac{N}{4\,\text{sen}\,\alpha}
\]

\(R_s\) é a força de tração **na direção das diagonais**.

### Altura útil

Para \(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = 0{,}71\left(e - \frac{a_p}{2}\right)
\qquad\qquad
d_{máx} = e - \frac{a_p}{2}
\]

### Bielas

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p\,\text{sen}^2\alpha}
\qquad
\sigma_{cd,b,est} = \frac{N_d}{4\,A_e\,\text{sen}^2\alpha}
\qquad
\sigma_{lim} = 2{,}1\,K_R\,f_{cd}
\]

### Armadura principal

Há quatro detalhamentos possíveis, e eles **não são equivalentes**:

| Detalhamento | Desempenho |
| :-- | :-- |
| a) Direção das diagonais | Fissuras laterais excessivas já para cargas reduzidas |
| **b) Paralela aos lados** | **Um dos mais eficientes — o mais usual na prática** |
| c) Diagonais + paralela aos lados | — |
| d) Malha única | Carga de ruptura inferior às demais, eficiência de 80 %; melhor desempenho quanto à fissuração |

Os detalhamentos **a**, **c** e **d** não atendem à prescrição da NBR 6118
(22.7.4.1.1) de que mais de 85 % da armadura fique nas faixas das estacas.

Para o detalhamento **b**, com adição de malha:

\[
A_{s,lado} = \frac{N_d}{16\,d\,f_{yd}}\left(2e - a_p\right)
\]

\[
A_{s,malha} = 0{,}25\,A_{s,lado} \ \ge\ \frac{A_{s,susp}}{4}
\qquad\text{(em cada direção)}
\]

\[
A_{s,susp} = \frac{N_d}{6\,f_{yd}}
\]

---

## Cinco estacas — quadrado com uma no centro

O procedimento é o do bloco sobre quatro estacas, **substituindo \(N\) por
\(\frac{4}{5}N\)** — a estaca central recebe a sua parcela sem gerar tirante.

\[
R_s = \frac{4}{5}\cdot\frac{N\sqrt2}{16}\cdot\frac{2e - a_p}{d}
\]

### Altura útil

Para \(45^\circ \le \alpha \le 55^\circ\), a mesma do bloco de quatro estacas:

\[
d_{min} = 0{,}71\left(e - \frac{a_p}{2}\right)
\qquad
d_{máx} = e - \frac{a_p}{2}
\]

### Bielas

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p\,\text{sen}^2\alpha}
\qquad
\sigma_{cd,b,est} = \frac{N_d}{5\,A_e\,\text{sen}^2\alpha}
\]

\[
\sigma_{lim,pil} = 2{,}6\,K_R\,f_{cd}
\qquad\qquad
\sigma_{lim,est} = 2{,}1\,K_R\,f_{cd}
\]

### Armaduras

\[
A_{s,lado} = \frac{4}{5}\cdot\frac{N_d}{16\,d\,f_{yd}}\left(2e-a_p\right)
= \frac{N_d}{20\,d\,f_{yd}}\left(2e - a_p\right)
\]

\[
A_{s,malha} = 0{,}25\,A_{s,lado} \ \ge\ \frac{A_{s,susp}}{4}
\qquad\qquad
A_{s,susp} = \frac{N_d}{7{,}5\,f_{yd}}
\]

!!! tip "Pilar muito alongado"

    Para pilares muito retangulares, projeta-se um **bloco retangular** sobre
    cinco estacas, tratado como bloco de quatro estacas com as fórmulas
    adaptadas às distâncias diferentes.

    Outra opção é dispor uma linha com três estacas e outra com duas — nesse
    caso o cálculo se assemelha ao dos blocos com mais de seis estacas.

---

## Cinco estacas — pentágono

As estacas ficam nos vértices de um pentágono, com o centro do pilar quadrado
coincidindo com o centro geométrico delas.

\[
\tan\alpha = \frac{d}{0{,}85\,e - 0{,}25\,a_p}
\qquad
R_s = \frac{0{,}85\,N}{5\,d}\left(e - \frac{a_p}{3{,}4}\right)
\]

### Altura útil

Para \(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = 0{,}85\left(e - \frac{a_p}{3{,}4}\right)
\qquad
d_{máx} = 1{,}2\left(e - \frac{a_p}{3{,}4}\right)
\]

!!! info "Bielas dispensadas"

    Se \(d\) for adotado entre \(d_{min}\) e \(d_{máx}\), **não é necessário
    verificar as tensões de compressão nas bielas**.

### Armaduras

Decompondo na direção paralela aos lados, com \(R'_s = \dfrac{R_s}{2\cos 54^\circ}\):

\[
A_{s,lado} = \frac{0{,}725\,N_d}{5\,d\,f_{yd}}\left(e - \frac{a_p}{3{,}4}\right)
\]

\[
A_{s,malha} = 0{,}25\,A_{s,lado} \ \ge\ \frac{A_{s,susp,tot}}{5}
\qquad\qquad
A_{s,susp,tot} = \frac{N_d}{7{,}5\,f_{yd}}
\]

---

## Seis estacas — pentágono com uma no centro

Procede-se como no bloco sobre cinco estacas em pentágono, **substituindo
\(N\) por \(\frac{5N}{6}\)**:

\[
R_s = \frac{0{,}85\,N}{6\,d}\left(e - \frac{a_p}{3{,}4}\right)
\]

Altura útil idêntica à do pentágono de cinco estacas, e bielas igualmente
dispensadas dentro do intervalo.

Pela lei dos senos, \(R'_s = R_s\dfrac{\text{sen}\,54^\circ}{\text{sen}\,72^\circ} = 0{,}85\,R_s\):

\[
A_{s,lado} = \frac{0{,}725\,N_d}{6\,d\,f_{yd}}\left(e - \frac{a_p}{3{,}4}\right)
\]

\[
A_{s,malha} = 0{,}25\,A_{s,lado} \ \ge\ \frac{A_{s,susp,tot}}{5}
\qquad\qquad
A_{s,susp,tot} = \frac{N_d}{7{,}5\,f_{yd}}
\]

---

## Seis estacas — hexágono

As estacas ficam junto aos vértices do hexágono, com pilar quadrado centrado.

\[
\tan\alpha = \frac{d}{e - \dfrac{a_p}{4}}
\qquad
R_s = \frac{N}{6\,d}\left(e - \frac{a_p}{4}\right)
\]

### Altura útil

Para \(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = e - \frac{a_p}{4}
\qquad
d_{máx} = 1{,}43\left(e - \frac{a_p}{4}\right)
\]

Bielas dispensadas dentro do intervalo.

### Armaduras

Aqui a lei dos senos dá \(\dfrac{R_s}{\text{sen}\,60^\circ} = \dfrac{R'_s}{\text{sen}\,60^\circ}\),
ou seja, \(R'_s = R_s\) — a decomposição não altera a força.

\[
A_{s,lado} = \frac{N_d}{6\,d\,f_{yd}}\left(e - \frac{a_p}{4}\right)
\qquad\text{(em cada um dos 6 lados)}
\]

\[
A_{s,malha} = 0{,}25\,A_{s,lado}
\]

---

## Seis estacas — retangular

Indicado para pilares retangulares e alongados. As forças \(R_{sx}\) e
\(R_{sy}\) são tratadas separadamente em cada direção, com as distâncias
correspondentes.

---

## Sete estacas — hexágono com uma no centro

A sétima estaca fica no centro do bloco, sob o pilar. Para
\(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = e - \frac{a_p}{4}
\qquad
d_{máx} = 1{,}43\left(e - \frac{a_p}{4}\right)
\]

A compressão nas bielas **não precisa ser verificada** se \(d\) estiver no
intervalo.

As armaduras são dispostas na direção das **diagonais**, com **cintas paralelas
aos lados**:

\[
A_{s,diag} = \frac{(1-k)\,N_d}{7\,d\,f_{yd}}\left(e - \frac{a_p}{4}\right)
\qquad
A_{s,cinta} = \frac{k\,N_d}{7\,d\,f_{yd}}\left(e - \frac{a_p}{4}\right)
\]

com

\[
\frac{2}{5} \le k \le \frac{3}{5}
\]

O parâmetro \(k\) reparte a força entre diagonais e cintas — é uma escolha de
projeto dentro dessa faixa.

---

## Armaduras complementares

Valem para **qualquer número de estacas**: as prescrições da NBR 6118 para
armaduras em malha e de suspensão são gerais.

### Armadura em malha

A NBR 6118 (22.7.4.1.2): *"para controlar a fissuração, deve ser prevista
armadura positiva adicional, independentemente da armadura principal de flexão,
em malha uniformemente distribuída em duas direções ortogonais correspondente a
**20 % do total das forças de tração em cada uma delas**."*

### Armadura de suspensão

A NBR 6118 (22.7.4.1.3): *"se for prevista armadura de distribuição para mais
de **25 % dos esforços totais** ou se o espaçamento entre estacas for maior que
**três vezes a altura do bloco**, deve ser prevista armadura de suspensão para
a parcela de carga a ser equilibrada."*

De modo geral, independentemente disso, pode-se prescrever:

\[
A_{s,susp,tot} = \frac{N_d}{1{,}5\,n_e\,f_{yd}}
\]

com \(n_e\) o número de estacas. A armadura por face é o total dividido pelo
número de faces do bloco.

!!! info "Para que ela serve"

    A armadura de suspensão evita fissuras nas regiões **entre as estacas**.
    Elas podem surgir porque se formam bielas comprimidas que transferem parte
    da carga do pilar para as regiões **inferiores** do bloco, entre as estacas,
    e que se apoiam nas armaduras paralelas aos lados.

    Disso nascem trações que precisam ser **suspensas** para as regiões
    superiores do bloco, de onde caminham para as estacas.

### Armadura superior

\[
A_{s,sup} = 0{,}2\,A_s
\qquad\text{(em cada direção da malha)}
\]

### Armadura de pele

Em cada face vertical lateral, em forma de estribos ou barras horizontais:

\[
A_{sp,face} = \frac{1}{8}\,A_{s,total}
\]

com \(A_{s,total}\) a armadura principal total — \(3A_{s,lado}\) no bloco de
três estacas, \(4A_{s,lado}\) no de quatro, e assim por diante.

**Espaçamento:** \(s \le \min\left(\dfrac{d}{3};\ 20\ \text{cm}\right)\), e
\(s \ge 8\) cm por recomendação prática.

---

## Método do CEB-70

Alternativa ao Método das Bielas para blocos rígidos, semelhante ao
procedimento das sapatas. A altura do bloco fica limitada por

\[
\frac{2}{3}c \le h \le 2c
\qquad\text{e}\qquad
d \ge \ell_{b,\phi,pil}
\]

onde \(c\) é a distância da face do pilar ao eixo da estaca mais afastada.

O método calcula a **armadura principal para a flexão**, determinada em relação
a uma seção de referência \(S_1\) posicionada **internamente ao pilar**, a
\(0{,}15\,a_p\) da face — e verifica a resistência do bloco às forças
cortantes.

!!! note "O PCO não implementa o CEB-70"

    Os modelos oferecidos são [Blévot](blevot.md) e [MBT](mbt.md). O CEB-70
    consta aqui como referência, por ser um dos métodos historicamente mais
    utilizados no Brasil e aceito pela norma.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - Todas as expressões supõem **pilar centrado** e **estacas igualmente
      espaçadas** do centro do pilar. Com momentos ou excentricidade, a
      formulação pura não se aplica.
    - Supõem **pilar de seção quadrada** — retangular entra pelo equivalente
      \(a_{p,eq} = \sqrt{a_p b_p}\), o que é aproximação tanto pior quanto mais
      alongado for o pilar.
    - Os intervalos de altura útil vêm de \(45^\circ \le \alpha \le 55^\circ\)
      (Machado) ou \(40^\circ \le \alpha \le 55^\circ\) (Blévot). **Fora deles,
      a dispensa da verificação das bielas não vale**, e elas precisam ser
      verificadas explicitamente.
    - Os limites \(\sigma_{lim}\) são os de **Blévot**, não os da NBR 6118
      vigente. Para verificar contra a norma atual, use o
      [MBT](mbt.md#os-dois-limites-nodais-e-eles-sao-diferentes).
    - Os ensaios de Blévot cobriram blocos de até **seis estacas**. As
      expressões para sete estacas e para arranjos compostos extrapolam essa
      base experimental.

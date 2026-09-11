# Blévot & Frémy

O método clássico de bloco rígido, também chamado **Método das Bielas**. Ele
admite uma **treliça** como modelo resistente no interior do bloco: plana nos
blocos sobre duas estacas, espacial nos demais. As barras comprimidas são
resistidas pelo concreto — as **bielas** — e as tracionadas por armadura — os
**tirantes**.

É o método simplificado mais empregado no Brasil, por três razões: tem amplo
suporte experimental — **116 ensaios de Blévot & Frémy**, entre outros —, tem
tradição consolidada aqui e na Europa, e o modelo de treliça é intuitivo.

## Quando o método é recomendado

- O carregamento é **quase centrado**. Pode ser empregado para carregamento não
  centrado admitindo que todas as estacas estão com a maior carga — o que tende
  a tornar o dimensionamento antieconômico.
- Todas as estacas estão **igualmente espaçadas** do centro do pilar.

---

## O modelo, no bloco sobre duas estacas

A carga \(N\) chega pelo pilar e desce por duas bielas inclinadas até as
estacas. Do polígono de forças saem a tração na base e a compressão na biela.

A inclinação da biela é o parâmetro que governa tudo:

\[
\tan\alpha = \frac{d}{\dfrac{e}{2} - \dfrac{a_p}{4}}
\]

onde \(d\) é a altura útil, \(e\) a distância entre eixos de estacas e \(a_p\) a
dimensão do pilar na direção de \(e\). O termo \(a_p/4\) é o centro da
**quadrícula** do pilar: divide-se o pilar em tantas partes quantas forem as
estacas, e a carga parte do centro geométrico de cada quadrícula.

Daí:

\[
R_s = \frac{N}{8}\cdot\frac{2e - a_p}{d}
\qquad\qquad
R_c = \frac{N}{2\sin\alpha}
\]

\(R_s\) é a força de tração no tirante e \(R_c\) a compressão na biela.

!!! info "A forma geral"

    Para qualquer número de estacas, a força no tirante é

    \[
    F_{td} = N_{d,estaca}\cdot\cot\theta
    \qquad\text{com}\qquad
    \cot\theta = \frac{L_{proj}}{d}
    \]

    onde \(L_{proj}\) é a projeção horizontal da biela — a distância do centro
    da quadrícula de carga ao eixo da estaca. Num bloco sobre quatro estacas
    simétrico, \(L_{proj} = \left(\dfrac{\ell}{2} - \dfrac{a_p}{4}\right)\sqrt{2}\).

    Em blocos sobre **três ou mais** estacas, decompõe-se \(F_{td}\) nas
    direções das armaduras.

!!! tip "As fórmulas de cada arranjo"

    Este capítulo desenvolve o bloco sobre duas estacas, que é onde a geometria
    aparece mais clara. As expressões fechadas para **três a sete estacas** —
    com os respectivos intervalos de altura útil, limites de tensão e armaduras
    — estão em [Fórmulas por arranjo](arranjos.md).

---

## Altura útil

As bielas comprimidas **não apresentam risco de ruptura por punção** desde que
a inclinação fique na faixa ensaiada:

\[
40^\circ \le \alpha \le 55^\circ
\]

o que delimita a altura útil em

\[
0{,}419\left(e - \frac{a_p}{2}\right) \;\le\; d \;\le\; 0{,}714\left(e - \frac{a_p}{2}\right)
\]

Machado (1985) recomenda a faixa mais estreita \(45^\circ \le \alpha \le
55^\circ\), resultando \(d_{min} = 0{,}5\left(e - a_p/2\right)\) e
\(d_{máx} = 0{,}71\left(e - a_p/2\right)\).

!!! warning "A altura tem ainda um segundo condicionante"

    A NBR 6118 (22.7.4.1.4) prescreve que **o bloco deve ter altura suficiente
    para permitir a ancoragem da armadura de arranque dos pilares**:

    \[
    d > \ell_{b,\phi,pil}
    \]

    Em bloco baixo com pilar muito armado, é esta condição que governa — não a
    inclinação da biela.

A altura total é \(h = d + d'\), com \(d' \ge \max(5\ \text{cm};\ a_{est}/5)\),
onde \(a_{est} = \dfrac{\sqrt{\pi}}{2}\,\phi_e\) é o lado da estaca quadrada de
área equivalente à circular.

---

## Verificação das bielas

A área da biela **varia ao longo da altura**, e por isso verificam-se as duas
seções extremas — junto ao pilar e junto à estaca:

\[
A_b = \frac{A_p}{2}\sin\alpha \quad \text{(no pilar)}
\qquad
A_b = A_e \sin\alpha \quad \text{(na estaca)}
\]

Com \(R_{cd} = N_d/(2\sin\alpha)\), as tensões resultam:

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p \sin^2\alpha}
\qquad\qquad
\sigma_{cd,b,est} = \frac{N_d}{2\,A_e \sin^2\alpha}
\]

O \(\sin^2\alpha\) aparece duas vezes pela mesma razão: uma projeção converte a
força para a direção da biela, a outra converte a área.

### O limite, e o coeficiente KR

\[
\sigma_{cd,b,lim} = \alpha_{lim}\,K_R\,f_{cd}
\]

| Nº de estacas | \(\alpha_{lim}\) |
| :-: | --: |
| 2 | 1,4 |
| 3 | 1,75 |
| 4 ou mais | 2,1 |

O limite **cresce com o número de estacas** por causa do confinamento: quanto
mais estacas, mais confinado o concreto na região nodal, e maior a tensão que
ele suporta.

!!! info "O que é o KR"

    \(K_R\) fica entre **0,90 e 0,95** e é o coeficiente que leva em
    consideração a **perda de resistência do concreto ao longo do tempo devida
    a cargas permanentes — o efeito Rüsch**.

    Ele não tem relação com a geometria do bloco nem com a armadura do tirante:
    atua só sobre o limite de tensão. Adotar 0,90 é a escolha conservadora.

!!! warning "Biela reprovada não se resolve com armadura"

    Se \(\sigma_{cd,b} > \sigma_{cd,b,lim}\), o concreto esmaga. O caminho é
    aumentar a altura do bloco, ampliar a seção do pilar ou subir o \(f_{ck}\).

---

## Armadura principal

Blévot verificou, nos ensaios, que **a força medida na armadura principal foi
15 % superior à indicada pelo cálculo teórico**. Por isso o tirante é majorado:

\[
R_s = \frac{1{,}15\,N}{8}\cdot\frac{2e - a_p}{d}
\qquad\Longrightarrow\qquad
A_s = \frac{1{,}15\,N_d\,(2e - a_p)}{8\,d\,f_{yd}}
\]

!!! info "O fator 1,15 é específico dos blocos sobre duas estacas"

    Nos blocos sobre **três ou mais** estacas esse fator não existe. Ali, em
    vez de majorar, decompõe-se \(F_{td}\) nas direções das armaduras.

    Blévot propôs o 1,15 para não obter coeficientes de segurança menores do
    que o especificado à época.

### Onde a armadura fica

A NBR 6118 (22.7.4.1.1) é explícita: a armadura de flexão **deve ser disposta
essencialmente — mais de 85 % — nas faixas definidas pelas estacas**, em
equilíbrio com as respectivas bielas. As faixas têm largura igual a **1,2 vez o
diâmetro da estaca**.

As barras devem se estender **de face a face** do bloco e terminar em **gancho
nas duas extremidades**. A ancoragem é medida **a partir das faces internas das
estacas**.

Para estimar o comprimento do bloco sobre duas estacas, com ancoragem sem
gancho e \(\alpha = 0{,}7\):

\[
\ell_{bl,2} = e - \phi_e + 2\left(0{,}7\,\ell_b + c + \phi_\ell\right)
\]

---

## Armaduras complementares

A NBR 6118 (22.7.4.1.5) torna **obrigatórias** armaduras laterais e superior em
blocos com duas ou mais estacas em uma única linha.

| Armadura | Valor |
| :-- | :-- |
| Superior | \(A_{s,sup} = 0{,}2\,A_s\) |
| Pele e estribos verticais, por face | \(\left(\dfrac{A_{sp}}{s}\right)_{min} = \left(\dfrac{A_{sw}}{s}\right)_{min} = 0{,}075\,B\) cm²/m |

com \(B\) a largura do bloco em cm.

**Espaçamentos:**

- Armadura de pele: \(s \le \min(d/3;\ 20\ \text{cm})\), e \(s \ge 8\) cm por
  recomendação prática.
- Estribos verticais **sobre as estacas**:
  \(s \le \min\left(15\ \text{cm};\ 0{,}5\,a_{est}\right)\).
- Estribos verticais nas demais posições: \(s \le 20\) cm.

---

## Bloco sobre uma estaca

Caso particular: o bloco é um **elemento de transferência**, necessário porque
a base do pilar não coincide com a área da estaca. A armadura principal resiste
ao **fendilhamento**, e é composta de estribos horizontais fechados:

\[
T = \frac{1}{4}\,P\,\frac{\phi_e - a_p}{\phi_e} \cong 0{,}25\,P
\qquad\qquad
A_s = \frac{T_d}{f_{yd}}
\]

A altura útil pode ser estimada em torno de \(1{,}0\) a \(1{,}2\,\phi_e\).

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - Vale para **bloco rígido**. Num bloco esbelto a biela não se forma de
      maneira definida e o comportamento é de flexão — ver
      [blocos flexíveis](../../pcx/blocos-flexiveis.md).
    - A faixa ensaiada é \(40^\circ < \theta < 55^\circ\), sendo recomendável
      \(\theta \ge 45^\circ\). Fora dela, o método extrapola a base
      experimental.
    - Pressupõe **carregamento quase centrado** e estacas **igualmente
      espaçadas** do centro do pilar. Com momentos atuando, as cargas nas
      estacas diferem e a formulação pura não se aplica: a prática é adotar,
      como carga vertical equivalente, a reação da estaca mais carregada
      multiplicada pelo número de estacas — simplificação conservadora.
    - Os ensaios cobriram blocos de até seis estacas. Contagens altas, pilar
      excêntrico ou vários pilares extrapolam a base experimental.
    - **Os limites de tensão de Blévot não são os da NBR 6118 vigente.** A
      revisão de 2014 introduziu limites nodais mais restritivos, e um bloco
      que passava por Blévot pode não passar por eles. Ver
      [MBT](mbt.md) e [Verificações](verificacoes.md).
    - Comparado a ensaios, o método é **ligeiramente conservador**: a razão
      entre carga de ruptura medida e prevista tem média de 1,19.

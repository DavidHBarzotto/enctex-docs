# Combinação de ações

As combinações últimas normais seguem a **NBR 8681:2003**, seção 5.1.3.1 — que
é a mesma prescrição reproduzida na Tabela 11.1 da NBR 6118.

## A combinação

Para cada ação variável testada como **principal**, monta-se um caso em que ela
entra integralmente e as demais entram reduzidas por \(\psi_0\):

\[
F_d = \sum \gamma_g F_{g,k} + \gamma_q F_{q1,k} + \gamma_q \sum \psi_{0j} F_{qj,k}
\]

com \(\gamma_f = 1{,}4\) nas combinações normais.

Cada caso é um **vetor completo** \(\{N, M_x, M_y, F_x, F_y\}\) — os cinco
componentes do esforço no pilar —, e não uma envoltória componente a
componente.

!!! info "Por que caso a caso, e não envoltória antes"

    Envelopar os esforços do pilar **antes** de resolver e resolver **uma vez
    por caso** dão o mesmo resultado quando a resposta é linear nos cinco
    componentes — que é o caso da fórmula analítica de reação em estaca, e
    também do modelo em elementos finitos, que é linear.

    Mas a lista de casos existe porque só ela permite rodar o solver **uma vez
    por caso** e envelopar as **reações**. Envelopar antes obrigaria a resolver
    com um vetor "combinado" que despreza os sinais — e sinal importa: um
    momento que alivia uma estaca sobrecarrega a oposta.

## Ação permanente favorável

Este é o ponto em que a norma exige cuidado e onde é fácil errar contra a
segurança.

Uma ação permanente — o peso próprio do bloco, sempre em compressão — pode
**aliviar** o efeito adverso de uma ação variável de sinal oposto, como uma
variável de tração. Quando isso acontece, a NBR 8681 (4.3.3.2 e Tabela 1) manda
usar

\[
\gamma_{g,inf} = 1{,}0
\]

e **não** \(\gamma_{g,sup} = 1{,}4\). Majorar em 1,4 uma ação que está
aliviando superestimaria o alívio, e isso é contra a segurança.

### Como o PCO resolve

O problema é que "favorável" **não é atributo fixo da ação**: depende do sinal
de cada verificação. O mesmo peso próprio é desfavorável para a compressão da
biela e favorável para a tração da estaca.

Em vez de decidir na entrada, o PCO testa **as duas hipóteses como casos
separados** — \(\gamma_g = 1{,}0\) e \(\gamma_g = 1{,}4\) nas permanentes — e
deixa a envoltória por componente escolher sozinha, para cada verificação, qual
das duas é a mais desfavorável.

É mais caro de calcular e dispensa o usuário de acertar na mão uma classificação
que muda de verificação para verificação.

## Peso próprio

O peso próprio do bloco entra como ação permanente, com

\[
\gamma_{concreto} = 25\ \text{kN/m}^3
\]

conforme a NBR 6120.

O PCO calcula o volume a partir do polígono real do bloco — o fecho convexo das
estacas com o balanço —, e não de um retângulo circunscrito.

## Blocos tracionados

Quando a combinação resulta em tração, o bloco muda de comportamento e o
programa trata o caso explicitamente. A distinção importa porque a estaca
tracionada não tem ponta a mobilizar e o modelo de bielas se inverte.

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - Cobre as **combinações últimas normais**. Combinações especiais, de
      construção e excepcionais (NBR 8681, 5.1.3.2 a 5.1.3.4) não estão
      contempladas.
    - Não são verificados **estados limites de serviço** — fissuração e
      deformação excessiva.
    - Os fatores \(\psi_0\) dependem da categoria de uso da ação variável, e
      são responsabilidade de quem lança as ações.
    - Ações dinâmicas, sísmicas e de impacto estão fora do escopo.

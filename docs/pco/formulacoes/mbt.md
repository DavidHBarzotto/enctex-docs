# Método das Bielas e Tirantes (MBT)

O modelo dos **Comentários Técnicos do IBRACON à NBR 6118**, também conhecido
como MBT da TQS. Ele parte da mesma ideia de Blévot — biela comprimida e
tirante tracionado — mas trata com rigor um ponto que Blévot resolve por
tabela: **onde a biela realmente nasce**.

## O problema do espraiamento

Em Blévot, o braço de alavanca interno é essencialmente a altura útil \(d\), e
a dimensão do pilar entra por um termo de correção tabelado.

O MBT olha para o nó sob o pilar. A carga não entra no bloco pela área exata do
pilar: ela **se espraia** ao penetrar no concreto, a 45°, e a área efetiva de
compressão cresce com a profundidade. A biela nasce no ponto em que a tensão
nessa área ampliada cai até o limite resistente do concreto.

Chamando de \(y\) essa profundidade de espraiamento, a área ampliada é

\[
A_{amp} = (b_{xp} + 2y)\,(b_{yp} + 2y)
\]

e o braço de alavanca interno passa a ser

\[
z = d - \frac{y}{2}
\]

## Como y é encontrado

O limite de tensão é o do concreto em nó com bielas, da NBR 6118:

\[
f_{cd1} = 0{,}85\,\alpha_{v2}\,f_{cd}
\qquad\text{com}\qquad
\alpha_{v2} = 1 - \frac{f_{ck}}{250}
\]

A tensão na biela, para um espraiamento \(y\), é

\[
\sigma = \frac{\gamma_n N_{eq}}{A_{amp}\,\sin^2\theta}
\qquad\text{com}\qquad
\theta = \arctan\!\left(\frac{z}{a_{ref}}\right)
\]

onde \(a_{ref}\) é a distância horizontal de referência da estaca ao eixo do
pilar. O programa **aumenta \(y\) progressivamente** até que \(\sigma \le
f_{cd1}\), partindo de \(0{,}2d\) e avançando em passos de \(0{,}01d\).

O \(\sin^2\theta\) aparece porque a área ampliada é horizontal e a biela é
inclinada: uma projeção converte área para a seção normal à biela, e a outra
converte a força.

## O limite de y

O espraiamento não pode crescer indefinidamente — ele está confinado pelas
dimensões do bloco:

\[
b_{xp} + 2y \le 0{,}85\,L_{x,bloco}
\qquad
b_{yp} + 2y \le 0{,}85\,L_{y,bloco}
\]

!!! info "Por que 0,85 do bloco, e não 0,4d"

    Aparece na literatura um limite de \(y \le 0{,}4d\), e ele é frequentemente
    citado como se fosse do MBT. **Não é**: esse limite vem do artigo de Santos
    e colaboradores (DELOS), que trata de outra formulação.

    O MBT da TQS/IBRACON limita o espraiamento pela **geometria do bloco** — o
    concreto só pode espraiar até onde há bloco para espraiar. O PCO segue o
    MBT, e é por isso que os dois critérios podem dar resultados diferentes num
    bloco baixo e largo.

## Blévot ou MBT?

| | Blévot & Frémy | MBT (IBRACON) |
| :-- | :-- | :-- |
| Braço de alavanca | \(\approx d\) | \(z = d - y/2\), com \(y\) calculado |
| Dimensão do pilar | Termo tabelado por arranjo | Área ampliada por espraiamento a 45° |
| Verifica a biela? | Não, à parte | **Sim, é o próprio critério de \(y\)** |
| Arranjos | Fórmula fechada para 3 a 6 | Geral |
| Respaldo | Ensaios de Blévot & Frémy | Comentários do IBRACON à NBR 6118 |

Na prática, o MBT tende a dar **braço de alavanca menor** — porque \(z < d\) —
e portanto **mais armadura de tirante** que Blévot para o mesmo bloco. A
diferença cresce em blocos com pilar pequeno e carga alta, onde o espraiamento
necessário é grande.

!!! tip "Como escolher"

    O MBT é o modelo alinhado aos Comentários do IBRACON à norma vigente, e
    embute a verificação da biela no próprio cálculo do braço de alavanca. Se
    você precisa justificar o dimensionamento contra a NBR 6118 atual, é o
    caminho mais direto.

    Blévot continua útil como referência e como conferência de ordem de
    grandeza — é o método com que a maior parte do acervo construído foi
    dimensionada.

    Calcule pelos dois. Divergência grande sinaliza bloco em que a geometria do
    nó está governando, e aí vale olhar o [modelo em elementos
    finitos](elementos-finitos.md).

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - Vale para **bloco rígido**, como Blévot.
    - A busca de \(y\) é iterativa e **satura** no limite geométrico. Quando
      satura sem que \(\sigma \le f_{cd1}\), o bloco não tem geometria
      suficiente para a carga: o caminho é aumentar a altura, a seção do pilar
      ou o \(f_{ck}\) — não a armadura.
    - O espraiamento a 45° é uma idealização. O campo de tensões real é curvo,
      e é justamente o que o modelo em elementos finitos permite conferir.
    - \(\gamma_n = 1{,}2\) é aplicado sobre a ação. Ele cobre desvio de
      execução das estacas, não substitui tolerância de projeto.

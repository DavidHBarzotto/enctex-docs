# Método das Bielas e Tirantes (MBT)

O modelo de **Santos, Marquesi & Stucchi (2015)**, publicado nos *Comentários
Técnicos e Exemplos de Aplicação da ABNT NBR 6118:2014* do IBRACON.

Ele nasceu de uma necessidade concreta: a revisão da NBR 6118 em 2014
introduziu **limites de resistência de nós e bielas** que não existiam antes, e
esses limites são inferiores aos do método de Blévot. Um bloco que passava por
Blévot podia não passar pela norma — e faltava um método que conciliasse as
duas coisas sem o conservadorismo excessivo do método de Fusco.

O MBT mistura o modelo clássico de Blévot com o **conceito de abertura de
carga** de Fusco.

---

## O problema do espraiamento

Em Blévot, a projeção vertical da biela é a altura útil \(d\), e a dimensão do
pilar entra por um termo tabelado.

O MBT olha para o nó sob o pilar. A carga não entra no bloco pela área exata do
pilar: ela **se espraia** ao penetrar no concreto, a 45°, e a área efetiva de
compressão cresce com a profundidade. A biela nasce no ponto em que a tensão
nessa área ampliada cai até o limite resistente.

Chamando de \(y\) essa profundidade, a área ampliada é

\[
A_{amp} = (a_p + 2y)\,(b_p + 2y)
\]

e o braço de alavanca interno passa a ser

\[
z = d - \frac{y}{2}
\]

!!! info "A diferença de geometria em uma frase"

    Blévot define a tangente do ângulo pela razão \(d/L_{proj}\); o MBT a define
    por \(z/L_{proj}\), com \(z = d - 0{,}5y\).

    Como \(z < d\), a biela do MBT é **mais abatida** que a de Blévot — e
    tirante mais carregado, portanto mais armadura.

A largura da biela na região do nó sai de

\[
a_{bie} = \frac{a_p}{2} + y\cos\theta
\qquad\text{ou}\qquad
a_{bie} = \frac{a_{p,amp}}{2}\,\text{sen}\,\theta
\]

---

## Os dois limites nodais, e eles são diferentes

Aqui está o ponto que mais se erra. A NBR 6118 (item 22.3.2) define limites
**distintos** conforme o tipo de nó:

\[
\sigma^{bie}_{cd,pilar} = \frac{F_{d,pilar}}{A_{amp,pilar}\,\text{sen}^2\theta} \;\le\; f_{cd1}
\]

\[
\sigma^{bie}_{cd,est} = \frac{F_{d,est}}{A_{amp,est}\,\text{sen}^2\theta} \;\le\; f_{cd3}
\]

com

\[
f_{cd1} = 0{,}85\,\alpha_{v2}\,f_{cd}
\qquad
f_{cd3} = 0{,}72\,\alpha_{v2}\,f_{cd}
\qquad
\alpha_{v2} = 1 - \frac{f_{ck}}{250}
\]

| Nó | Tipo | Forças que nele atuam | Limite |
| :-- | :-- | :-- | :-- |
| Sob o pilar | **CCC** | Só compressão | \(f_{cd1} = 0{,}85\,\alpha_{v2}f_{cd}\) |
| Sobre a estaca | **CCT** | Duas compressões e **uma tração** | \(f_{cd3} = 0{,}72\,\alpha_{v2}f_{cd}\) |

!!! warning "O nó da estaca admite 15 % menos tensão"

    É o tirante que faz a diferença: o nó sobre a estaca ancora a armadura
    tracionada, e a tração fissura o concreto na região nodal, reduzindo a
    tensão de compressão que ele suporta.

    Usar \(f_{cd1}\) nos dois nós — o erro fácil — **superestima em 18 % a
    capacidade do nó da estaca**. Num bloco em que a estaca governa, é a
    diferença entre aprovar e reprovar.

A resistência do nó sob o pilar é adotada, **a favor da segurança**, como o
valor do item 22.1 da NBR 6118 para o nó CCC, **independentemente da quantidade
de estacas**.

---

## O roteiro iterativo

Como a tensão depende de \(\text{sen}^2\theta\), e \(\theta\) depende de \(y\),
não há solução fechada. O procedimento é:

1. Adota-se um \(y\) — por exemplo, \(y = 0{,}2d\).
2. Determina-se a inclinação da biela, sendo **desejável \(\theta \ge 45^\circ\)**.
3. Verifica-se a tensão de compressão no nó sob o pilar.
4. Se ela não for igual ao limite de resistência, **itera-se \(y\)** até que a
   tensão solicitante iguale a resistente.
5. Determina-se a inclinação final da biela e as armaduras principais sobre as
   estacas.
6. Verificam-se as tensões de compressão nos nós sobre as estacas.
7. Determinam-se as armaduras de distribuição, de pele e as demais secundárias.

O PCO automatiza os passos 1 a 4: ele procura diretamente o \(y\) em que a
tensão no nó do pilar iguala \(f_{cd1}\).

### Três restrições do método

1. O **espraiamento é sempre a 45°**. O método não admite outra inclinação, e o
   programa não permite alterá-la.
2. Em blocos sobre **duas estacas**, o espraiamento ocorre **apenas no sentido
   longitudinal** do bloco.
3. A biela parte do centro da quadrícula do pilar original, **à altura \(y/2\)**.

---

## O limite de y

O espraiamento não cresce indefinidamente: está confinado pelas dimensões do
bloco.

\[
a_p + 2y \le 0{,}85\,L_{x,bloco}
\qquad
b_p + 2y \le 0{,}85\,L_{y,bloco}
\]

!!! info "Por que não 0,4d"

    Aparece na literatura um limite \(y \le 0{,}4d\), frequentemente citado
    como se fosse do MBT. **Não é**: vem de outra formulação.

    O que o MBT recomenda é controlar a **profundidade da linha neutra**, de
    modo análogo ao que se faz em flexão para garantir capacidade de deformação
    plástica. O critério indicado nos estudos preliminares é

    \[
    \frac{y}{d} \le 0{,}3
    \]

    A hipótese do método é que o ELU é alcançado quando a resistência do nó
    superior **e** a força resistente da armadura se esgotam ao mesmo tempo — e
    isso só é adequado se o nó inferior sobre a estaca, ou a biela, não
    esgotarem antes as suas resistências.

---

## Blévot ou MBT?

| | Blévot & Frémy | MBT |
| :-- | :-- | :-- |
| Tangente do ângulo | \(d / L_{proj}\) | \(z / L_{proj}\), com \(z = d - 0{,}5y\) |
| Dimensão do pilar | Quadrícula \(a_p/4\) | Área ampliada por espraiamento a 45° |
| Limite no nó do pilar | \(\alpha_{lim} K_R f_{cd}\) — 1,4 a 2,1 conforme o nº de estacas | \(f_{cd1} = 0{,}85\,\alpha_{v2}f_{cd}\) |
| Limite no nó da estaca | O mesmo | \(f_{cd3} = 0{,}72\,\alpha_{v2}f_{cd}\) |
| Armadura | Menor; com majoração de 15 % em blocos de 2 estacas | **Maior**, em geral |
| Respaldo | 116 ensaios próprios | Comentários do IBRACON à NBR 6118 |

!!! tip "Como escolher"

    O MBT é o modelo alinhado aos Comentários do IBRACON à norma vigente, e
    embute a verificação do nó no próprio cálculo do braço de alavanca. Se você
    precisa justificar o dimensionamento contra a NBR 6118 atual, é o caminho
    direto.

    Blévot continua útil como referência e conferência de ordem de grandeza — é
    o método com que a maior parte do acervo construído foi dimensionada.

    **O MBT produz mais armadura que Blévot na maioria dos casos.** A exceção
    pode ocorrer justamente em blocos sobre duas estacas, por causa do fator
    1,15 que Blévot aplica ali.

### Comparação com ensaios

A razão entre a carga de ruptura medida e a prevista, no conjunto de ensaios
analisados por Santos et al.:

| Método | Média | Coef. de variação |
| :-- | --: | --: |
| Blévot | 1,19 | 0,21 |
| MBT (Santos et al.) | 1,21 a 1,23 | 0,19 a 0,20 |
| Fusco | 1,49 | 0,17 |

O MBT tem nível de segurança **equivalente ao de Blévot**, com dispersão
ligeiramente menor. Fusco é bem mais conservador, por causa do limite de tensão
vertical na região da estaca.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - Vale para **bloco rígido**, como Blévot.
    - A busca de \(y\) **satura** no limite geométrico. Quando satura sem que a
      tensão caia ao limite, o bloco não tem geometria para a carga: o caminho
      é aumentar a altura, a seção do pilar ou o \(f_{ck}\) — não a armadura.
    - O espraiamento a 45° é uma **idealização**. O campo de tensões real é
      curvo, e é o que o modelo em [elementos finitos](elementos-finitos.md)
      permite conferir.
    - Os limites de nós e bielas da NBR 6118 foram estabelecidos para
      **elementos planos** e **não consideram o confinamento** que existe num
      bloco tridimensional. Por isso são conservadores aqui — Blévot observou
      bielas rompendo com tensão superior a 150 % da resistência média do
      concreto, efeito do confinamento gerado pelo detalhamento em gaiola.
    - A partir dessa observação, Santos et al. propõem **eliminar o fator
      \(\alpha_{v2}\)** na verificação do nó superior para blocos com quatro ou
      mais estacas. O PCO não adota essa proposta: mantém \(\alpha_{v2}\), que
      é o texto normativo.

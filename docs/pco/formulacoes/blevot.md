# Blévot & Frémy

O método clássico de bloco rígido. A carga do pilar desce por **bielas
comprimidas** de concreto até as estacas, e o equilíbrio horizontal é fechado
por um **tirante** de aço na base do bloco.

## O modelo

Considere um bloco sobre estacas, com o pilar centrado. A carga \(N\) chega
pelo pilar e precisa alcançar as estacas, que estão afastadas do eixo. A
transferência se dá por bielas inclinadas; a componente horizontal dessas
bielas é o que o tirante equilibra.

Quanto **mais alto** o bloco, mais íngreme a biela e menor a componente
horizontal — logo, menos armadura. Quanto **mais afastadas** as estacas, mais
deitada a biela e maior o tirante. É essa geometria que as fórmulas abaixo
traduzem.

## Coeficiente adicional γn

Antes das fórmulas, um fator que atravessa todas elas:

\[
\gamma_n = 1{,}2
\]

É o **coeficiente adicional ponderador das ações** dos Comentários do IBRACON à
NBR 6118, aplicado sobre a força do tirante. Ele cobre a incerteza de
posicionamento das estacas em obra — uma estaca executada fora do eixo altera o
braço de alavanca e, com ele, a força no tirante.

O PCO aplica \(\gamma_n\) **tanto em Blévot quanto no MBT**.

## Fórmulas por arranjo

Para os arranjos clássicos, a armadura principal de tração por lado do polígono
de estacas sai de fórmula fechada. Em todas: \(N_{eq}\) é a carga equivalente
no pilar, \(d\) a altura útil, \(e\) o espaçamento entre eixos de estacas e
\(a_p\) a dimensão do pilar na direção considerada.

=== "3 estacas"

    \[
    R_{st} = \gamma_n \frac{\sqrt{3}\,N_{eq}}{27\,d}\left(e\sqrt{3} - 0{,}9\,a_p\right)
    \]

    Distribuída em **3 lados** do triângulo.

=== "4 estacas"

    \[
    R_{st} = \gamma_n \frac{N_{eq}}{16\,d}\left(2e - a_p\right)
    \]

    Distribuída em **4 lados** do quadrado.

=== "5 estacas (quadrado + centro)"

    \[
    R_{st} = \gamma_n \frac{\tfrac{4}{5}N_{eq}}{16\,d}\left(2e - a_p\right)
    \]

    Distribuída em **4 lados**. O fator \(4/5\) reconhece que a estaca central
    recebe a sua parcela **sem gerar tirante** — ela está sob o pilar, e a
    biela que a alcança é praticamente vertical.

=== "5 estacas (pentagonal)"

    \[
    R_{st} = \gamma_n \frac{0{,}725\,N_{eq}}{6\,d}\left(e - \frac{a_p}{3{,}4}\right)
    \]

    Distribuída em **5 lados**.

=== "6 estacas (hexagonal)"

    \[
    R_{st} = \gamma_n \frac{N_{eq}}{6\,d}\left(e - \frac{a_p}{4}\right)
    \]

    Distribuída em **6 lados**.

A armadura por lado é então

\[
A_{s,lado} = \frac{R_{st}}{f_{yd}}
\]

## Arranjos fora da tabela

Nem todo bloco cai num arranjo clássico — bloco de duas estacas, arranjos
retangulares, contagens altas, mais de um pilar. Nesses casos o PCO **não
inventa uma fórmula**: monta o modelo de bielas e tirantes explicitamente e
projeta as forças.

O procedimento é o seguinte: com a reação de cada estaca conhecida, a biela que
a alcança tem inclinação \(\theta\) dada pelo braço de alavanca interno \(z\) e
pela distância horizontal da estaca ao eixo do pilar. A componente horizontal
dessa biela é a força de tirante, decomposta nas direções X e Y.

!!! info "Bloco de duas estacas: um tirante só"

    Com duas estacas há **um único tirante**, e ele é dimensionado pela reação
    da estaca **mais carregada** — não pela soma das duas.

    Somar dobraria o resultado sem razão física: as duas bielas partem do mesmo
    pilar em sentidos opostos, e a tração no tirante é o que equilibra **uma**
    delas.

## Carga equivalente do pilar

Quando o pilar não é retangular — circular, I/H, U, vazado —, as fórmulas acima
precisam de um \(a_p\) equivalente. O PCO calcula a dimensão equivalente da
seção, preservando a área de contato que define o nó de compressão sob o pilar.

Com **mais de um pilar** no bloco, a resultante das ações é composta e o modelo
de bielas parte dela.

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - Blévot & Frémy vale para **bloco rígido**. A hipótese de biela exige que
      o bloco seja alto o bastante para a biela se formar; num bloco esbelto o
      comportamento é de flexão, e o método deixa de representá-lo. Ver
      [blocos flexíveis](../../pcx/blocos-flexiveis.md) no PCX.
    - As fórmulas fechadas valem para os **arranjos tabelados** (3 a 6
      estacas, nas configurações clássicas). Fora deles o programa usa a
      projeção do modelo de bielas, que é mais geral mas não tem o respaldo
      experimental das fórmulas originais.
    - O método **não verifica** por si só a compressão nas bielas nem os nós.
      Essas verificações são feitas à parte — ver
      [Verificações](verificacoes.md).
    - Os ensaios de Blévot & Frémy cobriram blocos de até seis estacas, com
      pilar centrado. Blocos com muitas estacas, pilar excêntrico ou vários
      pilares extrapolam a base experimental.

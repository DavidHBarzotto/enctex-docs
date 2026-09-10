# Blocos flexíveis

O recurso exclusivo do PCX. Quando o bloco não atende à condição de rigidez, a
biela não se forma de maneira bem definida e o comportamento real é de
**flexão**: o bloco trabalha como viga apoiada nas estacas.

A base é o trabalho de **Silva (2021)**, publicado na REEC.

## Quando usar

O critério da NBR 6118 compara a altura do bloco com a distância da face do
pilar ao eixo da estaca. Bloco que não atende é flexível.

!!! warning "Calcular bloco flexível por Blévot subestima a armadura"

    Não é uma diferença de refinamento: o modelo de bielas supõe um mecanismo
    resistente que **não existe** naquele bloco. A armadura que ele devolve é a
    de um tirante que não é o que trabalha.

    Na fronteira, calcule dos dois jeitos e adote o maior.

## Os dois modelos

| Modelo | Hipótese |
| :-- | :-- |
| **Viga biapoiada** | As estacas são os apoios; o pilar aplica a carga no vão |
| **Viga engastada e livre** | Balanço a partir do pilar |

!!! info "Com 3 ou mais estacas, vira grelha"

    A viga biapoiada é unidimensional, e um bloco com três ou mais estacas não
    é. Nesses casos o programa passa automaticamente a uma **análise de
    grelha** — uma grade de nós que distribui a flexão nas duas direções.

    A escolha é automática porque a alternativa seria pedir ao usuário que
    decidisse algo que a geometria já determina.

## Armadura de flexão

Dimensionamento à flexão simples de seção retangular, conforme a NBR 6118, com
\(\alpha_c = 0{,}85\) e \(\lambda = 0{,}8\) para \(f_{ck} \le 50\) MPa.

A posição da linha neutra sai da equação de equilíbrio:

\[
0{,}272\,f_{cd}\,b\,x^2 - 0{,}68\,f_{cd}\,b\,d\,x + M_{sd} = 0
\]

e a armadura, de

\[
A_s = \frac{0{,}68\,f_{cd}\,b\,x}{f_{yd}}
\]

### Limite de ductilidade

\[
\frac{x}{d} \le 0{,}45 \qquad (f_{ck} \le 50\ \text{MPa})
\]

Acima disso a seção rompe sem aviso — o concreto esmaga antes de o aço escoar.
O programa **avisa** e trunca em 0,45, mas o aviso é para ser lido: a solução é
aumentar a altura, o \(f_{ck}\) ou usar armadura dupla.

!!! warning "Momento acima do resistido pela seção"

    Quando o discriminante da equação fica negativo, nem com \(x = 0{,}45d\) a
    seção resiste ao momento. O programa sinaliza, e o caminho é o mesmo:
    altura, \(f_{ck}\) ou armadura dupla.

### Armadura mínima

\[
\rho_{min} =
\begin{cases}
0{,}0015 & f_{ck} \le 30\ \text{MPa} \\[4pt]
0{,}0015 + \dfrac{f_{ck} - 30}{50}\,0{,}0005 & f_{ck} > 30\ \text{MPa}
\end{cases}
\]

com \(A_{s,min} = \rho_{min}\,b\,h\). Quando ela governa, o programa avisa.

## Armadura transversal

O critério de cisalhamento é o de viga (Silva 2021, Eq. 25/34). A parcela
resistida pelo concreto é

\[
V_c = 0{,}6\,b\,d\,f_{ctd}
\qquad\text{com}\qquad
f_{ctd} = 0{,}15\,f_{ck}^{2/3}
\]

Se a reação da estaca mais carregada não supera \(V_c\), adota-se estribo
**mínimo construtivo**, com espaçamento de 20 cm.

Se supera, dimensiona-se

\[
\frac{A_{sw}}{s} = \frac{V - V_c}{0{,}9\,d\,f_{yd}}
\]

e o espaçamento adotado fica entre **5 e 20 cm**.

!!! info "A reação mais carregada, não a soma"

    O cisalhamento é verificado contra a reação da estaca **mais carregada**.
    É ela que define a seção crítica, junto ao apoio mais solicitado.

## Bloco flexível tracionado

O PCX trata **Bloco Flexível (Arrancamento/Tração)** explicitamente. O
mecanismo se inverte: a armadura de flexão passa para a face oposta, e a
verificação de ancoragem ganha peso — em arrancamento, é a ancoragem que
segura.

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - A modelagem como viga é uma **simplificação de um sólido**. Ela
      representa bem o bloco esbelto, em que a flexão de fato governa; num
      bloco na fronteira, nem viga nem biela descrevem o comportamento com
      precisão, e a prática defensável é adotar a envoltória dos dois.
    - A análise de **grelha** distribui a flexão nas duas direções supondo
      comportamento linear elástico. Não há fissuração nem redistribuição
      plástica.
    - \(x/d \le 0{,}45\) e a armadura mínima valem para \(f_{ck} \le 50\) MPa.
      Concretos de resistência mais alta têm parâmetros diferentes, que esta
      implementação não cobre.
    - O critério \(V_c = 0{,}6\,b\,d\,f_{ctd}\) vem de Silva (2021), não da
      formulação geral de cisalhamento da NBR 6118. É específico do bloco
      calculado como viga.
    - **Fendilhamento e cintamento** não são verificados, aqui como no bloco
      rígido.
    - Fissuração e deformação em serviço não são verificadas.

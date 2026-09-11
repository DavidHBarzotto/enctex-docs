# Blocos flexíveis

O recurso exclusivo do PCX. Quando o bloco não atende à condição de rigidez, a
biela não se forma de maneira bem definida e o comportamento real é de
**flexão**: o bloco trabalha como viga apoiada nas estacas.

A base é **Silva (2021)**, publicado na REEC, que comparou os três modelos
estruturais — bielas e tirantes, viga biapoiada e viga engastada e livre — por
análise de confiabilidade.

---

## Quando usar

O critério da NBR 6118 é \(h \ge (A - a_p)/3\) na direção considerada, ou,
equivalentemente, **ângulo de biela \(\ge 45^\circ\)**. Bloco que não atende é
flexível. Ver
[Verificações](../pco/formulacoes/verificacoes.md#rigidez-do-bloco).

!!! warning "Calcular bloco flexível por Blévot subestima a armadura"

    Não é diferença de refinamento: o modelo de bielas supõe um mecanismo
    resistente que **não existe** naquele bloco. A armadura que ele devolve é a
    de um tirante que não é o que trabalha.

---

## Os dois modelos

| Modelo | Hipótese |
| :-- | :-- |
| **Viga biapoiada** | As estacas são os apoios; o pilar aplica a carga no vão |
| **Viga engastada e livre** | Balanço a partir do pilar |

O modelo de viga **engastada e livre** permite que ocorram deslocamentos no
bloco — a estaca ou o bloco podem recalcar —, mas exige que o **pilar se
mantenha indeslocável**, ou apresente recalques uniformes junto ao bloco e às
estacas.

!!! info "Com 3 ou mais estacas, vira grelha"

    A viga biapoiada é unidimensional, e um bloco com três ou mais estacas não
    é. Nesses casos o programa passa automaticamente a uma **análise de
    grelha**, que distribui a flexão nas duas direções.

---

## Momento atuante

=== "Viga biapoiada"

    \[
    M_{Sd} = \frac{P\,L}{4}
    \]

=== "Viga engastada e livre"

    \[
    M_{Sd} = \frac{P}{2}\left(\frac{L}{2} - \left(\frac{b}{2} - 0{,}15\,b\right)\right)
    \]

com \(L\) a distância entre eixos de estacas e \(b\) a dimensão do pilar.

!!! info "A distância de 15 % da face do pilar"

    Vem de Alonso (2010), e depende da **inércia do pilar**: recomenda-se
    \(0{,}15\,b\) para pilares de grande inércia (\(b \ge 60\) cm) e
    \(0{,}5\,b\) para pilares de pequena inércia.

    Ela existe porque o engastamento não ocorre na face do pilar, mas um pouco
    adentro dele — e quanto mais rígido o pilar, mais perto da face.

---

## Armadura de flexão

Dimensionamento à flexão simples de seção retangular conforme a NBR 6118, com
\(\alpha_c = 0{,}85\) e \(\lambda = 0{,}8\) para \(f_{ck} \le 50\) MPa.

A posição da linha neutra sai do equilíbrio:

\[
0{,}272\,f_{cd}\,b\,x^2 - 0{,}68\,f_{cd}\,b\,d\,x + M_{Sd} = 0
\]

e a armadura de

\[
A_s = \frac{0{,}68\,f_{cd}\,b\,x}{f_{yd}}
\]

O momento resistente correspondente pode ser escrito diretamente em função da
armadura:

\[
M_{Rd} = A_s f_{yd}\left(d - \frac{A_s f_{yd}}{1{,}7\,b\,f_{cd}}\right)
\]

### Limite de ductilidade

\[
\frac{x}{d} \le 0{,}45 \qquad (f_{ck} \le 50\ \text{MPa})
\]

Acima disso a seção rompe sem aviso — o concreto esmaga antes de o aço escoar.
O programa **avisa** e trunca em 0,45, mas o aviso é para ser lido: a solução é
aumentar a altura, o \(f_{ck}\) ou usar armadura dupla.

!!! warning "Momento acima do resistido pela seção"

    Quando o discriminante fica negativo, nem com \(x = 0{,}45d\) a seção
    resiste. O caminho é o mesmo: altura, \(f_{ck}\) ou armadura dupla.

    Para ângulos de biela abaixo de 35°, Silva (2021) constatou que o concreto
    atinge o **domínio 4** e a armadura dupla passa a ser necessária.

### Armadura mínima

\[
\rho_{min} =
\begin{cases}
0{,}0015 & f_{ck} \le 30\ \text{MPa} \\[4pt]
0{,}0015 + \dfrac{f_{ck} - 30}{50}\,0{,}0005 & f_{ck} > 30\ \text{MPa}
\end{cases}
\]

com \(A_{s,min} = \rho_{min}\,b\,h\). Quando ela governa, o programa avisa.

---

## Verificação da biela

Mesmo no modelo de viga, a compressão do concreto tem de ser verificada:

\[
R_1 = 0{,}27\,\alpha_{v2}\,f_{cd}\,b\,d
\qquad\qquad
S_1 = \frac{P}{2}
\]

---

## Armadura transversal

Critério de cisalhamento de viga. A resistência é a soma das parcelas do
concreto e do aço:

\[
V_{Rd} = 0{,}6\,b\,d\,f_{ctd} \;+\; \frac{A_{sw}}{s}\,0{,}9\,d\,f_{yd}
\]

com \(f_{ctd} = 0{,}15\,f_{ck}^{2/3}\).

Se a reação da estaca mais carregada não supera a parcela do concreto,
adota-se estribo **mínimo construtivo**, com espaçamento de 20 cm. Se supera,
dimensiona-se

\[
\frac{A_{sw}}{s} = \frac{V - V_c}{0{,}9\,d\,f_{yd}}
\]

e o espaçamento adotado fica entre **5 e 20 cm**.

!!! info "A reação mais carregada, não a soma"

    O cisalhamento é verificado contra a reação da estaca **mais carregada** —
    é ela que define a seção crítica, junto ao apoio mais solicitado.

---

## Bloco flexível tracionado

O PCX trata **Bloco Flexível (Arrancamento/Tração)** explicitamente. O
mecanismo se inverte: a armadura de flexão passa para a face oposta, e a
verificação de ancoragem ganha peso — em arrancamento, é a ancoragem que
segura.

---

## O que a análise de confiabilidade mostrou

Silva (2021) aplicou Monte Carlo com um milhão de simulações a um bloco de duas
estacas, variando a inclinação da biela de 30° a 60°, e comparou os três
modelos. Os resultados orientam a escolha:

| Constatação | Consequência prática |
| :-- | :-- |
| A **viga biapoiada** gera taxas de armadura mais de 30 % superiores às do modelo de bielas | É o modelo menos recomendado: o espaçamento entre barras fica reduzido e favorece fissuração |
| A **viga engastada e livre** resulta em armadura próxima à de bielas e tirantes — diferença inferior a 6 % para \(\theta > 40^\circ\) | É a alternativa flexível mais econômica |
| O modelo de **bielas e tirantes** dá a menor armadura, mas só atinge \(\beta \ge 3{,}8\) com \(\theta > 60^\circ\) (fck 20) ou \(\theta > 45^\circ\) (fck 30) | Satisfazer o critério de bloco rígido **não garante** confiabilidade adequada |
| A Eq. do tirante de bielas e tirantes independe do \(f_{ck}\) | Incoerência do modelo: aumentar o \(f_{ck}\) deveria reduzir a armadura |

!!! warning validade "Não dimensione abaixo de 35°"

    Pela perda significativa de rigidez ao reduzir a altura do bloco,
    orienta-se **não dimensionar blocos com ângulo de biela inferior a 35°**,
    mesmo utilizando modelos flexíveis — pelo aumento dos deslocamentos e pela
    possibilidade de gerar efeitos de segunda ordem.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - A modelagem como viga é uma **simplificação de um sólido**. Representa
      bem o bloco esbelto; num bloco na fronteira, nem viga nem biela descrevem
      o comportamento com precisão, e a prática defensável é adotar a
      envoltória dos dois.
    - A análise de **grelha** distribui a flexão nas duas direções supondo
      comportamento linear elástico. Não há fissuração nem redistribuição
      plástica.
    - \(x/d \le 0{,}45\) e a armadura mínima valem para \(f_{ck} \le 50\) MPa.
    - A **função de falha por deformação excessiva não foi verificada** por
      Silva (2021): não há na literatura estimativa de deformação máxima
      permitida para blocos. Como modelos flexíveis são mais suscetíveis a
      deformação, essa é uma lacuna reconhecida.
    - A **ancoragem da armadura do pilar** dentro do bloco não é verificada
      aqui — e é um dos principais fatores que inviabilizam blocos flexíveis na
      prática.
    - Relações vão/altura inferiores a 2 (ângulos acima de 50°) configuram
      **viga-parede**, e o empenamento da seção não é computado.
    - **Fendilhamento e cintamento** não são verificados, aqui como no bloco
      rígido.

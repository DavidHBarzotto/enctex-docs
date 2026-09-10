# Capacidade de carga

O SPX calcula a capacidade de carga por três métodos semiempíricos brasileiros,
em paralelo, para **cada cota possível de ponta**. O resultado é uma tabela por
profundidade, e não um número único.

Todos os três partem da mesma decomposição:

\[
R_{total}(z) = R_p(z) + R_l(z)
\]

onde \(R_p\) é a resistência de ponta e \(R_l\) a resistência acumulada por
atrito lateral, ambos em kN:

\[
R_p = r_p \cdot A_p
\qquad\qquad
R_l(z) = \sum_{i=1}^{z} r_{l,i} \cdot U \cdot \Delta L_i
\]

com \(A_p = \pi D^2/4\) a área da ponta, \(U = \pi D\) o perímetro e
\(\Delta L_i = 1\) m, já que a sondagem é discretizada metro a metro.

O que distingue os métodos é **como se obtém \(r_p\) e \(r_l\) a partir do
\(N_{SPT}\)** — e, principalmente, **qual \(N\) se usa na ponta**.

---

## Aoki-Velloso

### Formulação

\[
r_p = \frac{K \cdot N_p}{F_1}
\qquad\qquad
r_l = \frac{\alpha \cdot K \cdot N_l}{F_2}
\]

| Símbolo | Significado | Fonte |
| :-- | :-- | :-- |
| \(K\) | Coeficiente do solo, em kPa | [Tabela de \(K\) e \(\alpha\)](tabelas.md#aoki-velloso) |
| \(\alpha\) | Razão atrito/ponta do solo | idem |
| \(F_1, F_2\) | Fatores de execução da estaca | [Tabela de \(F_1\) e \(F_2\)](tabelas.md#fatores-de-execucao) |
| \(N_p\) | \(N_{SPT}\) na ponta | Ver abaixo |
| \(N_l\) | \(N_{SPT}\) da camada, no fuste | Camada corrente |

### Qual N vai na ponta

!!! info "Decisão de implementação"

    Para a ponta na cota \(i\), o SPX usa o \(N_{SPT}\) da camada
    **imediatamente abaixo** — o índice \(i+1\). A camada que resiste à ponta é
    a que está sob ela, não a que a estaca acabou de atravessar.

    Na última cota da sondagem, onde não há camada abaixo, o último valor é
    repetido. Isso torna o resultado na cota final **otimista se o perfil
    estava melhorando** — motivo para não dimensionar com a ponta no último
    metro investigado.

O atrito lateral, ao contrário, usa o \(N\) da própria camada — índice \(i\) —,
porque é ela que envolve o fuste naquele trecho.

---

## Décourt-Quaresma

### Formulação

\[
r_p = \alpha \cdot C \cdot N_p
\qquad\qquad
r_l = 10\,\beta\left(\frac{N_l}{3} + 1\right)
\]

com \(r_l\) em kPa. Os coeficientes \(\alpha\) e \(\beta\) dependem
simultaneamente do **tipo de estaca** e do **tipo de solo**, e \(C\) só do solo.

!!! note "Só o dígito dominante"

    Para escolher \(\alpha\) e \(\beta\), o método usa apenas o **primeiro
    dígito** do código de solo: `123` (areia siltoargilosa) é tratado como
    areia. É uma simplificação do próprio método, que classifica em três
    famílias apenas.

### O N de ponta é uma média de três

\[
N_p = \frac{N_{i-1} + N_i + N_{i+1}}{3}
\]

a média entre a camada de apoio e as imediatamente acima e abaixo. Isso torna
o método **menos sensível a um golpe isolado** do que Aoki-Velloso — uma lente
resistente de um metro não é capaz, sozinha, de sustentar a ponta.

Nas duas últimas cotas, onde faltam camadas abaixo, o último valor é repetido
para completar a média.

### Fatores de segurança

Décourt-Quaresma **não** usa fator global. Ele separa as parcelas, porque a
confiabilidade delas é diferente:

\[
P_a = \frac{R_p}{4} + \frac{R_l}{1{,}3}
\]

A ponta leva 4 e o fuste 1,3. A razão é física: o atrito lateral se mobiliza
com deslocamentos milimétricos, enquanto a ponta exige recalques da ordem de
10 % do diâmetro para se desenvolver plenamente. Na carga de trabalho, a ponta
ainda não está lá.

### Estacas escavadas

Para estaca escavada em **compressão**, entra um limite adicional:

\[
P_a \le 1{,}25 \, R_l
\]

e o programa adota o menor entre esse limite e o valor do método. A restrição
reconhece que, em estaca escavada, a limpeza imperfeita do fundo torna a ponta
pouco confiável — o projeto não deve depender dela.

### Tração

Com \(N < 0\) o programa entende estaca tracionada e passa a:

\[
P_a = \frac{R_l}{1{,}3}
\]

A resistência de ponta é **integralmente descartada** — uma estaca puxada para
cima não tem ponta a mobilizar.

---

## Teixeira

### Formulação

\[
r_p = \alpha_T \cdot N_p
\qquad\qquad
r_l = \beta_T \cdot N_l
\]

Aqui \(\alpha_T\) depende do par solo × tipo de estaca, e \(\beta_T\) só do
tipo de estaca. Ambos estão em [Tabelas de parâmetros](tabelas.md#teixeira).

### A janela 4D acima, 1D abaixo

O \(N_p\) de Teixeira é a média em uma janela ao redor da ponta, definida em
função do **diâmetro**:

\[
N_p = \text{média de } N_{SPT} \text{ no trecho } [\,z - 4D,\; z + D\,]
\]

É a definição mais fisicamente fundamentada dos três: o bulbo de tensões da
ponta tem extensão proporcional ao diâmetro, e uma estaca de 1,0 m mobiliza um
volume de solo muito maior do que uma de 0,25 m. Em consequência, **o mesmo
perfil dá pontas diferentes para diâmetros diferentes** — o que é correto, e
costuma surpreender quem compara com os outros métodos.

O atrito lateral usa a média de \(N\) do topo até a cota corrente, e não o \(N\)
da camada isolada.

### Fatores de segurança

Critério geral da NBR 6122:

\[
P_a = \frac{R_{total}}{2}
\]

Para estacas **escavadas**, entra o critério alternativo

\[
P_a = \frac{R_l}{4} + \frac{R_p}{1{,}5}
\]

e o programa adota **o menor** dos dois.

---

## Comparação dos três

| | Aoki-Velloso | Décourt-Quaresma | Teixeira |
| :-- | :-- | :-- | :-- |
| \(N\) de ponta | Camada abaixo | Média de 3 camadas | Média em \([-4D, +D]\) |
| \(N\) de fuste | Da camada | Da camada | Média acumulada |
| Depende do diâmetro? | Só na área e perímetro | Só na área e perímetro | **Também no \(N_p\)** |
| Fator de segurança | Global 2 (NBR 6122) | 4 na ponta, 1,3 no fuste | Global 2, ou 4/1,5 se escavada |
| Trata tração? | — | Sim, só lateral com FS 1,3 | — |
| Sensível a lente isolada | **Muito** | Pouco | Pouco |

!!! tip "Como ler a divergência"

    Os três métodos não deveriam concordar, e concordância excessiva é mais
    suspeita que divergência. Quando os resultados se afastam muito, o
    responsável costuma ser o \(N_p\): perfis com variação brusca perto da
    ponta separam Aoki dos demais, e diâmetros grandes separam Teixeira dos
    demais.

    A prática defensável é adotar o **menor** dos três, ou o método com
    calibração regional conhecida, e registrar a escolha na memória de cálculo.

## Limites de validade

!!! warning validade "Faixa de aplicação"

    Os três métodos são **semiempíricos**, calibrados contra provas de carga em
    um universo limitado. Fora dele, extrapolam sem avisar:

    - **Só valem com \(N_{SPT}\)** de sondagem à percussão executada conforme a
      NBR 6484. Correlações com outros ensaios exigem conversão prévia.
    - **Não cobrem** solos colapsíveis, expansivos, orgânicos moles, rochas
      alteradas nem matacões.
    - **Não consideram** atrito negativo, que precisa ser somado à parte quando
      houver aterro recente ou rebaixamento de lençol.
    - **Não consideram** efeito de grupo na capacidade. O bloco com várias
      estacas próximas tem capacidade menor que a soma das isoladas.
    - \(N_{SPT} > 50\) está fora da faixa de calibração da maioria das
      correlações. Valores altos devem ser truncados por julgamento.
    - A NBR 6122 exige **prova de carga** acima de certos números de estacas e
      em obras de maior porte. Nenhum método semiempírico a dispensa.

## Resultado apresentado

A tabela de cada método traz, por cota:

| Coluna | Conteúdo |
| :-- | :-- |
| Cotas (m) | Profundidade da ponta, negativa |
| \(R_l\) (kN) acum. | Atrito lateral acumulado do topo até a cota |
| \(R_p\) (kN) | Resistência de ponta naquela cota |
| \(R_t\) (kN) | Soma das duas |
| \(P_a\) Final (kN) | Carga admissível, já com os fatores e limites cabíveis |

Para estacas escavadas em compressão, Décourt-Quaresma acrescenta as colunas
`Pa escavada` e `Pa Dec-Qua`, mostrando o limite e o valor sem limite lado a
lado — para que se veja **qual dos dois governou**.

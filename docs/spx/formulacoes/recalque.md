# Recalque

Uma estaca de comprimento \(L\), com a base a uma distância \(C\) da superfície
do **indeslocável** — o topo rochoso ou a camada tão rígida que as deformações
abaixo dela podem ser desprezadas —, sofre dois tipos de deformação sob a carga
vertical \(P\):

\[
\rho = \rho_e + \rho_s
\]

| Parcela | O que é |
| :-- | :-- |
| \(\rho_e\) | **Encurtamento elástico da própria estaca**, como peça estrutural comprimida, com a base mantida imóvel |
| \(\rho_s\) | **Recalque do solo** — a compressão dos estratos entre a base da estaca e o indeslocável |

Em consequência, o comprimento passa a \(L - \rho_e\) e a distância ao
indeslocável a \(C - \rho_s\).

---

## Encurtamento elástico

### O diagrama de esforço normal

A força normal **não é constante** ao longo do fuste: ela cai de \(P\) na
cabeça até \(P_p\) na base, pela transferência de carga ao solo por atrito.

A metodologia é a de **Aoki (1979)**, e parte de três hipóteses:

1. A carga aplicada é maior que a resistência lateral e menor que a capacidade
   de carga: \(R_L < P < R\).
2. **Todo o atrito lateral está mobilizado.**
3. A reação na ponta equilibra o que sobra, e é inferior à resistência de ponta
   na ruptura: \(P_p = P - R_L < R_p\).

Supondo variação linear de \(P(z)\) em cada segmento correspondente a uma
camada, o esforço normal **médio** em cada segmento é:

\[
P_1 = P - \frac{R_{L1}}{2}
\]
\[
P_2 = P - R_{L1} - \frac{R_{L2}}{2}
\]
\[
P_3 = P - R_{L1} - R_{L2} - \frac{R_{L3}}{2}
\]

— e assim por diante: a carga já transferida acima do segmento, mais **metade**
da que se transfere dentro dele.

### A lei de Hooke

\[
\rho_e = \frac{1}{A \, E_c} \sum \left(P_i \, L_i\right)
\]

com \(A\) a área da seção transversal do fuste e \(E_c\) o módulo de
elasticidade do concreto, suposto constante.

### Módulo de elasticidade

Na ausência de valor específico:

| Tipo de estaca | \(E_c\) |
| :-- | --: |
| Pré-moldada | 28 a 30 GPa |
| Hélice contínua, Franki e estacão | 21 GPa |
| Strauss e escavada a seco | 18 GPa |

Para referência: aço 210 GPa, madeira da ordem de 10 GPa.

!!! note "Comparação com o pilar"

    Num pilar, o diagrama de normal é constante e igual a \(P\), e o
    encurtamento vale simplesmente \(P L / A E_c\). A estaca difere porque o
    solo vai descarregando o fuste — e é por isso que o cálculo precisa do
    diagrama, não só da carga de topo.

---

## Recalque do solo

Pelo princípio da ação e reação, a estaca aplica ao solo as cargas \(R_{Li}\)
ao longo do fuste e a carga \(P_p\) junto à base. As camadas entre a base e o
indeslocável se deformam sob esse carregamento.

A metodologia é a de **Aoki (1984)**.

### Acréscimo de tensões

Supondo propagação de tensões **1:2**, o acréscimo na linha média de uma camada
de espessura \(H\), situada a uma distância vertical \(h\) do ponto de
aplicação, é:

Para a reação de ponta:

\[
\Delta\sigma_p = \frac{4\,P_p}{\pi\left(D + h + \dfrac{H}{2}\right)^{2}}
\]

onde \(D\) é o diâmetro da **base** da estaca.

Para cada parcela de resistência lateral, aplicada no centroide do respectivo
segmento:

\[
\Delta\sigma_i = \frac{4\,R_{Li}}{\pi\left(D + h + \dfrac{H}{2}\right)^{2}}
\]

onde \(D\) é o diâmetro do **fuste**. O acréscimo total na camada é

\[
\Delta\sigma = \Delta\sigma_p + \sum \Delta\sigma_i
\]

!!! info "Todas as parcelas, camada a camada"

    O procedimento se repete para **cada camada** entre a base da estaca e o
    indeslocável. Não é uma tensão única espalhada numa área fixa: cada camada
    recebe a contribuição da ponta **e** de todos os segmentos de fuste, cada
    uma atenuada pela sua própria distância.

### Recalque pela Teoria da Elasticidade

\[
\rho_s = \sum \left(\frac{\Delta\sigma}{E_s}\,H\right)
\]

### Módulo de deformabilidade do solo

Pela expressão adaptada de **Janbu (1963)**:

\[
E_s = E_0 \left(\frac{\sigma_0 + \Delta\sigma}{\sigma_0}\right)^{n}
\]

| Símbolo | Significado |
| :-- | :-- |
| \(E_0\) | Módulo do solo **antes** da execução da estaca |
| \(\sigma_0\) | Tensão geostática **no centro da camada** |
| \(n\) | Expoente que depende da natureza do solo |

\[
n =
\begin{cases}
0{,}5 & \text{materiais granulares} \\
0 & \text{argilas duras e rijas}
\end{cases}
\]

Em areia, o módulo cresce com o acréscimo de tensões; em argila, não — e é isso
que o expoente traduz.

Para \(E_0\), Aoki (1984) considera:

| Tipo de estaca | \(E_0\) |
| :-- | :-- |
| Cravadas | \(6 \, K \, N_{SPT}\) |
| Hélice contínua | \(4 \, K \, N_{SPT}\) |
| Escavadas | \(3 \, K \, N_{SPT}\) |

com \(K\) o coeficiente empírico do método
[Aoki-Velloso](capacidade-de-carga.md#aoki-velloso-1975), função do tipo de
solo.

---

## Curva carga × recalque

Aoki (1979) propõe prever a curva conhecendo **um ponto** dela, pela expressão
de **Van der Veen (1953)**:

\[
P = R\left(1 - e^{-a\rho}\right)
\]

Calculada a capacidade de carga \(R\) e estimado o recalque \(\rho\) para uma
carga \(P\), o parâmetro que define a forma da curva sai de:

\[
a = \frac{-\ln\left(1 - P/R\right)}{\rho}
\]

!!! warning "A faixa em que o ponto de ancoragem vale"

    A carga usada para ancorar a curva deve estar entre a resistência lateral e
    metade da capacidade:

    \[
    R_L < P \le \frac{R}{2}
    \]

    É a mesma condição das hipóteses do encurtamento elástico — todo o atrito
    mobilizado, e a ponta ainda longe da ruptura. Fora dela, a curva deixa de
    representar o comportamento.

A curva **não é uma previsão independente**: é a interpolação de Van der Veen
ancorada em um único ponto. Serve para visualizar a margem até a ruptura e a
não linearidade esperada, não como substituta de prova de carga.

---

## Efeito de grupo

Grupos de estacas **sempre** recalcam mais que a estaca isolada sob a mesma
carga:

\[
\rho_g = \alpha \, \rho_i
\]

Valores experimentais apontam \(\alpha\) entre **1,6 e 4,0**, dependendo do
tamanho e da forma do grupo, para modelos de estacas cravadas em areia
medianamente compacta (Cintra, 1987).

!!! warning validade "As fórmulas geométricas não são confiáveis"

    Fórmulas de literatura que estimam \(\alpha\) **apenas por parâmetros
    geométricos do grupo** não são confiáveis: as variáveis mais importantes
    são a **deformabilidade do estrato entre a base das estacas e o
    indeslocável** e a **espessura desse estrato** — nenhuma das duas aparece
    na geometria.

    Há caso de obra em que grupos grandes recalcaram o mesmo que uma estaca
    isolada, porque as estacas estavam próximas do indeslocável.

    O SPX aplica a estimativa simplificada \(\rho_g = \rho_{max}\sqrt{n}\), que
    é uma dessas fórmulas geométricas. **Trate o resultado como ordem de
    grandeza.** Para grupos grandes ou críticos, o método mais abrangente é o
    de Aoki & Lopes (1975), que considera a interação entre todos os elementos.

### Recalque admissível

Para fundações usuais por estacas, os valores de **Meyerhof (1976)**:

| Solo | Recalque admissível |
| :-- | --: |
| Areia | 25 mm |
| Argila | 50 mm |

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - O método estima o recalque **imediato**. Em argilas saturadas o
      adensamento continua por anos e **não** está contemplado.
    - As hipóteses do encurtamento elástico exigem \(R_L < P < R\) com **todo o
      atrito mobilizado**. Para cargas abaixo de \(R_L\), o diagrama de normal
      é outro e o cálculo superestima o encurtamento.
    - \(E_0\) vem de correlação com \(N_{SPT}\), com a dispersão própria de
      método empírico. Trate o resultado como ordem de grandeza.
    - A posição do **indeslocável** governa \(\rho_s\): sem saber onde ele
      está, não há como delimitar as camadas que se comprimem.
    - O recalque **admissível** é atributo da estrutura, não da fundação.
    - Recalques **diferenciais** entre apoios — que são o que de fato danifica
      estruturas — exigem comparar as fundações entre si, e não estão no escopo
      da análise de estaca isolada.
    - Solos colapsíveis, expansivos ou sob rebaixamento de lençol estão fora do
      modelo.

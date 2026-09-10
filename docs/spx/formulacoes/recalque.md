# Recalque

O SPX estima o recalque da estaca isolada pelo método de **Cintra & Aoki**,
decompondo-o em duas parcelas de natureza distinta:

\[
\rho = \rho_E + \rho_S
\]

| Parcela | O que é | Ordem de grandeza |
| :-- | :-- | :-- |
| \(\rho_E\) | Encurtamento **elástico da própria estaca**, como peça de concreto comprimida | Milímetros |
| \(\rho_S\) | Recalque **do solo** sob a ponta | Geralmente a parcela dominante |

---

## Parcela elástica da estaca

A estaca encurta sob a carga que a percorre. Como o atrito lateral vai
descarregando a estaca à medida que ela desce, a força normal **não é
constante** ao longo do fuste: ela é máxima no topo e mínima na ponta.

\[
\rho_E = \sum_{i} \frac{P_i \cdot \Delta L_i}{A \cdot E_c}
\]

onde \(P_i\) é a força normal média no trecho \(i\), \(A = \pi D^2/4\) e
\(E_c\) o módulo de elasticidade da estaca.

### Módulo de elasticidade

Pode ser informado pelo usuário. Se não for, o programa adota por tipo:

| Tipo de estaca | \(E_c\) adotado |
| :-- | --: |
| Pré-moldada | 28 GPa |
| Hélice contínua, Franki, Ômega, Raiz | 21 GPa |
| Demais (escavadas) | 18 GPa |

A escala reflete o controle de qualidade da concretagem: peça moldada em
fábrica, com cura controlada, contra concreto lançado em furo.

---

## Parcela do solo

### Tensão na ponta

A carga é espalhada sobre uma área maior que a da ponta, por um bulbo de
influência:

\[
\Delta\sigma = \frac{P}{A_{infl}}
\qquad\text{com}\qquad
A_{infl} = \frac{\pi\,(D + 1{,}5)^2}{4}
\]

O acréscimo de 1,5 m no diâmetro representa o espraiamento das tensões abaixo
da ponta.

### Módulo do solo

O módulo de deformabilidade inicial vem do coeficiente \(K\) de Aoki-Velloso e
do \(N_{SPT}\) médio do perfil:

\[
E_0 = C_E \cdot K \cdot \overline{N}
\]

| Tipo de estaca | \(C_E\) |
| :-- | --: |
| Pré-moldada | 6 |
| Hélice contínua, Franki, Ômega, Raiz | 4 |
| Demais (escavadas) | 3 |

O módulo é então corrigido pelo nível de tensão:

\[
E_s = E_0 \left(\frac{\sigma_0 + \Delta\sigma}{\sigma_0}\right)^{n}
\qquad\text{com}\qquad
\sigma_0 = \gamma \cdot \frac{L}{2}
\]

O expoente \(n\) distingue o comportamento dos solos:

| Solo dominante | \(n\) | Significado |
| :-- | :-: | :-- |
| Areia (código 1) | 0,5 | Módulo **cresce** com a tensão de confinamento |
| Silte e argila (2 e 3) | 0 | Módulo praticamente independente do confinamento |

O peso específico \(\gamma\) é buscado em tabela por \(\overline{N}\) e
natureza do solo; na falta de correspondência, adota-se 18 kN/m³.

### Recalque

\[
\rho_S = \frac{\Delta\sigma}{E_s} \cdot L^{\,n}
\]

---

## Recalque de grupo

Estacas próximas interagem: os bulbos de tensão se superpõem, e o grupo recalca
mais que a estaca isolada mais carregada. O SPX usa a formulação simplificada
de **Fleming (1985)** e **Poulos (1993)**:

\[
\rho_{grupo} = \rho_{max} \cdot \sqrt{n}
\]

onde \(\rho_{max}\) é o maior recalque individual do bloco e \(n\) o número de
estacas.

!!! warning validade "Simplificação deliberada"

    A raiz do número de estacas é uma aproximação grosseira: ela **não**
    considera espaçamento, arranjo, rigidez do bloco nem a posição relativa das
    estacas. Um grupo com espaçamento de 6D interage muito menos que um de 2,5D,
    e a fórmula dá o mesmo fator para os dois.

    Use-a como ordem de grandeza. Para grupos grandes, muito carregados ou com
    espaçamento apertado, uma análise de interação específica é o caminho.

---

## Curva carga × recalque

O SPX traça a curva pela função de **Van der Veen (1953)**:

\[
P(\rho) = R\left(1 - e^{-a\rho}\right)
\]

onde \(R\) é a resistência última (\(R_{total}\) na cota da ponta) e \(a\) é
ajustado para que a curva passe **exatamente pelo ponto de trabalho**
calculado:

\[
a = \frac{-\ln\!\left(1 - P/R\right)}{\rho_{projeto}}
\]

Isso significa que a curva **não é uma previsão independente**: ela é a
interpolação de Van der Veen ancorada em um único ponto, o par
(carga de projeto, recalque de Cintra & Aoki). Ela serve para visualizar a
margem até a ruptura e a não linearidade esperada — não como substituta de
prova de carga.

O gráfico é apresentado na convenção geotécnica: carga no eixo horizontal, no
topo, e recalque crescendo para baixo.

---

## Diagrama de esforço normal

Complementando, o programa traça a força normal ao longo do fuste:

\[
P(z) = P_{topo} - R_l(z)
\]

truncado em zero. É a leitura direta de quanto da carga já foi transferida ao
solo por atrito em cada profundidade — e mostra visualmente se a estaca
trabalha por atrito ou por ponta.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - O método estima o recalque **imediato**. Em argilas saturadas, o
      adensamento continua por anos e **não** está contemplado.
    - A estimativa depende de \(K\) e \(N_{SPT}\), com a dispersão própria de
      correlação empírica. Trate o resultado como ordem de grandeza, não como
      previsão de precisão milimétrica.
    - O recalque **admissível** é atributo da estrutura, não da fundação. O
      programa não decide se o valor calculado é aceitável.
    - Recalques **diferenciais** entre apoios — que são o que de fato danifica
      estruturas — exigem comparar as fundações entre si, e não estão no escopo
      da análise de estaca isolada.
    - Solos colapsíveis, expansivos ou sob rebaixamento de lençol estão fora do
      modelo.

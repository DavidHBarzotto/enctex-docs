# Capacidade de carga

O SPX calcula a capacidade de carga por três métodos semiempíricos brasileiros,
em paralelo, para **cada cota possível de ponta**. O resultado é uma tabela por
profundidade, e não um número único.

Todos partem da mesma decomposição:

\[
R = R_p + R_L
\]

Daí em diante **eles divergem, e não apenas nos coeficientes**. A diferença
mais importante — e a que mais confunde quem compara resultados — está na
**forma da parcela lateral**:

| Método | Resistência lateral | O que \(N\) representa |
| :-- | :-- | :-- |
| **Aoki-Velloso** | \(R_L = U \sum (r_L \, \Delta L)\) — soma camada a camada | \(N_L\) da camada de espessura \(\Delta L\) |
| **Décourt-Quaresma** | \(R_L = r_L \, U \, L\) — um valor único no fuste inteiro | \(N_L\) **médio ao longo do fuste** |
| **Teixeira** | \(R_L = \beta \, N_L \, U \, L\) — idem | \(N_L\) **médio ao longo do fuste** |

Só Aoki-Velloso integra o atrito camada a camada. Nos outros dois, o fuste
recebe **uma tensão única**, calculada a partir da média do \(N_{SPT}\) — e
aplicá-los na forma somatória de Aoki dá resultado diferente do método.

---

## Aoki-Velloso (1975)

### Origem

O método nasceu de correlações com o ensaio **CPT**, pela resistência de ponta
do cone (\(q_c\)) e pelo atrito lateral na luva (\(f_s\)):

\[
r_p = \frac{q_c}{F_1}
\qquad\qquad
r_L = \frac{f_s}{F_2}
\]

Como no Brasil o CPT é pouco empregado, \(q_c\) foi substituído por uma
correlação com o SPT, \(q_c = K \, N_{SPT}\), e o atrito pela razão de atrito
\(\alpha = f_s / q_c\).

### Formulação

\[
r_p = \frac{K \, N_p}{F_1}
\qquad\qquad
r_L = \frac{\alpha \, K \, N_L}{F_2}
\]

\[
R = \frac{K \, N_p}{F_1}A_p \;+\; \frac{U}{F_2}\sum_{1}^{n}\left(\alpha \, K \, N_L \, \Delta L\right)
\]

| Símbolo | Significado |
| :-- | :-- |
| \(K\) | Coeficiente do solo, em MPa — [tabela](tabelas.md#aoki-velloso) |
| \(\alpha\) | Razão de atrito do solo, em % — idem |
| \(F_1, F_2\) | Fatores de correção por tipo de estaca — [tabela](tabelas.md#fatores-de-execucao) |
| \(N_p\) | \(N_{SPT}\) **na cota de apoio da ponta** |
| \(N_L\) | \(N_{SPT}\) **médio na camada** de espessura \(\Delta L\) |

### Os fatores de correção

\(F_1\) e \(F_2\) cobrem o **efeito de escala** — a diferença entre a estaca
(protótipo) e o cone do CPT (modelo) — e a influência do método executivo.

Como \(F_1 > 1{,}0\), a resistência de ponta da estaca resulta **inferior à do
cone**: é o efeito escala invertido, e ele é comprovado experimentalmente.

\(F_2\) deveria valer o mesmo que \(F_1\), mas engloba também uma correção de
leitura: no cone mecânico, a parte inferior da luva de Begemann gera uma
resistência de ponta capaz de dobrar o valor lido de atrito. Daí
\(F_1 \le F_2 \le 2F_1\), e os autores adotaram a hipótese mais conservadora:

\[
F_2 = 2\,F_1
\]

!!! note "Se os dados vierem de cone elétrico"

    No cone elétrico e no piezocone a leitura é feita na ponteira, sem esse
    erro. Usando o método com dados de CPT em vez de SPT, deve-se adotar
    \(F_2 = F_1\).

---

## Décourt-Quaresma (1978)

### Formulação

\[
R_L = r_L \, U \, L
\qquad\qquad
R_p = r_p \, A_p
\]

Note que \(R_L\) **não é um somatório**: uma única tensão de atrito multiplica
o perímetro e o comprimento inteiro do fuste.

### A tensão de atrito

Décourt (1982) transformou a tabela original dos autores nesta expressão:

\[
r_L = 10\left(\frac{N_L}{3} + 1\right) \qquad [\text{kPa}]
\]

onde \(N_L\) é o \(N_{SPT}\) **médio ao longo do fuste**, **sem nenhuma
distinção quanto ao tipo de solo**.

!!! warning "Três regras sobre a média do fuste"

    1. **Limite inferior \(N_L \ge 3\)** e **limite superior \(N_L \le 15\)**.
    2. Décourt (1982) estende o teto para \(N_L = 50\) em estacas de
       deslocamento e escavadas com bentonita, **mantendo \(N_L \le 15\)** para
       estacas Strauss e tubulões a céu aberto.
    3. Os valores de \(N\) usados na avaliação da **resistência de ponta não
       entram** na média do fuste.

### A resistência de ponta

\[
r_p = C \, N_p
\]

\(N_p\) é a média de **três valores**: o correspondente ao nível da ponta, o
imediatamente anterior e o imediatamente posterior. O coeficiente \(C\) depende
do solo — [tabela](tabelas.md#decourt-quaresma) —, ajustado com 41 provas de
carga em estacas pré-moldadas de concreto.

### Os fatores de Décourt (1996)

\[
R = \alpha \, C \, N_p \, A_p \;+\; \beta \, 10\left(\frac{N_L}{3}+1\right) U \, L
\]

Eles estendem o método a estacas escavadas — com lama bentonítica ou em geral,
inclusive tubulões a céu aberto —, hélice contínua, raiz e injetadas sob altas
pressões. Os valores estão nas [tabelas](tabelas.md#fatores-alfa-e-beta).

!!! info "O método original permanece para três tipos"

    Para estacas **pré-moldadas, metálicas e Franki**, vale
    \(\alpha = \beta = 1\) — ou seja, o método de 1978 sem correção.

### Critério de carga admissível

Décourt propõe fatores parciais, e é o que o SPX aplica:

\[
P_a = \frac{R_p}{4} + \frac{R_L}{1{,}3}
\]

A ponta leva 4 e o fuste 1,3 porque a confiabilidade das duas parcelas é
diferente: o atrito se mobiliza com deslocamentos milimétricos, enquanto a
ponta exige recalques da ordem de 10 % do diâmetro para se desenvolver
plenamente — na carga de trabalho, ela ainda não está lá.

Para estaca **escavada em compressão** entra o limite adicional
\(P_a \le 1{,}25\,R_L\), e o programa adota o menor.
Em **tração**, a ponta é integralmente descartada: \(P_a = R_L/1{,}3\).

---

## Teixeira (1996)

### Formulação

Uma equação unificada, com dois parâmetros que multiplicam o \(N_{SPT}\)
diretamente:

\[
R = R_p + R_L = \alpha \, N_p \, A_p + \beta \, N_L \, U \, L
\]

Aqui \(\alpha\) e \(\beta\) já estão em **kPa** — não são adimensionais como os
de Décourt, apesar do mesmo nome.

| Símbolo | Significado |
| :-- | :-- |
| \(N_p\) | \(N_{SPT}\) médio no intervalo de **4 diâmetros acima** da ponta a **1 diâmetro abaixo** |
| \(N_L\) | \(N_{SPT}\) **médio ao longo do fuste** |
| \(\alpha\) | Função do solo **e** do tipo de estaca — [tabela](tabelas.md#teixeira) |
| \(\beta\) | Função **apenas** do tipo de estaca — idem |

A janela \([-4D, +D]\) é a definição mais fisicamente fundamentada das três: o
bulbo de tensões da ponta tem extensão proporcional ao diâmetro. Em
consequência, **o mesmo perfil dá pontas diferentes para diâmetros
diferentes** — o que é correto, e costuma surpreender quem compara com os
outros métodos.

### Critério de carga admissível

O SPX aplica o critério geral da NBR 6122, \(P_a = R/2\), e para estacas
escavadas adota também \(P_a = R_L/4 + R_p/1{,}5\), ficando com o **menor** dos
dois.

---

## Comparação

| | Aoki-Velloso | Décourt-Quaresma | Teixeira |
| :-- | :-- | :-- | :-- |
| Forma de \(R_L\) | Somatório por camada | Tensão única × \(U L\) | Tensão única × \(U L\) |
| \(N\) do fuste | Médio na camada | **Médio no fuste**, \(3 \le N_L \le 15\) | **Médio no fuste** |
| \(N\) da ponta | Na cota da ponta | Média de 3 valores | Média em \([-4D, +D]\) |
| Distingue o solo no fuste? | Sim, por \(\alpha K\) | **Não** | Não — β só depende da estaca |
| Depende do diâmetro? | Só em \(A_p\) e \(U\) | Só em \(A_p\) e \(U\) | **Também em \(N_p\)** |
| Unidade dos coeficientes | \(K\) em MPa, \(\alpha\) em % | \(C\) em kPa | \(\alpha, \beta\) em kPa |

!!! tip "Como ler a divergência"

    Os três não deveriam concordar, e concordância excessiva é mais suspeita
    que divergência.

    - **Perfil heterogêneo** separa Aoki dos outros dois: só ele integra o
      atrito camada a camada, enquanto Décourt e Teixeira achatam o fuste numa
      média.
    - **Perfil com \(N\) alto no fuste** separa Décourt: o teto da média
      (15 ou 50, conforme a estaca) trunca a contribuição lateral.
    - **Diâmetro grande** separa Teixeira, pelo \(N_p\) em janela.

    A prática defensável é adotar o **menor** dos três, ou o método com
    calibração regional conhecida, registrando a escolha na memória de cálculo.

---

## Efeito de grupo

Tudo acima vale para o **elemento isolado**. A capacidade do grupo pode diferir
da soma dos elementos, e isso se quantifica pela eficiência:

\[
\eta = \frac{R_g}{\sum R_i}
\]

O entendimento atual, apoiado em ensaios em grupos, é que a eficiência é
**geralmente igual ou superior à unidade**:

| Situação | Eficiência |
| :-- | :-- |
| Estacas de qualquer tipo em argila | \(\approx 1\) |
| Estacas escavadas em qualquer solo | \(\approx 1\) |
| Estacas cravadas em areia, sobretudo fofa | **> 1** — até 1,5 ou 1,7 |

!!! note "O SPX não aplica ganho de grupo"

    Não há teoria ou fórmula apropriada para estimar a eficiência, e a prática
    corrente de projeto **não leva em conta** possíveis benefícios — o que é a
    postura conservadora. O programa segue essa prática: dimensiona por
    elemento isolado.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - Os três são **semiempíricos**, calibrados contra provas de carga em um
      universo limitado. Aoki-Velloso ajustou \(F_1\) e \(F_2\) com 63 provas;
      Décourt-Quaresma ajustou \(C\) com 41, em pré-moldadas de concreto.
    - **Teixeira vale para \(4 < N_{SPT} < 40\)** — é a faixa declarada da
      tabela de \(\alpha\). Fora dela, extrapola.
    - **Teixeira não se aplica** a estacas pré-moldadas de concreto flutuantes
      em espessas camadas de argila mole sensível, com \(N_{SPT} < 3\). Nesse
      caso o autor tabela \(r_L\) diretamente pela natureza do sedimento —
      20 a 30 kPa em argila fluviolagunar, 60 a 80 kPa em argila transicional.
    - **Só valem com \(N_{SPT}\)** de sondagem à percussão conforme a NBR 6484.
    - **Não cobrem** solos colapsíveis, expansivos, orgânicos moles, rochas
      alteradas nem matacões.
    - **Não consideram** atrito negativo, que precisa ser somado à parte quando
      houver aterro recente ou rebaixamento de lençol.
    - As correlações originais são **abrangentes**, não regionais. A tendência
      recomendada é manter a formulação e substituir \(K\) e \(\alpha\) por
      correlações locais de validade comprovada — como as de Alonso (1980) para
      São Paulo e as de Danziger & Velloso (1986) para o Rio de Janeiro.
    - A NBR 6122 exige **prova de carga** acima de certos números de estacas.
      Nenhum método semiempírico a dispensa.

---

## Resultado apresentado

A tabela de cada método traz, por cota:

| Coluna | Conteúdo |
| :-- | :-- |
| Cotas (m) | Profundidade da ponta, negativa |
| \(R_L\) (kN) | Resistência lateral até aquela cota |
| \(R_p\) (kN) | Resistência de ponta naquela cota |
| \(R_t\) (kN) | Soma das duas |
| \(P_a\) Final (kN) | Carga admissível, já com os fatores e limites cabíveis |

Para estacas escavadas em compressão, Décourt-Quaresma acrescenta as colunas
`Pa escavada` e `Pa Dec-Qua`, mostrando o limite e o valor sem limite lado a
lado — para que se veja **qual critério governou**.

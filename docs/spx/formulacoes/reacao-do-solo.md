# Reação do solo — Kh e Kv

Para analisar a estaca sob esforço horizontal é preciso representar o solo. O
SPX usa o modelo de **Winkler**: o solo vira um conjunto de molas
independentes, uma por metro de estaca, e a estaca vira uma viga sobre base
elástica.

É um modelo simplificado — molas independentes não transmitem esforço entre si,
e solo real transmite — mas é o que sustenta a prática corrente de projeto de
estacas carregadas transversalmente.

---

## Coeficiente horizontal Kh

### Variação com a profundidade

Para solos cuja rigidez cresce com o confinamento, adota-se

\[
K_h(z) = m \cdot z
\]

com \(K_h\) em kN/m³, \(z\) em metros e \(m\) em **kN/m⁴**. O coeficiente \(m\)
é buscado em tabela por natureza do solo e \(N_{SPT}\):

| Solo dominante | Tabela usada |
| :-- | :-- |
| Areia (1) e silte (2) | Tabela de \(m\) para areias |
| Argila (3) | Tabela de \(m\) para argilas |

Fora da faixa tabelada, o valor é saturado no extremo mais próximo — \(N\)
acima do máximo usa o último valor, \(N\) abaixo do mínimo usa o primeiro. Solo
não identificado recebe \(m = 0{,}01\) kN/m⁴, um valor deliberadamente ínfimo
mas **não nulo**: mola de rigidez zero tornaria a matriz de rigidez singular e
derrubaria a análise.

### Da rigidez unitária à mola nodal

A mola concentrada em cada nó multiplica \(K_h\) pela área de influência:

\[
K_{h,mola} = K_h \cdot D \cdot \ell_{infl}
\]

onde \(D\) é o diâmetro e \(\ell_{infl}\) o trecho de estaca que aquele nó
representa.

!!! info "Meia faixa nas extremidades"

    O trecho de influência é **1,0 m** nos nós internos e **0,5 m** no primeiro
    e no último nó da estaca. A razão é geométrica: um nó no meio representa
    meio metro acima e meio abaixo; um nó na extremidade só tem solo de um lado.

    Sem esse cuidado, a rigidez total do modelo ficaria superestimada em um
    metro de solo que não existe.

---

## Coeficiente vertical Kv

O \(K_v\) representa a reação vertical do fuste — o atrito lateral mobilizado
como mola. Ele é obtido por correlação empírica com a tensão admissível do
solo, estimada por

\[
\sigma_{adm} = 0{,}2 \cdot N_{SPT} \quad [\text{kgf/cm}^2]
\]

Com \(\sigma_{adm}\), interpola-se \(K_v\) em uma tabela empírica que vai de
0,25 a 4,00 kgf/cm² (0,65 a 8,00 kgf/cm³), e converte-se para o SI:

\[
1 \text{ kgf/cm}^3 = 9\,806{,}65 \text{ kN/m}^3
\]

A mola nodal segue a mesma regra de área de influência, inclusive a meia faixa
nas extremidades:

\[
K_{v,mola} = K_v \cdot D \cdot \ell_{infl}
\]

!!! note "\(K_v\) é opcional"

    A análise pode ser feita só com molas horizontais. As molas verticais são
    ativadas por opção e importam sobretudo em **estaca inclinada**, onde a
    carga vertical gera componente transversal e vice-versa — sem \(K_v\), a
    estaca inclinada fica livre para descer na direção do seu eixo.

---

## Tabela de resultados

A aba de reação do solo apresenta, por metro:

| Coluna | Unidade | Conteúdo |
| :-- | :-- | :-- |
| Prof. | m | Profundidade do nó |
| Nspt | — | \(N_{SPT}\) da camada |
| \(m\) | kN/m⁴ | Coeficiente da tabela |
| \(K_h\) | kN/m³ | \(m \cdot z\) |
| Faixa | m | Trecho de influência (0,5 ou 1,0) |
| \(K_h\) Mola | kN/m | Rigidez concentrada no nó |
| \(K_v\) Mola | kN/m | Rigidez vertical concentrada no nó |

A tabela é truncada no **comprimento da estaca**: camadas de sondagem abaixo da
ponta não geram molas, porque não há estaca ali para reagir contra elas.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - **Winkler ignora a continuidade do solo.** Molas independentes não
      transmitem esforço entre si, o que superestima a rigidez local e
      subestima o alcance da deformação.
    - \(K_h = m \cdot z\) pressupõe rigidez **crescente com a profundidade**,
      hipótese válida em areias e argilas normalmente adensadas. Em argila
      pré-adensada, com rigidez aproximadamente constante, o modelo é menos
      adequado.
    - Os valores de \(m\) vêm de correlação com \(N_{SPT}\), com dispersão
      considerável.
    - O modelo é **linear**: a mola responde proporcionalmente ao deslocamento,
      sem limite. Para deslocamentos grandes, o solo plastifica e a rigidez cai
      — comportamento que exigiria curvas *p-y*, fora do escopo.
    - A correlação \(\sigma_{adm} = 0{,}2 N\) é regra prática grosseira.

# Resultado Geotécnico

Quarta aba, e o ponto de decisão do projeto: é aqui que se escolhe o
**comprimento da estaca**.

A aba tem quatro sub-abas:

| Sub-aba | Conteúdo |
| :-- | :-- |
| Aoki–Velloso | Capacidade por cota |
| Décourt–Quaresma | Capacidade por cota |
| Teixeira | Capacidade por cota |
| Recalque (Cintra e Aoki) | Recalque, curva carga × recalque, diagrama normal |

## Como ler a tabela

Cada método apresenta uma linha **por cota possível de ponta**:

| Coluna | Unidade | Conteúdo |
| :-- | :-- | :-- |
| Cotas | m | Profundidade da ponta, negativa |
| \(R_l\) acum. | kN | Atrito lateral acumulado do topo até a cota |
| \(R_p\) | kN | Resistência de ponta naquela cota |
| \(R_t\) | kN | Soma das duas |
| \(P_a\) Final | kN | **Carga admissível**, já com fatores e limites |

O procedimento é direto: percorra a coluna \(P_a\) Final até encontrar o
primeiro valor que supera a carga da estaca. Aquela cota é o comprimento
necessário.

!!! tip "É por isso que a tabela é por cota"

    Programas que devolvem um número único obrigam a tentar comprimentos até
    acertar. Com a curva inteira de \(P_a(z)\) em uma chamada, a escolha vira
    leitura de coluna — e mostra também **quanto se ganharia** descendo mais um
    metro, que é a informação para decidir entre alongar a estaca ou aumentar o
    diâmetro.

### Colunas extras em estacas escavadas

Para estaca escavada em compressão, Décourt-Quaresma acrescenta:

| Coluna | Conteúdo |
| :-- | :-- |
| Pa escavada | O limite \(1{,}25\,R_l\) |
| Pa Dec-Qua | O valor do método, sem o limite |

A coluna \(P_a\) Final traz o **menor** dos dois. Ter os três lado a lado
mostra qual critério governou — informação que costuma justificar mudar o tipo
de estaca.

## Os três métodos divergem

E devem. A principal fonte de divergência é **qual \(N_{SPT}\) cada um usa na
ponta**:

| Método | \(N\) de ponta |
| :-- | :-- |
| Aoki-Velloso | A camada imediatamente abaixo |
| Décourt-Quaresma | Média de três camadas |
| Teixeira | Média na janela \([-4D, +D]\) |

!!! info "Como interpretar"

    - **Divergência grande** costuma indicar perfil com variação brusca perto
      da ponta. Aoki se separa dos outros dois porque uma lente resistente de
      um metro sustenta a ponta dele sozinha.
    - **Teixeira destoando dos demais** aponta influência do diâmetro: só ele
      dimensiona a janela do \(N_p\) em função de \(D\).
    - **Concordância excessiva** é mais suspeita que divergência — em geral
      significa perfil homogêneo, onde os três reduzem à mesma média.

    A prática defensável é adotar o **menor** dos três, ou o método com
    calibração regional conhecida, registrando a escolha na memória de cálculo.

## Recalque

A quarta sub-aba traz:

- **Recalque estimado** pelo método de Cintra & Aoki, decomposto em parcela
  elástica da estaca e parcela do solo.
- **Recalque de grupo**, pela estimativa \(\rho_{max}\sqrt{n}\).
- **Curva carga × recalque** de Van der Veen, ancorada no ponto de trabalho.
- **Diagrama de esforço normal** ao longo do fuste.

O resultado sai em **milímetros**.

!!! warning "O recalque admissível não é decisão do programa"

    O SPX estima quanto a fundação recalca. Quanto a estrutura tolera é
    atributo dela — e recalques **diferenciais** entre apoios, que são o que de
    fato danifica edificações, exigem comparar as fundações entre si.

    Ver [limites de validade](../formulacoes/recalque.md#limites-de-validade).

## Verificação geotécnica

O programa emite uma verificação por estaca, confrontando a carga aplicada com
a admissível na cota adotada. Alterar parâmetros geotécnicos depois de calcular
dispara um aviso — o resultado em tela deixa de corresponder à entrada, e é
preciso reprocessar.

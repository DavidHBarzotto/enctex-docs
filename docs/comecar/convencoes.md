# Convenções e unidades

Esta é a página que evita o erro mais comum de entrada de dados. Vale a leitura
antes do primeiro projeto.

## Sistema de eixos

Os programas usam um sistema **destrógiro com Z para baixo**, com origem no
topo da estaca.

| Eixo | Direção positiva |
| :-- | :-- |
| **X** | Horizontal |
| **Y** | Horizontal, perpendicular a X |
| **Z** | **Para baixo**, ao longo da estaca |

O eixo Z apontando para baixo é a convenção geotécnica: profundidade cresce
com Z, e as cotas de sondagem são lidas na mesma direção em que a estaca
desce.

!!! tip "Confira no próprio programa"

    O SPX traz uma visualização 3D do sistema de coordenadas, com a estaca e os
    três eixos desenhados. Use-a sempre que houver dúvida sobre o sentido de um
    esforço.

## Sinais dos esforços

| Esforço | Positivo significa |
| :-- | :-- |
| Normal \(N\) | **Compressão** — carga para baixo, no sentido de Z |
| Normal \(N < 0\) | **Tração** — o programa muda o método de cálculo da capacidade |
| Cortante \(V_x\) | Para a direita, no sentido de X |
| Cortante \(V_y\) | No sentido de Y |
| Momento \(M_x\), \(M_y\) | Sentido horário |

!!! warning "O sinal do normal muda o cálculo"

    Não é só uma questão de sinal na saída. Com \(N < 0\) o programa entende
    **estaca tracionada** e passa a desprezar a resistência de ponta, aplicando
    o fator de segurança de tração. Ver
    [Capacidade de carga](../spx/formulacoes/capacidade-de-carga.md).

## Unidades

A entrada e a saída são em unidades do SI usuais da geotecnia brasileira.

| Grandeza | Unidade | Onde aparece |
| :-- | :-- | :-- |
| Comprimento, diâmetro, profundidade | m | Geometria da estaca e do bloco |
| Cobrimento | cm | Classe de agressividade ambiental |
| Força | kN | Cargas aplicadas, \(R_p\), \(R_l\), \(P_a\) |
| Momento | kN·m | Momentos aplicados |
| Tensão do solo | kPa | \(r_p\), \(r_l\), parâmetro \(K\) |
| Resistência do concreto \(f_{ck}\) | MPa | Materiais |
| Módulo de elasticidade \(E_c\) | MPa na entrada, kPa no cálculo | Recalque elástico |
| Peso específico \(\gamma\) | kN/m³ | Tensão geostática |
| Fator \(m\) | kN/m⁴ | Coeficiente de reação horizontal |
| \(K_h\), \(K_v\) unitários | kN/m³ | Reação do solo |
| Molas \(K_h\), \(K_v\) | kN/m | Entrada do modelo de elementos finitos |
| Recalque | m no cálculo, **mm** na apresentação | Resultados e gráficos |

!!! note "Recalque em milímetros"

    Internamente o recalque é calculado em metros, mas todo resultado
    apresentado — tabela, gráfico e relatório — vem em **milímetros**, que é a
    unidade em que se discute recalque admissível.

## Tipos de solo

O SPX classifica o solo pelas frações que o compõem, na ordem em que
predominam. São quinze combinações:

| | | |
| :-- | :-- | :-- |
| Areia | Silte | Argila |
| Areia siltosa | Silte arenoso | Argila arenosa |
| Areia siltoargilosa | Silte arenoargiloso | Argila arenossiltosa |
| Areia argilosa | Silte argiloso | Argila siltosa |
| Areia argilossiltosa | Silte argiloarenoso | Argila siltoarenosa |

O nome se lê como a composição: *areia siltoargilosa* é dominante areia, depois
silte, depois argila.

!!! warning "A classificação escolhe os parâmetros de cálculo"

    O tipo de solo não é rótulo: é ela que seleciona \(K\) e \(lpha\) na
    tabela de Aoki-Velloso, \(C\) na de Décourt-Quaresma, \(lpha_T\) na de
    Teixeira e o fator \(m\) das molas.

    Trocar **areia siltosa** por **silte arenoso** — nomes parecidos,
    composições invertidas — muda \(K\) de 0,80 para 0,55 MPa, ou seja,
    **31 % a menos de resistência de ponta**. Confira a classificação do
    boletim antes de lançar.

Nem todo método usa a classificação completa. **Décourt-Quaresma** trabalha com
três famílias apenas — argilas, solos intermediários e areias — e o
**coeficiente de reação horizontal** distingue apenas solos arenosos e siltosos
de argilosos.

## Discretização da sondagem

A sondagem é lançada **metro a metro**, um valor de \(N_{SPT}\) e um código de
solo por metro. As cotas de resultado saem negativas, medidas a partir da
superfície: −1 m, −2 m, e assim por diante.

Toda tabela de capacidade de carga é apresentada por cota — para cada
profundidade possível de ponta, qual seria a carga admissível. É isso que
permite escolher o comprimento da estaca lendo a coluna, em vez de tentar um
comprimento por vez.

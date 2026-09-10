# Configuração do Bloco

Primeira aba. Define a geometria, o número e o arranjo das estacas, o tipo de
estaca, os materiais e o cobrimento.

## Campos

### Geometria das estacas

| Campo | Unidade | Observação |
| :-- | :-- | :-- |
| Nº de Estacas no Bloco | — | De 1 a 30 |
| Arranjo Específico | — | Habilitado conforme o número de estacas |
| Diâmetro da Estaca | m | Entra em \(A_p\), \(U\) e, no método de Teixeira, também no \(N_p\) |
| Tipo de Estaca | — | Seleciona os coeficientes de execução dos três métodos |
| Espaçamento eixos | cm | Distância entre eixos de estacas |
| Vinculação da Cabeça | — | Rotulado ou Engastado |

### Arranjos disponíveis

Até oito estacas, o programa oferece **arranjos nomeados** — as configurações
que a prática consagrou para cada contagem. Acima disso, a distribuição segue o
padrão retangular.

| Nº | Arranjos |
| :-: | :-- |
| 1, 2 | Único |
| 3 | Triângulo · Linear (eixo X) · Linear (eixo Y) |
| 4 | Quadrado |
| 5 | Quadrado + 1 centro · Pentagonal · Retangular (2 e 3) |
| 6 | Retangular (2×3) · Hexagonal |
| 8 | Retangular (3-2-3) · Retangular (4×2) · Retangular (2×4) |
| 9 a 30 | Retangular |

O campo **Arranjo Específico** só fica habilitado quando há mais de uma opção
para aquela contagem.

### Limites do projeto

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">blocos</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">estacas por bloco</span></div>
  <div class="limite"><span class="valor">200</span><span class="rotulo">estacas no total</span></div>
  <div class="limite"><span class="valor">20</span><span class="rotulo">sondagens</span></div>
</div>

O teto de **200 estacas no total** é o que vale na prática: cem blocos de trinta
estacas cada seriam três mil, e não é isso que o programa comporta. Os três
limites atuam juntos, e o primeiro que for atingido é o que governa.

### Bloco e materiais

| Campo | Unidade | Observação |
| :-- | :-- | :-- |
| Altura do Bloco | m | |
| Nível do Topo | m | Cota do topo da estaca. Negativo = arrasado abaixo do terreno |
| Balanço / Cobrimento | cm | Distância da face do bloco ao eixo da estaca externa |
| Altura do Solo | m | |
| Classe de Agressividade | — | CAA I a IV, define o cobrimento nominal |
| Peso Específico | kN/m³ | Do concreto |

!!! info "O nível do topo muda o modelo estrutural"

    Topo **abaixo** de zero significa estaca arrasada sob o bloco: o nó de topo
    ganha mola de solo, porque há terreno em volta dele.

    Topo **em zero ou acima** deixa o nó livre — a estaca tem trecho exposto e
    se comporta como pilar engastado no solo, com deslocamentos bem maiores.

    Ver [Análise estrutural](../formulacoes/analise-estrutural.md#cota-de-topo-abaixo-do-terreno).

### Classe de agressividade

| Classe | Ambiente | Cobrimento |
| :-- | :-- | --: |
| CAA I | Branda | 3,0 cm |
| CAA II | Moderada | 3,0 cm |
| CAA III | Forte | 4,0 cm |
| CAA IV | Muito forte | 5,0 cm |

O cobrimento entra no cálculo da altura útil \(d\) e, portanto, no
dimensionamento à flexão e ao cortante.

## Coordenadas e esforços por estaca

A tabela **Coordenadas e Esforços das Estacas** é o coração da aba. Nela cada
estaca recebe:

- posição no bloco (X, Y);
- esforços aplicados na cabeça — normal, cortantes e momentos.

O sinal segue a [convenção geral](../../comecar/convencoes.md#sinais-dos-esforcos):
normal positivo é compressão.

## Estacas inclinadas

O SPX permite **inclinação individual** — cada estaca do bloco pode ter
inclinação e azimute próprios. O recurso abre um diálogo dedicado.

| Parâmetro | Significado |
| :-- | :-- |
| Inclinação | Ângulo com a vertical |
| Azimute | Direção da inclinação no plano horizontal |

!!! tip "Confira no 3D"

    Azimute trocado é o erro mais comum, e é invisível na tabela. A
    visualização 3D do bloco mostra as estacas na posição real — dois segundos
    de conferência que evitam um projeto inteiro errado.

Estacas inclinadas geralmente exigem ativar as **molas verticais \(K_v\)** na
análise estrutural: sem elas, a estaca inclinada fica livre para deslizar na
direção do próprio eixo.

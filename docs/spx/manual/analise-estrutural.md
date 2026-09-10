# Análise Estrutural

Quinta aba. Monta o modelo de elementos finitos da estaca sobre base elástica e
devolve os esforços que vão dimensionar a seção.

## O que o modelo representa

A estaca vira um pórtico espacial discretizado **de metro em metro**, com uma
mola de solo em cada nó. As molas saem da
[reação do solo](../formulacoes/reacao-do-solo.md): \(K_h\) nas direções
horizontais e, opcionalmente, \(K_v\) na vertical.

A análise roda **por eixo** — um modelo para X e outro para Y —, e os dois
resultados são combinados no dimensionamento como flexão composta oblíqua.

## Opções

| Opção | Efeito |
| :-- | :-- |
| Considerar \(K_v\) | Ativa as molas verticais. Importa sobretudo em estaca inclinada |
| Eixo | Escolhe qual modelo visualizar, X ou Y |
| Módulo de elasticidade | \(E_c\) da estaca; se omitido, o programa adota por tipo |
| Coeficiente de Poisson | Padrão 0,20 |
| Peso próprio | Carga distribuída ao longo do fuste |

!!! tip "Quando ativar o \(K_v\)"

    Em estaca **vertical** sob carga horizontal, as molas verticais pouco
    mudam. Em estaca **inclinada** elas são essenciais: sem \(K_v\), nada
    impede a estaca de deslizar na direção do próprio eixo, e os deslocamentos
    saem irreais.

## Resultados

A aba apresenta, ao longo da profundidade:

| Diagrama | Serve para |
| :-- | :-- |
| Deslocamento horizontal | Verificação de serviço — é o critério usual em estaca carregada transversalmente |
| Momento fletor | Dimensiona a armadura longitudinal |
| Esforço cortante | Dimensiona os estribos |
| Esforço normal | Mostra quanto da carga já foi transferida por atrito |

Os gráficos são interativos e podem ser incluídos no relatório.

!!! info "Onde fica o momento máximo"

    Em estaca sob carga horizontal, o momento máximo raramente está no topo:
    ele costuma aparecer a poucos metros da superfície, onde a rigidez do solo
    ainda é baixa mas a estaca já ganhou braço. É esse pico que dimensiona a
    armadura, e é por isso que a armadura longitudinal não pode ser interrompida
    logo abaixo do bloco.

## Cuidados

!!! warning "O modelo é linear elástico"

    Nem o concreto fissura, nem o solo plastifica. Para deslocamentos de
    serviço isso é aceitável; próximo da ruptura, não. A rigidez à flexão usa a
    seção **bruta** de concreto — a NBR 6118 admite redução por fissuração, o
    que aumentaria deslocamentos.

    Ver [limites de validade](../formulacoes/analise-estrutural.md#limites-de-validade).

- **A discretização é de 1 m.** Em estacas curtas ou muito rígidas, o pico de
  momento pode cair entre nós e ser subestimado.
- **Nós rasos não têm mola.** Acima de 0,10 m de profundidade a rigidez é
  zerada de propósito: o solo superficial está sujeito a erosão, escavação e
  variação sazonal.
- **Molas não interagem.** Em bloco com espaçamento pequeno, a rigidez efetiva
  por estaca é menor que a calculada.

## Processamento

A análise abre uma janela de progresso. O tempo cresce com o número de estacas
e com a profundidade — um bloco de oito estacas em sondagem de 20 m roda
dezesseis modelos, dois por estaca.

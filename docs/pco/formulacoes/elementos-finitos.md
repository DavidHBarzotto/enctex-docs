# Elementos finitos

O modelo de bielas e tirantes é uma **idealização**: ele supõe onde a
compressão passa e onde a tração aparece, e dimensiona a partir disso. A
análise em elementos finitos resolve o bloco como sólido tridimensional e
mostra o campo de tensões que de fato se instala.

Ela não substitui o modelo de bielas — substitui a **fé** nele.

## A malha

O PCO monta a malha sobre o polígono real do bloco, com dois tipos de elemento:

| Elemento | Quando usar |
| :-- | :-- |
| **Hexaédrico** | Blocos de geometria regular. Converge mais rápido e com menos elementos para a mesma precisão |
| **Tetraédrico** | Geometrias que o hexaedro não preenche bem — arranjos irregulares, recortes, muitos pilares |

!!! tip "Comece pelo hexaédrico"

    Para o bloco corrente — retangular, estacas em arranjo regular — o
    hexaedro dá resultado melhor com malha menor. O tetraedro é a saída quando
    a geometria não se deixa dividir em hexaedros de forma razoável.

## O que se lê no resultado

A análise devolve o campo de tensões no sólido. Três leituras importam:

**Onde a compressão realmente passa.** As trajetórias de tensão principal de
compressão desenham as bielas reais. Compará-las com as bielas supostas mostra
se o modelo de treliça representa aquele bloco — em bloco alto e bem
proporcionado, coincidem; em bloco baixo e largo, a compressão se espalha de
um jeito que nenhuma treliça simples reproduz.

**Onde a tração aparece.** O tirante idealizado é uma barra na base. No sólido
a tração ocupa uma região, e a altura dessa região diz se concentrar toda a
armadura na base é adequado ou se ela precisa subir.

**Se algum nó está sobrecarregado.** A verificação analítica dos nós usa áreas
idealizadas. O sólido mostra a concentração real.

## Verificação dos nós

O PCO usa o resultado do MEF para checar as tensões nos nós de compressão —
sob o pilar e sobre as estacas — contra os limites da NBR 6118.

!!! warning "Sem MEF calculado, a verificação é analítica"

    A checagem de nós pelo campo de tensões **exige o modelo resolvido**. Sem
    ele, o programa recai na verificação analítica, com as áreas idealizadas do
    modelo de bielas.

    A distinção não é acadêmica: a verificação analítica pode aprovar um bloco
    que o campo de tensões reprova, porque ela supõe uma distribuição uniforme
    onde há concentração. Se o bloco é crítico, **rode o MEF**.

## Reações nas estacas

O modelo em elementos finitos também fornece a distribuição de reações entre as
estacas — que, em bloco com vários pilares ou com carregamento excêntrico, não
é a que a fórmula analítica de distribuição linear devolve.

Como o modelo é **linear**, a combinação de ações pode ser resolvida caso a caso
e as reações envelopadas depois. Ver [Combinação de ações](combinacoes.md).

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - O modelo é **linear elástico**. O concreto não fissura, o aço não escoa,
      não há plastificação. Perto da ruptura, o campo real redistribui de um
      jeito que o modelo linear não captura — e é justamente essa
      redistribuição que dá lastro ao modelo de bielas.
    - Por isso: **o MEF linear não dispensa o modelo de bielas e tirantes**.
      Ele confere hipóteses e localiza concentrações; o dimensionamento
      continua saindo do modelo de treliça, que é o que a norma respalda.
    - As estacas entram como apoios. A rigidez real delas — que os programas da
      [linha SP](../../spx/index.md) calculam — altera a distribuição de
      reações em bloco hiperestático.
    - O refino da malha influencia o resultado nas regiões de concentração.
      Tensão de pico junto a um canto reentrante cresce com o refino e não
      converge: é singularidade de geometria, não esforço real.

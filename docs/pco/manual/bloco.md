# Configuração do bloco

Primeira aba. Define a geometria do bloco, a posição das estacas, os pilares e
as ações.

## Estacas

| Campo | Observação |
| :-- | :-- |
| Número de estacas | De **1 a 30** por bloco |
| Posição | Coordenadas X e Y de cada estaca |
| Diâmetro | Define a área do nó sobre a estaca |
| Espaçamento entre eixos | Governa o braço de alavanca das bielas |

O contorno do bloco é o **fecho convexo** das estacas, acrescido do balanço —
e não um retângulo circunscrito. É esse polígono que entra no cálculo do peso
próprio e na malha de elementos finitos.

!!! tip "O espaçamento é a variável mais sensível"

    Afastar as estacas deita a biela e **aumenta a armadura de tirante**, além
    de crescer o bloco em planta. Aproximá-las reduz o tirante, mas há mínimo
    executivo — estacas próximas demais interferem entre si na execução e na
    capacidade.

## Pilares

O PCO aceita **mais de um pilar por bloco**, cada um em sua própria aba, com
seção, posição e ações próprias.

### Seções disponíveis

| Seção | |
| :-- | :-- |
| Retangular | |
| Circular | |
| Perfil I/H | |
| Perfil U | |
| Retangular Vazado | |
| Circular Vazado | |

!!! info "Seção não retangular vira dimensão equivalente"

    As fórmulas de Blévot pedem uma dimensão \(a_p\) do pilar na direção
    considerada. Para seções que não são retângulos, o programa calcula a
    **dimensão equivalente** preservando a área de contato que define o nó de
    compressão sob o pilar.

    É a aproximação correta para o modelo de bielas, que enxerga o pilar como
    a região por onde a carga entra no bloco — não como a sua forma exata.

## Ações

Cada pilar recebe os cinco componentes de esforço:

| Componente | Significado |
| :-- | :-- |
| \(N\) | Normal |
| \(M_x\), \(M_y\) | Momentos |
| \(F_x\), \(F_y\) | Cortantes |

As ações são classificadas em **permanentes** e **variáveis**, e o programa
monta as combinações últimas normais da NBR 8681 a partir daí.

!!! warning "Classifique corretamente permanente e variável"

    Não é formalidade. A norma manda usar \(\gamma_g = 1{,}0\) na ação
    permanente quando ela **alivia** o efeito de uma variável, e \(1{,}4\)
    quando agrava — e o PCO testa as duas hipóteses justamente porque
    "favorável" muda de verificação para verificação.

    Uma ação lançada como permanente quando é variável — ou o contrário —
    invalida a combinação inteira. Ver
    [Combinação de ações](../formulacoes/combinacoes.md).

O **peso próprio do bloco** é calculado pelo programa a partir do volume real,
com \(\gamma_{concreto} = 25\) kN/m³ (NBR 6120), e entra como ação permanente.

## Simulação em elementos finitos

Com a geometria e as ações lançadas, a aba resolve o bloco como sólido.

| Opção | Quando usar |
| :-- | :-- |
| Malha **hexaédrica** | Geometria regular — converge melhor com menos elementos |
| Malha **tetraédrica** | Arranjos irregulares, recortes, muitos pilares |

O resultado traz o campo de tensões, as reações nas estacas e as tensões nos
nós — sob o pilar e sobre as estacas.

!!! note "O MEF é opcional para dimensionar"

    Blévot e MBT são analíticos. O modelo em elementos finitos serve para
    **conferir** as hipóteses e para checar os nós pelo campo de tensões real,
    que é mais rigoroso que a checagem analítica.

    Em bloco crítico, rode. Ver
    [Elementos finitos](../formulacoes/elementos-finitos.md).

## Visualização 3D

O bloco é desenhado com estacas e pilares posicionados. Use-a antes de calcular:
coordenada trocada é o erro mais comum de entrada, e é invisível na tabela.

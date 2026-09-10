# Análise estrutural

A estaca é analisada como **pórtico espacial em elementos finitos**, apoiado em
base elástica. O solucionador é o [PyNite](https://github.com/JWock82/PyNite),
biblioteca de análise matricial de estruturas.

O resultado dessa análise — momentos, cortantes e normais ao longo do fuste —
é o que alimenta o [dimensionamento](dimensionamento.md).

---

## O modelo

### Discretização

A estaca é dividida em nós **de metro em metro**, coincidindo com a
discretização da sondagem. Isso não é acaso: cada nó precisa de uma mola, e a
mola vem da camada de solo daquele metro.

Os nós vão do topo à ponta, ordenados de cima para baixo. O nó de topo recebe
as cargas aplicadas.

### Seção e material

Seção circular cheia:

\[
A = \frac{\pi D^2}{4}
\qquad
I_y = I_z = \frac{\pi D^4}{64}
\qquad
J = 2 I_z
\]

O material é definido por \(E_c\), coeficiente de Poisson \(\nu\) (padrão 0,20)
e peso específico 25 kN/m³, com

\[
G = \frac{E_c}{2(1+\nu)}
\]

### Apoios elásticos

Cada nó recebe molas segundo a [reação do solo](reacao-do-solo.md):

| Direção | Mola | Quando |
| :-- | :-- | :-- |
| DX, DY | \(K_h\) | Sempre |
| DZ | \(K_v\) | Só quando as molas verticais são ativadas |

A torção (RZ) é travada para estabilizar o modelo — uma estaca circular sob
carga transversal não tem torção significativa, e deixá-la livre criaria um
modo de corpo rígido.

!!! info "Nós superficiais não recebem mola"

    Nós a menos de 0,10 m de profundidade têm a mola zerada. O solo à
    superfície é o menos confinado, o mais sujeito a erosão, escavação e
    variação sazonal — contar com a reação dele é otimismo que a prática não
    confirma.

---

## Cota de topo abaixo do terreno

Quando o topo da estaca está **enterrado** — arrasado abaixo do nível do
terreno, situação normal sob bloco —, o nó de topo passa a ter solo em volta e
recebe a mola correspondente à sua profundidade.

Quando o topo está **no nível do terreno ou acima**, ele fica livre. É o caso
da estaca com trecho exposto, que se comporta como pilar engastado no solo.

!!! warning "Um cuidado de modelagem"

    Os nós são posicionados na **cota da sondagem**, não em distâncias medidas
    a partir do topo da estaca. Parece detalhe, mas é o que garante que o
    \(K_h\) de uma profundidade seja aplicado na profundidade certa: posicionar
    os nós a partir do topo faria o modelo afundar junto com a estaca,
    aplicando a rigidez de 3 m na cota de 5 m e alongando a peça modelada.

---

## Estacas inclinadas

O SPX modela estacas inclinadas por dois ângulos:

| Parâmetro | Significado |
| :-- | :-- |
| **Inclinação** | Ângulo com a vertical |
| **Azimute** | Direção da inclinação no plano horizontal |

A posição horizontal de cada nó é obtida projetando a queda desde o topo:

\[
x = (z_{topo} - z) \cdot \tan(i) \cdot \cos(az)
\qquad
y = (z_{topo} - z) \cdot \tan(i) \cdot \sin(az)
\]

A projeção é medida **a partir do topo da estaca**, não do nível do terreno —
uma estaca arrasada a 2 m só começa a se afastar da vertical a partir dali.

!!! tip "Inclinação individual"

    Num bloco, cada estaca pode receber inclinação e azimute próprios. É o que
    permite montar arranjos em leque para resistir a esforço horizontal — o
    caso clássico de encontro de ponte ou de estrutura sob empuxo.

---

## Análise por eixo

A análise é conduzida **por eixo** — um modelo para X e outro para Y —, cada um
com o cortante e o momento da sua direção. Os dois resultados são então
combinados no dimensionamento, que trata a flexão como composta oblíqua.

Essa separação é o que permite usar um modelo plano por vez, mais estável
numericamente, sem perder a interação biaxial na verificação da seção.

---

## Resultados

Da análise saem, ao longo do fuste:

- **Deslocamento horizontal** — o critério de serviço mais usado em estaca
  carregada transversalmente.
- **Momento fletor** — máximo geralmente a poucos metros da superfície, e é ele
  que dimensiona a armadura longitudinal.
- **Esforço cortante** — dimensiona os estribos.
- **Esforço normal** — decrescente com a profundidade, pelo atrito mobilizado.

Os gráficos são interativos e podem ser exportados para o relatório.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - O modelo é **linear elástico**. Nem o concreto fissura, nem o solo
      plastifica. Para deslocamentos de serviço isso é aceitável; próximo da
      ruptura, não.
    - A rigidez à flexão usa a **seção bruta** de concreto. A NBR 6118 admite
      redução por fissuração em análises de segunda ordem, o que tornaria os
      deslocamentos maiores e os momentos redistribuídos.
    - As molas de Winkler não representam interação entre estacas do mesmo
      bloco. Em grupo com espaçamento pequeno, a rigidez efetiva por estaca é
      menor que a calculada.
    - A discretização de 1 m limita a resolução do momento máximo. Em estacas
      curtas ou muito rígidas, o pico pode cair entre nós.

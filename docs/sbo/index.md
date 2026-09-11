# SBO — Simple Beam One

**Versão 1.0** · Windows 64 bits · **Gratuito**

Dimensionamento de vigas de concreto armado à **flexão simples**, **esforço
cortante** e **torção**, com detalhamento da seção e diagrama
momento-curvatura.

Trabalha com **seção retangular** e **seção T**, e permite montar várias vigas
no mesmo projeto, alternando entre elas.

## O que ele faz

<div class="grid cards" markdown>

-   :material-format-align-bottom:{ .lg .middle } **Flexão simples**

    ---

    Seção retangular e T, com armadura simples ou dupla, domínios de deformação
    e armadura mínima conforme a NBR 6118.

    [:octicons-arrow-right-24: Formulação](formulacoes/flexao.md)

-   :material-vector-difference:{ .lg .middle } **Cortante e torção**

    ---

    Modelo I para o cortante, seção vazada equivalente para a torção, e a
    **verificação de interação** entre as duas.

    [:octicons-arrow-right-24: Formulação](formulacoes/cortante-torcao.md)

-   :material-chart-bell-curve:{ .lg .middle } **Momento-curvatura**

    ---

    Análise não linear com a relação parábola-retângulo real do concreto — o
    que mostra a rigidez efetiva e a ductilidade da seção.

    [:octicons-arrow-right-24: Formulação](formulacoes/momento-curvatura.md)

-   :material-vector-square:{ .lg .middle } **Detalhamento**

    ---

    Bitola e número de barras para as armaduras inferior, superior e de pele,
    com desenho da seção e comparação entre \(A_s\) requerido e efetivo.

</div>

## Três idiomas na interface

O programa é trilíngue — **português, inglês e espanhol** — trocável em
**Configurações**. A unidade de força também é configurável ali.

## O que se lança

| Grupo | Campos |
| :-- | :-- |
| Múltiplas vigas | Quantidade, e seletor da viga ativa |
| Materiais | \(f_{ck}\), \(f_{yk}\), \(E_s\) |
| Seção retangular | Largura \(b\), altura \(h\), \(d'\) |
| Seção T | Mesa \(b_f\), espessura da mesa \(h_f\), alma \(b_w\), altura \(d\) |
| Esforços | Momento \(M_k\), cortante \(V_k\), torçor \(T_k\) |
| Detalhamento | Bitola e nº de barras: inferior, superior e de pele; alinhamento |

Os esforços entram em valores **característicos** — a majoração por
\(\gamma_f\) é feita pelo programa.

## Diferença para o SBX

O SBO **dimensiona** a seção que você informou. O [SBX](../sbx/index.md)
acrescenta o caminho inverso: **encontrar a seção mais barata** que atende aos
mesmos esforços, por otimização numérica.

Todo o resto é idêntico — mesmo núcleo de cálculo, mesma interface, mesmas
verificações.

[:octicons-arrow-right-24: Como a otimização funciona](../sbx/otimizacao.md)

## Próximos passos

- [Formulações](formulacoes/index.md) — o que ele calcula, e como.
- [Referências](referencias.md) — a bibliografia.

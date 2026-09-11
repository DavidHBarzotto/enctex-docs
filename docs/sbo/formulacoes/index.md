# Formulações do SBO

O que o programa calcula, com que hipóteses e dentro de que faixa de validade.

Esta seção vale integralmente para o [SBX](../../sbx/index.md), que compartilha
o mesmo núcleo — ele acrescenta apenas a
[otimização da seção](../../sbx/otimizacao.md).

## A cadeia de cálculo

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Materiais</strong> — fck, fyk, Es e os coeficientes parciais
    <span class="consome">definem fcd, fyd e os parâmetros do diagrama</span></div>
  <div class="nivel"><strong>Flexão simples</strong> — armadura longitudinal
    <span class="consome">consome: materiais, geometria e Mk</span></div>
  <div class="nivel"><strong>Cortante e torção</strong> — armadura transversal
    <span class="consome">consome: materiais, geometria, Vk e Tk</span></div>
  <div class="nivel"><strong>Interação de bielas</strong> — o critério que pode reprovar a seção
    <span class="consome">consome: cortante e torção juntos</span></div>
  <div class="nivel"><strong>Detalhamento</strong> — bitolas, número de barras, As efetivo
    <span class="consome">consome: as armaduras calculadas</span></div>
  <div class="nivel"><strong>Momento-curvatura</strong> — rigidez e ductilidade
    <span class="consome">consome: geometria e armadura efetiva</span></div>
</div>

## As páginas

<div class="grid cards" markdown>

-   **[Flexão simples](flexao.md)**

    ---

    Seção retangular e T, armadura simples e dupla, os parâmetros do diagrama
    parábola-retângulo e a armadura mínima.

-   **[Cortante e torção](cortante-torcao.md)**

    ---

    Modelo I, seção vazada equivalente e a verificação de interação — o ponto
    em que os dois competem pela mesma biela.

-   **[Momento-curvatura](momento-curvatura.md)**

    ---

    A análise não linear com a relação constitutiva real, e o que ela mostra
    sobre rigidez e ductilidade.

</div>

## Como ler estas páginas

Cada uma termina com os **limites de validade**, no bloco de cor própria:

!!! warning validade "Faixa de aplicação"

    Ele delimita onde o método vale. Leia-o como parte do resultado, não como
    rodapé.

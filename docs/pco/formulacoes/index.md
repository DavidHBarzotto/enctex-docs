# Formulações do PCO

O que o programa calcula, com que hipóteses e dentro de que faixa de validade.

Esta seção vale integralmente para o [PCX](../../pcx/index.md), que compartilha
o núcleo de cálculo — o PCX acrescenta apenas os
[blocos flexíveis](../../pcx/blocos-flexiveis.md).

## Os dois caminhos

Um bloco sobre estacas pode ser calculado de duas maneiras, e a escolha não é
de gosto: depende de **como o bloco se comporta**.

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Bloco rígido</strong> — a carga desce por bielas comprimidas
    <span class="consome">Blévot &amp; Frémy · MBT (IBRACON)</span></div>
  <div class="nivel"><strong>Bloco flexível</strong> — o bloco trabalha à flexão, como viga
    <span class="consome">disponível no PCX</span></div>
</div>

O critério de rigidez está em [Verificações](verificacoes.md#rigidez-do-bloco).

## A cadeia de cálculo

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Ações no pilar</strong> — N, Mx, My, Fx, Fy
    <span class="consome">a entrada</span></div>
  <div class="nivel"><strong>Combinação NBR 8681</strong> — casos últimos normais
    <span class="consome">consome: ações</span></div>
  <div class="nivel"><strong>Reações nas estacas</strong> — analítica ou por elementos finitos
    <span class="consome">consome: combinações e geometria</span></div>
  <div class="nivel"><strong>Modelo de bielas</strong> — Blévot ou MBT
    <span class="consome">consome: reações</span></div>
  <div class="nivel"><strong>Armadura de tirante</strong>
    <span class="consome">consome: modelo de bielas</span></div>
  <div class="nivel"><strong>Verificações</strong> — nós, punção, cisalhamento
    <span class="consome">consome: modelo e geometria</span></div>
  <div class="nivel"><strong>Detalhamento e relatório</strong>
    <span class="consome">consome: armadura e verificações</span></div>
</div>

## As páginas

<div class="grid cards" markdown>

-   **[Blévot & Frémy](blevot.md)**

    ---

    O método clássico, com fórmula fechada para os arranjos de 3 a 6 estacas e
    projeção geral para os demais.

-   **[MBT — Bielas e Tirantes](mbt.md)**

    ---

    O modelo dos Comentários do IBRACON à NBR 6118, com o espraiamento da carga
    do pilar calculado em vez de tabelado.

-   **[Elementos finitos](elementos-finitos.md)**

    ---

    O bloco como sólido, em malha hexaédrica ou tetraédrica — para conferir as
    hipóteses do modelo de bielas.

-   **[Combinação de ações](combinacoes.md)**

    ---

    NBR 8681, com o tratamento correto de ação permanente favorável.

-   **[Verificações](verificacoes.md)**

    ---

    Nós de compressão, punção, cisalhamento e o critério de rigidez.

</div>

## Como ler estas páginas

Cada uma termina com os **limites de validade**, no bloco de cor própria:

!!! warning validade "Faixa de aplicação"

    Ele delimita onde o método vale. Leia-o como parte do resultado, não como
    rodapé — é a informação que separa usar de usar errado.

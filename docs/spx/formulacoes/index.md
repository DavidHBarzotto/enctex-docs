# Formulações do SPX

Esta seção descreve **o que o programa calcula** — os métodos, as hipóteses,
os coeficientes e, sobretudo, os limites de validade de cada um.

Ela existe porque um programa de fundações não deveria ser uma caixa-preta. O
projeto é assinado pelo engenheiro, e para assinar é preciso saber qual conta
foi feita.

## Como ler estas páginas

Cada página segue a mesma estrutura:

1. **A formulação**, com as equações como o programa as aplica.
2. **As decisões de implementação** — os pontos em que o método admite mais de
   uma leitura e o programa escolheu uma. São eles que explicam divergência
   entre programas diferentes usando "o mesmo método".
3. **Os limites de validade**, marcados assim:

!!! warning validade "Faixa de aplicação"

    Este bloco aparece em todas as páginas e delimita onde o método vale. Leia-o
    como parte do resultado, não como rodapé.

## A cadeia de cálculo

Os módulos não são independentes: cada um consome o anterior.

<div class="cadeia" markdown="0">
  <div class="nivel"><strong>Sondagem</strong> — NSPT e códigos de solo
    <span class="consome">a entrada de tudo</span></div>
  <div class="nivel"><strong>Capacidade de carga</strong> — Aoki · Décourt · Teixeira
    <span class="consome">consome: sondagem</span></div>
  <div class="nivel"><strong>Comprimento da estaca</strong>
    <span class="consome">consome: capacidade de carga</span></div>
  <div class="nivel"><strong>Recalque</strong> — Cintra &amp; Aoki
    <span class="consome">consome: capacidade de carga</span></div>
  <div class="nivel"><strong>Reação do solo</strong> — Kh e Kv
    <span class="consome">consome: sondagem e comprimento</span></div>
  <div class="nivel"><strong>Análise estrutural</strong> — PyNite
    <span class="consome">consome: reação do solo</span></div>
  <div class="nivel"><strong>Dimensionamento</strong> — NBR 6118
    <span class="consome">consome: análise estrutural</span></div>
  <div class="nivel"><strong>Detalhamento DXF e memória de cálculo</strong>
    <span class="consome">consome: dimensionamento e recalque</span></div>
</div>

Uma consequência prática: **mudar a sondagem muda tudo**. O código de solo
seleciona \(K\), \(\alpha\), \(C\) e \(m\), que por sua vez definem capacidade,
recalque, rigidez das molas, esforços e armadura. Não há como alterar o perfil
e aproveitar um dimensionamento anterior.

## As páginas

<div class="grid cards" markdown>

-   **[Capacidade de carga](capacidade-de-carga.md)**

    ---

    Aoki-Velloso, Décourt-Quaresma e Teixeira. Como cada um define o \(N\) de
    ponta, e por que isso é a principal fonte de divergência entre eles.

-   **[Recalque](recalque.md)**

    ---

    Cintra & Aoki, recalque de grupo e curva carga × recalque de Van der Veen.

-   **[Reação do solo](reacao-do-solo.md)**

    ---

    Molas de Winkler, \(K_h = m \cdot z\) e \(K_v\) por tensão admissível.

-   **[Análise estrutural](analise-estrutural.md)**

    ---

    Pórtico espacial sobre base elástica, com estacas inclinadas.

-   **[Dimensionamento](dimensionamento.md)**

    ---

    Flexão composta oblíqua com diagrama de interação, segunda ordem e
    cortante.

-   **[Tabelas de parâmetros](tabelas.md)**

    ---

    Todos os coeficientes, com a lógica por trás das escalas.

</div>

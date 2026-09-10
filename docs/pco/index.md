# PCO — Pile Cap One

Plataforma para cálculo, dimensionamento e detalhamento de blocos de fundação
sobre estacas, conforme as normas técnicas brasileiras.

## Limites do projeto

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">blocos por projeto</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">estacas por bloco</span></div>
  <div class="limite"><span class="valor">1 a N</span><span class="rotulo">estacas por bloco</span></div>
  <div class="limite"><span class="valor">&gt;1</span><span class="rotulo">pilar por bloco</span></div>
</div>

## O que ele faz

<div class="grid cards" markdown>

-   :material-vector-triangle:{ .lg .middle } **Bielas e tirantes**

    ---

    Dimensionamento por **Blévot & Frémy** e pelo **Método das Bielas e
    Tirantes (MBT)** dos Comentários do IBRACON à NBR 6118.

    [:octicons-arrow-right-24: Formulação](formulacoes/blevot.md)

-   :material-cube-scan:{ .lg .middle } **Elementos finitos**

    ---

    Malha **hexaédrica ou tetraédrica** do bloco, para conferir o campo de
    tensões contra as hipóteses de biela e tirante.

    [:octicons-arrow-right-24: Formulação](formulacoes/elementos-finitos.md)

-   :material-scale-balance:{ .lg .middle } **Combinação de ações**

    ---

    Combinações últimas normais pela **NBR 8681**, com o tratamento correto de
    ação permanente favorável e desfavorável.

    [:octicons-arrow-right-24: Formulação](formulacoes/combinacoes.md)

-   :material-check-decagram-outline:{ .lg .middle } **Verificações**

    ---

    Punção, cisalhamento e nós de compressão.

    [:octicons-arrow-right-24: Formulação](formulacoes/verificacoes.md)

-   :material-shape-outline:{ .lg .middle } **Pilares de qualquer forma**

    ---

    Retangular, circular, perfil I/H, perfil U, retangular vazado e circular
    vazado — e **mais de um pilar por bloco**.

    [:octicons-arrow-right-24: Manual](manual/bloco.md)

-   :material-file-export-outline:{ .lg .middle } **Saídas**

    ---

    Detalhamento interativo de armaduras, exportação em DXF e relatório
    técnico editável.

    [:octicons-arrow-right-24: Manual](manual/detalhamento.md)

</div>

## Integração com a linha SP

O PCO **conversa com o SPO, o SPX e o SPX AI**. Na prática, isso fecha o ciclo
do projeto de fundação profunda: os programas da linha SP calculam a estaca —
capacidade de carga, comprimento, armadura — e o PCO calcula o bloco que as
coroa, recebendo a geometria e as reações em vez de exigir relançamento.

## Fluxo de trabalho

<div class="fluxo" markdown="0">
  <div class="etapa"><span class="n">1</span>Geometria do bloco e das estacas</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">2</span>Pilares e seções</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">3</span>Ações e combinações</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">4</span>Reações nas estacas</div>
  <div class="seta">→</div>
  <div class="etapa ramo"><span class="n">5</span>Dimensionamento</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">6</span>Detalhamento DXF</div>
  <div class="etapa"><span class="n">7</span>Relatório</div>
</div>

## Diferença para o PCX

O PCO calcula **blocos rígidos**. O [PCX](../pcx/index.md) acrescenta o cálculo
de **blocos flexíveis**, modelados como viga bi-apoiada ou engastada.

Os dois compartilham o mesmo núcleo: o PCX é o PCO com os blocos flexíveis
habilitados. Toda esta documentação — manual e formulações — vale integralmente
para o PCX.

!!! tip "Quando o PCO basta"

    Se os seus blocos atendem à condição de rigidez — a maioria dos blocos
    correntes de edifício —, o PCO resolve. O PCX se justifica quando aparecem
    blocos esbeltos, em que a biela não se forma de maneira bem definida e o
    comportamento real é de flexão.

## Próximos passos

- [Interface](manual/interface.md) — o passeio pelo programa.
- [Formulações](formulacoes/index.md) — o que ele calcula, e como.
- [Referências](referencias.md) — a bibliografia.

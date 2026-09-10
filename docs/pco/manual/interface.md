# Interface

O PCO é organizado em **quatro abas**, na ordem do projeto.

| # | Aba | O que se faz nela |
| :-: | :-- | :-- |
| 1 | **Simulação MEF** | Configura blocos, estacas e pilares; lança ações; resolve o modelo em elementos finitos |
| 2 | **Dimensionamento** | Escolhe comportamento e modelo, e calcula as armaduras |
| 3 | **Detalhamento** | Desenha as armaduras e exporta em DXF |
| 4 | **Relatório** | Emite a memória de cálculo editável |

<div class="fluxo" markdown="0">
  <div class="etapa"><span class="n">1</span>Simulação MEF</div>
  <div class="seta">→</div>
  <div class="etapa ramo"><span class="n">2</span>Dimensionamento</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">3</span>Detalhamento</div>
  <div class="etapa"><span class="n">4</span>Relatório</div>
</div>

!!! info "A primeira aba faz duas coisas"

    O nome **Simulação MEF** descreve o que ela entrega, não tudo o que ela
    pede. É nela que você monta a geometria — blocos, estacas, pilares — e
    lança as ações; a simulação em elementos finitos é o resultado disso.

    O modelo em elementos finitos é **opcional** para dimensionar: Blévot e MBT
    são analíticos e não dependem dele. Mas ele é o que permite conferir as
    hipóteses do modelo de bielas. Ver
    [Elementos finitos](../formulacoes/elementos-finitos.md).

## Vários blocos, vários pilares

O PCO trabalha com **até 100 blocos por projeto**, cada um com **até 30
estacas**, e **mais de um pilar por bloco**.

Cada pilar do bloco tem a sua própria aba dentro da configuração, com seção,
posição e ações próprias.

!!! warning "Modelo e bitolas são dados POR BLOCO"

    Comportamento, modelo de cálculo e bitolas pertencem ao bloco selecionado.
    Mudar o modelo do Bloco 1 **não** afeta o Bloco 2 — o que é o
    comportamento correto num projeto com blocos de portes diferentes, mas
    exige atenção: conferir um bloco não confere os outros.

## Recursos gerais

**Visualização 3D** do bloco com as estacas e os pilares posicionados. É a
maneira mais rápida de flagrar uma coordenada trocada.

**Comunicação com a linha SP** — o PCO recebe geometria e reações dos programas
de estaca, em vez de exigir relançamento. Ver
[integração](../index.md#integracao-com-a-linha-sp).

## Próximos passos

- [Configuração do bloco](bloco.md) — geometria, estacas e pilares.
- [Dimensionamento](dimensionamento.md) — comportamento, modelo e armaduras.
- [Detalhamento](detalhamento.md) — desenho e DXF.
- [Relatório](relatorio.md) — memória de cálculo.

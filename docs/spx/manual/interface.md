# Interface

O SPX é organizado em **oito abas**, na ordem do projeto. Cada uma depende das
anteriores: não adianta pular para o dimensionamento sem a sondagem lançada.

| # | Aba | Entrega |
| :-: | :-- | :-- |
| 1 | [Configuração do Bloco](bloco.md) | Geometria, estacas, materiais |
| 2 | [Sondagem / NSPT](sondagem.md) | Perfil do subsolo |
| 3 | [Propriedades dos Solos](sondagem.md#propriedades-dos-solos) | Pesos específicos e parâmetros |
| 4 | [Resultado Geotécnico](resultado-geotecnico.md) | Capacidade de carga e recalque |
| 5 | [Análise Estrutural](analise-estrutural.md) | Esforços ao longo da estaca |
| 6 | [Dimensionamento](dimensionamento.md) | Armaduras |
| 7 | [Detalhamento (DXF)](detalhamento.md) | Desenho de execução |
| 8 | [Relatório](relatorio.md) | Memória de cálculo |

## A ordem importa

<div class="fluxo" markdown="0">
  <div class="etapa"><span class="n">1</span>Configuração do bloco</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">2</span>Sondagem / NSPT</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">3</span>Propriedades dos solos</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">4</span>Resultado geotécnico</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">5</span>Análise estrutural</div>
  <div class="seta">→</div>
  <div class="etapa ramo"><span class="n">6</span>Dimensionamento</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">7</span>Detalhamento DXF</div>
  <div class="etapa"><span class="n">8</span>Relatório</div>
</div>

<small>A etapa 6 alimenta as duas saídas finais: o desenho e a memória de
cálculo.</small>

!!! warning "Alterar dado antigo invalida o que veio depois"

    Mudar o diâmetro na aba 1, ou um \(N_{SPT}\) na aba 2, invalida capacidade,
    recalque, esforços e armadura. O programa avisa quando detecta alteração de
    parâmetros geotécnicos depois de um cálculo, mas a regra de ouro é
    **reprocessar da aba 4 em diante** sempre que voltar atrás.

## Recursos gerais

### Modo escuro

O SPX tem tema claro e escuro. A escolha vale para toda a interface, inclusive
para os gráficos gerados — eles são redesenhados com a paleta do tema, e não
apenas invertidos.

### Visualização 3D

Dois recursos tridimensionais ajudam a conferir a entrada:

- **Sistema de coordenadas da estaca** — mostra os eixos X, Y e Z com a estaca
  desenhada, para dirimir dúvida sobre o sentido de um esforço.
- **Visualização 3D do bloco** — mostra as estacas posicionadas, com as
  inclinações aplicadas. É a forma mais rápida de perceber um azimute trocado.

### Processamento

Cálculos longos — a análise em elementos finitos e o processamento geotécnico
de muitas estacas — mostram uma janela de progresso. O tempo cresce com o
número de estacas e com a profundidade da sondagem.

## Convenções

Antes do primeiro projeto, vale a leitura de
[Convenções e unidades](../../comecar/convencoes.md). Os dois pontos que mais
geram erro:

1. **O código de solo é numérico e posicional.** `12` é areia siltosa; `21` é
   silte arenoso. Trocar os dois muda \(K\) de 800 para 550 kPa.
2. **Normal positivo é compressão.** Com valor negativo o programa passa a
   calcular tração, desprezando a ponta.

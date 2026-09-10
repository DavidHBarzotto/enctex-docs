# SPX — Simple Pile X

**Versão 1.0.1** · Windows 64 bits

O SPX cobre o ciclo completo de uma estaca isolada ou de um grupo sob bloco:
da sondagem ao desenho de detalhamento, passando pela capacidade de carga, pelo
recalque, pela análise estrutural com interação solo-estrutura e pelo
dimensionamento em concreto armado.

Sobre o SPO, ele acrescenta **estacas inclinadas**, **modelagem de perfil
estratigráfico** e o **leitor editável de PDFs de sondagem**.

## Limites do projeto

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">blocos</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">estacas por bloco</span></div>
  <div class="limite"><span class="valor">200</span><span class="rotulo">estacas no total</span></div>
  <div class="limite"><span class="valor">20</span><span class="rotulo">sondagens</span></div>
</div>

Os três primeiros atuam **juntos**, e o primeiro atingido governa: cem blocos de
trinta estacas seriam três mil, e o teto real é duzentas.

## O que ele faz

<div class="grid cards" markdown>

-   **Capacidade de carga**

    ---

    Três métodos semiempíricos em paralelo — Aoki-Velloso, Décourt-Quaresma e
    Teixeira — com resultado por cota, para escolher o comprimento lendo a
    coluna.

    [:octicons-arrow-right-24: Formulação](formulacoes/capacidade-de-carga.md)

-   **Recalque**

    ---

    Cintra & Aoki, separando a parcela elástica da estaca da parcela do solo.
    Recalque de grupo e curva carga × recalque por Van der Veen.

    [:octicons-arrow-right-24: Formulação](formulacoes/recalque.md)

-   **Interação solo-estrutura**

    ---

    Molas de Winkler horizontais e verticais, com \(K_h\) crescente na
    profundidade e \(K_v\) por tensão admissível.

    [:octicons-arrow-right-24: Formulação](formulacoes/reacao-do-solo.md)

-   **Análise estrutural**

    ---

    Pórtico espacial em elementos finitos sobre base elástica, com estacas
    inclinadas por inclinação e azimute.

    [:octicons-arrow-right-24: Formulação](formulacoes/analise-estrutural.md)

-   **Dimensionamento**

    ---

    Flexão composta oblíqua de seção circular com diagrama de interação,
    segunda ordem por curvatura e cortante pelo modelo de treliça.

    [:octicons-arrow-right-24: Formulação](formulacoes/dimensionamento.md)

-   **Saídas**

    ---

    Detalhamento em DXF e memória de cálculo em DOCX, prontas para prancha e
    para caderno de projeto.

    [:octicons-arrow-right-24: Manual](manual/detalhamento.md)

-   **Leitor de PDFs de sondagem**

    ---

    Extração editável de boletins em PDF, para não digitar trezentas linhas de
    \(N_{SPT}\) à mão.

    [:octicons-arrow-right-24: Manual](manual/sondagem.md)

</div>

## Fluxo de trabalho

O SPX é organizado em oito abas, e elas seguem a ordem natural do projeto. A
regra é simples: **cada aba depende das anteriores**.

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

| # | Aba | O que se decide nela |
| :-: | :-- | :-- |
| 1 | Configuração do Bloco | Geometria, número e arranjo de estacas, tipo de estaca, vinculação, materiais, cobrimento |
| 2 | Sondagem / NSPT | Perfil de \(N_{SPT}\) e códigos de solo, metro a metro |
| 3 | Propriedades dos Solos | Pesos específicos e parâmetros por camada |
| 4 | Resultado Geotécnico | Capacidade de carga pelos três métodos e recalque |
| 5 | Análise Estrutural | Modelo de elementos finitos e esforços ao longo da estaca |
| 6 | Dimensionamento | Armadura longitudinal e transversal |
| 7 | Detalhamento (DXF) | Desenho de execução |
| 8 | Relatório | Memória de cálculo em DOCX |

!!! tip "A aba 4 é o ponto de decisão"

    É nela que se escolhe o comprimento da estaca. A tabela traz a carga
    admissível para **cada cota possível de ponta**, pelos três métodos lado a
    lado. Divergência grande entre os métodos é informação, não defeito: ela
    indica que o perfil é sensível à formulação e que o caso merece prova de
    carga.

## Tipos de estaca

| Tipo | Aoki-Velloso | Décourt-Quaresma | Teixeira |
| :-- | :--: | :--: | :--: |
| Escavada com fluido | ● | ● | ● |
| Escavada sem fluido | ● | ● | ● |
| Hélice contínua | ● | ● | ● |
| Pré-moldada | ● | ● | ● |
| Raiz | ● | ● | ● |
| Franki | ● | ● | ● |
| Ômega | ● | ● | ● |

Os coeficientes de cada combinação estão em
[Tabelas de parâmetros](formulacoes/tabelas.md).

## Próximos passos

- [Interface](manual/interface.md) — o passeio pelas oito abas.
- [Formulações](formulacoes/index.md) — o que o programa calcula, e como.
- [Referências](referencias.md) — a bibliografia.

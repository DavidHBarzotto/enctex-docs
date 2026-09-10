# SPO — Simple Pile One

**Versão 1.0.1** · Windows 64 bits

Plataforma completa para cálculo, dimensionamento e detalhamento de estacas,
cobrindo os principais métodos executivos utilizados no Brasil.

## Limites do projeto

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">blocos</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">estacas por bloco</span></div>
  <div class="limite"><span class="valor">200</span><span class="rotulo">estacas no total</span></div>
  <div class="limite"><span class="valor">20</span><span class="rotulo">sondagens</span></div>
</div>

O teto de **200 estacas no total** é o que vale na prática: cem blocos de trinta
estacas seriam três mil, e não é isso que o programa comporta. Os limites atuam
juntos, e o primeiro atingido é o que governa.

## Tipos de estaca

| | | |
| :-- | :-- | :-- |
| Escavada com fluido | Hélice contínua | Pré-moldada |
| Escavada sem fluido | Ômega | Franki |
| Raiz | | |

## O que ele faz

<div class="grid cards" markdown>

-   **Capacidade de carga**

    ---

    Três métodos semiempíricos em paralelo — Aoki-Velloso, Décourt-Quaresma e
    Teixeira — com resultado por cota.

    [:octicons-arrow-right-24: Formulação](../spx/formulacoes/capacidade-de-carga.md)

-   **Recalque**

    ---

    Cintra & Aoki, recalque de grupo e curva carga × recalque de Van der Veen.

    [:octicons-arrow-right-24: Formulação](../spx/formulacoes/recalque.md)

-   **Dimensionamento estrutural**

    ---

    Flexão composta oblíqua de seção circular com diagrama de interação, e
    cortante pelo modelo de treliça.

    [:octicons-arrow-right-24: Formulação](../spx/formulacoes/dimensionamento.md)

-   **Detalhamento de armaduras**

    ---

    Detalhamento **interativo** e exportação em DXF.

    [:octicons-arrow-right-24: Manual](../spx/manual/detalhamento.md)

-   **Relatório**

    ---

    Memória de cálculo interativa e editável, em DOCX.

    [:octicons-arrow-right-24: Manual](../spx/manual/relatorio.md)

-   **Interação solo-estrutura**

    ---

    Molas de Winkler e análise estrutural em elementos finitos.

    [:octicons-arrow-right-24: Formulação](../spx/formulacoes/analise-estrutural.md)

</div>

## Documentação

O SPO é o **núcleo** da linha SP: o SPX é o SPO com dois recursos a mais, e o
SPX AI é o SPX com automação por IA. Os três compartilham o mesmo motor de
cálculo.

Por isso a documentação não é triplicada — seria três cópias a manter em
sincronia, e a primeira divergência entre elas seria um erro de projeto
esperando acontecer. **O manual e as formulações do SPX valem integralmente
para o SPO** nos módulos comuns, que são quase todos.

<div class="grid cards" markdown>

-   :material-book-open-variant:{ .lg .middle } **[Manual](../spx/manual/interface.md)**

    ---

    Interface, configuração do bloco, sondagem, resultado geotécnico, análise
    estrutural, dimensionamento, detalhamento e relatório.

-   :material-function-variant:{ .lg .middle } **[Formulações](../spx/formulacoes/index.md)**

    ---

    Capacidade de carga, recalque, reação do solo, análise estrutural,
    dimensionamento e tabelas de parâmetros.

-   :material-swap-horizontal:{ .lg .middle } **[O que muda no SPO](diferencas.md)**

    ---

    Os dois recursos do SPX que o SPO não tem, e o que fazer sem eles.

-   :material-book-education-outline:{ .lg .middle } **[Referências](../spx/referencias.md)**

    ---

    A bibliografia, comum aos três.

</div>

## Diferença para o SPX

O SPO **não tem**:

- **Cálculo de estacas inclinadas** — inclinação e azimute individuais.
- **Modelagem de perfil estratigráfico** — interpolação entre furos e perfil 3D.
- **Leitor editável de PDFs de sondagem**.

[:octicons-arrow-right-24: Detalhes e alternativas](diferencas.md)

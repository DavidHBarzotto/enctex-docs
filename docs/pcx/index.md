# PCX — Pile Cap X

**Versão 1.0.1** · Windows 64 bits

Evolução do [PCO](../pco/index.md) para projetos mais complexos, incluindo o
cálculo de **blocos flexíveis**.

## Limites do projeto

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">blocos por projeto</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">estacas por bloco</span></div>
  <div class="limite"><span class="valor">1 a N</span><span class="rotulo">estacas por bloco</span></div>
  <div class="limite"><span class="valor">&gt;1</span><span class="rotulo">pilar por bloco</span></div>
</div>

## O que ele acrescenta ao PCO

O PCX é o PCO com os **blocos flexíveis** habilitados. Tudo o mais é idêntico —
mesmo núcleo de cálculo, mesma interface, mesmas verificações.

| Comportamento | PCO | PCX |
| :-- | :--: | :--: |
| Bloco Rígido (Compressão) | ● | ● |
| Bloco Rígido (Arrancamento/Tração) | ● | ● |
| Bloco Flexível (Compressão) | | ● |
| Bloco Flexível (Arrancamento/Tração) | | ● |

[:octicons-arrow-right-24: Blocos flexíveis: a formulação](blocos-flexiveis.md)

!!! info "Por que isso importa"

    O modelo de bielas e tirantes pressupõe que a biela **se forma**. Isso
    exige que o bloco seja alto o bastante em relação à distância entre a face
    do pilar e o eixo da estaca.

    Num bloco esbelto a biela não se forma de maneira bem definida, e o
    comportamento real é de **flexão** — o bloco trabalha como viga. Calculá-lo
    por Blévot nesse caso **subestima a armadura**.

    É essa faixa que o PCX cobre.

## Documentação

O PCX compartilha o núcleo de cálculo do PCO, e a documentação segue a mesma
lógica: **as páginas do PCO valem integralmente para o PCX**, e aqui ficam
apenas as diferenças.

<div class="grid cards" markdown>

-   :material-vector-line:{ .lg .middle } **[Blocos flexíveis](blocos-flexiveis.md)**

    ---

    O que só o PCX faz: viga biapoiada, viga engastada e livre, análise de
    grelha, armadura de flexão e estribos.

-   :material-book-open-variant:{ .lg .middle } **[Manual do PCO](../pco/manual/interface.md)**

    ---

    Interface, configuração do bloco, dimensionamento, detalhamento e
    relatório. Idênticos.

-   :material-function-variant:{ .lg .middle } **[Formulações do PCO](../pco/formulacoes/index.md)**

    ---

    Blévot, MBT, elementos finitos, combinação de ações e verificações.
    Idênticas.

-   :material-book-education-outline:{ .lg .middle } **[Referências](../pco/referencias.md)**

    ---

    A bibliografia, comum aos dois.

</div>

## Quando o PCX se justifica

O PCO resolve o bloco corrente de edifício, que costuma atender à condição de
rigidez com folga. O PCX passa a valer quando aparece:

- **Bloco esbelto** — altura pequena em relação ao afastamento das estacas.
- **Bloco na fronteira** entre rígido e flexível, em que vale calcular dos dois
  jeitos e adotar o maior.
- **Bloco de grande vão entre estacas**, em que a flexão governa.

!!! tip "Na fronteira, calcule dos dois jeitos"

    Se a armadura de flexão simples resultar maior que a de tirante, é ela que
    deve prevalecer — a diferença mede o quanto o bloco já deixou de se
    comportar como rígido.

## Integração com a linha SP

Como o PCO, o PCX **conversa com o SPO, o SPX e o SPX AI**: recebe a geometria
e as reações das estacas em vez de exigir relançamento.

---
title: Documentação EnCteX
---

# Documentação EnCteX

Manuais de uso e formulações de cálculo dos programas de fundações da EnCteX.

Cada produto tem duas camadas de documentação, e elas respondem a perguntas
diferentes:

- O **manual** responde *como operar* — instalação, licença, abas, fluxo de
  trabalho, exportação.
- As **formulações** respondem *o que o programa calcula* — métodos, hipóteses,
  fatores de segurança, normas e, sobretudo, **os limites de validade**.

A segunda camada existe porque um programa de fundações não é uma caixa-preta
aceitável. O projetista assina o projeto, não o software; para assinar, ele
precisa saber qual formulação foi aplicada, com que coeficientes e dentro de
que faixa ela vale.

## Os programas

<div class="grid cards" markdown>

-   :material-pillar:{ .lg .middle } **SPO**

    ---

    O núcleo de estacas do SPX, sem estacas inclinadas nem modelagem
    estratigráfica. Mesmos métodos geotécnicos e mesmo dimensionamento
    estrutural.

    [:octicons-arrow-right-24: Documentação do SPO](spo/index.md)

-   :material-pillar:{ .lg .middle } **SPX**

    ---

    Estacas: capacidade de carga por três métodos, recalque, coeficientes de
    reação do solo, análise estrutural em elementos finitos, dimensionamento à
    flexão composta oblíqua, detalhamento em DXF e memória de cálculo.
    Inclui estacas inclinadas e modelagem estratigráfica do SPT.

    [:octicons-arrow-right-24: Documentação do SPX](spx/index.md)

-   :material-robot-outline:{ .lg .middle } **SPX AI**

    ---

    O SPX com automação por IA: leitura inteligente de PDFs, importação de
    planta em DWG/DXF e comandos de geração de blocos e estacas.

    [:octicons-arrow-right-24: Documentação do SPX AI](spx-ai/index.md)

-   :material-cube-outline:{ .lg .middle } **PCO**

    ---

    **Pile Cap One** — blocos sobre estacas **rígidos**, por Blévot & Frémy e
    pelo MBT dos Comentários do IBRACON, com verificação por elementos finitos.

    [:octicons-arrow-right-24: Documentação do PCO](pco/index.md)

-   :material-cube-outline:{ .lg .middle } **PCX**

    ---

    **Pile Cap X** — tudo do PCO, mais o cálculo de blocos **flexíveis**,
    modelados como viga bi-apoiada ou engastada.

    [:octicons-arrow-right-24: Documentação do PCX](pcx/index.md)

-   :material-format-align-bottom:{ .lg .middle } **SBO** · gratuito

    ---

    **Simple Beam One** — vigas de concreto armado à flexão, cortante e
    torção, em seção retangular e T, com diagrama momento-curvatura.

    [:octicons-arrow-right-24: Documentação do SBO](sbo/index.md)

-   :material-tune-variant:{ .lg .middle } **SBX** · gratuito

    ---

    **Simple Beam X** — o SBO com **otimização da seção**: encontra a
    geometria de menor custo que atende aos esforços.

    [:octicons-arrow-right-24: Documentação do SBX](sbx/index.md)

</div>

## Por onde começar

Se é o seu primeiro contato com qualquer um dos programas, três páginas valem
a leitura antes do manual do produto:

- [**Instalação**](comecar/instalacao.md) — requisitos e procedimento.
- [**Convenções e unidades**](comecar/convencoes.md) — sinais, eixos, unidades
  e os códigos numéricos de solo. É a página que evita o erro mais comum de
  entrada de dados.
- [**Normas atendidas**](comecar/normas.md) — o que cada programa referencia.

!!! warning "Sobre o alcance desta documentação"

    Ela descreve **o que os programas fazem**, não substitui o julgamento de
    engenharia nem as normas. Métodos semiempíricos de capacidade de carga
    foram calibrados com um universo de ensaios limitado; fora dessa faixa,
    extrapolam. Cada página de formulação traz a faixa de validade do método
    que descreve, e ela deve ser lida como parte do resultado.

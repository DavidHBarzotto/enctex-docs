# SBX — Simple Beam X

**Versão 1.0** · Windows 64 bits · **Gratuito**

Tudo o que o [SBO](../sbo/index.md) faz, com um acréscimo: em vez de apenas
verificar a seção que você informou, o SBX **encontra a seção mais barata** que
atende aos mesmos esforços.

## O que ele acrescenta

<div class="grid cards" markdown>

-   :material-function-variant:{ .lg .middle } **Otimização da seção**

    ---

    Programação quadrática sequencial sobre largura e altura, com as
    verificações normativas dentro da função objetivo.

    [:octicons-arrow-right-24: Como funciona](otimizacao.md)

-   :material-cash-multiple:{ .lg .middle } **Custos de material**

    ---

    Preço do concreto e do aço como entrada. Zerando os dois, ele passa a
    minimizar consumo material em vez de dinheiro.

    [:octicons-arrow-right-24: A função objetivo](otimizacao.md#a-funcao-objetivo)

</div>

Na interface, a diferença é um botão **Otimizar Seção** e dois campos de custo.
O resto é idêntico.

## Documentação

O SBX contém o SBO integralmente, e a documentação segue a mesma lógica da
linha: **o que vale para o SBO vale para o SBX**, e aqui fica só a diferença.

<div class="grid cards" markdown>

-   :material-tune-variant:{ .lg .middle } **[Otimização](otimizacao.md)**

    ---

    O método, as variáveis, as restrições, o chute inicial e — sobretudo — o
    que fazer com um resultado contínuo num mundo de fôrmas em múltiplos de
    5 cm.

-   :material-function:{ .lg .middle } **[Formulações do SBO](../sbo/formulacoes/index.md)**

    ---

    Flexão, cortante, torção e momento-curvatura. Idênticas — a otimização não
    muda o cálculo, só procura a geometria.

-   :material-book-education-outline:{ .lg .middle } **[Referências](../sbo/referencias.md)**

    ---

    A bibliografia, comum aos dois.

</div>

!!! info "A otimização não muda o cálculo"

    O SBX usa exatamente o mesmo núcleo de dimensionamento do SBO. A cada
    tentativa de seção, ele roda o dimensionamento completo — flexão, cortante,
    torção e a interação entre bielas — e só considera viável o que passa em
    tudo.

    O que a otimização faz é **procurar**, não relaxar.

## Quando ele se paga

O SBO resolve quando você já tem a seção definida — por padronização da obra,
por compatibilização com a arquitetura, ou por prática.

O SBX passa a valer quando a seção é **livre** e o volume importa: obras com
muitas vigas iguais, pré-moldados, ou estudos de viabilidade em que a diferença
de alguns centímetros se multiplica por centenas de peças.

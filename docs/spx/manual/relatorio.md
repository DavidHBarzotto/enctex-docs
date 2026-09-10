# Relatório

Oitava aba. Emite a **memória de cálculo** em DOCX — o documento que acompanha
o projeto e registra as premissas.

## Escopo

Primeiro passo: escolher o que o relatório cobre.

| Escopo | Produz |
| :-- | :-- |
| **Estaca específica** | Memória de uma única estaca, detalhada |
| **Todas as estacas** | Cada estaca detalhada individualmente |
| **Grupos de estacas** | Agrupa as idênticas e detalha uma por grupo |

!!! tip "Grupos, em obra real"

    Numa obra com quarenta estacas de três tipos, "todas as estacas" produz um
    documento de centenas de páginas que ninguém lê. O modo **grupos** produz
    três memórias e um resumo — que é o que o cliente e a fiscalização
    efetivamente conferem.

## Seções

As seções são selecionáveis. O documento completo traz:

1. **Objetivo do relatório**
2. **Características da fundação**
3. **Informações globais do projeto**
4. **Perfis de sondagem cadastrados (NSPT)**
5. **Análise geotécnica** — capacidade de carga pelos três métodos e recalque
6. **Análise estrutural (MEF completa)** — esforços e deslocamentos
7. **Dimensionamento da seção transversal** — armaduras longitudinal e
   transversal
8. **Observações e premissas normativas**

No modo agrupado, entra também um **resumo dos grupos gerados**, relacionando
cada grupo às estacas que representa.

## O que registrar além do automático

A seção de premissas é gerada com o texto normativo padrão. Vale complementá-la
manualmente com as decisões que o programa não tem como saber:

- **Qual método de capacidade foi adotado e por quê.** Os três divergem; a
  escolha é de engenharia e precisa estar registrada.
- **A origem da sondagem** — quem executou, quando, e se atende à NBR 6484.
- **O recalque admissível considerado**, e de onde veio.
- **Condições especiais** — atrito negativo, solo colapsível, lençol variável,
  escavações vizinhas.
- **Se houve prova de carga**, e o que ela indicou.

!!! warning "A memória é o que sustenta a assinatura"

    O documento gerado registra a conta feita. Ele não substitui o julgamento
    de engenharia nem transfere responsabilidade — o projeto é assinado pelo
    responsável técnico.

    A [documentação de formulações](../formulacoes/index.md) existe para que
    essa assinatura seja informada: ela diz qual formulação foi aplicada, com
    que coeficientes e dentro de que faixa de validade.

## Saída

O arquivo sai em **DOCX**, editável em Word ou LibreOffice — de propósito, para
que o projetista complemente as premissas antes de emitir. Gráficos e tabelas
vão embutidos.

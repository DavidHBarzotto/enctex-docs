# Relatório

Quarta aba. Emite a **memória de cálculo** do bloco, editável.

## Conteúdo

O relatório reúne o que foi calculado:

- Geometria do bloco, das estacas e dos pilares
- Ações lançadas e **combinações** montadas
- Distribuição de esforços e reações nas estacas
- Modelo adotado — comportamento, método, fator KR
- Análise de tensões e limites nas bielas e nos nós
- Armaduras, com o quadro de ferro
- Verificações — punção, cisalhamento, nós
- Resultados do modelo em elementos finitos, quando resolvido

## O que registrar além do automático

O documento sai completo no que o programa calculou. Vale complementá-lo com o
que ele não tem como saber:

- **Por que o bloco foi classificado como rígido ou flexível**, quando estiver
  na fronteira.
- **Por que Blévot ou MBT**, quando os dois divergiram.
- **A extrapolação de Blévot acima de quatro estacas**, quando aplicável — o
  programa emite a nota, e ela deve constar da memória.
- **A origem das reações das estacas**, se vieram da linha SP ou foram
  lançadas.
- **Condições especiais** — bloco parcialmente enterrado, junta de concretagem,
  interferências.

!!! warning "A memória sustenta a assinatura"

    O documento registra a conta feita. Ele não substitui o julgamento de
    engenharia nem transfere responsabilidade — o projeto é assinado pelo
    responsável técnico.

    A [documentação de formulações](../formulacoes/index.md) existe para que
    essa assinatura seja informada.

## Saída

O relatório é **editável**, de propósito: o projetista complementa as premissas
antes de emitir.

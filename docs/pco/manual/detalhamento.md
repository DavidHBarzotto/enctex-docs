# Detalhamento

Terceira aba. Desenha as armaduras do bloco e exporta em **DXF**, pronto para a
prancha.

## O que é desenhado

O detalhamento é **interativo**: o desenho responde às escolhas de bitola e
disposição, e não é uma saída fixa.

| Elemento | |
| :-- | :-- |
| Armadura principal de tração | O tirante, por lado do polígono de estacas |
| Armadura de distribuição | |
| Estribos | Quando o modelo os exige — bloco flexível calculado como viga |
| Geometria do bloco | Contorno, estacas e pilares em planta e corte |

## Quadro de ferro

O quadro relaciona as barras por posição, com bitola, comprimento, quantidade e
peso.

!!! info "O quadro usa o MESMO aço do texto do dimensionamento"

    Não são duas contas. A armadura que aparece no quadro de ferro vem da mesma
    fonte que o texto da aba de dimensionamento — inclusive nas fórmulas
    tabeladas de Blévot por arranjo.

    Isso é deliberado: quadro e memória divergirem é o tipo de inconsistência
    que só aparece na obra.

## Exportação em DXF

O arquivo sai em escala real, em camadas separadas, e abre em qualquer CAD. Os
arquivos são nomeados por bloco — `Detalhamento_Bloco_1.dxf`, por exemplo.

!!! warning "Regenere depois de qualquer alteração"

    O desenho reflete o dimensionamento corrente. Se você voltar às abas
    anteriores e mudar geometria, ações, modelo ou bitolas, **regenere**. O DXF
    já exportado continua no disco e não se atualiza sozinho.

## Ancoragem do tirante

Vale a atenção específica: o tirante só existe se estiver **ancorado além do
eixo da estaca**. É a extremidade que garante que a força de tração seja de
fato transferida — um tirante que termina antes disso é uma barra solta na
base do bloco.

Confira o comprimento de ancoragem no detalhamento antes de emitir a prancha.

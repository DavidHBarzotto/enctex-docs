# Detalhamento (DXF)

Sétima aba. Gera o desenho de execução da estaca e exporta em **DXF**, pronto
para a prancha.

## Fluxo

1. **Analisar e Agrupar Estacas** — identifica estacas idênticas e as reúne em
   grupos.
2. **Gerar Visualização** — desenha o detalhamento na tela.
3. **Enquadrar Desenho** — ajusta o zoom.
4. **Exportar DXF** — grava o arquivo.

O botão **Limpar Desenho** descarta a visualização corrente.

## Agrupamento

O agrupamento é o recurso que evita detalhar vinte vezes a mesma estaca. O
programa compara as estacas do projeto e reúne as que têm a mesma geometria,
comprimento e armadura.

| Modo | Quando usar |
| :-- | :-- |
| Estaca Individual | Detalhar uma peça específica |
| Grupo Identificado | Detalhar um tipo, representando todas as iguais |

!!! tip "Detalhe por grupo, não por estaca"

    Numa obra com quarenta estacas e três tipos, detalhar por grupo produz três
    desenhos em vez de quarenta — e é assim que a prancha é lida em obra. O
    agrupamento também alimenta o [relatório](relatorio.md), que pode ser
    emitido na mesma lógica.

## Parâmetros do desenho

| Campo | Unidade | Efeito |
| :-- | :-- | :-- |
| Embutimento | cm | Penetração da armadura no bloco |
| Ancoragem \(L_b\) | cm | Comprimento de ancoragem |
| \(L_b\) Automático (40Ø) | — | Calcula \(L_b = 40\phi\) |
| Ponta Cônica (Estrangulada) | — | Desenha a ponta estrangulada |

!!! note "\(L_b = 40\phi\) é uma regra prática"

    A opção automática adota quarenta diâmetros, valor usual e conservador para
    as situações correntes. O comprimento de ancoragem rigoroso da NBR 6118
    depende da situação de aderência, da classe do concreto e da relação entre
    área calculada e efetiva.

    Quando a ancoragem for crítica — estaca tracionada, sobretudo — calcule-a e
    informe o valor manualmente.

## O arquivo DXF

O DXF sai com o desenho em escala real, em camadas separadas, e abre em
qualquer CAD. Os arquivos são nomeados por estaca ou por grupo, conforme o modo
escolhido — `Detalhamento_Grupo_1_Sondagem_1.dxf`, por exemplo, identifica
grupo e furo de referência.

!!! warning "O desenho é 'as-built' do que foi calculado"

    O detalhamento reflete o dimensionamento corrente. Se você voltar às abas
    anteriores e alterar qualquer coisa — sondagem, geometria, armadura —,
    **regenere o desenho**. O DXF exportado antes continua no disco e não é
    atualizado sozinho.

# Dimensionamento

Sexta aba. Dimensiona a seção circular de concreto armado com os esforços da
análise, conforme a NBR 6118.

## Entradas

| Campo | Unidade | Observação |
| :-- | :-- | :-- |
| \(f_{ck}\) | MPa | Resistência do concreto |
| \(f_{yk}\) | MPa | Aço longitudinal, usualmente 500 (CA-50) |
| \(E_s\) | MPa | Módulo do aço, padrão 210 000 |
| Diâmetro da barra longitudinal \(\phi_\ell\) | mm | |
| Número de barras | — | Deixe automático para o programa procurar |
| Diâmetro do estribo \(\phi_t\) | mm | Mínimo \(\max(5;\, \phi_\ell/4)\) |
| Cobrimento | cm | Vem da classe de agressividade, mas pode ser editado |
| Comprimento de flambagem \(\ell_e\) | cm | Ver observação abaixo |

!!! warning "O comprimento de flambagem é julgamento seu"

    \(\ell_e\) é dado de entrada, não calculado. Determiná-lo em estaca
    parcialmente enterrada exige critério: o trecho enterrado é contido pelo
    solo, mas a rigidez dessa contenção depende do próprio \(K_h\). Uma estaca
    inteiramente enterrada em solo competente raramente tem problema de
    flambagem; uma com trecho exposto, sim.

## Armadura longitudinal

O programa verifica a seção à **flexão composta oblíqua**, compondo
vetorialmente os momentos dos dois eixos e acrescentando o efeito de segunda
ordem quando \(40 < \lambda \le 140\).

O resultado é apresentado como **diagrama de interação** \(N\)–\(M\): a
fronteira da seção com a armadura adotada, e o ponto solicitante marcado sobre
ela. A leitura é imediata — vê-se a margem, não apenas o veredicto.

| Situação | Leitura |
| :-- | :-- |
| Ponto bem dentro da curva | Seção folgada; considere reduzir armadura ou diâmetro |
| Ponto próximo à fronteira | Dimensionamento apertado, mas válido |
| Ponto fora | Seção insuficiente — aumente armadura, \(f_{ck}\) ou diâmetro |

!!! note "Mínimo de 6 barras"

    Seção circular exige no mínimo seis barras longitudinais, por prescrição
    normativa. Mesmo quando o cálculo dispensa armadura, esse mínimo
    construtivo costuma prevalecer — por içamento, cravação e amarração ao
    bloco.

### Dispensa de armadura

Quando \(\sigma_{sd} = N_d/A_c \le 5\) MPa **e** \(\sigma_{sd} \le 0{,}85
f_{ck}\), o cálculo dispensa armadura. O programa sinaliza a condição, mas a
decisão de aproveitá-la é do projetista.

## Armadura transversal

Os estribos são dimensionados pelo **Modelo I** da NBR 6118.

A primeira verificação é o **esmagamento da biela**. Se
\(\tau_{wd} > \tau_{wu}\), o programa **recusa** o dimensionamento com
mensagem explícita: nenhuma armadura resolve esmagamento de biela: é preciso
aumentar o diâmetro da estaca ou a resistência do concreto.

O resultado traz:

| Saída | Conteúdo |
| :-- | :-- |
| \(V_d\) | Cortante de cálculo, composto dos dois eixos |
| Área mínima norma | \(A_{sw,min}\) em cm²/m |
| Área efetiva adotada | O maior entre o calculado e o mínimo |
| Diâmetro do estribo | Conforme entrada |
| Espaçamento adotado \(s\) | O menor entre teórico, normativo e construtivo |
| Estribos por metro | \(100/s\) |

!!! info "Qual critério governou o espaçamento"

    O espaçamento adotado é o **menor** entre três limites — o teórico do
    cálculo, o normativo do ELU e o construtivo
    (\(\min(20\text{ cm};\, D;\, 12\phi_\ell)\)) — com trava inferior de 5 cm.

    Em estaca, o critério construtivo governa com frequência: o cortante costuma
    ser modesto e o que aperta os estribos é o limite geométrico.

    Ver [formulação do cortante](../formulacoes/dimensionamento.md#esforco-cortante).

## Mensagens de erro

??? question "\"Diâmetro do estribo inválido. Mínimo exigido: X mm\""

    O estribo precisa ter ao menos \(\max(5\text{ mm};\, \phi_\ell/4)\).
    Aumente \(\phi_t\) ou reduza \(\phi_\ell\).

??? question "\"Esmagamento da biela\""

    A seção é insuficiente para o cortante. Aumente o diâmetro da estaca ou o
    \(f_{ck}\) — armadura não resolve.

??? question "O ponto cai fora do diagrama de interação"

    A seção não resiste à combinação \(N\)–\(M\). Aumente a armadura, o
    \(f_{ck}\) ou o diâmetro. Se \(\lambda\) estiver alto, boa parte do momento
    pode ser de segunda ordem — nesse caso, aumentar o diâmetro é mais eficaz
    que aumentar a armadura.

# Tabelas de parâmetros

Os coeficientes dos métodos semiempíricos, conforme Cintra & Aoki, *Fundações
por estacas: projeto geotécnico*.

!!! warning "Coeficientes de mesmo nome, significados diferentes"

    \(\alpha\) aparece nos três métodos querendo dizer coisas distintas:

    - Em **Aoki-Velloso** é a razão de atrito \(f_s/q_c\), **adimensional**, em %.
    - Em **Décourt (1996)** é um fator de correção da ponta, **adimensional**.
    - Em **Teixeira** é uma tensão, em **kPa**, que multiplica \(N_{SPT}\).

    O mesmo vale para \(\beta\). Não são intercambiáveis.

---

## Aoki-Velloso

### Coeficiente K e razão de atrito α

Tab. 1.3 — Aoki e Velloso (1975).

| Solo | \(K\) (MPa) | \(\alpha\) (%) |
| :-- | --: | --: |
| Areia | 1,00 | 1,4 |
| Areia siltosa | 0,80 | 2,0 |
| Areia siltoargilosa | 0,70 | 2,4 |
| Areia argilosa | 0,60 | 3,0 |
| Areia argilossiltosa | 0,50 | 2,8 |
| Silte | 0,40 | 3,0 |
| Silte arenoso | 0,55 | 2,2 |
| Silte arenoargiloso | 0,45 | 2,8 |
| Silte argiloso | 0,23 | 3,4 |
| Silte argiloarenoso | 0,25 | 3,0 |
| Argila | 0,20 | 6,0 |
| Argila arenosa | 0,35 | 2,4 |
| Argila arenossiltosa | 0,30 | 2,8 |
| Argila siltosa | 0,22 | 4,0 |
| Argila siltoarenosa | 0,33 | 3,0 |

!!! note "A relação entre K e α é inversa"

    Areia limpa tem \(K\) alto (1,00 MPa) e \(\alpha\) baixo (1,4 %): resiste
    muito por ponta e pouco por atrito. Argila é o oposto — 0,20 MPa e 6,0 %.
    É por isso que estaca em argila trabalha por fuste e estaca em areia densa
    trabalha por ponta.

### Fatores de correção F1 e F2 {: #fatores-de-execucao }

Tab. 1.5 — valores atualizados, adaptados de Aoki e Velloso (1975).

| Tipo de estaca | \(F_1\) | \(F_2\) |
| :-- | :-- | :-- |
| Franki | 2,50 | \(2F_1\) |
| Metálica | 1,75 | \(2F_1\) |
| Pré-moldada | \(1 + D/0{,}80\) | \(2F_1\) |
| Escavada | 3,0 | \(2F_1\) |
| Raiz, Hélice contínua e Ômega | 2,0 | \(2F_1\) |

Os fatores são **divisores**: quanto maiores, menor a capacidade. A escala é a
do efeito da execução sobre o solo — a cravada densifica o terreno e leva os
menores fatores; a escavada, que alivia tensões, leva os maiores.

!!! info "De onde vieram os valores atualizados"

    A tabela original (1975) trazia apenas Franki 2,50, Metálica 1,75 e
    Pré-moldada 1,75.

    - **Pré-moldada**: Aoki (1985) constatou que o método era conservador
      demais para pequenos diâmetros e propôs \(F_1 = 1 + D/0{,}80\), com \(D\)
      em metros — o diâmetro ou lado da seção do fuste.
    - **Escavada**: \(F_1 = 3{,}0\) e \(F_2 = 6{,}0\), de Aoki e Alonso (1991).
    - **Raiz, hélice contínua e ômega**: \(F_1 = 2{,}0\) e \(F_2 = 4{,}0\), de
      Velloso e Lopes (2002).

---

## Décourt-Quaresma

### Coeficiente característico do solo C

Tab. 1.6 — Décourt e Quaresma (1978). Ajustado com 41 provas de carga em
estacas pré-moldadas de concreto.

| Tipo de solo | \(C\) (kPa) |
| :-- | --: |
| Argila | 120 |
| Silte argiloso \*  | 200 |
| Silte arenoso \* | 250 |
| Areia | 400 |

\* alteração de rocha — solos residuais.

### Fatores α e β de Décourt (1996) {: #fatores-alfa-e-beta }

Tabs. 1.7 e 1.8. Note que a classificação é em **três famílias** — argilas,
solos intermediários e areias —, e não pelo código completo de solo.

**Fator α**, sobre a resistência de ponta:

| Tipo de solo | Escavada em geral | Escavada (bentonita) | Hélice contínua | Raiz | Injetada sob altas pressões |
| :-- | --: | --: | --: | --: | --: |
| Argilas | 0,85 | 0,85 | 0,30 \* | 0,85 \* | 1,00 \* |
| Solos intermediários | 0,60 | 0,60 | 0,30 \* | 0,60 \* | 1,00 \* |
| Areias | 0,50 | 0,50 | 0,30 \* | 0,50 \* | 1,00 \* |

**Fator β**, sobre a resistência lateral:

| Tipo de solo | Escavada em geral | Escavada (bentonita) | Hélice contínua | Raiz | Injetada sob altas pressões |
| :-- | --: | --: | --: | --: | --: |
| Argilas | 0,80 \* | 0,90 \* | 1,00 \* | 1,50 \* | 3,00 \* |
| Solos intermediários | 0,65 \* | 0,75 \* | 1,00 \* | 1,50 \* | 3,00 \* |
| Areias | 0,50 \* | 0,60 \* | 1,00 \* | 1,50 \* | 3,00 \* |

\* valores apenas orientativos, diante do reduzido número de dados disponíveis.

!!! warning "O sentido da variação: argila em cima, areia embaixo"

    Em \(\alpha\), a **argila** leva o valor mais alto (0,85) e a **areia** o
    mais baixo (0,50). É contraintuitivo para quem espera que areia resista
    mais — mas o fator não mede resistência, e sim **quanto do método original
    se aproveita** naquele solo com aquela execução. A escavação alivia mais a
    ponta em areia que em argila, e é isso que o fator penaliza.

    Trocar as linhas inverte o resultado: uma escavada em areia ganharia 70 % a
    mais de ponta do que deve.

!!! info "Três tipos ficam de fora"

    Pré-moldadas, metálicas e Franki mantêm \(\alpha = \beta = 1\) — o método
    original de 1978, sem correção.

---

## Teixeira

Válida para \(4 < N_{SPT} < 40\).

### Parâmetro α (kPa)

Tab. 1.9 — Teixeira (1996). Depende do solo **e** do tipo de estaca.

| Solo | Pré-moldada e perfil metálico | Franki | Escavada a céu aberto | Raiz |
| :-- | --: | --: | --: | --: |
| Argila siltosa | 110 | 100 | 100 | 100 |
| Silte argiloso | 160 | 120 | 110 | 110 |
| Argila arenosa | 210 | 160 | 130 | 140 |
| Silte arenoso | 260 | 210 | 160 | 160 |
| Areia argilosa | 300 | 240 | 200 | 190 |
| Areia siltosa | 360 | 300 | 240 | 220 |
| Areia | 400 | 340 | 270 | 260 |
| Areia com pedregulhos | 440 | 380 | 310 | 290 |

### Parâmetro β (kPa)

Tab. 1.10 — depende **apenas** do tipo de estaca.

| Tipo de estaca | \(\beta\) (kPa) |
| :-- | --: |
| Pré-moldada e perfil metálico | 4 |
| Franki | 5 |
| Escavada a céu aberto | 4 |
| Raiz | 6 |

### Atrito lateral em argila mole sensível

Tab. 1.11 — para o caso em que o método **não se aplica**: estacas
pré-moldadas de concreto flutuantes em espessas camadas de argila mole
sensível, com \(N_{SPT}\) normalmente inferior a 3. Aqui \(r_L\) é tabelado
direto, pela natureza do sedimento.

| Sedimento | \(r_L\) (kPa) |
| :-- | --: |
| Argila fluviolagunar (SFL) | 20 a 30 |
| Argila transicional (AT) | 60 a 80 |

**SFL** — argilas fluviolagunares e de baías, holocênicas, situadas até cerca
de 20 a 25 m de profundidade, com \(N_{SPT} < 3\), cinza-escuras, ligeiramente
pré-adensadas.

**AT** — argilas transicionais, pleistocênicas, subjacentes ao SFL, com
\(N_{SPT}\) de 4 a 8, às vezes cinza-claras, com tensões de pré-adensamento
maiores que as do SFL.

!!! warning "A tabela do programa cobre mais tipos que a fonte"

    Teixeira tabelou **quatro** tipos de estaca. O SPX oferece sete, e os três
    restantes — escavada com fluido, hélice contínua e ômega — recebem valores
    **extrapolados**, não publicados pelo autor.

    Registre isso na memória de cálculo quando usar o método nesses tipos.

---

## Coeficiente m para Kh

Usado na [reação do solo](reacao-do-solo.md), não na capacidade de carga.
Selecionado pela fração dominante — solos arenosos e siltosos usam a tabela de
areia, argilosos a de argila.

### Areias e siltes (kN/m⁴)

| \(N_{SPT}\) | Compacidade | \(m\) |
| --: | :-- | --: |
| 1–6 | Fofa | 1500 – 2750 |
| 7–39 | Pouco compacta | 3000 – 7850 |
| 40–49 | Compacta | 8000 – 14300 |
| 50 | Muito compacta | 15000 |

A tabela é definida ponto a ponto para cada \(N_{SPT}\) inteiro, com progressão
linear por faixa: cerca de 154 kN/m⁴ por golpe na faixa pouco compacta e 700 na
compacta.

### Argilas (kN/m⁴)

| \(N_{SPT}\) | Consistência | \(m\) |
| --: | :-- | --: |
| 0 | Meio líquido | 250 |
| 1–2 | Muito mole | 750 – 1125 |
| 3–5 | Mole | 1500 – 2500 |
| 6–11 | Média | 3000 – 4667 |
| 12–21 | Rija | 5000 – 6800 |
| 22–29 | Muito rija | 7000 – 8750 |
| 30 | Dura | 9000 |

!!! warning validade "Saturação fora da faixa"

    Acima do último \(N_{SPT}\) tabelado — 50 para areias, 30 para argilas — o
    programa adota o último valor, **sem extrapolar**. Uma argila com
    \(N = 45\) recebe o mesmo \(m\) de uma com \(N = 30\).

    É a decisão conservadora, mas significa que, em solos muito resistentes, o
    modelo subestima a rigidez horizontal e superestima os deslocamentos.

---

## Módulo de deformabilidade do solo

Usado no [recalque](recalque.md). Aoki (1984):

| Tipo de estaca | \(E_0\) |
| :-- | :-- |
| Cravadas | \(6 \, K \, N_{SPT}\) |
| Hélice contínua | \(4 \, K \, N_{SPT}\) |
| Escavadas | \(3 \, K \, N_{SPT}\) |

com \(K\) da tabela de [Aoki-Velloso](#aoki-velloso).

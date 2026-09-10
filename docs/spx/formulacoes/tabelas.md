# Tabelas de parâmetros

Os coeficientes usados pelos métodos semiempíricos. Todos são selecionados pelo
[código de solo](../../comecar/convencoes.md#codigos-de-solo) e, quando cabe,
pelo tipo de estaca.

---

## Aoki-Velloso

### Coeficientes K e α

Selecionados pelo código completo do solo.

| Código | Solo | \(K\) (kPa) | \(\alpha\) |
| :-- | :-- | --: | --: |
| 1 | Areia | 1000 | 0,014 |
| 12 | Areia Siltosa | 800 | 0,020 |
| 123 | Areia Siltoargilosa | 700 | 0,024 |
| 13 | Areia Argilosa | 600 | 0,030 |
| 132 | Areia Argilossiltosa | 500 | 0,028 |
| 2 | Silte | 400 | 0,030 |
| 21 | Silte Arenoso | 550 | 0,022 |
| 213 | Silte Arenoargiloso | 450 | 0,028 |
| 23 | Silte Argiloso | 230 | 0,034 |
| 231 | Silte Argiloarenoso | 250 | 0,030 |
| 3 | Argila | 200 | 0,060 |
| 31 | Argila Arenosa | 350 | 0,024 |
| 312 | Argila Arenossiltosa | 300 | 0,028 |
| 32 | Argila Siltosa | 220 | 0,040 |
| 321 | Argila Siltoarenosa | 330 | 0,030 |

!!! note "A relação entre \(K\) e \(\alpha\) é inversa"

    Areia limpa tem \(K\) alto (1000 kPa) e \(\alpha\) baixo (1,4 %): resiste
    muito por ponta e pouco por atrito. Argila é o oposto — \(K\) de 200 kPa e
    \(\alpha\) de 6 %. É por isso que estaca em argila trabalha por fuste e
    estaca em areia densa trabalha por ponta.

### Fatores de execução F1 e F2 {: #fatores-de-execucao }

| Tipo de estaca | \(F_1\) | \(F_2\) |
| :-- | --: | --: |
| Franki | 2,5 | 5,0 |
| Pré-moldada | 1,75 | 3,5 |
| Escavada com fluido | 3,0 | 6,0 |
| Escavada sem fluido | 3,0 | 6,0 |
| Raiz | 2,0 | 4,0 |
| Hélice contínua | 2,0 | 4,0 |
| Ômega | 2,0 | 4,0 |

Os fatores são **divisores**: quanto maiores, menor a capacidade. A escala é a
do efeito da execução sobre o solo — a pré-moldada, cravada, densifica o
terreno e leva os menores fatores; a escavada, que alivia tensões, leva os
maiores.

Em todos, \(F_2 = 2F_1\).

---

## Décourt-Quaresma

### Coeficiente C

Selecionado pelo código completo do solo.

| Código | Solo | \(C\) (kPa) |
| :-- | :-- | --: |
| 1, 12, 123, 13, 132 | Areias | 400 |
| 2 | Silte | 225 |
| 21, 213 | Siltes arenosos | 250 |
| 23, 231 | Siltes argilosos | 200 |
| 3, 31, 312, 32, 321 | Argilas | 120 |

### Coeficientes α e β

Selecionados pelo **dígito dominante** do solo e pelo tipo de estaca.

| Tipo de estaca | Solo | \(\alpha\) | \(\beta\) |
| :-- | :-- | --: | --: |
| Escavada com fluido | Areia | 0,85 | 0,90 |
| Escavada com fluido | Silte | 0,60 | 0,75 |
| Escavada com fluido | Argila | 0,50 | 0,60 |
| Escavada sem fluido | Areia | 0,85 | 0,80 |
| Escavada sem fluido | Silte | 0,60 | 0,65 |
| Escavada sem fluido | Argila | 0,50 | 0,50 |
| Hélice contínua | Todos | 0,30 | 1,00 |
| Raiz | Areia | 0,85 | 1,50 |
| Raiz | Silte | 0,60 | 1,50 |
| Raiz | Argila | 0,50 | 1,50 |
| Pré-moldada | Todos | 1,00 | 1,00 |
| Franki | Todos | 1,00 | 1,00 |
| Ômega | Todos | 1,00 | 1,00 |

!!! info "Hélice contínua: ponta penalizada, fuste inteiro"

    O par \(\alpha = 0{,}30\) e \(\beta = 1{,}00\) da hélice contínua é o mais
    assimétrico da tabela, e traduz a experiência de execução: a limpeza do
    fundo é ruim (ponta a 30 %), mas o concreto bombeado sob pressão garante
    aderência plena no fuste.

---

## Teixeira

### Coeficiente αT (kPa)

Depende simultaneamente do solo e do tipo de estaca.

| Código | Solo | Pré-mold. | Esc. c/ fluido | Esc. s/ fluido | Franki | Raiz | Hélice | Ômega |
| :-- | :-- | --: | --: | --: | --: | --: | --: | --: |
| 1 | Areia | 400 | 400 | 270 | 340 | 260 | 270 | 270 |
| 12 | Areia Siltosa | 360 | 360 | 240 | 300 | 220 | 240 | 240 |
| 123 | Areia Siltoargilosa | 330 | 330 | 220 | 270 | 205 | 220 | 220 |
| 13 | Areia Argilosa | 300 | 300 | 200 | 240 | 190 | 200 | 200 |
| 132 | Areia Argilossiltosa | 330 | 330 | 220 | 270 | 205 | 220 | 220 |
| 2 | Silte | 160 | 160 | 110 | 120 | 110 | 110 | 110 |
| 21 | Silte Arenoso | 260 | 260 | 160 | 210 | 160 | 160 | 160 |
| 213 | Silte Arenoargiloso | 210 | 210 | 135 | 165 | 135 | 135 | 135 |
| 23 | Silte Argiloso | 160 | 160 | 110 | 120 | 110 | 110 | 110 |
| 231 | Silte Argiloarenoso | 135 | 135 | 135 | 165 | 135 | 135 | 135 |
| 3 | Argila | 100 | 100 | 100 | 100 | 100 | 100 | 100 |
| 31 | Argila Arenosa | 130 | 130 | 130 | 160 | 140 | 130 | 130 |
| 312 | Argila Arenossiltosa | 115 | 115 | 115 | 130 | 120 | 115 | 115 |
| 32 | Argila Siltosa | 100 | 100 | 100 | 100 | 100 | 100 | 100 |
| 321 | Argila Siltoarenosa | 115 | 115 | 115 | 130 | 120 | 115 | 115 |

### Coeficiente βT (kPa)

Depende só do tipo de estaca.

| Tipo de estaca | \(\beta_T\) |
| :-- | --: |
| Pré-moldada | 4 |
| Escavada com fluido | 4 |
| Escavada sem fluido | 4 |
| Hélice contínua | 4 |
| Ômega | 4 |
| Franki | 5 |
| Raiz | 6 |

---

## Coeficiente m para Kh

Usado na [reação do solo](reacao-do-solo.md). Selecionado pelo dígito
dominante — areias e siltes usam a tabela de areia, argilas a de argila.

### Areias e siltes (kN/m⁴)

| \(N_{SPT}\) | Compacidade | \(m\) |
| --: | :-- | --: |
| 1–6 | Fofa | 1500 – 2750 |
| 7–39 | Pouco compacta | 3000 – 7850 |
| 40–49 | Compacta | 8000 – 14300 |
| 50 | Muito compacta | 15000 |

A tabela é definida ponto a ponto para cada \(N_{SPT}\) inteiro. A progressão é
linear por faixa, com inclinações diferentes: cerca de 154 kN/m⁴ por golpe na
faixa pouco compacta e 700 na compacta.

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
    programa adota o último valor, **sem extrapolar**. Uma argila com \(N = 45\)
    recebe o mesmo \(m\) de uma com \(N = 30\).

    É a decisão conservadora, mas significa que, em solos muito resistentes, o
    modelo subestima a rigidez horizontal e superestima os deslocamentos.

---

## Pesos específicos

Usados na tensão geostática do cálculo de [recalque](recalque.md), buscados por
\(N_{SPT}\) médio e natureza do solo. Na falta de correspondência, o programa
adota 18 kN/m³.

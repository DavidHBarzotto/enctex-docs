# Tablas de parámetros

Los coeficientes de los métodos semiempíricos, según Cintra & Aoki,
*Fundações por estacas: projeto geotécnico*.

!!! warning "Coeficientes con el mismo nombre, significados distintos"

    \(\alpha\) aparece en los tres métodos con significados diferentes:

    - En **Aoki-Velloso** es la razón de fricción \(f_s/q_c\),
      **adimensional**, en %.
    - En **Décourt (1996)** es un factor de corrección de la punta,
      **adimensional**.
    - En **Teixeira** es una tensión, en **kPa**, que multiplica \(N_{SPT}\).

    Lo mismo vale para \(\beta\). No son intercambiables.

---

## Aoki-Velloso { #aoki-velloso }

### Coeficiente K y razón de fricción α { #coeficiente-k-e-razao-de-atrito }

Tabla 1.3 — Aoki y Velloso (1975).

| Suelo | \(K\) (MPa) | \(\alpha\) (%) |
| :-- | --: | --: |
| Arena | 1,00 | 1,4 |
| Arena limosa | 0,80 | 2,0 |
| Arena limoarcillosa | 0,70 | 2,4 |
| Arena arcillosa | 0,60 | 3,0 |
| Arena arcillolimosa | 0,50 | 2,8 |
| Limo | 0,40 | 3,0 |
| Limo arenoso | 0,55 | 2,2 |
| Limo arenoarcilloso | 0,45 | 2,8 |
| Limo arcilloso | 0,23 | 3,4 |
| Limo arcilloarenoso | 0,25 | 3,0 |
| Arcilla | 0,20 | 6,0 |
| Arcilla arenosa | 0,35 | 2,4 |
| Arcilla arenolimosa | 0,30 | 2,8 |
| Arcilla limosa | 0,22 | 4,0 |
| Arcilla limoarenosa | 0,33 | 3,0 |

!!! note "La relación entre K y α es inversa"

    La arena limpia tiene \(K\) alto (1,00 MPa) y \(\alpha\) bajo (1,4 %):
    resiste mucho por punta y poco por fricción. La arcilla es lo opuesto —
    0,20 MPa y 6,0 %. Por eso un pilote en arcilla trabaja por fuste y un
    pilote en arena densa trabaja por punta.

### Factores de corrección F1 y F2 {: #fatores-de-execucao }

Tabla 1.5 — valores actualizados, adaptados de Aoki y Velloso (1975).

| Tipo de pilote | \(F_1\) | \(F_2\) |
| :-- | :-- | :-- |
| Franki | 2,50 | \(2F_1\) |
| Metálico | 1,75 | \(2F_1\) |
| Prefabricado | \(1 + D/0{,}80\) | \(2F_1\) |
| Excavado | 3,0 | \(2F_1\) |
| Raíz, hélice continua y Omega | 2,0 | \(2F_1\) |

Los factores son **divisores**: cuanto mayores, menor la capacidad. La escala
es la del efecto de la ejecución sobre el suelo — el hincado densifica el
terreno y lleva los menores factores; el excavado, que alivia tensiones, lleva
los mayores.

!!! info "De dónde vinieron los valores actualizados"

    La tabla original (1975) solo traía Franki 2,50, Metálico 1,75 y
    Prefabricado 1,75.

    - **Prefabricado**: Aoki (1985) constató que el método era demasiado
      conservador para diámetros pequeños y propuso \(F_1 = 1 + D/0{,}80\),
      con \(D\) en metros — el diámetro o lado de la sección del fuste.
    - **Excavado**: \(F_1 = 3{,}0\) y \(F_2 = 6{,}0\), de Aoki y Alonso
      (1991).
    - **Raíz, hélice continua y Omega**: \(F_1 = 2{,}0\) y \(F_2 = 4{,}0\), de
      Velloso y Lopes (2002).

---

## Décourt-Quaresma { #decourt-quaresma }

### Coeficiente característico del suelo C { #coeficiente-caracteristico-do-solo-c }

Tabla 1.6 — Décourt y Quaresma (1978). Ajustado con 41 pruebas de carga en
pilotes prefabricados de hormigón.

| Tipo de suelo | \(C\) (kPa) |
| :-- | --: |
| Arcilla | 120 |
| Limo arcilloso \*  | 200 |
| Limo arenoso \* | 250 |
| Arena | 400 |

\* roca alterada — suelos residuales.

### Factores α y β de Décourt (1996) {: #fatores-alfa-e-beta }

Tablas 1.7 y 1.8. Note que la clasificación es en **tres familias** —
arcillas, suelos intermedios y arenas —, y no por el código completo de suelo.

**Factor α**, sobre la resistencia de punta:

| Tipo de suelo | Excavado en general | Excavado (bentonita) | Hélice continua | Raíz | Inyectado a alta presión |
| :-- | --: | --: | --: | --: | --: |
| Arcillas | 0,85 | 0,85 | 0,30 \* | 0,85 \* | 1,00 \* |
| Suelos intermedios | 0,60 | 0,60 | 0,30 \* | 0,60 \* | 1,00 \* |
| Arenas | 0,50 | 0,50 | 0,30 \* | 0,50 \* | 1,00 \* |

**Factor β**, sobre la resistencia lateral:

| Tipo de suelo | Excavado en general | Excavado (bentonita) | Hélice continua | Raíz | Inyectado a alta presión |
| :-- | --: | --: | --: | --: | --: |
| Arcillas | 0,80 \* | 0,90 \* | 1,00 \* | 1,50 \* | 3,00 \* |
| Suelos intermedios | 0,65 \* | 0,75 \* | 1,00 \* | 1,50 \* | 3,00 \* |
| Arenas | 0,50 \* | 0,60 \* | 1,00 \* | 1,50 \* | 3,00 \* |

\* valores solo orientativos, ante el reducido número de datos disponibles.

!!! warning "El sentido de la variación: arcilla arriba, arena abajo"

    En \(\alpha\), la **arcilla** lleva el valor más alto (0,85) y la
    **arena** el más bajo (0,50). Es contraintuitivo para quien espera que la
    arena resista más — pero el factor no mide resistencia, sino **cuánto del
    método original se aprovecha** en ese suelo con esa ejecución. La
    excavación alivia más la punta en arena que en arcilla, y eso es lo que el
    factor penaliza.

    Invertir las filas invierte el resultado: un pilote excavado en arena
    ganaría un 70 % más de punta de lo que debe.

!!! info "Tres tipos quedan fuera"

    Los pilotes prefabricados, metálicos y Franki mantienen
    \(\alpha = \beta = 1\) — el método original de 1978, sin corrección.

---

## Teixeira { #teixeira }

Válida para \(4 < N_{SPT} < 40\).

### Parámetro α (kPa) { #parametro-kpa }

Tabla 1.9 — Teixeira (1996). Depende del suelo **y** del tipo de pilote.

| Suelo | Prefabricado y perfil metálico | Franki | Excavado a cielo abierto | Raíz |
| :-- | --: | --: | --: | --: |
| Arcilla limosa | 110 | 100 | 100 | 100 |
| Limo arcilloso | 160 | 120 | 110 | 110 |
| Arcilla arenosa | 210 | 160 | 130 | 140 |
| Limo arenoso | 260 | 210 | 160 | 160 |
| Arena arcillosa | 300 | 240 | 200 | 190 |
| Arena limosa | 360 | 300 | 240 | 220 |
| Arena | 400 | 340 | 270 | 260 |
| Arena con grava | 440 | 380 | 310 | 290 |

### Parámetro β (kPa) { #parametro-kpa_1 }

Tabla 1.10 — depende **solo** del tipo de pilote.

| Tipo de pilote | \(\beta\) (kPa) |
| :-- | --: |
| Prefabricado y perfil metálico | 4 |
| Franki | 5 |
| Excavado a cielo abierto | 4 |
| Raíz | 6 |

### Fricción lateral en arcilla blanda sensible { #atrito-lateral-em-argila-mole-sensivel }

Tabla 1.11 — para el caso en que el método **no se aplica**: pilotes
prefabricados de hormigón flotantes en capas espesas de arcilla blanda
sensible, con \(N_{SPT}\) normalmente inferior a 3. Aquí \(r_L\) se tabula
directamente, según la naturaleza del sedimento.

| Sedimento | \(r_L\) (kPa) |
| :-- | --: |
| Arcilla fluviolagunar (SFL) | 20 a 30 |
| Arcilla transicional (AT) | 60 a 80 |

**SFL** — arcillas fluviolagunares y de bahías, holocénicas, situadas hasta
cerca de 20 a 25 m de profundidad, con \(N_{SPT} < 3\), gris oscuro,
ligeramente preconsolidadas.

**AT** — arcillas transicionales, pleistocénicas, subyacentes al SFL, con
\(N_{SPT}\) de 4 a 8, a veces gris claro, con tensiones de preconsolidación
mayores que las del SFL.

!!! warning "La tabla del programa cubre más tipos que la fuente"

    Teixeira tabuló **cuatro** tipos de pilote. El SPX ofrece siete, y los tres
    restantes — excavado con lodo, hélice continua y Omega — reciben valores
    **extrapolados**, no publicados por el autor.

    Regístrelo en la memoria de cálculo cuando use el método en esos tipos.

---

## Coeficiente m para Kh { #coeficiente-m-para-kh }

Se usa en la [reacción del suelo](reacao-do-solo.md), no en la capacidad de
carga. Se selecciona por la fracción dominante — los suelos arenosos y limosos
usan la tabla de arena, los arcillosos la de arcilla.

### Arenas y limos (kN/m⁴) { #areias-e-siltes-knm4 }

| \(N_{SPT}\) | Compacidad | \(m\) |
| --: | :-- | --: |
| 1–6 | Suelta | 1500 – 2750 |
| 7–39 | Poco compacta | 3000 – 7850 |
| 40–49 | Compacta | 8000 – 14300 |
| 50 | Muy compacta | 15000 |

La tabla se define punto a punto para cada \(N_{SPT}\) entero, con progresión
lineal por rango: cerca de 154 kN/m⁴ por golpe en el rango poco compacto y 700
en el compacto.

### Arcillas (kN/m⁴) { #argilas-knm4 }

| \(N_{SPT}\) | Consistencia | \(m\) |
| --: | :-- | --: |
| 0 | Semilíquida | 250 |
| 1–2 | Muy blanda | 750 – 1125 |
| 3–5 | Blanda | 1500 – 2500 |
| 6–11 | Media | 3000 – 4667 |
| 12–21 | Firme | 5000 – 6800 |
| 22–29 | Muy firme | 7000 – 8750 |
| 30 | Dura | 9000 |

!!! warning validade "Saturación fuera del rango"

    Por encima del último \(N_{SPT}\) tabulado — 50 para arenas, 30 para
    arcillas — el programa adopta el último valor, **sin extrapolar**. Una
    arcilla con \(N = 45\) recibe el mismo \(m\) que una con \(N = 30\).

    Es la decisión conservadora, pero significa que, en suelos muy
    resistentes, el modelo subestima la rigidez horizontal y sobrestima los
    desplazamientos.

---

## Módulo de deformabilidad del suelo { #modulo-de-deformabilidade-do-solo }

Se usa en el [asentamiento](recalque.md). Aoki (1984):

| Tipo de pilote | \(E_0\) |
| :-- | :-- |
| Hincados | \(6 \, K \, N_{SPT}\) |
| Hélice continua | \(4 \, K \, N_{SPT}\) |
| Excavados | \(3 \, K \, N_{SPT}\) |

con \(K\) de la tabla de [Aoki-Velloso](#aoki-velloso).

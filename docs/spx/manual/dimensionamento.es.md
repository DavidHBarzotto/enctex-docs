# Dimensionamiento

Sexta pestaña. Dimensiona la sección circular de hormigón armado con los
esfuerzos del análisis, según la NBR 6118.

## Entradas { #entradas }

| Campo | Unidad | Observación |
| :-- | :-- | :-- |
| \(f_{ck}\) | MPa | Resistencia del hormigón |
| \(f_{yk}\) | MPa | Acero longitudinal, usualmente 500 (CA-50) |
| \(E_s\) | MPa | Módulo del acero, predeterminado 210 000 |
| Diámetro de la barra longitudinal \(\phi_\ell\) | mm | |
| Número de barras | — | Déjelo en automático para que el programa lo busque |
| Diámetro del estribo \(\phi_t\) | mm | Mínimo \(\max(5;\, \phi_\ell/4)\) |
| Recubrimiento | cm | Viene de la clase de agresividad, pero puede editarse |
| Longitud de pandeo \(\ell_e\) | cm | Vea la observación abajo |

!!! warning "La longitud de pandeo es criterio suyo"

    \(\ell_e\) es un dato de entrada, no se calcula. Determinarla en un pilote
    parcialmente enterrado exige criterio: el tramo enterrado está contenido
    por el suelo, pero la rigidez de esa contención depende del propio \(K_h\).
    Un pilote enteramente enterrado en suelo competente rara vez tiene
    problemas de pandeo; uno con un tramo expuesto, sí.

## Armadura longitudinal { #armadura-longitudinal }

El programa verifica la sección a **flexión compuesta oblicua**, componiendo
vectorialmente los momentos de los dos ejes y agregando el efecto de segundo
orden cuando \(40 < \lambda \le 140\).

El resultado se presenta como **diagrama de interacción** \(N\)–\(M\): la
frontera de la sección con la armadura adoptada, y el punto solicitante marcado
sobre ella. La lectura es inmediata — se ve el margen, no solo el veredicto.

| Situación | Lectura |
| :-- | :-- |
| Punto bien dentro de la curva | Sección holgada; considere reducir armadura o diámetro |
| Punto cerca de la frontera | Dimensionamiento ajustado, pero válido |
| Punto fuera | Sección insuficiente — aumente la armadura, \(f_{ck}\) o el diámetro |

!!! note "Mínimo de 6 barras"

    La sección circular exige como mínimo seis barras longitudinales, por
    prescripción normativa. Aun cuando el cálculo no requiere armadura, ese
    mínimo constructivo suele prevalecer — por izaje, hinca y anclaje al
    encepado.

### Armadura no requerida { #dispensa-de-armadura }

Cuando \(\sigma_{sd} = N_d/A_c \le 5\) MPa **y** \(\sigma_{sd} \le 0{,}85
f_{ck}\), el cálculo no requiere armadura. El programa señala la condición,
pero la decisión de aprovecharla es del proyectista.

## Armadura transversal { #armadura-transversal }

Los estribos se dimensionan por el **Modelo I** de la NBR 6118.

La primera verificación es el **aplastamiento de la biela**. Si
\(\tau_{wd} > \tau_{wu}\), el programa **rechaza** el dimensionamiento con un
mensaje explícito: ninguna armadura resuelve el aplastamiento de la biela; hay
que aumentar el diámetro del pilote o la resistencia del hormigón.

El resultado muestra:

| Salida | Contenido |
| :-- | :-- |
| \(V_d\) | Cortante de cálculo, compuesto de los dos ejes |
| Área mínima normativa | \(A_{sw,min}\) en cm²/m |
| Área efectiva adoptada | La mayor entre la calculada y la mínima |
| Diámetro del estribo | Según la entrada |
| Separación adoptada \(s\) | La menor entre la teórica, la normativa y la constructiva |
| Estribos por metro | \(100/s\) |

!!! info "Qué criterio gobernó la separación"

    La separación adoptada es la **menor** entre tres límites — el teórico del
    cálculo, el normativo del ELU y el constructivo
    (\(\min(20\text{ cm};\, D;\, 12\phi_\ell)\)) — con un tope inferior de
    5 cm.

    En pilotes, el criterio constructivo gobierna con frecuencia: el cortante
    suele ser modesto y lo que ajusta los estribos es el límite geométrico.

    Vea la [formulación del cortante](../formulacoes/dimensionamento.md#esforco-cortante).

## Mensajes de error { #mensagens-de-erro }

??? question "\"Diámetro del estribo inválido. Mínimo exigido: X mm\""

    El estribo debe tener al menos \(\max(5\text{ mm};\, \phi_\ell/4)\).
    Aumente \(\phi_t\) o reduzca \(\phi_\ell\).

??? question "\"Aplastamiento de la biela\""

    La sección es insuficiente para el cortante. Aumente el diámetro del pilote
    o el \(f_{ck}\) — la armadura no lo resuelve.

??? question "El punto cae fuera del diagrama de interacción"

    La sección no resiste la combinación \(N\)–\(M\). Aumente la armadura, el
    \(f_{ck}\) o el diámetro. Si \(\lambda\) es alto, buena parte del momento
    puede ser de segundo orden — en ese caso, aumentar el diámetro es más
    eficaz que aumentar la armadura.

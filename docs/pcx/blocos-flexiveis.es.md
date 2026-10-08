# Encepados flexibles

La función exclusiva del PCX. Cuando el encepado no cumple la condición de
rigidez, la biela no se forma de manera bien definida y el comportamiento real
es de **flexión**: el encepado trabaja como una viga apoyada en los pilotes.

La base es **Silva (2021)**, publicado en la REEC, que comparó los tres
modelos estructurales — bielas y tirantes, viga biapoyada y viga empotrada y
libre — mediante un análisis de confiabilidad.

---

## Cuándo usarlo { #quando-usar }

El criterio de la NBR 6118 es \(h \ge (A - a_p)/3\) en la dirección
considerada, o, de forma equivalente, **ángulo de biela \(\ge 45^\circ\)**. Un
encepado que no lo cumple es flexible. Vea
[Verificaciones](../pco/formulacoes/verificacoes.md#rigidez-do-bloco).

!!! warning "Calcular un encepado flexible por Blévot subestima la armadura"

    No es una diferencia de refinamiento: el modelo de bielas supone un
    mecanismo resistente que **no existe** en ese encepado. La armadura que
    devuelve es la de un tirante que no es el que trabaja.

---

## Los dos modelos { #os-dois-modelos }

| Modelo | Hipótesis |
| :-- | :-- |
| **Viga biapoyada** | Los pilotes son los apoyos; el pilar aplica la carga en el vano |
| **Viga empotrada y libre** | Voladizo a partir del pilar |

El modelo de viga **empotrada y libre** permite que ocurran desplazamientos en
el encepado — el pilote o el encepado pueden asentar —, pero exige que el
**pilar se mantenga indesplazable**, o presente asentamientos uniformes junto
al encepado y a los pilotes.

!!! info "Con 3 o más pilotes, se convierte en emparrillado"

    La viga biapoyada es unidimensional, y un encepado con tres o más pilotes
    no lo es. En esos casos el programa pasa automáticamente a un **análisis
    de emparrillado**, que distribuye la flexión en las dos direcciones.

---

## Momento actuante { #momento-atuante }

=== "Viga biapoyada"

    \[
    M_{Sd} = \frac{P\,L}{4}
    \]

=== "Viga empotrada y libre"

    \[
    M_{Sd} = \frac{P}{2}\left(\frac{L}{2} - \left(\frac{b}{2} - 0{,}15\,b\right)\right)
    \]

con \(L\) la distancia entre ejes de pilotes y \(b\) la dimensión del pilar.

!!! info "La distancia del 15 % desde la cara del pilar"

    Viene de Alonso (2010), y depende de la **inercia del pilar**: se
    recomienda \(0{,}15\,b\) para pilares de gran inercia (\(b \ge 60\) cm) y
    \(0{,}5\,b\) para pilares de pequeña inercia.

    Existe porque el empotramiento no ocurre en la cara del pilar, sino un poco
    hacia adentro — y cuanto más rígido el pilar, más cerca de la cara.

---

## Armadura de flexión { #armadura-de-flexao }

Dimensionamiento a flexión simple de sección rectangular según la NBR 6118,
con \(\alpha_c = 0{,}85\) y \(\lambda = 0{,}8\) para \(f_{ck} \le 50\) MPa.

La posición de la línea neutra sale del equilibrio:

\[
0{,}272\,f_{cd}\,b\,x^2 - 0{,}68\,f_{cd}\,b\,d\,x + M_{Sd} = 0
\]

y la armadura de

\[
A_s = \frac{0{,}68\,f_{cd}\,b\,x}{f_{yd}}
\]

El momento resistente correspondiente puede escribirse directamente en función
de la armadura:

\[
M_{Rd} = A_s f_{yd}\left(d - \frac{A_s f_{yd}}{1{,}7\,b\,f_{cd}}\right)
\]

### Límite de ductilidad { #limite-de-ductilidade }

\[
\frac{x}{d} \le 0{,}45 \qquad (f_{ck} \le 50\ \text{MPa})
\]

Por encima de eso la sección rompe sin aviso — el hormigón se aplasta antes de
que el acero fluya. El programa **avisa** y trunca en 0,45, pero el aviso es
para leerlo: la solución es aumentar la altura, el \(f_{ck}\) o usar armadura
doble.

!!! warning "Momento por encima del resistido por la sección"

    Cuando el discriminante es negativo, ni siquiera con \(x = 0{,}45d\) la
    sección resiste. El camino es el mismo: altura, \(f_{ck}\) o armadura
    doble.

    Para ángulos de biela inferiores a 35°, Silva (2021) constató que el
    hormigón alcanza el **dominio 4** y la armadura doble pasa a ser necesaria.

### Armadura mínima { #armadura-minima }

\[
\rho_{min} =
\begin{cases}
0{,}0015 & f_{ck} \le 30\ \text{MPa} \\[4pt]
0{,}0015 + \dfrac{f_{ck} - 30}{50}\,0{,}0005 & f_{ck} > 30\ \text{MPa}
\end{cases}
\]

con \(A_{s,min} = \rho_{min}\,b\,h\). Cuando gobierna, el programa avisa.

---

## Verificación de la biela { #verificacao-da-biela }

Aun en el modelo de viga, la compresión del hormigón debe verificarse:

\[
R_1 = 0{,}27\,\alpha_{v2}\,f_{cd}\,b\,d
\qquad\qquad
S_1 = \frac{P}{2}
\]

---

## Armadura transversal { #armadura-transversal }

Criterio de cortante de viga. La resistencia es la suma de las parcelas del
hormigón y del acero:

\[
V_{Rd} = 0{,}6\,b\,d\,f_{ctd} \;+\; \frac{A_{sw}}{s}\,0{,}9\,d\,f_{yd}
\]

con \(f_{ctd} = 0{,}15\,f_{ck}^{2/3}\).

Si la reacción del pilote más cargado no supera la parcela del hormigón, se
adopta un estribo **mínimo constructivo**, con separación de 20 cm. Si la
supera, se dimensiona

\[
\frac{A_{sw}}{s} = \frac{V - V_c}{0{,}9\,d\,f_{yd}}
\]

y la separación adoptada queda entre **5 y 20 cm**.

!!! info "La reacción más cargada, no la suma"

    El cortante se verifica contra la reacción del pilote **más cargado** — es
    la que define la sección crítica, junto al apoyo más solicitado.

---

## Encepado flexible traccionado { #bloco-flexivel-tracionado }

El PCX trata el **Encepado Flexible (Arrancamiento/Tracción)**
explícitamente. El mecanismo se invierte: la armadura de flexión pasa a la
cara opuesta, y la verificación del anclaje gana peso — en el arrancamiento,
es el anclaje lo que sostiene.

---

## Lo que mostró el análisis de confiabilidad { #o-que-a-analise-de-confiabilidade-mostrou }

Silva (2021) aplicó Monte Carlo con un millón de simulaciones a un encepado de
dos pilotes, variando la inclinación de la biela de 30° a 60°, y comparó los
tres modelos. Los resultados orientan la elección:

| Constatación | Consecuencia práctica |
| :-- | :-- |
| La **viga biapoyada** genera cuantías de armadura más de un 30 % superiores a las del modelo de bielas | Es el modelo menos recomendado: la separación entre barras queda reducida y favorece la fisuración |
| La **viga empotrada y libre** resulta en una armadura próxima a la de bielas y tirantes — diferencia inferior al 6 % para \(\theta > 40^\circ\) | Es la alternativa flexible más económica |
| El modelo de **bielas y tirantes** da la menor armadura, pero solo alcanza \(\beta \ge 3{,}8\) con \(\theta > 60^\circ\) (fck 20) o \(\theta > 45^\circ\) (fck 30) | Cumplir el criterio de encepado rígido **no garantiza** una confiabilidad adecuada |
| La ecuación del tirante de bielas y tirantes no depende del \(f_{ck}\) | Incoherencia del modelo: aumentar el \(f_{ck}\) debería reducir la armadura |

!!! warning validade "No dimensione por debajo de 35°"

    Por la pérdida significativa de rigidez al reducir la altura del encepado,
    se orienta **no dimensionar encepados con un ángulo de biela inferior a
    35°**, aun utilizando modelos flexibles — por el aumento de los
    desplazamientos y la posibilidad de generar efectos de segundo orden.

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - El modelado como viga es una **simplificación de un sólido**. Representa
      bien el encepado esbelto; en un encepado en el límite, ni la viga ni la
      biela describen el comportamiento con precisión, y la práctica
      defendible es adoptar la envolvente de ambos.
    - El análisis de **emparrillado** distribuye la flexión en las dos
      direcciones suponiendo un comportamiento elástico lineal. No hay
      fisuración ni redistribución plástica.
    - \(x/d \le 0{,}45\) y la armadura mínima valen para
      \(f_{ck} \le 50\) MPa.
    - **La función de falla por deformación excesiva no fue verificada** por
      Silva (2021): no hay en la literatura una estimación de la deformación
      máxima permitida para encepados. Como los modelos flexibles son más
      susceptibles a la deformación, es una laguna reconocida.
    - El **anclaje de la armadura del pilar** dentro del encepado no se
      verifica aquí — y es uno de los principales factores que hacen inviables
      los encepados flexibles en la práctica.
    - Las relaciones luz/altura inferiores a 2 (ángulos por encima de 50°)
      configuran una **viga de gran canto**, y el alabeo de la sección no se
      computa.
    - **El hendimiento y el zunchado** no se verifican, aquí como en el
      encepado rígido.

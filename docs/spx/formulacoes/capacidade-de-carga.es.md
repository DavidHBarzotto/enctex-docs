# Capacidad de carga

El SPX calcula la capacidad de carga por tres métodos semiempíricos
brasileños, en paralelo, para **cada cota posible de punta**. El resultado es
una tabla por profundidad, y no un número único.

Todos parten de la misma descomposición:

\[
R = R_p + R_L
\]

A partir de ahí **divergen, y no solo en los coeficientes**. La diferencia más
importante — y la que más confunde a quien compara resultados — está en la
**forma de la parcela lateral**:

| Método | Resistencia lateral | Qué representa \(N\) |
| :-- | :-- | :-- |
| **Aoki-Velloso** | \(R_L = U \sum (r_L \, \Delta L)\) — suma capa a capa | \(N_L\) de la capa de espesor \(\Delta L\) |
| **Décourt-Quaresma** | \(R_L = r_L \, U \, L\) — un valor único en todo el fuste | \(N_L\) **promedio a lo largo del fuste** |
| **Teixeira** | \(R_L = \beta \, N_L \, U \, L\) — ídem | \(N_L\) **promedio a lo largo del fuste** |

Solo Aoki-Velloso integra la fricción capa a capa. En los otros dos, el fuste
recibe **una tensión única**, calculada a partir del promedio del \(N_{SPT}\) —
y aplicarlos en la forma de sumatoria de Aoki da un resultado distinto del
método.

---

## Aoki-Velloso (1975) { #aoki-velloso-1975 }

### Origen { #origem }

El método nació de correlaciones con el ensayo **CPT**, por la resistencia de
punta del cono (\(q_c\)) y la fricción lateral en el manguito (\(f_s\)):

\[
r_p = \frac{q_c}{F_1}
\qquad\qquad
r_L = \frac{f_s}{F_2}
\]

Como en Brasil el CPT se usa poco, \(q_c\) se sustituyó por una correlación
con el SPT, \(q_c = K \, N_{SPT}\), y la fricción por la razón de fricción
\(\alpha = f_s / q_c\).

### Formulación { #formulacao }

\[
r_p = \frac{K \, N_p}{F_1}
\qquad\qquad
r_L = \frac{\alpha \, K \, N_L}{F_2}
\]

\[
R = \frac{K \, N_p}{F_1}A_p \;+\; \frac{U}{F_2}\sum_{1}^{n}\left(\alpha \, K \, N_L \, \Delta L\right)
\]

| Símbolo | Significado |
| :-- | :-- |
| \(K\) | Coeficiente del suelo, en MPa — [tabla](tabelas.md#aoki-velloso) |
| \(\alpha\) | Razón de fricción del suelo, en % — ídem |
| \(F_1, F_2\) | Factores de corrección por tipo de pilote — [tabla](tabelas.md#fatores-de-execucao) |
| \(N_p\) | \(N_{SPT}\) **en la cota de apoyo de la punta** |
| \(N_L\) | \(N_{SPT}\) **promedio en la capa** de espesor \(\Delta L\) |

### Los factores de corrección { #os-fatores-de-correcao }

\(F_1\) y \(F_2\) cubren el **efecto de escala** — la diferencia entre el
pilote (prototipo) y el cono del CPT (modelo) — y la influencia del método
constructivo.

Como \(F_1 > 1{,}0\), la resistencia de punta del pilote resulta **inferior a
la del cono**: es el efecto de escala invertido, y está comprobado
experimentalmente.

\(F_2\) debería valer lo mismo que \(F_1\), pero engloba también una corrección
de lectura: en el cono mecánico, la parte inferior del manguito de Begemann
genera una resistencia de punta capaz de duplicar el valor leído de fricción.
De ahí \(F_1 \le F_2 \le 2F_1\), y los autores adoptaron la hipótesis más
conservadora:

\[
F_2 = 2\,F_1
\]

!!! note "Si los datos provienen de cono eléctrico"

    En el cono eléctrico y en el piezocono la lectura se hace en la punta, sin
    ese error. Si se usa el método con datos de CPT en lugar de SPT, debe
    adoptarse \(F_2 = F_1\).

---

## Décourt-Quaresma (1978) { #decourt-quaresma-1978 }

### Formulación { #formulacao_1 }

\[
R_L = r_L \, U \, L
\qquad\qquad
R_p = r_p \, A_p
\]

Note que \(R_L\) **no es una sumatoria**: una única tensión de fricción
multiplica el perímetro y la longitud entera del fuste.

### La tensión de fricción { #a-tensao-de-atrito }

Décourt (1982) transformó la tabla original de los autores en esta expresión:

\[
r_L = 10\left(\frac{N_L}{3} + 1\right) \qquad [\text{kPa}]
\]

donde \(N_L\) es el \(N_{SPT}\) **promedio a lo largo del fuste**, **sin
ninguna distinción en cuanto al tipo de suelo**.

!!! warning "Tres reglas sobre el promedio del fuste"

    1. **Límite inferior \(N_L \ge 3\)** y **límite superior \(N_L \le 15\)**.
    2. Décourt (1982) extiende el tope a \(N_L = 50\) en pilotes de
       desplazamiento y excavados con bentonita, **manteniendo \(N_L \le 15\)**
       para pilotes Strauss y pilas excavadas a cielo abierto.
    3. Los valores de \(N\) usados en la evaluación de la **resistencia de
       punta no entran** en el promedio del fuste.

### La resistencia de punta { #a-resistencia-de-ponta }

\[
r_p = C \, N_p
\]

\(N_p\) es el promedio de **tres valores**: el correspondiente al nivel de la
punta, el inmediatamente anterior y el inmediatamente posterior. El
coeficiente \(C\) depende del suelo — [tabla](tabelas.md#decourt-quaresma) —,
ajustado con 41 pruebas de carga en pilotes prefabricados de hormigón.

### Los factores de Décourt (1996) { #os-fatores-de-decourt-1996 }

\[
R = \alpha \, C \, N_p \, A_p \;+\; \beta \, 10\left(\frac{N_L}{3}+1\right) U \, L
\]

Extienden el método a pilotes excavados — con lodo bentonítico o en general,
incluidas las pilas a cielo abierto —, hélice continua, raíz e inyectados a
alta presión. Los valores están en las
[tablas](tabelas.md#fatores-alfa-e-beta).

!!! info "El método original se mantiene para tres tipos"

    Para pilotes **prefabricados, metálicos y Franki**, vale
    \(\alpha = \beta = 1\) — es decir, el método de 1978 sin corrección.

### Criterio de carga admisible { #criterio-de-carga-admissivel }

Décourt propone factores parciales, y es lo que aplica el SPX:

\[
P_a = \frac{R_p}{4} + \frac{R_L}{1{,}3}
\]

La punta lleva 4 y el fuste 1,3 porque la confiabilidad de las dos parcelas es
distinta: la fricción se moviliza con desplazamientos milimétricos, mientras
que la punta exige asentamientos del orden del 10 % del diámetro para
desarrollarse plenamente — con la carga de trabajo, todavía no está ahí.

Para un pilote **excavado en compresión** entra el límite adicional
\(P_a \le 1{,}25\,R_L\), y el programa adopta el menor. En **tracción**, la
punta se descarta íntegramente: \(P_a = R_L/1{,}3\).

---

## Teixeira (1996) { #teixeira-1996 }

### Formulación { #formulacao_2 }

Una ecuación unificada, con dos parámetros que multiplican directamente el
\(N_{SPT}\):

\[
R = R_p + R_L = \alpha \, N_p \, A_p + \beta \, N_L \, U \, L
\]

Aquí \(\alpha\) y \(\beta\) ya están en **kPa** — no son adimensionales como
los de Décourt, a pesar del mismo nombre.

| Símbolo | Significado |
| :-- | :-- |
| \(N_p\) | \(N_{SPT}\) promedio en el intervalo de **4 diámetros por encima** de la punta a **1 diámetro por debajo** |
| \(N_L\) | \(N_{SPT}\) **promedio a lo largo del fuste** |
| \(\alpha\) | Función del suelo **y** del tipo de pilote — [tabla](tabelas.md#teixeira) |
| \(\beta\) | Función **solo** del tipo de pilote — ídem |

La ventana \([-4D, +D]\) es la definición más fundamentada físicamente de las
tres: el bulbo de tensiones de la punta tiene una extensión proporcional al
diámetro. En consecuencia, **el mismo perfil da puntas distintas para
diámetros distintos** — lo que es correcto, y suele sorprender a quien lo
compara con los otros métodos.

### Criterio de carga admisible { #criterio-de-carga-admissivel_1 }

El SPX aplica el criterio general de la NBR 6122, \(P_a = R/2\), y para
pilotes excavados adopta también \(P_a = R_L/4 + R_p/1{,}5\), quedándose con
el **menor** de los dos.

---

## Comparación { #comparacao }

| | Aoki-Velloso | Décourt-Quaresma | Teixeira |
| :-- | :-- | :-- | :-- |
| Forma de \(R_L\) | Sumatoria por capa | Tensión única × \(U L\) | Tensión única × \(U L\) |
| \(N\) del fuste | Promedio en la capa | **Promedio en el fuste**, \(3 \le N_L \le 15\) | **Promedio en el fuste** |
| \(N\) de la punta | En la cota de la punta | Promedio de 3 valores | Promedio en \([-4D, +D]\) |
| ¿Distingue el suelo en el fuste? | Sí, por \(\alpha K\) | **No** | No — β solo depende del pilote |
| ¿Depende del diámetro? | Solo en \(A_p\) y \(U\) | Solo en \(A_p\) y \(U\) | **También en \(N_p\)** |
| Unidad de los coeficientes | \(K\) en MPa, \(\alpha\) en % | \(C\) en kPa | \(\alpha, \beta\) en kPa |

!!! tip "Cómo leer la divergencia"

    Los tres no deberían coincidir, y una coincidencia excesiva es más
    sospechosa que la divergencia.

    - **Un perfil heterogéneo** separa a Aoki de los otros dos: solo él
      integra la fricción capa a capa, mientras que Décourt y Teixeira aplanan
      el fuste en un promedio.
    - **Un perfil con \(N\) alto en el fuste** separa a Décourt: el tope del
      promedio (15 o 50, según el pilote) trunca la contribución lateral.
    - **Un diámetro grande** separa a Teixeira, por el \(N_p\) en ventana.

    La práctica defendible es adoptar el **menor** de los tres, o el método con
    calibración regional conocida, registrando la elección en la memoria de
    cálculo.

---

## Efecto de grupo { #efeito-de-grupo }

Todo lo anterior vale para el **elemento aislado**. La capacidad del grupo
puede diferir de la suma de los elementos, y eso se cuantifica por la
eficiencia:

\[
\eta = \frac{R_g}{\sum R_i}
\]

El entendimiento actual, apoyado en ensayos de grupos, es que la eficiencia es
**generalmente igual o superior a la unidad**:

| Situación | Eficiencia |
| :-- | :-- |
| Pilotes de cualquier tipo en arcilla | \(\approx 1\) |
| Pilotes excavados en cualquier suelo | \(\approx 1\) |
| Pilotes hincados en arena, sobre todo suelta | **> 1** — hasta 1,5 o 1,7 |

!!! note "El SPX no aplica ganancia de grupo"

    No hay teoría ni fórmula apropiada para estimar la eficiencia, y la
    práctica corriente de proyecto **no tiene en cuenta** posibles beneficios —
    lo que es la postura conservadora. El programa sigue esa práctica:
    dimensiona por elemento aislado.

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - Los tres son **semiempíricos**, calibrados contra pruebas de carga en un
      universo limitado. Aoki-Velloso ajustó \(F_1\) y \(F_2\) con 63 pruebas;
      Décourt-Quaresma ajustó \(C\) con 41, en pilotes prefabricados de
      hormigón.
    - **Teixeira vale para \(4 < N_{SPT} < 40\)** — es el rango declarado de
      la tabla de \(\alpha\). Fuera de él, extrapola.
    - **Teixeira no se aplica** a pilotes prefabricados de hormigón flotantes
      en capas espesas de arcilla blanda sensible, con \(N_{SPT} < 3\). En ese
      caso el autor tabula \(r_L\) directamente según la naturaleza del
      sedimento — 20 a 30 kPa en arcilla fluviolagunar, 60 a 80 kPa en arcilla
      transicional.
    - **Solo valen con \(N_{SPT}\)** de sondeo a percusión según la NBR 6484.
    - **No cubren** suelos colapsables, expansivos, orgánicos blandos, rocas
      alteradas ni bolones.
    - **No consideran** la fricción negativa, que debe sumarse aparte cuando
      haya relleno reciente o descenso del nivel freático.
    - Las correlaciones originales son **amplias**, no regionales. La
      tendencia recomendada es mantener la formulación y sustituir \(K\) y
      \(\alpha\) por correlaciones locales de validez comprobada — como las de
      Alonso (1980) para São Paulo y las de Danziger & Velloso (1986) para Río
      de Janeiro.
    - La NBR 6122 exige **prueba de carga** por encima de ciertas cantidades
      de pilotes. Ningún método semiempírico la sustituye.

---

## Resultado presentado { #resultado-apresentado }

La tabla de cada método muestra, por cota:

| Columna | Contenido |
| :-- | :-- |
| Cotas (m) | Profundidad de la punta, negativa |
| \(R_L\) (kN) | Resistencia lateral hasta esa cota |
| \(R_p\) (kN) | Resistencia de punta en esa cota |
| \(R_t\) (kN) | Suma de ambas |
| \(P_a\) Final (kN) | Carga admisible, ya con los factores y límites aplicables |

Para pilotes excavados en compresión, Décourt-Quaresma agrega las columnas
`Pa escavada` (excavado) y `Pa Dec-Qua`, mostrando el límite y el valor sin
límite lado a lado — para que se vea **qué criterio gobernó**.

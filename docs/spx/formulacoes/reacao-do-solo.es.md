# Reacción del suelo — Kh y Kv

Para analizar el pilote bajo esfuerzo horizontal es necesario representar el
suelo. El SPX usa el modelo de **Winkler**: el suelo se convierte en un
conjunto de resortes independientes, uno por metro de pilote, y el pilote en
una viga sobre base elástica.

Es un modelo simplificado — los resortes independientes no transmiten
esfuerzos entre sí, y el suelo real sí —, pero es el que sustenta la práctica
corriente de proyecto de pilotes con carga transversal.

---

## Coeficiente horizontal Kh { #coeficiente-horizontal-kh }

### Variación con la profundidad { #variacao-com-a-profundidade }

Para suelos cuya rigidez crece con el confinamiento, se adopta

\[
K_h(z) = m \cdot z
\]

con \(K_h\) en kN/m³, \(z\) en metros y \(m\) en **kN/m⁴**. El coeficiente
\(m\) se busca en una tabla según la naturaleza del suelo y el \(N_{SPT}\):

| Suelo dominante | Tabla usada |
| :-- | :-- |
| Suelos arenosos y limosos | Tabla de \(m\) para arenas |
| Suelos arcillosos | Tabla de \(m\) para arcillas |

Fuera del rango tabulado, el valor se satura en el extremo más cercano — un
\(N\) por encima del máximo usa el último valor, y uno por debajo del mínimo
usa el primero. Un suelo no identificado recibe \(m = 0{,}01\) kN/m⁴, un valor
deliberadamente ínfimo pero **no nulo**: un resorte de rigidez cero haría
singular la matriz de rigidez y haría fallar el análisis.

### De la rigidez unitaria al resorte nodal { #da-rigidez-unitaria-a-mola-nodal }

El resorte concentrado en cada nudo multiplica \(K_h\) por el área de
influencia:

\[
K_{h,mola} = K_h \cdot D \cdot \ell_{infl}
\]

donde \(D\) es el diámetro y \(\ell_{infl}\) el tramo de pilote que representa
ese nudo.

!!! info "Media franja en los extremos"

    El tramo de influencia es de **1,0 m** en los nudos internos y de
    **0,5 m** en el primer y el último nudo del pilote. La razón es
    geométrica: un nudo en el medio representa medio metro por encima y medio
    por debajo; un nudo en el extremo solo tiene suelo de un lado.

    Sin este cuidado, la rigidez total del modelo quedaría sobrestimada en un
    metro de suelo que no existe.

---

## Coeficiente vertical Kv { #coeficiente-vertical-kv }

El \(K_v\) representa la reacción vertical del fuste — la fricción lateral
movilizada como resorte. Se obtiene por correlación empírica con la tensión
admisible del suelo, estimada por

\[
\sigma_{adm} = 0{,}2 \cdot N_{SPT} \quad [\text{kgf/cm}^2]
\]

Con \(\sigma_{adm}\), se interpola \(K_v\) en una tabla empírica que va de 0,25
a 4,00 kgf/cm² (0,65 a 8,00 kgf/cm³), y se convierte al SI:

\[
1 \text{ kgf/cm}^3 = 9\,806{,}65 \text{ kN/m}^3
\]

El resorte nodal sigue la misma regla de área de influencia, incluida la media
franja en los extremos:

\[
K_{v,mola} = K_v \cdot D \cdot \ell_{infl}
\]

!!! note "\(K_v\) es opcional"

    El análisis puede hacerse solo con resortes horizontales. Los resortes
    verticales se activan como opción e importan sobre todo en **pilotes
    inclinados**, donde la carga vertical genera una componente transversal y
    viceversa — sin \(K_v\), el pilote inclinado queda libre para bajar en la
    dirección de su eje.

---

## Tabla de resultados { #tabela-de-resultados }

La pestaña de reacción del suelo presenta, por metro:

| Columna | Unidad | Contenido |
| :-- | :-- | :-- |
| Prof. | m | Profundidad del nudo |
| Nspt | — | \(N_{SPT}\) de la capa |
| \(m\) | kN/m⁴ | Coeficiente de la tabla |
| \(K_h\) | kN/m³ | \(m \cdot z\) |
| Franja | m | Tramo de influencia (0,5 o 1,0) |
| \(K_h\) Resorte | kN/m | Rigidez concentrada en el nudo |
| \(K_v\) Resorte | kN/m | Rigidez vertical concentrada en el nudo |

La tabla se trunca en la **longitud del pilote**: las capas del sondeo por
debajo de la punta no generan resortes, porque allí no hay pilote para
reaccionar contra ellas.

---

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - **Winkler ignora la continuidad del suelo.** Los resortes independientes
      no transmiten esfuerzos entre sí, lo que sobrestima la rigidez local y
      subestima el alcance de la deformación.
    - \(K_h = m \cdot z\) presupone una rigidez **creciente con la
      profundidad**, hipótesis válida en arenas y arcillas normalmente
      consolidadas. En arcilla preconsolidada, con rigidez aproximadamente
      constante, el modelo es menos adecuado.
    - Los valores de \(m\) provienen de una correlación con \(N_{SPT}\), con
      una dispersión considerable.
    - El modelo es **lineal**: el resorte responde proporcionalmente al
      desplazamiento, sin límite. Para desplazamientos grandes, el suelo
      plastifica y la rigidez cae — un comportamiento que exigiría curvas
      *p-y*, fuera del alcance.
    - La correlación \(\sigma_{adm} = 0{,}2 N\) es una regla práctica
      aproximada.

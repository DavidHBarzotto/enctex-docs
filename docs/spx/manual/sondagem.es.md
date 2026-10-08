# Sondeos y suelos

Pestañas 2 y 3. Aquí entra el perfil del subsuelo — el dato que gobierna todo
lo demás.

## Sondeo / NSPT { #sondagem-nspt }

El sondeo se carga **metro a metro**: para cada profundidad, un valor de
\(N_{SPT}\) y una clasificación de suelo.

| Columna | Contenido |
| :-- | :-- |
| Profundidad | 1 m, 2 m, 3 m… |
| \(N_{SPT}\) | Número de golpes |
| Tipo de suelo | Clasificación por fracciones — ver abajo |

### Tipos de suelo { #tipos-de-solo }

El suelo se clasifica por las fracciones que lo componen, en el orden en que
predominan — quince combinaciones en total:

| | | |
| :-- | :-- | :-- |
| Arena | Limo | Arcilla |
| Arena limosa | Limo arenoso | Arcilla arenosa |
| Arena limoarcillosa | Limo arenoarcilloso | Arcilla arenolimosa |
| Arena arcillosa | Limo arcilloso | Arcilla limosa |
| Arena arcillolimosa | Limo arcilloarenoso | Arcilla limoarenosa |

!!! warning "La clasificación elige los parámetros de cálculo"

    No es una etiqueta. Es lo que selecciona \(K\) y \(\alpha\) de
    Aoki-Velloso, \(C\) de Décourt-Quaresma, \(\alpha_T\) de Teixeira y el
    factor \(m\) de los resortes.

    Cambiar **arena limosa** por **limo arenoso** reduce \(K\) de 0,80 a
    0,55 MPa, **31 % menos de resistencia de punta**. Vea
    [Tablas de parámetros](../formulacoes/tabelas.md).

### Múltiples perforaciones { #multiplos-furos }

El SPX acepta más de un perfil de sondeo en el mismo proyecto, cada uno
identificado. Pilotes distintos pueden asociarse a perforaciones distintas —
es lo que permite tratar una obra donde el subsuelo varía de un lado a otro.

### Lector editable de PDFs { #leitor-editavel-de-pdfs }

El SPX lee los informes de sondeo directamente del **PDF**, extrayendo
profundidades, golpes y descripción del suelo a la tabla. La extracción es
**editable**: lo que salga mal se corrige antes de calcular.

En una obra con quince perforaciones de veinte metros hay trescientas filas
para digitar, y cada una es una oportunidad de cambiar **arena limosa** por
**limo arenoso**.

!!! warning "Verifique la clasificación del suelo"

    La extracción automática depende del formato del informe. Verifique siempre
    la tabla resultante contra el original, con atención a la **clasificación
    del suelo** — es la que selecciona los parámetros de todos los métodos.

!!! tip "En el SPX AI la lectura es inteligente"

    El [SPX AI](../../spx-ai/recursos-ia.md#leitura-inteligente-de-pdfs)
    maneja variaciones de formato, tablas con celdas combinadas y descripciones
    fuera del estándar — los informes que el lector común no interpreta.

### Perfil 3D {: #perfil-3d }

Con más de una perforación, el SPX interpola la estratigrafía y presenta un
**perfil tridimensional** del terreno. Es la función que el SPO no tiene, y
sirve para dos cosas: notar capas que buzan y justificar, visualmente, por qué
dos pilotes cercanos recibieron longitudes distintas.

## Propiedades de los Suelos { #propriedades-dos-solos }

Tercera pestaña. Contiene los parámetros por capa — pesos específicos y lo
demás que alimenta la tensión geostática usada en el
[asentamiento](../formulacoes/recalque.md#recalque-do-solo).

El programa ofrece una tabla de **pesos específicos típicos** por consistencia
y compacidad, accesible desde la propia pestaña, para quien no tiene ensayos.

!!! note "Valor adoptado a falta de datos"

    Cuando no hay correspondencia en la tabla, el programa adopta
    \(\gamma = 18\) kN/m³. Es un valor razonable para un suelo medio, pero
    registre la hipótesis en la memoria de cálculo cuando gobierne el
    resultado.

## Buenas prácticas { #boas-praticas }

- **No dimensione con la punta en el último metro investigado.** Los métodos
  necesitan capas debajo de la punta para componer \(N_p\); en la última cota,
  el programa repite el último valor, lo que es optimista si el perfil estaba
  mejorando.
- **Desconfíe de \(N_{SPT} > 50\).** Está fuera del rango de calibración de la
  mayoría de las correlaciones.
- **Un sondeo poco profundo produce un proyecto poco profundo.** Si el perfil
  no alcanza la profundidad necesaria, la tabla de capacidad simplemente
  termina — y la lectura correcta es "falta investigación", no "el pilote no
  cumple".

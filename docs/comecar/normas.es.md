# Normas

## Lo que referencia cada programa { #o-que-cada-programa-referencia }

| Norma | Título | SPO · SPX · SPX AI | PCO · PCX |
| :-- | :-- | :--: | :--: |
| **NBR 6122** | Proyecto y ejecución de cimentaciones | ● | |
| **NBR 6118** | Proyecto de estructuras de hormigón | ● | ● |
| **NBR 8681** | Acciones y seguridad en las estructuras | | ● |
| **NBR 6120** | Cargas para el cálculo de estructuras de edificaciones | | ● |

Además de las normas brasileñas, los programas usan formulaciones consagradas
de otras fuentes — los métodos semiempíricos de capacidad de carga
(Aoki-Velloso, Décourt-Quaresma, Teixeira), la estimación de asentamiento de
Cintra & Aoki y, en los encepados, los Comentarios del **IBRACON** a la
NBR 6118 y recomendaciones del **CEB/FIP**. Cada una se identifica en la página
de formulación que la emplea.

## Dónde entran las normas { #onde-as-normas-entram }

### NBR 6122 — Cimentaciones { #nbr-6122-fundacoes }

Entra en el cálculo de la carga admisible. El criterio general de la norma se
aplica sobre la resistencia última:

\[
P_a = \frac{R_{total}}{2}
\]

con un factor de seguridad global de 2. Algunos métodos imponen verificaciones
adicionales más restrictivas — Décourt-Quaresma separa los factores de punta y
de fuste, y los pilotes excavados tienen su propio límite. El programa aplica
**el menor** entre los criterios aplicables. Vea
[Capacidad de carga](../spx/formulacoes/capacidade-de-carga.md).

### NBR 6118 — Hormigón { #nbr-6118-concreto }

Entra en dos frentes:

- **Durabilidad** — la clase de agresividad ambiental define el recubrimiento
  nominal:

    | Clase | Agresividad | Recubrimiento |
    | :-- | :-- | --: |
    | CAA I | Débil | 3,0 cm |
    | CAA II | Moderada | 3,0 cm |
    | CAA III | Fuerte | 4,0 cm |
    | CAA IV | Muy fuerte | 5,0 cm |

- **Dimensionamiento** — flexión compuesta oblicua de la sección circular,
  esfuerzo cortante y detallado de las armaduras.

### NBR 8681 — Acciones y seguridad { #nbr-8681-acoes-e-seguranca }

Se usa en los programas de encepados para la combinación de acciones y los
coeficientes de ponderación.

## Lo que queda a cargo del proyectista { #o-que-fica-a-cargo-do-projetista }

Esta sección es tan importante como la anterior. Los programas **no** deciden:

- **La elección del método** de capacidad de carga. Aoki-Velloso,
  Décourt-Quaresma y Teixeira dan resultados distintos para el mismo sondeo;
  cuál representa mejor el sitio es criterio de ingeniería, apoyado en la
  experiencia regional y, cuando la haya, en pruebas de carga.
- **La calidad de la investigación.** Un sondeo poco profundo, un
  espaciamiento excesivo entre perforaciones o una clasificación
  táctil-visual dudosa producen resultados igualmente dudosos, sin que el
  programa pueda notarlo.
- **El asentamiento admisible.** El programa estima el asentamiento; cuánto
  tolera la estructura depende de ella, no de la cimentación.
- **La verificación por prueba de carga**, cuando la norma la exige.
- **El comportamiento de grupo** más allá de la estimación simplificada
  ofrecida.
- **Condiciones especiales** — suelos colapsables, expansivos, rellenos
  sanitarios, fricción negativa, excavaciones cercanas, nivel freático
  variable.

!!! warning "Responsabilidad técnica"

    El proyecto lo firma el ingeniero responsable, no el programa. La
    documentación de formulaciones existe precisamente para que esa firma sea
    informada: indica qué cálculo se hizo, con qué coeficientes y dentro de qué
    rango de validez.

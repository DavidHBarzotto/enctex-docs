# Empezar

Esta sección vale para los cinco programas. Lo específico de cada uno está en
el manual del producto.

<div class="grid cards" markdown>

-   :material-download:{ .lg .middle } **[Instalación](instalacao.md)**

    ---

    Requisitos, procedimiento y dónde se instala cada programa.

-   :material-key-outline:{ .lg .middle } **[Licencias](licenciamento.md)**

    ---

    Activación, tipos de licencia, cambio de equipo y uso sin internet.

-   :material-axis-arrow:{ .lg .middle } **[Convenciones y unidades](convencoes.md)**

    ---

    Signos, ejes, unidades y los códigos numéricos de suelo.

-   :material-book-check-outline:{ .lg .middle } **[Normas](normas.md)**

    ---

    Lo que referencia cada programa y lo que queda a cargo del proyectista.

</div>

## La familia de programas { #a-familia-de-programas }

Los cinco programas se dividen en dos líneas, y conviene entender la relación
antes de elegir:

**Línea SP — Simple Pile: pilotes y sus encepados**

| Programa | Nombre completo | Versión | Agrega |
| :-- | :-- | :-- | :-- |
| SPO | Simple Pile One | 1.0.1 | El núcleo: capacidad de carga, asentamiento, análisis estructural, dimensionamiento y detallado |
| SPX | Simple Pile X | 1.0.1 | Pilotes inclinados, modelado del perfil estratigráfico y lector editable de PDFs de sondeo |
| SPX AI | SPX AI | 1.0.1 | Automatización por IA, lectura inteligente de PDFs, importación de planos DWG/DXF y comandos de generación |

**Línea PC — Pile Cap: encepados sobre pilotes**

| Programa | Nombre completo | Versión | Agrega |
| :-- | :-- | :-- | :-- |
| PCO | Pile Cap One | 1.0.2 | Encepados rígidos por bielas y tirantes |
| PCX | Pile Cap X | 1.0.2 | Encepados flexibles, calculados como viga biapoyada o empotrada |

**Línea SB — Simple Beam: vigas (gratuitos)**

| Programa | Nombre completo | Versión | Agrega |
| :-- | :-- | :-- | :-- |
| SBO | Simple Beam One | 1.0.1 | Flexión, cortante, torsión y momento-curvatura, en sección rectangular y en T |
| SBX | Simple Beam X | 1.0.1 | Optimización de la sección: la geometría de menor costo que resiste los esfuerzos |

Cada línea es acumulativa: el SPX hace todo lo que hace el SPO, y el SPX AI
hace todo lo que hace el SPX. Lo mismo vale para PCO y PCX, que comparten el
núcleo de cálculo — el PCX es el PCO con los encepados flexibles habilitados.

!!! tip "Cuál elegir"

    Si su trabajo es pilote vertical con sondeo cargado a mano, el SPO lo
    resuelve. El SPX empieza a valer la pena cuando hay **pilotes inclinados**,
    cuando la estratigrafía debe modelarse entre perforaciones o cuando los
    informes llegan en PDF. El SPX AI se paga cuando el volumen de proyectos es
    lo bastante grande como para que el armado manual de encepados y pilotes se
    convierta en un cuello de botella.

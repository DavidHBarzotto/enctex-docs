---
title: Documentación EnCteX
template: home.html
hide:
  - navigation
  - toc
hero_titulo: Documentación técnica de los programas EnCteX.
hero_texto: Manuales de uso y formulaciones de cálculo de pilotes, encepados y vigas de hormigón armado — con hipótesis, normas y límites de validez.
hero_botao: Empezar
hero_botao2: Conocer los productos
---

# Documentación EnCteX { .ex-oculto }

Cada producto tiene dos capas de documentación, y responden a preguntas
distintas:

- El **manual** responde *cómo operar* — instalación, licencia, pestañas, flujo
  de trabajo, exportación.
- Las **formulaciones** responden *qué calcula el programa* — métodos,
  hipótesis, factores de seguridad, normas y, sobre todo, **los límites de
  validez**.

La segunda capa existe porque un programa de cimentaciones no es una caja negra
aceptable. El proyectista firma el proyecto, no el software; para firmarlo,
necesita saber qué formulación se aplicó, con qué coeficientes y dentro de qué
rango es válida.

## Los programas { #os-programas }

<div class="grid cards" markdown>

-   :material-pillar:{ .lg .middle } **SPO**

    ---

    El núcleo de pilotes del SPX, sin pilotes inclinados ni modelado
    estratigráfico. Mismos métodos geotécnicos y mismo dimensionamiento
    estructural.

    [:octicons-arrow-right-24: Documentación del SPO](spo/index.md)

-   :material-pillar:{ .lg .middle } **SPX**

    ---

    Pilotes: capacidad de carga por tres métodos, asentamiento, coeficientes
    de reacción del suelo, análisis estructural por elementos finitos,
    dimensionamiento a flexión compuesta oblicua, detallado en DXF y memoria de
    cálculo. Incluye pilotes inclinados y modelado estratigráfico del SPT.

    [:octicons-arrow-right-24: Documentación del SPX](spx/index.md)

-   :material-robot-outline:{ .lg .middle } **SPX AI**

    ---

    El SPX con automatización por IA: lectura inteligente de PDFs, importación
    de planos en DWG/DXF y comandos de generación de encepados y pilotes.

    [:octicons-arrow-right-24: Documentación del SPX AI](spx-ai/index.md)

-   :material-cube-outline:{ .lg .middle } **PCO**

    ---

    **Pile Cap One** — encepados sobre pilotes **rígidos**, por Blévot & Frémy
    y por el método de bielas y tirantes (MBT) de los Comentarios del IBRACON,
    con verificación por elementos finitos.

    [:octicons-arrow-right-24: Documentación del PCO](pco/index.md)

-   :material-cube-outline:{ .lg .middle } **PCX**

    ---

    **Pile Cap X** — todo lo del PCO, más el cálculo de encepados
    **flexibles**, modelados como viga biapoyada o empotrada.

    [:octicons-arrow-right-24: Documentación del PCX](pcx/index.md)

-   :material-format-align-bottom:{ .lg .middle } **SBO** · gratuito

    ---

    **Simple Beam One** — vigas de hormigón armado a flexión, cortante y
    torsión, en sección rectangular y en T, con diagrama momento-curvatura.

    [:octicons-arrow-right-24: Documentación del SBO](sbo/index.md)

-   :material-tune-variant:{ .lg .middle } **SBX** · gratuito

    ---

    **Simple Beam X** — el SBO con **optimización de la sección**: encuentra
    la geometría de menor costo que resiste los esfuerzos.

    [:octicons-arrow-right-24: Documentación del SBX](sbx/index.md)

</div>

## Por dónde empezar { #por-onde-comecar }

Si es su primer contacto con cualquiera de los programas, tres páginas merecen
la lectura antes del manual del producto:

- [**Instalación**](comecar/instalacao.md) — requisitos y procedimiento.
- [**Convenciones y unidades**](comecar/convencoes.md) — signos, ejes,
  unidades y los códigos numéricos de suelo. Es la página que evita el error
  más común de carga de datos.
- [**Normas**](comecar/normas.md) — lo que referencia cada programa.

!!! warning "Sobre el alcance de esta documentación"

    Describe **lo que hacen los programas**; no sustituye el criterio de
    ingeniería ni las normas. Los métodos semiempíricos de capacidad de carga
    se calibraron con un universo limitado de ensayos; fuera de ese rango,
    extrapolan. Cada página de formulación indica el rango de validez del
    método que describe, y debe leerse como parte del resultado.

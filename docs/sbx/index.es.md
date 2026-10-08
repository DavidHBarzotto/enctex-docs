# SBX — Simple Beam X

**Versión 1.0.1** · Windows 64 bits · **Gratuito**

Todo lo que hace el [SBO](../sbo/index.md), con un agregado: en lugar de solo
verificar la sección que usted informó, el SBX **encuentra la sección más
barata** que resiste los mismos esfuerzos.

## Qué agrega { #o-que-ele-acrescenta }

<div class="grid cards" markdown>

-   :material-function-variant:{ .lg .middle } **Optimización de la sección**

    ---

    Programación cuadrática secuencial sobre el ancho y la altura, con las
    verificaciones normativas dentro de la función objetivo.

    [:octicons-arrow-right-24: Cómo funciona](otimizacao.md)

-   :material-cash-multiple:{ .lg .middle } **Costos de material**

    ---

    Precio del hormigón y del acero como entrada. Poniendo ambos en cero, pasa
    a minimizar el consumo de material en lugar del dinero.

    [:octicons-arrow-right-24: La función objetivo](otimizacao.md#a-funcao-objetivo)

</div>

En la interfaz, la diferencia es un botón **Optimizar Sección** y dos campos de
costo. El resto es idéntico.

## Documentación { #documentacao }

El SBX contiene íntegramente el SBO, y la documentación sigue la misma lógica
de la línea: **lo que vale para el SBO vale para el SBX**, y aquí queda solo la
diferencia.

<div class="grid cards" markdown>

-   :material-tune-variant:{ .lg .middle } **[Optimización](otimizacao.md)**

    ---

    El método, las variables, las restricciones, el valor inicial y — sobre
    todo — qué hacer con un resultado continuo en un mundo de encofrados en
    múltiplos de 5 cm.

-   :material-function:{ .lg .middle } **[Formulaciones del SBO](../sbo/formulacoes/index.md)**

    ---

    Flexión, cortante, torsión y momento-curvatura. Idénticas — la
    optimización no cambia el cálculo, solo busca la geometría.

-   :material-book-education-outline:{ .lg .middle } **[Referencias](../sbo/referencias.md)**

    ---

    La bibliografía, común a los dos.

</div>

!!! info "La optimización no cambia el cálculo"

    El SBX usa exactamente el mismo núcleo de dimensionamiento que el SBO. En
    cada intento de sección, ejecuta el dimensionamiento completo — flexión,
    cortante, torsión y la interacción entre bielas — y solo considera viable
    lo que pasa todo.

    Lo que hace la optimización es **buscar**, no relajar.

## Cuándo se paga { #quando-ele-se-paga }

El SBO lo resuelve cuando usted ya tiene la sección definida — por
estandarización de la obra, por compatibilización con la arquitectura o por
práctica.

El SBX empieza a valer la pena cuando la sección es **libre** y el volumen
importa: obras con muchas vigas iguales, prefabricados, o estudios de
viabilidad en los que una diferencia de algunos centímetros se multiplica por
cientos de piezas.

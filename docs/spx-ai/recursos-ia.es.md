# Funciones de IA

Lo que solo tiene el SPX AI. Todo lo demás está en el
[manual del SPX](../spx/manual/interface.md).

!!! info "Dónde actúa la IA"

    En la **entrada de datos** y en el **armado del modelo** — no en el
    cálculo. Vea [la salvedad en la página del producto](index.md#a-ia-nao-entra-no-calculo).

---

## Lectura inteligente de PDFs { #leitura-inteligente-de-pdfs }

Extrae sondeos de informes en PDF: profundidades, número de golpes y
descripción del suelo.

La diferencia con el **lector editable de PDFs** que el SPX ya tiene está en la
interpretación: el lector del SPX trabaja con informes de formato previsible;
la lectura inteligente del SPX AI maneja variaciones de formato, tablas con
celdas combinadas y descripciones fuera del estándar.

### El cuidado que exige { #o-cuidado-que-ela-exige }

!!! warning "Verifique siempre la clasificación del suelo"

    La extracción automática depende del documento. Informes digitalizados de
    baja calidad, tablas irregulares y descripciones en texto libre producen
    lecturas erróneas — y una lectura errónea **no se anuncia**.

    Verifique la tabla resultante contra el informe original, con especial
    atención a la **clasificación del suelo**: es la que selecciona \(K\) y
    \(\alpha\) de Aoki-Velloso, \(C\) de Décourt-Quaresma, \(\alpha_T\) de
    Teixeira y el factor \(m\) de los resortes.

    Cambiar **arena limosa** por **limo arenoso** reduce \(K\) de 0,80 a
    0,55 MPa, **31 % menos de resistencia de punta**. Vea
    [convenciones](../comecar/convencoes.md#tipos-de-solo).

La tabla extraída es **editable**: corrija lo que esté mal antes de calcular.

---

## Importación de planos DWG/DXF { #importacao-de-planta-dwgdxf }

Lee el plano de cimentaciones y reconoce la posición de los pilotes, sin
necesidad de cargar las coordenadas a mano.

### El cuidado que exige { #o-cuidado-que-ela-exige_1 }

!!! warning "Verifique la cantidad y la posición"

    El reconocimiento depende de cómo se dibujó el plano — capas, bloques,
    convenciones de representación. Los planos con pilotes en capas mezcladas,
    representados por bloques no estandarizados o con elementos auxiliares
    parecidos pueden generar pilotes de más o de menos.

    Después de importar, **verifique la cantidad** contra el plano y use la
    visualización 3D para detectar una posición invertida.

Recuerde los límites: **200 pilotes en total** y **30 por encepado**.

---

## Comandos de generación { #comandos-de-geracao }

Generación de encepados y pilotes por comando, en lugar de completarlos campo
por campo.

Es la función que más tiempo ahorra en obras repetitivas: un comando que
genera cuarenta encepados iguales sustituye cuarenta cargas idénticas.

!!! tip "Genere, luego verifique en 3D"

    La generación por comando es lo bastante rápida como para que el cuello de
    botella pase a ser la verificación. Use la visualización 3D — un parámetro
    equivocado se propaga a todos los encepados generados de una vez, y eso es
    lo que hace a la función poderosa y peligrosa al mismo tiempo.

---

## Sondeo virtual { #sondagem-virtual }

El modelado estratigráfico 3D del SPX permite interpolar el perfil entre
perforaciones. El SPX AI lo lleva al **sondeo virtual**: obtener un perfil
estimado en una posición donde no hay perforación.

!!! warning validade "Rango de aplicación"

    El sondeo virtual es **interpolación**, no investigación. Estima lo que
    probablemente hay entre dos perforaciones conocidas, suponiendo que las
    capas varían de forma regular entre ellas.

    No sustituye una perforación, y la NBR 6122 sigue exigiendo el número de
    sondeos que exige. Las capas que buzan de forma irregular, los lentes, los
    bolones y las variaciones bruscas son exactamente lo que la interpolación
    **no** capta — y son también lo que más compromete una cimentación.

    Úselo para entender el terreno y justificar decisiones de longitud; no
    para prescindir de la investigación.

---

## Asistente { #assistente }

Asistente integrado en la interfaz, para consultas durante el trabajo.

!!! note "Sobre las respuestas del asistente"

    El asistente ayuda a operar el programa. Como cualquier sistema de este
    tipo, puede equivocarse — y no tiene autoridad sobre la formulación.

    Las decisiones de proyecto deben verificarse contra la
    [documentación de formulaciones](../spx/formulacoes/index.md) y las
    normas.

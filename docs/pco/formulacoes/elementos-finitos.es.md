# Elementos finitos

El modelo de bielas y tirantes es una **idealización**: supone por dónde pasa
la compresión y dónde aparece la tracción, y dimensiona a partir de eso. El
análisis por elementos finitos resuelve el encepado como un sólido
tridimensional y muestra el campo de tensiones que de hecho se instala.

No sustituye el modelo de bielas — sustituye la **fe** en él.

## La malla { #a-malha }

El PCO arma la malla sobre el polígono real del encepado, con dos tipos de
elemento:

| Elemento | Cuándo usarlo |
| :-- | :-- |
| **Hexaédrico** | Encepados de geometría regular. Converge más rápido y con menos elementos para la misma precisión |
| **Tetraédrico** | Geometrías que el hexaedro no llena bien — disposiciones irregulares, recortes, muchos pilares |

!!! tip "Empiece por el hexaédrico"

    Para el encepado corriente — rectangular, pilotes en disposición regular —
    el hexaedro da un mejor resultado con una malla menor. El tetraedro es la
    salida cuando la geometría no se deja dividir en hexaedros de forma
    razonable.

## Qué se lee en el resultado { #o-que-se-le-no-resultado }

El análisis devuelve el campo de tensiones en el sólido. Importan tres
lecturas:

**Por dónde pasa realmente la compresión.** Las trayectorias de tensión
principal de compresión dibujan las bielas reales. Compararlas con las bielas
supuestas muestra si el modelo de celosía representa ese encepado — en un
encepado alto y bien proporcionado, coinciden; en uno bajo y ancho, la
compresión se reparte de una forma que ninguna celosía simple reproduce.

**Dónde aparece la tracción.** El tirante idealizado es una barra en la base.
En el sólido, la tracción ocupa una región, y la altura de esa región indica si
concentrar toda la armadura en la base es adecuado o si debe subir.

**Si algún nudo está sobrecargado.** La verificación analítica de los nudos
usa áreas idealizadas. El sólido muestra la concentración real.

## Verificación de los nudos { #verificacao-dos-nos }

El PCO usa el resultado del MEF para comprobar las tensiones en los nudos de
compresión — bajo el pilar y sobre los pilotes — contra los límites de la
NBR 6118.

!!! warning "Sin el MEF calculado, la verificación es analítica"

    La comprobación de los nudos por el campo de tensiones **exige el modelo
    resuelto**. Sin él, el programa recurre a la verificación analítica, con
    las áreas idealizadas del modelo de bielas.

    La distinción no es académica: la verificación analítica puede aprobar un
    encepado que el campo de tensiones reprueba, porque supone una
    distribución uniforme donde hay concentración. Si el encepado es crítico,
    **ejecute el MEF**.

## Reacciones en los pilotes { #reacoes-nas-estacas }

El modelo de elementos finitos también proporciona la distribución de
reacciones entre los pilotes — que, en un encepado con varios pilares o con
carga excéntrica, no es la que devuelve la fórmula analítica de distribución
lineal.

Como el modelo es **lineal**, la combinación de acciones puede resolverse caso
por caso y las reacciones envolverse después. Vea
[Combinación de acciones](combinacoes.md).

## Límites de validez { #limites-de-validade }

!!! warning validade "Rango de aplicación"

    - El modelo es **elástico lineal**. El hormigón no fisura, el acero no
      fluye, no hay plastificación. Cerca de la rotura, el campo real se
      redistribuye de una forma que el modelo lineal no capta — y es
      justamente esa redistribución la que respalda el modelo de bielas.
    - Por eso: **el MEF lineal no sustituye el modelo de bielas y tirantes**.
      Verifica hipótesis y localiza concentraciones; el dimensionamiento sigue
      saliendo del modelo de celosía, que es el que respalda la norma.
    - Los pilotes entran como apoyos. Su rigidez real — que calculan los
      programas de la [línea SP](../../spx/index.md) — altera la distribución
      de reacciones en un encepado hiperestático.
    - El refinamiento de la malla influye en el resultado en las regiones de
      concentración. Una tensión pico junto a una esquina entrante crece con el
      refinamiento y no converge: es una singularidad geométrica, no un
      esfuerzo real.

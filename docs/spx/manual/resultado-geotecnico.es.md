# Resultado Geotécnico

Cuarta pestaña, y el punto de decisión del proyecto: aquí se elige la
**longitud del pilote**.

La pestaña tiene cuatro subpestañas:

| Subpestaña | Contenido |
| :-- | :-- |
| Aoki–Velloso | Capacidad por cota |
| Décourt–Quaresma | Capacidad por cota |
| Teixeira | Capacidad por cota |
| Asentamiento (Cintra y Aoki) | Asentamiento, curva carga × asentamiento, diagrama de axiles |

## Cómo leer la tabla { #como-ler-a-tabela }

Cada método presenta una fila **por cota posible de punta**:

| Columna | Unidad | Contenido |
| :-- | :-- | :-- |
| Cotas | m | Profundidad de la punta, negativa |
| \(R_l\) acum. | kN | Fricción lateral acumulada desde la cabeza hasta la cota |
| \(R_p\) | kN | Resistencia de punta en esa cota |
| \(R_t\) | kN | Suma de ambas |
| \(P_a\) Final | kN | **Carga admisible**, ya con factores y límites |

El procedimiento es directo: recorra la columna \(P_a\) Final hasta encontrar
el primer valor que supera la carga del pilote. Esa cota es la longitud
necesaria.

!!! tip "Por eso la tabla es por cota"

    Los programas que devuelven un único número obligan a probar longitudes
    hasta acertar. Con la curva completa de \(P_a(z)\) en una sola ejecución,
    la elección se vuelve la lectura de una columna — y muestra también
    **cuánto se ganaría** bajando un metro más, que es la información para
    decidir entre alargar el pilote o aumentar el diámetro.

### Columnas adicionales en pilotes excavados { #colunas-extras-em-estacas-escavadas }

Para un pilote excavado en compresión, Décourt-Quaresma agrega:

| Columna | Contenido |
| :-- | :-- |
| Pa excavado | El límite \(1{,}25\,R_l\) |
| Pa Dec-Qua | El valor del método, sin el límite |

La columna \(P_a\) Final muestra el **menor** de los dos. Tener los tres lado a
lado muestra qué criterio gobernó — información que suele justificar cambiar
el tipo de pilote.

## Los tres métodos divergen { #os-tres-metodos-divergem }

Y deben hacerlo. La principal fuente de divergencia es **qué \(N_{SPT}\) usa
cada uno en la punta**:

| Método | \(N\) de punta |
| :-- | :-- |
| Aoki-Velloso | La capa inmediatamente inferior |
| Décourt-Quaresma | Promedio de tres capas |
| Teixeira | Promedio en la ventana \([-4D, +D]\) |

!!! info "Cómo interpretarlo"

    - **Una gran divergencia** suele indicar un perfil con una variación brusca
      cerca de la punta. Aoki se separa de los otros dos porque un lente
      resistente de un metro sostiene su punta por sí solo.
    - **Teixeira desentonando con los demás** señala la influencia del
      diámetro: solo él dimensiona la ventana del \(N_p\) en función de \(D\).
    - **Una concordancia excesiva** es más sospechosa que la divergencia — en
      general significa un perfil homogéneo, donde los tres se reducen al mismo
      promedio.

    La práctica defendible es adoptar el **menor** de los tres, o el método con
    calibración regional conocida, registrando la elección en la memoria de
    cálculo.

## Asentamiento { #recalque }

La cuarta subpestaña muestra:

- El **asentamiento estimado** por el método de Cintra & Aoki, descompuesto en
  la parcela elástica del pilote y la parcela del suelo.
- El **asentamiento de grupo**, por la estimación \(\rho_{max}\sqrt{n}\).
- La **curva carga × asentamiento** de Van der Veen, anclada en el punto de
  trabajo.
- El **diagrama de esfuerzo axil** a lo largo del fuste.

El resultado se da en **milímetros**.

!!! warning "El asentamiento admisible no es decisión del programa"

    El SPX estima cuánto asienta la cimentación. Cuánto tolera la estructura es
    un atributo de ella — y los asentamientos **diferenciales** entre apoyos,
    que son los que de hecho dañan las edificaciones, exigen comparar las
    cimentaciones entre sí.

    Vea [límites de validez](../formulacoes/recalque.md#limites-de-validade).

## Verificación geotécnica { #verificacao-geotecnica }

El programa emite una verificación por pilote, comparando la carga aplicada con
la admisible en la cota adoptada. Cambiar parámetros geotécnicos después de
calcular dispara un aviso — el resultado en pantalla deja de corresponder a la
entrada, y es necesario reprocesar.

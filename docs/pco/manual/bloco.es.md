# Configuración del encepado

Primera pestaña. Define la geometría del encepado, la posición de los pilotes,
los pilares y las acciones.

## Pilotes { #estacas }

| Campo | Observación |
| :-- | :-- |
| Número de pilotes | De **1 a 30** por encepado |
| Posición | Coordenadas X e Y de cada pilote |
| Diámetro | Define el área del nudo sobre el pilote |
| Separación entre ejes | Gobierna el brazo de palanca de las bielas |

El contorno del encepado es la **envolvente convexa** de los pilotes, más el
vuelo — y no un rectángulo circunscrito. Es ese polígono el que entra en el
cálculo del peso propio y en la malla de elementos finitos.

!!! tip "La separación es la variable más sensible"

    Alejar los pilotes inclina la biela y **aumenta la armadura del tirante**,
    además de agrandar el encepado en planta. Acercarlos reduce el tirante,
    pero hay un mínimo constructivo — pilotes demasiado próximos interfieren
    entre sí en la ejecución y en la capacidad.

## Pilares { #pilares }

El PCO acepta **más de un pilar por encepado**, cada uno en su propia pestaña,
con su sección, posición y acciones.

### Secciones disponibles { #secoes-disponiveis }

| Sección | |
| :-- | :-- |
| Rectangular | |
| Circular | |
| Perfil I/H | |
| Perfil U | |
| Rectangular hueca | |
| Circular hueca | |

!!! info "Una sección no rectangular se convierte en una dimensión equivalente"

    Las fórmulas de Blévot piden una dimensión \(a_p\) del pilar en la
    dirección considerada. Para secciones que no son rectángulos, el programa
    calcula la **dimensión equivalente** preservando el área de contacto que
    define el nudo de compresión bajo el pilar.

    Es la aproximación correcta para el modelo de bielas, que ve el pilar como
    la región por donde la carga entra en el encepado — no como su forma
    exacta.

## Acciones { #acoes }

Cada pilar recibe los cinco componentes de esfuerzo:

| Componente | Significado |
| :-- | :-- |
| \(N\) | Axil |
| \(M_x\), \(M_y\) | Momentos |
| \(F_x\), \(F_y\) | Cortantes |

Las acciones se clasifican en **permanentes** y **variables**, y el programa
arma las combinaciones últimas normales de la NBR 8681 a partir de ahí.

!!! warning "Clasifique correctamente permanente y variable"

    No es una formalidad. La norma manda usar \(\gamma_g = 1{,}0\) en la acción
    permanente cuando **alivia** el efecto de una variable, y \(1{,}4\) cuando
    lo agrava — y el PCO prueba las dos hipótesis precisamente porque
    "favorable" cambia de verificación en verificación.

    Una acción cargada como permanente cuando es variable — o al revés —
    invalida toda la combinación. Vea
    [Combinación de acciones](../formulacoes/combinacoes.md).

El **peso propio del encepado** lo calcula el programa a partir del volumen
real, con \(\gamma_{concreto} = 25\) kN/m³ (NBR 6120), y entra como acción
permanente.

## Simulación por elementos finitos { #simulacao-em-elementos-finitos }

Con la geometría y las acciones cargadas, la pestaña resuelve el encepado como
un sólido.

| Opción | Cuándo usarla |
| :-- | :-- |
| Malla **hexaédrica** | Geometría regular — converge mejor con menos elementos |
| Malla **tetraédrica** | Disposiciones irregulares, recortes, muchos pilares |

El resultado muestra el campo de tensiones, las reacciones en los pilotes y
las tensiones en los nudos — bajo el pilar y sobre los pilotes.

!!! note "El MEF es opcional para dimensionar"

    Blévot y MBT son analíticos. El modelo de elementos finitos sirve para
    **verificar** las hipótesis y para comprobar los nudos con el campo de
    tensiones real, que es más riguroso que la comprobación analítica.

    En un encepado crítico, ejecútelo. Vea
    [Elementos finitos](../formulacoes/elementos-finitos.md).

## Visualización 3D { #visualizacao-3d }

El encepado se dibuja con los pilotes y pilares en su posición. Úsela antes de
calcular: una coordenada invertida es el error de entrada más común, y es
invisible en la tabla.

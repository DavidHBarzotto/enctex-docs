# Licencias

Los programas de EnCteX usan una licencia por clave, vinculada al equipo. La
validación se hace en un servidor, con un período de tolerancia para trabajar
sin internet.

## Activación { #ativacao }

En la primera ejecución el programa pide la clave de licencia. Pegue la clave
recibida en la compra y confirme.

Lo que ocurre en ese momento:

1. La clave se valida en el servidor de licencias.
2. El equipo queda **registrado** en la licencia, mediante una huella digital
   del hardware.
3. La clave y la fecha de validación quedan guardadas en la configuración del
   usuario de Windows.

A partir de ahí el programa abre sin pedir nada, revalidando en segundo plano.

!!! warning "Una licencia, un equipo"

    Cada licencia tiene un límite de equipos registrados. Al intentar activar
    en un equipo por encima del límite, el registro es rechazado. Para migrar
    de equipo, vea [Cambio de equipo](#troca-de-equipamento).

## Tipos de licencia { #tipos-de-licenca }

| Tipo | Cómo se comporta |
| :-- | :-- |
| **Perpetua** | No vence. Sigue válida indefinidamente en el equipo registrado. |
| **Mensual** | Tiene fecha de vencimiento. Debe renovarse para que el programa siga abriendo. |

El programa distingue ambas por la existencia de fecha de vencimiento: una
licencia sin fecha es perpetua. El tipo aparece en la pantalla de licencia
dentro del programa.

## Trabajo sin internet { #trabalho-sem-internet }

El programa **no exige conexión permanente**. Después de que el equipo haya
validado la licencia al menos una vez, hay una tolerancia de **7 días** de uso
sin contacto con el servidor.

El comportamiento es el siguiente:

| Situación | Qué ocurre |
| :-- | :-- |
| El servidor responde que la licencia es válida | Abre normalmente y renueva el sello de validación |
| Sin internet, validó hace menos de 7 días | Abre normalmente, dentro de la tolerancia |
| Sin internet, validó hace más de 7 días | No abre; conéctese para revalidar |
| Sin internet y **nunca** validó en este equipo | No abre; la primera activación exige internet |
| Licencia mensual vencida | No abre, aun dentro de la tolerancia |
| El servidor responde que la licencia ya no es válida | No abre; la licencia guardada se descarta |

!!! note "Un fallo de red no cancela la licencia"

    Hay una distinción deliberada entre *"el servidor dijo que la licencia es
    inválida"* y *"no logré comunicarme con el servidor"*. Solo el primer caso
    borra la licencia guardada. Una caída de internet, un firewall corporativo
    o un viaje nunca hacen que el programa olvide que usted tiene licencia —
    solo consumen la tolerancia.

En campo o en obra sin señal, por lo tanto: abra el programa conectado antes
de salir, y tendrá una semana de autonomía.

## Cambio de equipo { #troca-de-equipamento }

Cambiar de computadora exige liberar el registro del equipo anterior, porque
el límite es por equipo registrado y no por instalación.

Póngase en contacto a través de [enctex.com.br](https://enctex.com.br)
indicando la clave de licencia y el motivo. El registro anterior se elimina y
la clave puede activarse nuevamente.

!!! tip "Antes de formatear"

    Solicite la liberación **antes** de formatear o descartar el equipo.
    Después, el equipo ya no puede presentarse al servidor para darse de baja
    por sí solo, y la liberación pasa a depender del soporte.

## Preguntas frecuentes { #perguntas-frequentes }

??? question "¿Puedo instalarlo en casa y en la oficina?"

    Depende del límite de equipos de su licencia. Las licencias individuales
    suelen permitir un equipo. Consulte a EnCteX por licencias para más de un
    equipo.

??? question "¿Reinstalar Windows exige una nueva activación?"

    Sí. La huella digital del equipo cambia con la reinstalación del sistema, y
    el registro anterior debe liberarse.

??? question "¿La licencia del SPX sirve para el PCX?"

    No. Cada producto tiene su propia licencia — las claves se emiten por
    producto y no son intercambiables.

??? question "¿Qué pasa cuando la licencia mensual vence en medio de un proyecto?"

    El programa deja de abrir, pero **no se pierde ningún archivo**: los
    proyectos, DXF e informes ya guardados siguen en el disco y se abren
    normalmente después de la renovación.

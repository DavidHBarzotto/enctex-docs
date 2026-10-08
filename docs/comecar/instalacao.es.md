# Instalación

## Requisitos { #requisitos }

| Ítem | Requisito |
| :-- | :-- |
| Sistema operativo | Windows 10 u 11, **64 bits** |
| Arquitectura | x64 — no hay versión de 32 bits |
| Espacio en disco | ~500 MB por programa |
| Memoria | 4 GB mínimo; 8 GB recomendado para análisis por elementos finitos |
| Internet | Necesaria en la primera activación y en las revalidaciones periódicas de la licencia |

Los programas se distribuyen compilados. **No es necesario tener Python
instalado** — el intérprete y todas las bibliotecas van incluidos en el
ejecutable.

## Procedimiento { #procedimento }

1. Descargue el instalador del programa contratado:

    | Programa | Instalador |
    | :-- | :-- |
    | SPO | `Instalar_SPO.exe` |
    | SPX | `Instalar_SPX.exe` |
    | SPX AI | `Instalar_SPX_AI.exe` |
    | PCO | `Instalar_PCO.exe` |
    | PCX | `Instalar_PCX.exe` |

2. Ejecute el instalador. Windows puede mostrar el aviso de SmartScreen para un
   ejecutable todavía poco difundido — haga clic en **Más información →
   Ejecutar de todas formas**.

3. Acepte los términos de licencia y confirme la carpeta. La predeterminada es
   `C:\Program Files\<PROGRAMA>`.

4. Al final, el programa se agrega al menú Inicio y, opcionalmente, al
   escritorio.

5. En la primera ejecución, ingrese la clave de licencia. Vea
   [Licencias](licenciamento.md).

!!! note "Instalación en paralelo"

    Los programas son independientes y pueden convivir en el mismo equipo —
    SPO, SPX y SPX AI se instalan en carpetas separadas y no comparten
    archivos. Cada uno requiere su propia licencia.

## Primera ejecución { #primeira-execucao }

La primera apertura es más lenta que las siguientes: el ejecutable descomprime
las bibliotecas numéricas en una carpeta temporal. Una pantalla de bienvenida
(*splash*) cubre ese tiempo. En las ejecuciones siguientes la carga es
sensiblemente más rápida.

## Desinstalación { #desinstalacao }

Panel de control → Programas y características → seleccione el programa →
Desinstalar. La desinstalación **no** elimina los proyectos ni los archivos
exportados (DXF, DOCX), que quedan donde usted los guardó.

La clave de licencia queda registrada en la configuración del usuario de
Windows y tampoco se borra — reinstalar no exige reactivar, siempre que la
licencia siga válida y el equipo sea el mismo.

## Solución de problemas { #resolucao-de-problemas }

??? question "El programa no abre y no pasa nada"

    Suele ser el antivirus bloqueando la descompresión de las bibliotecas en
    `%TEMP%`. Agregue una excepción para el ejecutable del programa y para la
    carpeta de instalación.

??? question "Error de DLL faltante al iniciar"

    Instale el **Microsoft Visual C++ Redistributable (x64)** más reciente. Las
    bibliotecas numéricas dependen de él.

??? question "La ventana se abre cortada o con fuentes gigantes"

    Ocurre en monitores con escala superior al 100 %. Haga clic derecho en el
    acceso directo → Propiedades → Compatibilidad → **Cambiar configuración de
    PPP alto** → marque *Invalidar el comportamiento de escalado de PPP alto*.

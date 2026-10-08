# Installation

## Requirements { #requisitos }

| Item | Requirement |
| :-- | :-- |
| Operating system | Windows 10 or 11, **64-bit** |
| Architecture | x64 — there is no 32-bit version |
| Disk space | ~500 MB per program |
| Memory | 4 GB minimum; 8 GB recommended for finite element analysis |
| Internet | Required for the first activation and for periodic licence revalidation |

The programs are distributed compiled. **You do not need Python installed** —
the interpreter and all libraries are bundled in the executable.

## Procedure { #procedimento }

1. Download the installer for the program you purchased:

    | Program | Installer |
    | :-- | :-- |
    | SPO | `Instalar_SPO.exe` |
    | SPX | `Instalar_SPX.exe` |
    | SPX AI | `Instalar_SPX_AI.exe` |
    | PCO | `Instalar_PCO.exe` |
    | PCX | `Instalar_PCX.exe` |

2. Run the installer. Windows may show the SmartScreen warning for an
   executable that is not yet widely distributed — click **More info → Run
   anyway**.

3. Accept the licence terms and confirm the folder. The default is
   `C:\Program Files\<PROGRAM>`.

4. At the end, the program is added to the Start menu and, optionally, to the
   desktop.

5. On first launch, enter the licence key. See [Licensing](licenciamento.md).

!!! note "Side-by-side installation"

    The programs are independent and can coexist on the same machine — SPO,
    SPX and SPX AI install into separate folders and share no files. Each one
    requires its own licence.

## First launch { #primeira-execucao }

The first start is slower than the following ones: the executable unpacks the
numerical libraries into a temporary folder. A splash screen covers this time.
Subsequent launches load noticeably faster.

## Uninstalling { #desinstalacao }

Control Panel → Programs and Features → select the program → Uninstall.
Uninstalling does **not** remove your projects or exported files (DXF, DOCX),
which stay where you saved them.

The licence key is stored in the Windows user settings and is not deleted
either — reinstalling does not require reactivation, as long as the licence is
still valid and the machine is the same.

## Troubleshooting { #resolucao-de-problemas }

??? question "The program does not open and nothing happens"

    This is usually an antivirus blocking the unpacking of the libraries in
    `%TEMP%`. Add an exception for the program's executable and for the
    installation folder.

??? question "Missing DLL error on startup"

    Install the latest **Microsoft Visual C++ Redistributable (x64)**. The
    numerical libraries depend on it.

??? question "The window opens cropped or with huge fonts"

    This happens on monitors scaled above 100 %. Right-click the shortcut →
    Properties → Compatibility → **Change high DPI settings** → tick
    *Override high DPI scaling behaviour*.

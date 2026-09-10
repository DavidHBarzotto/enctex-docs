# Instalação

## Requisitos

| Item | Requisito |
| :-- | :-- |
| Sistema operacional | Windows 10 ou 11, **64 bits** |
| Arquitetura | x64 — não há versão de 32 bits |
| Espaço em disco | ~500 MB por programa |
| Memória | 4 GB mínimo; 8 GB recomendado para análise em elementos finitos |
| Internet | Necessária na primeira ativação e nas revalidações periódicas da licença |

Os programas são distribuídos compilados. **Não é preciso ter Python
instalado** — o interpretador e todas as bibliotecas vão embutidos no
executável.

## Procedimento

1. Baixe o instalador do programa contratado:

    | Programa | Instalador |
    | :-- | :-- |
    | SPO | `Instalar_SPO.exe` |
    | SPX | `Instalar_SPX.exe` |
    | SPX AI | `Instalar_SPX_AI.exe` |
    | PCO | `Instalar_PCO.exe` |
    | PCX | `Instalar_PCX.exe` |

2. Execute o instalador. O Windows pode exibir o aviso do SmartScreen para um
   executável ainda pouco disseminado — em **Mais informações → Executar assim
   mesmo**.

3. Aceite os termos de licença e confirme o diretório. O padrão é
   `C:\Program Files\<PROGRAMA>`.

4. Ao final, o programa é criado no menu Iniciar e, opcionalmente, na área de
   trabalho.

5. Na primeira execução, informe a chave de licença. Veja
   [Licenciamento](licenciamento.md).

!!! note "Instalação lado a lado"

    Os programas são independentes e podem conviver na mesma máquina — SPO,
    SPX e SPX AI instalam em pastas separadas e não compartilham arquivos.
    Cada um exige a sua própria licença.

## Primeira execução

A abertura inicial é mais lenta que as seguintes: o executável descompacta as
bibliotecas numéricas em uma pasta temporária. Uma tela de abertura (*splash*)
cobre esse tempo. Nas execuções seguintes o carregamento é sensivelmente mais
rápido.

## Desinstalação

Painel de Controle → Programas e Recursos → selecione o programa →
Desinstalar. A desinstalação **não** remove os projetos nem os arquivos
exportados (DXF, DOCX), que ficam onde você os salvou.

A chave de licença fica registrada nas configurações do usuário no Windows e
também não é apagada — reinstalar não exige reativar, desde que a licença
continue válida e a máquina seja a mesma.

## Resolução de problemas

??? question "O programa não abre e nada acontece"

    Costuma ser antivírus bloqueando a descompactação das bibliotecas em
    `%TEMP%`. Adicione uma exceção para o executável do programa e para a pasta
    de instalação.

??? question "Erro de DLL ausente ao iniciar"

    Instale o **Microsoft Visual C++ Redistributable (x64)** mais recente. As
    bibliotecas numéricas dependem dele.

??? question "A janela abre cortada ou com fontes gigantes"

    Ocorre em monitores com escala acima de 100 %. Clique com o botão direito
    no atalho → Propriedades → Compatibilidade → **Alterar configurações de DPI
    elevado** → marque *Substituir o comportamento de escala de DPI elevado*.

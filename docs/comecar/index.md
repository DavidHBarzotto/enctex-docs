# Começar

Esta seção vale para os cinco programas. O que é específico de cada um está no
manual do produto.

<div class="grid cards" markdown>

-   :material-download:{ .lg .middle } **[Instalação](instalacao.md)**

    ---

    Requisitos, procedimento e onde cada programa é instalado.

-   :material-key-outline:{ .lg .middle } **[Licenciamento](licenciamento.md)**

    ---

    Ativação, tipos de licença, troca de máquina e uso sem internet.

-   :material-axis-arrow:{ .lg .middle } **[Convenções e unidades](convencoes.md)**

    ---

    Sinais, eixos, unidades e os códigos numéricos de solo.

-   :material-book-check-outline:{ .lg .middle } **[Normas atendidas](normas.md)**

    ---

    O que cada programa referencia, e o que fica a cargo do projetista.

</div>

## A família de programas

Os cinco programas dividem-se em duas linhas, e vale entender a relação antes
de escolher:

**Linha SP — Simple Pile: estacas e seus blocos**

| Programa | Nome completo | Versão | Acrescenta |
| :-- | :-- | :-- | :-- |
| SPO | Simple Pile One | 1.0.1 | O núcleo: capacidade de carga, recalque, análise estrutural, dimensionamento e detalhamento |
| SPX | Simple Pile X | 1.0.1 | Estacas inclinadas, modelagem de perfil estratigráfico e leitor editável de PDFs de sondagem |
| SPX AI | SPX AI | 1.0.1 | Automação por IA, leitura inteligente de PDFs, importação de planta DWG/DXF e comandos de geração |

**Linha PC — Pile Cap: blocos sobre estacas**

| Programa | Nome completo | Versão | Acrescenta |
| :-- | :-- | :-- | :-- |
| PCO | Pile Cap One | 1.0.0 | Blocos rígidos por bielas e tirantes |
| PCX | Pile Cap X | 1.0.0 | Blocos flexíveis, calculados como viga bi-apoiada ou engastada |

Cada linha é cumulativa: o SPX faz tudo o que o SPO faz, e o SPX AI faz tudo o
que o SPX faz. O mesmo vale para PCO e PCX, que compartilham o núcleo de
cálculo — o PCX é o PCO com os blocos flexíveis habilitados.

!!! tip "Qual escolher"

    Se o seu trabalho é estaca vertical com sondagem lançada à mão, o SPO
    resolve. O SPX passa a valer quando há **estaca inclinada**, quando a
    estratigrafia precisa ser modelada entre furos, ou quando os boletins vêm
    em PDF. O SPX AI se paga quando o volume de projeto é grande o bastante
    para a montagem manual de blocos e estacas virar gargalo.

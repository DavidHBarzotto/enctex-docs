# Sondagem e solos

Abas 2 e 3. Aqui entra o perfil do subsolo — o dado que governa todo o resto.

## Sondagem / NSPT

A sondagem é lançada **metro a metro**: para cada profundidade, um valor de
\(N_{SPT}\) e um código de solo.

| Coluna | Conteúdo |
| :-- | :-- |
| Profundidade | 1 m, 2 m, 3 m… |
| \(N_{SPT}\) | Número de golpes |
| Código de solo | Numérico, posicional — ver abaixo |

### Códigos de solo

O tipo é identificado por número, não por texto. O primeiro dígito é a fração
dominante (1 areia, 2 silte, 3 argila) e os seguintes são as secundárias, em
ordem decrescente.

| Código | Solo | Código | Solo |
| :-- | :-- | :-- | :-- |
| 1 | Areia | 3 | Argila |
| 12 | Areia Siltosa | 31 | Argila Arenosa |
| 123 | Areia Siltoargilosa | 312 | Argila Arenossiltosa |
| 13 | Areia Argilosa | 32 | Argila Siltosa |
| 132 | Areia Argilossiltosa | 321 | Argila Siltoarenosa |
| 2 | Silte | | |
| 21 | Silte Arenoso | | |
| 213 | Silte Arenoargiloso | | |
| 23 | Silte Argiloso | | |
| 231 | Silte Argiloarenoso | | |

!!! warning "O código escolhe os parâmetros de cálculo"

    Não é rótulo. É o código que seleciona \(K\) e \(\alpha\) de Aoki-Velloso,
    \(C\) de Décourt-Quaresma, \(\alpha_T\) de Teixeira e o fator \(m\) das
    molas. Trocar `12` por `21` — areia siltosa por silte arenoso — reduz \(K\)
    de 800 para 550 kPa, **31 % a menos de resistência de ponta**.

    Confira a classificação do boletim antes de lançar. Ver
    [Tabelas de parâmetros](../formulacoes/tabelas.md).

### Múltiplos furos

O SPX aceita mais de um perfil de sondagem no mesmo projeto, cada um
identificado. Estacas diferentes podem ser associadas a furos diferentes — é o
que permite tratar uma obra onde o subsolo varia de um lado a outro.

### Leitor editável de PDFs

O SPX lê boletins de sondagem direto do **PDF**, extraindo profundidades, golpes
e descrição do solo para a tabela. A extração é **editável**: o que sair errado
se corrige antes de calcular.

Numa obra com quinze furos de vinte metros são trezentas linhas a digitar, e
cada uma é uma chance de trocar `12` por `21`.

!!! warning "Confira a classificação do solo"

    Extração automática depende do layout do boletim. Confira sempre a tabela
    resultante contra o original, com atenção ao **código de solo** — é ele que
    seleciona os parâmetros de todos os métodos.

!!! tip "No SPX AI a leitura é inteligente"

    O [SPX AI](../../spx-ai/recursos-ia.md#leitura-inteligente-de-pdfs) lida com
    variação de formato, tabelas com células mescladas e descrições fora do
    padrão — os laudos que o leitor comum não interpreta.

### Perfil 3D {: #perfil-3d }

Com mais de um furo, o SPX interpola a estratigrafia e apresenta um **perfil
tridimensional** do terreno. É o recurso que o SPO não tem, e serve para duas
coisas: perceber camadas que mergulham e justificar, visualmente, por que duas
estacas próximas receberam comprimentos diferentes.

## Propriedades dos Solos

Terceira aba. Traz os parâmetros por camada — pesos específicos e o que mais
alimenta a tensão geostática usada no
[recalque](../formulacoes/recalque.md#parcela-do-solo).

O programa oferece uma tabela de **pesos específicos típicos** por consistência
e compacidade, acessível pela própria aba, para quem não tem ensaio.

!!! note "Valor adotado na ausência de dado"

    Quando não há correspondência na tabela, o programa adota
    \(\gamma = 18\) kN/m³. É valor razoável para solo médio, mas registre a
    premissa na memória de cálculo quando ele governar o resultado.

## Boas práticas

- **Não dimensione com a ponta no último metro investigado.** Os métodos
  precisam de camadas abaixo da ponta para compor o \(N_p\); na última cota,
  o programa repete o último valor, o que é otimista se o perfil estava
  melhorando.
- **Desconfie de \(N_{SPT} > 50\).** Está fora da faixa de calibração da
  maioria das correlações.
- **Sondagem rasa produz projeto raso.** Se o perfil não alcança a profundidade
  necessária, a tabela de capacidade simplesmente termina — e a leitura correta
  é "falta investigação", não "a estaca não passa".

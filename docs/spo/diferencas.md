# O que muda no SPO

O SPO é o núcleo da linha SP. Esta página lista o que o [SPX](../spx/index.md)
acrescenta e o que fazer sem cada recurso — para que a leitura do
[manual do SPX](../spx/manual/interface.md) seja feita já sabendo o que ignorar.

## Estacas inclinadas

**Só no SPX e no SPX AI.**

No SPO todas as estacas são verticais. Não há inclinação nem azimute
individuais, e o diálogo de inclinação não existe.

O que isso implica na leitura do manual:

- Em [Configuração do bloco](../spx/manual/bloco.md#estacas-inclinadas), a
  seção de estacas inclinadas não se aplica.
- Em [Análise estrutural](../spx/formulacoes/analise-estrutural.md#estacas-inclinadas),
  a projeção por inclinação e azimute não se aplica — os nós ficam todos no
  mesmo eixo vertical.
- As **molas verticais \(K_v\)** continuam disponíveis, mas perdem a
  importância que têm em estaca inclinada. Em estaca vertical sob carga
  horizontal, elas pouco mudam o resultado.

!!! tip "Sem estaca inclinada, como resistir a esforço horizontal"

    Estacas inclinadas em leque são a solução clássica para empuxo e frenagem.
    Sem elas, o caminho é dimensionar as estacas verticais à flexão composta,
    o que o SPO faz integralmente — apenas resulta em peças mais robustas.

    Se o projeto vive de esforço horizontal — encontro de ponte, estrutura de
    contenção —, o SPX se paga rápido.

## Modelagem de perfil estratigráfico

**Só no SPX e no SPX AI.**

O SPO aceita sondagem, e mais de um furo. O que ele não faz é **interpolar a
estratigrafia entre os furos** nem apresentar o perfil tridimensional do
terreno.

Na prática:

- Cada estaca é associada a um furo, e usa o perfil daquele furo.
- Não há sondagem virtual em posição intermediária.
- Em [Sondagem e solos](../spx/manual/sondagem.md#perfil-3d), a seção de perfil
  3D não se aplica.

!!! info "Quando isso pesa"

    Em terreno homogêneo, associar cada estaca ao furo mais próximo é
    suficiente e é o que se faz há décadas.

    A modelagem estratigráfica passa a valer quando as camadas **mergulham** —
    e aí a escolha de "furo mais próximo" pode atribuir a uma estaca um perfil
    que não é o dela. É também o que justifica, visualmente, por que duas
    estacas vizinhas receberam comprimentos diferentes.

## Leitor editável de PDFs de sondagem

**Só no SPX e no SPX AI.**

No SPO a sondagem é lançada na tabela. Em
[Sondagem e solos](../spx/manual/sondagem.md#leitor-editavel-de-pdfs), a seção do
leitor de PDF não se aplica.

!!! warning "É aqui que o tempo vai"

    Uma obra com quinze furos de vinte metros são trezentas linhas a digitar,
    cada uma com um \(N_{SPT}\) e um código de solo — e cada uma é uma chance
    de trocar `12` por `21`, o que muda \(K\) de 800 para 550 kPa.

    Se o volume de boletins é grande, o leitor de PDF do SPX é o recurso que
    mais devolve tempo. Ver [convenções](../comecar/convencoes.md#codigos-de-solo).

## O que é idêntico

Tudo o mais. Em particular:

| Módulo | |
| :-- | :-- |
| Capacidade de carga | Aoki-Velloso, Décourt-Quaresma e Teixeira |
| Recalque | Cintra & Aoki, grupo, Van der Veen |
| Reação do solo | \(K_h = m \cdot z\) e \(K_v\) |
| Análise estrutural | Elementos finitos sobre base elástica |
| Dimensionamento | Flexão composta oblíqua e cortante, NBR 6118 |
| Detalhamento | Interativo, com exportação DXF |
| Relatório | Memória de cálculo editável |
| Limites de projeto | 100 blocos · 30 estacas/bloco · 200 estacas · 20 sondagens |
| Tipos de estaca | Os sete |

As [formulações](../spx/formulacoes/index.md) valem sem ressalva.

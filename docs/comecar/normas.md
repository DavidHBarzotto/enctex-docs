# Normas atendidas

## O que cada programa referencia

| Norma | Título | SPO · SPX · SPX AI | PCO · PCX |
| :-- | :-- | :--: | :--: |
| **NBR 6122** | Projeto e execução de fundações | ● | |
| **NBR 6118** | Projeto de estruturas de concreto | ● | ● |
| **NBR 8681** | Ações e segurança nas estruturas | | ● |
| **NBR 6120** | Cargas para o cálculo de estruturas de edificações | | ● |

Além das normas brasileiras, os programas usam formulações consagradas de
outras fontes — os métodos semiempíricos de capacidade de carga (Aoki-Velloso,
Décourt-Quaresma, Teixeira), a estimativa de recalque de Cintra & Aoki e, nos
blocos, os Comentários do **IBRACON** à NBR 6118 e recomendações do **CEB/FIP**.
Cada uma é identificada na página de formulação que a emprega.

## Onde as normas entram

### NBR 6122 — Fundações

Entra no cálculo da carga admissível. O critério geral da norma é aplicado
sobre a resistência última:

\[
P_a = \frac{R_{total}}{2}
\]

com fator de segurança global 2. Alguns métodos impõem verificações adicionais
mais restritivas — Décourt-Quaresma separa os fatores de ponta e de fuste,
e estacas escavadas ganham limite próprio. O programa aplica **o menor** entre
os critérios cabíveis. Ver
[Capacidade de carga](../spx/formulacoes/capacidade-de-carga.md).

### NBR 6118 — Concreto

Entra em duas frentes:

- **Durabilidade** — a classe de agressividade ambiental define o cobrimento
  nominal:

    | Classe | Agressividade | Cobrimento |
    | :-- | :-- | --: |
    | CAA I | Branda | 3,0 cm |
    | CAA II | Moderada | 3,0 cm |
    | CAA III | Forte | 4,0 cm |
    | CAA IV | Muito forte | 5,0 cm |

- **Dimensionamento** — flexão composta oblíqua da seção circular, esforço
  cortante e detalhamento das armaduras.

### NBR 8681 — Ações e segurança

Usada nos programas de bloco para a combinação de ações e os coeficientes de
ponderação.

## O que fica a cargo do projetista

Esta seção é tão importante quanto a anterior. Os programas **não** decidem:

- **A escolha do método** de capacidade de carga. Aoki-Velloso,
  Décourt-Quaresma e Teixeira dão resultados diferentes para a mesma sondagem;
  qual deles representa melhor o local é julgamento de engenharia, apoiado em
  experiência regional e, quando houver, em prova de carga.
- **A qualidade da investigação.** Sondagem rasa, espaçamento excessivo entre
  furos ou classificação táctil-visual duvidosa produzem resultados
  igualmente duvidosos, sem que o programa possa perceber.
- **O recalque admissível.** O programa estima o recalque; quanto a estrutura
  tolera depende dela, não da fundação.
- **A verificação de prova de carga**, quando a norma a exige.
- **O comportamento de grupo** além da estimativa simplificada oferecida.
- **Condições especiais** — solos colapsíveis, expansivos, aterros sanitários,
  atrito negativo, escavações próximas, nível d'água variável.

!!! warning "Responsabilidade técnica"

    O projeto é assinado pelo engenheiro responsável, não pelo programa. A
    documentação de formulações existe justamente para que essa assinatura seja
    informada: ela diz qual conta foi feita, com que coeficientes e dentro de
    que faixa de validade.

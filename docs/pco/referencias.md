# Referências

A bibliografia das formulações implementadas no PCO e no PCX.

## Normas

- **ABNT NBR 6118** — *Projeto de estruturas de concreto — Procedimento*.
  Itens relevantes: 22.2.7.1 (comportamento do bloco rígido), 22.3.2 (limites
  de nós e bielas), 22.7.1 (definição), 22.7.3 (modelos de cálculo e
  fendilhamento), 22.7.4.1.1 (disposição e ancoragem da armadura de flexão),
  22.7.4.1.4 (altura para ancoragem do arranque), 22.7.4.1.5 (armaduras
  laterais e superior).
- **ABNT NBR 8681** — *Ações e segurança nas estruturas — Procedimento*.
- **ABNT NBR 6120** — *Ações para o cálculo de estruturas de edificações*.
- **ABNT NBR 6122** — *Projeto e execução de fundações*.
- **ACI 318** — *Building Code Requirements for Structural Concrete*. Item
  23.2.7: ângulo mínimo de 25° entre biela e tirante em um nó.

## Bielas e tirantes

- **BLÉVOT, J.; FRÉMY, R.** *Semelles sur pieux.* Annales de l'Institut
  Technique du Bâtiment et des Travaux Publics, Paris, v. 20, n. 230, 1967. —
  Os 116 ensaios que fundamentam o método clássico.
- **SANTOS, D. M.; MARQUESI, M. L.; STUCCHI, F. R.** *Dimensionamento de
  blocos de fundações sobre 2 e 4 estacas.* In: ABNT NBR 6118:2014 —
  Comentários e exemplos de aplicação. São Paulo: IBRACON, 2015, p. 455–478. —
  **Fonte do MBT implementado.**
- **SANTOS, D. M.; CARVALHO, M. L.; STUCCHI, F. R.** *Dimensionamento de
  blocos rígidos sobre estacas com auxílio de modelos de bielas e tirantes.*
  Revista IBRACON de Estruturas e Materiais, v. 12, n. 4, p. 832–857, 2019. —
  Comparação dos métodos de Blévot, Fusco e Santos et al. com ensaios.
- **FUSCO, P. B.** *Técnicas de armar as estruturas de concreto.* São Paulo:
  Pini, 1995. — Método de Fusco, com a abertura de carga e o limite de
  \(0{,}20\,f_{cd}\).
- **BASTOS, P. S. S.** *Blocos de fundação.* Notas de aula, disciplina 2133 —
  Estruturas de Concreto III. Bauru: UNESP, 2023. — Formulação por arranjo,
  conforme a NBR 6118:2023.
- **MACHADO, C. P.** *Edifícios de concreto armado — Fundações.* São Paulo:
  FDTE/EPUSP, 1985. — Faixa recomendada \(45^\circ \le \alpha \le 55^\circ\).
- **SCHLAICH, J.; SCHÄFER, K.; JENNEWEIN, M.** *Toward a consistent design of
  structural concrete.* PCI Journal, v. 32, n. 3, p. 74–150, 1987.
- **ADEBAR, P.; ZHOU, Z.** *Design of deep pile caps by strut-and-tie models.*
  ACI Structural Journal, v. 93, n. 4, 1996.
- **CEB-FIP.** *Recommandations particulières au calcul et à l'execution des
  semelles de fondation.* Bulletin d'Information, Paris, n. 73, 1970. — Método
  do CEB-70.

## Blocos flexíveis

- **SILVA, T. C.** *Análise da confiabilidade de blocos rígidos e flexíveis.*
  Revista Eletrônica de Engenharia Civil (REEC), v. 17, n. 1, p. 31–46, 2021. —
  Base dos modelos de viga biapoiada e engastada e livre, e do critério de
  cisalhamento.
- **ALONSO, U. R.** *Exercícios de fundações.* 2. ed. São Paulo: Blucher,
  2010. — Armaduras complementares e a distância de engastamento a partir da
  face do pilar.

## Ensaios experimentais

- **CLARKE, J. L.** *Behaviour and design of pile caps with four piles.*
  Cement and Concrete Association, London, 1973.
- **SUZUKI, K.; OTSUKI, K.; TSUBATA, T.** *Influence of bar arrangement on
  ultimate strength of four pile caps.* Transactions of the Japan Concrete
  Institute, v. 20, 1998.
- **MUNHOZ, F. S.; GIONGO, J. S.** *Análise do comportamento de blocos de
  concreto armado sobre estacas submetidos à ação de força centrada.* Cadernos
  de Engenharia de Estruturas, São Carlos, v. 9, n. 41, 2007.

## Concreto armado

- **FUSCO, P. B.** *Estruturas de concreto: solicitações normais.* Rio de
  Janeiro: Guanabara Dois, 1981.
- **CARVALHO, R. C.; FIGUEIREDO FILHO, J. R.** *Cálculo e detalhamento de
  estruturas usuais de concreto armado.* São Carlos: EdUFSCar.
- **CAMPOS, J. C.** *Elementos de fundações em concreto.* São Paulo: Oficina
  de Textos, 2015.

## Ferramentas

- **ezdxf** — leitura e escrita de arquivos DXF, usada na exportação do
  detalhamento.

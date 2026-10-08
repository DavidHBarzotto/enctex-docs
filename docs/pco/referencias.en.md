# References

The bibliography for the formulations implemented in PCO and PCX. Titles are
kept in the language in which they were published.

## Standards { #normas }

- **ABNT NBR 6118** — *Projeto de estruturas de concreto — Procedimento*
  (design of concrete structures). Relevant items: 22.2.7.1 (rigid cap
  behaviour), 22.3.2 (node and strut limits), 22.7.1 (definition), 22.7.3
  (calculation models and splitting), 22.7.4.1.1 (arrangement and anchorage of
  the flexural reinforcement), 22.7.4.1.4 (depth for anchorage of the starter
  bars), 22.7.4.1.5 (side and top reinforcement).
- **ABNT NBR 8681** — *Ações e segurança nas estruturas — Procedimento*
  (actions and safety of structures).
- **ABNT NBR 6120** — *Ações para o cálculo de estruturas de edificações*
  (actions for the design of building structures).
- **ABNT NBR 6122** — *Projeto e execução de fundações* (design and
  construction of foundations).
- **ACI 318** — *Building Code Requirements for Structural Concrete*. Item
  23.2.7: minimum angle of 25° between strut and tie at a node.

## Strut and tie { #bielas-e-tirantes }

- **BLÉVOT, J.; FRÉMY, R.** *Semelles sur pieux.* Annales de l'Institut
  Technique du Bâtiment et des Travaux Publics, Paris, v. 20, n. 230, 1967. —
  The 116 tests underlying the classic method.
- **SANTOS, D. M.; MARQUESI, M. L.; STUCCHI, F. R.** *Dimensionamento de
  blocos de fundações sobre 2 e 4 estacas.* In: ABNT NBR 6118:2014 —
  Comentários e exemplos de aplicação. São Paulo: IBRACON, 2015, p. 455–478. —
  **Source of the implemented MBT.**
- **SANTOS, D. M.; CARVALHO, M. L.; STUCCHI, F. R.** *Dimensionamento de
  blocos rígidos sobre estacas com auxílio de modelos de bielas e tirantes.*
  Revista IBRACON de Estruturas e Materiais, v. 12, n. 4, p. 832–857, 2019. —
  Comparison of the Blévot, Fusco and Santos et al. methods with tests.
- **FUSCO, P. B.** *Técnicas de armar as estruturas de concreto.* São Paulo:
  Pini, 1995. — Fusco's method, with load spreading and the
  \(0.20\,f_{cd}\) limit.
- **BASTOS, P. S. S.** *Blocos de fundação.* Lecture notes, course 2133 —
  Estruturas de Concreto III. Bauru: UNESP, 2023. — Formulation by
  arrangement, according to NBR 6118:2023.
- **MACHADO, C. P.** *Edifícios de concreto armado — Fundações.* São Paulo:
  FDTE/EPUSP, 1985. — Recommended range \(45^\circ \le \alpha \le 55^\circ\).
- **SCHLAICH, J.; SCHÄFER, K.; JENNEWEIN, M.** *Toward a consistent design of
  structural concrete.* PCI Journal, v. 32, n. 3, p. 74–150, 1987.
- **ADEBAR, P.; ZHOU, Z.** *Design of deep pile caps by strut-and-tie models.*
  ACI Structural Journal, v. 93, n. 4, 1996.
- **CEB-FIP.** *Recommandations particulières au calcul et à l'execution des
  semelles de fondation.* Bulletin d'Information, Paris, n. 73, 1970. — The
  CEB-70 method.

## Flexible pile caps { #blocos-flexiveis }

- **SILVA, T. C.** *Análise da confiabilidade de blocos rígidos e flexíveis.*
  Revista Eletrônica de Engenharia Civil (REEC), v. 17, n. 1, p. 31–46, 2021. —
  Basis for the simply supported and cantilever beam models, and for the shear
  criterion.
- **ALONSO, U. R.** *Exercícios de fundações.* 2nd ed. São Paulo: Blucher,
  2010. — Complementary reinforcement and the fixing distance from the column
  face.

## Experimental tests { #ensaios-experimentais }

- **CLARKE, J. L.** *Behaviour and design of pile caps with four piles.*
  Cement and Concrete Association, London, 1973.
- **SUZUKI, K.; OTSUKI, K.; TSUBATA, T.** *Influence of bar arrangement on
  ultimate strength of four pile caps.* Transactions of the Japan Concrete
  Institute, v. 20, 1998.
- **MUNHOZ, F. S.; GIONGO, J. S.** *Análise do comportamento de blocos de
  concreto armado sobre estacas submetidos à ação de força centrada.* Cadernos
  de Engenharia de Estruturas, São Carlos, v. 9, n. 41, 2007.

## Reinforced concrete { #concreto-armado }

- **FUSCO, P. B.** *Estruturas de concreto: solicitações normais.* Rio de
  Janeiro: Guanabara Dois, 1981.
- **CARVALHO, R. C.; FIGUEIREDO FILHO, J. R.** *Cálculo e detalhamento de
  estruturas usuais de concreto armado.* São Carlos: EdUFSCar.
- **CAMPOS, J. C.** *Elementos de fundações em concreto.* São Paulo: Oficina
  de Textos, 2015.

## Tools { #ferramentas }

- **ezdxf** — reading and writing DXF files, used to export the detailing.

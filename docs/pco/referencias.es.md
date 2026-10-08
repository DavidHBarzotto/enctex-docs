# Referencias

La bibliografía de las formulaciones implementadas en el PCO y el PCX. Los
títulos se mantienen en el idioma en que fueron publicados.

## Normas { #normas }

- **ABNT NBR 6118** — *Projeto de estruturas de concreto — Procedimento*
  (proyecto de estructuras de hormigón). Ítems relevantes: 22.2.7.1
  (comportamiento del encepado rígido), 22.3.2 (límites de nudos y bielas),
  22.7.1 (definición), 22.7.3 (modelos de cálculo y hendimiento), 22.7.4.1.1
  (disposición y anclaje de la armadura de flexión), 22.7.4.1.4 (altura para el
  anclaje de la armadura de espera), 22.7.4.1.5 (armaduras laterales y
  superior).
- **ABNT NBR 8681** — *Ações e segurança nas estruturas — Procedimento*
  (acciones y seguridad en las estructuras).
- **ABNT NBR 6120** — *Ações para o cálculo de estruturas de edificações*
  (acciones para el cálculo de estructuras de edificaciones).
- **ABNT NBR 6122** — *Projeto e execução de fundações* (proyecto y ejecución
  de cimentaciones).
- **ACI 318** — *Building Code Requirements for Structural Concrete*. Ítem
  23.2.7: ángulo mínimo de 25° entre biela y tirante en un nudo.

## Bielas y tirantes { #bielas-e-tirantes }

- **BLÉVOT, J.; FRÉMY, R.** *Semelles sur pieux.* Annales de l'Institut
  Technique du Bâtiment et des Travaux Publics, París, v. 20, n. 230, 1967. —
  Los 116 ensayos que fundamentan el método clásico.
- **SANTOS, D. M.; MARQUESI, M. L.; STUCCHI, F. R.** *Dimensionamento de
  blocos de fundações sobre 2 e 4 estacas.* In: ABNT NBR 6118:2014 —
  Comentários e exemplos de aplicação. São Paulo: IBRACON, 2015, p. 455–478. —
  **Fuente del MBT implementado.**
- **SANTOS, D. M.; CARVALHO, M. L.; STUCCHI, F. R.** *Dimensionamento de
  blocos rígidos sobre estacas com auxílio de modelos de bielas e tirantes.*
  Revista IBRACON de Estruturas e Materiais, v. 12, n. 4, p. 832–857, 2019. —
  Comparación de los métodos de Blévot, Fusco y Santos et al. con ensayos.
- **FUSCO, P. B.** *Técnicas de armar as estruturas de concreto.* São Paulo:
  Pini, 1995. — Método de Fusco, con la apertura de carga y el límite de
  \(0{,}20\,f_{cd}\).
- **BASTOS, P. S. S.** *Blocos de fundação.* Notas de clase, asignatura 2133 —
  Estruturas de Concreto III. Bauru: UNESP, 2023. — Formulación por
  disposición, según la NBR 6118:2023.
- **MACHADO, C. P.** *Edifícios de concreto armado — Fundações.* São Paulo:
  FDTE/EPUSP, 1985. — Rango recomendado \(45^\circ \le \alpha \le 55^\circ\).
- **SCHLAICH, J.; SCHÄFER, K.; JENNEWEIN, M.** *Toward a consistent design of
  structural concrete.* PCI Journal, v. 32, n. 3, p. 74–150, 1987.
- **ADEBAR, P.; ZHOU, Z.** *Design of deep pile caps by strut-and-tie models.*
  ACI Structural Journal, v. 93, n. 4, 1996.
- **CEB-FIP.** *Recommandations particulières au calcul et à l'execution des
  semelles de fondation.* Bulletin d'Information, París, n. 73, 1970. — Método
  del CEB-70.

## Encepados flexibles { #blocos-flexiveis }

- **SILVA, T. C.** *Análise da confiabilidade de blocos rígidos e flexíveis.*
  Revista Eletrônica de Engenharia Civil (REEC), v. 17, n. 1, p. 31–46, 2021. —
  Base de los modelos de viga biapoyada y empotrada y libre, y del criterio de
  cortante.
- **ALONSO, U. R.** *Exercícios de fundações.* 2.ª ed. São Paulo: Blucher,
  2010. — Armaduras complementarias y la distancia de empotramiento a partir
  de la cara del pilar.

## Ensayos experimentales { #ensaios-experimentais }

- **CLARKE, J. L.** *Behaviour and design of pile caps with four piles.*
  Cement and Concrete Association, Londres, 1973.
- **SUZUKI, K.; OTSUKI, K.; TSUBATA, T.** *Influence of bar arrangement on
  ultimate strength of four pile caps.* Transactions of the Japan Concrete
  Institute, v. 20, 1998.
- **MUNHOZ, F. S.; GIONGO, J. S.** *Análise do comportamento de blocos de
  concreto armado sobre estacas submetidos à ação de força centrada.* Cadernos
  de Engenharia de Estruturas, São Carlos, v. 9, n. 41, 2007.

## Hormigón armado { #concreto-armado }

- **FUSCO, P. B.** *Estruturas de concreto: solicitações normais.* Rio de
  Janeiro: Guanabara Dois, 1981.
- **CARVALHO, R. C.; FIGUEIREDO FILHO, J. R.** *Cálculo e detalhamento de
  estruturas usuais de concreto armado.* São Carlos: EdUFSCar.
- **CAMPOS, J. C.** *Elementos de fundações em concreto.* São Paulo: Oficina
  de Textos, 2015.

## Herramientas { #ferramentas }

- **ezdxf** — lectura y escritura de archivos DXF, usada en la exportación del
  detallado.

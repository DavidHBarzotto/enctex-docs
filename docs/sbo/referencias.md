# Referências

A bibliografia das formulações implementadas no SBO e no SBX.

## Normas

- **ABNT NBR 6118** — *Projeto de estruturas de concreto — Procedimento*.
  Base de todo o dimensionamento: diagrama parábola-retângulo, domínios de
  deformação, armaduras mínimas, Modelo I de cortante e a verificação de
  interação entre cortante e torção.
- **ABNT NBR 8681** — *Ações e segurança nas estruturas — Procedimento*.
  Coeficientes parciais de segurança.

## Concreto armado

- **FUSCO, P. B.** *Estruturas de concreto: solicitações normais.* Rio de
  Janeiro: Guanabara Dois, 1981.
- **CARVALHO, R. C.; FIGUEIREDO FILHO, J. R.** *Cálculo e detalhamento de
  estruturas usuais de concreto armado.* São Carlos: EdUFSCar.
- **ARAÚJO, J. M.** *Curso de concreto armado.* Rio Grande: Dunas.

## Otimização

- **KRAFT, D.** *A software package for sequential quadratic programming.*
  DFVLR-FB 88-28, Deutsche Forschungs- und Versuchsanstalt für Luft- und
  Raumfahrt, 1988. — O algoritmo SLSQP usado pelo SBX.
- **NOCEDAL, J.; WRIGHT, S. J.** *Numerical optimization.* 2. ed. Springer,
  2006. — Programação quadrática sequencial, e por que métodos de gradiente
  são locais.

## Ferramentas

- **SciPy** — `scipy.optimize.minimize` com o método SLSQP, para a otimização,
  e `scipy.optimize.bisect`, para a linha neutra na análise não linear.
  [scipy.org](https://scipy.org)

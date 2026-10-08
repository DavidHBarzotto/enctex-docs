# References

The bibliography for the formulations implemented in SBO and SBX. Titles are
kept in the language in which they were published.

## Standards { #normas }

- **ABNT NBR 6118** — *Projeto de estruturas de concreto — Procedimento*
  (design of concrete structures). The basis of all the design:
  parabola-rectangle diagram, strain domains, minimum reinforcement, shear
  Model I and the shear-torsion interaction check.
- **ABNT NBR 8681** — *Ações e segurança nas estruturas — Procedimento*
  (actions and safety of structures). Partial safety factors.

## Reinforced concrete { #concreto-armado }

- **FUSCO, P. B.** *Estruturas de concreto: solicitações normais.* Rio de
  Janeiro: Guanabara Dois, 1981.
- **CARVALHO, R. C.; FIGUEIREDO FILHO, J. R.** *Cálculo e detalhamento de
  estruturas usuais de concreto armado.* São Carlos: EdUFSCar.
- **ARAÚJO, J. M.** *Curso de concreto armado.* Rio Grande: Dunas.

## Optimisation { #otimizacao }

- **KRAFT, D.** *A software package for sequential quadratic programming.*
  DFVLR-FB 88-28, Deutsche Forschungs- und Versuchsanstalt für Luft- und
  Raumfahrt, 1988. — The SLSQP algorithm used by SBX.
- **NOCEDAL, J.; WRIGHT, S. J.** *Numerical optimization.* 2nd ed. Springer,
  2006. — Sequential quadratic programming, and why gradient methods are
  local.

## Tools { #ferramentas }

- **SciPy** — `scipy.optimize.minimize` with the SLSQP method, for the
  optimisation, and `scipy.optimize.bisect`, for the neutral axis in the
  non-linear analysis.
  [scipy.org](https://scipy.org)

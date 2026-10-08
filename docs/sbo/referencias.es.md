# Referencias

La bibliografía de las formulaciones implementadas en el SBO y el SBX. Los
títulos se mantienen en el idioma en que fueron publicados.

## Normas { #normas }

- **ABNT NBR 6118** — *Projeto de estruturas de concreto — Procedimento*
  (proyecto de estructuras de hormigón). Base de todo el dimensionamiento:
  diagrama parábola-rectángulo, dominios de deformación, armaduras mínimas,
  Modelo I de cortante y la verificación de interacción entre cortante y
  torsión.
- **ABNT NBR 8681** — *Ações e segurança nas estruturas — Procedimento*
  (acciones y seguridad en las estructuras). Coeficientes parciales de
  seguridad.

## Hormigón armado { #concreto-armado }

- **FUSCO, P. B.** *Estruturas de concreto: solicitações normais.* Rio de
  Janeiro: Guanabara Dois, 1981.
- **CARVALHO, R. C.; FIGUEIREDO FILHO, J. R.** *Cálculo e detalhamento de
  estruturas usuais de concreto armado.* São Carlos: EdUFSCar.
- **ARAÚJO, J. M.** *Curso de concreto armado.* Rio Grande: Dunas.

## Optimización { #otimizacao }

- **KRAFT, D.** *A software package for sequential quadratic programming.*
  DFVLR-FB 88-28, Deutsche Forschungs- und Versuchsanstalt für Luft- und
  Raumfahrt, 1988. — El algoritmo SLSQP usado por el SBX.
- **NOCEDAL, J.; WRIGHT, S. J.** *Numerical optimization.* 2.ª ed. Springer,
  2006. — Programación cuadrática secuencial, y por qué los métodos de
  gradiente son locales.

## Herramientas { #ferramentas }

- **SciPy** — `scipy.optimize.minimize` con el método SLSQP, para la
  optimización, y `scipy.optimize.bisect`, para la línea neutra en el análisis
  no lineal.
  [scipy.org](https://scipy.org)

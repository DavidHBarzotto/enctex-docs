# Shear and torsion

The two are treated together because they **compete for the same concrete
strut** — and it is this competition that the interaction check captures.

---

## Shear { #esforco-cortante }

NBR 6118 calculation Model I: struts at 45°, with a constant \(V_c\) term.

\[
\tau_{wd} = \frac{V_d}{b_w\,d}
\qquad\qquad
V_d = \gamma_f\,V_k
\]

### Strut crushing { #esmagamento-da-biela }

\[
\tau_{wu} = 0.27\,\alpha_v\,f_{cd}
\qquad\qquad
\alpha_v = 1 - \frac{f_{ck}}{250}
\]

If \(\tau_{wd} > \tau_{wu}\), **the section is insufficient** and the
calculation is stopped. No reinforcement can fix strut crushing.

### Transverse reinforcement { #armadura-transversal }

\[
\tau_c =
\begin{cases}
\dfrac{0.126\,f_{ck}^{2/3}}{\gamma_c} & f_{ck} \le 50\ \text{MPa} \\[10pt]
\dfrac{0.8904\,\ln(1+0.11\,f_{ck})}{\gamma_c} & f_{ck} > 50\ \text{MPa}
\end{cases}
\]

\[
\tau_d = \max\left[1.11\left(\tau_{wd} - \tau_c\right);\ 0\right]
\qquad\qquad
\frac{A_{sw}}{s} = \frac{100\,b_w\,\tau_d}{f_{ywd}}
\]

!!! info "Stirrup steel is limited to 435 MPa"

    \(f_{ywd} = \min\left(f_{yk}/\gamma_s;\ 435\ \text{MPa}\right)\).

    The code limits the stress in the transverse reinforcement precisely to
    control the width of diagonal cracks in service — there is no point using
    high-strength steel in the stirrup if it is going to crack before it
    yields.

### Minimum reinforcement { #armadura-minima }

\[
\rho_{sw,min} = \frac{0.2\,f_{ct,m}}{f_{ywk}}
\qquad\qquad
f_{ct,m} =
\begin{cases}
0.3\,f_{ck}^{2/3} & f_{ck} \le 50 \\[4pt]
2.12\,\ln(1+0.11 f_{ck}) & f_{ck} > 50
\end{cases}
\]

with \(f_{ywk} \le 500\) MPa and \(A_{sw,min} = \rho_{sw,min}\cdot 100\, b_w\).

---

## Torsion { #torcao }

### The equivalent hollow section { #a-secao-vazada-equivalente }

Torsion is resisted by a **closed shear flow** near the faces — the core
contributes little. That is why the solid section is replaced by an
equivalent hollow section of thickness \(t\).

Starting from \(t_0 = \dfrac{b\,h}{2(b+h)}\) and \(c_1 = d'\):

=== "t₀ ≥ 2c₁"

    \[
    t = t_0
    \qquad
    A_e = (b - t)(h - t)
    \qquad
    u_e = 2(b + h - 2t)
    \]

=== "t₀ < 2c₁"

    \[
    t = \min(t_0;\ b - 2c_1)
    \qquad
    A_e = (b - 2c_1)(h - 2c_1)
    \qquad
    u_e = 2(b + h - 4c_1)
    \]

\(A_e\) is the area enclosed by the centreline of the wall, and \(u_e\) the
perimeter of that line.

### Stress and limit { #tensao-e-limite }

\[
\tau_{td} = \frac{T_d}{2\,A_e\,t}
\qquad\qquad
\tau_{tu} = 0.25\,\alpha_v\,f_{cd}
\]

### Reinforcement { #armaduras }

\[
\frac{A_{sw,t}}{s} = \frac{100\,T_d}{2\,A_e\,f_{yd}}
\qquad\text{(per leg)}
\qquad\qquad
A_{sl,t} = \frac{T_d\,u_e}{2\,A_e\,f_{yd}}
\]

The longitudinal torsion reinforcement is distributed over the faces **in
proportion to the outer perimeter** — which gives shares for the bottom face,
the top face and the two sides.

Minimum, when there is torsion:

\[
A_{sl,min} = 0.5\,\rho_{sw,min}\,u_e\,b
\]

---

## The interaction check { #a-verificacao-de-interacao }

This is the central point of this chapter:

\[
\frac{\tau_{td}}{\tau_{tu}} + \frac{\tau_{wd}}{\tau_{wu}} \;\le\; 1
\]

Shear and torsion **add compression in the same strut**. Checking each one on
its own against its own limit passes sections that the combination fails —
which is why the code requires the sum of the ratios.

If the sum exceeds 1, the calculation is stopped: it is crushing, and calls
for a larger section.

### Maximum stirrup spacing { #espacamento-maximo-dos-estribos }

The same indicator governs the spacing:

| Sum of the ratios | Maximum spacing |
| :-- | :-- |
| \(\le 0.67\) | \(\min(0.6\,d;\ 30\ \text{cm})\) |
| \(> 0.67\) | \(\min(0.3\,d;\ 20\ \text{cm})\) |

The closer to crushing, the closer the stirrups — they start stitching cracks
that have already formed.

---

## Adding it all up { #somando-tudo }

The total transverse reinforcement combines both terms, bearing in mind that
the torsion stirrup counts **two legs**:

\[
\frac{A_{sw,tot}}{s} = \frac{A_{sw,v}}{s} + 2\,\frac{A_{sw,t}}{s}
\qquad\ge\ \rho_{sw,min}\cdot 100\,b
\]

And the longitudinal reinforcement also receives the increase due to shear —
the tensile share that the truss model transfers to the tension chord:

\[
\Delta A_{s,V} = \frac{0.5\,V_d}{f_{yd}}
\]

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - The torsion implemented is that of a **rectangular section**. T sections
      under torsion use the web as the reference section, which is an
      approximation.
    - Shear Model I, with struts at 45°. Model II, with variable inclination, is
      not implemented — it usually gives less reinforcement in heavily loaded
      members.
    - The torsion considered is **equilibrium** torsion. Compatibility torsion,
      which can be neglected when there is redistribution, is the designer's
      decision: if it is not entered, the program does not invent it.
    - There is no check of **crack width** in service, which in members under
      torsion is usually what actually governs the detailing.
    - The limits of \(f_{ywd}\) at 435 MPa and \(f_{ywk}\) at 500 MPa are those
      of the code for transverse reinforcement.

# Simple bending

Design for normal simple bending according to **NBR 6118**, with the
parabola-rectangle diagram and the equivalent rectangular stress block.

---

## Materials { #materiais }

\[
f_{cd} = \frac{f_{ck}}{\gamma_c}
\qquad\qquad
f_{yd} = \frac{f_{yk}}{\gamma_s}
\]

with \(\gamma_c = 1.4\), \(\gamma_s = 1.15\) and \(\gamma_f = 1.4\) by default
— all editable.

### Diagram parameters { #parametros-do-diagrama }

=== "fck ≤ 50 MPa"

    \[
    \lambda = 0.8
    \qquad
    \alpha_c = 0.85
    \qquad
    \varepsilon_{cu} = 3.5\text{‰}
    \]

    \[
    \xi_{lim} = 0.8\,\beta - 0.35
    \]

=== "fck > 50 MPa"

    \[
    \lambda = 0.8 - \frac{f_{ck}-50}{400}
    \qquad
    \alpha_c = 0.85\left(1 - \frac{f_{ck}-50}{200}\right)
    \]

    \[
    \varepsilon_{cu} = 2.6 + 35\left(\frac{90-f_{ck}}{100}\right)^{4}\text{‰}
    \qquad
    \xi_{lim} = 0.8\,\beta - 0.45
    \]

!!! info "The β coefficient and redistribution"

    \(\beta\) is the moment **redistribution ratio**. With \(\beta = 1\) — no
    redistribution — \(\xi_{lim} = 0.45\) for concretes up to C50 and \(0.35\)
    above, which are the code's ductility limits.

    Reducing \(\beta\) tightens \(\xi_{lim}\): the more moment is
    redistributed, the more rotation capacity the section needs, and the
    shallower the neutral axis must be.

### Steel { #aco }

Perfectly elastic-plastic diagram:

\[
\sigma_s =
\begin{cases}
E_s\,\varepsilon_s & \varepsilon_s < \varepsilon_{yd} \\[4pt]
f_{yd} & \varepsilon_s \ge \varepsilon_{yd}
\end{cases}
\qquad
\varepsilon_{yd} = \frac{f_{yd}}{E_s}
\]

---

## Rectangular section { #secao-retangular }

The reduced moment is

\[
\mu = \frac{M_d}{b\,d^2\,\sigma_{cd}}
\qquad\text{with}\qquad
\sigma_{cd} = \alpha_c\,f_{cd}
\quad\text{and}\quad
M_d = \gamma_f M_k
\]

and the limit between tension-only and compression reinforcement,

\[
\mu_{lim} = \lambda\,\xi_{lim}\left(1 - 0.5\,\lambda\,\xi_{lim}\right)
\]

### Tension reinforcement only — μ ≤ μlim { #armadura-simples-lim }

\[
\xi = \frac{1 - \sqrt{1 - 2\mu}}{\lambda}
\qquad\qquad
A_s = \frac{\lambda\,\xi\,b\,d\,\sigma_{cd}}{f_{yd}}
\]

### With compression reinforcement — μ > μlim { #armadura-dupla-lim }

The section cannot resist with tension reinforcement alone; compression
reinforcement \(A'_s\) is added. Its strain, with \(\delta = d'/d\):

\[
\varepsilon'_s = \frac{\varepsilon_{cu}\left(\xi_{lim} - \delta\right)}{\xi_{lim}}
\]

and hence

\[
A'_s = \frac{(\mu - \mu_{lim})\,b\,d\,\sigma_{cd}}{(1-\delta)\,\sigma'_s}
\]

\[
A_s = \left[\lambda\,\xi_{lim} + \frac{\mu - \mu_{lim}}{1-\delta}\right]\frac{b\,d\,\sigma_{cd}}{f_{yd}}
\]

!!! warning "Two conditions that stop the calculation"

    **Compression reinforcement in domain 2.** If
    \(\xi_{lim} < \varepsilon_{cu}/(\varepsilon_{cu}+10)\), the section would be
    in domain 2 with compression reinforcement — the concrete would not even
    be used. The program refuses and asks for a larger section.

    **Compression reinforcement in tension.** If \(\xi_{lim} \le \delta\), the
    neutral axis passes above \(A'_s\), and the "compression" reinforcement
    would be in tension. It refuses as well.

    In both cases the practical message is the same: **enlarge the section**.
    These are situations in which the geometry is the problem, not the
    reinforcement.

---

## T section { #secao-t }

The procedure is that of the rectangular section, with the flange
contributing in compression. The logic splits depending on whether the neutral
axis falls **within the flange** — in which case the section behaves as a
rectangle of width \(b_f\) — or **below it**, in which case compression is
shared between the flange and the web.

The inputs are: flange width \(b_f\), flange thickness \(h_f\), web width
\(b_w\) and the effective depth.

---

## Minimum reinforcement { #armadura-minima }

\[
\rho_{min} =
\begin{cases}
\dfrac{0.078\,f_{ck}^{2/3}}{f_{yd}} & f_{ck} \le 50\ \text{MPa} \\[10pt]
\dfrac{0.5512\,\ln(1 + 0.11\,f_{ck})}{f_{yd}} & f_{ck} > 50\ \text{MPa}
\end{cases}
\]

with the absolute floor

\[
\rho_{min} \ge 0.0015
\qquad\qquad
A_{s,min} = \rho_{min}\,b\,h
\]

Note that the minimum ratio applies to the **gross area \(b\,h\)**, not to
\(b\,d\).

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - **Normal simple bending**, in plane. Biaxial bending and bending with
      axial force are not covered.
    - The design is of a **section**, not of a member: the program does not
      calculate internal forces from spans and loads. You enter \(M_k\),
      \(V_k\) and \(T_k\) already obtained from your structural analysis.
    - **Serviceability limit states** — crack width and deflection — are not
      checked. For slender beams, deflection usually governs, and it is not
      checked here.
    - There is no check of **anchorage**, **laps** or **fatigue**.
    - The minimum skin reinforcement only enters the
      [SBX optimiser](../../sbx/otimizacao.md); in direct design it is a
      detailing choice.

# Formulas by arrangement

The closed-form expressions of the [Strut Method](blevot.md) for each pile
configuration, according to Bastos (2023) and NBR 6118.

In all of them: \(N\) is the column load, \(e\) the distance between pile
axes, \(a_p\) the column dimension, \(d\) the effective depth, \(A_p\) the
column area and \(A_e\) the pile area.

!!! info "A rectangular column becomes an equivalent square"

    The formulations assume a **square column**, with its centre coinciding
    with the geometric centre of the cap. For a rectangular column, the
    following is adopted:

    \[
    a_{p,eq} = \sqrt{a_p \cdot b_p}
    \]

---

## Summary { #resumo }

| Piles | Arrangement | \(R_s\) | \(\sigma_{lim}\) at the column | \(\sigma_{lim}\) at the pile |
| :-: | :-- | :-- | :-- | :-- |
| 2 | Linear | \(\dfrac{N}{8}\dfrac{2e-a_p}{d}\) | \(1.4\,K_R f_{cd}\) | \(1.4\,K_R f_{cd}\) |
| 3 | Triangle | \(\dfrac{N}{9}\dfrac{e\sqrt3-0.9a_p}{d}\) | \(1.75\,K_R f_{cd}\) | \(1.75\,K_R f_{cd}\) |
| 4 | Square | \(\dfrac{N\sqrt2}{16}\dfrac{2e-a_p}{d}\) | \(2.1\,K_R f_{cd}\) | \(2.1\,K_R f_{cd}\) |
| 5 | Square + centre | \(\dfrac{4}{5}\dfrac{N\sqrt2}{16}\dfrac{2e-a_p}{d}\) | \(2.6\,K_R f_{cd}\) | \(2.1\,K_R f_{cd}\) |
| 5 | Pentagon | \(\dfrac{0.85N}{5d}\left(e-\dfrac{a_p}{3.4}\right)\) | not required | not required |
| 6 | Pentagon + centre | \(\dfrac{0.85N}{6d}\left(e-\dfrac{a_p}{3.4}\right)\) | not required | not required |
| 6 | Hexagon | \(\dfrac{N}{6d}\left(e-\dfrac{a_p}{4}\right)\) | not required | not required |
| 7 | Hexagon + centre | — (see below) | not required | not required |

"Not required" means: **if the effective depth is adopted within the interval
\(d_{min} \le d \le d_{máx}\), the stress in the struts does not need to be
checked.** It is the interval itself that ensures a safe inclination.

!!! warning "Watch out for the five-pile cap with one in the centre"

    It is the only arrangement in which **the limit at the column differs from
    the limit at the pile**: \(2.6\,K_R f_{cd}\) versus \(2.1\,K_R f_{cd}\). In
    the others, the two limits coincide.

---

## Three piles — triangle { #tres-estacas-triangulo }

The column is assumed square, with its centre coinciding with the geometric
centre of the cap. The force system is analysed along one of the **medians**
of the triangle formed by the pile centres.

\[
\tan\alpha = \frac{d}{e\dfrac{\sqrt3}{3} - 0.3\,a_p}
\qquad
R_s = \frac{N}{9}\left(\frac{e\sqrt3 - 0.9\,a_p}{d}\right)
\qquad
R_c = \frac{N}{3\,\sin\alpha}
\]

### Effective depth { #altura-util }

| Criterion | Interval |
| :-- | :-- |
| Blévot, \(40^\circ \le \alpha \le 55^\circ\) | \(0.485\left(e - 0.52a_p\right) \le d \le 0.825\left(e - 0.52a_p\right)\) |
| Machado (1985), \(45^\circ \le \alpha \le 55^\circ\) | \(0.58\left(e - \dfrac{a_p}{2}\right) \le d \le 0.825\left(e - \dfrac{a_p}{2}\right)\) |

### Struts { #bielas }

\[
A_b = \frac{A_p}{3}\,\sin\alpha \ \text{(column)}
\qquad
A_b = A_e\,\sin\alpha \ \text{(pile)}
\]

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p\,\sin^2\alpha}
\qquad
\sigma_{cd,b,est} = \frac{N_d}{3\,A_e\,\sin^2\alpha}
\qquad
\sigma_{lim} = 1.75\,K_R\,f_{cd}
\]

### Main reinforcement { #armadura-principal }

\(R_s\) acts along the **medians**. To obtain the component in the direction
of the lines between pile axes, by the law of sines:

\[
\frac{R_s}{\sin 120^\circ} = \frac{R'_s}{\sin 30^\circ}
\qquad\Longrightarrow\qquad
R'_s = R_s\frac{\sqrt3}{3}
\]

resulting in the **reinforcement parallel to the sides**:

\[
A_{s,lado} = \frac{\sqrt3\,N_d}{27\,d\,f_{yd}}\left(e\sqrt3 - 0.9\,a_p\right)
\]

!!! info "Why parallel to the sides, and not along the medians"

    The arrangement with reinforcement along the **medians** was widely used in
    the past, but it has two defects: the three bundles of bars overlap at the
    centre of the cap, and there is heavy cracking on the side faces caused by
    the lack of support at the ends of the bars — the so-called *"unsupported
    reinforcement"*.

    Moreover, it **does not comply with NBR 6118 (22.7.4.1.1)**, which requires
    at least 85 % of the flexural reinforcement within the strips defined by
    the piles.

    The recommended configuration is **main reinforcement parallel to the
    sides, with an orthogonal mesh** — the most used in Brazil, with less
    cracking and greater economy.

### Plan dimensions { #dimensoes-em-planta }

Following the suggestion of Campos (2015), the dimension \(A\) of the triangle
flange is approximately \(1.154\,a\), with \(a\) the distance from the pile
axis to the face.

---

## Four piles — square { #quatro-estacas-quadrado }

\[
\tan\alpha = \frac{d}{e\dfrac{\sqrt2}{2} - a_p\dfrac{\sqrt2}{4}}
\qquad
R_s = \frac{N\sqrt2}{16}\left(\frac{2e - a_p}{d}\right)
\qquad
R_c = \frac{N}{4\,\sin\alpha}
\]

\(R_s\) is the tensile force **along the diagonals**.

### Effective depth { #altura-util_1 }

For \(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = 0.71\left(e - \frac{a_p}{2}\right)
\qquad\qquad
d_{máx} = e - \frac{a_p}{2}
\]

### Struts { #bielas_1 }

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p\,\sin^2\alpha}
\qquad
\sigma_{cd,b,est} = \frac{N_d}{4\,A_e\,\sin^2\alpha}
\qquad
\sigma_{lim} = 2.1\,K_R\,f_{cd}
\]

### Main reinforcement { #armadura-principal_1 }

There are four possible detailing layouts, and they **are not equivalent**:

| Layout | Performance |
| :-- | :-- |
| a) Along the diagonals | Excessive side cracking even at low loads |
| **b) Parallel to the sides** | **One of the most efficient — the most usual in practice** |
| c) Diagonals + parallel to the sides | — |
| d) Single mesh | Lower failure load than the others, 80 % efficiency; best cracking performance |

Layouts **a**, **c** and **d** do not comply with the NBR 6118 (22.7.4.1.1)
requirement that more than 85 % of the reinforcement be within the pile
strips.

For layout **b**, with an added mesh:

\[
A_{s,lado} = \frac{N_d}{16\,d\,f_{yd}}\left(2e - a_p\right)
\]

\[
A_{s,malha} = 0.25\,A_{s,lado} \ \ge\ \frac{A_{s,susp}}{4}
\qquad\text{(in each direction)}
\]

\[
A_{s,susp} = \frac{N_d}{6\,f_{yd}}
\]

---

## Five piles — square with one in the centre { #cinco-estacas-quadrado-com-uma-no-centro }

The procedure is that of the four-pile cap, **replacing \(N\) by
\(\frac{4}{5}N\)** — the central pile takes its share without generating a
tie.

\[
R_s = \frac{4}{5}\cdot\frac{N\sqrt2}{16}\cdot\frac{2e - a_p}{d}
\]

### Effective depth { #altura-util_2 }

For \(45^\circ \le \alpha \le 55^\circ\), the same as the four-pile cap:

\[
d_{min} = 0.71\left(e - \frac{a_p}{2}\right)
\qquad
d_{máx} = e - \frac{a_p}{2}
\]

### Struts { #bielas_2 }

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p\,\sin^2\alpha}
\qquad
\sigma_{cd,b,est} = \frac{N_d}{5\,A_e\,\sin^2\alpha}
\]

\[
\sigma_{lim,pil} = 2.6\,K_R\,f_{cd}
\qquad\qquad
\sigma_{lim,est} = 2.1\,K_R\,f_{cd}
\]

### Reinforcement { #armaduras }

\[
A_{s,lado} = \frac{4}{5}\cdot\frac{N_d}{16\,d\,f_{yd}}\left(2e-a_p\right)
= \frac{N_d}{20\,d\,f_{yd}}\left(2e - a_p\right)
\]

\[
A_{s,malha} = 0.25\,A_{s,lado} \ \ge\ \frac{A_{s,susp}}{4}
\qquad\qquad
A_{s,susp} = \frac{N_d}{7.5\,f_{yd}}
\]

!!! tip "Very elongated column"

    For very rectangular columns, a **rectangular cap** on five piles is
    designed, treated as a four-pile cap with the formulas adapted to the
    different distances.

    Another option is to place one line of three piles and another of two — in
    which case the calculation resembles that of caps with more than six
    piles.

---

## Five piles — pentagon { #cinco-estacas-pentagono }

The piles are at the vertices of a pentagon, with the centre of the square
column coinciding with their geometric centre.

\[
\tan\alpha = \frac{d}{0.85\,e - 0.25\,a_p}
\qquad
R_s = \frac{0.85\,N}{5\,d}\left(e - \frac{a_p}{3.4}\right)
\]

### Effective depth { #altura-util_3 }

For \(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = 0.85\left(e - \frac{a_p}{3.4}\right)
\qquad
d_{máx} = 1.2\left(e - \frac{a_p}{3.4}\right)
\]

!!! info "Struts need not be checked"

    If \(d\) is adopted between \(d_{min}\) and \(d_{máx}\), **the compressive
    stresses in the struts do not need to be checked**.

### Reinforcement { #armaduras_1 }

Resolving in the direction parallel to the sides, with
\(R'_s = \dfrac{R_s}{2\cos 54^\circ}\):

\[
A_{s,lado} = \frac{0.725\,N_d}{5\,d\,f_{yd}}\left(e - \frac{a_p}{3.4}\right)
\]

\[
A_{s,malha} = 0.25\,A_{s,lado} \ \ge\ \frac{A_{s,susp,tot}}{5}
\qquad\qquad
A_{s,susp,tot} = \frac{N_d}{7.5\,f_{yd}}
\]

---

## Six piles — pentagon with one in the centre { #seis-estacas-pentagono-com-uma-no-centro }

Proceed as for the five-pile pentagon cap, **replacing \(N\) by
\(\frac{5N}{6}\)**:

\[
R_s = \frac{0.85\,N}{6\,d}\left(e - \frac{a_p}{3.4}\right)
\]

Effective depth identical to that of the five-pile pentagon, and struts
likewise need not be checked within the interval.

By the law of sines, \(R'_s = R_s\dfrac{\sin 54^\circ}{\sin 72^\circ} = 0.85\,R_s\):

\[
A_{s,lado} = \frac{0.725\,N_d}{6\,d\,f_{yd}}\left(e - \frac{a_p}{3.4}\right)
\]

\[
A_{s,malha} = 0.25\,A_{s,lado} \ \ge\ \frac{A_{s,susp,tot}}{5}
\qquad\qquad
A_{s,susp,tot} = \frac{N_d}{7.5\,f_{yd}}
\]

---

## Six piles — hexagon { #seis-estacas-hexagono }

The piles are at the vertices of the hexagon, with a centred square column.

\[
\tan\alpha = \frac{d}{e - \dfrac{a_p}{4}}
\qquad
R_s = \frac{N}{6\,d}\left(e - \frac{a_p}{4}\right)
\]

### Effective depth { #altura-util_4 }

For \(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = e - \frac{a_p}{4}
\qquad
d_{máx} = 1.43\left(e - \frac{a_p}{4}\right)
\]

Struts need not be checked within the interval.

### Reinforcement { #armaduras_2 }

Here the law of sines gives \(\dfrac{R_s}{\sin 60^\circ} = \dfrac{R'_s}{\sin 60^\circ}\),
i.e. \(R'_s = R_s\) — the resolution does not change the force.

\[
A_{s,lado} = \frac{N_d}{6\,d\,f_{yd}}\left(e - \frac{a_p}{4}\right)
\qquad\text{(on each of the 6 sides)}
\]

\[
A_{s,malha} = 0.25\,A_{s,lado}
\]

---

## Six piles — rectangular { #seis-estacas-retangular }

Suitable for rectangular, elongated columns. The forces \(R_{sx}\) and
\(R_{sy}\) are treated separately in each direction, with the corresponding
distances.

---

## Seven piles — hexagon with one in the centre { #sete-estacas-hexagono-com-uma-no-centro }

The seventh pile is at the centre of the cap, under the column. For
\(45^\circ \le \alpha \le 55^\circ\):

\[
d_{min} = e - \frac{a_p}{4}
\qquad
d_{máx} = 1.43\left(e - \frac{a_p}{4}\right)
\]

The compression in the struts **does not need to be checked** if \(d\) is
within the interval.

The reinforcement is placed along the **diagonals**, with **ties parallel to
the sides**:

\[
A_{s,diag} = \frac{(1-k)\,N_d}{7\,d\,f_{yd}}\left(e - \frac{a_p}{4}\right)
\qquad
A_{s,cinta} = \frac{k\,N_d}{7\,d\,f_{yd}}\left(e - \frac{a_p}{4}\right)
\]

with

\[
\frac{2}{5} \le k \le \frac{3}{5}
\]

The parameter \(k\) splits the force between diagonals and perimeter ties — it
is a design choice within that range.

---

## Complementary reinforcement { #armaduras-complementares }

These apply to **any number of piles**: the NBR 6118 requirements for mesh and
suspension reinforcement are general.

### Mesh reinforcement { #armadura-em-malha }

NBR 6118 (22.7.4.1.2) requires, to control cracking, additional bottom
reinforcement independent of the main flexural reinforcement, as a mesh
uniformly distributed in two orthogonal directions, corresponding to **20 %
of the total tensile forces in each of them**.

### Suspension reinforcement { #armadura-de-suspensao }

NBR 6118 (22.7.4.1.3) requires suspension reinforcement for the share of load
to be balanced if distribution reinforcement is provided for more than **25 %
of the total forces** or if the spacing between piles is greater than **three
times the depth of the cap**.

In general, regardless of this, the following can be specified:

\[
A_{s,susp,tot} = \frac{N_d}{1.5\,n_e\,f_{yd}}
\]

with \(n_e\) the number of piles. The reinforcement per face is the total
divided by the number of faces of the cap.

!!! info "What it is for"

    Suspension reinforcement prevents cracks in the regions **between the
    piles**. They can appear because compressed struts form that transfer part
    of the column load to the **lower** regions of the cap, between the piles,
    and that bear on the reinforcement parallel to the sides.

    This creates tensions that need to be **suspended** to the upper regions of
    the cap, from where they travel to the piles.

### Top reinforcement { #armadura-superior }

\[
A_{s,sup} = 0.2\,A_s
\qquad\text{(in each direction of the mesh)}
\]

### Skin reinforcement { #armadura-de-pele }

On each lateral vertical face, as stirrups or horizontal bars:

\[
A_{sp,face} = \frac{1}{8}\,A_{s,total}
\]

with \(A_{s,total}\) the total main reinforcement — \(3A_{s,lado}\) in the
three-pile cap, \(4A_{s,lado}\) in the four-pile one, and so on.

**Spacing:** \(s \le \min\left(\dfrac{d}{3};\ 20\ \text{cm}\right)\), and
\(s \ge 8\) cm as a practical recommendation.

---

## CEB-70 method { #metodo-do-ceb-70 }

An alternative to the Strut Method for rigid caps, similar to the procedure
for spread footings. The depth of the cap is limited by

\[
\frac{2}{3}c \le h \le 2c
\qquad\text{and}\qquad
d \ge \ell_{b,\phi,pil}
\]

where \(c\) is the distance from the column face to the axis of the farthest
pile.

The method calculates the **main reinforcement for bending**, determined with
respect to a reference section \(S_1\) located **inside the column**, at
\(0.15\,a_p\) from the face — and checks the resistance of the cap to shear
forces.

!!! note "PCO does not implement CEB-70"

    The models offered are [Blévot](blevot.md) and [MBT](mbt.md). CEB-70 is
    listed here for reference, as one of the methods historically most used in
    Brazil and accepted by the code.

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - All expressions assume a **centred column** and **piles equally spaced**
      from the centre of the column. With moments or eccentricity, the pure
      formulation does not apply.
    - They assume a **square column** — a rectangular one enters through the
      equivalent \(a_{p,eq} = \sqrt{a_p b_p}\), an approximation that gets
      worse the more elongated the column.
    - The effective depth intervals come from \(45^\circ \le \alpha \le
      55^\circ\) (Machado) or \(40^\circ \le \alpha \le 55^\circ\) (Blévot).
      **Outside them, the exemption from checking the struts does not apply**,
      and they must be checked explicitly.
    - The limits \(\sigma_{lim}\) are **Blévot's**, not those of the current
      NBR 6118. To check against the current code, use
      [MBT](mbt.md#os-dois-limites-nodais-e-eles-sao-diferentes).
    - Blévot's tests covered caps with up to **six piles**. The expressions for
      seven piles and for compound arrangements extrapolate that experimental
      basis.

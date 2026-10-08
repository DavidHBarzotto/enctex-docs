# Blévot & Frémy

The classic method for rigid pile caps, also called the **Strut Method**. It
assumes a **truss** as the resisting model inside the cap: planar in caps on
two piles, spatial in the others. The compressed members are resisted by the
concrete — the **struts** — and the tensioned members by reinforcement — the
**ties**.

It is the most widely used simplified method in Brazil, for three reasons: it
has broad experimental support — **116 tests by Blévot & Frémy**, among others
—, it has an established tradition here and in Europe, and the truss model is
intuitive.

## When the method is recommended { #quando-o-metodo-e-recomendado }

- The loading is **nearly centred**. It can be used for non-centred loading by
  assuming that all piles carry the highest load — which tends to make the
  design uneconomical.
- All piles are **equally spaced** from the centre of the column.

---

## The model, for a cap on two piles { #o-modelo-no-bloco-sobre-duas-estacas }

The load \(N\) arrives through the column and goes down through two inclined
struts to the piles. The force polygon gives the tension at the bottom and the
compression in the strut.

The inclination of the strut is the parameter that governs everything:

\[
\tan\alpha = \frac{d}{\dfrac{e}{2} - \dfrac{a_p}{4}}
\]

where \(d\) is the effective depth, \(e\) the distance between pile axes and
\(a_p\) the column dimension in the direction of \(e\). The term \(a_p/4\) is
the centre of the column's **sub-area**: the column is divided into as many
parts as there are piles, and the load leaves from the geometric centre of
each sub-area.

Hence:

\[
R_s = \frac{N}{8}\cdot\frac{2e - a_p}{d}
\qquad\qquad
R_c = \frac{N}{2\sin\alpha}
\]

\(R_s\) is the tensile force in the tie and \(R_c\) the compression in the
strut.

!!! info "The general form"

    For any number of piles, the force in the tie is

    \[
    F_{td} = N_{d,estaca}\cdot\cot\theta
    \qquad\text{with}\qquad
    \cot\theta = \frac{L_{proj}}{d}
    \]

    where \(L_{proj}\) is the horizontal projection of the strut — the distance
    from the centre of the load sub-area to the pile axis. In a symmetric cap
    on four piles, \(L_{proj} = \left(\dfrac{\ell}{2} - \dfrac{a_p}{4}\right)\sqrt{2}\).

    In caps on **three or more** piles, \(F_{td}\) is resolved into the
    directions of the reinforcement.

!!! tip "The formulas for each arrangement"

    This chapter develops the cap on two piles, where the geometry is clearest.
    The closed-form expressions for **three to seven piles** — with their
    effective depth ranges, stress limits and reinforcement — are in
    [Formulas by arrangement](arranjos.md).

---

## Effective depth { #altura-util }

The compressed struts **present no risk of punching failure** as long as the
inclination stays within the tested range:

\[
40^\circ \le \alpha \le 55^\circ
\]

which bounds the effective depth to

\[
0.419\left(e - \frac{a_p}{2}\right) \;\le\; d \;\le\; 0.714\left(e - \frac{a_p}{2}\right)
\]

Machado (1985) recommends the narrower range \(45^\circ \le \alpha \le
55^\circ\), giving \(d_{min} = 0.5\left(e - a_p/2\right)\) and
\(d_{máx} = 0.71\left(e - a_p/2\right)\).

!!! warning "The depth has a second constraint too"

    NBR 6118 (22.7.4.1.4) requires that **the cap be deep enough to allow the
    anchorage of the column starter bars**:

    \[
    d > \ell_{b,\phi,pil}
    \]

    In a shallow cap with a heavily reinforced column, it is this condition
    that governs — not the strut inclination.

The total depth is \(h = d + d'\), with \(d' \ge \max(5\ \text{cm};\ a_{est}/5)\),
where \(a_{est} = \dfrac{\sqrt{\pi}}{2}\,\phi_e\) is the side of the square pile
with an area equivalent to the circular one.

---

## Strut check { #verificacao-das-bielas }

The strut area **varies along the depth**, so the two end sections are checked
— at the column and at the pile:

\[
A_b = \frac{A_p}{2}\sin\alpha \quad \text{(at the column)}
\qquad
A_b = A_e \sin\alpha \quad \text{(at the pile)}
\]

With \(R_{cd} = N_d/(2\sin\alpha)\), the stresses are:

\[
\sigma_{cd,b,pil} = \frac{N_d}{A_p \sin^2\alpha}
\qquad\qquad
\sigma_{cd,b,est} = \frac{N_d}{2\,A_e \sin^2\alpha}
\]

\(\sin^2\alpha\) appears twice for the same reason: one projection converts
the force to the strut direction, the other converts the area.

### The limit, and the KR coefficient { #o-limite-e-o-coeficiente-kr }

\[
\sigma_{cd,b,lim} = \alpha_{lim}\,K_R\,f_{cd}
\]

| No. of piles | \(\alpha_{lim}\) |
| :-: | --: |
| 2 | 1.4 |
| 3 | 1.75 |
| 4 or more | 2.1 |

The limit **increases with the number of piles** because of confinement: the
more piles, the more confined the concrete in the nodal region, and the higher
the stress it can bear.

!!! info "What KR is"

    \(K_R\) lies between **0.90 and 0.95** and is the coefficient that accounts
    for the **loss of concrete strength over time due to sustained loads — the
    Rüsch effect**.

    It has nothing to do with the cap geometry or the tie reinforcement: it
    acts only on the stress limit. Adopting 0.90 is the conservative choice.

!!! warning "A failed strut is not fixed with reinforcement"

    If \(\sigma_{cd,b} > \sigma_{cd,b,lim}\), the concrete crushes. The way out
    is to increase the cap depth, enlarge the column section or raise
    \(f_{ck}\).

---

## Main reinforcement { #armadura-principal }

Blévot found in the tests that **the force measured in the main reinforcement
was 15 % higher than indicated by the theoretical calculation**. That is why
the tie is increased:

\[
R_s = \frac{1.15\,N}{8}\cdot\frac{2e - a_p}{d}
\qquad\Longrightarrow\qquad
A_s = \frac{1.15\,N_d\,(2e - a_p)}{8\,d\,f_{yd}}
\]

!!! info "The 1.15 factor is specific to caps on two piles"

    In caps on **three or more** piles this factor does not exist. There,
    instead of increasing it, \(F_{td}\) is resolved into the directions of the
    reinforcement.

    Blévot proposed 1.15 so as not to obtain lower safety factors than those
    specified at the time.

### Where the reinforcement goes { #onde-a-armadura-fica }

NBR 6118 (22.7.4.1.1) is explicit: the flexural reinforcement **must be placed
essentially — more than 85 % — within the strips defined by the piles**, in
equilibrium with the respective struts. The strips are **1.2 times the pile
diameter** wide.

The bars must extend **from face to face** of the cap and end in **hooks at
both ends**. The anchorage is measured **from the inner faces of the piles**.

To estimate the length of a cap on two piles, with anchorage without hooks and
\(\alpha = 0.7\):

\[
\ell_{bl,2} = e - \phi_e + 2\left(0.7\,\ell_b + c + \phi_\ell\right)
\]

---

## Complementary reinforcement { #armaduras-complementares }

NBR 6118 (22.7.4.1.5) makes side and top reinforcement **mandatory** in caps
with two or more piles in a single line.

| Reinforcement | Value |
| :-- | :-- |
| Top | \(A_{s,sup} = 0.2\,A_s\) |
| Skin and vertical stirrups, per face | \(\left(\dfrac{A_{sp}}{s}\right)_{min} = \left(\dfrac{A_{sw}}{s}\right)_{min} = 0.075\,B\) cm²/m |

with \(B\) the width of the cap in cm.

**Spacing:**

- Skin reinforcement: \(s \le \min(d/3;\ 20\ \text{cm})\), and \(s \ge 8\) cm
  as a practical recommendation.
- Vertical stirrups **over the piles**:
  \(s \le \min\left(15\ \text{cm};\ 0.5\,a_{est}\right)\).
- Vertical stirrups elsewhere: \(s \le 20\) cm.

---

## Cap on one pile { #bloco-sobre-uma-estaca }

A special case: the cap is a **transfer element**, needed because the base of
the column does not match the pile area. The main reinforcement resists
**splitting**, and consists of closed horizontal stirrups:

\[
T = \frac{1}{4}\,P\,\frac{\phi_e - a_p}{\phi_e} \cong 0.25\,P
\qquad\qquad
A_s = \frac{T_d}{f_{yd}}
\]

The effective depth can be estimated at around \(1.0\) to \(1.2\,\phi_e\).

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - Valid for a **rigid cap**. In a slender cap the strut does not form in a
      defined way and the behaviour is bending — see
      [flexible pile caps](../../pcx/blocos-flexiveis.md).
    - The tested range is \(40^\circ < \theta < 55^\circ\), with
      \(\theta \ge 45^\circ\) recommended. Outside it, the method extrapolates
      the experimental basis.
    - It assumes **nearly centred loading** and piles **equally spaced** from
      the centre of the column. With moments acting, the pile loads differ and
      the pure formulation does not apply: the practice is to adopt, as the
      equivalent vertical load, the reaction of the most heavily loaded pile
      multiplied by the number of piles — a conservative simplification.
    - The tests covered caps with up to six piles. High counts, an eccentric
      column or several columns extrapolate the experimental basis.
    - **Blévot's stress limits are not those of the current NBR 6118.** The
      2014 revision introduced more restrictive nodal limits, and a cap that
      passed by Blévot may not pass them. See [MBT](mbt.md) and
      [Checks](verificacoes.md).
    - Compared with tests, the method is **slightly conservative**: the ratio
      between measured and predicted failure load averages 1.19.

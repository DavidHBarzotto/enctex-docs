# Settlement

A pile of length \(L\), with its base at a distance \(C\) from the surface of
the **incompressible stratum** — the bedrock or a layer so stiff that the
deformations below it can be neglected —, undergoes two types of deformation
under the vertical load \(P\):

\[
\rho = \rho_e + \rho_s
\]

| Term | What it is |
| :-- | :-- |
| \(\rho_e\) | **Elastic shortening of the pile itself**, as a compressed structural member, with the base held fixed |
| \(\rho_s\) | **Soil settlement** — the compression of the strata between the pile base and the incompressible stratum |

As a result, the length becomes \(L - \rho_e\) and the distance to the
incompressible stratum becomes \(C - \rho_s\).

---

## Elastic shortening { #encurtamento-elastico }

### The axial force diagram { #o-diagrama-de-esforco-normal }

The axial force is **not constant** along the shaft: it drops from \(P\) at
the head to \(P_p\) at the base, as the load is transferred to the soil by
friction.

The methodology is that of **Aoki (1979)**, and it starts from three
assumptions:

1. The applied load is greater than the shaft resistance and less than the
   bearing capacity: \(R_L < P < R\).
2. **All shaft friction is mobilised.**
3. The toe reaction balances what is left, and is lower than the toe
   resistance at failure: \(P_p = P - R_L < R_p\).

Assuming a linear variation of \(P(z)\) in each segment corresponding to a
layer, the **average** axial force in each segment is:

\[
P_1 = P - \frac{R_{L1}}{2}
\]
\[
P_2 = P - R_{L1} - \frac{R_{L2}}{2}
\]
\[
P_3 = P - R_{L1} - R_{L2} - \frac{R_{L3}}{2}
\]

— and so on: the load already transferred above the segment, plus **half** of
the load transferred within it.

### Hooke's law { #a-lei-de-hooke }

\[
\rho_e = \frac{1}{A \, E_c} \sum \left(P_i \, L_i\right)
\]

with \(A\) the cross-sectional area of the shaft and \(E_c\) the modulus of
elasticity of the concrete, assumed constant.

### Modulus of elasticity { #modulo-de-elasticidade }

In the absence of a specific value:

| Pile type | \(E_c\) |
| :-- | --: |
| Precast | 28 to 30 GPa |
| CFA, Franki and large bored pile | 21 GPa |
| Strauss and dry bored | 18 GPa |

For reference: steel 210 GPa, timber around 10 GPa.

!!! note "Comparison with a column"

    In a column, the axial force diagram is constant and equal to \(P\), and
    the shortening is simply \(P L / A E_c\). The pile is different because the
    soil progressively unloads the shaft — which is why the calculation needs
    the diagram, not just the head load.

---

## Soil settlement { #recalque-do-solo }

By the principle of action and reaction, the pile applies the loads \(R_{Li}\)
to the soil along the shaft and the load \(P_p\) at the base. The layers
between the base and the incompressible stratum deform under this loading.

The methodology is that of **Aoki (1984)**.

### Stress increase { #acrescimo-de-tensoes }

Assuming a **1:2** stress spread, the increase at the mid-height of a layer of
thickness \(H\), located at a vertical distance \(h\) from the point of
application, is:

For the toe reaction:

\[
\Delta\sigma_p = \frac{4\,P_p}{\pi\left(D + h + \dfrac{H}{2}\right)^{2}}
\]

where \(D\) is the diameter of the pile **base**.

For each shaft resistance term, applied at the centroid of its segment:

\[
\Delta\sigma_i = \frac{4\,R_{Li}}{\pi\left(D + h + \dfrac{H}{2}\right)^{2}}
\]

where \(D\) is the diameter of the **shaft**. The total increase in the layer
is

\[
\Delta\sigma = \Delta\sigma_p + \sum \Delta\sigma_i
\]

!!! info "All terms, layer by layer"

    The procedure is repeated for **each layer** between the pile base and the
    incompressible stratum. It is not a single stress spread over a fixed area:
    each layer receives the contribution of the toe **and** of every shaft
    segment, each attenuated by its own distance.

### Settlement by the Theory of Elasticity { #recalque-pela-teoria-da-elasticidade }

\[
\rho_s = \sum \left(\frac{\Delta\sigma}{E_s}\,H\right)
\]

### Soil deformation modulus { #modulo-de-deformabilidade-do-solo }

By the adapted expression of **Janbu (1963)**:

\[
E_s = E_0 \left(\frac{\sigma_0 + \Delta\sigma}{\sigma_0}\right)^{n}
\]

| Symbol | Meaning |
| :-- | :-- |
| \(E_0\) | Soil modulus **before** the pile is installed |
| \(\sigma_0\) | Geostatic stress **at the centre of the layer** |
| \(n\) | Exponent that depends on the nature of the soil |

\[
n =
\begin{cases}
0.5 & \text{granular materials} \\
0 & \text{hard and stiff clays}
\end{cases}
\]

In sand, the modulus increases with the stress increase; in clay, it does not
— and that is what the exponent expresses.

For \(E_0\), Aoki (1984) considers:

| Pile type | \(E_0\) |
| :-- | :-- |
| Driven | \(6 \, K \, N_{SPT}\) |
| CFA | \(4 \, K \, N_{SPT}\) |
| Bored | \(3 \, K \, N_{SPT}\) |

with \(K\) the empirical coefficient of the
[Aoki-Velloso](capacidade-de-carga.md#aoki-velloso-1975) method, a function of
the soil type.

---

## Load × settlement curve { #curva-carga-recalque }

Aoki (1979) proposes predicting the curve from **one point** on it, using the
expression of **Van der Veen (1953)**:

\[
P = R\left(1 - e^{-a\rho}\right)
\]

Once the bearing capacity \(R\) has been calculated and the settlement
\(\rho\) estimated for a load \(P\), the parameter that defines the shape of the
curve is obtained from:

\[
a = \frac{-\ln\left(1 - P/R\right)}{\rho}
\]

!!! warning "The range in which the anchoring point is valid"

    The load used to anchor the curve must lie between the shaft resistance and
    half the capacity:

    \[
    R_L < P \le \frac{R}{2}
    \]

    It is the same condition as the assumptions of the elastic shortening —
    all friction mobilised, and the toe still far from failure. Outside it, the
    curve no longer represents the behaviour.

The curve **is not an independent prediction**: it is the Van der Veen
interpolation anchored at a single point. It serves to visualise the margin to
failure and the expected non-linearity, not as a substitute for a load test.

---

## Group effect { #efeito-de-grupo }

Pile groups **always** settle more than a single pile under the same load:

\[
\rho_g = \alpha \, \rho_i
\]

Experimental values indicate \(\alpha\) between **1.6 and 4.0**, depending on
the size and shape of the group, for models of driven piles in medium-dense
sand (Cintra, 1987).

!!! warning validade "Geometric formulas are not reliable"

    Formulas from the literature that estimate \(\alpha\) **only from the
    group's geometric parameters** are not reliable: the most important
    variables are the **deformability of the stratum between the pile bases
    and the incompressible stratum** and the **thickness of that stratum** —
    neither of which appears in the geometry.

    There are field cases in which large groups settled the same as a single
    pile, because the piles were close to the incompressible stratum.

    SPX applies the simplified estimate \(\rho_g = \rho_{max}\sqrt{n}\), which
    is one of those geometric formulas. **Treat the result as an order of
    magnitude.** For large or critical groups, the most comprehensive method is
    that of Aoki & Lopes (1975), which considers the interaction between all
    the elements.

### Allowable settlement { #recalque-admissivel }

For usual pile foundations, the values of **Meyerhof (1976)**:

| Soil | Allowable settlement |
| :-- | --: |
| Sand | 25 mm |
| Clay | 50 mm |

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - The method estimates **immediate** settlement. In saturated clays
      consolidation continues for years and is **not** covered.
    - The elastic shortening assumptions require \(R_L < P < R\) with **all
      friction mobilised**. For loads below \(R_L\), the axial force diagram is
      different and the calculation overestimates the shortening.
    - \(E_0\) comes from a correlation with \(N_{SPT}\), with the scatter
      inherent to an empirical method. Treat the result as an order of
      magnitude.
    - The position of the **incompressible stratum** governs \(\rho_s\):
      without knowing where it is, there is no way to delimit the layers that
      compress.
    - The **allowable** settlement is a property of the structure, not of the
      foundation.
    - **Differential** settlements between supports — which are what actually
      damage structures — require comparing the foundations with each other,
      and are outside the scope of the single pile analysis.
    - Collapsible or expansive soils, or soils subject to water table lowering,
      are outside the model.

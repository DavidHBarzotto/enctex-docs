# Design

With the internal forces from the [structural analysis](analise-estrutural.md),
SPX designs the circular reinforced concrete section in accordance with
**NBR 6118**.

There are two checks: biaxial bending with axial force (longitudinal
reinforcement) and shear (transverse reinforcement).

---

## Biaxial bending with axial force { #flexao-composta-obliqua }

### Design forces { #esforcos-de-calculo }

The maxima are taken from the two models — X axis and Y axis —, and the
resultant moment is combined vectorially:

\[
M_{d,1^a} = \gamma_f \sqrt{M_{kx}^2 + M_{ky}^2}
\qquad
N_d = \gamma_f N_k
\]

with \(\gamma_f = 1.4\).

The vector combination is legitimate for a **circular** section, which has no
preferred direction: any moment direction meets the same geometry and the same
distribution of reinforcement.

### Stress block parameters { #parametros-do-diagrama-de-tensoes }

According to the concrete class:

=== "\(f_{ck} \le 50\) MPa"

    \[
    \lambda = 0.8
    \qquad
    \alpha_c = 0.85
    \qquad
    \varepsilon_{cu} = 3.5\text{‰}
    \qquad
    \varepsilon_{c2} = 2.0\text{‰}
    \]

=== "\(f_{ck} > 50\) MPa"

    \[
    \lambda = 0.8 - \frac{f_{ck}-50}{400}
    \qquad
    \alpha_c = 0.85\left(1 - \frac{f_{ck}-50}{200}\right)
    \]

    \[
    \varepsilon_{cu} = \frac{2.6 + 35\left(\frac{90-f_{ck}}{100}\right)^4}{1000}
    \qquad
    \varepsilon_{c2} = \frac{2.0 + 0.085\,(f_{ck}-50)^{0.53}}{1000}
    \]

The design strengths come from \(\gamma_c = 1.4\) and \(\gamma_s = 1.15\), with
\(\sigma_{cd} = \alpha_c f_{cd}\).

### Second-order effects { #efeitos-de-segunda-ordem }

The slenderness ratio uses the radius of gyration of the circular section
(\(i = D/4\)):

\[
\lambda = \frac{\ell_e}{D/4}
\]

For \(40 < \lambda \le 140\), the second-order moment is added by the
**standard-column method with approximate curvature**:

\[
M_{2d} = N_d \cdot \frac{\ell_e^2}{10} \cdot \frac{1}{r}
\]

with the curvature limited by

\[
\frac{1}{r} = \min\left(\frac{0.005}{(\nu + 0.5)\,D},\; \frac{0.005}{D}\right)
\qquad
\nu = \frac{N_d}{A_c f_{cd}}
\]

The total design moment is \(M_d = M_{d,1^a} + M_{2d}\).

!!! warning validade "Above λ = 140"

    NBR 6118 requires more rigorous methods for \(\lambda > 140\). The program
    does **not** add second-order effects in this range — it is up to the
    designer to check whether the slenderness is acceptable and, if so, to
    handle it with a specific analysis.

### Reinforcement not required { #dispensa-de-armadura }

Reinforcement can be omitted when the compressive stress is low enough:

\[
\sigma_{sd} = \frac{N_d}{A_c} \le 5\text{ MPa}
\qquad\text{and}\qquad
\sigma_{sd} \le 0.85\,f_{ck}
\]

Even so, a minimum detailing reinforcement is usually adopted for other
reasons — lifting, driving, tying into the cap.

### Interaction diagram { #diagrama-de-interacao }

The program builds the \(N\)–\(M\) interaction diagram of the section with the
adopted reinforcement and checks whether the pair \((N_d, M_d)\) falls inside
it. It is the most transparent check possible: you see the **margin**, not
just the verdict.

The minimum number of bars is **6**, as required by the code for a circular
section.

---

## Shear { #esforco-cortante }

### Design force { #esforco-de-calculo }

The shear is combined vectorially from the two models:

\[
V_k = \sqrt{V_{kx}^2 + V_{ky}^2}
\qquad
V_d = \gamma_f V_k
\]

### Strut check { #verificacao-da-biela }

First, concrete crushing:

\[
\tau_{wd} = \frac{V_d}{b_w d}
\qquad
\tau_{wu} = \frac{0.27\,\alpha_v\,f_{ck}}{\gamma_c}
\qquad
\alpha_v = 1 - \frac{f_{ck}}{250}
\]

If \(\tau_{wd} > \tau_{wu}\), **the section is insufficient** and the program
refuses the design: no reinforcement can fix strut crushing, only increasing
the diameter or the concrete strength.

For the circular section, \(b_w = D\) and
\(d = D - c - \phi_t - \phi_\ell/2\) are adopted.

### Transverse reinforcement { #armadura-transversal }

By **Model I** of NBR 6118 (struts at 45°):

\[
\tau_c = \frac{0.126\, f_{ck}^{2/3}}{\gamma_c} \quad (f_{ck} \le 50)
\]

\[
\frac{A_{sw}}{s} = \frac{100\, b_w\, \cdot 1.11(\tau_{wd} - \tau_c)}{f_{yd}}
\]

with minimum reinforcement

\[
\rho_{min} = \frac{0.2\, f_{ct,m}}{f_{ywk}}
\qquad
f_{ct,m} = 0.30\, f_{ck}^{2/3}
\]

### Adopted spacing { #espacamento-adotado }

The spacing is the **smallest** of three criteria — and the program shows
which one governed:

| Criterion | Limit |
| :-- | :-- |
| Theoretical | From the calculated \(A_{sw}/s\) |
| Code (ULS) | \(\min(0.6d;\,30\text{ cm})\), or \(\min(0.3d;\,20\text{ cm})\) if \(\tau_{wd} > 0.67\,\tau_{wu}\) |
| Detailing | \(\min(20\text{ cm};\, D;\, 12\phi_\ell)\) |

With a lower bound of 5 cm — below that the concrete cannot be placed.

!!! note "Minimum stirrup diameter"

    \(\phi_t \ge \max(5\text{ mm};\, \phi_\ell/4)\). A 5.0 mm stirrup is
    calculated with \(f_{ywk} = 600\) MPa (CA-60); above that, 500 MPa.

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - The design covers a **solid circular section**. Hollow, steel or
      composite sections are not covered.
    - The vector combination of forces assumes that the X and Y maxima occur
      **at the same section**, which is conservative when they do not.
    - Second-order effects are only handled in the range
      \(40 < \lambda \le 140\).
    - The following are not checked: fatigue, cracking in service, transient
      driving or lifting situations, nor the anchorage of the reinforcement in
      the cap.
    - The buckling length \(\ell_e\) is an input. Determining it for a
      partially embedded pile requires judgement — the embedded length is
      restrained by the soil, but the stiffness of that restraint depends on
      \(K_h\) itself.

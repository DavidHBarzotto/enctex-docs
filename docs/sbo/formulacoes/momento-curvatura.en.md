# Moment-curvature

A non-linear analysis of the section: instead of answering "how much steel",
it answers **how the section behaves** as it is loaded, up to failure.

It is what shows the effective stiffness and the ductility — two things that
ultimate limit state design does not reveal.

---

## The real stress-strain relationship { #a-relacao-tensao-deformacao-real }

Design uses the **equivalent rectangular block**, a convenient simplification
for integrating by hand. The non-linear analysis uses the NBR 6118
**parabola-rectangle** relationship, which is the real curve:

\[
\sigma_c =
\begin{cases}
0.85\,f_{cd}\left[1 - \left(1 - \dfrac{\varepsilon_c}{\varepsilon_{c2}}\right)^{n}\right]
  & 0 \le \varepsilon_c \le \varepsilon_{c2} \\[10pt]
0.85\,f_{cd} & \varepsilon_{c2} < \varepsilon_c \le \varepsilon_{cu}
\end{cases}
\]

The parabolic branch rises up to \(\varepsilon_{c2}\); from there on the stress
stays constant up to the ultimate strain.

---

## The procedure { #o-procedimento }

For each curvature value \(\chi\), the section is in equilibrium when the
resultant compression in the concrete and the tension in the steel cancel
out. The unknown is the **depth of the neutral axis**.

The program finds it by **bisection** — `scipy.optimize.bisect` —, searching
between acceptable physical bounds for the position at which equilibrium
closes. With the neutral axis known, the corresponding resisting moment comes
from integrating the stresses.

Repeating this for a sequence of curvatures — 100 steps by default — builds
the \(M\)–\(\chi\) diagram.

!!! info "Why bisection, and not Newton"

    Bisection is slower than Newton, but it **does not depend on the
    derivative** and does not diverge. The concrete constitutive relationship
    has a kink at \(\varepsilon_{c2}\), where the parabola meets the plateau —
    exactly the kind of derivative discontinuity that makes Newton take a
    wrong step.

    With a hundred points per diagram, the speed difference is irrelevant.

---

## What the diagram shows { #o-que-o-diagrama-mostra }

**The effective stiffness.** The initial slope of the diagram is the
stiffness \(EI\) of the uncracked section; after cracking it drops, and it is
this reduced stiffness — not that of the gross section — that governs real
displacements.

**The ductility.** The length of the plateau before failure tells you how much
rotation the section can withstand. It is what allows (or not) the moment
redistribution that the \(\beta\) coefficient in design assumes — see
[bending](flexao.md#parametros-do-diagrama).

**The failure mode.** An under-reinforced section yields the steel before the
concrete crushes, and the diagram has a long plateau. An over-reinforced one
fails in the concrete, and the diagram ends abruptly — brittle failure,
without warning.

---

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - It is a **section** analysis, not a member analysis. It does not provide
      deflections: for that, the curvature would have to be integrated along
      the span, with the moment diagram.
    - It does not consider **tension stiffening** — the contribution of the
      concrete in tension between cracks. This underestimates the stiffness in
      the cracked phase.
    - It does not consider **creep** or **shrinkage**, which in service
      substantially reduce the stiffness over time.
    - It uses the **design** values of the strengths. For a diagram that
      represents the expected behaviour — rather than the design one —, mean
      values would be needed.
    - The diagram is **monotonic**: it does not represent loading and unloading
      cycles, nor behaviour under repeated actions.

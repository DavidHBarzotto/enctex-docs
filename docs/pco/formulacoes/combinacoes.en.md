# Load combinations

The normal ultimate combinations follow **NBR 8681:2003**, section 5.1.3.1 —
which is the same requirement reproduced in Table 11.1 of NBR 6118.

## The combination { #a-combinacao }

For each variable action tested as the **leading** action, a case is built in
which it enters in full and the others enter reduced by \(\psi_0\):

\[
F_d = \sum \gamma_g F_{g,k} + \gamma_q F_{q1,k} + \gamma_q \sum \psi_{0j} F_{qj,k}
\]

with \(\gamma_f = 1.4\) in normal combinations.

Each case is a **complete vector** \(\{N, M_x, M_y, F_x, F_y\}\) — the five
components of the column force —, not a component-by-component envelope.

!!! info "Why case by case, and not envelope first"

    Enveloping the column forces **before** solving and solving **once per
    case** give the same result when the response is linear in all five
    components — which is the case for the analytical pile reaction formula,
    and also for the finite element model, which is linear.

    But the list of cases exists because only it allows the solver to be run
    **once per case** and the **reactions** to be enveloped. Enveloping first
    would force solving with a "combined" vector that ignores the signs — and
    the sign matters: a moment that relieves one pile overloads the opposite
    one.

## Favourable permanent action { #acao-permanente-favoravel }

This is the point where the code requires care and where it is easy to err on
the unsafe side.

A permanent action — the self-weight of the cap, always in compression — can
**relieve** the adverse effect of a variable action of opposite sign, such as
a tensile variable action. When this happens, NBR 8681 (4.3.3.2 and Table 1)
requires using

\[
\gamma_{g,inf} = 1.0
\]

and **not** \(\gamma_{g,sup} = 1.4\). Multiplying by 1.4 an action that is
providing relief would overestimate the relief, and that is unsafe.

### How PCO handles it { #como-o-pco-resolve }

The problem is that "favourable" **is not a fixed attribute of the action**:
it depends on the sign of each check. The same self-weight is unfavourable for
strut compression and favourable for pile tension.

Instead of deciding at input, PCO tests **both assumptions as separate cases**
— \(\gamma_g = 1.0\) and \(\gamma_g = 1.4\) on the permanent actions — and lets
the per-component envelope choose on its own, for each check, which of the two
is the more unfavourable.

It is more expensive to calculate and spares the user from getting by hand a
classification that changes from check to check.

## Self-weight { #peso-proprio }

The self-weight of the cap enters as a permanent action, with

\[
\gamma_{concreto} = 25\ \text{kN/m}^3
\]

according to NBR 6120.

PCO calculates the volume from the real polygon of the cap — the convex hull of
the piles plus the edge distance —, not from a circumscribed rectangle.

## Caps in tension { #blocos-tracionados }

When the combination results in tension, the cap changes behaviour and the
program treats the case explicitly. The distinction matters because a pile in
tension has no toe to mobilise and the strut model is inverted.

## Limits of validity { #limites-de-validade }

!!! warning validade "Range of application"

    - Covers the **normal ultimate combinations**. Special, construction and
      exceptional combinations (NBR 8681, 5.1.3.2 to 5.1.3.4) are not covered.
    - **Serviceability limit states** — cracking and excessive deformation —
      are not checked.
    - The \(\psi_0\) factors depend on the use category of the variable action,
      and are the responsibility of whoever enters the actions.
    - Dynamic, seismic and impact actions are outside the scope.

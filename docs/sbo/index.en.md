# SBO — Simple Beam One

**Version 1.0.1** · Windows 64-bit · **Free**

Design of reinforced concrete beams for **simple bending**, **shear** and
**torsion**, with section detailing and a moment-curvature diagram.

It works with **rectangular** and **T sections**, and lets you set up several
beams in the same project, switching between them.

## What it does { #o-que-ele-faz }

<div class="grid cards" markdown>

-   :material-format-align-bottom:{ .lg .middle } **Simple bending**

    ---

    Rectangular and T sections, with tension-only or compression
    reinforcement, strain domains and minimum reinforcement according to
    NBR 6118.

    [:octicons-arrow-right-24: Formulation](formulacoes/flexao.md)

-   :material-vector-difference:{ .lg .middle } **Shear and torsion**

    ---

    Model I for shear, equivalent hollow section for torsion, and the
    **interaction check** between the two.

    [:octicons-arrow-right-24: Formulation](formulacoes/cortante-torcao.md)

-   :material-chart-bell-curve:{ .lg .middle } **Moment-curvature**

    ---

    Non-linear analysis with the real parabola-rectangle relationship of the
    concrete — which shows the effective stiffness and ductility of the
    section.

    [:octicons-arrow-right-24: Formulation](formulacoes/momento-curvatura.md)

-   :material-vector-square:{ .lg .middle } **Detailing**

    ---

    Bar size and number of bars for the bottom, top and skin reinforcement,
    with a drawing of the section and a comparison between required and
    provided \(A_s\).

</div>

## Three languages in the interface { #tres-idiomas-na-interface }

The program is trilingual — **Portuguese, English and Spanish** — switchable in
**Settings**. The force unit can also be configured there.

## What you enter { #o-que-se-lanca }

| Group | Fields |
| :-- | :-- |
| Multiple beams | Quantity, and active beam selector |
| Materials | \(f_{ck}\), \(f_{yk}\), \(E_s\) |
| Rectangular section | Width \(b\), depth \(h\), \(d'\) |
| T section | Flange \(b_f\), flange thickness \(h_f\), web \(b_w\), depth \(d\) |
| Internal forces | Moment \(M_k\), shear \(V_k\), torque \(T_k\) |
| Detailing | Bar size and no. of bars: bottom, top and skin; alignment |

Forces are entered as **characteristic** values — the program applies the
\(\gamma_f\) factor.

## Difference from SBX { #diferenca-para-o-sbx }

SBO **designs** the section you entered. [SBX](../sbx/index.md) adds the
reverse path: **finding the cheapest section** that resists the same forces,
by numerical optimisation.

Everything else is identical — same calculation core, same interface, same
checks.

[:octicons-arrow-right-24: How the optimisation works](../sbx/otimizacao.md)

## Next steps { #proximos-passos }

- [Formulations](formulacoes/index.md) — what it calculates, and how.
- [References](referencias.md) — the bibliography.

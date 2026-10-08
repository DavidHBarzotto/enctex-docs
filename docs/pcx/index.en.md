# PCX — Pile Cap X

**Version 1.0.2** · Windows 64-bit

An evolution of [PCO](../pco/index.md) for more complex projects, including
the design of **flexible pile caps**.

## Project limits { #limites-do-projeto }

<div class="limites" markdown="0">
  <div class="limite"><span class="valor">100</span><span class="rotulo">pile caps per project</span></div>
  <div class="limite"><span class="valor">30</span><span class="rotulo">piles per cap</span></div>
  <div class="limite"><span class="valor">1 to N</span><span class="rotulo">piles per cap</span></div>
  <div class="limite"><span class="valor">&gt;1</span><span class="rotulo">column per cap</span></div>
</div>

## What it adds to PCO { #o-que-ele-acrescenta-ao-pco }

PCX is PCO with **flexible pile caps** enabled. Everything else is identical —
same calculation core, same interface, same checks.

| Behaviour | PCO | PCX |
| :-- | :--: | :--: |
| Rigid Cap (Compression) | ● | ● |
| Rigid Cap (Uplift/Tension) | ● | ● |
| Flexible Cap (Compression) | | ● |
| Flexible Cap (Uplift/Tension) | | ● |

[:octicons-arrow-right-24: Flexible pile caps: the formulation](blocos-flexiveis.md)

!!! info "Why this matters"

    The strut-and-tie model assumes that the strut **forms**. That requires the
    cap to be deep enough relative to the distance between the column face and
    the pile axis.

    In a slender cap the strut does not form in a well-defined way, and the
    real behaviour is **bending** — the cap works as a beam. Designing it by
    Blévot in that case **underestimates the reinforcement**.

    That is the range PCX covers.

## Documentation { #documentacao }

PCX shares PCO's calculation core, and the documentation follows the same
logic: **the PCO pages apply in full to PCX**, and only the differences are
documented here.

<div class="grid cards" markdown>

-   :material-vector-line:{ .lg .middle } **[Flexible pile caps](blocos-flexiveis.md)**

    ---

    What only PCX does: simply supported beam, cantilever beam, grillage
    analysis, bending reinforcement and stirrups.

-   :material-book-open-variant:{ .lg .middle } **[PCO manual](../pco/manual/interface.md)**

    ---

    Interface, pile cap setup, design, detailing and report. Identical.

-   :material-function-variant:{ .lg .middle } **[PCO formulations](../pco/formulacoes/index.md)**

    ---

    Blévot, MBT, finite elements, load combinations and checks. Identical.

-   :material-book-education-outline:{ .lg .middle } **[References](../pco/referencias.md)**

    ---

    The bibliography, shared by both.

</div>

## When PCX is justified { #quando-o-pcx-se-justifica }

PCO handles the ordinary building pile cap, which usually meets the rigidity
condition comfortably. PCX becomes worthwhile when you have:

- **A slender cap** — small depth relative to the pile spacing.
- **A cap on the boundary** between rigid and flexible, where it is worth
  calculating both ways and adopting the larger result.
- **A cap with a long span between piles**, where bending governs.

!!! tip "On the boundary, calculate both ways"

    If the simple bending reinforcement turns out larger than the tie
    reinforcement, it is the one that should prevail — the difference measures
    how far the cap has stopped behaving as rigid.

## Integration with the SP line { #integracao-com-a-linha-sp }

Like PCO, PCX **communicates with SPO, SPX and SPX AI**: it receives the
geometry and the pile reactions instead of requiring them to be entered again.

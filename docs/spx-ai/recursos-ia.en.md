# AI features

What only SPX AI has. Everything else is in the
[SPX manual](../spx/manual/interface.md).

!!! info "Where the AI acts"

    On the **data input** and the **model setup** — not in the calculation.
    See [the caveat on the product page](index.md#a-ia-nao-entra-no-calculo).

---

## Intelligent PDF reading { #leitura-inteligente-de-pdfs }

Extracts boreholes from PDF reports: depths, blow counts and soil
descriptions.

The difference from the **editable PDF reader** that SPX already has lies in
the interpretation: the SPX reader works with reports with a predictable
layout; the intelligent reading in SPX AI handles format variations, tables
with merged cells and non-standard descriptions.

### The care it requires { #o-cuidado-que-ela-exige }

!!! warning "Always check the soil classification"

    Automatic extraction depends on the document. Poor-quality scanned logs,
    irregular tables and free-text descriptions produce wrong readings — and a
    wrong reading **does not announce itself**.

    Check the resulting table against the original report, paying special
    attention to the **soil classification**: it is what selects \(K\) and
    \(\alpha\) in Aoki-Velloso, \(C\) in Décourt-Quaresma, \(\alpha_T\) in
    Teixeira and the factor \(m\) for the springs.

    Swapping **silty sand** for **sandy silt** reduces \(K\) from 0.80 to
    0.55 MPa, **31 % less toe resistance**. See
    [conventions](../comecar/convencoes.md#tipos-de-solo).

The extracted table is **editable**: correct whatever is wrong before
calculating.

---

## DWG/DXF plan import { #importacao-de-planta-dwgdxf }

Reads the foundation plan and recognises the position of the piles, so
coordinates don't have to be entered by hand.

### The care it requires { #o-cuidado-que-ela-exige_1 }

!!! warning "Check the count and the positions"

    Recognition depends on how the plan was drawn — layers, blocks, drawing
    conventions. Plans with piles on mixed layers, represented by non-standard
    blocks or with similar-looking auxiliary elements may produce too many or
    too few piles.

    After importing, **check the count** against the plan and use the 3D view
    to catch a misplaced pile.

Remember the limits: **200 piles in total** and **30 per cap**.

---

## Generation commands { #comandos-de-geracao }

Generate pile caps and piles by command, instead of filling in field after
field.

It is the feature that saves the most time on repetitive projects: one
command that generates forty identical pile caps replaces forty identical
entries.

!!! tip "Generate, then check in 3D"

    Generating by command is fast enough that checking becomes the bottleneck.
    Use the 3D view — a wrong parameter propagates to every generated cap at
    once, and that is what makes the feature both powerful and dangerous.

---

## Virtual borehole { #sondagem-virtual }

SPX's 3D stratigraphic modelling interpolates the profile between boreholes.
SPX AI takes this to a **virtual borehole**: an estimated profile at a
position where there is no borehole.

!!! warning validade "Range of application"

    A virtual borehole is **interpolation**, not investigation. It estimates
    what is probably between two known boreholes, assuming that the layers vary
    regularly between them.

    It does not replace a borehole, and NBR 6122 still requires the number of
    boreholes it requires. Irregularly dipping layers, lenses, boulders and
    abrupt changes are precisely what interpolation does **not** capture — and
    they are also what most compromises a foundation.

    Use it to understand the ground and justify length decisions; not to waive
    investigation.

---

## Assistant { #assistente }

An assistant built into the interface, for queries while you work.

!!! note "About the assistant's answers"

    The assistant helps you operate the program. Like any system of this kind,
    it can make mistakes — and it has no authority over the formulation.

    Design decisions must be checked against the
    [formulation documentation](../spx/formulacoes/index.md) and the
    standards.

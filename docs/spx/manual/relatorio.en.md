# Report

The eighth tab. It issues the **calculation report** in DOCX — the document
that accompanies the project and records the assumptions.

## Scope { #escopo }

First step: choose what the report covers.

| Scope | Produces |
| :-- | :-- |
| **Specific pile** | Report for a single pile, in detail |
| **All piles** | Each pile detailed individually |
| **Pile groups** | Groups identical piles and details one per group |

!!! tip "Groups, on a real project"

    On a site with forty piles of three types, "all piles" produces a document
    of hundreds of pages that nobody reads. **Groups** mode produces three
    reports and a summary — which is what the client and the reviewer actually
    check.

## Sections { #secoes }

The sections can be selected. The complete document contains:

1. **Purpose of the report**
2. **Foundation characteristics**
3. **Global project information**
4. **Registered borehole profiles (NSPT)**
5. **Geotechnical analysis** — bearing capacity by the three methods and
   settlement
6. **Structural analysis (full FEM)** — internal forces and displacements
7. **Cross-section design** — longitudinal and transverse reinforcement
8. **Notes and code assumptions**

In grouped mode, a **summary of the generated groups** is also included,
relating each group to the piles it represents.

## What to record beyond the automatic content { #o-que-registrar-alem-do-automatico }

The assumptions section is generated with the standard code text. It is worth
completing it by hand with the decisions the program has no way of knowing:

- **Which capacity method was adopted, and why.** The three diverge; the
  choice is an engineering one and must be recorded.
- **The origin of the borehole** — who carried it out, when, and whether it
  complies with NBR 6484.
- **The allowable settlement considered**, and where it came from.
- **Special conditions** — negative skin friction, collapsible soil, varying
  water table, neighbouring excavations.
- **Whether a load test was carried out**, and what it showed.

!!! warning "The report is what backs the signature"

    The generated document records the calculation performed. It does not
    replace engineering judgement nor transfer responsibility — the project is
    signed by the engineer of record.

    The [formulation documentation](../formulacoes/index.md) exists so that
    this signature is an informed one: it states which formulation was applied,
    with which coefficients and within which range of validity.

## Output { #saida }

The file is produced in **DOCX**, editable in Word or LibreOffice — on purpose,
so that the designer can complete the assumptions before issuing it. Charts
and tables are embedded.

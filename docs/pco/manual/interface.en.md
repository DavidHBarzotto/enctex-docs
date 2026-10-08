# Interface

PCO is organised in **four tabs**, in project order.

| # | Tab | What is done there |
| :-: | :-- | :-- |
| 1 | **FEM Simulation** | Sets up pile caps, piles and columns; enters actions; solves the finite element model |
| 2 | **Design** | Chooses the behaviour and the model, and calculates the reinforcement |
| 3 | **Detailing** | Draws the reinforcement and exports it as DXF |
| 4 | **Report** | Issues the editable calculation report |

<div class="fluxo" markdown="0">
  <div class="etapa"><span class="n">1</span>FEM Simulation</div>
  <div class="seta">→</div>
  <div class="etapa ramo"><span class="n">2</span>Design</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">3</span>Detailing</div>
  <div class="etapa"><span class="n">4</span>Report</div>
</div>

!!! info "The first tab does two things"

    The name **FEM Simulation** describes what it delivers, not everything it
    asks for. It is where you build the geometry — pile caps, piles, columns —
    and enter the actions; the finite element simulation is the result of
    that.

    The finite element model is **optional** for design: Blévot and MBT are
    analytical and do not depend on it. But it is what allows you to check the
    assumptions of the strut model. See
    [Finite elements](../formulacoes/elementos-finitos.md).

## Several pile caps, several columns { #varios-blocos-varios-pilares }

PCO works with **up to 100 pile caps per project**, each with **up to 30
piles**, and **more than one column per cap**.

Each column in the cap has its own tab within the setup, with its own section,
position and actions.

!!! warning "Model and bar sizes are set PER PILE CAP"

    Behaviour, calculation model and bar sizes belong to the selected pile cap.
    Changing the model of Cap 1 does **not** affect Cap 2 — which is the
    correct behaviour in a project with caps of different sizes, but it
    requires attention: checking one cap does not check the others.

## General features { #recursos-gerais }

**3D view** of the pile cap with the piles and columns in position. It is the
quickest way to catch a swapped coordinate.

**Communication with the SP line** — PCO receives geometry and reactions from
the pile programs, instead of requiring them to be entered again. See
[integration](../index.md#integracao-com-a-linha-sp).

## Next steps { #proximos-passos }

- [Pile cap setup](bloco.md) — geometry, piles and columns.
- [Design](dimensionamento.md) — behaviour, model and reinforcement.
- [Detailing](detalhamento.md) — drawing and DXF.
- [Report](relatorio.md) — calculation report.

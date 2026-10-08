# Boreholes and soils

Tabs 2 and 3. This is where the subsoil profile goes in — the data that
governs everything else.

## Borehole / NSPT { #sondagem-nspt }

The borehole is entered **metre by metre**: for each depth, an \(N_{SPT}\) value
and a soil classification.

| Column | Content |
| :-- | :-- |
| Depth | 1 m, 2 m, 3 m… |
| \(N_{SPT}\) | Blow count |
| Soil type | Classification by fractions — see below |

### Soil types { #tipos-de-solo }

The soil is classified by the fractions it consists of, in order of
predominance — fifteen combinations in all:

| | | |
| :-- | :-- | :-- |
| Sand | Silt | Clay |
| Silty sand | Sandy silt | Sandy clay |
| Silty-clayey sand | Sandy-clayey silt | Sandy-silty clay |
| Clayey sand | Clayey silt | Silty clay |
| Clayey-silty sand | Clayey-sandy silt | Silty-sandy clay |

!!! warning "The classification selects the design parameters"

    It is not a label. It selects \(K\) and \(\alpha\) in Aoki-Velloso, \(C\)
    in Décourt-Quaresma, \(\alpha_T\) in Teixeira and the factor \(m\) for the
    springs.

    Swapping **silty sand** for **sandy silt** reduces \(K\) from 0.80 to
    0.55 MPa, **31 % less toe resistance**. See
    [Parameter tables](../formulacoes/tabelas.md).

### Multiple boreholes { #multiplos-furos }

SPX accepts more than one borehole profile in the same project, each one
identified. Different piles can be associated with different boreholes —
which is what allows a site where the subsoil varies from one side to the
other to be handled.

### Editable PDF reader { #leitor-editavel-de-pdfs }

SPX reads borehole logs directly from the **PDF**, extracting depths, blow
counts and soil descriptions into the table. The extraction is **editable**:
whatever comes out wrong can be corrected before calculating.

On a site with fifteen boreholes twenty metres deep, there are three hundred
rows to type, and each one is a chance to swap **silty sand** for
**sandy silt**.

!!! warning "Check the soil classification"

    Automatic extraction depends on the layout of the log. Always check the
    resulting table against the original, paying attention to the **soil
    classification** — it is what selects the parameters of every method.

!!! tip "In SPX AI the reading is intelligent"

    [SPX AI](../../spx-ai/recursos-ia.md#leitura-inteligente-de-pdfs) handles
    format variations, tables with merged cells and non-standard descriptions
    — the reports that the standard reader cannot interpret.

### 3D profile {: #perfil-3d }

With more than one borehole, SPX interpolates the stratigraphy and presents a
**three-dimensional profile** of the ground. It is the feature SPO does not
have, and it serves two purposes: spotting layers that dip, and visually
justifying why two nearby piles were given different lengths.

## Soil Properties { #propriedades-dos-solos }

The third tab. It holds the parameters per layer — unit weights and whatever
else feeds the geostatic stress used in
[settlement](../formulacoes/recalque.md#recalque-do-solo).

The program offers a table of **typical unit weights** by consistency and
density, accessible from the tab itself, for those without test data.

!!! note "Value adopted when data is missing"

    When there is no match in the table, the program adopts
    \(\gamma = 18\) kN/m³. It is a reasonable value for an average soil, but
    record the assumption in the calculation report when it governs the
    result.

## Good practice { #boas-praticas }

- **Do not design with the toe at the last metre investigated.** The methods
  need layers below the toe to build \(N_p\); at the last level, the program
  repeats the last value, which is optimistic if the profile was improving.
- **Be wary of \(N_{SPT} > 50\).** It is outside the calibration range of most
  correlations.
- **A shallow borehole produces a shallow design.** If the profile does not
  reach the required depth, the capacity table simply ends — and the correct
  reading is "investigation is missing", not "the pile doesn't work".

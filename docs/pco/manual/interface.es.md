# Interfaz

El PCO está organizado en **cuatro pestañas**, en el orden del proyecto.

| # | Pestaña | Qué se hace en ella |
| :-: | :-- | :-- |
| 1 | **Simulación MEF** | Configura encepados, pilotes y pilares; carga las acciones; resuelve el modelo por elementos finitos |
| 2 | **Dimensionamiento** | Elige el comportamiento y el modelo, y calcula las armaduras |
| 3 | **Detallado** | Dibuja las armaduras y las exporta en DXF |
| 4 | **Informe** | Emite la memoria de cálculo editable |

<div class="fluxo" markdown="0">
  <div class="etapa"><span class="n">1</span>Simulación MEF</div>
  <div class="seta">→</div>
  <div class="etapa ramo"><span class="n">2</span>Dimensionamiento</div>
  <div class="seta">→</div>
  <div class="etapa"><span class="n">3</span>Detallado</div>
  <div class="etapa"><span class="n">4</span>Informe</div>
</div>

!!! info "La primera pestaña hace dos cosas"

    El nombre **Simulación MEF** describe lo que entrega, no todo lo que pide.
    Es en ella donde usted arma la geometría — encepados, pilotes, pilares — y
    carga las acciones; la simulación por elementos finitos es el resultado de
    eso.

    El modelo de elementos finitos es **opcional** para dimensionar: Blévot y
    MBT son analíticos y no dependen de él. Pero es lo que permite verificar
    las hipótesis del modelo de bielas. Vea
    [Elementos finitos](../formulacoes/elementos-finitos.md).

## Varios encepados, varios pilares { #varios-blocos-varios-pilares }

El PCO trabaja con **hasta 100 encepados por proyecto**, cada uno con **hasta
30 pilotes**, y **más de un pilar por encepado**.

Cada pilar del encepado tiene su propia pestaña dentro de la configuración, con
su sección, posición y acciones.

!!! warning "El modelo y los diámetros son datos POR ENCEPADO"

    El comportamiento, el modelo de cálculo y los diámetros pertenecen al
    encepado seleccionado. Cambiar el modelo del Encepado 1 **no** afecta al
    Encepado 2 — lo que es el comportamiento correcto en un proyecto con
    encepados de distinto tamaño, pero exige atención: verificar un encepado no
    verifica los demás.

## Funciones generales { #recursos-gerais }

**Visualización 3D** del encepado con los pilotes y los pilares en su
posición. Es la forma más rápida de detectar una coordenada invertida.

**Comunicación con la línea SP** — el PCO recibe la geometría y las
reacciones de los programas de pilotes, en lugar de exigir cargarlas de nuevo.
Vea [integración](../index.md#integracao-com-a-linha-sp).

## Próximos pasos { #proximos-passos }

- [Configuración del encepado](bloco.md) — geometría, pilotes y pilares.
- [Dimensionamiento](dimensionamento.md) — comportamiento, modelo y armaduras.
- [Detallado](detalhamento.md) — dibujo y DXF.
- [Informe](relatorio.md) — memoria de cálculo.

# SBO — Simple Beam One

**Versión 1.0.1** · Windows 64 bits · **Gratuito**

Dimensionamiento de vigas de hormigón armado a **flexión simple**, **esfuerzo
cortante** y **torsión**, con detallado de la sección y diagrama
momento-curvatura.

Trabaja con **sección rectangular** y **sección en T**, y permite armar varias
vigas en el mismo proyecto, alternando entre ellas.

## Qué hace { #o-que-ele-faz }

<div class="grid cards" markdown>

-   :material-format-align-bottom:{ .lg .middle } **Flexión simple**

    ---

    Sección rectangular y en T, con armadura simple o doble, dominios de
    deformación y armadura mínima según la NBR 6118.

    [:octicons-arrow-right-24: Formulación](formulacoes/flexao.md)

-   :material-vector-difference:{ .lg .middle } **Cortante y torsión**

    ---

    Modelo I para el cortante, sección hueca equivalente para la torsión, y la
    **verificación de interacción** entre ambos.

    [:octicons-arrow-right-24: Formulación](formulacoes/cortante-torcao.md)

-   :material-chart-bell-curve:{ .lg .middle } **Momento-curvatura**

    ---

    Análisis no lineal con la relación parábola-rectángulo real del hormigón —
    que muestra la rigidez efectiva y la ductilidad de la sección.

    [:octicons-arrow-right-24: Formulación](formulacoes/momento-curvatura.md)

-   :material-vector-square:{ .lg .middle } **Detallado**

    ---

    Diámetro y número de barras para las armaduras inferior, superior y de
    piel, con el dibujo de la sección y la comparación entre el \(A_s\)
    requerido y el efectivo.

</div>

## Tres idiomas en la interfaz { #tres-idiomas-na-interface }

El programa es trilingüe — **portugués, inglés y español** — y el idioma se
cambia en **Configuración**. La unidad de fuerza también se configura allí.

## Qué se carga { #o-que-se-lanca }

| Grupo | Campos |
| :-- | :-- |
| Múltiples vigas | Cantidad, y selector de la viga activa |
| Materiales | \(f_{ck}\), \(f_{yk}\), \(E_s\) |
| Sección rectangular | Ancho \(b\), altura \(h\), \(d'\) |
| Sección en T | Ala \(b_f\), espesor del ala \(h_f\), alma \(b_w\), altura \(d\) |
| Esfuerzos | Momento \(M_k\), cortante \(V_k\), torsor \(T_k\) |
| Detallado | Diámetro y n.º de barras: inferior, superior y de piel; alineación |

Los esfuerzos se cargan en valores **característicos** — la mayoración por
\(\gamma_f\) la hace el programa.

## Diferencia con el SBX { #diferenca-para-o-sbx }

El SBO **dimensiona** la sección que usted informó. El [SBX](../sbx/index.md)
agrega el camino inverso: **encontrar la sección más barata** que resiste los
mismos esfuerzos, por optimización numérica.

Todo lo demás es idéntico — mismo núcleo de cálculo, misma interfaz, mismas
verificaciones.

[:octicons-arrow-right-24: Cómo funciona la optimización](../sbx/otimizacao.md)

## Próximos pasos { #proximos-passos }

- [Formulaciones](formulacoes/index.md) — qué calcula, y cómo.
- [Referencias](referencias.md) — la bibliografía.

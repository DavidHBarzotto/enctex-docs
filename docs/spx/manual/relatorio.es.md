# Informe

Octava pestaña. Emite la **memoria de cálculo** en DOCX — el documento que
acompaña el proyecto y registra las hipótesis.

## Alcance { #escopo }

Primer paso: elegir qué cubre el informe.

| Alcance | Produce |
| :-- | :-- |
| **Pilote específico** | Memoria de un único pilote, detallada |
| **Todos los pilotes** | Cada pilote detallado individualmente |
| **Grupos de pilotes** | Agrupa los idénticos y detalla uno por grupo |

!!! tip "Grupos, en una obra real"

    En una obra con cuarenta pilotes de tres tipos, "todos los pilotes" produce
    un documento de cientos de páginas que nadie lee. El modo **grupos**
    produce tres memorias y un resumen — que es lo que el cliente y la
    inspección efectivamente revisan.

## Secciones { #secoes }

Las secciones son seleccionables. El documento completo incluye:

1. **Objetivo del informe**
2. **Características de la cimentación**
3. **Información global del proyecto**
4. **Perfiles de sondeo registrados (NSPT)**
5. **Análisis geotécnico** — capacidad de carga por los tres métodos y
   asentamiento
6. **Análisis estructural (MEF completo)** — esfuerzos y desplazamientos
7. **Dimensionamiento de la sección transversal** — armaduras longitudinal y
   transversal
8. **Observaciones e hipótesis normativas**

En el modo agrupado, se incluye también un **resumen de los grupos generados**,
relacionando cada grupo con los pilotes que representa.

## Qué registrar además de lo automático { #o-que-registrar-alem-do-automatico }

La sección de hipótesis se genera con el texto normativo estándar. Conviene
complementarla manualmente con las decisiones que el programa no tiene cómo
saber:

- **Qué método de capacidad se adoptó y por qué.** Los tres divergen; la
  elección es de ingeniería y debe quedar registrada.
- **El origen del sondeo** — quién lo ejecutó, cuándo, y si cumple la
  NBR 6484.
- **El asentamiento admisible considerado**, y de dónde vino.
- **Condiciones especiales** — fricción negativa, suelo colapsable, nivel
  freático variable, excavaciones vecinas.
- **Si hubo prueba de carga**, y qué indicó.

!!! warning "La memoria es lo que respalda la firma"

    El documento generado registra el cálculo realizado. No sustituye el
    criterio de ingeniería ni transfiere responsabilidad — el proyecto lo firma
    el responsable técnico.

    La [documentación de formulaciones](../formulacoes/index.md) existe para
    que esa firma sea informada: indica qué formulación se aplicó, con qué
    coeficientes y dentro de qué rango de validez.

## Salida { #saida }

El archivo sale en **DOCX**, editable en Word o LibreOffice — a propósito, para
que el proyectista complemente las hipótesis antes de emitirlo. Los gráficos y
tablas van incluidos.

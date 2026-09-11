# Otimização da seção

O recurso exclusivo do SBX. O SBO responde *"esta seção aguenta?"*; o SBX
responde a pergunta inversa: **qual é a seção mais barata que aguenta?**

---

## O método

**Programação quadrática sequencial** — SLSQP, do `scipy.optimize`. É um método
de otimização não linear com restrições, baseado em gradiente.

A escolha se explica pela forma do problema. As variáveis são **contínuas** —
largura e altura em centímetros —, a função de custo é suave quase em todo o
domínio, e o espaço tem só duas dimensões. Num problema assim, um método de
gradiente converge em dezenas de avaliações, enquanto uma metaheurística
gastaria milhares para chegar ao mesmo ponto.

!!! info "Por que não enumerar, como no otimizador de blocos"

    O otimizador de blocos do GCX enumera exaustivamente, porque lá o espaço é
    **discreto e pequeno** — bitola de catálogo, número inteiro de estacas.

    Aqui não: \(b\) e \(h\) são contínuos. Enumerar exigiria discretizar, e a
    discretização que desse a mesma precisão teria milhares de pontos. O
    gradiente é a ferramenta certa para variável contínua.

---

## As variáveis

| Seção | Variáveis |
| :-- | :-- |
| Retangular | largura \(b\) e altura \(h\) |
| T | largura da alma \(b_w\) e altura \(h\) |

Na seção T, a **mesa é dada** — \(b_f\) e \(h_f\) não variam. Faz sentido: a
mesa costuma ser a laje, cuja geometria vem de fora da viga.

---

## A função objetivo

\[
C = c_{concreto}\cdot V_c \;+\; c_{aço}\cdot\left(P_s + P_{sw}\right)
\]

com \(V_c\) o volume de concreto por metro de viga, \(P_s\) o peso da armadura
longitudinal e \(P_{sw}\) o das transversais, ambos pela massa específica de
**7850 kg/m³**.

O peso dos estribos considera o perímetro da seção:

\[
P_{sw} = \frac{A_{sw}}{10^4}\cdot 7850 \cdot \frac{2(b+h)}{100}
\]

### O modo consumo

!!! tip "Zerar os dois custos muda o que se otimiza"

    Se você informar **custo zero** para concreto e aço, o objetivo passa a ser
    o **volume geométrico total** — concreto mais aço, convertido pela massa
    específica:

    \[
    C = V_c + \frac{P_s + P_{sw}}{7850}
    \]

    É útil quando você não tem preços confiáveis, ou quer a seção de menor
    consumo material independentemente de preço. O resultado muda: aço e
    concreto passam a competir por volume, e não por dinheiro.

---

## As restrições

### Limites das variáveis

| Variável | Mínimo | Máximo |
| :-- | --: | --: |
| \(b\) ou \(b_w\) | 12 cm | 100 cm |
| \(h\) (retangular) | 20 cm | 300 cm |
| \(h\) (seção T) | \(h_f + 5\) cm | 300 cm |

O mínimo de 12 cm é a largura mínima de viga da NBR 6118.

### A viga não pode ser mais larga que alta

\[
h \ge b
\]

É a única restrição explícita de desigualdade. Sem ela, o otimizador
encontraria seções deitadas — eficientes no papel, esquisitas na obra.

### As verificações estruturais entram por dentro

Aqui está a decisão mais importante do desenho: **as verificações não são
restrições do otimizador**. Cada avaliação da função objetivo executa o
dimensionamento completo — flexão, cortante, torção, interação de bielas — e,
quando ele falha, devolve uma **penalidade**:

\[
C_{inviável} = 10^6 + b\,h
\]

Assim o otimizador só percorre seções que de fato passam, sem precisar de
expressões analíticas de cada restrição normativa — que seriam dezenas, e
mudariam a cada revisão de norma.

---

## O chute inicial

SLSQP é um método **local**: ele desce do ponto onde começa. Se começar numa
seção inviável, o gradiente da penalidade não o guia para fora.

Por isso há uma busca prévia. Partindo da seção que você informou, enquanto ela
for inviável:

1. aumenta \(h\) em 10 cm;
2. se ainda inviável, aumenta \(b\) em 5 cm;
3. repete, até 20 vezes.

Crescer a seção é o caminho mais curto para a viabilidade, e por isso a busca
anda nessa direção.

---

## Mínimos embutidos na avaliação

Duas armaduras entram no custo mesmo quando o cálculo não as exige — porque
elas serão executadas de qualquer forma:

| Armadura | Valor |
| :-- | :-- |
| Longitudinal mínima | \(A_s \ge 3{,}14\) cm² — quatro barras de 10 mm |
| De pele | \(0{,}10\%\,b\,h\) para \(h \ge 60\) cm; \(0{,}05\%\,b\,h\) para \(h \ge 50\) cm; zero abaixo |

Sem esses mínimos, o otimizador enxergaria vigas altas como mais baratas do que
são: a armadura de pele cresce com a altura e é justamente o que freia o
alongamento da seção.

---

## O que fazer com o resultado

!!! warning "O resultado é contínuo; a obra não é"

    O otimizador devolve algo como \(b = 17{,}3\) cm e \(h = 62{,}8\) cm. Nenhuma
    fôrma se executa assim.

    **Arredonde para cima**, em múltiplos de 5 cm, e **rode o SBO na seção
    arredondada** para confirmar que ela passa. Arredondar para cima quase
    sempre mantém a viabilidade — mas "quase sempre" não é "sempre", e a
    confirmação custa um clique.

!!! warning "Verifique se a otimização convergiu"

    O SLSQP informa se convergiu. Quando não converge — o que acontece em
    seções muito restringidas, ou quando o chute inicial não alcança a região
    viável em 20 passos —, o valor devolvido **não é um ótimo**, é o ponto onde
    ele parou.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - **O ótimo é local, não global.** SLSQP desce do ponto inicial. Uma seção
      inicial diferente pode levar a um resultado diferente. Se o resultado
      surpreender, tente outro ponto de partida e compare.
    - A **penalidade de inviabilidade é descontínua**. Métodos de gradiente
      pressupõem função suave, e na fronteira entre viável e inviável essa
      hipótese se rompe — o otimizador pode oscilar ali. O termo \(b\,h\) na
      penalidade ainda aponta para seções menores, que são mais inviáveis; é o
      chute inicial viável que compensa isso, não o gradiente.
    - Otimiza **uma seção isolada**, com os esforços que você informou. Não
      considera que reduzir a altura da viga muda o peso próprio, e com ele os
      próprios esforços — essa realimentação é sua.
    - Não considera **padronização**: cada viga é otimizada sozinha. Numa obra,
      dez vigas com dez seções diferentes custam mais em fôrma do que a soma
      dos ótimos individuais sugere.
    - Não considera **estados limites de serviço**. A seção mais barata no ELU
      pode ter flecha inaceitável — e é o caso comum em vigas esbeltas.
    - Os preços são **seus**. O resultado é tão bom quanto eles: um custo de
      aço desatualizado desloca o ótimo na direção errada.

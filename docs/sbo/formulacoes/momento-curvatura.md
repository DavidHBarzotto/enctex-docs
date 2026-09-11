# Momento-curvatura

Análise não linear da seção: em vez de responder "quanto de aço", ela responde
**como a seção se comporta** à medida que é carregada, até a ruptura.

É o que mostra a rigidez efetiva e a ductilidade — duas coisas que o
dimensionamento no estado limite último não revela.

---

## A relação tensão-deformação real

O dimensionamento usa o **bloco retangular equivalente**, que é uma
simplificação conveniente para integrar à mão. A análise não linear usa a
relação **parábola-retângulo** da NBR 6118, que é a curva real:

\[
\sigma_c =
\begin{cases}
0{,}85\,f_{cd}\left[1 - \left(1 - \dfrac{\varepsilon_c}{\varepsilon_{c2}}\right)^{n}\right]
  & 0 \le \varepsilon_c \le \varepsilon_{c2} \[10pt]
0{,}85\,f_{cd} & \varepsilon_{c2} < \varepsilon_c \le \varepsilon_{cu}
\end{cases}
\]

O trecho parabólico sobe até \(\varepsilon_{c2}\); daí em diante a tensão fica
constante até a deformação última.

---

## O procedimento

Para cada valor de curvatura \(\chi\), a seção está em equilíbrio quando a
resultante de compressão no concreto e a de tração no aço se anulam. A
incógnita é a **profundidade da linha neutra**.

O programa a encontra por **bisseção** — `scipy.optimize.bisect` —, procurando
entre limites físicos aceitáveis a posição em que o equilíbrio fecha. Com a
linha neutra conhecida, o momento resistente correspondente sai da integração
das tensões.

Repetindo isso para uma sequência de curvaturas — 100 passos por padrão —
constrói-se o diagrama \(M\)–\(\chi\).

!!! info "Por que bisseção, e não Newton"

    A bisseção é mais lenta que Newton, mas **não depende da derivada** e não
    diverge. A relação constitutiva do concreto tem um ponto anguloso em
    \(\varepsilon_{c2}\), onde a parábola encontra o patamar — e é exatamente o
    tipo de descontinuidade de derivada que faz Newton errar o passo.

    Com cem pontos por diagrama, a diferença de velocidade é irrelevante.

---

## O que o diagrama mostra

**A rigidez efetiva.** A inclinação inicial do diagrama é a rigidez \(EI\) da
seção não fissurada; depois da fissuração ela cai, e é essa rigidez reduzida —
não a da seção bruta — que governa deslocamentos reais.

**A ductilidade.** O comprimento do patamar antes da ruptura diz quanta rotação
a seção suporta. É o que permite (ou não) a redistribuição de momentos que o
coeficiente \(\beta\) do dimensionamento pressupõe — ver
[flexão](flexao.md#parametros-do-diagrama).

**O tipo de ruína.** Uma seção subarmada escoa o aço antes de esmagar o
concreto, e o diagrama tem patamar longo. Uma superarmada rompe pelo concreto,
e o diagrama termina abruptamente — ruína frágil, sem aviso.

---

## Limites de validade

!!! warning validade "Faixa de aplicação"

    - É análise **de seção**, não de peça. Não fornece flechas: para isso seria
      preciso integrar a curvatura ao longo do vão, com o diagrama de momentos.
    - Não considera **tension stiffening** — a contribuição do concreto
      tracionado entre fissuras. Isso subestima a rigidez na fase fissurada.
    - Não considera **fluência** nem **retração**, que em serviço reduzem
      substancialmente a rigidez ao longo do tempo.
    - Usa os valores **de cálculo** das resistências. Para um diagrama que
      represente o comportamento esperado — e não o de projeto —, seriam
      necessários valores médios.
    - O diagrama é **monotônico**: não representa ciclos de carga e descarga,
      nem o comportamento sob ações repetidas.

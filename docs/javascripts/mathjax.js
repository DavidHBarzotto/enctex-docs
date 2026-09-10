// MathJax com a sintaxe que o pymdownx.arithmatex (generic) emite.
//
// Sem isto as fórmulas chegam como texto cru: o Material entrega \(...\) e
// \[...\], e o MathJax só os reconhece se forem declarados aqui.
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Renderiza de novo a cada troca de página: com navigation.instant o Material
// substitui o conteúdo sem recarregar, e o MathJax não perceberia sozinho.
//
// O corpo é TODO defensivo, e não por excesso de zelo:
//
// `document$` é um observable compartilhado, e o Material pendura nele os
// próprios assinantes -- inclusive o que desenha os diagramas Mermaid. Uma
// exceção aqui derruba a cadeia, e os assinantes seguintes nunca rodam. Foi
// exatamente o que aconteceu: na primeira emissão o MathJax ainda não tinha
// carregado, `MathJax.startup` era undefined, o TypeError subia, e a página
// ficava com os diagramas em branco -- um sintoma a três camadas de distância
// da causa.
document$.subscribe(() => {
  try {
    if (!window.MathJax || !window.MathJax.typesetPromise) {
      return; // ainda carregando; a própria carga faz a primeira renderização
    }
    if (MathJax.startup && MathJax.startup.output) {
      MathJax.startup.output.clearCache();
    }
    MathJax.typesetClear();
    MathJax.texReset();
    MathJax.typesetPromise();
  } catch (erro) {
    console.error("MathJax: falha ao renderizar", erro);
  }
});

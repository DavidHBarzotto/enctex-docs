# Documentação EnCteX

Site de documentação dos programas de fundações da EnCteX — SPO, SPX, SPX AI,
PCO e PCX. Construído com [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## Trabalhar nela

```bash
pip install -r requirements.txt
```

Servir com recarga automática enquanto escreve:

```bash
mkdocs serve
```

Abre em <http://127.0.0.1:8000>.

Gerar o site estático (saída em `site/`):

```bash
mkdocs build --strict
```

O `--strict` transforma aviso em erro — link interno quebrado, página fora do
`nav`, arquivo ausente. **Use sempre `--strict` antes de publicar**; foi ele
que pegou os problemas de referência durante a escrita.

## Publicar

`mkdocs build` gera `site/`, que é HTML estático puro — sem servidor de
aplicação, sem banco. Basta servi-lo.

O `site_url` está configurado para `https://docs.enctex.com.br/`. Se a
documentação for para outro endereço — um subdiretório de `enctex.com.br`, por
exemplo —, ajuste `site_url` no `mkdocs.yml` antes de gerar, porque ele entra
no `sitemap.xml` e nas URLs canônicas.

## Estrutura

```
docs/
  index.md              início, com os cinco produtos
  comecar/              o que vale para todos: instalação, licença,
                        convenções, normas
  spo/                  SPO — visão geral + o que muda em relação ao SPX
  spx/                  SPX — completo (a referência da linha SP)
    manual/             como operar, aba por aba
    formulacoes/        o que calcula, com limites de validade
    referencias.md
  spx-ai/               SPX AI — visão geral + recursos de IA
  pco/                  PCO — completo (a referência da linha PC)
    manual/  formulacoes/  referencias.md
  pcx/                  PCX — visão geral + blocos flexíveis
  assets/               logotipo e favicon
  stylesheets/          ajustes sobre o tema
  javascripts/          configuração do MathJax
```

## Convenções de escrita

O padrão está estabelecido no **SPX** — replique-o nos demais produtos.

**Duas camadas, sempre.** Manual responde *como operar*; formulações respondem
*o que é calculado*. Não misture: quem procura "como exporto o DXF" não quer
ler sobre Blévot, e quem confere a formulação não quer instruções de clique.

**Toda página de formulação termina com limites de validade**, no bloco
próprio:

```markdown
!!! warning validade "Faixa de aplicação"

    - ...
```

Esse bloco tem cor própria de propósito: é a informação que separa usar de usar
errado. Ele não é rodapé.

**Fórmulas em LaTeX**, com `\[ ... \]` para bloco e `\( ... \)` em linha.

**Diagramas de fluxo são HTML e CSS**, não Mermaid — as classes `.fluxo` e
`.cadeia` em `stylesheets/extra.css`. O Material traz Mermaid embutido, mas na
versão instalada ele troca o `<pre>` por um `<div>` vazio e nunca insere o SVG,
sem erro no console. Um diagrama que depende de JS para existir é um diagrama
que pode não existir.

**Tabelas não aceitam `{: .classe }`.** O `attr_list` não se aplica a elas; o
marcador sai impresso na página. Alinhamento de coluna vem da própria linha
separadora do Markdown (`--:` para a direita).

**Alinhe números à direita** nas tabelas de parâmetros, e texto à esquerda.

## Idiomas

O site é publicado em **português, inglês e espanhol** — `/`, `/en/` e `/es/` —
pelo plugin `mkdocs-static-i18n`. O seletor fica no cabeçalho e leva à mesma
página no outro idioma.

**A navegação já está traduzida** (títulos de seção e de página, via
`nav_translations` no `mkdocs.yml`). **O conteúdo ainda não**: por
`fallback_to_default: true`, uma página sem versão traduzida é servida em
português em vez de virar 404 — o que torna a tradução incremental, página a
página, sem quebrar o site no caminho.

Para traduzir uma página, crie o arquivo irmão com o sufixo do idioma:

```
docs/spx/index.md      português (padrão)
docs/spx/index.en.md   inglês
docs/spx/index.es.md   espanhol
```

**Nada de `navigation.instant`.** O recurso é atraente, mas quebra o link
contextual do seletor: a troca de idioma passa a levar sempre para a página
inicial em vez da equivalente.

## O que falta

- **Capturas de tela** das abas. O texto foi escrito para funcionar sem elas,
  mas o manual ganha muito com imagem.
- **Tradução do conteúdo** para inglês e espanhol. A infraestrutura está de pé
  e a navegação já está traduzida; falta o texto das páginas.

  Priorize por valor: a página inicial, `comecar/` e as visões gerais de
  produto rendem mais que as formulações, que são o material mais denso e o
  menos consultado por quem chega de fora.

# Recursos de IA

O que só o SPX AI tem. Todo o resto está no
[manual do SPX](../spx/manual/interface.md).

!!! info "Onde a IA atua"

    Na **entrada de dados** e na **montagem do modelo** — não no cálculo. Ver
    [a ressalva na página do produto](index.md#a-ia-nao-entra-no-calculo).

---

## Leitura inteligente de PDFs

Extrai sondagens de laudos em PDF: profundidades, número de golpes e descrição
do solo.

A diferença para o **leitor editável de PDFs** que o SPX já tem está na
interpretação: o leitor do SPX trabalha com laudos de layout previsível; a
leitura inteligente do SPX AI lida com variação de formato, tabelas com células
mescladas e descrições fora do padrão.

### O cuidado que ela exige

!!! warning "Confira sempre a classificação do solo"

    Extração automática depende do documento. Boletins digitalizados de baixa
    qualidade, tabelas irregulares e descrições em texto livre produzem
    leituras erradas — e uma leitura errada **não se anuncia**.

    Confira a tabela resultante contra o laudo original, com atenção especial
    à **classificação do solo**: é ela que seleciona \(K\) e \(\alpha\) de
    Aoki-Velloso, \(C\) de Décourt-Quaresma, \(\alpha_T\) de Teixeira e o fator
    \(m\) das molas.

    Trocar **areia siltosa** por **silte arenoso** reduz \(K\) de 0,80
    para 0,55 MPa, **31 % a menos de resistência de ponta**. Ver
    [convenções](../comecar/convencoes.md#tipos-de-solo).

A tabela extraída é **editável**: corrija o que estiver errado antes de
calcular.

---

## Importação de planta DWG/DXF

Lê a planta de fundações e reconhece a posição das estacas, dispensando o
lançamento manual de coordenadas.

### O cuidado que ela exige

!!! warning "Confira contagem e posição"

    O reconhecimento depende de como a planta foi desenhada — camadas, blocos,
    convenções de representação. Plantas com estacas em camadas misturadas,
    representadas por blocos não padronizados ou com elementos auxiliares
    parecidos podem gerar estacas a mais ou a menos.

    Depois de importar, **confira a contagem** contra a planta e use a
    visualização 3D para flagrar posição trocada.

Lembre-se dos limites: **200 estacas no total** e **30 por bloco**.

---

## Comandos de geração

Geração de blocos e estacas por comando, em vez de montagem campo a campo.

É o recurso que mais economiza tempo em obra repetitiva: um comando que gera
quarenta blocos iguais substitui quarenta preenchimentos idênticos.

!!! tip "Gere, depois confira em 3D"

    A geração por comando é rápida o bastante para que o gargalo passe a ser a
    conferência. Use a visualização 3D — um parâmetro trocado se propaga por
    todos os blocos gerados de uma vez, e é isso que torna o recurso
    simultaneamente poderoso e perigoso.

---

## Sondagem virtual

A modelagem estratigráfica 3D do SPX permite interpolar o perfil entre furos. O
SPX AI leva isso a **sondagem virtual**: obter um perfil estimado em uma posição
onde não há furo.

!!! warning validade "Faixa de aplicação"

    Sondagem virtual é **interpolação**, não investigação. Ela estima o que
    provavelmente há entre dois furos conhecidos, supondo que as camadas variem
    de maneira regular entre eles.

    Ela não substitui furo, e a NBR 6122 continua exigindo o número de sondagens
    que exige. Camadas que mergulham de forma irregular, lentes, matacões e
    variações bruscas são exatamente o que a interpolação **não** captura — e
    são também o que mais compromete fundação.

    Use-a para entender o terreno e justificar decisões de comprimento; não para
    dispensar investigação.

---

## Assistente

Assistente integrado à interface, para consulta durante o trabalho.

!!! note "Sobre as respostas do assistente"

    O assistente auxilia a operação do programa. Como qualquer sistema desse
    tipo, ele pode errar — e não tem autoridade sobre a formulação.

    Decisões de projeto devem ser conferidas contra a
    [documentação de formulações](../spx/formulacoes/index.md) e as normas.

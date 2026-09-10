# Licenciamento

Os programas da EnCteX usam licença por chave, vinculada à máquina. A
validação é feita em servidor, com período de tolerância para trabalho sem
internet.

## Ativação

Na primeira execução o programa pede a chave de licença. Cole a chave recebida
na compra e confirme.

O que acontece nesse momento:

1. A chave é validada no servidor de licenças.
2. A máquina é **registrada** na licença, por uma impressão digital do
   equipamento.
3. A chave e a data da validação ficam gravadas nas configurações do usuário
   no Windows.

A partir daí o programa abre sem pedir nada, revalidando em segundo plano.

!!! warning "Uma licença, uma máquina"

    Cada licença tem um limite de máquinas registradas. Ao tentar ativar em um
    equipamento além do limite, o registro é recusado. Para migrar de máquina,
    veja [Troca de equipamento](#troca-de-equipamento).

## Tipos de licença

| Tipo | Como se comporta |
| :-- | :-- |
| **Vitalícia** | Não expira. Continua válida indefinidamente na máquina registrada. |
| **Mensal** | Tem data de validade. Precisa ser renovada para o programa continuar abrindo. |

O programa distingue as duas pela existência de data de expiração: licença sem
data é vitalícia. O tipo aparece na tela de licença dentro do programa.

## Trabalho sem internet

O programa **não exige conexão permanente**. Depois de a máquina ter validado
a licença ao menos uma vez, há uma carência de **7 dias** de uso sem contato
com o servidor.

O comportamento é o seguinte:

| Situação | O que acontece |
| :-- | :-- |
| Servidor responde que a licença vale | Abre normalmente e renova o carimbo de validação |
| Sem internet, validou há menos de 7 dias | Abre normalmente, dentro da carência |
| Sem internet, validou há mais de 7 dias | Não abre; peça conexão para revalidar |
| Sem internet e **nunca** validou nesta máquina | Não abre; a primeira ativação exige internet |
| Licença mensal com validade vencida | Não abre, mesmo dentro da carência |
| Servidor responde que a licença não vale mais | Não abre; a licença gravada é descartada |

!!! note "Falha de rede não cancela licença"

    Há uma distinção deliberada entre *"o servidor disse que a licença é
    inválida"* e *"não consegui falar com o servidor"*. Só o primeiro caso
    apaga a licença gravada. Uma queda de internet, um firewall corporativo ou
    uma viagem nunca fazem o programa esquecer que você tem licença — apenas
    consomem a carência.

Em campo ou em obra sem sinal, portanto: abra o programa conectado antes de
sair, e você tem uma semana de autonomia.

## Troca de equipamento

Trocar de computador exige liberar o registro da máquina antiga, porque o
limite é por equipamento registrado e não por instalação.

Entre em contato pelo [enctex.com.br](https://enctex.com.br) informando a
chave de licença e o motivo. O registro antigo é removido e a chave volta a
poder ser ativada.

!!! tip "Antes de formatar"

    Peça a liberação **antes** de formatar ou descartar a máquina. Depois, o
    equipamento não pode mais se apresentar ao servidor para ser desregistrado
    sozinho, e a liberação passa a depender de atendimento.

## Perguntas frequentes

??? question "Posso instalar em casa e no escritório?"

    Depende do limite de máquinas da sua licença. Licenças individuais
    costumam permitir um equipamento. Consulte a EnCteX para licenças com mais
    de uma máquina.

??? question "Reinstalar o Windows exige nova ativação?"

    Sim. A impressão digital do equipamento muda com a reinstalação do
    sistema, e o registro anterior precisa ser liberado.

??? question "A licença do SPX serve para o PCX?"

    Não. Cada produto tem licença própria — as chaves são emitidas por produto
    e não são intercambiáveis.

??? question "O que acontece quando a licença mensal vence no meio de um projeto?"

    O programa deixa de abrir, mas **nenhum arquivo é perdido**: projetos,
    DXF e relatórios já salvos continuam no disco e são abertos normalmente
    depois da renovação.

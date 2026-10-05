# Revisão técnica do TCC (pós-entrega)

Revisão feita antes do upgrade do site, comparando a versão original
(preservada em [`tcc-original-2025/`](../tcc-original-2025/)) com a documentação
oficial da WCAG 2.1. O objetivo foi corrigir erros de explicação e de código
**sem mudar o escopo** (continuam os mesmos 6 critérios de Nível A).

Ferramenta usada na verificação: **axe-core** (o mesmo motor de regras usado
pelo Lighthouse), mais testes manuais de teclado.

| | Versão original | Versão revisada |
| :--- | :--- | :--- |
| Falhas automáticas (axe) | 2 tipos, 11 ocorrências | 0 |
| Falha de Nível A | sim (4.1.2) | não |

---

## 1. Erros de conceito na explicação

### 1.1 "Diretriz" x "Critério de sucesso"
O site chamava 1.1.1, 1.3.1, etc. de **diretrizes**. Na WCAG, esses números
são **critérios de sucesso**. As diretrizes são o nível de cima (1.1, 1.3, 2.1…).
A hierarquia é: 4 princípios → 13 diretrizes → critérios de sucesso (A/AA/AAA).
Foi adicionada uma seção "Como a WCAG é organizada" explicando isso.

### 1.2 Critério 1.3.1: a técnica ensinada era o contrário do recomendado
O site escondia os cabeçalhos da tabela (`<thead aria-hidden="true">`) e
repetia "Coluna Preço" em texto invisível dentro de cada célula.

Problemas:
- Com `<th scope="col">`, o leitor de tela **já anuncia o cabeçalho sozinho**
  quando o usuário muda de coluna. Não é preciso repetir nada.
- Esconder o `<thead>` **quebra a relação** entre cabeçalho e dado, que é
  justamente o que o 1.3.1 pede para preservar. Os comandos de navegação em
  tabela (ex.: `Ctrl+Alt+setas` no NVDA) deixam de funcionar direito.
- O texto dizia que "o usuário cego navega célula por célula, perdendo o
  contexto", mas isso só acontece em tabelas **mal marcadas**.
- Inconsistências: o código mostrava `Preço: R$ 50`, a demonstração usava
  `Coluna Preço` e `R$ 150`.

Correção: tabela com `<caption>`, `<th scope="col">` e nada escondido.

### 1.3 Critério 2.4.4: faltava o "em contexto"
O nome oficial é **Finalidade do link (em contexto)**. No Nível A, o link pode
ser entendido pelo texto dele **junto com a frase/parágrafo/item de lista em
que está**. Exigir que o texto do link funcione sozinho é o critério **2.4.9
(AAA)**. A explicação agora deixa essa diferença clara (continua recomendando
links descritivos como boa prática).

### 1.4 Critério 3.3.2: nome e alcance
O nome oficial é **Rótulos ou instruções**. A ligação `for`/`id` é a melhor
forma de atendê-lo, mas ela também atende 1.3.1 e 4.1.2. Foi incluído que o
`placeholder` não substitui o rótulo. O exemplo passou a usar `type="email"`
em vez de `type="text"` para um campo de e-mail.

### 1.5 Critério 2.1.1: quem usa teclado
Além de pessoas cegas e com deficiência motora, foram citados acionadores,
controle por voz e teclados adaptados, e as teclas `Enter`/`Espaço`
(antes só se falava em `Tab`). O exemplo de botão dizia "Clique Aqui", o que
contradizia a lição do 2.4.4. Foi trocado por "Salvar".

### 1.6 Critério 4.1.2: o que é "nome, função, valor"
A explicação falava só de `aria-label`. Agora explica as três partes (nome,
função e estado/valor) e a **primeira regra da ARIA** (prefira HTML nativo).
O `alert('Leitor leu: Excluir Item')` dava a entender que o leitor de tela
"leu" algo ao clicar. Isso foi substituído por uma simulação explícita.

### 1.7 Linguagem
"Deficientes visuais" / "o cego" → "pessoas com deficiência visual" /
"pessoa cega" (linguagem que coloca a pessoa em primeiro lugar, como na Lei
Brasileira de Inclusão).

### 1.8 Afirmação de conformidade
O rodapé dizia "Este site está em conformidade com WCAG 2.1 Nível A", mas o
site falhava no 4.1.2 (ver 2.1). O texto agora diz que o site **busca atender**
ao Nível A.

---

## 2. Erros de acessibilidade no próprio site

### 2.1 `aria-hidden` em áreas com elementos focáveis (falha de Nível A, 4.1.2)
As áreas de código/demonstração tinham `aria-hidden="true"`, mas dentro delas
havia botões, links e campos. Resultado: o usuário de teclado chega no botão,
mas o leitor de tela **não diz nada**. É a falha `aria-hidden-focus` do axe.
Além disso, o público principal do site (quem usa leitor de tela) não
conseguia ouvir os exemplos de código. Os códigos agora ficam em
`<pre><code>`, legíveis por todos.

### 2.2 `tabindex="0"` em títulos e parágrafos
Quase todo texto tinha `tabindex="0"`. Isso parece ajudar, mas atrapalha:
- Quem usa leitor de tela lê o texto com as setas e atalhos de título (`H`),
  não com `Tab`.
- Quem usa só o teclado (sem leitor) precisa passar por dezenas de paradas
  que não fazem nada antes de chegar a um botão.

A regra é: **`Tab` é só para elementos interativos**. Todos foram removidos.

### 2.3 Rótulo visível x nome acessível (2.5.3, Nível A)
Os botões mostravam "A+" e "A-", mas o nome acessível era "Aumentar Fonte".
Quem usa controle por voz fala o que vê ("clicar A mais") e o comando não
funciona. Agora o nome é "A+ (aumentar fonte)", que contém o texto visível.

### 2.4 Botão de alto contraste
Mudava o texto **e** o `aria-pressed` ao mesmo tempo, o que fazia o leitor
anunciar coisas como "Desativar alto contraste, botão, pressionado". Agora o
texto é fixo e só o estado (`aria-pressed`) muda. O emoji 🌗 ficou com
`aria-hidden` para não ser lido como "lua crescente".

### 2.5 Demonstração do 1.1.1 dependia de mouse
O "passe o mouse aqui" usava o atributo `title`, que não aparece com teclado
nem em celular. Foi trocado por botões "Sem alt / Com alt" com a simulação
do que o leitor anuncia.

### 2.6 Mensagens sem anúncio
A mensagem "O evento de clique funcionou!" aparecia na tela, mas o leitor de
tela não a anunciava. As saídas das demonstrações agora usam `role="status"`.

### 2.7 Contraste (Nível AA, já preparando o upgrade)
Alguns textos não atingiam 4,5:1 (ex.: link de pular conteúdo em
`#f43f5e`, etiquetas `Diretriz` em `#6366f1`). As cores foram ajustadas.

---

## 3. Refatoração de código

- **Separação de arquivos:** `index.html` (conteúdo), `css/style.css`
  (aparência) e `js/main.js` (comportamento).
- **Sem estilos inline nem `onclick` no HTML:** o JavaScript usa
  `data-action` e `data-message`, então novas demonstrações não precisam de
  JavaScript novo.
- **Alto contraste só com variáveis CSS:** antes havia dezenas de
  `!important`. Agora o modo apenas redefine as cores.
- **Preferências salvas** (contraste e fonte) no navegador.
- **Roles redundantes removidos:** `role="banner"`, `role="main"` e
  `role="contentinfo"` já vêm de `<header>`, `<main>` e `<footer>`.
- **Sumário** com links para cada critério e `prefers-reduced-motion`
  respeitado.
- Erro de digitação removido (`<span class="label certo" a>`).
- Cada critério agora mostra o código **errado** e o **certo**, como o README
  já prometia.

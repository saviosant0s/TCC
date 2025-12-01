

#### 1. Princípio Compreensível (A Lógica da Interface)
*(Inicie logo após o colega anterior. Transmita a ideia de que a navegação precisa fazer sentido cognitivo).*

"Dando sequência aos pilares da WCAG, eu vou apresentar o princípio **Compreensível**.
A premissa aqui é simples, mas vital: a interface não pode exigir que o usuário tenha que 'adivinhar' como ela funciona.

Nós focamos em três diretrizes principais dentro desse tópico:
* [cite_start]**Legibilidade:** No nosso código, definimos o idioma da página (`lang="pt-br"`)[cite: 218]. Isso parece um detalhe menor, mas é o que garante que o leitor de tela use a pronúncia em português e não com sotaque inglês, o que tornaria o site ininteligível.
* **Previsibilidade:** Garantimos que o site funcione de forma consistente. [cite_start]Por exemplo, ao receber foco em um menu, o site não muda de contexto ou abre janelas inesperadamente[cite: 223]. O usuário precisa estar no controle.
* **Assistência de Entrada:** Isso é crucial em formulários. Quando o usuário comete um erro, não basta ficar vermelho visualmente. [cite_start]O sistema precisa identificar o erro via texto e descrever como corrigir[cite: 229]. Se o usuário cego não recebe esse feedback textual, ele fica preso no formulário sem saber o motivo."

#### 2. Princípio Robusto (A Qualidade do Código)
*(Aqui você sobe o nível técnico. É sobre compatibilidade).*

"O último princípio teórico é o **Robusto**. Ele trata da capacidade do conteúdo ser interpretado fielmente por diferentes agentes de usuário, desde navegadores antigos até as tecnologias assistivas mais modernas.

[cite_start]Para atingir essa robustez, seguimos rigorosamente a diretriz de **Compatibilidade**[cite: 236].
* Na prática, isso significou escrever um HTML 'limpo'. [cite_start]Garantimos que todas as *tags* tenham início e fim, que os elementos estejam aninhados corretamente e, principalmente, que não existam IDs duplicados na página[cite: 238].
* Um código 'sujo' pode ser corrigido visualmente pelo navegador, mas costuma 'quebrar' a interpretação do leitor de tela.
* [cite_start]Além disso, garantimos que todos os componentes de interface tenham **Nome, Função e Valor** definidos programaticamente[cite: 239], para que a tecnologia assistiva saiba exatamente o que é cada elemento."

---

#### 3. Aplicação Prática: O Website Educacional (O Produto Final)
*(Esta é a parte mais importante. Dedique mais tempo aqui. Explique as funcionalidades como um desenvolvedor).*

"Para validar toda essa pesquisa teórica, nós desenvolvemos um produto prático: um **Website Educacional sobre Acessibilidade**.
[cite_start]O objetivo foi duplo: criar um ambiente acessível e, ao mesmo tempo, ensinar outros desenvolvedores a replicarem essas técnicas[cite: 243].

Vou destacar quatro implementações técnicas que realizamos no projeto:"

**A) Estrutura Semântica e Navegação (HTML5 Nativo)**
"Primeiro, a arquitetura da informação. Abandonamos o uso excessivo de `divs` genéricas.
[cite_start]Construímos o layout usando as *Landmark Roles* do HTML5: `<header>`, `<nav>`, `<main>` e `<footer>`[cite: 247].
Isso permite que o deficiente visual salte grandes blocos de conteúdo.
Implementamos também o **'Skip Link'** (link de ir para o conteúdo). [cite_start]Ele fica oculto no CSS, mas é o primeiro item focável ao teclar TAB, permitindo pular o menu e ir direto ao texto principal[cite: 249]. Isso é usabilidade essencial para navegação via teclado."

**B) Tratamento de Imagens (Contexto e Decoração)**
"Segundo, a gestão de mídias. Demonstramos no site o uso correto do atributo `alt`.
Fizemos questão de diferenciar: imagens informativas recebem descrição detalhada. [cite_start]Porém, imagens puramente decorativas receberam o atributo `alt=""` (vazio)[cite: 253].
Isso instrui o leitor de tela a ignorar totalmente aquele elemento, evitando poluição sonora para o usuário."

**C) Ferramentas de Autonomia (Contraste e Fonte)**
"Terceiro, implementamos ferramentas de autonomia na interface.
[cite_start]Desenvolvemos um script para o botão de **Alto Contraste**[cite: 257]. [cite_start]Diferente de extensões automáticas, nossa solução altera as variáveis de CSS para garantir que a relação de contraste entre texto e fundo atinja, no mínimo, a proporção de 4.5:1 ou 7:1, conforme a WCAG[cite: 181].
[cite_start]Também permitimos o redimensionamento de fonte[cite: 259], garantindo que o layout seja responsivo e não 'quebre' ou sobreponha textos quando o usuário amplia a leitura."

**D) Interatividade e WAI-ARIA (Semântica Avançada)**
"Por fim, a interatividade. No capítulo de desenvolvimento, mostramos o problema dos 'botões falsos'. Muitos sites usam `div` com evento de clique, o que é invisível para o teclado.
[cite_start]Nós utilizamos elementos nativos como `<button>` e `<a>`, que já trazem acessibilidade de fábrica[cite: 263].
E aplicamos a especificação **WAI-ARIA** de forma cirúrgica. Um exemplo claro no nosso site é o botão de 'Excluir', que é apenas um ícone de lixeira visualmente. [cite_start]Para o cego, usamos o atributo `aria-label='Excluir Item'`, garantindo que a função seja anunciada, mesmo sem texto visível na tela[cite: 270]."

---

#### 4. Conclusão da Fala

[cite_start]"Concluindo minha parte: o site foi validado utilizando a ferramenta **Lighthouse**, garantindo uma pontuação alta em acessibilidade e performance[cite: 286].
Com isso, provamos que acessibilidade não é um 'bicho de sete cabeças', mas sim uma questão de boas práticas de codificação que beneficiam a todos.

Agradeço a atenção e passo a palavra para as considerações finais."


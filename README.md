# Guia Prático de Acessibilidade Web (WCAG 2.1)

> **Trabalho de Conclusão de Curso (TCC)** | Curso Técnico em Informática - IFBA Valença

Este repositório contém o código-fonte do **Website Educacional Acessível**, desenvolvido como Trabalho de Conclusão de Curso. O objetivo do projeto é demonstrar, na prática e com exemplos interativos, como aplicar os critérios de sucesso da **WCAG 2.1 (Web Content Accessibility Guidelines)** de Nível A, focando na inclusão de pessoas com deficiência visual.

## Sobre o Projeto

A acessibilidade na web é um direito, mas muitos desenvolvedores não sabem por onde começar. Este projeto resolve isso criando uma "documentação viva": um site que explica a regra de acessibilidade e, ao mesmo tempo, aplica essa regra na sua própria estrutura.

O projeto foi validado utilizando ferramentas como o **Google Lighthouse**, atingindo pontuação de acessibilidade superior a 90.

### Funcionalidades de Acessibilidade Implementadas

O site não apenas ensina, mas **utiliza** os seguintes recursos nativos e programados:

* **Barra de Acessibilidade:** Ferramentas para ativar Alto Contraste (tema escuro/amarelo) e Redimensionamento de Fonte, com as preferências salvas no navegador.
* **Skip Link (Pular para conteúdo):** Navegação eficiente para usuários de teclado, permitindo pular o menu e ir direto ao conteúdo principal.
* **Navegação por Teclado:** Foco visível (`outline`) customizado e ordem de tabulação lógica.
* **Semântica HTML5:** Uso correto de `<main>`, `<header>`, `<nav>`, `<button>` em vez de `<div>`.
* **WAI-ARIA:** Uso de `aria-label`, `aria-hidden` e `role` para complementar a semântica onde necessário.
* **Demonstrações Interativas:**
    * Exemplo incorreto (acessibilidade quebrada) e exemplo correto (código acessível) lado a lado.
    * Simulação do que o leitor de tela anuncia em cada caso.

## Critérios de Sucesso Abordados

O guia foca em critérios de sucesso essenciais de **Nível A**, explicados com exemplos de código. (Na WCAG, os números como 1.1.1 são *critérios de sucesso*; as *diretrizes* são os grupos de dois dígitos, como 1.1.)

| Critério | Nome | Explicação Prática no Site |
| :--- | :--- | :--- |
| **1.1.1** | Conteúdo Não Textual | Uso correto de textos alternativos (`alt`) em imagens. |
| **1.3.1** | Informações e Relações | Tabelas com `<th>` e `scope` para o leitor anunciar os cabeçalhos. |
| **2.1.1** | Teclado | A importância de não usar "botões falsos" (`div` clicável). |
| **2.4.4** | Finalidade do Link (em contexto) | Evitar links vagos como "Clique aqui". |
| **3.3.2** | Rótulos ou Instruções | Associação correta entre `label` e `input` em formulários. |
| **4.1.2** | Nome, Função, Valor | Uso de `aria-label` em botões de ícone (sem texto visual). |

## Tecnologias Utilizadas

O projeto foi desenvolvido com tecnologias nativas para garantir leveza e máxima compatibilidade:

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) **HTML5 Semântico**
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) **CSS3 (CSS Variables)**
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) **JavaScript (Vanilla)**

## Como Rodar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/saviosant0s/TCC.git](https://github.com/saviosant0s/TCC.git)
    ```
2.  **Abra o arquivo:**
    Basta abrir o arquivo `index.html` em qualquer navegador moderno. Não é necessária instalação de dependências ou servidores complexos.

### Estrutura de pastas

```
index.html          → conteúdo (HTML semântico)
css/style.css       → estilos (cores em variáveis, incluindo o alto contraste)
js/main.js          → barra de acessibilidade e demonstrações interativas
docs/revisao.md     → revisão técnica feita após o TCC (erros corrigidos e porquês)
tcc-original-2025/  → versão original, exatamente como foi apresentada na banca
```

## Versão original do TCC

A versão entregue e apresentada em 2025 está preservada sem alterações na pasta [`tcc-original-2025/`](tcc-original-2025/). O site da raiz é a evolução do projeto depois do TCC.

## Autores

Trabalho desenvolvido pelos formandos do Curso Técnico Integrado em Informática do IFBA (Campus Valença - 2025):

* **Sávio Santos Rocha**
* Gabriel de Jesus dos Santos
* Luiza Helena Dos Santos Muniz
* Maria Fernanda Souza De Oliveira Silva
* Wallipe Santos de Jesus

**Orientador:** Prof. Addson Costa.

---
*Este projeto foi desenvolvido com fins educacionais como requisito para a obtenção do título de Técnico em Informática.*


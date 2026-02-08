# Guia Prático de Acessibilidade Web (WCAG 2.1)

> **Trabalho de Conclusão de Curso (TCC)** | Curso Técnico em Informática - IFBA Valença

Este repositório contém o código-fonte do **Website Educacional Acessível**, desenvolvido como Trabalho de Conclusão de Curso. O objetivo do projeto é demonstrar, na prática e com exemplos interativos, como aplicar as diretrizes da **WCAG 2.1 (Web Content Accessibility Guidelines)** no Nível A, focando na inclusão de pessoas com deficiência visual.

## Sobre o Projeto

A acessibilidade na web é um direito, mas muitos desenvolvedores não sabem por onde começar. Este projeto resolve isso criando uma "documentação viva": um site que explica a regra de acessibilidade e, ao mesmo tempo, aplica essa regra na sua própria estrutura.

O projeto foi validado utilizando ferramentas como o **Google Lighthouse**, atingindo pontuação de acessibilidade superior a 90.

### Funcionalidades de Acessibilidade Implementadas

O site não apenas ensina, mas **utiliza** os seguintes recursos nativos e programados:

* **Barra de Acessibilidade:** Ferramentas para ativar Alto Contraste (tema escuro/amarelo) e Redimensionamento de Fonte.
* **Skip Link (Pular para conteúdo):** Navegação eficiente para usuários de teclado, permitindo pular o menu e ir direto ao conteúdo principal.
* **Navegação por Teclado:** Foco visível (`outline`) customizado e ordem de tabulação lógica.
* **Semântica HTML5:** Uso correto de `<main>`, `<header>`, `<nav>`, `<button>` em vez de `<div>`.
* **WAI-ARIA:** Uso de `aria-label`, `aria-hidden` e `role` para complementar a semântica onde necessário.
* **Demonstrações Interativas:**
    * Exemplo incorreto (acessibilidade quebrada).
    * Exemplo correto (código acessível).
    * Simulação do feedback de Leitores de Tela.

## Diretrizes WCAG Abordadas

O guia foca nas diretrizes essenciais de **Nível A**, explicadas com exemplos de código:

| Diretriz | Nome | Explicação Prática no Site |
| :--- | :--- | :--- |
| **1.1.1** | Conteúdo Não Textual | Uso correto de textos alternativos (`alt`) em imagens. |
| **1.3.1** | Informações e Relações | Estrutura de tabelas acessíveis para leitores de tela. |
| **2.1.1** | Teclado | A importância de não usar "botões falsos" (`div` clicável). |
| **2.4.4** | Propósito do Link | Evitar links vagos como "Clique aqui". |
| **3.3.2** | Rótulos (Labels) | Associação correta entre `label` e `input` em formulários. |
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


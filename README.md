# 🚗 Sistema de Gestão de Revenda de Veículos

[![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue?style=flat)](https://github.com/SEU_USUARIO_GITHUB/SEU_REPOSITORIO)
[![Stack](https://img.shields.io/badge/Stack-Full--Stack-green?style=flat)](https://github.com/SEU_USUARIO_GITHUB/SEU_REPOSITORIO)
[![Backend](https://img.shields.io/badge/Backend-Spring%20Boot-brightgreen?style=flat&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![Frontend](https://img.shields.io/badge/Frontend-Angular-red?style=flat&logo=angular&logoColor=white)](https://angular.io/)
[![Database](https://img.shields.io/badge/Database-PostgreSQL-blue?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](LICENSE)

Um sistema completo de gestão para revenda de veículos, focado em uma interface de usuário moderna. Este projeto demonstra a construção de uma aplicação Full-Stack robusta e escalável, ideal para gerenciamento de estoque e otimização de processos de venda.

## ✨ Funcionalidades Principais

### Backend (Spring Boot)
* **Gerenciamento Completo de Veículos (CRUD):** Permite o cadastro, listagem, edição e exclusão de veículos no sistema.
* **Estrutura de Segurança Implementada:** Base sólida para autenticação e autorização com JWT (JSON Web Tokens). Inclui definições de usuários, perfis (roles) e endpoints de `signup` (registro) e `signin` (login) prontos para integração. (EM DESENVOLVIMENTO)
* **APIs RESTful:** Comunicação clara e eficiente entre o backend e o frontend, seguindo os princípios REST.

### Frontend Web (Angular)
* **Interface de Usuário Profissional e Intuitiva:**
    * **Design Moderno com Angular Material:** Utiliza um tema de cores vibrante com tons de roxo, proporcionando uma experiência visual coesa, responsiva e com elementos "elevados" (cards, sombras).
    * **CRUD de Veículos Visualmente Atrativo:**
        * **Lista de Veículos:** Apresentação em uma tabela paginada com opções de ordenação e chips coloridos para o status do veículo, facilitando a visualização rápida.
        * **Formulário de Cadastro/Edição:** Layout compacto e responsivo, com campos de entrada e seleção (`mat-select`) estilizados, e validações em tempo real para garantir a integridade dos dados.
        * **Detalhes do Veículo:** Página dedicada com apresentação clara e organizada de todas as informações do veículo.
    * **Experiência do Usuário (UX) Aprimorada:** Navegação fluida, uso inteligente de ícones Material Design e tradução para Português (BR) no paginador da tabela, tornando o uso mais agradável e eficiente.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e ferramentas:

### Backend (Java)

[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F7?style=for-the-badge&logo=spring-boot)](https://spring.io/projects/spring-boot)
[![Spring Data JPA](https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-data-jpa)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)](https://maven.apache.org/)

* **[Java 17](https://www.java.com/):** Linguagem de programação principal.
* **[Spring Boot 3.5.0](https://spring.io/projects/spring-boot):** Microframework para desenvolvimento rápido de aplicações Java.
    * **Spring Data JPA:** Simplifica o acesso e manipulação de dados com bancos de dados relacionais.
    * **Lombok:** Ferramenta para reduzir o código boilerplate em classes Java.
    * **Hibernate Validator:** Implementação de validação de beans (JSR 380).
* **[PostgreSQL](https://www.postgresql.org/):** Sistema de gerenciamento de banco de dados relacional.
* **[Maven](https://maven.apache.org/):** Ferramenta de automação de build e gerenciamento de dependências.

### Frontend (Web)

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Angular Material](https://img.shields.io/badge/Angular_Material-A1B5C1?style=for-the-badge&logo=angularjs&logoColor=white)](https://material.angular.io/)
[![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=rxjs&logoColor=white)](https://rxjs.dev/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

* **[Angular 17 LTS](https://angular.io/):** Framework para construção de Single Page Applications (SPAs).
    * **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
    * **Angular Material:** Biblioteca de componentes de UI que implementa o Material Design.
    * **RxJS:** Biblioteca para programação reativa, facilitando o trabalho com eventos assíncronos.
    * **Angular Router:** Módulo para gerenciar a navegação entre as diferentes views da aplicação.
* **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5):** Estrutura semântica das páginas web.
* **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS):** Para estilização e responsividade da interface.

### Ferramentas de Desenvolvimento
-   **[Git](https://git-scm.com/) / [GitHub](https://github.com/):** Sistema de controle de versão e plataforma de hospedagem de código.

## 🚀 Como Rodar o Projeto

Siga estes passos para configurar e executar o sistema em sua máquina local.

### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas e configuradas:
-   **Java Development Kit (JDK) 17 ou superior**
-   **Maven** (versão 3.6+ recomendada)
-   **Node.js LTS** (versão 18+ recomendada)
-   **Angular CLI** (instale globalmente via `npm install -g @angular/cli`)
-   **Servidor PostgreSQL** (rodando e acessível)

### 1. Configuração do Banco de Dados (PostgreSQL)
- Crie um banco de dados PostgreSQL. Você pode nomeá-lo como `revendaveiculos` ou escolher outro nome de sua preferência.
- Crie um usuário e uma senha dedicados para que a aplicação possa acessar este banco de dados.

### 2. Configuração e Inicialização do Backend
1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/mcamargos/sistema-revenda-veiculos.git
    cd sistema-revenda-/sistema-backend
    ```
2.  **Atualize as configurações do banco de dados e segurança:**
    Abra o arquivo `src/main/resources/application.properties` e edite as seguintes propriedades com suas credenciais e a chave secreta JWT:
    ```properties
    spring.datasource.username=seu_usuario_postgres
    spring.datasource.password=sua_senha_postgres
    ```
3.  **Construa e execute o backend:**
    ```bash
    ./mvnw clean install # Constrói o projeto e baixa dependências
    ./mvnw spring-boot:run # Inicia o servidor Spring Boot
    ```
    O backend será iniciado na porta `8080`. Aguarde a mensagem `Tomcat started on port 8080` no console do terminal.

### 3. Configuração e Inicialização do Frontend Web
1.  **Navegue para a pasta do frontend em um NOVO terminal:**
    ```bash
    cd ../sistema-frontend-web
    ```
    *(Mantenha seu `sistema-backend` rodando no terminal anterior)*
2.  **Instale as dependências do Angular:**
    ```bash
    npm install
    ```
3.  **Execute o frontend:**
    ```bash
    ng serve -o
    ```
    A aplicação será compilada e aberta automaticamente no seu navegador padrão na porta `4200`.

## 🖥️ Como Usar o Sistema (Frontend Web)

Com o backend e o frontend rodando, explore a interface web do sistema:

-   A página inicial exibirá a **Lista de Veículos** que estão cadastrados no seu banco de dados.
-   Utilize o botão "**+ Adicionar Novo Veículo**" para cadastrar novos carros. Preencha o formulário e observe as validações em tempo real.
-   Na tabela da lista, utilize os **botões de ação** (ícones na coluna "Ações") para:
    -   Ver **detalhes** completos de um veículo específico.
    -   **Editar** as informações de um veículo existente.
    -   **Excluir** um veículo do sistema.
-   Experimente a **paginação** e a **ordenação** clicando nos cabeçalhos da tabela.
-   Observe a **responsividade** do layout ao redimensionar a janela do navegador.

## 🛣️ Próximos Passos (Roadmap)

Este projeto está em constante evolução. As próximas etapas planejadas incluem:

-   **Finalização do Módulo de Segurança:**
    -   Implementar as telas de **Login** e **Registro** no frontend.
    -   Integrar o consumo da API de autenticação no Angular e gerenciar o token JWT (armazenamento, interceptor HTTP).
    -   Proteger as rotas do frontend (`AuthGuards`) e os endpoints do backend (`@PreAuthorize`) com base nos perfis de acesso (roles).
-   **Gerenciamento Completo de Outras Entidades:** Implementar as funcionalidades CRUD para `Clientes` e `Fornecedores`.
-   **Módulo de Vendas:** Desenvolver a funcionalidade de registro e acompanhamento de vendas.
-   **Desenvolvimento de Aplicativo Mobile:** Iniciar a criação do aplicativo mobile utilizando React Native, replicando as funcionalidades essenciais.
-   **Relatórios e Dashboard:** Adicionar uma seção para visualização de métricas e relatórios relevantes.

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues para reportar bugs ou sugerir melhorias, ou Pull Requests com suas implementações.

## 📧 Contato


-   **GitHub:** [Seu Usuário GitHub](https://github.com/mcamargos)
-   **LinkedIn:** [Seu Perfil LinkedIn](https://www.linkedin.com/in/camargosdantas/)

---

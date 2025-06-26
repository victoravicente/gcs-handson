# Laboratório Prático de Entrega Contínua (CD)

[![Status do Pipeline de CI/CD](https://github.com/arthurramires/gcs-handson/actions/workflows/pipeline.yml/badge.svg)](https://github.com/arthurramires/gcs-template/actions)

Este repositório serve como projeto-base para a aula prática de Gestão de Configuração de Software (GCS), com foco na implementação de um pipeline de Entrega Contínua.

O projeto consiste em uma aplicação web simples, construída com Vite.js, e já possui uma esteira de **Integração Contínua (CI)** configurada, que valida o código através de testes unitários e verificação de estilo (linting) a cada novo commit.

## 🚀 Sobre o Desafio do Laboratório

Atualmente, este projeto possui uma esteira de CI configurada no arquivo `.github/workflows/pipeline.yml`. O seu desafio neste laboratório é **evoluir esta esteira para um fluxo completo de Entrega Contínua (CD)**, adicionando um novo estágio (job) que fará o build e o deploy automático da aplicação para o GitHub Pages.

## 🛠️ Tecnologias Utilizadas

* **Ambiente de Desenvolvimento:** GitHub Codespaces
* **Build Tool:** Vite.js
* **Testes:** Vitest & JSDOM
* **Qualidade de Código:** ESLint
* **Automação (CI/CD):** GitHub Actions
* **Hospedagem (Deploy):** GitHub Pages

## 📋 Como Utilizar este Template

Para iniciar o laboratório, siga os passos abaixo:

1.  **Faça um Fork do Repositório**
    Clique no botão "Fork" no canto superior direito desta página para criar uma cópia deste repositório na sua própria conta do GitHub.

2.  **Inicie o GitHub Codespace**
    No seu repositório *forkado*, clique no botão verde `<> Code`, vá para a aba "Codespaces" e clique em "Create codespace on main". Isso abrirá um ambiente de desenvolvimento completo no seu navegador.

3.  **Instale as Dependências**
    Quando o Codespace carregar, um terminal aparecerá na parte inferior. Execute o seguinte comando para instalar todas as dependências do projeto:
    ```bash
    npm install
    ```

4.  **Verifique a Configuração Inicial**
    Para garantir que tudo está funcionando, rode os comandos da esteira de CI localmente:
    ```bash
    # Roda os testes unitários
    npm test

    # Roda a verificação de estilo de código
    npm run lint
    ```
    Ambos os comandos devem ser executados com sucesso e sem erros. Agora você está pronto para começar o desafio!

## ⚙️ Comandos Úteis

Todos os comandos devem ser executados no terminal do Codespace.

* `npm run dev`: Inicia o servidor de desenvolvimento local.
* `npm test`: Roda a suíte de testes unitários uma vez.
* `npm run lint`: Executa a análise estática do código em busca de erros de padrão.
* `npm run build`: Gera a versão de produção do site na pasta `/dist`.

---

## 📫 Contato

<p align="left">
  <a href="https://www.linkedin.com/in/arthur-ramires-rodrigues-neto-9687a1193/" target="_blank">
    <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://instagram.com/aarthurito" target="_blank">
    <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
  </a>
  <a href="mailto:arthur.ramires@ufms.br">
    <img src="https://img.shields.io/badge/-Email-%23D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
</p>
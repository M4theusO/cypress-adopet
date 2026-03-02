Feature: Autenticação do usuário

  Como visitante do AdoPet
  Quero realizar login na plataforma
  Para acessar o sistema

  Background:
    Given que estou na página inicial do AdoPet

  Scenario: Login com credenciais válidas pela página principal
    When clico no botão "Login"
    And preencho o campo "Email" com "john.doe@example.com"
    And preencho o campo "Senha" com "Password123"
    And clico no botão "Entrar"
    Then devo ser redirecionado para a página "/home"

  Scenario: Tentativa de login com credenciais inválidas pela página principal
    When clico no botão "Login"
    And preencho o campo "Email" com "invalidemail.com"
    And preencho o campo "Senha" com "invalidpassword"
    And clico no botão "Entrar"
    Then devo visualizar mensagem de erro na tela

  Scenario: Login com credenciais válidas através do ícone de mensagens
    When clico no ícone de mensagens no header
    And preencho o campo "Email" com "john.doe@example.com"
    And preencho o campo "Senha" com "Password123"
    And clico no botão "Entrar"
    Then devo ser redirecionado para a página "/home"

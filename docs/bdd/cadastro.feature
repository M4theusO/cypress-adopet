Feature: Cadastro de usuário

  Como um visitante do AdoPet
  Quero me cadastrar na plataforma
  Para poder utilizar os recursos disponíveis

  Background:
    Given que estou na página inicial do AdoPet
    And clico no botão "Cadastrar"

  Scenario: Cadastro realizado com sucesso
    When preencho o campo "Nome" com "John Doe"
    And preencho o campo "Email" com "john.doe@example.com"
    And preencho o campo "Senha" com "Password123"
    And preencho o campo "Confirmar senha" com "Password123"
    And clico no botão "Cadastrar"
    Then o cadastro deve ser realizado com sucesso

  Scenario: Tentativa de cadastro com campos vazios
    When clico no botão "Cadastrar" sem preencher os campos
    Then devo visualizar mensagens de erro na tela

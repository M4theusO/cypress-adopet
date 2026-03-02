Feature: Página home

  Scenario: Acessar a página home diretamente pela URL
    Given que acesso a URL "/home"
    Then devo permanecer na página "/home"

  Scenario: Tentar falar com o responsável por um pet sem estar logado
    Given que estou na página "/home"
    When clico na opção "Falar com responsável" de um pet
    Then devo ser redirecionado para a página "/login"

describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
  })

  describe('Login pela página principal', () => {
    beforeEach(() => {
      cy.get('[data-test="login-button"]').click()
      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode: 400, }).as('stubPost')
    })

    it('Deve preencher os campos de login corretamente e autenticar o usuário', () => {
      cy.login('john.doe@example.com', 'Password123')
    })

    it('Deve exibir mensagem de erro ao tentar fazer login com credenciais inválidas', () => {
      cy.login('invalidemail.com', 'invalidpassword')
      cy.get('.error').should('be.visible')
    })

    it('Deve exibir mensagem de erro ao tentar fazer login com email válido e senha inválida', () => {
      cy.login('john.doe@example.com', 'Password123')
      cy.wait('@stubPost')
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
  })

  describe('Fazer login através do ícone de mensagens', () => {
    it('Deve preencher os campos de login corretamente e autenticar o usuário', () => {
      cy.get('.header__message').click()
      cy.login('john.doe@example.com', 'Password123')
    })
  })

}) 
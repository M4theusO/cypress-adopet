describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
  })

  describe('Login pela página principal', () => {
    beforeEach(() => {
      cy.get('[data-test="login-button"]').click()
    })

    it('Deve preencher os campos de login corretamente e autenticar o usuário', () => {
      cy.get('[data-test="input-loginEmail"]').type('matthheus.1414@gmail.com')
      cy.get('[data-test="input-loginPassword"]').type('Matheus2309')
      cy.get('[data-test="submit-button"]').click()
      cy.url().should('include', '/home')
    })

    it('Deve exibir mensagem de erro ao tentar fazer login com credenciais inválidas', () => {
      cy.get('[data-test="input-loginEmail"]').type('invalidemail.com')
      cy.get('[data-test="input-loginPassword"]').type('invalidpassword')
      cy.get('[data-test="submit-button"]').click()
      cy.get('.error').should('be.visible')
    }) 
  })

  describe('Fazer login através do ícone de mensagens', () => {
    beforeEach(() => {
      cy.get('.header__message').click()
    })
    it('Deve preencher os campos de login corretamente e autenticar o usuário', () => {
      cy.get('[data-test="input-loginEmail"]').type('matthheus.1414@gmail.com')
      cy.get('[data-test="input-loginPassword"]').type('Matheus2309')
      cy.get('[data-test="submit-button"]').click()
      cy.url().should('include', '/home')
    })
  })
})
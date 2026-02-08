describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
    cy.get('[data-test="input-name"]').type('John Doe')
    cy.get('[data-test="input-email"]').type('john.doe@example.com')
    cy.get('[data-test="input-password"]').type('Password123')
    cy.get('[data-test="input-confirm-password"]').type('Password123')
    cy.get('[data-test="submit-button"]').click()
  })
})

describe('Página de principal', () => {
  it('Deve carregar a página corretamente e clicar no botão ‘Ver pets disponíveis para adoção', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('.button[href="/home"]').click()
    cy.url().should('include', '/home')
  })

  it('Visita a página de principal do AdoPet e testa os botões header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[href="/"]').click()
    cy.url().should('include', '/')
    cy.get('[href="/mensagem"]').click()
    cy.url().should('include', '/login')
  })
})

describe('Página de login', () => {
  it('Visitar a página de login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
    cy.url().should('include', '/login')
  })
})

describe('Página home', () => {
  it('Visitar a página home', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
    cy.url().should('include', '/home')
  })
  
  it('Clicar em falar com responsavel no card de um pet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
    cy.get('.card').first().find('[href="/mensagem"]').click()
    cy.url().should('include', '/login')
  })
})

describe('Página home', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
  })

  it('Visitar a página home', () => {
    cy.url().should('include', '/home')
  })
  
  it('Clicar em falar com responsavel no card de um pet', () => {
    cy.get('.card').first().find('[href="/mensagem"]').click()
    cy.url().should('include', '/login')
  })

  it('Deve exibir imagens de pets na home', () => {
    cy.get('img').should('have.length.greaterThan', 0)
  })
})
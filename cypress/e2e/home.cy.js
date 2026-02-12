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
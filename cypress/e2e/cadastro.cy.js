import { usuarios } from '../fixtures/usuarios.json';

describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
  })

  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('John Doe', 'john.doe@example.com', 'Password123')
  })

  it('Preencher os campos de formulário incorretamente e exibir mensagem de erro', () => {
    cy.get('[data-test="submit-button"]').click()
    cy.get('.error').should('be.visible')
  })

  describe('Cadastro em massa',()=>{
    usuarios.forEach(usuario => {
      it('Deve cadastrar um novo usuário com os dados fornecidos', () => {
          cy.cadastrar(usuario.name, usuario.email, usuario.password);
      })
    })
  })  
})

/*describe('Página de principal', () => {
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
})*/

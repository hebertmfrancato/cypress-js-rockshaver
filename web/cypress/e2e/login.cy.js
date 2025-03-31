describe('Login', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Logar com sucesso', () => {
    cy.get('header nav a[href="entrar"]')
      .click()
    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')
    cy.get('input[placeholder="Nome"]')
      .type('Hebert Francato')
    cy.get('input[placeholder="E-mail"]')
      .type('hebertfrancato@teste.com')
    cy.get('input[placeholder="Whatsapp"]')
      .type('11999999999')
    cy.contains('button[type="submit"]', 'Continuar')
      .click()
    cy.get('.user-name')
      .should('be.visible')
      .and('have.text', 'Hebert Francato')
      cy.get('.user-email')
      .should('be.visible')
      .and('have.text', 'hebertfrancato@teste.com')
  })
})
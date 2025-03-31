describe('Pré-Cadastro', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Realizar o pré-cadastro do cliente', () => {
    cy.get('header nav a[href="pre-cadastro"]')
      .click()
    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')
    cy.get('input[name="full-name"]')
      .type('Hebert Francato')
    cy.get('input[name="email"]')
      .type('hebertfrancato@teste.com')
    cy.contains('button[type="submit"]', 'Continuar')
      .click()
    cy.get('.user-name')
      .should('be.visible')
      .and('have.text', 'Olá, Hebert')
      cy.get('.user-email')
      .should('be.visible')
      .and('have.text', 'hebertfrancato@teste.com')
  })
})
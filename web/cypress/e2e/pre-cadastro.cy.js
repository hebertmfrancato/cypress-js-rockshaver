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

  it('Campos obrigatórios', () => {
    cy.get('header nav a[href="pre-cadastro"]')
      .click()

    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')

    cy.contains('button[type="submit"]', 'Continuar')
      .click()

    cy.contains('label', 'Nome Completo')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('include.text', 'O campo nome é obrigatório.')
      
      cy.contains('label', 'E-mail')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('include.text', 'O campo e-mail é obrigatório.') 
  });

  it('Não deve fazer o pré-cadastro apenas com o primeiro nome', () => {
    cy.get('header nav a[href="pre-cadastro"]')
      .click()

    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')

    cy.get('input[name="full-name"]')
      .type('Hebert')

    cy.get('input[name="email"]')
      .type('hebertfrancato@teste.com')

    cy.contains('button[type="submit"]', 'Continuar')
      .click()

    cy.contains('label', 'Nome Completo')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('have.text', 'Informe seu nome completo.')
  });

  it('Não deve fazer o pré-cadastro com o e-mail incorreto', () => {
    cy.get('header nav a[href="pre-cadastro"]')
      .click()

    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')

    cy.get('input[name="full-name"]')
      .type('Hebert Francato')

    cy.get('input[name="email"]')
      .type('www.teste.com.br')

    cy.contains('button[type="submit"]', 'Continuar')
      .click()

    cy.contains('label', 'E-mail')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('have.text', 'O e-mail inserido é inválido.')
  });
})
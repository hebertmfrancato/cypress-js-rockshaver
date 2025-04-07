class PreCadastroPage {
    go() {
        cy.visit('/')
        cy.get('header nav a[href="pre-cadastro"]')
            .click()

        cy.get('form h2')
            .should('be.visible')
            .and('have.text', 'Seus dados')
    }

    fillForm(fullname, email) {
        cy.get('input[name="fullname"]')
            .type(fullname)

        cy.get('input[name="email"]')
            .type(email)
    }

    submit() {
        cy.contains('button[type="submit"]', 'Continuar')
      .click()
    }

    verifyPreCadastro(firstName, email) {
        cy.get('.user-name')
          .should('be.visible')
          .and('have.text', `Olá, ${firstName}`)

        cy.get('.user-email')
          .should('be.visible')
          .and('have.text', email)
      }

    alertMessage(fieldname, text) {
        cy.contains('label', fieldname)
            .parent()
            .find('.alert-msg')
            .should('be.visible')
            .and('include.text', text)
    }
}

export default new PreCadastroPage
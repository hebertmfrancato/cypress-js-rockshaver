class Header {
    goToPreCadastro() {
        cy.get('header nav a[href="pre-cadastro"]')
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
}

export default new Header()
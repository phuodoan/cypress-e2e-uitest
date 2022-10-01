import utilities from '../interface/utilities'

Cypress.Commands.add('login', (email, password) => {
    cy.get(utilities.login.txtEmail).clear().type(email)
    cy.get(utilities.login.txtPassword).clear().type(password)
    cy.get(utilities.login.btnSubmit).click()
})
Cypress.Commands.add('logout', () => {
    cy.getCookie('access-token').then(cookie => {
        debugger
        if (cookie!== null) {
            cy.get(utilities.login.btnSignOut).click()
        }
    })
})
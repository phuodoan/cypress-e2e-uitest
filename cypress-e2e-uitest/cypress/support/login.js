import login from '../interface/loginPage'

Cypress.Commands.add('login', (email, password) => {
    cy.get(login.txtEmail).clear().type(email)
    cy.get(login.txtPassword).clear().type(password)
    cy.get(login.btnSubmit).click()
})
Cypress.Commands.add('logout', () => {
    cy.getCookie('access-token').then(cookie => {
        debugger
        if (cookie!== null) {
            cy.get(login.btnSignOut).click()
        }
    })
})
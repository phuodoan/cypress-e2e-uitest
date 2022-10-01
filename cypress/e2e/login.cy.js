var email = 'approver@mail.com'
var password = 'StrongPassword!0'
describe.skip('Test cases on login page', () => {
  before(()=>{
    //do something
  })

  it('Verify user can log in with valid email and password', () => {
    cy.clearCookies()
    cy.visit('./', {failOnStatusCode: false})
    //check status of the page
    //if user already login
    //logout
    cy.login(email, password)
    cy.contains('My Demo').should("be.visible")
    cy.logout()
  })
})
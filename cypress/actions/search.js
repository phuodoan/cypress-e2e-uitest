import search from '../interface/search'

Cypress.Commands.add('searchWeatherByCity', (cityName) => {
    //remove the href attribute
    cy
      .get('form[name="f1"]')
      .invoke("removeAttr", "target")
    //enter the key search
    cy.get(search.iptSearch).clear().type(cityName)
    cy.get(search.btnSubmit).click()
})

//verify the result
Cypress.Commands.add('verifySearchByCity', (cityName) => {
    cy.get(search.lblResult).should('contain', cityName)
    //set a boolean to check the table result
    //if there is a row not contain the cityName
    //the result will be wrong
    var bResult = true
    cy.get('tbody>tr').each($ele => {
        cy.wrap($ele).find('td').first().invoke('text').then(value => {
            // expect(value).to.contain(cityName)
            if (!value.includes(cityName)) {
                bResult = false
            }
        })
    })
})
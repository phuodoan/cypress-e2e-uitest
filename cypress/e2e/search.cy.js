import search from "../actions/search";

describe('Test cases on login page', () => {
    before(() => {
        //do something
    })

    it('Verify user can search the weather by city name', () => {
        let cityName = 'ho-chi-minh'
        cy.visit('https://www.weather.org/', { failOnStatusCode: false })
        //search the weather in HCM city
        // cy.searchWeatherByCity(cityName)
        //check the result
        // cy.get('h1').should('contain', 'Ho Chi Minh')
    })
})
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Command timeout overridden for E2E tests
  e2e: {
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // baseUrl: "https://google.com",
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
});

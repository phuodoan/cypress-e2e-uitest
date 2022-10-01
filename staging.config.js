const { defineConfig } = require("cypress");

module.exports = defineConfig({
  extends: '../cypress.config.js',
  // These settings apply everywhere unless overridden
  screenshotOnRunFailure : true,
  fixturesFolder: 'cypress/datasets',
  chromeWebSecurity: false,
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  videosFolder: 'cypress/reports/final/videos',
  videoUploadOnPasses: false,
  screenshotsFolder: 'cypress/reports/final/screenshots',
  screenshotOnRunFailure: true,
  //setup multiple-unit-reporters
  reporter:  'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'spec, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    video: false
  },
  mochawesomeReporterOptions: {
      reportDir: 'cypress/results'
  },
  
  // Command timeout overridden for E2E tests
  e2e: {
    defaultCommandTimeout: 10000,
    supportFile: 'cypress/support/e2e.js',
    // baseUrl: "https://agronomic-trial.stage.apac.yaradigitallabs.io/",
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
});

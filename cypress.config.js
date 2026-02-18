const { defineConfig } = require("cypress");
const {allureCypress} = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "Cypress/reports",
      });
      return config;
    },
  },
}
);
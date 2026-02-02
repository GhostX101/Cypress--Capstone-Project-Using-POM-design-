const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "https://shop.qaautomationlabs.com/index.php",
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

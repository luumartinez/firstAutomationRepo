const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q967d3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.demoblaze.com/"
  },
});

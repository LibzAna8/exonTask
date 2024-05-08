const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.canadadealsonline.com",
    pokemonBaseAPIUrl: "https://pokeapi.co/api/v2",
    specPattern: 'cypress/tests/**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// Function to build the API URL
function buildUrl() {
    const apiUrl = Cypress.config().pokemonBaseAPIUrl;
    return apiUrl;
  }
  
  // Function to make a Pokémon API request
  function pokemonAPI(endpoint, name) {
    return cy.request({
      method: 'GET',
      url: `${buildUrl()}/${endpoint}/${name}/`,
    });
  }
  
  // Function to generate an array of 10 random Pokémon IDs
  function generateRandomPokemonIds(numOfIds) {
    const minId = 1; // Minimum Pokémon ID available in the PokeAPI
    const maxId = 898; // Maximum Pokémon ID available in the PokeAPI
    const numberOfIds = numOfIds; // Number of random Pokémon IDs to generate
    const randomIds = [];
  
    for (let i = 0; i < numberOfIds; i++) {
      const randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
      randomIds.push(randomId);
    }
  
    return randomIds;
  }
  
  // Export both functions in a single export statement
  export { pokemonAPI, generateRandomPokemonIds };
  
import { pokemonAPI, generateRandomPokemonIds } from './apiUtils';


it('GET Pokemon API /pokemon - Get Pokemon (Snorlax) by ID', () => {
  pokemonAPI('pokemon',143).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.eq('snorlax');
  });
});

it('GET Pokemon API /pokemon- Get Pokemon (Snorlax) by Name', () => {
    pokemonAPI('pokemon','snorlax').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('snorlax');
    });
  });
  it('GET Type API /type- Get Type (Normal) by Name', () => {
    pokemonAPI('type','normal').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('normal');
    });
  });
  it('Test Type API /type - Get Type (Normal) by ID', () => {
    pokemonAPI('type','1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('normal');
    });
  });
it('Test Pokemon Type API - get pokemon types by id (1-normal), validate pokemons in the list', () => {
    const pokemonsToValidate = ['snorlax','eevee']
    pokemonAPI('type','normal').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('normal');
      const pokemonNames = response.body.pokemon.map(pokemon => pokemon.pokemon.name);

      // Validate each Pokémon in the list against the array of Pokémon names
      pokemonsToValidate.forEach((pokemonName) => {
        expect(pokemonNames).to.include(pokemonName);
      });
    });
  });


  it('Bonus question: Get random Pokemons types and names, validate their names exist in their own types.', () => {
    const pokemonIdsToValidate = generateRandomPokemonIds(10); // Example list of Pokémon IDs to validate
    for (const pokemonId of pokemonIdsToValidate) {
      pokemonAPI('pokemon', pokemonId).then(pokemonResponse => {
        const pokemonName = pokemonResponse.body.name;
        const pokemonType = pokemonResponse.body.types[0].type.name;
  
        pokemonAPI('type', pokemonType).then(typeResponse => {
          const pokemonNames = typeResponse.body.pokemon.map(pokemon => pokemon.pokemon.name);
            expect(pokemonNames).to.include(pokemonName);
        });
      });
    }
  });
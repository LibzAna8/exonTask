import { homepage } from '../../pages/homepage';

describe('Automation Tests for Search results', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Each search term at least 1 search result in the drop down', () => {
    
    homepage.searchBar.searchInput().type("Keyboard")
    homepage.searchBar.suggestionDropDown().should('be.visible')
    homepage.searchBar.searchResults().first().contains('keyboard')
    homepage.searchBar.searchResults().should('have.length.greaterThan',1)
    homepage.searchBar.searchInput().clear()
    
    homepage.searchBar.searchInput().type("Shower Carpet")
    homepage.searchBar.suggestionDropDown().should('be.visible')
    homepage.searchBar.searchResults().first().contains('shower carpet')
    homepage.searchBar.searchResults().should('have.length.greaterThan',1)
    homepage.searchBar.searchInput().clear()

    
    homepage.searchBar.searchInput().type("Air Fryer")
    homepage.searchBar.suggestionDropDown().should('be.visible')
    homepage.searchBar.searchResults().first().contains('air fryer')
    homepage.searchBar.searchResults().should('have.length.greaterThan',1)
    homepage.searchBar.searchInput().clear()
  })

  it('The search term itself appears in the 3 top options in the search results', () => {
    homepage.searchBar.searchInput().type("Keyboard")
    homepage.searchBar.suggestionDropDown().should('be.visible')
    homepage.searchBar.validateDropDownTerms('keyboard',3)

    //We can be more specific and validate this way as well.
    // homepage.searchBar.searchResults().eq(0).contains('keyboard')
    // homepage.searchBar.searchResults().eq(1).contains('keyboard')
    // homepage.searchBar.searchResults().eq(2).contains('keyboard')

  })

  it('Validate result navigation - no 404 should be found.', () => {
    homepage.searchBar.searchInput().type("Air Fryer")
    homepage.searchBar.suggestionDropDown().should('be.visible')
    homepage.searchBar.searchResults().first().contains('air fryer').click()
    cy.url().should('not.include', '404')
    cy.url().should('eq', `${Cypress.config("baseUrl")}/air-fryer`);

  })

  })
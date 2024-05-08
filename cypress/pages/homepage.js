export const homepage = {
    searchBar : {
        searchInput() {
            return cy.get('input[placeholder="Search"]')
        },
        suggestionDropDown(){
            return cy.get('.suggestion-container')
        },
        searchResults(){
            return this.suggestionDropDown().find('li')
        },
        validateDropDownTerms(text, numberOfResults){ //Validate text in any amount of drop down terms
            this.searchResults()
            .each((listItem, index) => {
                if (index < numberOfResults) {
                    cy.wrap(listItem).contains(text);
                }
            });        
        }

    }
}
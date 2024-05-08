How to install and run the tests:
First please clone the project - You can use git clone to download the project:

1.git clone "repository_url"
2.Open the proejct in your IDE - Open the project at root level, where "package.json" is
3.Run "npm install" command in the terminal.

We can open the test runner via this command:
"npm run cy:e2e"

we can run the tests headless with this command:
"npm run cy:headless"

API Tests:
In cypress/tests/API
All the tests are located under GET_pokemonAPI.cy.js
-Please note there was no endpoint where API receives 200 and without response data
-Please note there was no endpoint where API receives 500 server error (All GET calls worked)
-There are different approaches to verify different states of the app when resposne data not returns (200 without data or 500) using "cy.intercept",but there are no use cases at the current tests.

In cypress/tests/UI
You can find all the UI tests.

Reports:
We can use "npm run cy:cloud" to view reports on cypress cloud. 
You can view all on "latest run" and watch the test replay.
on this link:
https://cloud.cypress.io/projects/36zmjx




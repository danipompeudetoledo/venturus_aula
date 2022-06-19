Cypress.Commands.add('futuro', (industria)=>{
    cy.get('h1').contains(industria);

})


Cypress.Commands.add('visitHome', (visit)=>{
    cy.visit('/')

})

Cypress.Commands.add('clickMenu',()=>{
    cy.get('3menu-item-1740').children().eq(0)
})
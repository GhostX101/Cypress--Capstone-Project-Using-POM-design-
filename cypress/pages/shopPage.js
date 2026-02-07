class shopPage{
MenWear(){
       cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)")
    .click()
  
  
}
MenFilter(){
    //filterby type
   cy.get("#gender-1").check({ force: true }).should('be.checked')
     cy.get("#gender-2").check({ force: true }).should('be.checked')

    // Filter by price
    cy.get('#price-1').check({ force: true }).should('be.checked')  // verify the input is checked
    cy.get('#price-2').check({ force: true }).should('be.checked')  // verify the input is checked
    cy.get('#price-3').check({ force: true }).should('be.checked')    // verify the input is checked
    cy.get('#price-4').check({ force: true }).should('be.checked')    // verify the input is checked
    cy.get('#price-5').check({ force: true }).should('be.checked')    // verify the input is checked

//Filter by size
cy.get('#size-1').check({ force: true }).should('be.checked')

cy.get('#size-3').check({ force: true }).should('be.checked')

cy.get('#size-2').check({ force: true }).should('be.checked')

cy.get('#size-4').check({ force: true }).should('be.checked')
cy.get('#size-5').check({ force: true }).should('be.checked')

//Filter by color
cy.get('#color-1').check({ force: true }).should('be.checked')
cy.get('#color-2').check({ force: true }).should('be.checked')
cy.get('#color-3').check({ force: true }).should('be.checked') 
cy.get('#color-4').check({ force: true }).should('be.checked')  
cy.get('#color-5').check({ force: true }).should('be.checked')
      
  
  
}
MenRandomFilter(){
    //filterby type
    // select gender-2 and assert gender-1 is not selected
    cy.get('#gender-2').check({ force: true }).should('be.checked')
    cy.get('#gender-1').should('not.be.checked')

    // Filter by price
    cy.get('#price-1').check({ force: true }).should('be.checked')  // verify the input is checked
    cy.get('#price-2').uncheck({ force: true }).should('not.be.checked')  // verify the input is not checked
    cy.get('#price-3').check({ force: true }).should('be.checked')    // verify the input is checked
    cy.get('#price-4').uncheck({ force: true }).should('not.be.checked')    // verify the input is not checked
    cy.get('#price-5').check({ force: true }).should('be.checked')    // verify the input is checked

//Filter by size
cy.get('#size-1').uncheck({ force: true }).should('not.be.checked')

cy.get('#size-3').check({ force: true }).should('be.checked')

cy.get('#size-2').check({ force: true }).should('be.checked')

cy.get('#size-4').uncheck({ force: true }).should('not.be.checked')

cy.get('#size-5').check({ force: true }).should('be.checked')

//Filter by color
cy.get('#color-1').check({ force: true }).should('be.checked')
cy.get('#color-2').check({ force: true }).should('be.checked')
cy.get('#color-3').uncheck({ force: true }).should('not.be.checked') 
cy.get('#color-4').check({ force: true }).should('be.checked')  
cy.get('#color-5').uncheck({ force: true }).should('not.be.checked')
}
      
 ItemtoCart(){
    // Add first item to cart
    cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(9)').should('be.visible').click();
    // Add second item to cart
    cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(9)').should('be.visible').click();
    // Add third item to cart
    cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button:nth-child(9)').should('be.visible').click();
    // Add 4th item to cart
    cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > button:nth-child(9)').should('be.visible').click();
    // Add 5th item to cart
    cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(9)').should('be.visible').click();
}

}
export default shopPage;
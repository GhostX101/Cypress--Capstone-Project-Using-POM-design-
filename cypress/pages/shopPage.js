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

filter(){
        cy.get('.fas.fa-shopping-cart.text-primary.fa-2x').should('be.visible').click();

        //verifying the product on cart 
        
    }

getcategoryHeader(){
    return cy.get('body').invoke('text');
}



WomenWear(){
    // First click the Shop dropdown button to make menu visible
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > a").click();
    // Then click the Women's Wear link
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > a:nth-child(1)").click({ force: true });
}
getWomenCategoryHeader(){
    return cy.get('body');   
}

KidWear(){
   cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > a").click();
   cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > a:nth-child(3)").click()
}

getKidCategoryHeader(){
    return cy.get('body');  
}


Electronics(){
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > a").click();
   cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > a:nth-child(4)").click()
}

getElectHeader(){
    return cy.get('body');  
}


Viewall(){
 
  cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > a").click();

  cy.get("div[class='nav-item dropdown show'] a:nth-child(5)").click()
}

getViewallHeader(){
    return cy.get('body');  
}


Productcontainer(){
    // Return the product list container so tests can chain commands
    return cy.get('#product-list').should('to.not.be.empty')
}
// Backwards-compatible aliases with different casing
ProductContainer(){
    return this.Productcontainer();
}
ImgCOntainer(){
    return cy.get('.product-img').should('be.visible');
}
ImgContainer(){
    return this.ImgCOntainer();
}

getPrice(){
return  cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > h5:nth-child(1")

}





}
export default shopPage;
class checkoutPage{
    filterCheckout(){
        cy.get('.fas.fa-shopping-cart.text-primary.fa-2x').should('be.visible').click();

        //verifying the product on cart 
        
    }

}
export default checkoutPage;
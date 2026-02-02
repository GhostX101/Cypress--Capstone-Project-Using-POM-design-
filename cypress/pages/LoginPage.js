class LoginPage {
    setEmail(Email) {
        cy.get('#email').clear().type(Email).should('be.visible')
    }
    setPassword(password) {
        cy.get('#password').clear().type(password).should('be.visible');
    }   

    clickLogin() {
        cy.get('#loginBtn').click().should('be.visible');
    }

errorMessage(){
    cy.get('#errorMsg').should('have.text','Invalid email or password!')

}
errorEmail(){
    cy.get('#emailerror').should('have.text','Please enter a valid email address.')
}


}
export default  LoginPage;
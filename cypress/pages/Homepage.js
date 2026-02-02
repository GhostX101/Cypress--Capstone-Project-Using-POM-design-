class HomePage {

  logo() {
    return cy.get('img.img-fluid').first().should('be.visible');
  }

  loginPlaceHolder(){
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#loginBtn').should('be.visible');
  }

  navBar(){
    cy.get('.nav-item.nav-link').should('be.visible')
    }

    HomeIcon(){
        return cy.get("a[href='https://qaautomationlabs.com/']").should('be.visible').click();
        cy.url().should('include',"qaautomationlabs");
    }

    AboutIcon() {
     return cy.get(".nav-item.nav-link[href='https://qaautomationlabs.com/about/']")
    .invoke('removeAttr', 'target') // removes target="_blank"
    .click()
          
    }

    CoursesPage(){
        return cy.get(".nav-item.nav-link[href='https://qaautomationlabs.com/courses/']").invoke('removeAttr', 'target') // removes target="_blank"
        .click()
    }

    eventPage(){
        return cy.get(".nav-item.nav-link[href='https://qaautomationlabs.com/events/']").invoke('removeAttr', 'target') // removes target="_blank"
        .click()
    }


shopPage(){
   cy.get(".nav-link.dropdown-toggle").click()

   cy.get("div[class='dropdown-menu rounded-0 border-0 m-0 show'] a:nth-child(1)")
   .should('have.text', 'Womens Wear')

    cy.get("div[class='dropdown-menu rounded-0 border-0 m-0 show'] a:nth-child(2)")
    .should('have.text', 'Mens Wear')

    cy.get("div[class='dropdown-menu rounded-0 border-0 m-0 show'] a:nth-child(3)")
    .should('have.text', 'Kids Wear')

    cy.get("div[class='dropdown-menu rounded-0 border-0 m-0 show'] a:nth-child(4)")
    .should('have.text', 'Electronics')

    cy.get("div[class='nav-item dropdown show'] a:nth-child(5)")
    .should('have.text', 'View All')
    
}


   testingPage(){
        return cy.get(".nav-item.nav-link[href='https://qaautomationlabs.com/events/']").invoke('removeAttr', 'target') // removes target="_blank"
        .click()
    }

    blogPage(){
        return cy.get(".nav-item.nav-link[href='https://qaautomationlabs.com/events/']").invoke('removeAttr', 'target') // removes target="_blank"
        .click()
    }

    ContactPage(){
        return cy.get(".nav-item.nav-link[href='https://qaautomationlabs.com/events/']").invoke('removeAttr', 'target') // removes target="_blank"
        .click()
    }

}
export default HomePage;

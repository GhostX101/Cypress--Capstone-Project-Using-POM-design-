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
        cy.get(".nav-item.nav-link[href='https://testing.qaautomationlabs.com/']").invoke('removeAttr', 'target') // removes target="_blank"
        .click()

        // cy.get(".m-0").should('have.text', 'Tools Demo')
    }

    blogPage(){
        return cy.get(".nav-item.nav-link[href='https://qaautomationlabs.com/blog/']").invoke('removeAttr', 'target') // removes target="_blank"
        .click()
    }

    ContactPage(){
        cy.get(".nav-item.nav-link[href='https://qaautomationlabs.com/contacts/']").invoke('removeAttr', 'target') // removes target="_blank"
        .click()
    }


Info() {
  cy.origin('https://qaautomationlabs.com', () => {

    // Visit contacts page (safe inside origin)
    cy.visit('/contacts/')

    // Visit us location
    cy.get(".elementor-element-d8a8565 .icon-box-item")
      .should('be.visible').and('exist')

    // Email us info
    cy.get(".elementor-element-0eb6790 .icon-box-item")
      .should('be.visible').and('exist')

    // Call us info
    cy.get(".elementor-element-eee1e7b")
      .should('be.visible').and('exist')

    // Send us a message form
    cy.get("#wpforms-1966-field_0")
      .type("solo")
      .should('be.visible').and('exist')

    cy.get("#wpforms-1966-field_1")
      .type("solo@gmail.com")
      .should('be.visible').and('exist')

    cy.get("#wpforms-1966-field_2")
      .type("thank you")
      .should('be.visible').and('exist')

    cy.get("#wpforms-submit-1966")
      .should('be.visible')
      .click()
  })

 }

Offer() {
  cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)")
    .should('exist')
    .and('be.visible')

  cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)")
    .should('exist')
    .and('be.visible')

  cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)")
    .should('exist')
    .and('be.visible')

  cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2)")
    .should('exist')
    .and('be.visible')
}

Footer(){
    cy.get(".mb-md-0.text-center.text-secondary")
    .should('be.visible')
    .and('exist');  
    
}
}
export default HomePage;

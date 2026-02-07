import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
const Home = new HomePage();
const Login = new LoginPage();

describe('HOMEPAGE FUNCTIONALITY', () => {

  beforeEach(() => {
    cy.visit('https://shop.qaautomationlabs.com/index.php');
    cy.url().should('include', 'shop.qaautomationlabs.com');
  });

  it('verify logo is visible on homepage', () => {
    Home.logo();
    });


    it('verifying the Navbar Icon is visible',()=>{

        Home.navBar();

    })


    it('verifying the Login elements are visible',()=>{
        Home.loginPlaceHolder();
    })


    it('verifying user can view Navbar element after login',function(){
        cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.navBar();
            cy.contains('a.nav-link', 'Home').should('be.visible'); 
            cy.contains('a.nav-link', 'About').should('be.visible'); 
            cy.contains('a.nav-link', 'Courses').should('be.visible'); 
            cy.contains('a.nav-link', 'Event').should('be.visible'); 
            cy.contains('a.nav-link', 'Shop').should('be.visible');
            cy.contains('a.nav-link', 'Testing').should('be.visible');
            cy.contains('a.nav-link', 'Blog').should('be.visible');
            cy.contains('a.nav-link', 'Contact').should('be.visible');
        })  
    })
    


    it('verify Home button load to the correct page', ()=>{
       cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.HomeIcon();
          
       })
    })


it('verify AboutPage load to the correct page', ()=>{
       cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.AboutIcon();
            cy.url().should('include', 'about');
            cy.title().should('include', 'About');
            
       })
    })


    it('verify CoursesPage Redirect to the correct page', ()=>{
       cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.CoursesPage();
            cy.url().should('include', 'courses');
            cy.title().should('include', 'Courses');
            
       })
    })


    it('verify EventPage Redirect to the correct page', ()=>{
       cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.eventPage();
            cy.url().should('include', 'event');
            cy.title().should('include', 'Event');
            
       })
    })

    it('verify shopPage sub option list', ()=>{
       cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.shopPage();
            
                    
            
       })
    })


    it('verify testing page Redirect to the correct page', ()=>{    
          cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.testingPage();
            cy.url().should('include', 'testing');
            
                 
            
       })
    })


it('verify BlogPage Redirect to the correct page', ()=>{
cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.blogPage();
            cy.url().should('include', 'blog');  
            cy.title().should('include', 'Blog');   
            
       })

})


it('verify ContactPage Redirect to the correct page', ()=>{
cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.ContactPage();
            cy.url().should('include', 'contact');  
            cy.title().should('include', 'Contact');   
            
       })

})


it('verify user can access the contact information from the contact page', ()=>{
cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.Info();
               
            
       })

})   


it('verify the products on homepage are visible', ()=> {
  cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.Offer();
            
               
            
       })
  });   


  it('verify footer elements are visible', ()=> {
  cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Home.Footer();  

})
  })
  })
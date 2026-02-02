import LoginPage from "../pages/LoginPage";
const Login = new LoginPage();
describe('verifying Login fucntionality', () => {
    beforeEach(() => {
        cy.visit('https://shop.qaautomationlabs.com/index.php');
        cy.url().should('include', 'shop.qaautomationlabs.com');
    });


    it('verifying Login with valid credentials', () => {
        cy.fixture('loginData.json').then((data) => {

            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            
        })

  

    })

    it('verifying login with Invalid Password', ()=>{
        cy.fixture('loginData.json').then((data) => {

            Login.setEmail(data.validUser.email);
            Login.setPassword(data.invalidPass.password);
            Login.clickLogin();
            Login.errorMessage();
            })

        })



    it('Verifying Login with wrong Email and valid password',()=>{

        cy.fixture('loginData.json').then((data) => {

            Login.setEmail(data.invalidEmail.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            Login.errorEmail();
            })

    })


    it('verifying login with unregistered user', ()=>{
        cy.fixture('loginData.json').then((data) => {

            Login.setEmail(data.unregisteredUser.email);
            Login.setPassword(data.unregisteredUser.password);
            Login.clickLogin();
            Login.errorMessage();
            })

    })

    it('verifying login with Invalid Email format',()=>{
        cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.invalidEmailFormat.email);
            Login.setPassword(data.invalidEmailFormat.password);
            Login.clickLogin();
            Login.errorEmail();
            })

    })

})

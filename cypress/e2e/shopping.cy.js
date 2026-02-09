import shopPage from '../pages/shopPage';
import LoginPage from "../pages/LoginPage";

const Login = new LoginPage();
const shop = new shopPage();
 
describe('Cart/shop Functionality', () => {
    beforeEach(() => {
        cy.visit('https://shop.qaautomationlabs.com/index.php');
          });

    it('verify user can access Men wears from shop page', () => {
        cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.MenWear();
            
        })
   })

it('users can filter products by selecting all checkboxes', () => {
        cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.MenWear();
            shop.MenFilter();
            
        })
   })


   it(' Verify users can filter products by selecting random checkboxes', () => {
        cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.MenWear();
            shop.MenRandomFilter();
            
        })
   })

it('verify user can add filtered items to cart', () => {
        cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.MenWear();
            shop.MenRandomFilter();
            shop.ItemtoCart();

           
        })

    })


    it('verify checkout process after adding filtered items to cart', () => { 
            cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.MenWear();
            shop.MenRandomFilter();
            shop.ItemtoCart();
            shop.filter();
                        
          })
        })



        it('Validate that clicking a shop Mens Wear category link displays the correct list of products', () => {
            cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.MenWear();
            cy.url().should('include', 'mens-wear');
            shop.getcategoryHeader().then((element)=>{
             expect(element).to.contain('Mens Wear')
             expect(element).to.contain('Home')

            })

            })

        })

        it('Validate that clicking a Women Wear category link displays the correct list of products', () => {
            cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.WomenWear();
            cy.url().should('include', 'womens-wear');
            cy.wait(1000);
            shop.getcategoryHeader().then((element)=>{
             expect(element).to.contain(' Womens Wear')
             expect(element).to.contain('Home')

            })

            })

        })

        it('Validate that clicking a kids-wear category link displays the correct list of products', () => {
            cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.KidWear();
            cy.url().should('include', 'kids-wear');
            shop.getElectHeader().then((element)=>{
             expect(element).to.contain(' Kids Wear')
             expect(element).to.contain('Home')

            })

            })

        })

        it('Validate that clicking a Electronics category link displays the correct list of products', () => {
            cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.Electronics();
            cy.url().should('include', 'electronics');
            shop.getElectHeader().then((element)=>{
             expect(element).to.contain(' Electronics')
             expect(element).to.contain('Home')

            })

            })

        })


        it('Validate that clicking a View All category link displays the correct list of products', () => {
            cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.Viewall();
            cy.url().should('include', 'shop.php');
            shop.getKidCategoryHeader().then((element)=>{
             expect(element).to.contain(' Shop')
             expect(element).to.contain('Mens Wear')
             expect(element).to.contain('Womens Wear')
             expect(element).to.contain('Kids Wear')
             expect(element).to.contain('Electronics')

            })

            })

        })



        it('Verify that all essential product information is visible to the user', () => {
            cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
             shop.MenWear();
                 // assert that the product information is visible
                        shop.Productcontainer().should('be.visible'); 
                        shop.ImgCOntainer().should('be.visible');    
                        shop.getPrice().should('be.visible').and('not.be.empty');   
                        shop.getPrice().then((element)=>{
                        expect(element).to.contain('$')    
                   

                        })
        })
    })


    it('verify that incorrect price, negative value is not display on the shop categories', () => {

           cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.MenWear();
            cy.url().should('include', 'mens-wear');
            shop.getcategoryHeader().then((element)=>{
             expect(element).to.contain('Mens Wear')
              //assert that negative value is not displayed
             expect(element).to.not.contain('IDan')
             expect(element).to.not.contain('_')
             expect(element).to.not.contain('$0.00')

            })

            })

   })

    it('Verify number of product list', () => {
           cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.MenWear();
            cy.url().should('include', 'mens-wear');
            shop.getcategoryHeader().then((element)=>{
             expect(element).to.contain('Mens Wear')
             //assert that negative value is not displayed
             expect(element).to.not.contain('IDan')
             expect(element).to.not.contain('_')
             expect(element).to.not.contain('$0.00')

            })

            })

        })

})
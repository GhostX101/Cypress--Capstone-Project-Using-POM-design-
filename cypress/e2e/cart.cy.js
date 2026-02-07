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


   it('users can filter products by selecting random checkboxes', () => {
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

})
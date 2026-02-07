import checkouptPage from '../pages/checkoutPage';
import LoginPage from "../pages/LoginPage"; 
import shopPage from '../pages/shopPage';

const Login = new LoginPage();
const shop = new shopPage();
const checkout = new checkouptPage();       


describe('Cart/shop Functionality', () => {
    beforeEach(() => {
        cy.visit('https://shop.qaautomationlabs.com/index.php');
          });


          it('verify checkout process after adding filtered items to cart', () => { 
            cy.fixture('loginData.json').then((data) => {
            Login.setEmail(data.validUser.email);
            Login.setPassword(data.validUser.password);
            Login.clickLogin();
            shop.MenWear();
            shop.MenRandomFilter();
            shop.ItemtoCart();
            checkout.filterCheckout();
                        
          })
        })

})
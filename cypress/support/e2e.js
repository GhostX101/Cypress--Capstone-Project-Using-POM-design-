// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore owlCarousel errors from vendor JS
  if (err.message.includes('owlCarousel is not a function')) {
    return false;
  }
  
  // Ignore cross-origin script errors (from third-party CDN/vendor JS)
  if (err.message.includes('Script error')) {
    return false;
  }
  
  // Let other errors fail the test
  return true;
});

// Import commands.js using ES2015 syntax:
import './commands'



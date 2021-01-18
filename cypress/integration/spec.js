/// <reference types="cypress" />
describe('before page unload', () => {
  it('styles on the page when canceled', () => {
    // https://codesandbox.io/s/modern-mountain-1vd73?file=/index.html
    cy.visit('https://1vd73.csb.app/');
    cy.get('input').type('some txt').then(() => {
      debugger;
      cy.on('window:before:unload', (event) => {
        debugger;
      });
      cy.on('window:unload', (event) => {
        debugger;
      });
    });
    cy.reload();
  })
})

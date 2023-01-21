/* eslint-disable prettier/prettier */
describe('payment', () => {
  it('user can make payment', () => {
    // login
    cy.visit('http://localhost:3000');
    cy.findByRole('textbox', { name: /username/i }).type('johndoe');
    cy.findByLabelText(/password/i).type('s3cret');
    cy.findByRole('checkbox', { name: /remember me/i }).check();
    cy.findByRole('button', {  name: /sign in/i}).click();

    // check account balance
    let oldBalance;
    cy.get('[data-test="sidenav-user-balance"]').then($balance => oldBalance = $balance.text());
    
    // click on pay button
    // search for receiver
    // add amout and note and click pay
    // return to transactions
    // go to personal payments
    // click on payment
    // verify if payment was made
    // verify if payment amount was deducted
  });
})
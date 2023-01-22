/* eslint-disable prettier/prettier */
const {v4: uuidv4} = require('uuid');

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

    // click on new button
    cy.findByRole('button', {  name: /new/i}).click();

    // search for receiver
    cy.findByRole('textbox').type('devon becker');
    cy.findByText(/devon becker/i).click();

    // add amout and note and click pay
    cy.findByPlaceholderText(/amount/i).type("5");
    const note = uuidv4();
    cy.findByPlaceholderText(/add a note/i).type(note);
    cy.findByRole('button', {  name: /pay/i,  hidden: true}).click();

    // return to transactions
    cy.findByRole('button', {  name: /return to transactions/i,  hidden: true}).click();
    
    // go to personal payments
    // click on payment
    // verify if payment was made
    // verify if payment amount was deducted
  });
})
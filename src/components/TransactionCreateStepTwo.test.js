/* eslint-disable prettier/prettier */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

//Unit test 1
test("on initial render, the pay button is disabled", async () => {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>);
    expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();
});

// Unit test 2
test("if amount and note are entered, the pay button becomes enabled", async () => {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>);
    
    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");
    
    expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();
});

// Integration test 1
test("Button initially disabled but enabled after field populated", async () => {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>);
    
    expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();

    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");
    
    expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();
});
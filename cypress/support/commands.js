import users from '../fixtures/users.json';
import { sign_in } from '../pom/sign_in';
import { sign_up } from '../pom/sign_up';

Cypress.Commands.add('login', (email, password) => {
    sign_in.type_username(email);
    sign_in.type_password(password);
    sign_in.click_signin();
});

Cypress.Commands.add('invalid_login', () => {
    cy.login('randyuser', 'dsdgsdgdfg');
    cy.contains('Invalid login or password').should('be.visible');
});

Cypress.Commands.add('valid_login', () => {
    cy.fixture('users').then((user_list) => {
        const { firstname, email, password } = user_list.users[1];
        cy.login(email, password);
        cy.contains('Invalid login or password').should('not.be.visible');
        cy.contains('Hi, ' + firstname).should('be.visible');
    });
});

Cypress.Commands.add('sign_up', (user_data) => {
    cy.intercept('GET', '/users/*/exists').as('check_username');
    const { firstname, lastname, username, email, password } = user_data;

    sign_up.type_firstname(firstname);
    sign_up.type_lastname(lastname);
    sign_up.type_username(username);
    cy.wait('@check_username').its('response.statusCode').should('eq', 200);
    cy.contains('Username is available').should('be.visible');
    sign_up.type_email(email);
    sign_up.type_password(password);
    sign_up.click_continue();
});
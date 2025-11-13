import users from '../fixtures/users.json';

Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-testid="username-field"]').type(email);
    cy.get('[data-testid="password-field"]').type(password);
    cy.get('[data-testid="sign-in-button"]').click();
});

Cypress.Commands.add('invalid_login', () => {
    cy.login('randyuser', 'dsdgsdgdfg');
    cy.contains('Invalid login or password').should('be.visible');
});

Cypress.Commands.add('valid_login', () => {
    cy.fixture('users').then((user_list) => {
        const { name, email, password } = user_list.users[0];
        cy.login(email, password);
        cy.contains('Hi, ' + name).should('be.visible');
    });
});
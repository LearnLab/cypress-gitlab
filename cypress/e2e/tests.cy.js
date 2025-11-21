import users from '../fixtures/users.json';

describe('My first test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should visit the website correctly', () => {
        cy.invalid_login();
        cy.log(Cypress.env('root_password'));
    });

    it('should be able to login correctly', () => {
        cy.valid_login();
    });

    it('should allow the user to register', () => {
        const username = 'diego_' + Date.now();

        cy.get('[data-testid="register-link"]').click();

        cy.fixture('users').then((users) => {
            const user_data = users.users[1];
            user_data.username = username;
            
            cy.sign_up(user_data);
        });
    });
});
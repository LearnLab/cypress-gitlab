describe('My first test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should visit the website correctly', () => {
        cy.invalid_login();
    });

    it('should be able to login correctly', () => {
        cy.valid_login();
    });

    it('should allow the user to register', () => {
        const username = 'diego_' + Date.now();
        cy.intercept('GET', '/users/*/exists').as('check_username');

        cy.get('[data-testid="register-link"]').click();

        cy.get('[data-testid="new-user-first-name-field"]').type('Diego');
        cy.get('[data-testid="new-user-last-name-field"]').type('Castillo');
        cy.get('[data-testid="new-user-username-field"]').type(username);
        cy.wait('@check_username').its('response.statusCode').should('eq', 200);
        cy.contains('Username is available').should('be.visible');
        cy.get('[data-testid="new-user-email-field"]').type('something@somewhere.com');
        cy.get('[data-testid="new-user-password-field"]').type('diego12345');
    });
});
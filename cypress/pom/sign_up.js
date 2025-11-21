export const sign_up = {
  type_firstname: (firstname) => {
    cy.get('[data-testid="new-user-first-name-field"]').type(firstname);
  },

  type_lastname: (lastname) => {
    cy.get('[data-testid="new-user-last-name-field"]').type(lastname);
  },

  type_username: (username) => {
    cy.get('[data-testid="new-user-username-field"]').type(username);
  },

  type_email: (email) => {
    cy.get('[data-testid="new-user-email-field"]').type(email);
  },

  type_password: (password) => {
    cy.get('[data-testid="new-user-password-field"]').type(password);
  },

  click_continue: () => {
    cy.get('[data-testid="new-user-register-button"]').click();
  },
};
export const sign_in = {
  type_username: (username) => {
    cy.get('[data-testid="username-field"]').type(username);
  },

  type_password: (password) => {
    cy.get('[data-testid="password-field"]').type(password);
  },

  click_signin: () => {
    cy.get('[data-testid="sign-in-button"]').click();
  },
};
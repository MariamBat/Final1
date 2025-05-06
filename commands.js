Cypress.Commands.add('fillRegistrationForm', (user, skipPassword = false) => {
  cy.get('input[name="firstName"]').type(user.firstName);
  cy.get('input[name="lastName"]').type(user.lastName);
  cy.get('input[name="email"]').type(user.email);
  if (!skipPassword) {
    cy.get('input[name="password"]').type(user.password);
  }
  cy.get('input[type="checkbox"]').check();
});

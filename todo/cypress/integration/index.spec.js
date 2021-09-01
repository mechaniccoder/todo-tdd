/// <reference types="cypress" />

describe('Todo e2e test', () => {
  it('type todo', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[name="todo"]').type('Docker를 배우자');

    cy.get('input[name="todo"]').should('have.value', 'Docker를 배우자');

    cy.get('button').click();

    cy.get('li > p').should('have.length', 2);
    cy.get('input[type="checkbox"]').should('have.length', 2);

    cy.get('input[type="checkbox"]').click({
      multiple: true,
    });

    cy.get('input[type="checkbox"]').should('be.checked', true);
  });
});

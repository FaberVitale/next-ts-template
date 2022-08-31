import type {} from 'cypress';

/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('index page should have correct title', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Has correct title
    cy.get('title').contains('Welcome to Next.js!');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};

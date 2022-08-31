import type {} from 'cypress';

/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Index page', () => {
  it('index page should have correct title', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Has correct title
    cy.get('title').contains('Welcome to Next.js!');
  });

  it('index page has correct footer links', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Footer has link to template source
    cy.get(
      '#__next footer a[href^="https://github.com/FaberVitale/next-ts-template"]'
    );

    // Footer has link to nextjs docs
    cy.get('#__next footer a[href^="https://nextjs.org/docs"]');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};

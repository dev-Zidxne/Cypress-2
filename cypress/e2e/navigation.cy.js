/// <reference types="Cypress" />

describe('page naviagtion', function () {
	it('should navigate between pages', function () {
		cy.visit('localhost:5173/');
		cy.get('[data-cy="header-about-link"]').click();
		cy.location('pathname').should('eq', '/about'); // / about => About Page
		cy.go('back');
		cy.location('pathname').should('eq', '/'); // /  =. Home Page
		cy.get('[data-cy="header-about-link"]').click();
		cy.get('[data-cy="header-home-link"]').click();
		cy.location('pathname').should('eq', '/'); // /  =. Home Page
	});
});

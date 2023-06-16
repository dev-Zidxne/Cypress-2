/// <reference types="Cypress" />

describe('page naviagtion', function () {
	it('should navigate between pages', function () {
		cy.visit('localhost:5173/');
		cy.get('[data-cy="header-about-link"]');
	});
});

/// <reference types="Cypress" />

describe('contact form', function () {
	it('should submit the form', function () {
		cy.visit('http://localhost:5173/about');
		cy.get('[data-cy="contact-input-message"]').type('Hi my name is Karson');
		cy.get('[data-cy="contact-input-name"]').type('Zidane');
		cy.get('[data-cy="contact-input-email"]').type('zidaneinnis@email.com');
		cy.get('[data-cy="contact-btn-submit"]')
			.contains('Send Message')
			.should('not.have.attr', 'disabled');
		cy.get('[data-cy="contact-btn-submit"]').click();
		cy.get('[data-cy="contact-btn-submit"]').contains('Sending...');
		cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled');
	});
});

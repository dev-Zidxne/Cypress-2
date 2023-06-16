/// <reference types="Cypress" />

describe('contact form', function () {
	it('should submit the form', function () {
		cy.visit('http://localhost:5173/about');
		cy.get('[data-cy="contact-input-message"]').type('Hi my name is Karson');
		cy.get('[data-cy="contact-input-name"]').type('Zidane');
		cy.get('[data-cy="contact-input-email"]').type('zidaneinnis@email.com');
		cy.get('[data-cy="contact-btn-submit"]').then((el) => {
			expect(el.attr('disabled')).to.be.undefined;
			expect(el.text()).to.be('Send Message');
		});
		cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
		// cy.get('@submitBtn')
		// 	.contains('Send Message')
		// 	.should('not.have.attr', 'disabled');
		cy.get('@submitBtn').click();
		cy.get('@submitBtn').contains('Sending...');
		cy.get('@submitBtn').should('have.attr', 'disabled');
	});
});

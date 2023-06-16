/// <reference types="Cypress" />

describe('contact form', function () {
	it('should submit the form', function () {
		cy.visit('http://localhost:5173/about');
		cy.get('[data-cy="contact-input-message"]').type('Hi my name is Karson');
		cy.get('[data-cy="contact-input-name"]').type('Zidane');
		cy.get('[data-cy="contact-btn-submit"]').then((el) => {
			expect(el.attr('disabled')).to.be.undefined;
			expect(el.text()).to.eq('Send Message');
		});

		cy.screenshot();
		cy.get('[data-cy="contact-input-email"]').type(
			'zidaneinnis@email.com{enter}'
		);
		cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
		// cy.get('@submitBtn')
		// 	.contains('Send Message')
		// 	.should('not.have.attr', 'disabled');
		// cy.get('@submitBtn').click();
		cy.screenshot();
		cy.get('@submitBtn').contains('Sending...');
		cy.get('@submitBtn').should('have.attr', 'disabled');
	});
	it('should validate form input', function () {
		cy.visit('http://localhost:5173/about');
		cy.get('[data-cy="contact-input-message"]').click();
		cy.get('[data-cy="contact-input-message"]').then((el) => {
			expect(el).to.not.have.attr('disabled');
			expect(el.text()).to.not.equal('Sending...');
			cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
		});
		cy.get('[data-cy="contact-input-message"]').as('msgInput');
		cy.get('@msgInput')
			.focus()
			.blur()
			.parent()
			.then((el) => {
				expect((el) => {
					expect(el.attr('class')).to.contains('invalid');
				});
			});
		cy.get('[data-cy="contact-input-name"]')
			.focus()
			.blur()
			.parent()
			.then((el) => {
				expect((el) => {
					expect(el.attr('class')).to.contains('invalid');
				});
			});
		cy.get('[data-cy="contact-input-email"]')
			.focus()
			.blur()
			.parent()
			.then((el) => {
				expect((el) => {
					expect(el.attr('class')).to.contains('invalid');
				});
			});
	});
});

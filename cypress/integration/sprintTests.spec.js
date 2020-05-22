describe('It can type text into the box', () =>{
    it('Can navigate to the site and type text into the box', () =>{
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
        cy.get('button').click()
        cy.get('input[name="name"]').type('Teagan').should('have.value', 'Teagan')
    })
})

describe('It can select multiple topping', () => {
    it('Can navigate and select multiple toppings', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
        cy.get('button').click()
        cy.get('input[name="ham"]').click()
        cy.get('input[name="onion"]').click()
        cy.get('input[name="bacon"]').click()

    })
})

describe('It can submit a form', () => {
    it('Can completely submit a fourm', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
        cy.get('button').click()
        cy.get('input[name="name"]').type('Teagan Keith').should('have.value', 'Teagan Keith')
        cy.get('input[name="email"]').type("teagan@teagan.com").should('have.value', 'teagan@teagan.com')
        cy.get('select[name="size"]').select('Medium')
        cy.get('input[name="ham"]').click()
        cy.get('input[name="onion"]').click()
        cy.get('input[name="bacon"]').click()
        cy.get('button.submit').click()
    })
})
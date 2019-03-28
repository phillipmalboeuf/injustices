describe('Landing', function() {
  it('successfully loads', function() {
    cy.visit('/')
    cy.get('h1:first').contains('injustices.wiki')
  })

  it('sends emails', function() {
    cy.get('button:first').click()
    cy.get('input:first').type('phil@phils.computer')
    cy.get('form').submit()
    cy.get('.alert').contains('Duplicate key error: E11000 duplicate key error collection: injustices.emails index: email dup key: { : "phil@phils.computer" }')
  })
})
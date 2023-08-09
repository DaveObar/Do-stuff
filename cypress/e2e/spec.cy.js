describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://qa-7.d.bark.com/en/gb/')
    cy.get('#category_name_top').click()
  })
})
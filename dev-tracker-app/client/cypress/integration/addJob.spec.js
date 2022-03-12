const dayjs = require('dayjs')


describe('add job', () => {
  it('user can navigate to add job', () => {
    cy.visit('http://localhost:3001')
    cy.get('.menu-bars').click()
    cy.findByRole('link', {  name: /add new job/i}).click()
    cy.findByRole('textbox', {  name: /company name:/i}).click().type('lol')
    cy.findByTestId('position').select('frontend')
    cy.findByTestId('status').select('applied')
    cy.findByTestId('date_applied').click().type(dayjs().format('YYYY-MM-DD'))
    cy.findByTestId('date_interview').click().type(dayjs().format('YYYY-MM-DDTHH:MM'))
    cy.findByRole("button", {name: /add/i}).click()
  })
})
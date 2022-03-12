/* eslint-disable no-undef */
describe('Cypress', () => {   
  it('is working', () => {     
      // expect(true).to.equal(true)   
      expect(true).equal(true)   

  }) 
  
  it('opens the app', () => {   
      cy.visit('http://localhost:3000') 
  })
})
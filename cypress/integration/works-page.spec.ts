describe('works-page', () => {
  beforeEach(() => {
    cy.visit('/works')
  })

  it('navigationを使用して/に遷移する', () => {
    cy.findByTestId('navigation-resume')
      .scrollIntoView()
      .should('be.visible')
      .click()
    cy.location('pathname').should('eq', '/')
  })

  it('footer-navigationを使用して/#navigationに遷移する', () => {
    cy.findByTestId('footer-navigation-resume')
      .scrollIntoView()
      .should('be.visible')
      .click()
    cy.location('pathname').should('eq', '/')
    cy.location('hash').should('eq', '#navigation')
  })

  it('footer-navigationを使用して/#skillsに遷移する', () => {
    cy.findByTestId('footer-navigation-skills')
      .scrollIntoView()
      .should('be.visible')
      .click()
    cy.location('pathname').should('eq', '/')
    cy.location('hash').should('eq', '#skills')
  })

  it('footer-navigationを使用して/#historiesに遷移する', () => {
    cy.findByTestId('footer-navigation-histories')
      .scrollIntoView()
      .should('be.visible')
      .click()
    cy.location('pathname').should('eq', '/')
    cy.location('hash').should('eq', '#histories')
  })
})

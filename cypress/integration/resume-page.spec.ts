describe('resume-page', () => {
  beforeEach(() => {
    cy.visit('/resume')
  })

  it('navigationを使用して/worksに遷移する', () => {
    cy.findByTestId('navigation-works')
      .scrollIntoView()
      .should('be.visible')
      .click()
    cy.location('pathname').should('eq', '/works')
  })

  it('footer-navigationを使用して/works#navigationに遷移する', () => {
    cy.findByTestId('footer-navigation-works')
      .scrollIntoView()
      .should('be.visible')
      .click()
    cy.location('pathname').should('eq', '/works')
    cy.location('hash').should('eq', '#navigation')
  })

  it('footer-navigationを使用して/works#recent-postsに遷移する', () => {
    cy.findByTestId('footer-navigation-recent-posts')
      .scrollIntoView()
      .should('be.visible')
      .click()
    cy.location('pathname').should('eq', '/works')
    cy.location('hash').should('eq', '#recent-posts')
  })

  it('footer-navigationを使用して/works#achievementsに遷移する', () => {
    cy.findByTestId('footer-navigation-achievements')
      .scrollIntoView()
      .should('be.visible')
      .click()
    cy.location('pathname').should('eq', '/works')
    cy.location('hash').should('eq', '#achievements')
  })
})

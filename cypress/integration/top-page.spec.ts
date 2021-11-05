describe('/', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('リンクセクションからそれぞれのページへの遷移テスト', () => {
    it('/skillsへ遷移すること', () => {
      cy.findByTestId('top-to-skills')
        .scrollIntoView()
        .should('be.visible')
        .click()
      cy.location('pathname').should('eq', '/skills')
    })

    it('/resumeへ遷移すること', () => {
      cy.findByTestId('top-to-resume')
        .scrollIntoView()
        .should('be.visible')
        .click()
      cy.location('pathname').should('eq', '/resume')
    })

    it.skip('/blogへ遷移するかはmicroCMSのデータ転送料節約のため、テストしない', () => {})

    it.skip('お問い合わせへ遷移するかは外部リンクのため、テストしない', () => {})
  })
})

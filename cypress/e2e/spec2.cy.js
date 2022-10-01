describe.skip('empty spec 2', () => {
    it.skip('passes', () => {
      cy.visit('./')
      expect(true).to.eq(false)
    })
  })
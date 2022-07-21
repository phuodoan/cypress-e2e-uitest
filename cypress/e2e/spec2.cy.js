describe('empty spec 2', () => {
    it('passes', () => {
      cy.visit('./')
      expect(true).to.eq(false)
    })
  })
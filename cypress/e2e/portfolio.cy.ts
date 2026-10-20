describe('Cycalona Villani portfolio', () => {
  beforeEach(() => {
    cy.visit('/cycalona-portfolio/')
  })

  it('displays the homepage', () => {
    cy.get('h1')
      .should('be.visible')
      .and('contain.text', 'Thoughtful software.')

    cy.get('.brand').should('contain.text', 'Cycalona Villani')
  })

  it('navigates to the projects section', () => {
    cy.get('nav').contains('Work').click()

    cy.location('hash').should('eq', '#projects')

    cy.get('#projects')
      .should('be.visible')
      .and('contain.text', 'Provider Verification System')
  })

  it('includes the project demo and source code links', () => {
    cy.contains('a', 'Live Demo')
      .should('be.visible')
      .and(
        'have.attr',
        'href',
        'https://cycalona-villani.github.io/provider-verification-system/',
      )

    cy.contains('a', 'View GitHub')
      .should('be.visible')
      .and(
        'have.attr',
        'href',
        'https://github.com/Cycalona-villani/provider-verification-system',
      )
  })

  it('provides a contact link on a phone-sized screen', () => {
    cy.viewport(390, 844)

    cy.get('nav').contains('Contact').click()
    cy.location('hash').should('eq', '#contact')

    cy.contains('a', 'Get in touch')
      .should('be.visible')
      .and('have.attr', 'href', 'mailto:clonievillani@gmail.com')
  })
  afterEach(() => {
  cy.viewport(1280, 900)
})
})
describe('Cycalona Villani portfolio', () => {
  beforeEach(() => {
    cy.visit('/cycalona-portfolio/')
  })

  it('displays the homepage', () => {
    cy.get('h1').should('contain.text', 'Thoughtful software.')
    cy.get('.brand').should('contain.text', 'Cycalona Villani')
  })

  it('navigates to the projects section', () => {
    cy.get('nav').contains('Work').click()
    cy.location('hash').should('eq', '#projects')
    cy.get('#projects').should('be.visible')
  })

  it('includes the project demo link', () => {
    cy.contains('a', 'Live Demo').should(
      'have.attr',
      'href',
      'https://cycalona-villani.github.io/provider-verification-system/',
    )
  })

  it('loads both testing screenshots', () => {
    cy.contains('a', 'View Cypress Test Results')
      .should('have.attr', 'href')
      .then((href) => {
        cy.request(href).its('headers')
          .its('content-type').should('include', 'image/')
      })

    cy.contains('a', 'View Jenkins Test Results')
      .should('have.attr', 'href')
      .then((href) => {
        cy.request(href).its('headers')
          .its('content-type').should('include', 'image/')
      })
  })
})
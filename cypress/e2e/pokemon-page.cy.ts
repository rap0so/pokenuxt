describe('Pokemon Detail Page', () => {
  const pokemonName = 'pikachu'

  it('should load detail page and display content', () => {
    cy.visit(`/pokemon/${pokemonName}`)

    cy.get('h1')
      .should('contain.text', pokemonName)
      .should('have.class', 'capitalize')

    cy.get('[aria-label="Types"]')
      .find('span')
      .should('have.length.at.least', 1)

    cy.contains('Base Stats').should('exist')

    cy.get('[aria-labelledby="base-stats-heading"]')
      .find('li')
      .should('have.length.at.least', 1)

    cy.wait(500)

    cy.contains('button', 'Back')
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true })

    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })

  it('should show error for invalid pokemon', () => {
    cy.visit('/pokemon/invalidmon')
    cy.contains('Pokémon not found.').should('exist')
  })
})

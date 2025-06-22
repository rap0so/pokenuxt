describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(1000)
  })

  it('displays the heading', () => {
    cy.contains('h1', 'PokéNuxt').should('be.visible')
  })

  it('shows the search and filters', () => {
    cy.get('input[placeholder="e.g. Pikachu"]').should('exist')
    cy.get('select').should('exist')
  })

  it('renders a list of pokémons', () => {
    cy.get('li[role="listitem"]').should('have.length.at.least', 1)
  })

  it('searches for Pikachu and finds it', () => {
    cy.get('li[role="listitem"]').should('have.length.at.least', 1)

    cy.get('input[placeholder="e.g. Pikachu"]').type('pikachu')
    cy.get('button[name="search"]').click()

    cy.get('li[role="listitem"]').should('contain.text', 'pikachu')
  })

  it('filters by a type (e.g., "electric")', () => {
    cy.get('select').select('electric', { force: true })
    cy.get('li[role="listitem"]').should('have.length.greaterThan', 0)
  })

  it('navigates to next and previous pages', () => {
    cy.contains('button', 'Next').click()
    cy.contains('button', 'Previous').click()
  })

  it('navigates to the detail page', () => {
    cy.get('li[role="listitem"]').first().click()

    // Aguarda o título carregar e extrai o texto
    cy.get('#pokemon-title')
      .should('be.visible')
      .invoke('text')
      .then((title) => {
        const formatted = title.trim().toLowerCase()
        cy.url().should('include', `/pokemon/${formatted}`)
      })
  })

  it('changes theme', () => {
    cy.contains('button', 'Light').click()

    cy.get('html').should('have.class', 'dark')

    cy.contains('button', 'Dark').click()

    cy.get('html').should('not.have.class', 'dark')
  })
})

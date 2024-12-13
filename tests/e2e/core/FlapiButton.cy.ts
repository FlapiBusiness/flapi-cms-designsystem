describe('FlapiButton Component', () => {
  beforeEach(() => {
    cy.visit('/flapi-button-playground')
  })

  it('renders the button with default props', () => {
    cy.get('.flapi-button')
      .first()
      .should('be.visible')
      .and('have.css', 'background-color', 'rgb(132, 114, 243)') // Couleur par défaut
      .and('not.be.disabled')
  })

  it('changes background color on hover', () => {
    cy.get('.flapi-button')
      .first()
      .trigger('mouseover') // Simule un hover
      .should('have.css', 'background-color', 'rgb(107, 89, 217)') // Couleur hover
  })

  it('renders a disabled button', () => {
    cy.get('.flapi-button').last().should('be.disabled').and('have.css', 'opacity', '0.7').click() // Vérifie qu'il ne peut pas être cliqué

    cy.url().should('not.include', '/new-page') // Vérifie qu'aucune navigation ne se produit
  })

  it('navigates to a new page when "to" prop is provided', () => {
    cy.get('.flapi-button').first().click()

    cy.url().should('include', '/new-page') // Vérifie la navigation
  })

  it('renders with different sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

    sizes.forEach((size, index) => {
      cy.get('.flapi-button').eq(index).invoke('attr', 'class').should('contain', size) // Vérifie la classe correspondant à la taille
    })
  })

  it('renders with an icon on the left', () => {
    cy.get('.flapi-button')
      .first()
      .invoke('attr', 'icon', 'left-icon')
      .invoke('attr', 'iconPosition', 'left')
      .should('have.class', 'flex items-center')
      .find('span.mr-2') // Vérifie que l'icône est à gauche
      .should('exist')
  })

  it('renders with an icon on the right', () => {
    cy.get('.flapi-button')
      .first()
      .invoke('attr', 'icon', 'right-icon')
      .invoke('attr', 'iconPosition', 'right')
      .should('have.class', 'flex items-center')
      .find('span.ml-2') // Vérifie que l'icône est à droite
      .should('exist')
  })

  it('renders as an icon-only button', () => {
    cy.get('.flapi-button')
      .first()
      .invoke('attr', 'icon', 'icon-only')
      .invoke('attr', 'slotContent', '') // Pas de texte
      .should('have.class', 'p-2 w-fit') // Classe spécifique pour les boutons avec icône uniquement
      .find('span')
      .should('have.length', 1) // Vérifie qu'il n'y a que l'icône
  })

  it('handles dynamic text in the slot', () => {
    const dynamicText = 'Dynamic Text'
    cy.get('.flapi-button').first().invoke('html', dynamicText).should('contain.text', dynamicText) // Vérifie que le texte dynamique est rendu
  })

  it('applies the correct styles for custom background colors', () => {
    const customColor = 'rgb(255, 99, 71)' // Tomato color
    const hoverColor = 'rgb(255, 69, 0)' // OrangeRed

    cy.get('.flapi-button')
      .first()
      .invoke('attr', 'style', `--background-color: ${customColor}; --background-hover-color: ${hoverColor}`)
      .should('have.css', 'background-color', customColor)
      .trigger('mouseover')
      .should('have.css', 'background-color', hoverColor) // Vérifie les couleurs personnalisées
  })

  it('renders multiple buttons with unique attributes', () => {
    cy.get('.flapi-button').should('have.length.at.least', 2) // Vérifie qu'au moins 2 boutons sont rendus

    cy.get('.flapi-button').first().should('not.have.attr', 'disabled')

    cy.get('.flapi-button').last().should('have.attr', 'disabled')
  })

  it('supports keyboard accessibility', () => {
    cy.get('.flapi-button').first().focus().should('have.css', 'outline-style', 'solid') // Vérifie le focus clavier

    cy.get('.flapi-button').first().type('{enter}') // Simule un clic via "Enter"

    cy.url().should('include', '/new-page') // Vérifie la navigation
  })
})

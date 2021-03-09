describe('Shorten it Up', () => {
  const apiURL = 'http://localhost:3001';
  const homeURL = 'http://localhost:3000';

  describe('Landing Page', () => {
    beforeEach(() => {
      cy.fixture('urls.json')
        .then(data => {
          cy.intercept('GET', apiURL, {
            body: data
          })
        })
      cy.visit(homeURL);
    })

    it('Should have a title', () => {
      cy.get('h1').contains('URL Shortener')
    })

    it('Should have a requst form', () => {
      cy.get('form').should('be.visible')
    })

    it('Should have a area to display current urls', () => {
      cy.get('main section div').first()
        .should('contain', 'Long Eared')
        .get('a').should('have.attr', 'href', 'http://localhost:3001/useshorturl/1')
        .get('p').contains('allaboutbirds')

    })
  })

  describe('Form', () => {
    beforeEach(() => {
      cy.fixture('urls.json')
        .then(data => {
          cy.intercept('GET', apiURL, {
            body: data
          })
        })

      cy.intercept('POST', apiURL, {
        statusCode: 200,
        body: {
          id: 3,
          title: 'LeContes Sparrow',
          long_url: 'https://www.allaboutbirds.org/guide/assets/photo/40263691-1280px.jpg',
          short_url: 'http://localhost:3001/useshorturl/3'
        }
      })

      cy.visit(homeURL);
    })

    it('Should update value based on user input', () => {
      cy.get('main header form input[name=title]').type('LeContes Sparrow').should('have.value', 'LeContes Sparrow')
      cy.get('main header form input[name=long_url]').type('https://www.allaboutbirds.org/guide/assets/photo/40263691-1280px.jpg').should('have.value', 'https://www.allaboutbirds.org/guide/assets/photo/40263691-1280px.jpg')
    })

    it('Should have new link when submitted', () => {
      cy.get('main header form input[name=title]').type('LeContes Sparrow')
      cy.get('main header form input[name=long_url]').type('https://www.allaboutbirds.org/guide/assets/photo/40263691-1280px.jpg')
      cy.get('form button').click()
      cy.get('main section div').eq(2).should('contain', 'Sparrow')
    })
  })
})

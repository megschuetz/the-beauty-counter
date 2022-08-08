describe('TheBeautyCounter App', () => {
  
  beforeEach(() => {
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx', { fixture: 'nyx'})
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline', { fixture: 'maybelline'})
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=milani', { fixture: 'milani'})
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique', { fixture: 'clinique'})
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl', { fixture: 'covergirl'})
    cy.visit('http://localhost:3000/')
  });

  it('Should have a loading page', () => {
    cy.wait(3000)
    cy.visit('http://localhost:3000/')
    cy.get('.patience').should('have.text', 'patience is your superpower')
  });

  it('Should have a title', () => {
    cy.get('.shown-title').should('have.text', 'TheBeautyCounter')
  });
  
  it('Should display items on main page with titles', () => {
    cy.get('.makeup-card').contains('CoverGirl truBLEND Bronzer')
    cy.get('.makeup-card').contains('Fly With Me Mascara')
    cy.get('.makeup-card').contains('Milani Baked Bronzer ')
    cy.get('.makeup-card').contains('Even Better&trade; Compact Makeup Broad Spectrum SPF 15')
    cy.get('.makeup-card').contains('Maybelline Fit Me Bronzer')
  });

  it('Should display items on main page with images', () => {
    cy.get('.makeup-cards')
      .children('.makeup-card')
      .each(() => {
        cy.get('img')
          .should('be.visible')
          .should(([img]) => {
            expect(img.height).to.equal(200)
          })
      })
  });

  it('Should tell how many items are on the page', () => {
    cy.get('.num-items').should('have.text', '5 Items')
    cy.get('.makeup-cards').find('.makeup-card').should('have.length', 5)
  });

  it('Should show makeup type categories', () => {
    cy.get('.type-list').find('.link').should('have.length', 9)
    cy.get('.type-list').find('.all').should('have.length', 1)
  });

  it('Should be able to click a type and see only items of that type', () => {
    cy.get('.type-list').contains('bronzer').click()
      .url().should('include', '/bronzer')
    
    cy.get('[alt="bronzer-product-img"]')
      .should('be.visible')

    cy.get('[alt="mascara-product-img"]')
      .should('not.exist')
  });

  it('Should be able to click all to go back to all products', () => {
    cy.get('.type-list').contains('bronzer').click()
      .url().should('include', '/bronzer')

    cy.get('.type-list').contains('ALL').click()
      .url().should('include', '/')
    
    cy.get('[alt="bronzer-product-img"]')
      .should('be.visible')

    cy.get('[alt="mascara-product-img"]')
      .should('be.visible')
  });

  it('Should test back and forward browser buttons', () => {
    cy.get('.type-list').contains('bronzer').click()
    cy.go('back')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.makeup-cards').find('.makeup-card').should('have.length', 5)
    cy.go('forward')
    cy.url().should('eq', 'http://localhost:3000/bronzer')
    cy.get('.makeup-cards').find('.makeup-card').should('have.length', 3)
  });

  it('Should display an error message if a network request fails 404.', () => {
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx', {
      statusCode: 404
    })
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline', {
      statusCode: 404
    })
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=milani', {
      statusCode: 404
    })
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique', {
      statusCode: 404
    })
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000')
    .get('.error-page').should('have.text', 'Ops, there has been an error return again later.')
  });

  it('Should display an error message if a network request fails 500.', () => {
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx', {
      statusCode: 500
    })
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline', {
      statusCode: 500
    })
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=milani', {
      statusCode: 500
    })
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique', {
      statusCode: 500
    })
    cy.intercept('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000')
    .get('.error-page').should('have.text', 'Ops, there has been an error return again later.')
  });
});
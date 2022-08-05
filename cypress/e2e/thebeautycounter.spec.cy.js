describe('TheBeautyCounter App', () => {
  
  beforeEach(() => {
    cy.intercept('GET', 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx', { fixture: 'nyx'})
    cy.intercept('GET', 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline', { fixture: 'maybelline'})
    cy.intercept('GET', 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=milani', { fixture: 'milani'})
    cy.intercept('GET', 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique', { fixture: 'clinique'})
    cy.intercept('GET', 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl', { fixture: 'covergirl'})
    cy.visit('http://localhost:3000/')
  })

  it('Should have a loading page', () => {
    cy.wait(3000)
    cy.visit('http://localhost:3000/')
    cy.get('.patience').should('have.text', 'patience is your superpower')
  })

  it('Should have a title', () => {
    cy.get('.shown-title').should('have.text', 'TheBeautyCounter')
  })
  
  it('Should display items on main page with titles', () => {
   cy.get('.makeup-card').contains('CoverGirl truBLEND Bronzer')
   cy.get('.makeup-card').contains('Fly With Me Mascara')
   cy.get('.makeup-card').contains('Milani Baked Bronzer ')
   cy.get('.makeup-card').contains('Even Better&trade; Compact Makeup Broad Spectrum SPF 15')
   cy.get('.makeup-card').contains('Maybelline Fit Me Bronzer')
  })

  it('Should display items on main page with images', () => {
    cy.get('.makeup-cards')
      .children('.makeup-card')
      .each(() => {
        cy.get('[alt="product-img"]')
          .should('be.visible')
          .should(([img]) => {
            expect(img.height).to.equal(200)
          })
      })
   })

   it('Should tell how many items are on the page', () => {
    cy.get('.num-items').should('have.text', '5 Items')
    cy.get('.makeup-cards').find('.makeup-card').should('have.length', 5)
   })

   it('Should show makeup type categories', () => {
    cy.get('.type-list').find('.link').should('have.length', 9)
    cy.get('.type-list').find('.all').should('have.length', 1)
   })

   it('Should be able to click a type and see only items of that type', () => {
    cy.get('.type-list').contains('bronzer').click()
      .url().should('include', '/bronzer')
    
    cy.get('.makeup-cards')
      .children('.makeup-card')
      .each(() => {
        cy.get('[alt="product-img"]')
          .should('be.visible')
          .should(([img]) => {
            expect(img.height).to.equal(200)
          })
      })
    })
})
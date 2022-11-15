describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
    .contains('Hello World!', { matchCase: false })
  })

  it('question answers', () =>{
    cy.get('h2')
    .contains('can you update a CSV file? - yes ', {matchCase: false})
  }) 

  it('a1', () => {
    ct.get('h3') 
    .contains('What database support is available? - Fauna', {matchCase: false})
  })
  
 
  
})

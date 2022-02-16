describe('Turing Cafe Reservation Displays', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to visit the main page and the user will see the application name', () => {
    cy.contains('Turing Cafe Reservations')
  });

   it('Should display a reservation card with users name', () => {
    cy.get('.card')
      .contains('Christie')
  });

  it('Should have a date for reservation', () => {
      cy.get('.card')
      .contains('12/29')
  });

  it('Should have a time for the reservation', () => {
    cy.get('.card')
      .contains('7:00 pm')
  });

  
  it('Should display number of guests', () => {
    cy.get('.card')
      .contains('Number of Guests: 12')
  });

    it('Should display a cancel button', () => {
    cy.get('.card')
      .find('button').contains('Cancel')
  });
  
  it('Should display 9 reservation cards', () => {
    cy.get('.card')
      .should('have.length', 9)
  }); 

    it('Should have input fields to enter a new reservation and a new reservation is created', () => {
        cy.get('input').get('.name-input').type('Christine')
        cy.get('input').get('.date-input').type('12/26')
        cy.get('input').get('.time-input').type('8')
        cy.get('input').get('.number-input').type('7')
        cy.get('button').contains("Make a reservation").click()
        cy.get('.card').contains('Christine')
        cy.get('.card').contains('12/26')
        cy.get('.card').contains('8 pm')
        cy.get('.card').contains('Number of Guests: 7')
        
    });
});
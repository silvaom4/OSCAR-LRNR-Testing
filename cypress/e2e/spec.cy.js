describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

// describe('My second test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })

// })

describe("My third test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type");
    // cy.contains('hype') this will fail
  });
});

describe("My fourth test", () => {
  it('finds the content "type"', () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();

    //should be on a new URL which
    //includes '/commands/actions'

    cy.url().should("include", "/commands/actions");

    //In general, the structure of your test
    //should flow query -> query -> command or assertion(s).
    //It's best practice not to chain anything
    //after an action command;

    //get an input, type into it

    cy.get(".action-email").type("fake@email.com");

    // verify that the value has been updated
    cy.get(".action-email").should("have.value", "fake@email.com");
  });
});

describe("My fifth test", () => {
  it('finds the content "type"', () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");
    

    cy.get('.action-email')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')


  
  });
});

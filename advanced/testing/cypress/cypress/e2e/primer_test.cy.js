/// <reference types="cypress" />

describe("Carga la página principal", () => {
  it("Cargando", () => {
    cy.visit("http://127.0.0.1:5500/advanced/testing/cypress/index.html");

    //Verifica elemento y su texto
    cy.contains(
      '[data-cy="titulo-proyecto"]',
      "Administrador de Pacientes de Veterinaria"
    );

    //Verifica que existe
    cy.get('[data-cy="titulo-proyecto"]').should("exist");

    //Verificar que exista el elemento y contega un texto
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke("text")
      .should("equal", "Administrador de Pacientes de Veterinaria");

    //Verificar el texto de las citas
    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("not.equal", "Pepe");
  });
});

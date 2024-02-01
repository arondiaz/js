/// <reference types="cypress" />

describe("Carga la página principal", () => {
  it("Cargando", () => {
    cy.visit("http://127.0.0.1:5500/advanced/testing/cypress/index.html");

    cy.contains("h1", "Administrador de Pacientes de Veterinaria");

    cy.get("h1").should("exist");
  });
});

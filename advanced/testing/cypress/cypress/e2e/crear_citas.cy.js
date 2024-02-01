/// <reference types="cypress" />

describe("Validacion de formulario", () => {
  it("Submit de formulario", () => {
    cy.visit("http://127.0.0.1:5500/advanced/testing/cypress/index.html");

    //Completando formulario
    cy.get('[data-cy="mascota-input"]').type("Pepito");

    cy.get('[data-cy="propietario-input"]').type("Pepe");

    cy.get('[data-cy="telefono-input"]').type("9787945");

    cy.get('[data-cy="fecha-input"]').type("2024-01-02");

    cy.get('[data-cy="hora-input"]').type("12:30");

    cy.get('[data-cy="sintomas-textarea"]').type("No come");

    cy.get('[data-cy="submit-button"]').click();

    cy.get("[data-cy=citas-heading]")
      .invoke("text")
      .should("equal", "Administra tus Citas");

    //Seleccionando alerta
    cy.get('[data-cy="alerta"]')
      .invoke("text")
      .should("equal", "Se agregó correctamente");

    cy.get('[data-cy="alerta"]').should("have.class", "alert-success");
  });
});

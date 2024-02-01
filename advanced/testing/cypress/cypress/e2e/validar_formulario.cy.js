/// <reference types="cypress" />

describe("Validacion de formulario", () => {
  it("Submit de formulario", () => {
    cy.visit("http://127.0.0.1:5500/advanced/testing/cypress/index.html");

    //Submit al formulario
    cy.get('[data-cy="formulario"]').submit("");

    //Verifica que existe la alerta
    cy.get('[data-cy="alerta"]')
      .invoke("text")
      .should("equal", "Todos los campos son Obligatorios");

    cy.get('[data-cy="alerta"]').should("have.class", "alert-danger");
  });
});

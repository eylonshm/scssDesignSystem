/* eslint-disable */
/// <reference types="cypress" />

describe("Counter is indeed working", () => {
  it("Count is exists and initialy set to zero", () => {
    cy.visit("/s");
    cy.get('[data-cy="counter"]').should("be.visible");
    cy.get('[data-cy="counter"]').should("have.text", "Count: 0");
  });
  it("Increment button is clickable", () => {
    cy.get('[data.cy="counter-inc-btn"]').should("be.visible").click();
    cy.get('[data-cy="counter"]').should("be.visible");
    cy.get('[data-cy="counter"]').should("have.text", "Count: 1");
  });
  it("Increment is working more than once", () => {
    cy.get('[data-cy="counter-inc-btn"]').should("be.visible").click();
    cy.get('[data-cy="counter"]').should("have.text", "Count: 2");
  });
  it("Decrement button is clickable and changes count", () => {
    cy.get('[data-cy="counter-dec-btn"]').should("be.visible").click();
    cy.get('[data-cy="counter"]').should("have.text", "Count: 1");
  });
});

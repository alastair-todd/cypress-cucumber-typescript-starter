import {Given} from "cypress-cucumber-preprocessor/steps";

Given('I am here', () => {
  cy.visit("/");
});

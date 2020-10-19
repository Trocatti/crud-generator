import {
  create,
  filter,
  list
} from "../../../../src/view-test/crud/configurations/formConfiguration";

describe("Crud Test", () => {
  beforeEach(function() {
    cy.visit("/hidden/tests/crud");
  });

  if (create) {
    it('Verify if the "Create" have been created', () => {
      itHaveBeenCreated("#createHandler", create.title, "form");
    });
  }

  if (filter) {
    it('Verify if the "Filter" have been created', () => {
      itHaveBeenCreated("#filterHandler", filter.title, "form");
    });
  }

  if (list) {
    it('Verify if the "List" have been created', () => {
      itHaveBeenCreated("#listHandler", list.title, "table");
    });
  }
});

function itHaveBeenCreated(id, title, tag) {
  cy.get(id).within(() => {
    cy.get("div.card-header h4.card-title")
      .should("not.have.html", "")
      .and("have.html", title);
    cy.get(`div.card-body ${tag}`);
  });
}

import { rows } from "../../../../src/view-test/formHandlerTest/configurations/formConfiguration";

describe("FormHandler Test", () => {
  beforeEach(function() {
    cy.visit("/hidden/tests/formhandler");
  });

  it("Verify if the title have been created and that is not empty", () => {
    cy.get("div.card div.card-header h4.card-title").should(
      "not.have.html",
      ""
    );
  });

  it("Verify if the collapse have been created", () => {
    cy.get("div.card div.collapse");
  });

  it("Verify if the fields have been created inside the collapse", () => {
    findFieldSet(validateFieldsCreated);
  });

  it("Verify if the buttons have been created inside the collapse", () => {
    findFieldSet(validateButtonsCreated);
  });
});

function findFieldSet(callbackfn) {
  rows.forEach(rows =>
    rows.fields.forEach(field => {
      cy.get("div.card div.collapse form div fieldset")
        .should("have.attr", "component", field.container.component)
        .within(() => {
          callbackfn(field);
        });
    })
  );
}

function validateButtonsCreated(field) {
  if (field.field.component.includes("button")) {
    cy.get(`[caption="${field.field.caption}"]`).should(
      "have.attr",
      "type",
      field.field.type
    );
    if (field.field.type.includes("button")) {
      cy.get(`[caption="${field.field.caption}"]`).should(
        "not.have.attr",
        "method",
        ""
      );
    }
  }
}

function validateFieldsCreated(field) {
  if (!field.field.component.includes("button")) {
    cy.get("legend").contains(`${field.container.label}:`);

    cy.get(`[name="${field.field.modelName}Name"]`).within($cmp => {
      if (
        !["date", "time", "range", "color", undefined].includes(
          field.field.type
        )
      ) {
        cy.get($cmp).should("have.attr", "placeholder");
      }

      if (field.field.component.includes("select")) {
        expect($cmp.children()).to.have.length(field.field.options.length + 1);
      }

      if (field.field.component.includes("checkbox")) {
        expect($cmp).to.have.length(field.field.options.length);
      }
    });
  }
}

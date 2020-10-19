import rows from "../../../../src/view-test/formGeneratorTest/configurations/rows";

describe("FormGenerator Test", () => {
  beforeEach(function() {
    cy.visit("/hidden/tests/formgenerator");
  });

  it("Verify if the fields have been created", () => {
    findFieldSet(validateFieldsCreated);
  });

  it("Verify if the buttons have been created", () => {
    findFieldSet(validateButtonsCreated);
  });
});

function findFieldSet(callbackfn) {
  rows.forEach(rows =>
    rows.fields.forEach(field => {
      cy.get("form div fieldset")
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
    if (field.field.type?.includes("button")) {
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

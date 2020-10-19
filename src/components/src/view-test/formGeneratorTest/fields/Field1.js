import Field from "../../../../formHandler/Field";

export default class Field1 extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Campo texto"),

      field: {
        placeholder: "Campo texto",
        modelName: "field1",
        component: super.getFields().input,
        type: "text",
        validations
      }
    };
  }
}

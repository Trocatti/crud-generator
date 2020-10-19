import Field from "../../../../formHandler/Field";

export default class Field1 extends Field {
  static getField(validations, modelName) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Campo texto"),

      field: {
        placeholder: "Campo texto",
        modelName,
        component: super.getFields().input,
        type: "text",
        validations
      }
    };
  }
}

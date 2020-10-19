import Field from "../../../../formHandler/Field";

export default class Field4 extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Campo number"),

      field: {
        placeholder: "Campo number",
        modelName: "field4",
        component: super.getFields().input,
        type: "number",
        validations
      }
    };
  }
}

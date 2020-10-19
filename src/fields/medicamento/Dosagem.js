import Field from "@/components/formHandler/Field";

export default class Data extends Field {
  static getField(validations = {}) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Dosagem"),

      field: {
        placeholder: "Informe a Dosagem",
        modelName: "posologia",
        component: super.getFields().input,
        type: "text",
        validations
      }
    };
  }
}

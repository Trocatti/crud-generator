import Field from "@/components/formHandler/Field";

export default class Data extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Posologia"),

      field: {
        placeholder: "Informe a Posologia",
        modelName: "posologia",
        component: super.getFields().input,
        type: "text",
        validations
      }
    };
  }
}

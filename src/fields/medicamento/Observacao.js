import Field from "@/components/formHandler/Field";

export default class Data extends Field {
  static getField(validations = {}) {
    return {
      ...super.getColumnDefault(6),
      ...super.getContainerDefault("Observação"),

      field: {
        placeholder: "Informe a Observação",
        modelName: "observacao",
        component: super.getFields().textArea,
        type: "text",
        validations
      }
    };
  }
}

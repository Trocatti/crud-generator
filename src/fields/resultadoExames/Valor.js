import Field from "@/components/formHandler/Field";

export default class Valor extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(4),
      ...super.getContainerDefault("Valor"),

      field: {
        placeholder: "Informe o Valor",
        modelName: "valor",
        component: super.getFields().input,
        type: "number",
        validations: { ...validations }
      }
    };
  }
}

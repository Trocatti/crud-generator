import Field from "@/components/formHandler/Field";

export default class Nome extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Valor"),

      field: {
        placeholder: "Informe o valor",
        modelName: "valor",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 3 },
        autocomplete: "off"
      }
    };
  }
}

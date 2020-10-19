import Field from "@/components/formHandler/Field";

export default class Quantidade extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Quantidade"),

      field: {
        placeholder: "Informe a Quantidade",
        modelName: "quantidade",
        component: super.getFields().input,
        type: "number",
        validations: { ...validations, min_value: 0 },
        min: 0
      }
    };
  }
}

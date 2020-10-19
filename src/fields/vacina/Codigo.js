import Field from "@/components/formHandler/Field";

export default class Codigo extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Código"),

      field: {
        placeholder: "Informe o código",
        modelName: "codigo",
        component: super.getFields().input,
        format: value => value.replace(/\D/g, ""),
        type: "text",
        validations: { ...validations, min_value: 1 },
        min: 1,
        autocomplete: "off"
      }
    };
  }
}

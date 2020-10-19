import Field from "@/components/formHandler/Field";

export default class Fabricante extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(4),
      ...super.getContainerDefault("Fabricante"),

      field: {
        placeholder: "Informe o Fabricante",
        modelName: "fabricante",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 3 },
        autocomplete: "off"
      }
    };
  }
}

import Field from "@/components/formHandler/Field";

export default class UnidadeMedida extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Unidade de medida"),

      field: {
        placeholder: "Informe a Unidade de medida",
        modelName: "unidadeMedida",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 2 },
        autocomplete: "off"
      }
    };
  }
}

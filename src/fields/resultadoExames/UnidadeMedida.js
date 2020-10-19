import Field from "@/components/formHandler/Field";

export default class UnidadeMedida extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(4),
      ...super.getContainerDefault("Unidade de Medida"),

      field: {
        placeholder: "Informe a Unidade de medida",
        modelName: "unidadeMedida",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 2 }
      }
    };
  }
}

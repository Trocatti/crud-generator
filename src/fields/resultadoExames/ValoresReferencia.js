import Field from "@/components/formHandler/Field";

export default class ValoresReferencia extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Valores de referência"),

      field: {
        placeholder: "Informe os Valores de referência",
        modelName: "valoresReferencia",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 3 }
      }
    };
  }
}

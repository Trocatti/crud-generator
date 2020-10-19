import Field from "@/components/formHandler/Field";

export default class Nome extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(6),
      ...super.getContainerDefault("Nome"),

      field: {
        placeholder: "Informe o Nome",
        modelName: "nome",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 3 }
      }
    };
  }
}

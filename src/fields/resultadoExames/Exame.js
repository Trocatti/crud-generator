import Field from "@/components/formHandler/Field";

export default class Exame extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(4),
      ...super.getContainerDefault("Exame"),

      field: {
        placeholder: "Informe o Exame",
        modelName: "exame",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 3 }
      }
    };
  }
}

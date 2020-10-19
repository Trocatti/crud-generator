import Field from "@/components/formHandler/Field";

export default class Agente extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(4),
      ...super.getContainerDefault("Agente"),

      field: {
        placeholder: "Informe o Agente",
        modelName: "agente",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 3 }
      }
    };
  }
}

import Field from "@/components/formHandler/Field";

export default class Notas extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(4),
      ...super.getContainerDefault("Chave"),

      field: {
        placeholder: "Informe as Notas",
        modelName: "notas",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 2 }
      }
    };
  }
}

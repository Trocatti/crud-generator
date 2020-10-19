import Field from "@/components/formHandler/Field";

export default class ReacoesAdversas extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(4),
      ...super.getContainerDefault("Reação adversa"),
      field: {
        placeholder: "Informe se houve alguma reação adversa",
        modelName: "reacoesAdversas",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 3 }
      }
    };
  }
}

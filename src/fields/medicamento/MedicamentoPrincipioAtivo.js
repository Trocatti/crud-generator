import Field from "@/components/formHandler/Field";

export default class Data extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(6),
      ...super.getContainerDefault("Medicamento ou Princípio Ativo"),

      field: {
        placeholder: "Informe o Medicamento ou Princípio Ativo",
        modelName: "medicamentoPrincipioAtivo",
        component: super.getFields().input,
        type: "text",
        validations
      }
    };
  }
}

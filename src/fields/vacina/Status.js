import Field from "@/components/formHandler/Field";

export default class Status extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Status"),

      field: {
        modelName: "status",
        component: super.getFields().select,
        options: [
          { text: "Selecione", value: null },
          { text: "Dentro da data prevista", value: 0 },
          { text: "Fora da data prevista", value: 0 }
        ],
        validations
      }
    };
  }
}

import Field from "../../../../formHandler/Field";

export default class Tabela extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Campo select"),

      field: {
        component: super.getFields().select,
        modelName: "field2",
        options: [
          { text: "Opção 1", value: 0 },
          { text: "Opção 2", value: 1 },
          { text: "Opção 3", value: 2 },
          { text: "Opção 4", value: 3 },
          { text: "Opção 5", value: 4 },
          { text: "Opção 6", value: 5 }
        ],
        validations
      }
    };
  }
}

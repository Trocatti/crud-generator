import Field from "../../../../formHandler/Field";

export default class Tabela extends Field {
  static getField(validations, modelName) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Campo checkbox"),

      field: {
        modelName,
        component: super.getFields().checkboxGroup,
        options: [
          { text: "Opção 1", value: 0 },
          { text: "Opção 2", value: 1 },
          { text: "Opção 3", value: 2 }
        ],
        validations
      }
    };
  }
}

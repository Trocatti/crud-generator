import Field from "@/components/formHandler/Field";
import tabelaEnum from "./enums/tabelaEnum";

export default class Tabela extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Tabela"),

      field: {
        modelName: "tabela",
        component: super.getFields().select,
        options: tabelaEnum,
        validations
      }
    };
  }
}

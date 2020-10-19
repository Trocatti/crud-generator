import Field from "@/components/formHandler/Field";
import tipoEnum from "./enums/TipoEnum";

export default class Tabela extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Tipo"),

      field: {
        modelName: "tipo",
        component: super.getFields().select,
        options: tipoEnum,
        validations
      }
    };
  }
}

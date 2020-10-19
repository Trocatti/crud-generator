import Field from "@/components/formHandler/Field";
import statusEnum from "./enums/StatusEnum";

export default class Tabela extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Status"),

      field: {
        modelName: "status",
        component: super.getFields().select,
        options: statusEnum,
        validations
      }
    };
  }
}

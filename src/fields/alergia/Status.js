import Field from "@/components/formHandler/Field";
import statusEnum from "./enums/statusEnum";

export default class Status extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Status"),

      field: {
        modelName: "status",
        component: super.getFields().radioGroup,
        options: statusEnum,
        validations
      }
    };
  }
}

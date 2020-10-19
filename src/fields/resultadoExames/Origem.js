import Field from "@/components/formHandler/Field";
import origemEnum from "./enums/origemEnum";

export default class Origem extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Origem"),

      field: {
        modelName: "origem",
        component: super.getFields().radioGroup,
        options: origemEnum,
        validations
      }
    };
  }
}

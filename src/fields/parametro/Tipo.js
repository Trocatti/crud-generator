import Field from "@/components/formHandler/Field";
import tipoEnum from "./enums/tipoEnum";

export default class Tipo extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Tipo"),

      field: {
        modelName: "tipo",
        component: super.getFields().select,
        options: tipoEnum,
        validations: { ...validations }
      }
    };
  }
}

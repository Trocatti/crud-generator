import Field from "@/components/formHandler/Field";
import categoriaEnum from "./enums/categoriaEnum";

export default class Categoria extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Categoria"),

      field: {
        modelName: "categoria",
        component: super.getFields().select,
        options: categoriaEnum,
        validations
      }
    };
  }
}

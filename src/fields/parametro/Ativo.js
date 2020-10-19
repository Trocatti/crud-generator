import Field from "@/components/formHandler/Field";

export default class Ativo extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Ativo"),

      field: {
        switch: true,
        size: "lg",
        name: "check-ativo",
        modelName: "ativo",
        component: super.getFields().checkbox,
        validations
      }
    };
  }
}

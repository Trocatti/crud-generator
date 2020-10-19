import Field from "@/components/formHandler/Field";

export default class Data extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Data"),

      field: {
        placeholder: "dd/MMMM/aaaa",
        modelName: "dataDose",
        component: super.getFields().input,
        type: "date",
        validations
      }
    };
  }
}

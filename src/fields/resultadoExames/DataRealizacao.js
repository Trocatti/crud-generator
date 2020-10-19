import Field from "@/components/formHandler/Field";

export default class DataRealizacao extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Data realização"),

      field: {
        placeholder: "Informe a Data de realização",
        modelName: "dataRealizacao",
        component: super.getFields().input,
        type: "date",
        validations: { ...validations }
      }
    };
  }
}

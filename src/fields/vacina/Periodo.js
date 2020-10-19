import Field from "@/components/formHandler/Field";

export default class Periodo extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Vacinar até"),

      field: {
        modelName: "periodo",
        component: super.getFields().select,
        options: [
          { text: "Selecione", value: null },
          { text: "Se gestante", value: 0 },
          { text: "Ao nascer", value: 1 },
          { text: "Aos 2 meses", value: 2 },
          { text: "Aos 4 meses", value: 3 },
          { text: "Aos 6 meses", value: 4 },
          { text: "Aos 15 meses", value: 5 },
          { text: "Dos 10 aos 19 anos", value: 6 },
          { text: "Dos 20 aos 59 anos", value: 7 },
          { text: "60 anos ou mais", value: 8 }
        ],
        validations
      }
    };
  }
}

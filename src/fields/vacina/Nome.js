import Field from "@/components/formHandler/Field";
import VacinaService from "@/services/VacinaService";

export default class Nome extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(4),
      ...super.getContainerDefault("Nome"),

      field: {
        placeholder: "Informe o Nome",
        modelName: "nome",
        component: super.getFields().input,
        type: "text",
        validations: { ...validations, min: 3 },
        autocomplete: "off",
        search: {
          service: new VacinaService(),
          searchField: [
            {
              id: "codigo",
              type: "number"
            },
            {
              id: "nome",
              type: "string"
            }
          ],
          displayField: ["codigo", "nome"]
        }
      }
    };
  }
}

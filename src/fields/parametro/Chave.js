import Field from "../../components/formHandler/Field";
import FieldRules from "../../components/formHandler/FieldRules";
import CrudTypes from "../../components/crud/CrudTypes";

export default class Codigo extends Field {
  static getField(validations) {
    return {
      ...super.getColumnDefault(),
      ...super.getContainerDefault("Chave"),

      field: {
        component: super.getFields().input,
        placeholder: "Informe a chave",
        type: "text",
        autocomplete: "off",
        modelName: "chave",
        validations: { ...validations, min: 3 },
        format: value => value.replace(/\d/g, ""),
        rules: (value, _this) => {
          // Regra: valor do campo Chave deve ser igual a 'exemplo'
          const valid = value === "exemplo";

          // Inicializa a classe FieldRules, onde contém os métodos assistentes...
          // E passa para o construtor o campo(elemento) e onde a regra será aplicada, neste caso, somente na criação.
          const fieldRules = new FieldRules(_this, {
            CREATE: CrudTypes.CREATE
          });

          // Desabilita o próprio elemento(Chave), além do 'disabled' existe 'readonly' e 'hidden'
          if (valid) _this.disabled = true;

          // Desabilitar os campos desejados, conforme a regra descrita acima
          fieldRules.disabledFields(["tipo"], valid);

          // Esconder os campos desejados, conforme a regra descrita acima
          fieldRules.hiddenFields(["ativo"], !valid);

          // Somente leitura nos campos desejados, conforme a regra descrita acima
          fieldRules.readOnlyFields(["valor"], !valid);

          // Aplica o(s) valore(s) no(s) campo(s) desejado(s).
          // A key do objeto deve ser o modelName dos campos desejados, seguido do valor respectivo aos mesmos.
          fieldRules.setFieldsValues({ tipo: 0 });

          // Retorna o valor do campo Valor
          const valor = fieldRules.getFieldValue("valor");

          // Apresentará uma mensagem quando o valor do campo for 'parâmetro'(valid == true)
          if (valid && valor) {
            fieldRules.toastMessage({
              message: "O campo Ativo foi apresentado.",
              title: "Atenção!",
              type: "warning"
            });
          }
        }
      }
    };
  }
}

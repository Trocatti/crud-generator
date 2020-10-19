import CrudTypes from "../../components/crud/CrudTypes";

export default class FieldRules {
  constructor(component, rulesAppliedTo = CrudTypes) {
    this.component = component;
    this.rulesAppliedTo = rulesAppliedTo;
  }

  /**
   * Regra para esconder o campo desejado
   * @param {String} fields campos em que a regra será aplicada
   * @param {Boolean} valid flag que indica a condição que a regra será aplicada
   */
  hiddenFields(fields, valid) {
    this._createRule({
      hidden: {
        ...this._getFieldsAndCondition(fields, valid)
      }
    });
  }

  /**
   * Regra para desabilidar o campo desejado
   * @param {String} fields campos em que a regra será aplicada
   * @param {Boolean} valid flag que indica a condição que a regra será aplicada
   */
  disabledFields(fields, valid) {
    this._createRule({
      disabled: {
        ...this._getFieldsAndCondition(fields, valid)
      }
    });
  }

  /**
   * Regra para tornar o campo desejado em somete leitura
   * @param {String} fields campos em que a regra será aplicada
   * @param {Boolean} valid flag que indica a condição que a regra será aplicada
   */
  readOnlyFields(fields, valid) {
    this._createRule({
      readonly: {
        ...this._getFieldsAndCondition(fields, valid)
      }
    });
  }

  /**
   * Sobreescreve o valor dos campos desejados
   * @param {Object} fields Objeto com os campos e seus respectivos valores,
   * onde a chave é o nome do modelName do campo desejado
   */
  setFieldsValues(fields) {
    Object.keys(fields).forEach(f => {
      this._getRulesAppliedTo(() => (this.component.model[f] = fields[f]));
    });
  }

  /**
   * Retorna o valor do campo desejado
   * @param {String} field modelName do campo alvo
   */
  getFieldValue(field) {
    return this.component.model[field];
  }

  /**
   * Apresentará uma mensagem na tela conforme opções passadas.
   * @param {Object} options Object {message, title, type(warning, success, danger, primary etc)}
   */
  toastMessage(options) {
    const toasts = () => {
      this.component.$bvToast.toast(options.message, {
        title: options.title,
        variant: options.type,
        toaster: "b-toaster-top-right",
        solid: true
      });
    };
    this._getRulesAppliedTo(toasts);
  }

  /**
   * Método privado
   * @param {Object} rule Objeto com as regras
   */
  _createRule(rule) {
    const applyRulesFields = () => {
      this.component.applyRulesFields(rule);
    };
    this._getRulesAppliedTo(applyRulesFields);
  }

  /**
   * Método privado
   * @param {Function} callBackRules função callback
   */
  _getRulesAppliedTo(callBackRules) {
    Object.keys(this.rulesAppliedTo).forEach(rat => {
      if (rat === this.component.crudType) {
        callBackRules();
      }
    });
  }

  /**
   * Método privado
   * @param {*} fields campos onde as regras serão aplicadas
   * @param {*} valid condição da aplicação da regra
   */
  _getFieldsAndCondition(fields, valid) {
    return {
      fields,
      valid
    };
  }
}

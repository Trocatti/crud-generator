export default class HandlerRules {
  static handler(rules, formRef) {
    const _ruleHidden = rules.hidden || {};
    const _ruleDisabled = rules.disabled || {};
    const _ruleReadOnly = rules.readonly || {};

    if (_hasFieldsRules(_ruleHidden)) {
      _ruleHideFields(_ruleHidden, formRef);
    }

    if (_hasFieldsRules(_ruleDisabled)) {
      _ruleDisabledFields(_ruleDisabled, formRef);
    }

    if (_hasFieldsRules(_ruleReadOnly)) {
      _ruleReadOnlyFields(_ruleReadOnly, formRef);
    }
  }
}

/**
 * Metodos privados e auxiliares
 */

function _ruleHideFields(rule, formRef) {
  const callbackHiddenRule = (component, valid) => {
    if (valid) {
      component.style.display = "none";
      _messageRules(formRef, component, "Escondido");
    } else {
      component.style.display = "";
    }
  };
  _applyRuleByField(rule, formRef, callbackHiddenRule, true);
}

function _ruleDisabledFields(rule, formRef) {
  const callbackDisabledRule = (component, valid) => {
    if (valid) {
      component.disabled = valid;
      _messageRules(formRef, component, "Desabilitado");
    } else {
      component.disabled = valid;
    }
  };
  _applyRuleByField(rule, formRef, callbackDisabledRule);
}

function _ruleReadOnlyFields(rule, formRef) {
  const callbackReadonlyRule = (component, valid) => {
    if (valid) {
      component.readonly = valid;
      _messageRules(formRef, component, "como Somente Leitura");
    } else {
      component.readonly = valid;
    }
  };
  _applyRuleByField(rule, formRef, callbackReadonlyRule);
}

function _hasFieldsRules(rule) {
  return rule.hasOwnProperty("fields");
}

/**
 * Retorna a referencia do container(coluna)
 * @param {Object} element Referencia raiz do elemento
 */
function _getContainer(element) {
  return element.$el.parentElement;
}

/**
 * Retorna a referencia do elemento(input, select etc)
 * @param {Object} element Referencia raiz do elemento
 */
function _getElement(element) {
  return element?.$refs?.field?.$refs?.componentType;
}

/**
 * Retorna a referencia do component para que assim,
 * consiga encontrar o container(column) e ou element(input etc) do mesmo
 * @param {Object} formRef Referencia do formulario
 * @param {String} field Nome do campo que sera buscada a referencia
 */
function _getComponent(formRef, field) {
  const columnsRefs = formRef.$refs;
  const containersRefs = columnsRefs[field];
  const index = containersRefs.style ? 0 : 1;
  return containersRefs[index];
}

/**
 * Aplica a condicao da regra para cada campo informado na regra
 * @param {Array} rule Regra que sera aplicada
 * @param {Object} formRef Referencia do formulario
 * @param {Function} callbackRule Acao da regra que sera executada
 * @param {Boolean} isContainer Indica se o elemento é um container
 */
function _applyRuleByField(rule, formRef, callbackRule, isContainer = false) {
  const fields = rule.fields;
  fields.forEach(field => {
    const component = _getReferenceComponent(formRef, field, isContainer);
    if (component) {
      const valid = rule.valid;
      callbackRule(component, valid);
    }
  });
}

/**
 * Retorna a referencia do elemento desejado quando é um container
 * ou retorna um objeto com a referencia do container do elemento e a referencia do elemento
 * @param {Object} formRef Referencia do formulario
 * @param {Array} field Campos onde os eventos seram executados
 * @param {Boolean} isContainer Indica se o elemento é um container
 */
function _getReferenceComponent(formRef, field, isContainer = false) {
  const element = _getComponent(formRef, field);
  let component = _getContainer(element);

  if (!isContainer) {
    component = _getElement(element);
  }
  return component;
}

/**
 * Sera apresentada uma mensagem de alerta no console do navegador,
 * quando o campo for obrigatorio e nao tem valor informado.
 * @param {Object} formRef Referencia do formulario
 * @param {*} element Referencia do elemento onde a regra sera aplicada
 * @param {*} messageRule Mensagem da regra que sera executada
 */
function _messageRules(formRef, element, messageRule) {
  requestAnimationFrame(() => {
    const _field = element?.field;
    if (_field) {
      const _modelName = _field.modelName;
      const _value = element.model[_modelName];
      if (_field.validations?.required && _value === null) {
        formRef.$log.warn(
          `O campo "${_modelName}" está definido como obrigatório, porém está ${messageRule} e vazio.
           Desta forma a informação preenchida no formulário não será enviada para o servidor.`
        );
      }
    }
  });
}

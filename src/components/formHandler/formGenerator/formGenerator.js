import { ValidationObserver, localize, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import ptBR from "vee-validate/dist/locale/pt_BR.json";
import { BFormRow, BCol } from "bootstrap-vue";
import mixinBehaviour from "../../../plugins/mixinBehaviour";
import HandlerRules from "../HandlerRules";

// Importação das regras de validação
for (const rule in rules) {
  extend(rule, rules[rule]);
}

localize("pt_BR", ptBR);

export default {
  name: "formGenerator",
  mixins: [mixinBehaviour],
  components: {
    Container: () => import("./container/Container.vue"),
    ValidationObserver,
    BFormRow,
    BCol
  },
  props: {
    model: {
      type: Object
    },
    formList: {
      type: Array,
      required: true
    },
    showPreLoader: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      required: false
    }
  },
  methods: {
    validateForm() {
      return this.$refs.observer.validate();
    },

    cleanForm() {
      this.selfModel = _defineModel(this.formList, this.model);
    },

    emitEvent(method) {
      this.$emit("emitEvent", method);
    },

    onReset() {
      this.cleanForm();
      requestAnimationFrame(() => this.validateForm());
      this.$emit("dispararReset");
    },

    onSubmit() {
      this.validateForm().then(valid => {
        if (valid) {
          this.$emit("setPreLoaderVisibility", this.showPreLoader);

          new Promise((resolve, reject) =>
            this.$emit("dispararSubmit", this.selfModel, resolve, reject)
          )
            .then(() => {
              this.cleanForm();
              requestAnimationFrame(() => {
                this.$refs.observer.reset();
              });
            })
            .finally(() => this.$emit("setPreLoaderVisibility", false));
        }
      });
    },

    applyRules(rules = {}) {
      HandlerRules.handler(rules, this);
    }
  },

  data() {
    return {
      selfModel: _defineModel(this.formList, this.model)
    };
  }
};

/**
 * Cria um objeto que servirá como "receptáculo" dos valores que serão preenchidos em cada um dos inputs do formulário.
 * Este objeto é criado baseando-se nos inputs que virão através do formList,
 * utilizando o modelName para definir o nome de cada atributo.
 * @param {*} formList Objeto contendo as propriedades dos inputs do formulário
 */
function _defineModel(formList, model) {
  if (model) {
    return model;
  }

  let localModel = {};
  formList.forEach(row => {
    row.fields
      .filter(children => children.field.modelName)
      .forEach(children => {
        Object.defineProperty(localModel, children.field.modelName, {
          value: null,
          writable: true,
          enumerable: true,
          configurable: true
        });
      });
  });
  return localModel;
}

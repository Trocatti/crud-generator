import Vue from "vue";
import lodash from "lodash";
import { ToastPlugin } from "bootstrap-vue";

Vue.use(ToastPlugin);

export default {
  components: {
    DynValidation: () =>
      import("../components/dynValidation/DynValidation.vue"),
    lodash
  },
  props: {
    model: {
      type: Object
    },
    container: {
      type: Object,
      required: true
    },
    field: {
      type: Object,
      required: true
    },
    bindField: {
      type: Object,
      required: true
    },
    crudType: {
      type: String,
      required: false
    }
  },
  methods: {
    onInput(value) {
      this.onInputMixin(value);
    },

    onInputMixin(value) {
      _formatterValue(value, this);
      this.debounceApplyRules(value);
    },

    debounceApplyRules(value) {
      this.debounceRules(this.field.rules, value, this);
    },

    applyRulesFields(rules) {
      this.$emit("applyRules", rules);
    },

    rules(callbackRules, value, component) {
      if (callbackRules) {
        callbackRules(value, component);
      }
    }
  },

  created() {
    // eslint-disable-next-line
    this.debounceRules = _.debounce(this.rules, 500);
  },

  mounted() {
    // init
    setTimeout(
      () =>
        requestAnimationFrame(() =>
          this.rules(this.field.rules, undefined, this)
        ),
      200
    );
  },

  data() {
    return {
      disabled: false,
      readonly: false,
      hidden: false
    };
  }
};

function _formatterValue(value, self) {
  if (self.field.format) {
    self.$nextTick().then(() => {
      self.model[self.field.modelName] = self.field.format(value);
    });
  }
}

export default {
  name: "field",
  components: {
    DynDefault: () => import("./components/dynDefault/DynDefault.vue"),
    DynComplete: () => import("./components/dynComplete/DynComplete.vue"),
    DynButton: () => import("./components/dynButton/DynButton.vue"),
    DynSelect: () => import("./components/dynSelect/DynSelect.vue")
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
    type: {
      type: String,
      required: false
    }
  },
  computed: {
    componentType() {
      let component = "DynDefault";
      if (this.field.search) {
        component = "DynComplete";
      } else if (this.field.component.includes("button")) {
        component = "DynButton";
      } else if (this.field.component.includes("select")) {
        component = "DynSelect";
      }
      return component;
    },

    bindField() {
      const _excludeBind = [
        "format",
        "rules",
        "modelName",
        "validations",
        "component",
        "method"
      ];
      const _selfFields = Object.assign({}, this.field);
      _excludeBind.forEach(e => {
        if (_selfFields.hasOwnProperty(e)) {
          delete _selfFields[e];
        }
      });
      return _selfFields;
    }
  },
  methods: {
    emitEvent(method) {
      this.$emit("emitEvent", method);
    },

    applyRules(fields) {
      this.$emit("applyRules", fields);
    }
  }
};

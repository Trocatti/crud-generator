import { BFormGroup } from "bootstrap-vue";

export default {
  name: "container",
  components: {
    Field: () => import("../field/Field.vue"),
    BFormGroup
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    field: {
      type: Object,
      required: true
    },
    container: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: false
    }
  },
  computed: {
    required() {
      return this.field.validations && this.field.validations.required
        ? "required"
        : "";
    },

    label() {
      return this.container.label ? this.container.label.concat(":") : "";
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

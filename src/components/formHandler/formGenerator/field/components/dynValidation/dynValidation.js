import { ValidationProvider } from "vee-validate";

export default {
  name: "dynValidation",
  components: {
    ValidationProvider,
    ValidationFeedBack: () =>
      import("../dynValidationFeedBack/DynValidationFeedBack.vue")
  },
  props: {
    container: {
      type: Object,
      required: true
    },
    field: {
      type: Object,
      required: true
    }
  },
  methods: {
    validate() {
      this.$refs[this.field.modelName].validate();
    },
    applyRules(fields) {
      this.$emit("applyRules", fields);
    }
  }
};

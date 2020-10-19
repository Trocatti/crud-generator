import { BFormSelect } from "bootstrap-vue";
import mixinField from "../mixinField";

export default {
  name: "dynSelect",
  mixins: [mixinField],
  components: {
    BFormSelect
  },
  methods: {
    validateSelectOnBlur() {
      this.$refs[this.field.modelName]?.validate();
    }
  }
};

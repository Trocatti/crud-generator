import {
  BFormInput,
  BFormCheckboxGroup,
  BFormRadioGroup,
  BFormTextarea,
  BFormCheckbox,
  BFormRadio,
  BFormFile,
  BLink
} from "bootstrap-vue";
import mixinField from "../mixinField";

export default {
  name: "dynDefault",
  mixins: [mixinField],
  components: {
    BFormInput,
    BFormCheckboxGroup,
    BFormRadioGroup,
    BFormTextarea,
    BFormCheckbox,
    BFormRadio,
    BFormFile,
    BLink
  }
};

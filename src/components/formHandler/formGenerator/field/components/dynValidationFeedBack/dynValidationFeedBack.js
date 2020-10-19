import { BFormInvalidFeedback } from "bootstrap-vue";

export default {
  name: "validationFeedBack",
  components: {
    BFormInvalidFeedback
  },
  props: {
    errors: {
      type: Array
    }
  }
};

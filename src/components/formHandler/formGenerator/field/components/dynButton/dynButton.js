import { BButton } from "bootstrap-vue";
import Icon from "vue-awesome/components/Icon.vue";
import "vue-awesome/icons/plus";
import "vue-awesome/icons/eraser";
import "vue-awesome/icons/search";
import "vue-awesome/icons/regular/trash-alt";
import "vue-awesome/icons/pencil-alt";
import "vue-awesome/icons/save";
import "vue-awesome/icons/times";

export default {
  name: "default",
  components: {
    BButton,
    "v-icon": Icon
  },
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  methods: {
    emitEvent(method) {
      this.$emit("emitEvent", method);
    }
  }
};

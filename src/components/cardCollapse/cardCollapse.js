import {
  BCard,
  BCardBody,
  BCardTitle,
  BCollapse,
  VBToggle,
  BCardHeader
} from "bootstrap-vue";
import Icon from "vue-awesome/components/Icon.vue";
import "vue-awesome/icons/plus";
import "vue-awesome/icons/minus";

export default {
  name: "cardCollapse",
  components: {
    BCard,
    BCardBody,
    BCardTitle,
    BCollapse,
    VBToggle,
    BCardHeader,
    "v-icon": Icon
  },
  directives: {
    "b-toggle": VBToggle
  },
  props: {
    title: {
      type: String,
      required: true
    },
    collapse: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      isCollapse: this.collapse.visible
    };
  }
};

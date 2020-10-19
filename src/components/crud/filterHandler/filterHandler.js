import mixinBehaviour from "../../../plugins/mixinBehaviour";
import CrudTypes from "../CrudTypes";

export default {
  name: "filterHandler",
  mixins: [mixinBehaviour],
  components: {
    FormHandler: () =>
      import(
        /* webpackChunkName: "formhandler" */ "../../formHandler/FormHandler.vue"
      )
  },
  props: {
    collapse: {
      type: Object
    },
    rows: {
      type: Array,
      required: true
    },
    title: {
      required: true
    }
  },
  methods: {
    filter(model) {
      this.$emit("filter", this.createFilterBasedOnModel(model));
    },
    cleanFilter() {
      this.$emit("filter");
    }
  },
  data() {
    return {
      type: CrudTypes.FILTER
    };
  }
};

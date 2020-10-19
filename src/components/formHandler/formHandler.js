import { BCard, BCardBody, BCardTitle, BCardHeader } from "bootstrap-vue";

export default {
  name: "formHandler",
  components: {
    FormGenerator: () =>
      import(
        /* webpackChunkName: "formgenerator" */ "./formGenerator/FormGenerator.vue"
      ),
    CardCollapse: () =>
      import(
        /* webpackChunkName: "cardCollapse" */ "../cardCollapse/CardCollapse.vue"
      ),
    PreLoader: () =>
      import(
        /* webpackChunkName: "preloader" */ "../../layout/preloader/PreLoader.vue"
      ),
    BCard,
    BCardTitle,
    BCardHeader,
    BCardBody
  },
  props: {
    model: {
      type: Object,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    formList: {
      type: Array,
      required: true
    },
    collapse: {
      type: Object,
      required: false
    },
    showPreLoader: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      required: false
    }
  },
  methods: {
    dispararSubmit(model, resolve, reject) {
      this.$emit("dispararSubmit", model, resolve, reject);
    },
    dispararReset() {
      this.$emit("dispararReset");
    },
    emitEvent(method) {
      this.$emit(method);
    },
    setPreLoaderVisibility(visibility) {
      this.preLoaderVisible = visibility;
    }
  },
  data() {
    return {
      preLoaderVisible: false
    };
  }
};

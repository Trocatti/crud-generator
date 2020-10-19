export default {
  name: "c-preloader",
  props: {
    showPreLoader: {
      type: Boolean
    },
    hasTitleParent: {
      required: false,
      type: Boolean,
      default: true
    }
  }
};

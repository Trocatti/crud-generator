import formConfiguration from "./configurations/formConfiguration";

export default {
  name: "formHandlerTest",
  components: {
    FormHandler: () =>
      import(
        /* webpackChunkName: "formGenerator" */ "../../../formHandler/FormHandler.vue"
      )
  },
  data() {
    return {
      formConfiguration
    };
  }
};

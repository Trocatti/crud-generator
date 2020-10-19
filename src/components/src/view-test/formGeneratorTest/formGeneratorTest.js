import rows from "./configurations/rows";

export default {
  name: "formGeneratorTest",
  components: {
    FormGenerator: () =>
      import(
        /* webpackChunkName: "formGenerator" */ "../../../formHandler/formGenerator/FormGenerator.vue"
      )
  },
  data() {
    return {
      rows
    };
  }
};

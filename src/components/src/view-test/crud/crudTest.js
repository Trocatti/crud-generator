import crudProperties from "./configurations/formConfiguration";

export default {
  name: "crudTest",
  components: {
    Crud: () =>
      import(/* webpackChunkName: "formGenerator" */ "../../../crud/Crud.vue")
  },
  data() {
    return {
      crudProperties
    };
  }
};

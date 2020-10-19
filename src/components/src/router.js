import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/hidden/tests",
    name: "tests",
    component: () => import(/* webpackChunkName: "testMain" */ "./AppTest.vue"),
    children: [
      {
        path: "formgenerator",
        name: "formGeneratorTest",
        component: () =>
          import(
            /* webpackChunkName: "formGeneratorTest" */ "./view-test/formGeneratorTest/FormGeneratorTest.vue"
          )
      },
      {
        path: "formhandler",
        name: "formHandlerTest",
        component: () =>
          import(
            /* webpackChunkName: "formHandlerTest" */ "./view-test/formHandlerTest/formHandlerTest.vue"
          )
      },
      {
        path: "crud",
        name: "crudTest",
        component: () =>
          import(
            /* webpackChunkName: "crudTest" */ "./view-test/crud/CrudTest.vue"
          )
      }
    ]
  }
];

export default new Router({
  mode: "history",
  base: "components",
  routes
});

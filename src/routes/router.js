import Vue from "vue";
import Router from "vue-router";
import AppRoutes from "./app.routes";
import HomeRoutes from "./home.routes";
import AdminRoutes from "./admin.routes";

Vue.use(Router);

const routes = AppRoutes.concat(HomeRoutes).concat(AdminRoutes);

export default new Router({
  linkActiveClass: "active",
  mode: process.env.VUE_APP_MODE_HISTORY,
  base: `/${process.env.VUE_APP_NAME}`,
  routes
});

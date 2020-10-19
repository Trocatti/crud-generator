import Vue from "vue";
import store from "@/store";
import router from "@/routes/router";
import Routes from "@/plugins/plugins";

new Vue({
  router,
  store,
  render: h => h(Routes(Vue))
}).$mount("#app");

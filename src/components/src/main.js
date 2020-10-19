import Vue from "vue";
import AppTest from "./AppTest.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(AppTest)
}).$mount("#app");

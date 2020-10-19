import Ripple from "vue-ripple-directive";
import { Settings } from "luxon";
import Axios from "axios";
import VueLogger from "vuejs-logger";
import Routes from "@/layout/containers/routes/Routes.vue";

export default Vue => {
  const localVue = Vue;

  Ripple.color = "rgba(000, 000, 000, 0.15)";
  localVue.directive("ripple", Ripple);

  localVue.config.devtools = process.env.NODE_ENV === "development";
  localVue.config.productionTip = false;

  const isProduction = process.env.NODE_ENV === "production";
  const options = {
    isEnabled: true,
    logLevel: isProduction ? "error" : "debug",
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: "|",
    showConsoleColors: true
  };

  localVue.use(VueLogger, options);

  Settings.defaultLocale = "pt-br";

  Axios.defaults.baseURL = process.env.VUE_APP_BASE_URL_API;
  Axios.defaults.headers.common.Authorization =
    process.env.VUE_APP_AUTHORIZATION_API;
  Axios.defaults.timeout = process.env.VUE_APP_REQUEST_TIMEOUT;

  return Routes;
};

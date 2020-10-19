import Vue from "vue";
import Vuex from "vuex";
import pluginStore from "@/plugins/store";

Vue.use(Vuex);

const prontuarioStore = {
  state: {},
  mutations: {},
  actions: {}
};

export default new Vuex.Store({
  modules: {
    prontuarioStore,
    pluginStore
  }
});

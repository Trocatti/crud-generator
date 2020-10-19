export default {
  state: {
    sideBar: {
      name: "",
      show: true,
      list: {}
    }
  },
  mutations: {
    setSideBar(state, sideBar) {
      state.sideBar = sideBar;
    }
  },
  actions: {
    defineSideBar: ({ commit }, sideBar) => commit("setSideBar", sideBar)
  }
};

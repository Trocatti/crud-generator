import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      showPreLoader: state => state.pluginStore.showPreLoader,
      showSideBar: state => state.pluginStore.sideBar.show
    })
  },
  components: {
    PreLoader: () =>
      import(
        /* webpackChunkName: "preloader" */ "@/layout/preloader/PreLoader.vue"
      ),
    Header: () =>
      import(/* webpackChunkName: "header" */ "@/layout/header/Header.vue"),
    Breadcrumb: () =>
      import(
        /* webpackChunkName: "breadcrumb" */ "@/layout/breadcrumb/Breadcrumb.vue"
      ),
    Sidebar: () =>
      import(/* webpackChunkName: "sidebar" */ "@/layout/sidebar/Sidebar.vue"),
    Footer: () =>
      import(/* webpackChunkName: "footer" */ "@/layout/footer/Footer.vue")
  }
};

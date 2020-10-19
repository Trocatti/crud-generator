import sideBar from "@/routes/sidebar/sideBar";

export default {
  name: "Home",
  components: {
    App: () =>
      import(
        /* webpackChunkName: "app_home" */ "@/layout/containers/app/App.vue"
      )
  },
  mounted() {
    this.$store.dispatch("defineSideBar", sideBar);
  }
};

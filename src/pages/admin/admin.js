import sideBar from "@/routes/sidebar/sideBar";

export default {
  name: "Admin",
  components: {
    App: () =>
      import(
        /* webpackChunkName: "app_admin" */ "@/layout/containers/app/App.vue"
      )
  },
  mounted() {
    this.$store.dispatch("defineSideBar", sideBar);
  }
};

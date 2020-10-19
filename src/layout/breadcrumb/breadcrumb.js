import { BRow, BCol } from "bootstrap-vue";

export default {
  name: "c-breadcrumb",
  components: {
    BRow,
    BCol
  },
  filters: {
    upperCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  watch: {
    $route() {
      this.updateTitle();
    }
  },
  computed: {
    crumbs: function() {
      let pathArray = this.$route.path.split("/");
      pathArray.shift();
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          name: this.$route.matched[idx].meta.breadcrumb.name || path,
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path
        });
        return breadcrumbArray;
      }, []);
      return breadcrumbs;
    }
  },
  methods: {
    updateTitle() {
      this.self = this.$route.meta.breadcrumb.name || this.$route.name || "";
    }
  },
  mounted() {
    this.updateTitle();
  },
  data() {
    return {
      self: ""
    };
  }
};

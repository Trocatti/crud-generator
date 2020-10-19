import sideBar from "@/routes/sidebar/sideBar";
import Parametro from "../../../domains/Parametro";
import create from "@/features/parametro/create";
import edit from "@/features/parametro/edit";
import filter from "@/features/parametro/filter";
import list from "@/features/parametro/list";

export default {
  name: "parametroComponent",
  components: {
    Crud: () =>
      import(/* webpackChunkName: "crud" */ "@/components/crud/Crud.vue")
  },
  mounted() {
    this.$store.dispatch("defineSideBar", sideBar);
  },
  data() {
    return {
      crudProperties: {
        domainClass: Parametro,
        create,
        edit,
        filter,
        list
      }
    };
  }
};

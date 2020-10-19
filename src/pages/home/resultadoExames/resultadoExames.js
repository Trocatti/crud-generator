import ResultadoExames from "@/domains/ResultadoExames";
import create from "@/features/resultadoExames/create";
import edit from "@/features/resultadoExames/edit";
import filter from "@/features/resultadoExames/filter";
import list from "@/features/resultadoExames/list";

export default {
  name: "resultadoExames",
  components: {
    Crud: () =>
      import(/* webpackChunkName: "crud" */ "@/components/crud/Crud.vue")
  },
  data() {
    return {
      crudProperties: {
        domainClass: ResultadoExames,
        create,
        edit,
        filter,
        list
      }
    };
  }
};

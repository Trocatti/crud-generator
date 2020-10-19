import Medicamento from "@/domains/Medicamento";
import create from "@/features/medicamento/create";
import edit from "@/features/medicamento/edit";
import filter from "@/features/medicamento/filter";
import list from "@/features/medicamento/list";

export default {
  name: "medicamento",
  components: {
    Crud: () =>
      import(/* webpackChunkName: "crud" */ "@/components/crud/Crud.vue")
  },
  data() {
    return {
      crudProperties: {
        domainClass: Medicamento,
        create,
        edit,
        filter,
        list
      }
    };
  }
};

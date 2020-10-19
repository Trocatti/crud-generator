import Vacina from "@/domains/Vacina";
import create from "@/features/vacina/create";
import edit from "@/features/vacina/edit";
import filter from "@/features/vacina/filter";
import list from "@/features/vacina/list";

export default {
  name: "vacina",
  components: {
    Crud: () =>
      import(/* webpackChunkName: "crud" */ "@/components/crud/Crud.vue")
  },
  data() {
    return {
      crudProperties: {
        domainClass: Vacina,
        create,
        edit,
        filter,
        list
      }
    };
  }
};

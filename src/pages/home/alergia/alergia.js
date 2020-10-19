import Alergia from "@/domains/Alergia";
import create from "@/features/alergia/create";
import edit from "@/features/alergia/edit";
import filter from "@/features/alergia/filter";
import list from "@/features/alergia/list";

export default {
  name: "alergia",
  components: {
    Crud: () =>
      import(/* webpackChunkName: "crud" */ "@/components/crud/Crud.vue")
  },
  data() {
    return {
      crudProperties: {
        domainClass: Alergia,
        create,
        edit,
        filter,
        list
      }
    };
  }
};

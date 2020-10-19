import { BRow, BCol } from "bootstrap-vue";
import CrudTypes from "../CrudTypes";

export default {
  name: "createHandler",
  components: {
    FormHandler: () =>
      import(
        /* webpackChunkName: "formhandler" */ "../../formHandler/FormHandler.vue"
      ),
    BRow,
    BCol
  },
  props: {
    instance: {
      required: true
    },
    collapse: {
      type: Object
    },
    rows: {
      type: Array,
      required: true
    },
    title: {
      required: true
    }
  },
  methods: {
    /**
     * Executa uma requisição com método "post", criando um novo registro no endpoint.
     * @param { Object } model Objeto com o valores do formulário.
     * @param { CallableFunction } resolve Callback que definirá que a requisição foi finalizada com sucesso.
     * @param { CallableFunction } reject Callback que definirá que a requisição foi finalizada com falha.
     * @code this.instance é o bean do componente, exemplo: /domains/Vacina.js
     */
    create(model, resolve, reject) {
      this.instance
        .create(model)
        .then(result => {
          this.$emit("updateList", result.data);
          resolve();
        })
        .catch(() => reject());
    }
  },
  data() {
    return {
      type: CrudTypes.CREATE
    };
  }
};

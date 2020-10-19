import {
  BCard,
  BCardHeader,
  BCardTitle,
  BTable,
  BPagination,
  BButton,
  BFormCheckbox,
  BFormGroup,
  BFormSelect,
  BModal,
  VBModal,
  BRow,
  BCol,
  BCardBody
} from "bootstrap-vue";
import Icon from "vue-awesome/components/Icon.vue";
import "vue-awesome/icons/pencil-alt";
import "vue-awesome/icons/check-circle";
import "vue-awesome/icons/times";
import "vue-awesome/icons/exclamation-triangle";
import "vue-awesome/icons/regular/trash-alt";
import Alerts from "../../../plugins/defaultAlerts";
import mixinBehaviour from "../../../plugins/mixinBehaviour";

export default {
  name: "list",
  mixins: [mixinBehaviour],
  components: {
    PreLoader: () =>
      import(
        /* webpackChunkName: "preloader" */ "../../../layout/preloader/PreLoader.vue"
      ),
    BCard,
    BCardHeader,
    BCardTitle,
    BTable,
    BPagination,
    BButton,
    BFormGroup,
    BFormSelect,
    BFormCheckbox,
    BModal,
    BRow,
    BCol,
    BCardBody,
    "v-icon": Icon
  },
  directives: {
    "b-modal": VBModal
  },
  props: {
    title: {
      type: String,
      required: true
    },
    service: {
      type: Object,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    canDelete: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    totalRows() {
      return this.rowsCount;
    }
  },
  methods: {
    /**
     * Executa uma requisição com método "delete", excluindo o registro no endpoint.
     */

    async delete() {
      this.preLoaderVisible = true;
      for (const item of this.selectedItems) {
        await this.service.delete({ id: item._id, etag: item._v }).then(() => {
          this.removeItemList(item._id);
          this.rowsCount = this.items.length;
          this.selectAllItens = false;
        });
      }
      this.selectedItems = [];
      this.preLoaderVisible = false;
    },

    /**
     * Remove um item da lista (table), utilizando o identificador único (id) para fazer a busca do registro.
     * @param {String} id Identificador único do item a ser excluído
     */
    removeItemList(id) {
      const index = this.items.findIndex(item => item._id === id);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },

    /**
     * Apresenta uma "modal" que fará uma pergunta ao usuário se ele deseja fazer a exclusão do(s) registro(s) selecionado(s).
     */
    openDeleteModal() {
      Alerts.showConfirm(
        {
          question: {
            title:
              "Você tem certeza que deseja excluir o(s) registro(s) selecionado(s)?",
            text: "Você não poderá recuperar o(s) registro(s) após excluir!"
          },
          success: {
            title: "Excluído!",
            text: "Os registros foram excluídos com sucesso!"
          },
          cancel: {
            title: "Cancelado!",
            text: "A exclusão dos registros foi cancelada."
          }
        },
        this.delete
      );
    },

    /**
     * Abre a modal que faz a edição dos registros.
     * @param {Object} item Item a ser alterado.
     */
    openEditModal(item) {
      this.$emit("showEditModal", this.copyObject(item));
    },

    /**
     * Atualiza o item da lista, utilizando o model como referência.
     * @param { Object } model Objeto com o valores do formulário.
     */
    updateList(model) {
      this.removeItemList(model._id);
      this.items.unshift(model);
      this.rowsCount = this.items.length;
    },

    /**
     * Listará (na table) os registros retornados do endpoint.
     * @param {String} filter Filtro a ser aplicado na busca dos registros.
     */
    list(filter) {
      this.preLoaderVisible = true;
      this.service
        .getAll(filter)
        .then(response => {
          this.rowsCount = response.headers.count || 0;
          this.items = response.data;
        })
        .finally(() => {
          this.preLoaderVisible = false;
        });
    },

    /**
     * Seleciona (ou não, baseando-se no parâmetro check) todos os ítens visíveis na lista (table).
     * @param {Boolean} check
     */
    selectAll(check) {
      this.selectedItems = !check ? [] : this.itemsPerPage.slice();
    }
  },

  created() {
    this.list();
  },

  data() {
    return {
      model: {},
      pageOptions: [5, 10, 25, 50, 100],
      perPage: 5,
      currentPage: 1,
      sortBy: "data",
      sortDesc: true,
      rowsCount: 0,
      emptyTableText: "Não há registros para exibir",
      selectAllItens: false,
      selectedItems: [],
      itemsPerPage: [],
      preLoaderVisible: false,
      items: []
    };
  }
};

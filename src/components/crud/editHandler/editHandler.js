import { BModal, VBModal, BRow, BCol, BButton } from "bootstrap-vue";
import mixinBehaviour from "../../../plugins/mixinBehaviour";
import CrudTypes from "../CrudTypes";
import Icon from "vue-awesome/components/Icon.vue";
import "vue-awesome/icons/save";
import "vue-awesome/icons/times";

export default {
  name: "edit",
  mixins: [mixinBehaviour],
  components: {
    FormHandler: () =>
      import(
        /* webpackChunkName: "formhandler" */ "../../formHandler/FormHandler.vue"
      ),
    BModal,
    BRow,
    BCol,
    BButton,
    "v-icon": Icon
  },
  directives: {
    "b-modal": VBModal
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    instance: {
      required: true
    },
    showModal: {
      type: Boolean,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    title: {
      required: true
    }
  },
  computed: {
    showSelf: {
      get() {
        return this.showModal;
      },
      set(visibility) {
        this.$emit("showSelf", visibility);
      }
    }
  },
  methods: {
    /**
     * Executa uma requisição com método "put", atualizando o registro no endpoint.
     */
    save() {
      this.instance
        .getService()
        .update(this.instance)
        .then(() => {
          this.instance.incrementTag();
          this.$emit("updateList", this.instance.toModel());
          this.closeModal();
        });
    },
    closeModal() {
      this.$emit("showSelf", false);
    }
  },
  created() {
    this.previousModel = this.copyObject(this.model);
  },
  data() {
    return {
      previousModel: {},
      type: CrudTypes.EDIT
    };
  }
};

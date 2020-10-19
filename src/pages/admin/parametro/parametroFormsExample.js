import Parametro from "../../../domains/Parametro";
import {
  Chave,
  Valor,
  Ativo,
  Tipo,
  ButtonCreate,
  ButtonClean
} from "@/fields/parametro/components";

export default {
  name: "parametroComponent",
  components: {
    FormHandler: () =>
      import(
        /* webpackChunkName: "formhandler" */ "@/components/formHandler/FormHandler.vue"
      ),
    FormGenerator: () =>
      import(
        /* webpackChunkName: "generator" */ "@/components/formHandler/formGenerator/FormGenerator.vue"
      )
  },
  computed: {
    rows() {
      return [
        {
          self: {},
          fields: [
            Chave.getField({ required: true }),
            Valor.getField({ required: true }),
            Tipo.getField({ required: true }),
            Ativo.getField({ required: false })
          ]
        },
        {
          self: {},
          fields: [ButtonCreate.create(), ButtonClean.create()]
        }
      ];
    }
  },
  methods: {
    create() {
      new Parametro().create(this.model);
    },
    reset() {
      this.model = {};
    }
  },
  data() {
    return {
      model: {
        chave: "",
        valor: "",
        ativo: false
      },
      collapse1: {
        id: "collapse1-parametro",
        visible: true,
        accordion: "collapse-parametro"
      },
      collapse2: {
        id: "collapse2-parametro",
        visible: true,
        accordion: "collapse-parametro"
      }
    };
  }
};

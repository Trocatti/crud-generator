import {
  Chave,
  Valor,
  Ativo,
  ButtonSearch,
  ButtonClean
} from "../../fields/parametro/components";

export default {
  title: "Filtro",
  collapse: {
    id: "filtroParametro",
    visible: false,
    accordion: "parametro"
  },
  rows: [
    {
      self: {},
      fields: [
        Chave.getField({ required: false }),
        Valor.getField({ required: false }),
        Ativo.getField({ required: false })
      ]
    },
    {
      self: {},
      fields: [ButtonSearch.create(), ButtonClean.create()]
    }
  ]
};

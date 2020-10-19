import {
  Data,
  Tabela,
  Codigo,
  Quantidade,
  Nome,
  UnidadeMedida,
  Fabricante,
  ButtonSearch,
  ButtonClean
} from "@/fields/vacina/components.js";

export default {
  title: "Filtros",
  collapse: {
    id: "filtros",
    visible: false,
    accordion: "vacina"
  },
  rows: [
    {
      self: {},
      fields: [
        Data.getField({ required: false }),
        Tabela.getField({ required: false }),
        Codigo.getField({ required: false }),
        Quantidade.getField({ required: false })
      ]
    },
    {
      self: {},
      fields: [
        Nome.getField({ required: false }),
        UnidadeMedida.getField({ required: false }),
        Fabricante.getField({ required: false })
      ]
    },
    {
      self: {},
      fields: [ButtonSearch.create(), ButtonClean.create()]
    }
  ]
};

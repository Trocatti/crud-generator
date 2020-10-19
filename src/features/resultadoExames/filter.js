import {
  Exame,
  Valor,
  UnidadeMedida,
  ValoresReferencia,
  DataRealizacao,
  Origem,
  Categoria,
  ButtonSearch,
  ButtonClean
} from "@/fields/resultadoExames/components.js";

export default {
  title: "Filtros",
  collapse: {
    id: "filtros",
    visible: false,
    accordion: "resultadoExame"
  },
  rows: [
    {
      self: {},
      fields: [
        Exame.getField({ required: false }),
        Valor.getField({ required: false }),
        UnidadeMedida.getField({ required: false })
      ]
    },
    {
      self: {},
      fields: [
        ValoresReferencia.getField({ required: false }),
        DataRealizacao.getField({ required: false }),
        Origem.getField({ required: false }),
        Categoria.getField({ required: false })
      ]
    },
    {
      self: {},
      fields: [ButtonSearch.create(), ButtonClean.create()]
    }
  ]
};

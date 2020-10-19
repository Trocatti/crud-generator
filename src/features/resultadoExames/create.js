import {
  Exame,
  Valor,
  UnidadeMedida,
  ValoresReferencia,
  DataRealizacao,
  Origem,
  Categoria,
  ButtonCreate,
  ButtonClean
} from "@/fields/resultadoExames/components.js";

export default {
  title: "Novo Resultado de Exame",
  collapse: {
    id: "novoResultadoExame",
    visible: true,
    accordion: "resultadoExame"
  },
  rows: [
    {
      self: {},
      fields: [
        Exame.getField({ required: true }),
        Valor.getField({ required: true }),
        UnidadeMedida.getField({ required: true })
      ]
    },
    {
      self: {},
      fields: [
        ValoresReferencia.getField({ required: true }),
        DataRealizacao.getField({ required: true }),
        Origem.getField({ required: true }),
        Categoria.getField({ required: true })
      ]
    },
    {
      self: {},
      fields: [ButtonCreate.create(), ButtonClean.create()]
    }
  ]
};

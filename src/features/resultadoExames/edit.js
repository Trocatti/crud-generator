import {
  Exame,
  Valor,
  UnidadeMedida,
  ValoresReferencia,
  DataRealizacao,
  Origem,
  Categoria
} from "@/fields/resultadoExames/components.js";

export default {
  title: "Alterar Alergia",
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
    }
  ]
};

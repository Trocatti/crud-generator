import {
  Chave,
  Valor,
  Ativo,
  Tipo,
  ButtonCreate,
  ButtonClean
} from "@/fields/parametro/components";

export default {
  title: "Novo Parâmetro",
  collapse: {
    id: "novoParametro",
    visible: true,
    accordion: "parametro"
  },
  rows: [
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
  ]
};

import { Chave, Valor, Ativo } from "../../fields/parametro/components";

export default {
  title: "Editar Parâmetro",
  rows: [
    {
      self: {},
      fields: [
        Chave.getField({ required: false }),
        Valor.getField({ required: false }),
        Ativo.getField({ required: false })
      ]
    }
  ]
};

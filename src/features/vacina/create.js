import {
  Data,
  Tabela,
  Codigo,
  Quantidade,
  Nome,
  UnidadeMedida,
  Fabricante,
  ButtonCreate,
  ButtonClean
} from "@/fields/vacina/components.js";

export default {
  title: "Nova Vacina",
  collapse: {
    id: "novaVacina",
    visible: true,
    accordion: "vacina"
  },
  rows: [
    {
      self: {},
      fields: [
        Data.getField({ required: true }),
        Tabela.getField({ required: true }),
        Codigo.getField({ required: true }),
        Quantidade.getField({ required: true })
      ]
    },
    {
      self: {},
      fields: [
        Nome.getField({ required: true }),
        UnidadeMedida.getField({ required: true }),
        Fabricante.getField({ required: true })
      ]
    },
    {
      self: {},
      fields: [ButtonCreate.create(), ButtonClean.create()]
    }
  ]
};

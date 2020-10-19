import {
  Tipo,
  Agente,
  ReacoesAdversas,
  Notas,
  Status,
  ButtonSearch,
  ButtonClean
} from "@/fields/alergia/components.js";

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
        Tipo.getField({ required: false }),
        Agente.getField({ required: false }),
        ReacoesAdversas.getField({ required: false })
      ]
    },
    {
      self: {},
      fields: [
        Notas.getField({ required: false }),
        Status.getField({ required: false })
      ]
    },
    {
      self: {},
      fields: [ButtonSearch.create(), ButtonClean.create()]
    }
  ]
};

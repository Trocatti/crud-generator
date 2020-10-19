import {
  Tipo,
  Agente,
  ReacoesAdversas,
  Notas,
  Status,
  ButtonCreate,
  ButtonClean
} from "@/fields/alergia/components.js";

export default {
  title: "Nova Alergia",
  collapse: {
    id: "novaAlergia",
    visible: true,
    accordion: "alergia"
  },
  rows: [
    {
      self: {},
      fields: [
        Tipo.getField({ required: true }),
        Agente.getField({ required: true }),
        ReacoesAdversas.getField({ required: true })
      ]
    },
    {
      self: {},
      fields: [
        Notas.getField({ required: true }),
        Status.getField({ required: true })
      ]
    },
    {
      self: {},
      fields: [ButtonCreate.create(), ButtonClean.create()]
    }
  ]
};

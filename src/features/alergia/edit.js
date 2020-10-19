import {
  Tipo,
  Agente,
  ReacoesAdversas,
  Notas,
  Status
} from "@/fields/alergia/components.js";

export default {
  title: "Alterar Alergia",
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
    }
  ]
};

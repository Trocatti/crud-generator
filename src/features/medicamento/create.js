import c from "@/fields/medicamento/components.js";

export default {
  title: "Novo Medicamento",
  collapse: {
    id: "novoMedicamento",
    visible: true,
    accordion: "medicamento"
  },
  rows: [
    {
      self: {},
      fields: [
        c.DataInicio.getField({ required: true }),
        c.DataFinal.getField({ required: true }),
        c.Nome.getField({ required: true })
      ]
    },
    {
      self: {},
      fields: [
        c.MedicamentoPrincipioAtivo.getField({ required: true }),
        c.Posologia.getField({ required: true }),
        c.Dosagem.getField({ required: true })
      ]
    },
    {
      self: {},
      fields: [
        c.Observacao.getField({ required: true }),
        c.Status.getField({ required: true }),
        c.Tipo.getField({ required: true })
      ]
    },
    {
      self: {},
      fields: [c.ButtonCreate.create(), c.ButtonClean.create()]
    }
  ]
};

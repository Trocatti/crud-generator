import c from "@/fields/medicamento/components.js";

export default {
  title: "Filtros",
  collapse: {
    id: "filtros",
    visible: false,
    accordion: "medicamento"
  },
  rows: [
    {
      self: {},
      fields: [
        c.DataInicio.getField({}),
        c.DataFinal.getField({}),
        c.Nome.getField({})
      ]
    },
    {
      self: {},
      fields: [
        c.MedicamentoPrincipioAtivo.getField({}),
        c.Posologia.getField({}),
        c.Dosagem.getField({})
      ]
    },
    {
      self: {},
      fields: [
        c.Observacao.getField({}),
        c.Status.getField({}),
        c.Tipo.getField({})
      ]
    },
    {
      self: {},
      fields: [c.ButtonSearch.create(), c.ButtonClean.create()]
    }
  ]
};

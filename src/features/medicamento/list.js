import mixinBehaviour from "@/plugins/mixinBehaviour";
import statusEnum from "@/fields/medicamento/enums/StatusEnum";
import tipoEnum from "@/fields/medicamento/enums/TipoEnum";

function formatStatus(value) {
  return mixinBehaviour.methods.translateEnumValue(statusEnum, value);
}

function formatTipo(value) {
  return mixinBehaviour.methods.translateEnumValue(tipoEnum, value);
}

function formatData(value) {
  return mixinBehaviour.methods.formatDateForTable(value);
}

export default {
  title: "Medicamentos",
  canDelete: false,
  fields: [
    {
      key: "dataInicio",
      label: "Data Início",
      sortable: true,
      formatter: value => formatData(value)
    },
    {
      key: "dataFinal",
      label: "Data Final",
      sortable: true,
      formatter: value => formatData(value)
    },
    {
      key: "medicamentoPrincipioAtivo",
      label: "Medicamento ou Princípio ativo",
      sortable: true
    },
    { key: "posologia", label: "Posologia", sortable: true },
    { key: "dosagem", label: "Dosagem", sortable: true },
    {
      key: "status",
      label: "Status",
      sortable: true,
      formatter: value => formatStatus(value)
    },
    {
      key: "tipo",
      label: "Tipo",
      sortable: true,
      formatter: value => formatTipo(value)
    },
    { key: "origem", label: "Origem", sortable: false },
    {
      key: "acoes",
      label: "Ações",
      sortable: false
    }
  ]
};

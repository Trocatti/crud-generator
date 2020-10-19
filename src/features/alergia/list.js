import mixinBehaviour from "@/plugins/mixinBehaviour";
import tipoEnum from "@/fields/alergia/enums/tipoEnum";
import statusEnum from "@/fields/alergia/enums/statusEnum";

function formatTipo(value) {
  return mixinBehaviour.methods.translateEnumValue(tipoEnum, value);
}

function formatStatus(value) {
  return mixinBehaviour.methods.translateEnumValue(statusEnum, value);
}

export default {
  title: "Alergias",
  fields: [
    {
      key: "exclusao",
      label: "exclusao",
      sortable: false,
      thClass: "text-align-end",
      tdClass: "text-align-end",
      thStyle: "width: 45px"
    },
    {
      key: "tipo",
      label: "Tipo",
      sortable: true,
      formatter: value => formatTipo(value)
    },
    { key: "agente", label: "Agente", sortable: false },
    { key: "reacoesAdversas", label: "Reações adversas", sortable: true },
    { key: "notas", label: "Notas", sortable: true },
    {
      key: "status",
      label: "Status",
      sortable: true,
      formatter: value => formatStatus(value)
    },
    { key: "acoes", label: "Ações", sortable: false }
  ]
};

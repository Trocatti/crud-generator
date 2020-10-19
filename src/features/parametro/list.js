import mixinBehaviour from "@/plugins/mixinBehaviour";
import ativoEnum from "@/fields/parametro/enums/ativoEnum";

function formatStatus(value) {
  return mixinBehaviour.methods.translateEnumValue(ativoEnum, value);
}

export default {
  title: "Parâmetros",
  fields: [
    { key: "chave", label: "Chave", sortable: true },
    { key: "valor", label: "Valor", sortable: true },
    {
      key: "status",
      label: "Ativo",
      sortable: true,
      formatter: value => formatStatus(value)
    },
    { key: "acoes", label: "Ações", sortable: false }
  ]
};

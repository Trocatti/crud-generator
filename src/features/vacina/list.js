import mixinBehaviour from "@/plugins/mixinBehaviour";
import tabelaEnum from "@/fields/vacina/enums/tabelaEnum";

function formatTabela(value) {
  return mixinBehaviour.methods.translateEnumValue(tabelaEnum, value);
}

function formatDataDose(value) {
  return mixinBehaviour.methods.formatDateForTable(value);
}

export default {
  title: "Vacinas",
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
      key: "status",
      label: "Status",
      sortable: false
    },
    {
      key: "dataDose",
      label: "Data da Dose",
      sortable: true,
      formatter: value => formatDataDose(value)
    },
    {
      key: "tabela",
      label: "Tabela",
      sortable: true,
      formatter: value => formatTabela(value)
    },
    { key: "codigo", label: "Código", sortable: true },
    { key: "quantidade", label: "Quantidade", sortable: true },
    { key: "nome", label: "Nome", sortable: true },
    {
      key: "unidadeMedida",
      label: "Unidade de Medida",
      sortable: true
    },
    { key: "fabricante", label: "Fabricante", sortable: true },
    { key: "origem", label: "Origem", sortable: false },
    {
      key: "acoes",
      label: "Ações",
      sortable: false
    }
  ]
};

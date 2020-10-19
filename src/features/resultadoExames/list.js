import mixinBehaviour from "@/plugins/mixinBehaviour";
import origemEnum from "@/fields/resultadoExames/enums/origemEnum";
import categoriaEnum from "@/fields/resultadoExames/enums/categoriaEnum";

function formatOrigem(value) {
  return mixinBehaviour.methods.translateEnumValue(origemEnum, value);
}

function formatCategoria(value) {
  return mixinBehaviour.methods.translateEnumValue(categoriaEnum, value);
}

function formatDataRealizacao(value) {
  return mixinBehaviour.methods.formatDateForTable(value);
}

export default {
  title: "Resultados de exames",
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
      key: "exame",
      label: "Exame",
      sortable: true
    },
    {
      key: "valor",
      label: "Valor",
      sortable: true
    },
    {
      key: "unidadeMedida",
      label: "Unidade de medida",
      sortable: true
    },
    {
      key: "valoresReferencia",
      label: "Valores de referência",
      sortable: true
    },
    {
      key: "dataRealizacao",
      label: "Data de realização",
      sortable: true,
      formatter: value => formatDataRealizacao(value)
    },
    {
      key: "origem",
      label: "Origem",
      sortable: true,
      formatter: value => formatOrigem(value)
    },
    {
      key: "categoria",
      label: "Categoria",
      sortable: true,
      formatter: value => formatCategoria(value)
    },
    { key: "acoes", label: "Ações", sortable: false }
  ]
};

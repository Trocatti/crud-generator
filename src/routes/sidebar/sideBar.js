export default {
  name: "Prontuário",
  show: true,
  topics: [
    {
      name: "Home",
      icon: "home",
      itens: [
        {
          name: "Vacinas",
          icon: "",
          link: "vacina"
        },
        {
          name: "Medicamentos em Uso",
          icon: "",
          link: "medicamento"
        },
        {
          name: "Alergias",
          icon: "",
          link: "alergia"
        },
        {
          name: "Resultados de exames",
          icon: "",
          link: "resultadoExames"
        }
      ]
    },
    {
      name: "Administração",
      icon: "cog",
      itens: [
        {
          name: "Duração dos eventos",
          icon: "",
          link: "404"
        },
        {
          name: "Calendários",
          icon: "",
          link: "parametroFormsExample"
        },
        {
          name: "Parâmetros",
          icon: "",
          link: "parametro"
        }
      ]
    }
  ]
};

export * from "vue-awesome/icons/home";
export * from "vue-awesome/icons/regular/calendar-alt";
export * from "vue-awesome/icons/cog";

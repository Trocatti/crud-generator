export default {
  name: "Aplicações",
  icon: "cloud",
  itens: [
    {
      name: "Portal",
      icon: "list",
      link: process.env.VUE_APP_PORTAL
    },
    {
      name: "Agenda",
      icon: "regular/calendar-alt",
      link: process.env.VUE_APP_AGENDA
    },
    {
      name: "Atendimento",
      icon: "users",
      link: process.env.VUE_APP_ATENDIMENTO
    },
    {
      name: "Encaminhamento",
      icon: "download",
      link: process.env.VUE_APP_ENCAMINHAMENTO,
      color: "bg-cyan"
    },
    {
      name: "Prontuário",
      icon: "paste",
      link: process.env.VUE_APP_PRONTUARIO
    },
    {
      name: "Coordenação",
      icon: "database",
      link: process.env.VUE_APP_COORD_CUIDADO
    },
    {
      name: "Dashboards",
      icon: "signal",
      link: process.env.VUE_APP_DASHBOARDS
    },
    {
      name: "Contratantes",
      icon: "file-contract",
      link: process.env.VUE_APP_CONTRATANTES
    },
    {
      name: "Setup",
      icon: "cog",
      link: process.env.VUE_APP_SETUP
    }
  ]
};

export default [
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/pages/home/Home.vue"),
    meta: {
      breadcrumb: { name: "Home" }
    },
    children: [
      {
        path: "vacina",
        name: "vacina",
        component: () =>
          import(
            /* webpackChunkName: "vacina" */ "@/pages/home/vacina/Vacina.vue"
          ),
        meta: {
          breadcrumb: { name: "Vacinas" }
        }
      },
      {
        path: "medicamento",
        name: "medicamento",
        component: () =>
          import(
            /* webpackChunkName: "medicamento" */ "@/pages/home/medicamento/Medicamento.vue"
          ),
        meta: {
          breadcrumb: { name: "Medicamentos em Uso" }
        }
      },
      {
        path: "alergia",
        name: "alergia",
        component: () =>
          import(
            /* webpackChunkName: "alergia" */ "@/pages/home/alergia/Alergia.vue"
          ),
        meta: {
          breadcrumb: { name: "Alergias" }
        }
      },
      {
        path: "resultadoExames",
        name: "resultadoExames",
        component: () =>
          import(
            /* webpackChunkName: "resultadoExames" */ "@/pages/home/resultadoExames/ResultadoExames.vue"
          ),
        meta: {
          title: "Resultados de Exames",
          breadcrumb: { name: "Resultados de Exames" }
        }
      }
    ]
  }
];

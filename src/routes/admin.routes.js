export default {
  path: "/admin",
  name: "admin",
  component: () =>
    import(/* webpackChunkName: "admin" */ "@/pages/admin/Admin.vue"),
  meta: {
    breadcrumb: {
      name: "Administrador"
    }
  },
  children: [
    {
      path: "parametro",
      name: "parametro",
      component: () =>
        import(
          /* webpackChunkName: "parametro" */
          "@/pages/admin/parametro/Parametro.vue"
        ),
      meta: {
        breadcrumb: {
          name: "Parâmetros"
        }
      }
    },
    {
      path: "ParametroFormsExample",
      name: "parametroFormsExample",
      component: () =>
        import(
          /* webpackChunkName: "parametroFormsExample" */
          "@/pages/admin/parametro/ParametroFormsExample.vue"
        ),
      meta: {
        breadcrumb: {
          name: "ParametroFormsExample"
        }
      }
    }
  ]
};

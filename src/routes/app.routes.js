export default [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/layout/login/Login.vue")
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "@/layout/404/404.vue")
  },
  {
    path: "*",
    redirect: "404"
  }
];

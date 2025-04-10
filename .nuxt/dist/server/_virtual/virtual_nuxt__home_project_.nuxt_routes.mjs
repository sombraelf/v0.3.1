function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "kontakt",
    path: "/kontakt",
    component: () => import("../pages/kontakt.vue.mjs")
  },
  {
    name: "beratung",
    path: "/beratung",
    component: () => import("../pages/beratung.vue.mjs")
  },
  {
    name: "impressum",
    path: "/impressum",
    component: () => import("../pages/impressum.vue.mjs")
  },
  {
    name: "ueber-uns",
    path: "/ueber-uns",
    component: () => import("../pages/ueber-uns.vue.mjs")
  },
  {
    name: "nutzer-agb",
    path: "/nutzer-agb",
    component: () => import("../pages/nutzer-agb.vue.mjs")
  },
  {
    name: "datenschutz",
    path: "/datenschutz",
    component: () => import("../pages/datenschutz.vue.mjs")
  },
  {
    name: "partner-agb",
    path: "/partner-agb",
    component: () => import("../pages/partner-agb.vue.mjs")
  },
  {
    name: "ratgeber",
    path: "/ratgeber",
    component: () => import("../pages/ratgeber/index.vue.mjs")
  },
  {
    name: "ratgeber-slug",
    path: "/ratgeber/:slug()",
    component: () => import("../pages/ratgeber/_slug_.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt__home_project_.nuxt_routes.mjs.map

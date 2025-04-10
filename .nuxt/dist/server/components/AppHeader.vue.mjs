import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChatBubbleLeftIcon } from "@heroicons/vue/24/outline";
const _sfc_main = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const isServicesMobileOpen = ref(false);
    const isServicesHovered = ref(false);
    const servicesMenuTimeout = ref(null);
    const closeServicesMenu = () => {
      if (servicesMenuTimeout.value) {
        clearTimeout(servicesMenuTimeout.value);
        servicesMenuTimeout.value = null;
      }
      isServicesHovered.value = false;
    };
    const closeMobileMenu = () => {
      isOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white border-b border-gray-200 sticky top-0 z-50" }, _attrs))}><div class="container mx-auto px-4"><div class="flex items-center justify-between h-14 md:h-16 lg:h-20 component-container mx-auto"><div class="flex-shrink-0">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg md:text-xl font-bold text-primary"${_scopeId}>SorglosPflege</span>`);
          } else {
            return [
              createVNode("span", { class: "text-lg md:text-xl font-bold text-primary" }, "SorglosPflege")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex lg:hidden"><button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-100 focus:outline-none" aria-controls="mobile-menu"${ssrRenderAttr("aria-expanded", isOpen.value)}><span class="sr-only">Menü öffnen</span>`);
      if (!isOpen.value) {
        _push(ssrRenderComponent(unref(Bars3Icon), { class: "block h-6 w-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(XMarkIcon), { class: "block h-6 w-6" }, null, _parent));
      }
      _push(`</button></div><nav class="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6"><div class="relative inline-block"><button class="flex items-center px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"${ssrRenderAttr("aria-expanded", isServicesHovered.value)}> Leistungen `);
      _push(ssrRenderComponent(unref(ChevronDownIcon), {
        class: ["ml-1 h-4 w-4", { "rotate-180": isServicesHovered.value }]
      }, null, _parent));
      _push(`</button><div style="${ssrRenderStyle([
        isServicesHovered.value ? null : { display: "none" },
        { "border-radius": "var(--border-radius)" }
      ])}" class="absolute left-0 mt-2 w-56 bg-white border border-gray-200 focus:outline-none shadow-lg"><div class="py-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/alltagshilfe",
        class: "block px-4 py-2 text-sm hover:bg-gray-100 text-dark-text",
        onClick: closeServicesMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Alltagshilfe finden `);
          } else {
            return [
              createTextVNode(" Alltagshilfe finden ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pflegegrad",
        class: "block px-4 py-2 text-sm hover:bg-gray-100 text-dark-text",
        onClick: closeServicesMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pflegegrad berechnen `);
          } else {
            return [
              createTextVNode(" Pflegegrad berechnen ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ratgeber",
        class: "px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ratgeber `);
          } else {
            return [
              createTextVNode(" Ratgeber ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ueber-uns",
        class: "px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Über uns `);
          } else {
            return [
              createTextVNode(" Über uns ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kontakt",
        class: "px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontakt `);
          } else {
            return [
              createTextVNode(" Kontakt ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/beratung",
        class: "btn-secondary text-xs xl:text-sm inline-flex items-center hover:bg-primary/10 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChatBubbleLeftIcon), { class: "h-4 w-4 mr-1" }, null, _parent2, _scopeId));
            _push2(` Beratung erhalten `);
          } else {
            return [
              createVNode(unref(ChatBubbleLeftIcon), { class: "h-4 w-4 mr-1" }),
              createTextVNode(" Beratung erhalten ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/angebote",
        class: "btn-primary text-xs xl:text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Angebote erhalten `);
          } else {
            return [
              createTextVNode(" Angebote erhalten ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="lg:hidden bg-white border-t border-gray-200" id="mobile-menu"><div class="px-2 pt-2 pb-3 space-y-1 component-container mx-auto"><div><button class="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium text-dark-text"> Dienstleistungen `);
      _push(ssrRenderComponent(unref(ChevronDownIcon), {
        class: ["ml-1 h-5 w-5", { "rotate-180": isServicesMobileOpen.value }]
      }, null, _parent));
      _push(`</button><div style="${ssrRenderStyle(isServicesMobileOpen.value ? null : { display: "none" })}" class="pl-4 space-y-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/alltagshilfe",
        class: "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Alltagshilfe finden `);
          } else {
            return [
              createTextVNode(" Alltagshilfe finden ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pflegegrad",
        class: "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pflegegrad berechnen `);
          } else {
            return [
              createTextVNode(" Pflegegrad berechnen ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ratgeber",
        class: "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ratgeber `);
          } else {
            return [
              createTextVNode(" Ratgeber ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ueber-uns",
        class: "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Wer wir sind `);
          } else {
            return [
              createTextVNode(" Wer wir sind ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kontakt",
        class: "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontakt `);
          } else {
            return [
              createTextVNode(" Kontakt ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-2 space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/beratung",
        class: "block w-full text-center btn-secondary text-sm inline-flex items-center justify-center hover:bg-primary/10 transition-colors duration-300",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChatBubbleLeftIcon), { class: "h-4 w-4 mr-1" }, null, _parent2, _scopeId));
            _push2(` Beratung erhalten `);
          } else {
            return [
              createVNode(unref(ChatBubbleLeftIcon), { class: "h-4 w-4 mr-1" }),
              createTextVNode(" Beratung erhalten ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/angebote",
        class: "block w-full text-center btn-primary text-sm",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Angebote erhalten `);
          } else {
            return [
              createTextVNode(" Angebote erhalten ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=AppHeader.vue.mjs.map

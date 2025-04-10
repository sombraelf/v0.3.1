import __nuxt_component_0$1 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { StarIcon } from "@heroicons/vue/24/solid";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-12 md:py-16 lg:py-20" }, _attrs))} data-v-6c3c3950><div class="absolute bottom-0 right-0 w-full h-full bg-light-bg -z-10" data-v-6c3c3950></div><div class="container mx-auto px-4" data-v-6c3c3950><div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 component-container" data-v-6c3c3950><div class="w-full lg:w-1/2 space-y-6" data-v-6c3c3950><h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-v-6c3c3950><span class="text-primary" data-v-6c3c3950>Sorglos</span> die richtige Pflege finden </h1><p class="text-dark-text/80 text-lg" data-v-6c3c3950> Wir verbinden Sie mit kompetenten Pflegedienstleistern in Ihrer Nähe. Geben Sie einfach Ihre Anforderungen ein und erhalten Sie passende Angebote. </p><div class="flex flex-col sm:flex-row gap-4 pt-2" data-v-6c3c3950>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/alltagshilfe",
        class: "btn-primary text-center sm:text-left"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pflegegrad",
        class: "btn-secondary text-center sm:text-left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Beratung erhalten `);
          } else {
            return [
              createTextVNode(" Beratung erhalten ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-6 md:pt-8" data-v-6c3c3950><div class="flex items-center" data-v-6c3c3950><div class="flex -space-x-2" data-v-6c3c3950><div class="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-bold" data-v-6c3c3950>1</div><div class="w-10 h-10 rounded-full border-2 border-white bg-primary/80 flex items-center justify-center text-white text-xs font-bold" data-v-6c3c3950>2</div><div class="w-10 h-10 rounded-full border-2 border-white bg-primary/60 flex items-center justify-center text-white text-xs font-bold" data-v-6c3c3950>3</div></div><div class="ml-4" data-v-6c3c3950><p class="text-sm font-medium" data-v-6c3c3950>Wir helfen täglich über 100+ Kunden deutschlandweit</p><div class="flex text-yellow-400 mt-1" data-v-6c3c3950><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(ssrRenderComponent(unref(StarIcon), {
          key: i,
          class: "h-4 w-4"
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></div></div><div class="w-full lg:w-1/2" data-v-6c3c3950><div class="relative" data-v-6c3c3950><div class="rounded-lg overflow-hidden shadow-xl" data-v-6c3c3950><div class="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-primary/20 to-primary/70 rounded-lg flex items-center justify-center" data-v-6c3c3950><div class="text-white text-lg font-medium" data-v-6c3c3950>Pflegedienstleistung</div></div></div><div class="absolute -bottom-6 -right-6 w-32 h-32 bg-light-accent/30 rounded-full -z-10" data-v-6c3c3950></div><div class="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full -z-10" data-v-6c3c3950></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6c3c3950"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Hero.vue.mjs.map

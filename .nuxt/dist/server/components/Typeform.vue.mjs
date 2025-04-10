import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { ShieldCheckIcon, LockClosedIcon, BoltIcon } from "@heroicons/vue/24/outline";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Typeform",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-gradient-to-b from-white to-light-bg" }, _attrs))} data-v-c2d29a98><div class="container mx-auto px-4" data-v-c2d29a98><div class="text-center mb-12" data-v-c2d29a98><h2 class="text-3xl md:text-4xl font-bold mb-4" data-v-c2d29a98>Ihre Anfrage</h2><p class="text-dark-text/70 text-lg max-w-3xl mx-auto" data-v-c2d29a98> Füllen Sie das Formular aus und erhalten Sie passende Angebote von Pflegedienstleistern in Ihrer Region </p></div><div class="relative component-container" data-v-c2d29a98><div class="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10 hidden md:block" data-v-c2d29a98></div><div class="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full -z-10 hidden md:block" data-v-c2d29a98></div><div class="bg-white rounded-2xl shadow-xl overflow-hidden relative z-10" data-v-c2d29a98><div class="typeform-container p-4 md:p-6 min-h-[500px]" data-v-c2d29a98><div data-tf-live="01JRDR6AXYD939C5NDKX3CTZAE" data-v-c2d29a98></div></div><div class="px-6" data-v-c2d29a98><div class="h-px bg-gray-200" data-v-c2d29a98></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-light-bg/30" data-v-c2d29a98><div class="flex flex-col items-center text-center group" data-v-c2d29a98><div class="p-3 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors duration-300" data-v-c2d29a98>`);
      _push(ssrRenderComponent(unref(ShieldCheckIcon), { class: "h-8 w-8 text-primary" }, null, _parent));
      _push(`</div><h3 class="font-semibold mb-1" data-v-c2d29a98>Datenschutz</h3><p class="text-sm text-dark-text/70" data-v-c2d29a98>Ihre Daten werden vertraulich und nach DSGVO-Richtlinien behandelt</p></div><div class="flex flex-col items-center text-center group" data-v-c2d29a98><div class="p-3 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors duration-300" data-v-c2d29a98>`);
      _push(ssrRenderComponent(unref(LockClosedIcon), { class: "h-8 w-8 text-primary" }, null, _parent));
      _push(`</div><h3 class="font-semibold mb-1" data-v-c2d29a98>Sichere Übertragung</h3><p class="text-sm text-dark-text/70" data-v-c2d29a98>SSL-verschlüsselte Verbindung für maximale Sicherheit Ihrer Daten</p></div><div class="flex flex-col items-center text-center group" data-v-c2d29a98><div class="p-3 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors duration-300" data-v-c2d29a98>`);
      _push(ssrRenderComponent(unref(BoltIcon), { class: "h-8 w-8 text-primary" }, null, _parent));
      _push(`</div><h3 class="font-semibold mb-1" data-v-c2d29a98>Schnelle Rückmeldung</h3><p class="text-sm text-dark-text/70" data-v-c2d29a98>Erste Angebote erhalten Sie in der Regel innerhalb von 24 Stunden</p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Typeform.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c2d29a98"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=Typeform.vue.mjs.map

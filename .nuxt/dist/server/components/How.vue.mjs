import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { ClipboardDocumentListIcon, EnvelopeOpenIcon } from "@heroicons/vue/24/outline";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "How",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-white" }, _attrs))} data-v-6e65cfb2><div class="container mx-auto px-4" data-v-6e65cfb2><div class="text-center mb-12" data-v-6e65cfb2><h2 class="text-3xl md:text-4xl font-bold mb-4" data-v-6e65cfb2>So einfach funktioniert&#39;s</h2><p class="text-dark-text/70 text-lg max-w-3xl mx-auto" data-v-6e65cfb2> In nur zwei Schritten verbinden wir Sie mit passenden Pflegedienstleistern in Ihrer Region </p></div><div class="grid md:grid-cols-2 gap-8 component-container" data-v-6e65cfb2><div class="bg-light-bg rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden group" data-v-6e65cfb2><div class="absolute -right-12 -bottom-12 w-40 h-40 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-125" data-v-6e65cfb2></div><div class="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6 relative z-10" data-v-6e65cfb2>1</div><div class="relative z-10" data-v-6e65cfb2><div class="mb-6 text-primary" data-v-6e65cfb2>`);
      _push(ssrRenderComponent(unref(ClipboardDocumentListIcon), { class: "h-14 w-14" }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3" data-v-6e65cfb2>Anfrage stellen</h3><p class="text-dark-text/80" data-v-6e65cfb2> Teilen Sie uns Ihren Pflegebedarf und Ihre Postleitzahl mit. Je detaillierter Ihre Angaben, desto passgenauer können wir für Sie suchen. </p></div></div><div class="bg-light-bg rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden group" data-v-6e65cfb2><div class="absolute -right-12 -bottom-12 w-40 h-40 bg-primary/5 rounded-full transition-transform duration-500 group-hover:scale-125" data-v-6e65cfb2></div><div class="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6 relative z-10" data-v-6e65cfb2>2</div><div class="relative z-10" data-v-6e65cfb2><div class="mb-6 text-primary" data-v-6e65cfb2>`);
      _push(ssrRenderComponent(unref(EnvelopeOpenIcon), { class: "h-14 w-14" }, null, _parent));
      _push(`</div><h3 class="text-xl font-bold mb-3" data-v-6e65cfb2>Angebote erhalten</h3><p class="text-dark-text/80" data-v-6e65cfb2> Geprüfte Pflegedienstleister aus Ihrer Region werden sich mit passenden Angeboten bei Ihnen melden. Vergleichen Sie und wählen Sie das Beste. </p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/How.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e65cfb2"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=How.vue.mjs.map

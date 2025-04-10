import __nuxt_component_0 from "../components/Hero.vue.mjs";
import __nuxt_component_1 from "../components/How.vue.mjs";
import __nuxt_component_2 from "../components/Typeform.vue.mjs";
import __nuxt_component_3 from "../components/Faq.vue.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      const _component_How = __nuxt_component_1;
      const _component_Typeform = __nuxt_component_2;
      const _component_Faq = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_How, null, null, _parent));
      _push(ssrRenderComponent(_component_Typeform, null, null, _parent));
      _push(ssrRenderComponent(_component_Faq, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map

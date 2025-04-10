import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { ChevronDownIcon, EnvelopeIcon } from "@heroicons/vue/24/outline";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const activeFaq = ref(null);
    const faqs = [
      {
        question: "Welche Pflegeleistungen stehen mir zu?",
        answer: "Die Pflegeleistungen, die Ihnen zustehen, hängen von Ihrem Pflegegrad ab. Je nach Einstufung (Pflegegrad 1-5) haben Sie Anspruch auf verschiedene Leistungen wie Pflegegeld, Pflegesachleistungen, Tages- und Nachtpflege, Kurzzeitpflege und Verhinderungspflege.",
        additionalInfo: [
          "Pflegegrad 1: Entlastungsbetrag von 125€ monatlich",
          "Pflegegrad 2-5: Pflegegeld zwischen 316€ und 901€ monatlich",
          "Pflegegrad 2-5: Pflegesachleistungen zwischen 724€ und 2.095€ monatlich",
          "Alle Pflegegrade: Beratungsleistungen und Pflegehilfsmittel"
        ]
      },
      {
        question: "Wie kann ich Förderungen und Zuschüsse beantragen?",
        answer: "Um Förderungen und Zuschüsse zu beantragen, müssen Sie zunächst einen Antrag bei Ihrer Pflegekasse stellen. Der Medizinische Dienst (MD) oder andere Gutachter führen dann eine Begutachtung durch, um Ihren Pflegegrad festzustellen. Nach der Einstufung können Sie die entsprechenden Leistungen bei Ihrer Pflegekasse beantragen.",
        additionalInfo: [
          "Antrag bei der Pflegekasse (meist über die Krankenkasse)",
          "Begutachtung durch den Medizinischen Dienst",
          "Bescheid über den Pflegegrad",
          "Beantragung der gewünschten Leistungen"
        ]
      },
      {
        question: "Welche Produkte und Dienstleistungen werden von der Pflegekasse bezuschusst?",
        answer: "Die Pflegekasse bezuschusst eine Vielzahl von Produkten und Dienstleistungen, die zur Erleichterung der Pflege und zur Verbesserung der Lebensqualität beitragen. Dazu gehören Pflegehilfsmittel, wohnumfeldverbessernde Maßnahmen, Betreuungsleistungen und verschiedene Pflegedienstleistungen.",
        additionalInfo: [
          "Pflegehilfsmittel: Bis zu 40€ monatlich für Verbrauchsprodukte",
          "Wohnumfeldverbessernde Maßnahmen: Bis zu 4.000€ pro Maßnahme",
          "Betreuungsleistungen: Je nach Pflegegrad unterschiedliche Beträge",
          "Technische Hilfsmittel: Oft mit geringer Zuzahlung oder kostenlos"
        ]
      },
      {
        question: "Wer kann Alltagshilfe in Anspruch nehmen?",
        answer: "Alltagshilfe kann grundsätzlich von allen Menschen in Anspruch genommen werden, die Unterstützung im Alltag benötigen. Besonders relevant ist sie für Personen mit Pflegegrad, Senioren, Menschen mit Behinderungen oder nach Krankenhausaufenthalten. Die Kosten können bei Vorliegen eines Pflegegrads teilweise oder vollständig von der Pflegekasse übernommen werden.",
        additionalInfo: [
          "Personen mit Pflegegrad 1-5",
          "Senioren mit Unterstützungsbedarf",
          "Menschen nach Operationen oder Krankenhausaufenthalten",
          "Personen mit temporären oder dauerhaften Einschränkungen"
        ]
      },
      {
        question: "Wie funktioniert die Vermittlung über SorglosPflege?",
        answer: "Die Vermittlung über SorglosPflege ist einfach und unkompliziert. Sie füllen ein kurzes Formular mit Ihren Bedürfnissen aus, und wir leiten Ihre Anfrage an passende Dienstleister in Ihrer Region weiter. Diese kontaktieren Sie dann mit individuellen Angeboten. Sie können die Angebote vergleichen und den für Sie passenden Dienstleister auswählen. Unsere Beratung ist für Sie kostenlos und unverbindlich.",
        additionalInfo: [
          "Formular ausfüllen mit Ihren Bedürfnissen",
          "Passende Dienstleister werden informiert",
          "Sie erhalten individuelle Angebote",
          "Freie Auswahl des passenden Anbieters"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-light-bg" }, _attrs))} data-v-34100d21><div class="container mx-auto px-4" data-v-34100d21><div class="component-container mx-auto" data-v-34100d21><div class="text-center mb-12" data-v-34100d21><h2 class="text-3xl md:text-4xl font-bold mb-4" data-v-34100d21>Häufig gestellte Fragen</h2><p class="text-dark-text/80 text-lg max-w-3xl mx-auto" data-v-34100d21> Hier finden Sie Antworten auf die wichtigsten Fragen rund um das Thema Pflege und Unterstützung im Alltag. </p></div><div class="space-y-4 max-w-3xl mx-auto" data-v-34100d21><!--[-->`);
      ssrRenderList(faqs, (faq, index) => {
        _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden" data-v-34100d21><button class="${ssrRenderClass([activeFaq.value === index ? "bg-primary text-white" : "hover:bg-light-accent/30", "w-full flex justify-between items-center p-5 text-left focus:outline-none"])}"${ssrRenderAttr("aria-expanded", activeFaq.value === index)}${ssrRenderAttr("aria-controls", `faq-answer-${index}`)} data-v-34100d21><span class="font-medium text-lg" data-v-34100d21>${ssrInterpolate(faq.question)}</span>`);
        _push(ssrRenderComponent(unref(ChevronDownIcon), {
          class: ["h-5 w-5 transition-transform duration-300", activeFaq.value === index ? "rotate-180" : ""]
        }, null, _parent));
        _push(`</button><div${ssrRenderAttr("id", `faq-answer-${index}`)} style="${ssrRenderStyle(activeFaq.value === index ? null : { display: "none" })}" class="p-5 border-t border-gray-200" role="region"${ssrRenderAttr("aria-labelledby", `faq-question-${index}`)} data-v-34100d21><p class="text-dark-text/80" data-v-34100d21>${ssrInterpolate(faq.answer)}</p>`);
        if (faq.additionalInfo) {
          _push(`<div class="mt-4 pt-4 border-t border-gray-100" data-v-34100d21><ul class="list-disc list-inside space-y-2 text-dark-text/80" data-v-34100d21><!--[-->`);
          ssrRenderList(faq.additionalInfo, (item, i) => {
            _push(`<li data-v-34100d21>${ssrInterpolate(item)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="mt-12 text-center" data-v-34100d21><p class="mb-6 text-dark-text/80" data-v-34100d21>Haben Sie weitere Fragen? Wir helfen Ihnen gerne weiter.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kontakt",
        class: "btn-primary inline-flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(EnvelopeIcon), { class: "h-5 w-5 mr-2" }, null, _parent2, _scopeId));
            _push2(` Kontakt aufnehmen `);
          } else {
            return [
              createVNode(unref(EnvelopeIcon), { class: "h-5 w-5 mr-2" }),
              createTextVNode(" Kontakt aufnehmen ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-34100d21"]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=Faq.vue.mjs.map

import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, unref, useSSRContext, ref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { StarIcon } from '@heroicons/vue/24/solid';
import { ClipboardDocumentListIcon, EnvelopeOpenIcon, ShieldCheckIcon, LockClosedIcon, BoltIcon, ChevronDownIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';

const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6c3c3950"]]);

const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/How.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6e65cfb2"]]);

const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Typeform.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c2d29a98"]]);

const _sfc_main$1 = {
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
      const _component_NuxtLink = __nuxt_component_0$1;
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Faq.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-34100d21"]]);

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

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map

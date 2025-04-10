import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, watch, nextTick, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { CheckCircleIcon, InformationCircleIcon, ChatBubbleLeftRightIcon, UserIcon, PaperAirplaneIcon } from "@heroicons/vue/24/outline";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "beratung",
  __ssrInlineRender: true,
  setup(__props) {
    const hasConsented = ref(false);
    const userInput = ref("");
    const messages = ref([]);
    const isLoading = ref(false);
    const messagesContainer = ref(null);
    const formatMessage = (text) => {
      return text.replace(/\n/g, "<br>");
    };
    watch(messages, async () => {
      await nextTick();
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-609cf650><section class="bg-white py-16 md:py-24" data-v-609cf650><div class="container mx-auto px-4 max-w-7xl" data-v-609cf650><div class="text-center mb-16" data-v-609cf650><h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-v-609cf650>Kostenlose Pflegeberatung</h1><p class="text-xl text-gray-600 max-w-3xl mx-auto" data-v-609cf650> Erhalten Sie schnelle und kompetente Antworten auf Ihre Fragen rund um das Thema Pflege </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-v-609cf650><div data-v-609cf650><div class="bg-gray-50 rounded-xl p-6 md:p-8 mb-8" data-v-609cf650><h2 class="text-2xl font-bold text-gray-900 mb-4" data-v-609cf650>Wie kann unser KI-Assistent Ihnen helfen?</h2><ul class="space-y-4" data-v-609cf650><li class="flex items-start" data-v-609cf650><div class="flex-shrink-0 mt-1" data-v-609cf650>`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary" }, null, _parent));
      _push(`</div><div class="ml-3" data-v-609cf650><h3 class="font-medium text-gray-900" data-v-609cf650>Informationen zu Pflegegraden</h3><p class="text-gray-600" data-v-609cf650>Erfahren Sie, welche Voraussetzungen für einen Pflegegrad erfüllt sein müssen und wie der Antragsprozess abläuft.</p></div></li><li class="flex items-start" data-v-609cf650><div class="flex-shrink-0 mt-1" data-v-609cf650>`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary" }, null, _parent));
      _push(`</div><div class="ml-3" data-v-609cf650><h3 class="font-medium text-gray-900" data-v-609cf650>Leistungen der Pflegeversicherung</h3><p class="text-gray-600" data-v-609cf650>Informieren Sie sich über Pflegegeld, Pflegesachleistungen und weitere finanzielle Unterstützungsmöglichkeiten.</p></div></li><li class="flex items-start" data-v-609cf650><div class="flex-shrink-0 mt-1" data-v-609cf650>`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary" }, null, _parent));
      _push(`</div><div class="ml-3" data-v-609cf650><h3 class="font-medium text-gray-900" data-v-609cf650>Alltagshilfen finden</h3><p class="text-gray-600" data-v-609cf650>Erhalten Sie Tipps zur Suche nach geeigneten Alltagshilfen und Informationen zur Kostenübernahme.</p></div></li><li class="flex items-start" data-v-609cf650><div class="flex-shrink-0 mt-1" data-v-609cf650>`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "h-5 w-5 text-primary" }, null, _parent));
      _push(`</div><div class="ml-3" data-v-609cf650><h3 class="font-medium text-gray-900" data-v-609cf650>Pflegetipps für Angehörige</h3><p class="text-gray-600" data-v-609cf650>Bekommen Sie praktische Ratschläge für die Pflege von Angehörigen und Informationen zu Entlastungsangeboten.</p></div></li></ul></div><div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6 md:p-8" data-v-609cf650><div class="flex items-start" data-v-609cf650><div class="flex-shrink-0" data-v-609cf650>`);
      _push(ssrRenderComponent(unref(InformationCircleIcon), { class: "h-6 w-6 text-yellow-600" }, null, _parent));
      _push(`</div><div class="ml-3" data-v-609cf650><h3 class="text-lg font-medium text-yellow-800" data-v-609cf650>Wichtiger Hinweis</h3><p class="mt-2 text-yellow-700" data-v-609cf650> Unser KI-Assistent gibt sein Bestes, um Ihnen korrekte und hilfreiche Informationen zu liefern. Bitte beachten Sie jedoch: </p><ul class="mt-2 space-y-2 text-yellow-700 list-disc pl-5" data-v-609cf650><li data-v-609cf650>Die Antworten werden automatisch generiert und können Fehler enthalten</li><li data-v-609cf650>Für rechtsverbindliche Auskünfte wenden Sie sich bitte an einen menschlichen Berater</li><li data-v-609cf650>Bei komplexen Fällen empfehlen wir eine persönliche Beratung</li></ul><p class="mt-2 text-yellow-700" data-v-609cf650> Für eine individuelle Beratung durch einen unserer Pflegeexperten können Sie gerne `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kontakt",
        class: "font-medium underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kontakt`);
          } else {
            return [
              createTextVNode("Kontakt")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` mit uns aufnehmen. </p></div></div></div></div><div class="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200" data-v-609cf650><div class="bg-primary text-white p-4 flex items-center" data-v-609cf650>`);
      _push(ssrRenderComponent(unref(ChatBubbleLeftRightIcon), { class: "h-6 w-6 mr-3" }, null, _parent));
      _push(`<h2 class="text-xl font-bold" data-v-609cf650>Pflegeberatung Chat</h2></div>`);
      if (!hasConsented.value) {
        _push(`<div class="p-6" data-v-609cf650><div class="bg-gray-50 p-6 rounded-lg mb-6" data-v-609cf650><h3 class="text-xl font-bold text-gray-900 mb-3" data-v-609cf650>Datenschutzhinweis</h3><p class="text-gray-700 mb-4" data-v-609cf650> Dieser Chat verwendet KI-Technologie, um Ihre Fragen zu beantworten. Ihre Eingaben werden verarbeitet, um passende Antworten zu generieren. Bitte beachten Sie, dass: </p><ul class="text-gray-700 list-disc pl-5 mb-6 space-y-2" data-v-609cf650><li data-v-609cf650>Ihre Chatdaten zur Verbesserung des Services gespeichert werden können</li><li data-v-609cf650>Die KI-generierten Antworten nicht immer zu 100% korrekt sind</li><li data-v-609cf650>Keine sensiblen persönlichen Daten wie Passwörter eingegeben werden sollten</li></ul><button class="w-full btn-primary py-3 text-base" data-v-609cf650> Ich stimme zu und möchte den Chat nutzen </button></div><div class="text-center text-gray-500 text-sm" data-v-609cf650><p data-v-609cf650>Durch die Nutzung des Chats akzeptieren Sie unsere `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/datenschutz",
          class: "text-primary hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Datenschutzbestimmungen`);
            } else {
              return [
                createTextVNode("Datenschutzbestimmungen")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`.</p></div></div>`);
      } else {
        _push(`<div class="flex flex-col h-[600px] max-h-[70vh] md:h-[600px]" data-v-609cf650><div class="flex-grow overflow-y-auto p-6" data-v-609cf650><div class="space-y-6" data-v-609cf650><div class="flex items-start" data-v-609cf650><div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3" data-v-609cf650>`);
        _push(ssrRenderComponent(unref(ChatBubbleLeftRightIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`</div><div class="bg-gray-100 rounded-lg p-4 max-w-[80%]" data-v-609cf650><p class="text-gray-800" data-v-609cf650> Hallo! Ich bin Ihr digitaler Pflegeberater. Wie kann ich Ihnen heute helfen? Sie können mir Fragen zu Pflegegraden, Leistungen der Pflegeversicherung oder zur Suche nach Alltagshilfen stellen. </p></div></div><div class="flex items-start" data-v-609cf650><div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3" data-v-609cf650>`);
        _push(ssrRenderComponent(unref(InformationCircleIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`</div><div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-[80%]" data-v-609cf650><p class="text-yellow-800" data-v-609cf650><strong data-v-609cf650>Hinweis:</strong> Ich bin ein KI-Assistent und meine Antworten können Fehler enthalten. Bei wichtigen Entscheidungen konsultieren Sie bitte einen menschlichen Berater. </p></div></div><!--[-->`);
        ssrRenderList(messages.value, (message, index) => {
          _push(`<div class="${ssrRenderClass([{ "justify-end": message.isUser }, "flex items-start"])}" data-v-609cf650>`);
          if (!message.isUser) {
            _push(`<!--[--><div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3" data-v-609cf650>`);
            _push(ssrRenderComponent(unref(ChatBubbleLeftRightIcon), { class: "h-5 w-5" }, null, _parent));
            _push(`</div><div class="bg-gray-100 rounded-lg p-4 max-w-[80%]" data-v-609cf650><p class="text-gray-800" data-v-609cf650>${formatMessage(message.text) ?? ""}</p></div><!--]-->`);
          } else {
            _push(`<!--[--><div class="bg-primary text-white rounded-lg p-4 max-w-[80%]" data-v-609cf650><p data-v-609cf650>${ssrInterpolate(message.text)}</p></div><div class="flex-shrink-0 bg-gray-200 rounded-full p-2 ml-3" data-v-609cf650>`);
            _push(ssrRenderComponent(unref(UserIcon), { class: "h-5 w-5 text-gray-600" }, null, _parent));
            _push(`</div><!--]-->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (isLoading.value) {
          _push(`<div class="flex items-start" data-v-609cf650><div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3" data-v-609cf650>`);
          _push(ssrRenderComponent(unref(ChatBubbleLeftRightIcon), { class: "h-5 w-5" }, null, _parent));
          _push(`</div><div class="bg-gray-100 rounded-lg p-4 max-w-[80%] flex items-center" data-v-609cf650><div class="typing-animation" data-v-609cf650><span data-v-609cf650></span><span data-v-609cf650></span><span data-v-609cf650></span></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="border-t border-gray-200 p-4 bg-white" data-v-609cf650><form class="flex items-center" data-v-609cf650><input${ssrRenderAttr("value", userInput.value)} type="text" placeholder="Ihre Frage eingeben..." class="flex-grow border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-[50px]"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-609cf650><button type="submit" class="bg-primary text-white px-5 py-3 rounded-r-lg hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 h-[50px]"${ssrIncludeBooleanAttr(isLoading.value || !userInput.value.trim()) ? " disabled" : ""} data-v-609cf650>`);
        _push(ssrRenderComponent(unref(PaperAirplaneIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`</button></form></div></div>`);
      }
      _push(`</div></div><div class="mt-24" data-v-609cf650><h2 class="text-3xl font-bold text-center mb-12" data-v-609cf650>Häufig gestellte Fragen</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-609cf650><div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6" data-v-609cf650><h3 class="text-xl font-bold text-gray-900 mb-3" data-v-609cf650>Wie beantrage ich einen Pflegegrad?</h3><p class="text-gray-700" data-v-609cf650> Um einen Pflegegrad zu beantragen, stellen Sie einen Antrag bei Ihrer Pflegekasse. Nach der Antragstellung erfolgt eine Begutachtung durch den Medizinischen Dienst. Basierend auf dem Gutachten entscheidet die Pflegekasse über den Pflegegrad. </p></div><div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6" data-v-609cf650><h3 class="text-xl font-bold text-gray-900 mb-3" data-v-609cf650>Welche Leistungen stehen mir bei Pflegegrad 2 zu?</h3><p class="text-gray-700" data-v-609cf650> Bei Pflegegrad 2 haben Sie Anspruch auf Pflegegeld (332€ monatlich), Pflegesachleistungen (bis zu 761€ monatlich), Entlastungsbetrag (125€ monatlich), Verhinderungspflege und Kurzzeitpflege sowie weitere Leistungen. </p></div><div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6" data-v-609cf650><h3 class="text-xl font-bold text-gray-900 mb-3" data-v-609cf650>Was ist der Unterschied zwischen Pflegegeld und Pflegesachleistungen?</h3><p class="text-gray-700" data-v-609cf650> Pflegegeld erhalten Sie, wenn die Pflege durch Angehörige erfolgt. Pflegesachleistungen werden für professionelle Pflegedienste gezahlt. Sie können auch eine Kombination aus beiden Leistungen wählen. </p></div><div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6" data-v-609cf650><h3 class="text-xl font-bold text-gray-900 mb-3" data-v-609cf650>Wie finde ich eine geeignete Alltagshilfe?</h3><p class="text-gray-700" data-v-609cf650> Über unsere Plattform können Sie schnell und einfach passende Alltagshilfen in Ihrer Nähe finden. Wir vermitteln Ihnen qualifizierte Dienstleister, die Ihnen bei der Bewältigung des Alltags helfen können. </p></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/beratung.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const beratung = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-609cf650"]]);
export {
  beratung as default
};
//# sourceMappingURL=beratung.vue.mjs.map

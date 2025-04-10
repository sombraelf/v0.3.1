import { ref, watch, nextTick, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { ChatBubbleLeftRightIcon, XMarkIcon, InformationCircleIcon, UserIcon, PaperAirplaneIcon } from "@heroicons/vue/24/outline";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "ChatBubble",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-514e7675><button class="${ssrRenderClass([{ "rotate-45": isOpen.value }, "fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary-dark transition-all duration-300 z-50 flex items-center justify-center"])}" data-v-514e7675>`);
      if (!isOpen.value) {
        _push(ssrRenderComponent(unref(ChatBubbleLeftRightIcon), { class: "h-6 w-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(XMarkIcon), { class: "h-6 w-6" }, null, _parent));
      }
      _push(`</button><div style="${ssrRenderStyle([
        isOpen.value ? null : { display: "none" },
        { "max-height": "70vh", "max-width": "24rem" }
      ])}" class="${ssrRenderClass([{ "translate-y-0 opacity-100": isOpen.value, "translate-y-8 opacity-0": !isOpen.value }, "fixed bottom-24 right-6 w-[calc(100%-3rem)] sm:w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden transition-all duration-300 flex flex-col"])}" data-v-514e7675><div class="bg-primary text-white p-4 flex justify-between items-center" data-v-514e7675><div class="flex items-center" data-v-514e7675>`);
      _push(ssrRenderComponent(unref(ChatBubbleLeftRightIcon), { class: "h-5 w-5 mr-2" }, null, _parent));
      _push(`<h3 class="font-medium" data-v-514e7675>SorglosPflege Beratung</h3></div><button class="text-white hover:text-gray-200" data-v-514e7675>`);
      _push(ssrRenderComponent(unref(XMarkIcon), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></div>`);
      if (!hasConsented.value) {
        _push(`<div class="p-4 bg-white flex-grow overflow-y-auto" data-v-514e7675><div class="bg-gray-50 p-4 rounded-lg mb-4" data-v-514e7675><h4 class="font-bold text-gray-900 mb-2" data-v-514e7675>Datenschutzhinweis</h4><p class="text-sm text-gray-700 mb-4" data-v-514e7675> Dieser Chat verwendet KI-Technologie, um Ihre Fragen zu beantworten. Ihre Eingaben werden verarbeitet, um passende Antworten zu generieren. Bitte beachten Sie, dass: </p><ul class="text-sm text-gray-700 list-disc pl-5 mb-4 space-y-1" data-v-514e7675><li data-v-514e7675>Ihre Chatdaten zur Verbesserung des Services gespeichert werden können</li><li data-v-514e7675>Die KI-generierten Antworten nicht immer zu 100% korrekt sind</li><li data-v-514e7675>Keine sensiblen persönlichen Daten wie Passwörter eingegeben werden sollten</li></ul><button class="w-full btn-primary text-sm py-2" data-v-514e7675> Ich stimme zu und möchte den Chat nutzen </button></div></div>`);
      } else {
        _push(`<div class="flex-grow overflow-y-auto p-4" data-v-514e7675><div class="space-y-4" data-v-514e7675><div class="flex items-start" data-v-514e7675><div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3" data-v-514e7675>`);
        _push(ssrRenderComponent(unref(ChatBubbleLeftRightIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`</div><div class="bg-gray-100 rounded-lg p-3 max-w-[80%]" data-v-514e7675><p class="text-gray-800" data-v-514e7675> Hallo! Ich bin Ihr digitaler Pflegeberater. Wie kann ich Ihnen heute helfen? </p></div></div><div class="flex items-start" data-v-514e7675><div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3" data-v-514e7675>`);
        _push(ssrRenderComponent(unref(InformationCircleIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`</div><div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 max-w-[80%]" data-v-514e7675><p class="text-sm text-yellow-800" data-v-514e7675><strong data-v-514e7675>Hinweis:</strong> Ich bin ein KI-Assistent und meine Antworten können Fehler enthalten. Bei wichtigen Entscheidungen konsultieren Sie bitte einen menschlichen Berater. </p></div></div><!--[-->`);
        ssrRenderList(messages.value, (message, index) => {
          _push(`<div class="${ssrRenderClass([{ "justify-end": message.isUser }, "flex items-start"])}" data-v-514e7675>`);
          if (!message.isUser) {
            _push(`<!--[--><div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3" data-v-514e7675>`);
            _push(ssrRenderComponent(unref(ChatBubbleLeftRightIcon), { class: "h-5 w-5" }, null, _parent));
            _push(`</div><div class="bg-gray-100 rounded-lg p-3 max-w-[80%]" data-v-514e7675><p class="text-gray-800" data-v-514e7675>${formatMessage(message.text) ?? ""}</p></div><!--]-->`);
          } else {
            _push(`<!--[--><div class="bg-primary text-white rounded-lg p-3 max-w-[80%]" data-v-514e7675><p data-v-514e7675>${ssrInterpolate(message.text)}</p></div><div class="flex-shrink-0 bg-gray-200 rounded-full p-2 ml-3" data-v-514e7675>`);
            _push(ssrRenderComponent(unref(UserIcon), { class: "h-5 w-5 text-gray-600" }, null, _parent));
            _push(`</div><!--]-->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (isLoading.value) {
          _push(`<div class="flex items-start" data-v-514e7675><div class="flex-shrink-0 bg-primary text-white rounded-full p-2 mr-3" data-v-514e7675>`);
          _push(ssrRenderComponent(unref(ChatBubbleLeftRightIcon), { class: "h-5 w-5" }, null, _parent));
          _push(`</div><div class="bg-gray-100 rounded-lg p-4 max-w-[80%] flex items-center" data-v-514e7675><div class="typing-animation" data-v-514e7675><span data-v-514e7675></span><span data-v-514e7675></span><span data-v-514e7675></span></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
      if (hasConsented.value) {
        _push(`<div class="border-t border-gray-200 p-4 bg-white" data-v-514e7675><form class="flex items-center" data-v-514e7675><input${ssrRenderAttr("value", userInput.value)} type="text" placeholder="Ihre Frage eingeben..." class="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-514e7675><button type="submit" class="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 h-[38px]"${ssrIncludeBooleanAttr(isLoading.value || !userInput.value.trim()) ? " disabled" : ""} data-v-514e7675>`);
        _push(ssrRenderComponent(unref(PaperAirplaneIcon), { class: "h-5 w-5" }, null, _parent));
        _push(`</button></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ChatBubble.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-514e7675"]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=ChatBubble.vue.mjs.map

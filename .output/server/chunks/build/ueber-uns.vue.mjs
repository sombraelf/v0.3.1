import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useHead } from './v3.mjs';
import './server.mjs';
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
import '@heroicons/vue/24/outline';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main = {
  __name: "ueber-uns",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Über uns - SorglosPflege",
      meta: [
        { name: "description", content: "Erfahren Sie mehr über SorglosPflege, unsere Mission, unser Team und unsere Werte. Wir verbinden Menschen mit qualifizierten Pflegedienstleistern in ganz Deutschland." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-light-bg py-12 min-h-screen" }, _attrs))}><div class="container mx-auto px-4"><div class="component-container mx-auto"><h1 class="text-3xl md:text-4xl font-bold mb-8 text-primary">Über uns</h1><div class="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8"><h2 class="text-2xl font-semibold mb-4 text-primary">Unsere Mission</h2><p class="mb-4"> Bei SorglosPflege UG (haftungsbeschränkt) haben wir es uns zur Aufgabe gemacht, Menschen in Pflegesituationen und ihre Angehörigen zu unterstützen. Wir verstehen, dass die Suche nach der richtigen Pflegeunterstützung überwältigend sein kann, besonders in einer Zeit, in der Sie oder Ihre Lieben bereits mit gesundheitlichen Herausforderungen konfrontiert sind. </p><p class="mb-4"> Unsere Mission ist es, diesen Prozess so einfach und stressfrei wie möglich zu gestalten. Wir bieten eine Plattform, die Menschen mit qualifizierten Pflegedienstleistern verbindet, die ihren individuellen Bedürfnissen entsprechen. Dabei legen wir großen Wert auf Qualität, Transparenz und persönliche Betreuung. </p><p> Wir glauben, dass jeder Mensch Zugang zu hochwertiger Pflege haben sollte, die seinen individuellen Bedürfnissen entspricht. Mit unserer Plattform möchten wir dazu beitragen, dieses Ziel zu erreichen und das Leben von Menschen in Pflegesituationen und ihren Angehörigen zu verbessern. </p></div><div class="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8"><h2 class="text-2xl font-semibold mb-4 text-primary">Unser Team</h2><p class="mb-6"> Hinter SorglosPflege steht ein engagiertes Team aus Experten mit umfassender Erfahrung im Gesundheits- und Pflegebereich. Wir vereinen Fachwissen aus verschiedenen Disziplinen, um Ihnen den bestmöglichen Service zu bieten. </p><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="text-center"><div class="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div><h3 class="text-xl font-medium mb-1">Max Mustermann</h3><p class="text-gray-600 mb-2">Geschäftsführer</p><p class="text-sm"> Mit über 15 Jahren Erfahrung im Gesundheitswesen leitet Max unser Unternehmen mit Leidenschaft und Vision. </p></div><div class="text-center"><div class="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div><h3 class="text-xl font-medium mb-1">Anna Schmidt</h3><p class="text-gray-600 mb-2">Pflegeberaterin</p><p class="text-sm"> Als examinierte Pflegefachkraft bringt Anna wertvolle praktische Erfahrung in unser Beratungsteam ein. </p></div><div class="text-center"><div class="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div><h3 class="text-xl font-medium mb-1">Thomas Weber</h3><p class="text-gray-600 mb-2">Kundenservice</p><p class="text-sm"> Thomas sorgt dafür, dass alle Ihre Anfragen schnell und kompetent bearbeitet werden. </p></div></div></div><div class="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8"><h2 class="text-2xl font-semibold mb-4 text-primary">Unsere Werte</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><h3 class="text-xl font-medium mb-2 text-primary">Qualität</h3><p> Wir arbeiten nur mit sorgfältig geprüften Pflegedienstleistern zusammen, die unsere hohen Qualitätsstandards erfüllen. Ihre Zufriedenheit und das Wohlbefinden der Pflegebedürftigen stehen für uns an erster Stelle. </p></div><div><h3 class="text-xl font-medium mb-2 text-primary">Transparenz</h3><p> Wir legen Wert auf klare und offene Kommunikation. Bei uns erhalten Sie alle Informationen, die Sie für eine fundierte Entscheidung benötigen – ohne versteckte Kosten oder Überraschungen. </p></div><div><h3 class="text-xl font-medium mb-2 text-primary">Empathie</h3><p> Wir verstehen die emotionalen und praktischen Herausforderungen, die mit Pflegesituationen verbunden sind. Unser Team begegnet Ihnen mit Verständnis, Geduld und einem offenen Ohr für Ihre individuellen Bedürfnisse. </p></div><div><h3 class="text-xl font-medium mb-2 text-primary">Innovation</h3><p> Wir streben kontinuierlich danach, unsere Dienstleistungen zu verbessern und innovative Lösungen zu entwickeln, die den Pflegeprozess für alle Beteiligten einfacher und effizienter gestalten. </p></div></div></div><div class="bg-white rounded-lg shadow-md p-6 md:p-8"><h2 class="text-2xl font-semibold mb-4 text-primary">Unsere Geschichte</h2><p class="mb-4"> SorglosPflege UG (haftungsbeschränkt) wurde 2020 gegründet, als unsere Gründer aus eigener Erfahrung die Herausforderungen bei der Suche nach geeigneter Pflegeunterstützung für Familienangehörige erlebten. Sie erkannten, dass es einen Bedarf an einer benutzerfreundlichen Plattform gab, die Menschen mit qualifizierten Pflegedienstleistern verbindet. </p><p class="mb-4"> Was als kleine Initiative begann, hat sich zu einer umfassenden Plattform entwickelt, die heute Menschen in ganz Deutschland dabei hilft, die richtige Pflegeunterstützung zu finden. Wir sind stolz darauf, bereits tausenden Familien geholfen zu haben, und arbeiten kontinuierlich daran, unseren Service weiter zu verbessern. </p><p> Unser Ziel ist es, die führende Plattform für Pflegevermittlung in Deutschland zu werden und dabei stets unseren Grundwerten treu zu bleiben: Qualität, Transparenz, Empathie und Innovation. </p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ueber-uns.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ueber-uns.vue.mjs.map

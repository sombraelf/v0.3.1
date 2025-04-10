import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0 } from './server.mjs';
import { withCtx, createBlock, createTextVNode, openBlock, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.slug;
    const categories = [
      { id: "pflegegrad", name: "Pflegegrad" },
      { id: "alltagshilfe", name: "Alltagshilfe" },
      { id: "finanzierung", name: "Finanzierung" },
      { id: "betreuung", name: "Betreuung" }
    ];
    const post = {
      title: "Pflegegrad beantragen: So geht's",
      date: "2023-11-15",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      categoryId: "pflegegrad",
      author: {
        name: "Julia Müller",
        role: "Pflegeexpertin",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    };
    const relatedPosts = [
      {
        id: 5,
        title: "Pflegegrad 2: Welche Leistungen stehen Ihnen zu?",
        slug: "pflegegrad-2-leistungen",
        excerpt: "Ein detaillierter Überblick über alle Leistungen, die bei Pflegegrad 2 in Anspruch genommen werden können.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        title: "Finanzielle Unterstützung für pflegende Angehörige",
        slug: "finanzielle-unterstuetzung-pflegende-angehoerige",
        excerpt: "Welche finanziellen Hilfen stehen pflegenden Angehörigen zu und wie können sie beantragt werden?",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ];
    const getCategoryName = (categoryId) => {
      const category = categories.find((cat) => cat.id === categoryId);
      return category ? category.name : "";
    };
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("de-DE", options);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6f62c2a9><section class="bg-white py-16 md:py-24" data-v-6f62c2a9><div class="container mx-auto px-4 max-w-7xl" data-v-6f62c2a9>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ratgeber",
        class: "inline-flex items-center text-primary font-medium mb-8 hover:text-primary-dark transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-6f62c2a9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-v-6f62c2a9${_scopeId}></path></svg> Zurück zur Übersicht `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-5 w-5 mr-2",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                })
              ])),
              createTextVNode(" Zurück zur Übersicht ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-8" data-v-6f62c2a9><div class="flex items-center mb-4" data-v-6f62c2a9><span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mr-3" data-v-6f62c2a9>${ssrInterpolate(getCategoryName(post.categoryId))}</span><span class="text-gray-500" data-v-6f62c2a9>${ssrInterpolate(formatDate(post.date))}</span></div><h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-v-6f62c2a9>${ssrInterpolate(post.title)}</h1><div class="flex items-center" data-v-6f62c2a9><img${ssrRenderAttr("src", post.author.avatar)}${ssrRenderAttr("alt", post.author.name)} class="w-10 h-10 rounded-full mr-3" data-v-6f62c2a9><div data-v-6f62c2a9><div class="font-medium text-gray-900" data-v-6f62c2a9>${ssrInterpolate(post.author.name)}</div><div class="text-sm text-gray-500" data-v-6f62c2a9>${ssrInterpolate(post.author.role)}</div></div></div></div><div class="relative rounded-lg overflow-hidden mb-10" data-v-6f62c2a9><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="w-full h-auto" data-v-6f62c2a9></div><div class="prose prose-lg max-w-none" data-v-6f62c2a9><p data-v-6f62c2a9> Wenn Sie oder ein Angehöriger pflegebedürftig werden, ist es wichtig, frühzeitig einen Pflegegrad zu beantragen. Der Pflegegrad bestimmt, welche Leistungen von der Pflegeversicherung übernommen werden. In diesem Artikel erklären wir Ihnen Schritt für Schritt, wie Sie einen Pflegegrad beantragen können. </p><h2 data-v-6f62c2a9>Was ist ein Pflegegrad?</h2><p data-v-6f62c2a9> Der Pflegegrad gibt an, wie selbstständig eine Person ihren Alltag bewältigen kann. Es gibt fünf Pflegegrade, wobei Pflegegrad 1 eine geringe Beeinträchtigung und Pflegegrad 5 eine schwerste Beeinträchtigung der Selbstständigkeit bedeutet. </p><h2 data-v-6f62c2a9>Wer kann einen Pflegegrad beantragen?</h2><p data-v-6f62c2a9> Jeder, der gesetzlich oder privat pflegeversichert ist und aufgrund körperlicher, kognitiver oder psychischer Beeinträchtigungen Hilfe im Alltag benötigt, kann einen Pflegegrad beantragen. Die Beeinträchtigungen müssen voraussichtlich für mindestens sechs Monate bestehen. </p><h2 data-v-6f62c2a9>Schritt 1: Antrag stellen</h2><p data-v-6f62c2a9> Der erste Schritt ist die Antragstellung bei der Pflegekasse. Dies kann telefonisch, schriftlich oder online erfolgen. Die Pflegekasse ist bei der Krankenkasse angesiedelt, bei der die pflegebedürftige Person versichert ist. </p><h2 data-v-6f62c2a9>Schritt 2: Vorbereitung auf die Begutachtung</h2><p data-v-6f62c2a9> Nach der Antragstellung wird ein Termin für die Begutachtung durch den Medizinischen Dienst (MD) oder bei privat Versicherten durch MEDICPROOF vereinbart. Zur Vorbereitung sollten Sie: </p><ul data-v-6f62c2a9><li data-v-6f62c2a9>Ein Pflegetagebuch führen, in dem Sie dokumentieren, welche Hilfe die pflegebedürftige Person benötigt</li><li data-v-6f62c2a9>Arztberichte und Befunde zusammenstellen</li><li data-v-6f62c2a9>Medikamentenpläne bereithalten</li><li data-v-6f62c2a9>Eine Liste mit den behandelnden Ärzten erstellen</li></ul><h2 data-v-6f62c2a9>Schritt 3: Die Begutachtung</h2><p data-v-6f62c2a9> Bei der Begutachtung kommt ein Gutachter zu Ihnen nach Hause und prüft die Selbstständigkeit in sechs verschiedenen Bereichen: </p><ol data-v-6f62c2a9><li data-v-6f62c2a9>Mobilität</li><li data-v-6f62c2a9>Kognitive und kommunikative Fähigkeiten</li><li data-v-6f62c2a9>Verhaltensweisen und psychische Problemlagen</li><li data-v-6f62c2a9>Selbstversorgung</li><li data-v-6f62c2a9>Umgang mit krankheits- oder therapiebedingten Anforderungen</li><li data-v-6f62c2a9>Gestaltung des Alltagslebens und sozialer Kontakte</li></ol><h2 data-v-6f62c2a9>Schritt 4: Entscheidung der Pflegekasse</h2><p data-v-6f62c2a9> Nach der Begutachtung erstellt der Gutachter einen Bericht, auf dessen Grundlage die Pflegekasse über den Pflegegrad entscheidet. Die Entscheidung sollte innerhalb von 25 Arbeitstagen nach Antragstellung erfolgen. </p><h2 data-v-6f62c2a9>Was tun bei Ablehnung oder zu niedrigem Pflegegrad?</h2><p data-v-6f62c2a9> Wenn der Antrag abgelehnt wird oder der zuerkannte Pflegegrad zu niedrig erscheint, können Sie innerhalb eines Monats Widerspruch einlegen. Legen Sie dem Widerspruch möglichst weitere ärztliche Atteste bei, die Ihre Pflegebedürftigkeit belegen. </p><h2 data-v-6f62c2a9>Fazit</h2><p data-v-6f62c2a9> Die Beantragung eines Pflegegrads mag zunächst kompliziert erscheinen, ist aber mit der richtigen Vorbereitung gut zu bewältigen. Scheuen Sie sich nicht, Hilfe in Anspruch zu nehmen, zum Beispiel durch Pflegestützpunkte oder Pflegeberatungsstellen. </p><p data-v-6f62c2a9> Bei SorglosPflege unterstützen wir Sie gerne bei allen Fragen rund um das Thema Pflege und helfen Ihnen, den passenden Pflegedienst zu finden. </p></div><div class="mt-16" data-v-6f62c2a9><h3 class="text-2xl font-bold text-gray-900 mb-6" data-v-6f62c2a9>Das könnte Sie auch interessieren</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-6f62c2a9><!--[-->`);
      ssrRenderList(relatedPosts, (relatedPost) => {
        _push(`<div class="bg-white rounded-lg overflow-hidden shadow-md" data-v-6f62c2a9>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/ratgeber/${relatedPost.slug}`,
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative pb-2/3" data-v-6f62c2a9${_scopeId}><img${ssrRenderAttr("src", relatedPost.image)}${ssrRenderAttr("alt", relatedPost.title)} class="absolute h-full w-full object-cover" data-v-6f62c2a9${_scopeId}></div><div class="p-6" data-v-6f62c2a9${_scopeId}><h4 class="text-lg font-bold text-gray-900 mb-2" data-v-6f62c2a9${_scopeId}>${ssrInterpolate(relatedPost.title)}</h4><p class="text-gray-700 mb-4" data-v-6f62c2a9${_scopeId}>${ssrInterpolate(relatedPost.excerpt)}</p><div class="text-primary font-medium" data-v-6f62c2a9${_scopeId}>Weiterlesen</div></div>`);
            } else {
              return [
                createVNode("div", { class: "relative pb-2/3" }, [
                  createVNode("img", {
                    src: relatedPost.image,
                    alt: relatedPost.title,
                    class: "absolute h-full w-full object-cover"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("h4", { class: "text-lg font-bold text-gray-900 mb-2" }, toDisplayString(relatedPost.title), 1),
                  createVNode("p", { class: "text-gray-700 mb-4" }, toDisplayString(relatedPost.excerpt), 1),
                  createVNode("div", { class: "text-primary font-medium" }, "Weiterlesen")
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ratgeber/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f62c2a9"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_.vue.mjs.map

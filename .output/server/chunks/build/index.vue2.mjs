import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { ref, computed, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = [
      { id: "pflegegrad", name: "Pflegegrad" },
      { id: "alltagshilfe", name: "Alltagshilfe" },
      { id: "finanzierung", name: "Finanzierung" },
      { id: "betreuung", name: "Betreuung" }
    ];
    const posts = [
      {
        id: 1,
        title: "Pflegegrad beantragen: So geht's",
        slug: "pflegegrad-beantragen",
        excerpt: "Ein Leitfaden zur Beantragung eines Pflegegrads - von der Vorbereitung bis zur Bewilligung.",
        date: "2023-11-15",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        categoryId: "pflegegrad"
      },
      {
        id: 2,
        title: "Finanzielle Unterstützung für pflegende Angehörige",
        slug: "finanzielle-unterstuetzung-pflegende-angehoerige",
        excerpt: "Welche finanziellen Hilfen stehen pflegenden Angehörigen zu und wie können sie beantragt werden?",
        date: "2023-10-28",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        categoryId: "finanzierung"
      },
      {
        id: 3,
        title: "Alltagshilfen im Überblick",
        slug: "alltagshilfen-im-ueberblick",
        excerpt: "Von Einkaufshilfen bis zur Wohnungsreinigung: Welche Alltagshilfen gibt es und wer übernimmt die Kosten?",
        date: "2023-10-10",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        categoryId: "alltagshilfe"
      },
      {
        id: 4,
        title: "Demenz: Tipps für den Umgang mit Betroffenen",
        slug: "demenz-tipps-umgang-betroffene",
        excerpt: "Praktische Ratschläge für Angehörige und Pflegekräfte im Umgang mit Demenzpatienten.",
        date: "2023-09-22",
        image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        categoryId: "betreuung"
      },
      {
        id: 5,
        title: "Pflegegrad 2: Welche Leistungen stehen Ihnen zu?",
        slug: "pflegegrad-2-leistungen",
        excerpt: "Ein detaillierter Überblick über alle Leistungen, die bei Pflegegrad 2 in Anspruch genommen werden können.",
        date: "2023-09-05",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        categoryId: "pflegegrad"
      },
      {
        id: 6,
        title: "Entlastungsbetrag: 125 Euro sinnvoll nutzen",
        slug: "entlastungsbetrag-sinnvoll-nutzen",
        excerpt: "Wie Sie den monatlichen Entlastungsbetrag von 125 Euro optimal für Ihre Pflegesituation einsetzen können.",
        date: "2023-08-18",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        categoryId: "finanzierung"
      }
    ];
    const selectedCategory = ref(null);
    const filteredPosts = computed(() => {
      if (!selectedCategory.value) return posts;
      return posts.filter((post) => post.categoryId === selectedCategory.value);
    });
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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1999800d><section class="bg-white py-16 md:py-24" data-v-1999800d><div class="container mx-auto px-4 max-w-7xl" data-v-1999800d><div class="text-center mb-16" data-v-1999800d><h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-v-1999800d>Ratgeber</h1><p class="text-xl text-gray-600 max-w-3xl mx-auto" data-v-1999800d> Informationen und Tipps rund um das Thema Pflege und Betreuung </p></div><div class="flex flex-wrap justify-center gap-4 mb-12" data-v-1999800d><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<button class="${ssrRenderClass([
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          selectedCategory.value === category.id ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        ])}" data-v-1999800d>${ssrInterpolate(category.name)}</button>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-1999800d><!--[-->`);
      ssrRenderList(filteredPosts.value, (post) => {
        _push(`<div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105" data-v-1999800d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/ratgeber/${post.slug}`,
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative pb-2/3" data-v-1999800d${_scopeId}><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} class="absolute h-full w-full object-cover" data-v-1999800d${_scopeId}><div class="absolute top-4 left-4" data-v-1999800d${_scopeId}><span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full" data-v-1999800d${_scopeId}>${ssrInterpolate(getCategoryName(post.categoryId))}</span></div></div><div class="p-6" data-v-1999800d${_scopeId}><div class="text-sm text-gray-500 mb-2" data-v-1999800d${_scopeId}>${ssrInterpolate(formatDate(post.date))}</div><h2 class="text-xl font-bold text-gray-900 mb-2" data-v-1999800d${_scopeId}>${ssrInterpolate(post.title)}</h2><p class="text-gray-700 mb-4" data-v-1999800d${_scopeId}>${ssrInterpolate(post.excerpt)}</p><div class="text-primary font-medium" data-v-1999800d${_scopeId}>Weiterlesen</div></div>`);
            } else {
              return [
                createVNode("div", { class: "relative pb-2/3" }, [
                  createVNode("img", {
                    src: post.image,
                    alt: post.title,
                    class: "absolute h-full w-full object-cover"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "absolute top-4 left-4" }, [
                    createVNode("span", { class: "bg-primary text-white text-xs font-bold px-3 py-1 rounded-full" }, toDisplayString(getCategoryName(post.categoryId)), 1)
                  ])
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("div", { class: "text-sm text-gray-500 mb-2" }, toDisplayString(formatDate(post.date)), 1),
                  createVNode("h2", { class: "text-xl font-bold text-gray-900 mb-2" }, toDisplayString(post.title), 1),
                  createVNode("p", { class: "text-gray-700 mb-4" }, toDisplayString(post.excerpt), 1),
                  createVNode("div", { class: "text-primary font-medium" }, "Weiterlesen")
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ratgeber/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1999800d"]]);

export { index as default };
//# sourceMappingURL=index.vue2.mjs.map

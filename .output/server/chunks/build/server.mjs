import { shallowReactive, reactive, effectScope, getCurrentScope, hasInjectionContext, getCurrentInstance, toRef, inject, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw, defineComponent, ref, h, resolveComponent, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext, provide, Suspense, Fragment, watch, nextTick, defineAsyncComponent, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, createApp } from 'vue';
import { h as createHooks, i as getContext, c as createError$1, t as toRouteMatcher, k as createRouter, l as defu, m as hasProtocol, n as joinURL, w as withQuery, s as sanitizeStatusCode, o as isScriptProtocol, p as executeAsync, q as parseQuery, r as withTrailingSlash, v as withoutTrailingSlash } from '../nitro/nitro.mjs';
import { START_LOCATION, createMemoryHistory, createRouter as createRouter$1, RouterView } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChatBubbleLeftIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, ChatBubbleLeftRightIcon, InformationCircleIcon, UserIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';

const appPageTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";

function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.16.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide && typeof provide === "object") {
      for (const key in provide) {
        nuxtApp.provide(key, provide[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin.dependsOn) == null ? void 0 : _a2.filter((name) => plugins.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.push(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}

const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};

const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});

function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: useRuntimeConfig().nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}

const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");

const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}

function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index.vue.mjs')
  },
  {
    name: "kontakt",
    path: "/kontakt",
    component: () => import('./kontakt.vue.mjs')
  },
  {
    name: "beratung",
    path: "/beratung",
    component: () => import('./beratung.vue.mjs')
  },
  {
    name: "impressum",
    path: "/impressum",
    component: () => import('./impressum.vue.mjs')
  },
  {
    name: "ueber-uns",
    path: "/ueber-uns",
    component: () => import('./ueber-uns.vue.mjs')
  },
  {
    name: "nutzer-agb",
    path: "/nutzer-agb",
    component: () => import('./nutzer-agb.vue.mjs')
  },
  {
    name: "datenschutz",
    path: "/datenschutz",
    component: () => import('./datenschutz.vue.mjs')
  },
  {
    name: "partner-agb",
    path: "/partner-agb",
    component: () => import('./partner-agb.vue.mjs')
  },
  {
    name: "ratgeber",
    path: "/ratgeber",
    component: () => import('./index.vue2.mjs')
  },
  {
    name: "ratgeber-slug",
    path: "/ratgeber/:slug()",
    component: () => import('./_slug_.vue.mjs')
  }
];

const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}

const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, "instant", position)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, scrollBehaviorType, position) {
  if (position) {
    return position;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: scrollBehaviorType
    };
  }
  return { left: 0, top: 0, behavior: scrollBehaviorType };
}

const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};

const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});

const manifest_45route_45rule = defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});

const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};

const plugin = defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    const history = ((_b = (_a = routerOptions).history) == null ? void 0 : _b.call(_a, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter$1({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    handleHotUpdate(router, routerOptions.routes ? routerOptions.routes : (routes2) => routes2);
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d2;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_d = nuxtApp.ssrContext) == null ? void 0 : _d.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2, _c2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry of toArray(componentMiddleware)) {
            middlewareEntries.add(entry);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry of middlewareEntries) {
          const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await ((_c2 = (_b2 = namedMiddleware)[entry]) == null ? void 0 : _c2.call(_b2).then((r) => r.default || r)) : entry;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry}'.`);
          }
          try {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError$1({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError$1(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});

function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}

const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});

const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = defineNuxtPlugin({
  name: "nuxt:global-components"
});

const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4
];

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return resolveTrailingSlashBehavior(
          href2,
          router.resolve
          /* will not be called */
        );
      }
      if (typeof to.value === "object") {
        return ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null;
      }
      return resolveTrailingSlashBehavior(
        joinURL(config.app.baseURL, to.value),
        router.resolve
        /* will not be called */
      );
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      ref(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
    // }) as unknown as DefineComponent<NuxtLinkProps, object, object, ComputedOptions, MethodOptions, object, object, EmitsOptions, string, object, NuxtLinkProps, object, SlotsType<NuxtLinkSlots>>
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}

const _sfc_main$5 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const isServicesMobileOpen = ref(false);
    const isServicesHovered = ref(false);
    const servicesMenuTimeout = ref(null);
    const closeServicesMenu = () => {
      if (servicesMenuTimeout.value) {
        clearTimeout(servicesMenuTimeout.value);
        servicesMenuTimeout.value = null;
      }
      isServicesHovered.value = false;
    };
    const closeMobileMenu = () => {
      isOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white border-b border-gray-200 sticky top-0 z-50" }, _attrs))}><div class="container mx-auto px-4"><div class="flex items-center justify-between h-14 md:h-16 lg:h-20 component-container mx-auto"><div class="flex-shrink-0">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg md:text-xl font-bold text-primary"${_scopeId}>SorglosPflege</span>`);
          } else {
            return [
              createVNode("span", { class: "text-lg md:text-xl font-bold text-primary" }, "SorglosPflege")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex lg:hidden"><button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-100 focus:outline-none" aria-controls="mobile-menu"${ssrRenderAttr("aria-expanded", isOpen.value)}><span class="sr-only">Menü öffnen</span>`);
      if (!isOpen.value) {
        _push(ssrRenderComponent(unref(Bars3Icon), { class: "block h-6 w-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(XMarkIcon), { class: "block h-6 w-6" }, null, _parent));
      }
      _push(`</button></div><nav class="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6"><div class="relative inline-block"><button class="flex items-center px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"${ssrRenderAttr("aria-expanded", isServicesHovered.value)}> Leistungen `);
      _push(ssrRenderComponent(unref(ChevronDownIcon), {
        class: ["ml-1 h-4 w-4", { "rotate-180": isServicesHovered.value }]
      }, null, _parent));
      _push(`</button><div style="${ssrRenderStyle([
        isServicesHovered.value ? null : { display: "none" },
        { "border-radius": "var(--border-radius)" }
      ])}" class="absolute left-0 mt-2 w-56 bg-white border border-gray-200 focus:outline-none shadow-lg"><div class="py-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/alltagshilfe",
        class: "block px-4 py-2 text-sm hover:bg-gray-100 text-dark-text",
        onClick: closeServicesMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Alltagshilfe finden `);
          } else {
            return [
              createTextVNode(" Alltagshilfe finden ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pflegegrad",
        class: "block px-4 py-2 text-sm hover:bg-gray-100 text-dark-text",
        onClick: closeServicesMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pflegegrad berechnen `);
          } else {
            return [
              createTextVNode(" Pflegegrad berechnen ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ratgeber",
        class: "px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ratgeber `);
          } else {
            return [
              createTextVNode(" Ratgeber ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ueber-uns",
        class: "px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Über uns `);
          } else {
            return [
              createTextVNode(" Über uns ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kontakt",
        class: "px-2 xl:px-3 py-2 rounded-md text-sm font-medium text-dark-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontakt `);
          } else {
            return [
              createTextVNode(" Kontakt ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/beratung",
        class: "btn-secondary text-xs xl:text-sm inline-flex items-center hover:bg-primary/10 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChatBubbleLeftIcon), { class: "h-4 w-4 mr-1" }, null, _parent2, _scopeId));
            _push2(` Beratung erhalten `);
          } else {
            return [
              createVNode(unref(ChatBubbleLeftIcon), { class: "h-4 w-4 mr-1" }),
              createTextVNode(" Beratung erhalten ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/angebote",
        class: "btn-primary text-xs xl:text-sm"
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
      _push(`</div></div></div><div style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="lg:hidden bg-white border-t border-gray-200" id="mobile-menu"><div class="px-2 pt-2 pb-3 space-y-1 component-container mx-auto"><div><button class="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium text-dark-text"> Dienstleistungen `);
      _push(ssrRenderComponent(unref(ChevronDownIcon), {
        class: ["ml-1 h-5 w-5", { "rotate-180": isServicesMobileOpen.value }]
      }, null, _parent));
      _push(`</button><div style="${ssrRenderStyle(isServicesMobileOpen.value ? null : { display: "none" })}" class="pl-4 space-y-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/alltagshilfe",
        class: "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Alltagshilfe finden `);
          } else {
            return [
              createTextVNode(" Alltagshilfe finden ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pflegegrad",
        class: "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pflegegrad berechnen `);
          } else {
            return [
              createTextVNode(" Pflegegrad berechnen ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ratgeber",
        class: "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ratgeber `);
          } else {
            return [
              createTextVNode(" Ratgeber ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ueber-uns",
        class: "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Wer wir sind `);
          } else {
            return [
              createTextVNode(" Wer wir sind ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kontakt",
        class: "block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 text-dark-text",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontakt `);
          } else {
            return [
              createTextVNode(" Kontakt ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-2 space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/beratung",
        class: "block w-full text-center btn-secondary text-sm inline-flex items-center justify-center hover:bg-primary/10 transition-colors duration-300",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChatBubbleLeftIcon), { class: "h-4 w-4 mr-1" }, null, _parent2, _scopeId));
            _push2(` Beratung erhalten `);
          } else {
            return [
              createVNode(unref(ChatBubbleLeftIcon), { class: "h-4 w-4 mr-1" }),
              createTextVNode(" Beratung erhalten ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/angebote",
        class: "block w-full text-center btn-primary text-sm",
        onClick: closeMobileMenu
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
      _push(`</div></div></div></header>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();

const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$4 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const FacebookIcon = defineComponent({
      render: () => h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, [
        h("path", {
          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        })
      ])
    });
    const InstagramIcon = defineComponent({
      render: () => h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, [
        h("path", {
          d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        })
      ])
    });
    const TwitterIcon = defineComponent({
      render: () => h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, [
        h("path", {
          d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        })
      ])
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary text-white" }, _attrs))} data-v-798c7604><div class="py-16 text-center" data-v-798c7604><div class="container mx-auto px-4" data-v-798c7604><div class="component-container mx-auto" data-v-798c7604><h2 class="text-3xl md:text-4xl font-bold mb-4" data-v-798c7604>Bereit für ein sorgloses Leben?</h2><p class="text-lg mb-8 max-w-3xl mx-auto" data-v-798c7604> Starten Sie jetzt Ihre Anfrage und finden Sie die passende Unterstützung für Ihren Alltag. </p><div class="flex flex-col sm:flex-row justify-center gap-4" data-v-798c7604>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/alltagshilfe",
        class: "btn bg-white text-primary hover:bg-gray-100 transition-colors duration-300 font-medium"
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
        to: "/kontakt",
        class: "btn bg-transparent border-2 border-white hover:bg-white/10 transition-colors duration-300 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontakt aufnehmen `);
          } else {
            return [
              createTextVNode(" Kontakt aufnehmen ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="py-12 border-t border-white/20" data-v-798c7604><div class="container mx-auto px-4" data-v-798c7604><div class="component-container mx-auto" data-v-798c7604><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-798c7604><div data-v-798c7604><div class="mb-6" data-v-798c7604><h3 class="text-2xl font-bold mb-1" data-v-798c7604><span class="text-white" data-v-798c7604>Sorglos</span><span class="text-light-accent" data-v-798c7604>Pflege</span></h3><p class="text-white/80" data-v-798c7604> Ihre kostenlose Pflegeberatung und Vergleichsplattform für Pflegedienstleister. Wir helfen Ihnen, den richtigen Pflegedienst zu finden. </p></div><div class="flex space-x-4" data-v-798c7604><a href="#" aria-label="Facebook" class="text-white hover:text-light-accent transition-colors duration-300" data-v-798c7604>`);
      _push(ssrRenderComponent(unref(FacebookIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`</a><a href="#" aria-label="Instagram" class="text-white hover:text-light-accent transition-colors duration-300" data-v-798c7604>`);
      _push(ssrRenderComponent(unref(InstagramIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`</a><a href="#" aria-label="Twitter" class="text-white hover:text-light-accent transition-colors duration-300" data-v-798c7604>`);
      _push(ssrRenderComponent(unref(TwitterIcon), { class: "h-6 w-6" }, null, _parent));
      _push(`</a></div></div><div data-v-798c7604><h4 class="text-lg font-semibold mb-4" data-v-798c7604>Schnelllinks</h4><ul class="space-y-2" data-v-798c7604><li data-v-798c7604>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/alltagshilfe",
        class: "text-white/80 hover:text-white transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Alltagshilfe `);
          } else {
            return [
              createTextVNode(" Alltagshilfe ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-798c7604>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pflegegrad",
        class: "text-white/80 hover:text-white transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pflegegrad berechnen `);
          } else {
            return [
              createTextVNode(" Pflegegrad berechnen ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-798c7604>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ratgeber",
        class: "text-white/80 hover:text-white transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ratgeber `);
          } else {
            return [
              createTextVNode(" Ratgeber ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-798c7604>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ueber-uns",
        class: "text-white/80 hover:text-white transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Über uns `);
          } else {
            return [
              createTextVNode(" Über uns ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-798c7604>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kontakt",
        class: "text-white/80 hover:text-white transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontakt `);
          } else {
            return [
              createTextVNode(" Kontakt ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div data-v-798c7604><h4 class="text-lg font-semibold mb-4" data-v-798c7604>Kontakt</h4><ul class="space-y-3" data-v-798c7604><li class="flex items-start" data-v-798c7604>`);
      _push(ssrRenderComponent(unref(EnvelopeIcon), { class: "h-5 w-5 mr-2 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<a href="mailto:info@sorglos-pflege.de" class="text-white/80 hover:text-white transition-colors duration-300" data-v-798c7604> info@sorglos-pflege.de </a></li><li class="flex items-start" data-v-798c7604>`);
      _push(ssrRenderComponent(unref(PhoneIcon), { class: "h-5 w-5 mr-2 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<a href="tel:+491234567890" class="text-white/80 hover:text-white transition-colors duration-300" data-v-798c7604> +49 123 456789 </a></li><li class="flex items-start" data-v-798c7604>`);
      _push(ssrRenderComponent(unref(MapPinIcon), { class: "h-5 w-5 mr-2 mt-0.5 flex-shrink-0" }, null, _parent));
      _push(`<span class="text-white/80" data-v-798c7604> Musterstraße 123, 12345 Berlin </span></li></ul></div></div></div></div></div><div class="py-4 border-t border-white/20" data-v-798c7604><div class="container mx-auto px-4" data-v-798c7604><div class="component-container mx-auto flex flex-col md:flex-row justify-between items-center" data-v-798c7604><div class="text-sm text-white/70 mb-4 md:mb-0" data-v-798c7604> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} SorglosPflege UG (haftungsbeschränkt) </div><div class="flex flex-wrap justify-center gap-4 text-sm" data-v-798c7604>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/impressum",
        class: "text-white/70 hover:text-white transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Impressum `);
          } else {
            return [
              createTextVNode(" Impressum ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/datenschutz",
        class: "text-white/70 hover:text-white transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Datenschutz `);
          } else {
            return [
              createTextVNode(" Datenschutz ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/nutzer-agb",
        class: "text-white/70 hover:text-white transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nutzer AGB `);
          } else {
            return [
              createTextVNode(" Nutzer AGB ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/partner-agb",
        class: "text-white/70 hover:text-white transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Partner AGB `);
          } else {
            return [
              createTextVNode(" Partner AGB ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-798c7604"]]);

const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ChatBubble.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-514e7675"]]);

const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$5;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_AppFooter = __nuxt_component_2;
      const _component_ChatBubble = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_ChatBubble, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404.vue.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500.vue.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: entry$1
});

export { _export_sfc as _, __nuxt_component_0 as a, server as s, tryUseNuxtApp as t, useRoute as u };
//# sourceMappingURL=server.mjs.map

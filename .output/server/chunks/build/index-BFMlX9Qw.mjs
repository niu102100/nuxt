import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { c as useRuntimeConfig, a as __nuxt_component_0 } from './server.mjs';
import { ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from './banner3-BbeMgWGh.mjs';
import { _ as _imports_6 } from './1-DfCOLKB0.mjs';
import { u as useFetch } from './fetch-Cnf7hAOo.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_3 = "" + buildAssetsURL("map-example.DqH-XjL3.png");
const httpGet = async (url) => {
  return await httpRequest(url);
};
const httpRequest = async (url, options) => {
  const config = useRuntimeConfig();
  return await useFetch(url, {
    baseURL: config.public.baseUrl,
    onRequest({ options: options2 }) {
    },
    onResponse({ response }) {
      return response._data;
    }
  }, "$bIdiSNIVFE");
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref([]);
    const destList = ref([]);
    ref([]);
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => httpGet("/getAllDest")), __temp = await __temp, __restore(), __temp);
    console.log("\u76EE\u7684\u5730\u6570\u636E", data.value.data.list, error);
    destList.value = data.value.data.list;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sct-main" }, _attrs))}><div class="sct-index-banner"><div class="sct-top-banner-container"><div class="uk-position-relative uk-light" tabindex="-1" uk-slideshow="ratio: 4:3;autoplay: true;autoplay-interval: 3000;max-height: 600;"><ul class="uk-slideshow-items"><li><a href="#" title="" target="_blank"><img${ssrRenderAttr("src", _imports_0)} alt="" uk-cover></a></li><li><a href="#" title="" target="_blank"><img${ssrRenderAttr("src", _imports_1)} alt="" uk-cover></a></li><li><a href="#" title="" target="_blank"><img${ssrRenderAttr("src", _imports_2)} alt="" uk-cover></a></li></ul><div class="uk-position-bottom-center uk-position-small"><ul class="uk-slideshow-nav uk-dotnav uk-flex-center"></ul></div></div></div></div><div class="uk-section"><div class="uk-container sct-map-wrap-container"><h2 class="sct-main-heading">The Most Popular Destinations in China</h2><div class="sct-map-wrap" style="${ssrRenderStyle({})}"><div class="sct-map-inner"><img${ssrRenderAttr("src", _imports_3)} alt="" srcset=""></div></div></div></div><div class="uk-section uk-padding-remove-top"><div class="uk-container sct-container"><div class="sct-main-content"><ul class="sct-width-change uk-child-width-1-3@s" uk-grid><!--[-->`);
      ssrRenderList(unref(destList), (item) => {
        _push(`<li class="sct-proList-item">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "uk-card sct-card-2 uk-transition-toggle",
          to: `/city/${item.name}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="uk-transition-scale-up uk-transition-opaque"${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId}><div class="sct-card-2-overly"${_scopeId}><span class="sct-cityname"${_scopeId}>${ssrInterpolate(item.name)}</span><p class="sct-spotlist"${_scopeId}>${ssrInterpolate(item.desc)}</p></div>`);
            } else {
              return [
                createVNode("img", {
                  class: "uk-transition-scale-up uk-transition-opaque",
                  src: _imports_6,
                  alt: ""
                }),
                createVNode("div", { class: "sct-card-2-overly" }, [
                  createVNode("span", { class: "sct-cityname" }, toDisplayString(item.name), 1),
                  createVNode("p", { class: "sct-spotlist" }, toDisplayString(item.desc), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="sct-btn-border-box uk-margin-top sct-margin-top-large"><a class="uk-button sct-btn-default btn-border is-rounded" href="javascript:;">Show More</a></div></div></div></div><div class="uk-section sct-footer-links-section"><div class="uk-container sct-footer-links-container"><h2 class="sct-main-heading">China Tour Cities</h2><hr><div class="sct-footer-links-content"><ul class="uk-link-text sct-footer-links-list"><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Beijing</a></li><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Chengdu</a></li><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Chongqing</a></li><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Dali</a></li><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Datong</a></li></ul><ul class="uk-link-text sct-footer-links-list"><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Guilin</a></li><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Guizhou</a></li><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Guangzhou</a></li><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Hangzhou</a></li></ul><ul class="uk-link-text sct-footer-links-list"><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Kunming</a></li><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Sanya</a></li><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Shanghai</a></li><li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Xi&#39;an</a></li></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/destinations/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BFMlX9Qw.mjs.map

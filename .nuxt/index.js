import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_bootstrapvue_30c2c0bd from 'nuxt_plugin_bootstrapvue_30c2c0bd' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_axios_2c84508e from 'nuxt_plugin_axios_2c84508e' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_vant_6b946232 from 'nuxt_plugin_vant_6b946232' // Source: ../plugins/vant.js (mode: 'all')
import nuxt_plugin_index_5e7689d9 from 'nuxt_plugin_index_5e7689d9' // Source: ../plugins/index.js (mode: 'client')
import nuxt_plugin_filters_14a52510 from 'nuxt_plugin_filters_14a52510' // Source: ../plugins/filters.js (mode: 'all')
import nuxt_plugin_elementui_d905880e from 'nuxt_plugin_elementui_d905880e' // Source: ../plugins/element-ui (mode: 'all')
import nuxt_plugin_bootstrap_29b38afa from 'nuxt_plugin_bootstrap_29b38afa' // Source: ../plugins/bootstrap (mode: 'all')
import nuxt_plugin_api_caeae0b4 from 'nuxt_plugin_api_caeae0b4' // Source: ../plugins/api (mode: 'client')
import nuxt_plugin_vueawesomeswiper_4c7fbf9a from 'nuxt_plugin_vueawesomeswiper_4c7fbf9a' // Source: ../plugins/vue-awesome-swiper.js (mode: 'client')
import nuxt_plugin_iview_2298c11a from 'nuxt_plugin_iview_2298c11a' // Source: ../plugins/iview (mode: 'all')
import nuxt_plugin_baiduStatistics_12950ee6 from 'nuxt_plugin_baiduStatistics_12950ee6' // Source: ../plugins/baiduStatistics.js (mode: 'all')
import nuxt_plugin_ga_22722969 from 'nuxt_plugin_ga_22722969' // Source: ../plugins/ga.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"忆家,YIHOME_澳洲留学租房_英国留学租房-忆家官网","meta":[{"charset":"utf-8"},{"hid":"description","name":"description","content":"YIHOME忆家是国内领先的海外留学租房平台，租房服务包括：澳洲留学租房、英国留学租房、雷丁租房、布莱顿租房、墨尔本等海外留学租房生态圈。致力为英国和澳洲市场海外留学生提供长期租住解决方案，咨询热线：021-66610767"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"},{"hid":"keywords","name":"keywords","content":"YIHOME,留学生租房,澳洲留学租房,英国留学租房"},{"name":"renderer","content":"webkit"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"script":[{"src":"https:\u002F\u002Fditu.google.cn\u002Fmaps\u002Fapi\u002Fjs?key=AIzaSyBvJmcaYjx2WDBwhoQtxJNIHwfvodK2UEk&signed_in=true"},{"src":"https:\u002F\u002Fmap.qq.com\u002Fapi\u002Fjs?v=2.exp&key=A64BZ-NCVKX-X4M4Q-7V7GK-7FH6T-OEFUB"},{"src":"https:\u002F\u002Fhm.baidu.com\u002Fhm.js?b127ed932a7cdf1b6d9a5b7c238903b3"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_bootstrapvue_30c2c0bd === 'function') {
    await nuxt_plugin_bootstrapvue_30c2c0bd(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_2c84508e === 'function') {
    await nuxt_plugin_axios_2c84508e(app.context, inject)
  }

  if (typeof nuxt_plugin_vant_6b946232 === 'function') {
    await nuxt_plugin_vant_6b946232(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_index_5e7689d9 === 'function') {
    await nuxt_plugin_index_5e7689d9(app.context, inject)
  }

  if (typeof nuxt_plugin_filters_14a52510 === 'function') {
    await nuxt_plugin_filters_14a52510(app.context, inject)
  }

  if (typeof nuxt_plugin_elementui_d905880e === 'function') {
    await nuxt_plugin_elementui_d905880e(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrap_29b38afa === 'function') {
    await nuxt_plugin_bootstrap_29b38afa(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_api_caeae0b4 === 'function') {
    await nuxt_plugin_api_caeae0b4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueawesomeswiper_4c7fbf9a === 'function') {
    await nuxt_plugin_vueawesomeswiper_4c7fbf9a(app.context, inject)
  }

  if (typeof nuxt_plugin_iview_2298c11a === 'function') {
    await nuxt_plugin_iview_2298c11a(app.context, inject)
  }

  if (typeof nuxt_plugin_baiduStatistics_12950ee6 === 'function') {
    await nuxt_plugin_baiduStatistics_12950ee6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ga_22722969 === 'function') {
    await nuxt_plugin_ga_22722969(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }

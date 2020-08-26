import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7185cef0 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _e35285d8 = () => interopDefault(import('../pages/abroad/index.vue' /* webpackChunkName: "pages/abroad/index" */))
const _24ef1c7a = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _8592d82c = () => interopDefault(import('../pages/findhouse/index.vue' /* webpackChunkName: "pages/findhouse/index" */))
const _84fd40f2 = () => interopDefault(import('../pages/findpwd/index.vue' /* webpackChunkName: "pages/findpwd/index" */))
const _0c15aea9 = () => interopDefault(import('../pages/helptickets/index.vue' /* webpackChunkName: "pages/helptickets/index" */))
const _02e19fd4 = () => interopDefault(import('../pages/housedetail/index.vue' /* webpackChunkName: "pages/housedetail/index" */))
const _f91cdb38 = () => interopDefault(import('../pages/Join-us/index.vue' /* webpackChunkName: "pages/Join-us/index" */))
const _786e77cc = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _11b20c1c = () => interopDefault(import('../pages/newlogin/index.vue' /* webpackChunkName: "pages/newlogin/index" */))
const _63d4d06b = () => interopDefault(import('../pages/notice/index.vue' /* webpackChunkName: "pages/notice/index" */))
const _d645951e = () => interopDefault(import('../pages/order/index.vue' /* webpackChunkName: "pages/order/index" */))
const _aaed7fe8 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _059ee4e2 = () => interopDefault(import('../pages/profile/index/index.vue' /* webpackChunkName: "pages/profile/index/index" */))
const _45760ce2 = () => interopDefault(import('../pages/profile/index/activity.vue' /* webpackChunkName: "pages/profile/index/activity" */))
const _5ecab6b2 = () => interopDefault(import('../pages/profile/index/collect.vue' /* webpackChunkName: "pages/profile/index/collect" */))
const _15fb4e0b = () => interopDefault(import('../pages/profile/index/order.vue' /* webpackChunkName: "pages/profile/index/order" */))
const _5adb4ecd = () => interopDefault(import('../pages/profile/index/setting.vue' /* webpackChunkName: "pages/profile/index/setting" */))
const _5397af14 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _4da2fe32 = () => interopDefault(import('../pages/reset/index.vue' /* webpackChunkName: "pages/reset/index" */))
const _36936b94 = () => interopDefault(import('../pages/stories/index.vue' /* webpackChunkName: "pages/stories/index" */))
const _e7a0b600 = () => interopDefault(import('../pages/storydetails/index.vue' /* webpackChunkName: "pages/storydetails/index" */))
const _69194a91 = () => interopDefault(import('../pages/testStep/index.vue' /* webpackChunkName: "pages/testStep/index" */))
const _fb0a1a2e = () => interopDefault(import('../pages/housedetail/indexCopy.vue' /* webpackChunkName: "pages/housedetail/indexCopy" */))
const _991a8b0e = () => interopDefault(import('../pages/stories/storydetails.vue' /* webpackChunkName: "pages/stories/storydetails" */))
const _1b118e1c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7185cef0,
    name: "about"
  }, {
    path: "/abroad",
    component: _e35285d8,
    name: "abroad"
  }, {
    path: "/contact",
    component: _24ef1c7a,
    name: "contact"
  }, {
    path: "/findhouse",
    component: _8592d82c,
    name: "findhouse"
  }, {
    path: "/findpwd",
    component: _84fd40f2,
    name: "findpwd"
  }, {
    path: "/helptickets",
    component: _0c15aea9,
    name: "helptickets"
  }, {
    path: "/housedetail",
    component: _02e19fd4,
    name: "housedetail"
  }, {
    path: "/Join-us",
    component: _f91cdb38,
    name: "Join-us"
  }, {
    path: "/login",
    component: _786e77cc,
    name: "login"
  }, {
    path: "/newlogin",
    component: _11b20c1c,
    name: "newlogin"
  }, {
    path: "/notice",
    component: _63d4d06b,
    name: "notice"
  }, {
    path: "/order",
    component: _d645951e,
    name: "order"
  }, {
    path: "/profile",
    component: _aaed7fe8,
    children: [{
      path: "",
      component: _059ee4e2,
      name: "profile-index"
    }, {
      path: "activity",
      component: _45760ce2,
      name: "profile-index-activity"
    }, {
      path: "collect",
      component: _5ecab6b2,
      name: "profile-index-collect"
    }, {
      path: "order",
      component: _15fb4e0b,
      name: "profile-index-order"
    }, {
      path: "setting",
      component: _5adb4ecd,
      name: "profile-index-setting"
    }]
  }, {
    path: "/register",
    component: _5397af14,
    name: "register"
  }, {
    path: "/reset",
    component: _4da2fe32,
    name: "reset"
  }, {
    path: "/stories",
    component: _36936b94,
    name: "stories"
  }, {
    path: "/storydetails",
    component: _e7a0b600,
    name: "storydetails"
  }, {
    path: "/testStep",
    component: _69194a91,
    name: "testStep"
  }, {
    path: "/housedetail/indexCopy",
    component: _fb0a1a2e,
    name: "housedetail-indexCopy"
  }, {
    path: "/stories/storydetails",
    component: _991a8b0e,
    name: "stories-storydetails"
  }, {
    path: "/",
    component: _1b118e1c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

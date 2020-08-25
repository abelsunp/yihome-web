import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ffbd88e = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _5ea1e736 = () => interopDefault(import('../pages/abroad/index.vue' /* webpackChunkName: "pages/abroad/index" */))
const _26a28be1 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _18329e88 = () => interopDefault(import('../pages/findhouse/index.vue' /* webpackChunkName: "pages/findhouse/index" */))
const _12c90cb6 = () => interopDefault(import('../pages/findpwd/index.vue' /* webpackChunkName: "pages/findpwd/index" */))
const _cf8cec72 = () => interopDefault(import('../pages/helptickets/index.vue' /* webpackChunkName: "pages/helptickets/index" */))
const _e1f50a1c = () => interopDefault(import('../pages/housedetail/index.vue' /* webpackChunkName: "pages/housedetail/index" */))
const _86e8a6fc = () => interopDefault(import('../pages/Join-us/index.vue' /* webpackChunkName: "pages/Join-us/index" */))
const _76e4816a = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _08499484 = () => interopDefault(import('../pages/newlogin/index.vue' /* webpackChunkName: "pages/newlogin/index" */))
const _341ffa8d = () => interopDefault(import('../pages/notice/index.vue' /* webpackChunkName: "pages/notice/index" */))
const _d95981e2 = () => interopDefault(import('../pages/order/index.vue' /* webpackChunkName: "pages/order/index" */))
const _38b94bac = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _0fca192d = () => interopDefault(import('../pages/profile/index/index.vue' /* webpackChunkName: "pages/profile/index/index" */))
const _809716f8 = () => interopDefault(import('../pages/profile/index/activity.vue' /* webpackChunkName: "pages/profile/index/activity" */))
const _ba007e76 = () => interopDefault(import('../pages/profile/index/collect.vue' /* webpackChunkName: "pages/profile/index/collect" */))
const _2894d9a9 = () => interopDefault(import('../pages/profile/index/order.vue' /* webpackChunkName: "pages/profile/index/order" */))
const _2d406aeb = () => interopDefault(import('../pages/profile/index/setting.vue' /* webpackChunkName: "pages/profile/index/setting" */))
const _7f455bd0 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _4c1907d0 = () => interopDefault(import('../pages/reset/index.vue' /* webpackChunkName: "pages/reset/index" */))
const _1dd06454 = () => interopDefault(import('../pages/stories/index.vue' /* webpackChunkName: "pages/stories/index" */))
const _f6f1a4bc = () => interopDefault(import('../pages/storydetails/index.vue' /* webpackChunkName: "pages/storydetails/index" */))
const _53427433 = () => interopDefault(import('../pages/testStep/index.vue' /* webpackChunkName: "pages/testStep/index" */))
const _54e00f07 = () => interopDefault(import('../pages/housedetail/indexCopy.vue' /* webpackChunkName: "pages/housedetail/indexCopy" */))
const _17eabaca = () => interopDefault(import('../pages/stories/storydetails.vue' /* webpackChunkName: "pages/stories/storydetails" */))
const _5e245110 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6ffbd88e,
    name: "about"
  }, {
    path: "/abroad",
    component: _5ea1e736,
    name: "abroad"
  }, {
    path: "/contact",
    component: _26a28be1,
    name: "contact"
  }, {
    path: "/findhouse",
    component: _18329e88,
    name: "findhouse"
  }, {
    path: "/findpwd",
    component: _12c90cb6,
    name: "findpwd"
  }, {
    path: "/helptickets",
    component: _cf8cec72,
    name: "helptickets"
  }, {
    path: "/housedetail",
    component: _e1f50a1c,
    name: "housedetail"
  }, {
    path: "/Join-us",
    component: _86e8a6fc,
    name: "Join-us"
  }, {
    path: "/login",
    component: _76e4816a,
    name: "login"
  }, {
    path: "/newlogin",
    component: _08499484,
    name: "newlogin"
  }, {
    path: "/notice",
    component: _341ffa8d,
    name: "notice"
  }, {
    path: "/order",
    component: _d95981e2,
    name: "order"
  }, {
    path: "/profile",
    component: _38b94bac,
    children: [{
      path: "",
      component: _0fca192d,
      name: "profile-index"
    }, {
      path: "activity",
      component: _809716f8,
      name: "profile-index-activity"
    }, {
      path: "collect",
      component: _ba007e76,
      name: "profile-index-collect"
    }, {
      path: "order",
      component: _2894d9a9,
      name: "profile-index-order"
    }, {
      path: "setting",
      component: _2d406aeb,
      name: "profile-index-setting"
    }]
  }, {
    path: "/register",
    component: _7f455bd0,
    name: "register"
  }, {
    path: "/reset",
    component: _4c1907d0,
    name: "reset"
  }, {
    path: "/stories",
    component: _1dd06454,
    name: "stories"
  }, {
    path: "/storydetails",
    component: _f6f1a4bc,
    name: "storydetails"
  }, {
    path: "/testStep",
    component: _53427433,
    name: "testStep"
  }, {
    path: "/housedetail/indexCopy",
    component: _54e00f07,
    name: "housedetail-indexCopy"
  }, {
    path: "/stories/storydetails",
    component: _17eabaca,
    name: "stories-storydetails"
  }, {
    path: "/",
    component: _5e245110,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

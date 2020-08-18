import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7f381f13 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _36ee7151 = () => interopDefault(import('../pages/abroad/index.vue' /* webpackChunkName: "pages/abroad/index" */))
const _57e74526 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _0b2e1a8d = () => interopDefault(import('../pages/findhouse/index.vue' /* webpackChunkName: "pages/findhouse/index" */))
const _8b73cee8 = () => interopDefault(import('../pages/helptickets/index.vue' /* webpackChunkName: "pages/helptickets/index" */))
const _9ddbec92 = () => interopDefault(import('../pages/housedetail/index.vue' /* webpackChunkName: "pages/housedetail/index" */))
const _245f3472 = () => interopDefault(import('../pages/Join-us/index.vue' /* webpackChunkName: "pages/Join-us/index" */))
const _f3be7022 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _19a4b5ce = () => interopDefault(import('../pages/newlogin/index.vue' /* webpackChunkName: "pages/newlogin/index" */))
const _0c6c84a8 = () => interopDefault(import('../pages/notice/index.vue' /* webpackChunkName: "pages/notice/index" */))
const _bae0f4d8 = () => interopDefault(import('../pages/order/index.vue' /* webpackChunkName: "pages/order/index" */))
const _14e8136f = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _3e23ea9c = () => interopDefault(import('../pages/profile/index/index.vue' /* webpackChunkName: "pages/profile/index/index" */))
const _b5094e42 = () => interopDefault(import('../pages/profile/index/activity.vue' /* webpackChunkName: "pages/profile/index/activity" */))
const _8a2535ec = () => interopDefault(import('../pages/profile/index/collect.vue' /* webpackChunkName: "pages/profile/index/collect" */))
const _0c8e69a4 = () => interopDefault(import('../pages/profile/index/order.vue' /* webpackChunkName: "pages/profile/index/order" */))
const _452e0f30 = () => interopDefault(import('../pages/profile/index/setting.vue' /* webpackChunkName: "pages/profile/index/setting" */))
const _90a07d1a = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _5b554e55 = () => interopDefault(import('../pages/reset/index.vue' /* webpackChunkName: "pages/reset/index" */))
const _4f151d99 = () => interopDefault(import('../pages/stories/index.vue' /* webpackChunkName: "pages/stories/index" */))
const _b7e71106 = () => interopDefault(import('../pages/storydetails/index.vue' /* webpackChunkName: "pages/storydetails/index" */))
const _4a94e38e = () => interopDefault(import('../pages/testStep/index.vue' /* webpackChunkName: "pages/testStep/index" */))
const _4764e1b6 = () => interopDefault(import('../pages/stories/storydetails.vue' /* webpackChunkName: "pages/stories/storydetails" */))
const _07a51f55 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7f381f13,
    name: "about"
  }, {
    path: "/abroad",
    component: _36ee7151,
    name: "abroad"
  }, {
    path: "/contact",
    component: _57e74526,
    name: "contact"
  }, {
    path: "/findhouse",
    component: _0b2e1a8d,
    name: "findhouse"
  }, {
    path: "/helptickets",
    component: _8b73cee8,
    name: "helptickets"
  }, {
    path: "/housedetail",
    component: _9ddbec92,
    name: "housedetail"
  }, {
    path: "/Join-us",
    component: _245f3472,
    name: "Join-us"
  }, {
    path: "/login",
    component: _f3be7022,
    name: "login"
  }, {
    path: "/newlogin",
    component: _19a4b5ce,
    name: "newlogin"
  }, {
    path: "/notice",
    component: _0c6c84a8,
    name: "notice"
  }, {
    path: "/order",
    component: _bae0f4d8,
    name: "order"
  }, {
    path: "/profile",
    component: _14e8136f,
    children: [{
      path: "",
      component: _3e23ea9c,
      name: "profile-index"
    }, {
      path: "activity",
      component: _b5094e42,
      name: "profile-index-activity"
    }, {
      path: "collect",
      component: _8a2535ec,
      name: "profile-index-collect"
    }, {
      path: "order",
      component: _0c8e69a4,
      name: "profile-index-order"
    }, {
      path: "setting",
      component: _452e0f30,
      name: "profile-index-setting"
    }]
  }, {
    path: "/register",
    component: _90a07d1a,
    name: "register"
  }, {
    path: "/reset",
    component: _5b554e55,
    name: "reset"
  }, {
    path: "/stories",
    component: _4f151d99,
    name: "stories"
  }, {
    path: "/storydetails",
    component: _b7e71106,
    name: "storydetails"
  }, {
    path: "/testStep",
    component: _4a94e38e,
    name: "testStep"
  }, {
    path: "/stories/storydetails",
    component: _4764e1b6,
    name: "stories-storydetails"
  }, {
    path: "/",
    component: _07a51f55,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4461fff4 = () => interopDefault(import('..\\pages\\aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _6acc63f2 = () => interopDefault(import('..\\pages\\contactus.vue' /* webpackChunkName: "pages/contactus" */))
const _5cdc6063 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _2039676a = () => interopDefault(import('..\\pages\\Products.vue' /* webpackChunkName: "pages/Products" */))
const _15cea29b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/aboutus",
    component: _4461fff4,
    name: "aboutus"
  }, {
    path: "/contactus",
    component: _6acc63f2,
    name: "contactus"
  }, {
    path: "/inspire",
    component: _5cdc6063,
    name: "inspire"
  }, {
    path: "/Products",
    component: _2039676a,
    name: "Products"
  }, {
    path: "/",
    component: _15cea29b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ef8b2226 = () => interopDefault(import('..\\pages\\creatives\\index.vue' /* webpackChunkName: "pages/creatives/index" */))
const _1d1b34fd = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _3c70586a = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _4c5d7fd2 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _323a1ea0 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _3ca4c0d0 = () => interopDefault(import('..\\pages\\trainings\\index.vue' /* webpackChunkName: "pages/trainings/index" */))
const _301930cb = () => interopDefault(import('..\\pages\\videos\\index.vue' /* webpackChunkName: "pages/videos/index" */))
const _141917a3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/creatives",
    component: _ef8b2226,
    name: "creatives"
  }, {
    path: "/dashboard",
    component: _1d1b34fd,
    name: "dashboard"
  }, {
    path: "/events",
    component: _3c70586a,
    name: "events"
  }, {
    path: "/my-account",
    component: _4c5d7fd2,
    name: "my-account"
  }, {
    path: "/news",
    component: _323a1ea0,
    name: "news"
  }, {
    path: "/trainings",
    component: _3ca4c0d0,
    name: "trainings"
  }, {
    path: "/videos",
    component: _301930cb,
    name: "videos"
  }, {
    path: "/",
    component: _141917a3,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

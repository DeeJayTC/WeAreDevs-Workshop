import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
  path: '/',
  redirect: '/contacts'
}, {
  path: '/contacts',
  name: 'contacts',
  component: () => import(/* webpackChunkName: "contacts" */ '@/pages/contacts/contacts.vue')
}, {
  path: '/companies',
  name: 'companies',
  component: () => import(/* webpackChunkName: "companies" */ '@/pages/companies/companies.vue')
},
{
  path: '/blank',
  name: 'blank',
  component: () => import(/* webpackChunkName: "blank" */ '@/pages/BlankPage.vue')
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes
})

export default router

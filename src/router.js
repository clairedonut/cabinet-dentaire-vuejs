import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Home from './views/Home.vue'

Vue.use(VueHead)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: () => import(/* webpackChunkName: "about" */ './views/Equipe.vue')
    },
    {
      path: '/urgences',
      name: 'Urgences',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Urgences.vue')
    },
    {
      path: '/prestations',
      name: 'prestations',
      component: () => import(/* webpackChunkName: "about" */ './views/Presta.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    }
  ]
})

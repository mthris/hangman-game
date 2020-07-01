import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../components/Menu.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/board',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Game.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
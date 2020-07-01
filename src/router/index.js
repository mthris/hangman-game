import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../components/Game.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "about" */ '../components/Menu.vue')
  },
  {
    path: '/board',
    name: 'Game',
    component: Game
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

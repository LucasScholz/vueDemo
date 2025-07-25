import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AusbildungView from '@/views/AusbildungView.vue'
import ErfahrungView from '@/views/ErfahrungView.vue'
import KenntnisseView from '@/views/KenntnisseView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/ausbildung',
    name: 'ausbildung',
    component: AusbildungView
  },
  {
    path: '/berfahrung',
    name: 'erfahrung',
    component: ErfahrungView
  },
  {
    path: '/kenntnisse',
    name: 'kenntnisse',
    component: KenntnisseView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

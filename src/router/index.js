import { createRouter, createWebHistory } from 'vue-router'
import AppView from '@/components/layouts/AppView.vue'



const routes = [
  {
    path:'/',
    name:'Home',
    component: AppView
  },
  {
    path:'/#intro',
    component: AppView
  },
  {
    path:'/#challenge',
    component: AppView
  },
  {
    path:'/#ability',
    component: AppView
  },
  {
    path:'/#contact',
    component: AppView
  },
  {
    path:'/#portfolio',
    component: AppView
  },
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

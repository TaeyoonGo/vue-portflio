import { createRouter, createWebHistory } from 'vue-router'


const routes = []



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes,
})

export default router

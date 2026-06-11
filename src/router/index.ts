import { createRouter, createWebHistory } from 'vue-router'
import WaitlistPage from '../views/WaitlistPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'waitlist',
      component: WaitlistPage
    },
    
  ]
})

export default router

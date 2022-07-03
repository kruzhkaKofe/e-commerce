import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '@/views/HomePage'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

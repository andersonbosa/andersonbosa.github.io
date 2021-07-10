import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home')
const Feedbacks = () => import('@/views/Feedbacks')
const Credentials = () => import('@/views/Credentials')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuthentication: true
    }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: {
      hasAuthentication: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

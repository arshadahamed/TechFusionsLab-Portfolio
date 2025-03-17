import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import WebView from '../views/WebView.vue'
import CaseView from '@/views/CaseView.vue'
import ServiceView from '@/views/ServiceView.vue'
import TeamView from '@/views/TeamView.vue'
import Case01 from '@/views/Case-01.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/web',
      name: 'web',
      component: WebView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/case',
      name: 'case',
      component: CaseView,
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/case-01',
      name: 'case-01',
      component: Case01,
    }
  ],
})

export default router

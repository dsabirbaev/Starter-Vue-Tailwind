

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../pages/Home/Home.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../pages/About/About.vue')
        },
      ]
    },
   
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("../pages/Error/Error.vue")
    },
  ]
})

export default router

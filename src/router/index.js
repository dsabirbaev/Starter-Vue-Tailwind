

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@pg/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@pg/Home/Home.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@pg/About/About.vue')
        },
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@pg/Login/Login.vue"), 
    },
   
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("@pg/Error/Error.vue")
    },
  ]
})

export default router

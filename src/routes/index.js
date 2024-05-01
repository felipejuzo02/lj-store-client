import { createRouter, createWebHistory } from 'vue-router'

import products from './modules/products'
import myAccount from './modules/my-account'
import checkout from './modules/checkout'

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children:[
        {
          path: '/',
          name: 'Home',
          component: () => import('../pages/Home.vue')
        },

        ...products,
    
        ...myAccount,
      ]
    },
    {
      path: '/',
      component: () => import('../layouts/CheckoutLayout.vue'),
      children:[
        ...checkout
      ]
    }
  ],

  history: createWebHistory()
})

export default router
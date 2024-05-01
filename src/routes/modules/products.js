export default [
  {
    path: '/products',
    name: 'ProductsList',
    component: () => import('../../pages/products/ProductsList.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductsSingle',
    component: () => import('../../pages/products/ProductsSingle.vue')
  }
]
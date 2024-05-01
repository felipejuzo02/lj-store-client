export default [
  {
    path: '/my-account',
    name: 'MyAccount',
    component: () => import('../../pages/my-account/MyAccount.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../../pages/my-account/SignUp.vue')
  }
]
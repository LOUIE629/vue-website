import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/piechart',
        name: 'piechart',
        component: () => import('../views/showdata/piechart.vue')
      },
      {
        path: '/linechart',
        name: 'linechart',
        component: () => import('../views/showdata/linechart.vue')
      },
      {
        path: '/barchart',
        name: 'barchart',
        component: () => import('../views/showdata/barchart.vue')
      },
      {
        path: '/userhome',
        name: 'userhome',
        component: () => import('../components/Userhome.vue')
      },
      {
        path: '/homepage',
        name: 'homepage',
        component: () => import('../components/Homepage.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginRegister.vue')
  },

  {
    path:'/:catchAll(.*)',
    name:'404',
    component: () => import('../views/404.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

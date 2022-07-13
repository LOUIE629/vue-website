import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect:'/homepage',
    children: [
      {
        path: '/videodataSum',
        name: 'videodataSum',
        component: () => import('../views/showdata/videodataSum.vue')
      },
      {
        path: '/userdataSum',
        name: 'userdataSum',
        component: () => import('../views/showdata/userdataSum.vue')
      },
      {
        path: '/map',
        name: 'map',
        component: () => import('../views/showdata/map.vue')
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
    path: '/',
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

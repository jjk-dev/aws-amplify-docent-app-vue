import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/artwork',
      name: 'artwork',
      component: () => import('../views/Artwork.vue')
    },
    {
      path: '/artwork/:id',
      name: 'artworkDetail',
      component: () => import('../views/ArtworkDetail.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/Location.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})
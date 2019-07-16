import Vue from 'vue'
import Router from 'vue-router'
import Gallery from './views/Gallery.vue'
import Commissions from './views/Commissions.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/comissions',
      name: 'commissions',
      component: Commissions
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

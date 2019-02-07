import Home from '../home.vue'
import Skill from '../templates/skills.vue'
import Product from '../templates/products.vue'
import Contact from '../templates/contact.vue'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/skills',
    component: Skill
  },
  {
    path: '/products',
    component: Product
  },
  {
    path: '/contact',
    component: Contact
  }
]

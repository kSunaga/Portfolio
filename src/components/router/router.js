import Home from '../templates/home.vue'
import Skill from '../templates/skills/skills.vue'
import SkillShow from '../templates/skills/skillShow.vue'
import ProductShow from '../templates/products/productShow.vue'
import Product from '../templates/products/products.vue'
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
  },
  {
    path: 'skills/:id',
    name: 'skill',
    component: SkillShow
  },
  {
    path: 'products/:id',
    name: 'product',
    component: ProductShow
  }
]

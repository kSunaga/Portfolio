import Home from '../templates/home.vue'
import Skill from '../templates/skills/skills.vue'
import SkillShow from '../templates/skills/skillShow.vue'
import ProductShow from '../templates/products/productShow.vue'
import Product from '../templates/products/products.vue'
import Contact from '../templates/contact.vue'
import Login from '../templates/login.vue'
import AdminProduct from '../templates/admin/product/index.vue'
import AdminEditProduct from '../templates/admin/product/edit.vue'
import AdminNewProduct from '../templates/admin/product/new.vue'
import AdminSkill from '../templates/admin/skill/index.vue'
import AdminEditSkill from '../templates/admin/skill/edit.vue'
import AdminNewSkill from '../templates/admin/skill/new.vue'

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
   },
  {
    path: '/login',
    component: Login
  },
  // 管理画面
  {
    path: '/admin/products',
    component: AdminProduct, meta: { requiresAuth: true }
  },
  {
    path:'/admin/product/new',
    component: AdminNewProduct, meta: { requiresAuth: true }
  },
  {
    path: '/admin/product/edit/:id',
    name: 'productEdit',
    component: AdminEditProduct, meta: { requiresAuth: true }
  },
  {
    path: '/admin/skills',
    component: AdminSkill, meta: { requiresAuth: true }
  },
  {
    path:'/admin/skill/new',
    component: AdminNewSkill, meta: { requiresAuth: true }
  },
  {
    path: '/admin/skill/edit/:id',
    name: 'skillEdit',
    component: AdminEditSkill, meta: { requiresAuth: true }
  }
]



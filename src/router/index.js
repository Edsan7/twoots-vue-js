import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllUsers from '../views/AllUsers.vue'
import UserProfile from '../views/UserProfile.vue'
import NewUser from '../views/NewUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/allusers',
    name: 'AllUsers',
    component: AllUsers
  },
  {
    path: '/newuser',
    name: 'NewUser',
    component: NewUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

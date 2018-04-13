import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/Pages/SignIn'
import SignUp from '@/Pages/SignUp'
import MainPage from '@/Pages/MainPage'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      name: 'MainPage',
      component: MainPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        next()
      } else {
        // No user is signed in.
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

export default router

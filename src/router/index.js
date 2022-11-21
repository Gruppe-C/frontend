import Home from "@/views/Home";
import store from "@/store";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/auth/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/auth/Register.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/profile/Profile.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/group',
      name: 'Group',
      component: () => import('@/views/group/Group.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/group/add',
      name: 'GroupAdd',
      component: () => import('@/views/group/GroupAdd'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/group/:id',
      name: 'GroupDetail',
      component: () => import('@/views/group/GroupDetail'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/group/:id/edit',
      name: 'GroupEdit',
      component: () => import('@/views/group/GroupEdit'),
      meta: {
        requiresAuth: true,
      }
    }
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.getters.isLoggedIn) {
      // not logged in
      next('/login')
    } else {
      if (store.getters.isSessionExpired) {
        console.log('Seesion Expired')
        store.dispatch('logout').then(() => {
          router.push('/login')
        })
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router

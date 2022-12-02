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
      path: '/group/:groupId',
      name: 'GroupDetail',
      component: () => import('@/views/group/GroupDetail'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/group/:groupId/edit',
      name: 'GroupEdit',
      component: () => import('@/views/group/GroupEdit'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/group/:groupId/year',
      name: 'SchoolYear',
      component: () => import('@/views/year/SchoolYear'),
      meta: {
        requiresAuth: true,
        requiresGroup: true,
      }
    },
    {
      path: '/group/:groupId/year/:yearId',
      name: 'SchoolYearDetail',
      component: () => import('@/views/year/Detail'),
      meta: {
        requiresAuth: true,
        requiresGroup: true,
      }
    },
    {
      path: '/group/:groupId/year/add',
      name: 'SchoolYearAdd',
      component: () => import('@/views/year/Add'),
      meta: {
        requiresAuth: true,
        requiresGroup: true,
      }
    },
    {
      path: '/group/:groupId/year/:yearId/subject/add',
      name: 'SubjectAdd',
      component: () => import('@/views/subject/Add'),
      meta: {
        requiresAuth: true,
        requiresGroup: true,
      }
    },
    {
      path: '/group/:groupId/year/:yearId/subject/:subjectId',
      name: 'SubjectDetail',
      component: () => import('@/views/subject/Detail'),
      meta: {
        requiresAuth: true,
        requiresGroup: true,
      }
    },
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
  } else if (to.meta.requiresGroup) {
    if (store.state.currentGroupId) {
      next()
    } else {
      next('/group')
    }
  } else {
    next()
  }
})

export default router

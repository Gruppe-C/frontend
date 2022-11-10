import Home from "@/views/Home";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
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
    }
  ],
})

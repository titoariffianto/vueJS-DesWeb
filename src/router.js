// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // Halaman utama
import UserLogin from './components/UserLogin.vue'; // Halaman login

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: UserLogin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

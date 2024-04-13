// eslint-disable-next-line
import { createRouter, createWebHistory } from 'vue-router';

/* eslint-disable */

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../components/v-main-wrapper.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

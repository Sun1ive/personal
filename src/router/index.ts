import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(Router);

export default new Router({
  base: process.env.NODE_ENV === 'production' ? '/personal/' : '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      // component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // component: () => import('@/views/About.vue'),
      component: About,
    },
  ],
});

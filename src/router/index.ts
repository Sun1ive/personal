import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Portfolio from '@/views/Portfolio.vue';

Vue.use(Router);

export default new Router({
  // base: process.env.NODE_ENV === 'production' ? '/personal/' : '/',
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
  ],
});

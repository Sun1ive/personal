import Vue from 'vue';
// @ts-ignore
import VueParticles from 'vue-particles';
import router from '@/router';
import App from './App.vue';
// import './registerServiceWorker';
import './styles/main.styl';

Vue.config.productionTip = false;
Vue.use(VueParticles);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

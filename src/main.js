import Vue from 'vue'
import App from './App.vue'
import './sass/global.scss';
import VueParticles from 'vue-particles';

Vue.config.productionTip = false

Vue.use(VueParticles);

new Vue({
  render: h => h(App)
}).$mount('#app');

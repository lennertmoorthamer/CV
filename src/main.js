import Vue from 'vue'
import App from './App.vue'
import './sass/global.scss';
import VueParticles from 'vue-particles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFacebook,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope,
  faPhoneSquareAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faFacebook,
  faLinkedin,
  faPhoneSquareAlt,
  faEnvelope
);

Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false

Vue.use(VueParticles);

document.title = "Lennert Moorthamer";

new Vue({
  render: h => h(App)
}).$mount('#app');

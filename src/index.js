import Vue from 'vue';
import ElementUI from 'element-ui';
import router from './router';
import store from './store';

import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

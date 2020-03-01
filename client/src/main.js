import Vue from 'vue';
import App from './App.vue';
import { router } from './routes';
import { store } from './store';

Vue.config.productionTip = false

Vue.filter('currency', (value) => {
  return 'Rp ' + value.toLocaleString('id-ID');
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

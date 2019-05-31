import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/** vuetify 설정 */
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
Vue.use(Vuetify, {
  iconfont: 'md',
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

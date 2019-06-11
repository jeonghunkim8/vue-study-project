import Vue from 'vue';
import Vuex from 'vuex';
import PersonStore from './PersonStore';
import AuthStore from './AuthStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PersonStore,
    AuthStore
  }
});

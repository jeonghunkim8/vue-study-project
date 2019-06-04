import Vue from 'vue';
import Vuex from 'vuex';
import PersonStore from './PersonStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PersonStore,
  }
});

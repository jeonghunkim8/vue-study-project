import Vue from 'vue';
import Router from 'vue-router';
import { MainView } from './views/layout';
import {Home} from '@/views';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'phoneBook',
      component: MainView,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
        },
        {
          path: '/phoneBook',
          name: 'Kurly PhoneBook',
          component: () => import(/* webpackChunkName: "about" */ '@/views/PhoneBookView.vue'),
        },
      ]
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import { MainView } from './views/layout';
import {Home, LoginView} from '@/views';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
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
        {
          path: '/phoneBook/:id',
          name: 'Kurly PhoneBook Detail',
          component: () => import(/* webpackChunkName: "about" */ '@/views/PhoneBookDetailView.vue'),
        },
        
      ]
    },
  ],
});

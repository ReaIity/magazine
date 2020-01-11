import Home from '@/components/Home';
import Add from '@/components/Ads/Add';
import AdList from '@/components/Ads/AdList';
import NewAdd from '@/components/Ads/NewAdd';
import Login from '@/components/Auth/Login';
import Registration from '@/components/Auth/Registration';
import Orders from '@/components/User/Orders';

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
    },
    {
      path: '/add/:id',
      name: 'add',
      component: Add,
    },
    {
      path: '/list',
      name: 'adList',
      component: AdList,
    },
    {
      path: '/new',
      name: 'newAdd',
      component: NewAdd,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    },
  ],
});

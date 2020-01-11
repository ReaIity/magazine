import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import SuiVue from 'semantic-ui-vue';
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(SuiVue);
Vue.use(Vuex);
const router = new VueRouter({
  base: router,
  routes: [
    {path: '/', component: App},
  ],
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

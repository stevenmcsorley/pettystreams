import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGoodTablePlugin from 'vue-good-table';
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

import './css/style.scss'

Vue.use(Vuetify)
Vue.use(Vuetify, {
  iconfont: 'md'
})
// import the styles 
import 'vue-good-table/dist/vue-good-table.css'
 
Vue.use(VueGoodTablePlugin);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

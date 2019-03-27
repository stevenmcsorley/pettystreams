import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGoodTablePlugin from 'vue-good-table';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import VueAnalytics from 'vue-ua'

import './css/style.scss'

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'
 
Vue.use(VueGoodTablePlugin);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  // [Required] The name of your app as specified in Google Analytics.
  appName: 'DevApp',
  // [Required] The version of your app.
  appVersion: '1',
  // [Required] Your Google Analytics tracking ID.
  trackingId: 'UA-8197907-4',
  // If you're using vue-router, pass the router instance here.
  vueRouter: router,

  // Global Dimensions and Metrics can optionally be specified.
  // globalDimensions: [
  //   { dimension: 1, value: 'FirstDimension' },
  //   { dimension: 2, value: 'SecondDimension' }
  //   // Because websites are only 2D, obviously. WebGL? What's that?
  // ],

  // globalMetrics: [
  //   { metric: 1, value: 'MyMetricValue' },
  //   { metric: 2, value: 'AnotherMetricValue' }
  // ]
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

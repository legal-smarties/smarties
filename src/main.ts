import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
Vue.use(ElementUI)

import { cleanHtmlDirective } from "./directives/cleanHtml"
Vue.directive("clean-html", cleanHtmlDirective)

import "bulma";
import "@fortawesome/fontawesome-free/css/all.css";
import 'element-ui/lib/theme-chalk/index.css';
import "./helpers.scss"
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

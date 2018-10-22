// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import ErrorPage from './components/ErrorPage'


Vue.config.productionTip = false;

Vue.use(VueRouter)

Vue.component('error-page', ErrorPage)


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});

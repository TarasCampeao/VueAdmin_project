// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './routes'
import store from './store'
import ErrorPage from './components/ErrorPage'
import EditForm from './components/EditForm'


Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component('error-page', ErrorPage)
Vue.component('edit-form', EditForm)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});

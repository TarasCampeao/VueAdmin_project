// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import DetailPage from './components/DetailPage.vue';
import Users from './components/Users.vue';


Vue.config.productionTip = false;
Vue.component('detail-page', DetailPage)

Vue.use(VueRouter)

var router = new VueRouter ({
	mode: 'history',
	routes: [
		{path: '/detail-page/:id', name: 'detail-page', component: DetailPage},
		{path: '/', component: App}
	]
})


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router,
});

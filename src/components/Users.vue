<template>
	<div class="container">
		<search></search>
		<div class="about_zone" v-for="item in items" :key="item.id">
		  <div class="main_data">
		      <ul class="info_list">
		        <li>{{ item.name }}</li>
		        <li>{{ item.location }}</li>
		        <li>{{ item.currency }}</li>
		      </ul>
		      <div class="btn_group">
		        <button class="btn_standard edit_btn">Edit</button>
		        <button class="btn_standard see_more">See more</button>
		      </div>
	      </div>
	    </div>
	    <div class="total">Total currency: {{ total }}</div>
	</div>
</template>

<script>
import fetchData from '../api/test.json';
import Search from './Search.vue'

export default {
	name: 'Users',
	components: {
		Search,
	},
	data() {
		return {
			items: fetchData.slice(0, 10),
			search: '',
			total: fetchData.slice(0, 10).reduce((sum, item) => sum + item.currency, 0)
		}
	},
	methods: {
	    filteredInfo(e) {
	      const value = e.target.value.toLowerCase();
	      this.items = fetchData.filter(el =>
	        el.name.toLowerCase().search(value) + 1 || el.location.toLowerCase().search(value) + 1);
	      this.total = this.items.reduce((sum, item) => sum + item.currency, 0);
	    },
	}
}	

</script>
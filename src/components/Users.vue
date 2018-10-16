<template>
	<div class="container">
		<div class="search">
	      <input class="find_element" type="text" name="search" placeholder="Search" @input="filteredInfo">
		</div>
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

export default {
	name: 'Users',
	components: {

	},
	data() {
		return {
			items: fetchData.slice(0, 10),
			total: fetchData.slice(0, 10).reduce((sum, item) => sum + item.currency, 0)
		}
	},
	methods: {
	    filteredInfo(e) {
	      const value = e.target.value.toLowerCase();
	      this.items = fetchData.slice(0, 10).filter(el =>
	        el.name.toLowerCase().search(value) + 1 || el.location.toLowerCase().search(value) + 1);
	      this.total = this.fetchData.reduce((sum, item) => sum + item.currency, 0);
	    },
	}
}	

</script>
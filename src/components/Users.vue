<template>
	<div class="container">
		<div class="search">
	      <input class="find_element" type="text" name="search" placeholder="Search" @input="filteredInfo">
		</div>
		<div class="items_box">
			<div class="about_zone" v-for="(item, index) in items" :key="item.id">
			  <div class="main_data">
			      <ul class="info_list">
			        <li>{{ item.name }}</li>
			        <li>{{ item.location }}</li>
			        <li>{{ item.currency }}</li>
			      </ul>
			      <div class="btn_group">
			        <button class="btn_standard edit_btn">Edit</button>
			        <router-link class="btn_standard see_more" :to="{ name: 'detail-page', params: { id: index } }">See more</router-link>
			      </div>
		      </div>
		    </div>
	    </div>
	    <div class="total">Total currency: {{ total }}</div>
	</div>
</template>

<script>
import fetchData from '../api/test.json';
import DetailPage from '../components/DetailPage.vue'

export default {
	name: 'Users',
	components: {
		DetailPage,
	},
	data() {
		return {
			items: fetchData.slice(0, 5),
			total: fetchData.slice(0, 5).reduce((sum, item) => sum + item.currency, 0)
		}
	},
	methods: {
	    filteredInfo(e) {
	      const value = e.target.value.toLowerCase();
	      this.items = fetchData.slice(0, 5).filter(el =>
	        el.name.toLowerCase().search(value) + 1 || el.location.toLowerCase().search(value) + 1);
	      this.total = this.fetchData.reduce((sum, item) => sum + item.currency, 0);
	    },
	}
}	

</script>
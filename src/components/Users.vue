<template>
	<div class="container">
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
			items: fetchData
		}
	}
}	

</script>
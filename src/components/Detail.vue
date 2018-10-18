<template>
	<div class="container">
		<div class="info_item" v-if="item">
			<div>Name item: {{ item.name }}</div>
			<div>Location item: {{ item.location }}</div>
			<div>Currency item: {{ item.currency }}</div>
			<!-- <div class="all_info">{{ item.info }}</div> -->
		</div>
		<router-link to="/" class="back_btn">Back to main page</router-link>
	</div>
</template>


<script>
import fetchData from '../api/test.json';	

export default {
	name: 'Detail',
	data() {
		return {
			items: fetchData,
			item: null
		}
	},
	created() {
		var itemID = this.$route.params.id

		this.item = this.items[itemID]
	}
}

</script>
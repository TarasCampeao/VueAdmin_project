<template>
	<div v-if="item">
		<div>Name item: {{ item.name }}</div>
		<div>Location item: {{ item.location }}</div>
		<div>Currency item: {{ item.currency }}</div>
		<div class="all_info">{{ item.info }}</div>
		<router-link to="/">Back to main page</router-link>
	</div>
</template>


<script>
import fetchData from '../api/test.json';	

export default {
	name: 'DetailPage',
	data() {
		return {
			items: fetchData,
			item: null
		}
	},
	created: function() {
		var postID = this.$route.params.id

		this.item = this.items[postID]
	}
}

</script>
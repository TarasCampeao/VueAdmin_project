<template>
	<div class="container">
		<ul class="name_list">
			<li v-for="item in items" :key="item.id">
				<div class="country_address">{{ item.name }}</div>
				<div class="location_address">{{ item.location }}</div>
				<div class="currency_address">{{ item.currency }}</div>
			</li>
		</ul>
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
<template>
	<div class="search">
      <input class="find_element" type="text" name="search" placeholder="Search" @input="filteredInfo">
	</div>
</template>


<script>
import fetchData from '../api/test.json';	

export default {
	name: 'FormInput',
	data() {
		return {
			
		}
	},
	methods: {
	    filteredInfo(e) {
	      const value = e.target.value.toLowerCase();
	      this.items = fetchData.filter(el =>
	        el.name.toLowerCase().search(value) + 1 || el.location.toLowerCase().search(value) + 1);
	      //this.total = this.fetchData.reduce((sum, item) => sum + item.currency, 0);
	    },
	}
}	
</script>
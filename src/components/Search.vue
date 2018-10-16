<template>
	<div class="search">
      <input type="text" v-model="searchItem" placeholder="Search" class="search_cell" />
	</div>
</template>




<script>
import fetchData from '../api/test.json';

export default {
  name: 'Search',
  data () {
    return {
    	items: fetchData,
    	searchItem: '',
    	fetchData: ''
    }
  },
  // methods: {
  //   filteredInfo(e) {
  //     const value = e.target.value.toLowerCase();
  //     this.items = fetchData.filter(el =>
  //       el.name.toLowerCase().search(value) + 1 || el.location.toLowerCase().search(value) + 1);
  //     //this.total = this.items.reduce((sum, item) => sum + item.currency, 0);
  //   },
  // }
  methods: {
  	filteredInfo() {
      return this.items.filter(item => {
      	return item.toLowerCase().indexOf(this.searchItem.toLowerCase()) !== -1
      })
  	}
  }
};

</script>
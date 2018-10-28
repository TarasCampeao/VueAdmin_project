<template>
	<div class="container">
		<div class="search">
	      <input class="find_element" type="text" name="search" placeholder="Search" @input="filteredInfo">
		</div>
		<div class="sort_group">
			<button @click="sortByName()">Name</button>
			<button @click="sortByLocation()">Location</button>
			<button @click="sortByCurrency()">Currency</button>
		</div>
		<p v-if="!items.length">No items!</p>
		<div v-if="items.length" class="items_box" is="transition-group" name="item">
			<div class="about_zone" v-for="(item, index) in items" :key="item.id">
			  <div class="main_data">
			      <ul class="info_list">
			        <li>{{ item.name}}</li>
			        <li>{{ item.location }}</li>
			        <li>{{ item.currency }}</li>
			      </ul>
			      <div class="btn_group">
			        <button class="delete_btn" @click="removeUser(user, index)">
			        	<i class="fas fa-trash-alt"></i>
			        </button>
			        <!-- <button class="btn_standard edit_btn">Edit</button> -->
			        <router-link class="btn_standard see_more" :to="{ name: 'item', params: { id: index }, query: {id: item.id } }">See more</router-link>
			      </div>
		      </div>
		    </div>
		    <div class="total" :key="total">Total currency: {{ total }}</div>
	    </div>
	</div>
</template>

<script>
import fetchData from '../api/test.json';
import Detail from '../components/Detail.vue'
import store from '../store'


export default {
	name: 'Users',
	components: {
		Detail,
	},
	data() {
		return {
			items: fetchData,
			total: fetchData.reduce((sum, item) => sum + item.currency, 0)
		}
	},
	methods: {
	    filteredInfo(e) {
	      const value = e.target.value.toLowerCase();
	      this.items = fetchData.filter(el =>
	        el.name.toLowerCase().search(value) + 1 || el.location.toLowerCase().search(value) + 1);
	      this.total = this.fetchData.reduce((sum, item) => sum + item.currency, 0);
	    },
	  sortByName() {
	    function compare(a, b) {
	      if (a.name < b.name)
	        return -1;
	      if (a.name > b.name)
	        return 1;
	      return 0;
	    }
	    return this.items.sort(compare);
	  },

  	  sortByLocation() {
	    function compareL(a, b) {
	      if (a.location < b.location)
	        return -1;
	      if (a.location > b.location)
	        return 1;
	      return 0;
	    }
	    return this.items.sort(compareL);
	  },

	  sortByCurrency() {
	    function compareC(a, b) {
	      if (a.currency < b.currency)
	        return -1;
	      if (a.currency > b.currency)
	        return 1;
	      return 0;
	    }
	    return this.items.sort(compareC);
	  },
	    removeUser(user, index) {
	    	this.items.splice(index, 1);
	    }
	},
	computed: {

	}
}	

</script>
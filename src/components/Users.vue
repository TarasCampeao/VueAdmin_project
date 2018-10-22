<template>
	<div class="container">
		<!-- <edit-form></edit-form> -->
		<form class="edit_form">
			<div>
				<label for="edit_name">Name</label>
				<input type="text" id="edit_name" class="form_field" v-model="itemName">
			</div>
			<div>
				<label for="edit_name">Location</label>
				<input type="text" id="edit_location" class="form_field" v-model="itemLocation">
			</div>
			<div>
				<label for="edit_name">Currency</label>
				<input type="text" id="edit_currency" class="form_field" v-model="itemCurrency">
			</div>
			<button class="btn_standard add_user" @click.prevent.once="addUser">Add user</button>
			<button class="btn_standard add_user" @click.prevent="showUser">Show user</button>
		</form>
		<ul>
			<li v-for="user in users" :key="user.id">
				<div>{{ user.name }}</div>
				<div>{{ user.location }}</div>
				<div>{{ user.currency }}</div>
			</li>
		</ul>
		<div class="search">
	      <input class="find_element" type="text" name="search" placeholder="Search" @input="filteredInfo">
		</div>
		<div class="sort_group">
			<button @click="sortByName()">Name</button>
			<button @click="sortByLocation()">Location</button>
			<button @click="sortByCurrency()">Currency</button>
		</div>
		<div class="items_box" is="transition-group" name="item">
			<div class="about_zone" v-for="(item, index) in items" :key="item.id">
			  <div class="main_data">
			      <ul class="info_list">
			        <li>{{ item.name}}</li>
			        <li>{{ item.location }}</li>
			        <li>{{ item.currency }}</li>
			      </ul>
			      <div class="btn_group">
			        <!-- <button class="btn_standard edit_btn">Edit</button> -->
			        <router-link class="btn_standard see_more" :to="{ name: 'item', params: { id: index }, query: {id: item.id } }">See more</router-link>
			      </div>
		      </div>
		    </div>
	    </div>
	    <div class="total">Total currency: {{ total }}</div>
	</div>
</template>

<script>
import fetchData from '../api/test.json'
import Detail from '../components/Detail.vue'

export default {
	name: 'Users',
	components: {
		Detail,
	},
	data() {
		return {
			users: [],
			itemName: '',
			itemLocation: '',
			itemCurrency: '',
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
		addUser() {
			const user = {
				name: this.itemName,
				location: this.itemLocation,
				currency: this.itemCurrency
			}

			this.$http.post('http://localhost:3000/users', user)
				.then(response => {
					return response.json()
				})
				.then(newUser => {
					console.log(newUser)
				})
		},
		showUser() {
			this.$http.get('http://localhost:3000/users')
				.then(response => {
					return response.json()
				})
				.then(users => {
					this.users = users
				})
		}


	},
	computed: {

	}
}	

</script>
<template>
	<div class="form_box">
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
				<input type="text" id="edit_currency" class="form_field" v-model.number="itemCurrency">
			</div>
			<button class="add_user" @click.prevent="addUser">Add user</button>
		</form>
	</div>
</template>


<script>
import fetchData from '../api/test.json'


export default {
	name: 'EditForm',
	date() {
		return {
			items: fetchData,
			itemName: '',
			itemLocation: '',
			itemCurrency: ''
		}
	},
	methods: {
		addUser() {
			const user = {
				name: this.itemName,
				location: this.itemLocation,
				currency: this.itemCurrency
			}

			this.$http.post('http://localhost:8080/users', user)
				.then(response => {
					return response.json()
				})
				.then(newUser => {
					console.log(newUser)
				})
		}
	}
}	
</script>
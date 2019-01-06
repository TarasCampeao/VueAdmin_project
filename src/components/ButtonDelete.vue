<template>
	<button type="button" class="delete_btn" @click="removeUser(item)">
    	<i class="fas fa-trash-alt"></i>
    </button>
</template>


<script>
	
export default {
	name: 'ButtonDelete',
	data() {
		return {
			item: '',
		}
	},
	methods: {
      removeUser() {
    	this.$emit('remove', this.item.id);
      }
	}
}

</script>
<style lang="sass">
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')
    @import "./assets/style/main.sass"
    @import "./assets/style/media.sass"
</style>
<template>
  <div id="app">
    <Users/>
  </div>
</template>

<script>
import Users from './components/Users';

export default {
  name: 'app',
  components: {
  	Users
  },
};
</script>



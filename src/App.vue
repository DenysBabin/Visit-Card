<template>
  <div id="app">
    <NavMenu></NavMenu>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/MyProfilePage.vue'
import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavMenu,
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  text-align: center;
  color: #2c3e50;
}
</style>

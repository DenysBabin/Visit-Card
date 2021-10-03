<template>
  <div id="app">
    <MainPage msg="Отдохните! И посмотрите на котят!"></MainPage>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MainPage,
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
  margin-top: 60px;
}
</style>

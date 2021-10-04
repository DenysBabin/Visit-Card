<template>
  <div>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        router
        active-text-color="#ffd04b">
      <el-menu-item index="/">Главная страница</el-menu-item>
      <el-submenu>
        <template slot="title">Прикольные страницы</template>
        <el-menu-item index="/cat">Страница с котятами</el-menu-item>
        <el-menu-item index="/hello">Страница обо мне</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>Инфо</el-menu-item>
      <el-menu-item index="4" disabled>Коммикс</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);

      this.$router.push(keyPath)
    }
  }
}
</script>

<style scoped>

</style>
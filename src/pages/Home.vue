<template>
  <div>
    <div>
      <el-button @click="doRandom()">
        Нажми
      </el-button>
    </div>

    <div>
      {{ reshenie }}
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      mass: ['Уйти', 'эээ куда прешь!!! Дискретка же!!'],
      reshenie: '',
    };
  },
  methods: {

    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    doRandom() {
      this.reshenie = this.mass[this.getRandomInt(2)]

    }
  }
}
</script>

<style scoped>

</style>
<template>
  <el-input
      :placeholder="placeholder"
      v-model="textValue"
      @input='$emit("changeEvent", $event)'
  ></el-input>
</template>

<script>
export default {
  props: {
    placeholder: String,
  },
  mame: 'VCInput',
  data() {
    return {
      textValue: '',
    }
  }
}
</script>

<style scoped>

</style>
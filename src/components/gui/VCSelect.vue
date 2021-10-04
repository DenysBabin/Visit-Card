<template>
  <el-select placeholder="Select"
             v-model='textValue'
             @input='$emit("test", $event)'>
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    options: Array,
  },
  mame: 'VCSelect',
  data() {
    return {
      oneTest: 'lsdkjf',
      textValue: '',
    }
  }
}
</script>

<style scoped>

</style>
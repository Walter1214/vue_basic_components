<template lang="pug">
.about
  BasicInput(v-model="test")
  div {{test}}
  BasicHeading(level="1") adsffdfsdfg
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      test: 123213
    }
  },
  methods: {}
})
</script>

<style lang="stylus"></style>

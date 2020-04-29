<template lang="pug">
.about
  BasicInput
  BasicHeading(level="2" @click="test" class="sdfasfsadf asdf") Walter Test
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    test() {
      alert(12312)
    }
  }
})
</script>

<style lang="stylus"></style>

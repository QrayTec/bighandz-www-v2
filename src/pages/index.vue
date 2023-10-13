<script setup lang="ts">
defineOptions({
  name: 'IndexPage'
})
</script>

<template>
  <div class="index-page">
    <TheHeader
      class="Header"
      :checked="0"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped>
.index-page {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center center;
}
.Header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
</style>

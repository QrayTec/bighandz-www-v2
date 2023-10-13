<script setup lang="ts">
defineOptions({
  name: 'IndexPage'
})
</script>

<template>
  <div class="index-page">
    <TheHeader :checked="0" />
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
  background-image: url('../assets/images/pic_banner.png');
  background-size: cover;
  background-position: center center;
}
</style>

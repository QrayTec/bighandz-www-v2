<script setup lang="ts">
defineOptions({
  name: 'IndexPage'
})
</script>

<template>
  <div class="index-page">
    <TheCounter :initial="123"></TheCounter>
    IndexPage
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

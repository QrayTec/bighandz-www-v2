<template>
  <div class="index-page">
    <div class="index-bg"></div>

    <main>
      <div class="index_main">
        <First />
        <Business />
        <Field />
        <!-- <IndexCustomers /> -->
      </div>
    </main>
    <TheBackTop />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
<script setup lang="ts">
import Field from './components/Field.vue'
import First from './components/First.vue'
import Business from './components/Business.vue'

defineOptions({
  name: 'IndexPage'
})
</script>
<style scoped>
.index-page {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.index-bg {
  width: 100%;
  height: 100vh;
  background-image: url('/src/assets/images/pic_banner.png');
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -1; /* 将z-index调整为较低值，使其在index_main的下面 */
  position: fixed;
  fill: url(<path-to-image>), lightgray 50% / cover no-repeat;
  background-blend-mode: luminosity;
}
.Header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
.index_main {
  width: 100%;
  height: auto;
  background-color: transparent;
}
</style>

<template>
  <div class="page">
    <TheHeader
      class="Header"
      :checked="1"
    />

    <div class="message_from_president_main">
      <sub-page-title />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
  width: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.Header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
.message_from_president_main {
  width: 100%;
  height: 600px;
  background: #0e1b47;
  display: flex;
  justify-content: center;
}
</style>

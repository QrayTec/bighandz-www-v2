<template>
  <div class="h-full w-full flex justify-center">
    <div id="loading">
      <div class="loading">Loading...</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.loading {
  font-size: 24px;
  color: #333;
}

.loading::after {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-left: 8px;
  border-radius: 50%;
  border: 4px solid #333;
  border-top: 4px solid transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div
    v-show="BtnFlag"
    v-smooth-scroll="{
      duration: 1000
    }"
    href="#app"
    class="back_main"
  >
    <img
      src="/src/assets/images/back_top.svg"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const BtnFlag = ref<boolean>(false)

// 监听滚动事件
const handleScroll = () => {
  const currentPosition =
    document.documentElement.scrollTop || document.body.scrollTop
  BtnFlag.value = currentPosition > 0
}

// 添加滚动事件监听器
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 在组件销毁前移除滚动事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back_main {
  width: 64px;
  height: 64px;
  background-color: #597be5;
  position: fixed;
  bottom: 150px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s; /* 添加背景颜色的渐变动画 */
  z-index: 9;
}

.back_main:hover {
  background-color: #31437c; /* 鼠标悬停时的背景颜色 */
}
</style>

<template>
  <div
    v-show="BtnFlag"
    v-smooth-scroll="{
      duration: 1000
    }"
    href="#app"
    class="fixed bottom-[150px] right-[0px] z-9 h-[64px] w-[64px] flex cursor-pointer items-center justify-center bg-[#597be5] transition-all duration-300 hover:bg-[#31437c]"
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
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

// 在组件销毁前移除滚动事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>

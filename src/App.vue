<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: '株式会社ビッグハンズ',
  meta: [
    { name: 'description', content: 'BigHandz Co.Ltd. – Speed is the Power!' }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/icon.svg'
    }
  ]
})
// 禁止缩放
onMounted(() => {
  document.addEventListener('touchstart', event => {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  let lastTouchEnd = 0
  document.addEventListener(
    'touchend',
    event => {
      const now = new Date().getTime()
      if (now - lastTouchEnd <= 300) {
        event.preventDefault()
      }
      lastTouchEnd = now
    },
    false
  )
})
</script>

<template>
  <RouterView />
</template>

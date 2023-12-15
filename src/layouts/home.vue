<template>
  <div>
    <div class="relative w-full bg-cover bg-center-center">
      <TheHeader
        class="fixed left-[0px] top-[0px] z-9 w-full"
        :checked="checked"
      />
    </div>
    <main class="home-page">
      <RouterView />
      <TheFooter class="z-2" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { json } from '../data/breadcrumb-data'

const checked = ref<number>(0)
const $route = useRoute()

const getPageCheck = () => {
  const routePath = $route.path
  const pageData = json[routePath.toLowerCase()] // 将路由路径转换为小写
  if (typeof pageData === 'string') {
    return pageData
  }
  if (pageData && pageData.checked) {
    checked.value = pageData.checked
    return pageData.checked
  }
  return pageData.checked
}

onMounted(() => {
  getPageCheck()
})
</script>

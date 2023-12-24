<template>
  <div>
    <div class="relative w-full bg-cover bg-center-center">
      <TheHeader
        v-if="MAIN_CONTENT_WIDTH !== 1200"
        class="fixed left-[0px] top-[0px] z-9 w-full"
        :checked="checked"
      />
      <TheHeaderMobile v-else />
    </div>
    <main class="home-page">
      {{ MAIN_CONTENT_WIDTH }}
      <RouterView />
      <TheFooter class="z-2" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { json } from '../data/breadcrumb-data'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

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

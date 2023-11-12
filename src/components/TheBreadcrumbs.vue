<template>
  <div class="Route_Breadcrumbs">
    <div class="flex cursor-pointer items-center">
      <div
        class="font-NotoSansJP h-[16px] text-[16px] leading-[16px] font-[400] text-[#fff] opacity-40"
      >
        {{ ParentTitle }}
      </div>

      <div class="mx-[20px] flex items-center justify-center">
        <img
          src="/src/assets/images/bread_icon.svg"
          alt=""
        />
      </div>
      <div
        class="font-NotoSansJP h-[16px] text-[16px] leading-[16px] font-[400] text-[#fff]"
      >
        {{ IndexTitle }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { json } from '../data/breadcrumb-data'

const ParentTitle = ref<string>('1')
const IndexTitle = ref<string>('2')

const $route = useRoute()

const getPageTitle = () => {
  const routePath = $route.path
  const pageData = json[routePath.toLowerCase()] // 将路由路径转换为小写
  if (typeof pageData === 'string') {
    return pageData
  }
  if (pageData && pageData.name) {
    ParentTitle.value = pageData.Parent_title
    IndexTitle.value = pageData.name
    return pageData.name
  }
  return 'Unknown Page'
}

onMounted(() => {
  getPageTitle()
})
</script>
<style></style>

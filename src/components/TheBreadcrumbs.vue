<template>
  <div class="Route_Breadcrumbs">
    <div class="Route_Breadcrumbs_main">
      <div class="Parent_title">{{ ParentTitle }}</div>

      <div class="Route_Breadcrumbs_to">
        <img
          src="/src/assets/images/bread_icon.svg"
          alt=""
        />
      </div>
      <div class="Route_Breadcrumbs_Index_title">{{ IndexTitle }}</div>
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
<style>
.Route_Breadcrumbs_main {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.Parent_title {
  height: 16px;
  font-size: 16px;
  font-family: Noto Sans JP;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  opacity: 0.4;
}
.Route_Breadcrumbs_to {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
}
.Route_Breadcrumbs_Index_title {
  height: 16px;
  font-size: 16px;
  font-family: Noto Sans JP;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
}
</style>

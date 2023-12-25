<template>
  <div
    v-if="MAIN_CONTENT_WIDTH === 1200"
    class="bg-deep_blue h-[76px] w-full flex items-center justify-center text-white"
  >
    <div
      class="font-NotoSansJP w-full flex text-[1rem] leading-normal font-[700]"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div
        v-for="(item, index) in PageNavData"
        :key="index"
        :class="index === 0 ? 'ml-[0px]' : 'ml-[60px]'"
      >
        <a
          :href="item.anchor"
          class="flex items-center justify-between opacity-60 transition-all duration-700 hover:opacity-100"
        >
          <div>{{ item.anchor_title }}</div>
          <div class="ml-[15px]">
            <img src="@/assets/images/page_nav.svg" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { PageNavType } from '@/data/pages_interface'

const props = defineProps<{
  pagenavdata: PageNavType[]
}>()

const PageNavData = ref(props.pagenavdata)
</script>

<style scoped></style>

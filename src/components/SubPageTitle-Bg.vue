<template>
  <div
    class="font-NotoSansJP bg-deep_blue relative h-[600px] w-full flex justify-center"
  >
    <div class="bg-SubPageTitleBg absolute h-full w-full"></div>
    <div
      :style="{ backgroundImage: 'url(' + SubPageTitleData.ImgSrc + ')' }"
      class="h-full w-full flex justify-center bg-[right_bottom_50%] bg-cover bg-no-repeat"
    >
      <div
        :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
        class="z-1 py-[78px]"
      >
        <div class="mt-[60px]">
          <the-breadcrumbs />
        </div>
        <div class="mt-[110px]">
          <div class="text-[3.5rem] leading-[5.125rem] font-[700] text-[#fff]">
            {{ SubPageTitleData.TitleCn_1 + SubPageTitleData.TitleCn_2 }}
          </div>
          <div
            class="text-[1.125rem] tracking-[.75rem] font-[400] uppercase text-white opacity-40"
          >
            {{ SubPageTitleData.TitleEn }}
          </div>
          <div class="mt-[40px] h-[8px] w-[60px] bg-[#6785C1]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'

import { SubPageTitleType } from '@/data/pages_interface'

const props = defineProps<{ data: SubPageTitleType }>()

const SubPageTitleData = ref<SubPageTitleType>(props.data)
</script>
<style lang=""></style>

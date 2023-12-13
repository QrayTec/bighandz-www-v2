<template>
  <div class="bg-deep_blue h-[800px] w-full flex justify-center">
    <div
      :style="{ backgroundImage: 'url(' + SubPageTitleData.ImgSrc + ')' }"
      class="font-NotoSansJP w-[1680px] flex bg-right-bottom bg-no-repeat"
    >
      <div
        class="bg-deep_blue relative mt-[76px] w-full flex justify-center bg-opacity-50 bg-[url(@/assets/images/sub_page_title/bg-top.svg)] bg-right-bottom bg-no-repeat"
      >
        <div
          class="z-3 text-white"
          :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
        >
          <div class="mt-[60px]">
            <the-breadcrumbs />
          </div>
          <div
            class="font-Shippori relative mt-[294px] h-[210px] w-[606px] pl-[30px] text-[4.5rem] leading-[5rem] font-[400]"
          >
            <div class="absolute z-1 w-full">
              <div class="">{{ SubPageTitleData.TitleCn_1 }}</div>
              <div class="mt-[20px] w-full text-right">
                {{ SubPageTitleData.TitleCn_2 }}
              </div>
            </div>
            <div
              class="bg-primarygradient absolute bottom-0 z-0 h-[144px] w-[576px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { SubPageTitleType2 } from '@/data/pages_interface'

const props = defineProps<{ data: SubPageTitleType2 }>()

const SubPageTitleData = ref<SubPageTitleType2>(props.data)
</script>
<style lang=""></style>

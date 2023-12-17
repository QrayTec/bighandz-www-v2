<template>
  <div
    class="font-NotoSansJP bg-deep_blue h-[76px] w-full flex items-center text-white"
  >
    <div class="h-full w-[504px] bg-[#DFE4F2]"></div>
    <div class="w-[calc(100%-504px)] flex px-[60px]">
      <a
        v-for="(item, index) in PageNavData"
        :key="item.id"
        v-smooth-scroll="{
          duration: 1000,
          offset: -120
        }"
        :href="item.anchor"
        :class="index === 0 ? '' : 'ml-[60px]'"
        class="text-[1rem] leading-normal font-[700]"
      >
        <div class="flex items-center">
          <div>{{ item.anchor_title }}</div>
          <div class="ml-[1rem]">
            <img
              src="/src/assets/images/page_nav.svg"
              alt=""
            />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { PageNavType } from '@/data/pages_interface'

const props = defineProps<{
  pagenavdata: PageNavType[]
}>()

const PageNavData = ref(props.pagenavdata)
</script>
<style lang=""></style>

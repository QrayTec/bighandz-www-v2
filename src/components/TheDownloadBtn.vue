<template>
  <div class="inline-block h-[64px]">
    <div
      :style="{ backgroundImage: 'url(' + ImgSrc + ')' }"
      class="h-full w-full flex items-center bg-contain bg-center bg-no-repeat px-[30px] py-[20px] lg:bg-cover"
    >
      <a
        :href="Href"
        target="_blank"
        download="rirekisyo.xlsx"
        rel="noopener noreferrer"
        class="w-full flex items-center justify-between decoration-none"
      >
        <img src="@/assets/images/download.svg" />
        <p
          class="font-NotoSansJP ml-[16px] flex items-center text-[0.75rem] leading-none font-[400] not-italic text-[#fff] lg:text-[1rem]"
        >
          <slot></slot>
        </p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ href: string; imgSrc: string }>()

const Href = ref<string>(props.href)
const ImgSrc = ref<string>(props.imgSrc)
</script>

<style scoped></style>

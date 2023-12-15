<template>
  <div class="inline-block h-[64px]">
    <div
      :style="{ backgroundImage: 'url(' + ImgSrc + ')' }"
      class="h-full w-full bg-[url(@/assets/images/DownLoadBtn/bg-2.svg)] bg-cover bg-center bg-no-repeat px-[30px] py-[20px]"
    >
      <a
        :href="Href"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full flex justify-between decoration-none"
      >
        <img src="@/assets/images/download.svg" />
        <p
          class="font-NotoSansJP ml-[16px] text-[20px] leading-none font-[400] not-italic text-[#fff]"
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

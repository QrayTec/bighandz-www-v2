<template>
  <div class="relative h-[360px] w-[585px]">
    <div class="absolute left-0 top-0 h-full w-full">
      <img
        :src="Data.Background_image"
        alt=""
      />
    </div>
    <div
      class="font-NotoSansJP relative left-0 top-0 h-full w-full bg-[#0E1B47] bg-opacity-40 px-[40px] text-white"
    >
      <div class="pt-[240px] text-[24px] leading-[30px] font-[500]">
        {{ Data.title }}
      </div>
      <div class="mt-[30px]">
        <a
          class="flex"
          :href="Data.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>詳細はこちら</p>
          <img
            class="ml-[20px]"
            src="@/assets/images/index_Business/link.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { AdoptionCardType } from '../type/index'

const props = defineProps<{ data: AdoptionCardType }>()

const Data = ref<AdoptionCardType>(props.data)
</script>
<style lang=""></style>

<template>
  <div class="relative h-[287px] w-[345px]">
    <img
      class="absolute left-0 top-0 h-full w-full object-cover"
      :src="Data.background_image"
      alt=""
    />
    <div
      class="absolute left-0 top-0 h-full w-full bg-[#2d2d2d] bg-opacity-50"
    ></div>
    <router-link :to="Data.link">
      <div
        class="relative h-full w-full flex flex-wrap items-center justify-center text-white"
      >
        <div class="flex flex-wrap items-center justify-center px-[50px]">
          <div class="w-full flex items-center justify-center">
            <img
              :src="Data.title_icon"
              alt=""
              srcset=""
            />
          </div>
          <p
            class="font-NotoSansJP mt-[10px] text-center text-[1.5rem] leading-[1.375rem] font-[500]"
          >
            {{ Data.title_1 }}<br v-if="Data.title_2" />
            {{ Data.title_2 }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { BusinessItemType } from '../types/index'

const props = defineProps<{ businessitemdata: BusinessItemType }>()

const Data = ref<BusinessItemType>(props.businessitemdata)
</script>
<style></style>

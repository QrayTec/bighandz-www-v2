<template>
  <div
    class="bg-navy_blue inline-block p-[15px] text-[2.25rem] leading-[54px] font-[500] text-white lg:h-[88px] lg:px-[44px] lg:py-[17px]"
  >
    <div class="w-full flex items-center">
      <img
        :src="image"
        alt=""
      />
      <div class="ml-[5px]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ img: string }>()

const image = ref<string>(props.img)
</script>
<style lang=""></style>

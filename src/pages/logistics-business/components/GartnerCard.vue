<template>
  <div
    class="group flex"
    :class="CardData.className"
  >
    <div class="relative h-[125px] w-full overflow-hidden">
      <div class="absolute left-0 top-0 h-full w-full">
        <img
          class="h-full w-full transition-duration-1s group-hover:scale-[1.2]"
          :src="CardData.BackgroundImage"
          alt=""
        />
      </div>
      <div
        class="relative right-0 top-0 h-full w-full flex items-center justify-end text-white transition-duration-1s group-hover:opacity-0"
      >
        <div
          class="font-NotoSansJP bg-GartnerCard h-full w-[125px] flex flex-col items-center justify-center px-[22.5px] text-center text-[16px] font-[700]"
        >
          <p>{{ CardData.title_1 }}</p>
          <p>{{ CardData.title_2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { GartnerCardType } from '../types/index'

const props = defineProps<{ carddata: GartnerCardType }>()

const CardData = ref<GartnerCardType>(
  props.carddata || {
    BackgroundImage: '',
    className: '',
    title_1: '',
    title_2: ''
  }
)
</script>
<style lang=""></style>

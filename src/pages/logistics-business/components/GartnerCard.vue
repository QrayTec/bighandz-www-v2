<template>
  <div
    class="relative h-[160px]"
    :class="CardData.className"
  >
    <div class="absolute left-0 top-0 h-full w-full">
      <img
        class="h-full w-full"
        :src="CardData.BackgroundImage"
        alt=""
      />
    </div>
    <div
      class="relative right-0 top-0 h-full w-full flex items-center justify-end text-white"
    >
      <div
        class="font-NotoSansJP w-[160px] flex flex-col items-center justify-center text-center text-[16px] font-[700]"
      >
        <p>{{ CardData.title_1 }}</p>
        <p>{{ CardData.title_2 }}</p>
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

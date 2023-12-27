<template>
  <div
    class="mt-[30px] h-[212px] w-full bg-cover lg:mt-0 md:mt-0 lg:h-[360px] lg:w-[585px] md:h-[200px] md:w-[320px]"
    :style="{ backgroundImage: 'url(' + CardData.BackgroundImage + ')' }"
  >
    <div
      class="bg-deep_blue h-full w-full bg-opacity-40 px-[15px] py-[30px] text-white"
    >
      <router-link
        :to="CardData.link"
        class="h-full w-full flex flex-col justify-end"
      >
        <div class="text-[1.5rem] font-[700]">{{ CardData.title }}</div>
        <div class="mt-[30px] flex items-center">
          <div>詳細はこちら</div>
          <div class="ml-[20px]">
            <img src="@/assets/images/index_Business/link.svg" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { AdoptionCardType } from '../types/index'

const props = defineProps<{ carddata: AdoptionCardType }>()

const CardData = ref<AdoptionCardType>(
  props.carddata || { BackgroundImage: '', title: '', link: '' }
)
</script>
<style lang=""></style>

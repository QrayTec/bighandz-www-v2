<template>
  <div
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      id="Publications"
      class="h-[80px] max-w-[480px] flex justify-center bg-[#6785C1] px-[44px] py-[17px] text-[36px] font-[500] text-white"
    >
      出版物
    </div>
    <div
      data-aos="fade-in"
      class="mt-[60px] flex justify-between"
    >
      <div class="w-[calc(50%-15px)] flex flex-col justify-between py-[30px]">
        <div class="font-NotoSansJP text-[#071027]s text-[36px] font-[700]">
          {{ PublicationsData.title }}
        </div>
        <div
          class="font-NotoSansJP w-full text-[20px] leading-[32px] font-[400] text-[#0E1B47]"
        >
          <ul class="mt-[20px] w-full">
            <li
              v-for="(items, i) in PublicationsData.content"
              :key="i"
              :class="i == 0 ? '' : 'mt-[30px]'"
              class="w-full flex px-[30px]"
            >
              <div class="mt-[5px] h-full min-w-[16px]">
                <img
                  class="h-16px w-[16px]"
                  src="@/assets/images/company_profile/rhombic.svg"
                  alt=""
                />
              </div>
              <p class="ml-[10px]">{{ items.list }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-[calc(50%-15px)] flex justify-center">
        <img
          class="object-cover"
          :src="PublicationsData.Image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { SolutionType } from '@/data/pages_interface'

const props = defineProps<{ publications: SolutionType }>()

const PublicationsData = ref<SolutionType>(props.publications)
</script>
<style lang=""></style>

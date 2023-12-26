<template>
  <div
    id="Publications"
    class="w-full px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle data-aos="fade-right">出版物</ThePageMinTitle>

    <div
      data-aos="fade-in"
      class="mt-[60px] flex flex-col lg:flex-row lg:justify-between"
    >
      <div
        class="h-[460px] w-full flex justify-center lg:w-[calc(50%-15px)]"
        data-aos="fade-right"
      >
        <img
          class="object-cover transition-all duration-800 ease-in-out hover:transform-scale-[1.2] hover:duration-800"
          :src="PublicationsData.Image"
          alt=""
        />
      </div>
      <div
        class="w-full flex flex-col justify-between py-[30px] lg:w-[calc(50%-15px)]"
        data-aos="fade-left"
      >
        <div class="flex flex-col">
          <TheIconTitle>
            <div class="w-[358px]">
              <p>{{ PublicationsData.title }}</p>
              <p class="text-right">{{ PublicationsData.title_2 }}</p>
            </div>
          </TheIconTitle>
          <ul class="mt-[60px] leading-[2rem]">
            <TheIconList
              v-for="(item, index) in PublicationsData.content"
              :key="index"
              :class="index === 0 ? '' : 'mt-[30px]'"
              >{{ item.list }}<br />{{ item.list_2 }}</TheIconList
            >
          </ul>
        </div>
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

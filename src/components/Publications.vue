<template>
  <div
    id="Publications"
    class="w-full"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinTitle>出版物</ThePageMinTitle>

    <div
      data-aos="fade-in"
      class="mt-[60px] flex justify-between"
    >
      <div class="h-[460px] w-[calc(50%-15px)] flex justify-center">
        <img
          class="object-cover"
          :src="PublicationsData.Image"
          alt=""
        />
      </div>
      <div class="w-[calc(50%-15px)] flex flex-col justify-between py-[30px]">
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

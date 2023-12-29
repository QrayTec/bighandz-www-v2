<template>
  <div class="font-NotoSansJP">
    <div
      v-for="(item, index) in Data"
      :key="index"
      :class="item.ClassName"
      class="w-full flex flex-col"
    >
      <div class="w-full flex">
        <div class="w-[30%] px-[10px] py-10px font-[700] text-gray-500">
          分類
        </div>
        <div class="text-deep_blue w-[70%] px-[10px] py-10px font-[400]">
          {{ item.list_1 }}
        </div>
      </div>
      <div class="w-full flex">
        <div class="w-[30%] px-[10px] py-10px font-[700] text-gray-500">
          利用目的
        </div>
        <div class="text-deep_blue w-[70%] px-[10px] py-10px font-[400]">
          {{ item.list_2 }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { TablePhoneType } from '../types/index'

const props = defineProps<{ data: TablePhoneType[] }>()

const Data = ref<TablePhoneType[]>(props.data)
</script>
<style lang=""></style>

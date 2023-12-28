<template>
  <div class="font-NotoSansJP">
    <div
      v-for="(item, index) in Data"
      :key="index"
      class="mt-[30px]"
    >
      <div class="text-deep_blue text-[1rem] font-[700]">{{ item.title }}</div>
      <div class="px-[20px]">
        <div
          v-for="(items, i) in item.content"
          :key="i"
          class="mt-[10px]"
        >
          <div class="mt-[10px] font-[600]">{{ items.title }}</div>
          <div class="mt-[10px] font-[400]">{{ items.list }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { TableType } from '../types/index'

const props = defineProps<{ data: TableType[] }>()

const Data = ref<TableType[]>(props.data)
</script>
<style lang=""></style>

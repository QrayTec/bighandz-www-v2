<template>
  <div class="font-NotoSansJP mt-[30px]">
    <div
      v-for="(item, index) in Data"
      :key="index"
      class=""
    >
      <div
        class="border_blue text-deep_blue bg-[#DFE4F2] px-[4px] py-[10px] text-[1rem] leading-[32px] font-[700]"
      >
        {{ item.title }}
      </div>
      <div class="border_blue">
        <div
          v-for="(items, i) in item.content"
          :key="i"
          class="p-[10px]"
        >
          <div class="font-[600]">{{ items.title }}</div>
          <TheIconList>
            <div class="font-[400]">{{ items.list }}</div>
          </TheIconList>
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
<style scoped>
.border_blue {
  border: 1px solid #6785c1;
}
</style>

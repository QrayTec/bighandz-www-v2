<template>
  <div>
    <li class="w-full flex items-center">
      <div class="text-deep_blue flex font-[400]">
        <div
          class="mt-[calc(16px-0.8rem)] h-full min-w-[16px] flex items-center"
        >
          <img
            v-if="type === undefined"
            class="h-16px w-[16px]"
            src="@/assets/images/listicon/icon_1.svg"
            alt=""
          />
          <img
            v-if="type === 2"
            class="h-16px w-[16px]"
            src="@/assets/images/listicon/icon_2.svg"
            alt=""
          />
        </div>
        <p class="ml-[10px]">
          <slot></slot>
        </p>
      </div>
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ type?: number }>()

const type = ref<number | undefined>(props.type)
</script>

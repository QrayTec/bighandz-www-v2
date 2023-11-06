<template>
  <div
    class="steps_main"
    :class="StepsData.subheading !== null ? 'steps_height_1' : 'steps_height_2'"
  >
    <div class="steps_data">
      <div
        v-if="StepsData.subheading !== null"
        class="steps_subheading"
      >
        {{ StepsData.subheading }}
      </div>
      <div class="steps_title_main">{{ StepsData.title_main }}</div>
    </div>
    <div class="steps_bg">
      <div class="bg_main"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StepsType } from '@/data/pages_interface'

const props = defineProps<{ stepsdata: StepsType }>()

const StepsData = ref<StepsType>(props.stepsdata)
</script>

<style scoped>
.steps_main {
  width: 204px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  background-color: #ffffff;
  z-index: 6;
}
.steps_height_1 {
  height: 84px;
}
.steps_height_2 {
  height: 122px;
}
.steps_bg {
  width: 100%;
  display: flex;
  justify-content: end;
}
.bg_main {
  width: 144px;
  height: 40px;
  background: linear-gradient(to right, #597ee5, #597ee5, #00ffb2);
}
.steps_data {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 30px;
}
.steps_subheading {
  color: #6785c1;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Noto Sans JP;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 44px; /* 183.333% */
}
.steps_title_main {
  color: #0e1b47;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Shippori Mincho;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 110% */
}
</style>

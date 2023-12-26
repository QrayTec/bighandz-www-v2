<template>
  <div class="w-full flex justify-center bg-[#F8F8F8]">
    <div
      class="px-[15px] lg:px-0"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <ThePageMinTitle3
        class="mt-[60px]"
        data-aos="fade-right"
      >
        自動化テストプラットフォームの構成図
      </ThePageMinTitle3>
      <div class="my-[60px]">
        <img
          v-if="MAIN_CONTENT_WIDTH === 1200"
          src="@/assets/images/si-service-business/si_8.png"
          alt=""
        />
        <photo-provider v-else>
          <photo-consumer
            intro="自動化テストプラットフォームの構成図"
            :src="Automation"
          >
            <img
              src="@/assets/images/si-service-business/si_8.png"
              class="view-box"
            />
          </photo-consumer>
        </photo-provider>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import Automation from '@/assets/images/si-service-business/si_8_m.png'
</script>
<style lang=""></style>

<template>
  <div
    id="AI-Cases"
    data-aos="fade-up"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="font-NotoSansJP px-[15px] lg:px-0"
  >
    <ThePageMinTitle>AI事例</ThePageMinTitle>
    <ThePageMinTitle3 class="mt-[60px]">
      AI事例：現新比較の画面差分の自動識別
    </ThePageMinTitle3>
    <div class="mt-[30px]">
      <div
        class="text-deep_blue w-full text-[1rem] leading-[2rem] font-[400] lg:w-[654px]"
      >
        本システムはREST
        APIを介したフロントエンド／バックエンドアーキテクチャを採用マルチブラウザにおける画面表示の差分を自動検知する
      </div>
      <div
        v-if="MAIN_CONTENT_WIDTH === 1200"
        class="mt-[60px] flex justify-center lg:h-[522px]"
      >
        <img
          class="h-full w-full object-contain lg:w-[1000px]"
          src="@/assets/images/data-solution/AICase_1.png"
          alt=""
        />
      </div>
      <photo-provider v-else>
        <photo-consumer
          intro="AiCase"
          :src="AiCase1"
        >
          <img
            src="@/assets/images/data-solution/AICase_1.png"
            class="view-box"
          />
        </photo-consumer>
      </photo-provider>
    </div>
    <ThePageMinTitle3
      data-aos="fade-up"
      class="mt-[60px]"
    >
      AI事例：OSSのLLMの応用
    </ThePageMinTitle3>
    <div class="mt-[60px]">
      <div
        class="text-deep_blue w-full text-[1rem] leading-[2rem] font-[400] lg:w-[654px]"
      >
        LLMの応用(OSS):Fine-tuningで安全なカスタマイズで差別化を加速
      </div>
      <div class="mt-[60px] flex justify-center lg:h-[522px]">
        <img
          v-if="MAIN_CONTENT_WIDTH === 1200"
          class="h-full w-full object-contain lg:w-[1000px]"
          src="@/assets/images/data-solution/AICase_2.png"
          alt=""
        />
        <photo-provider v-else>
          <photo-consumer
            intro="AiCase2"
            :src="AiCase2"
          >
            <img
              src="@/assets/images/data-solution/AICase_2.png"
              class="view-box"
            />
          </photo-consumer>
        </photo-provider>
      </div>
    </div>
  </div>
</template>
<script setup>
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import AiCase1 from '@/assets/images/data-solution/AICase_1.png'
import AiCase2 from '@/assets/images/data-solution/AICase_2.png'
</script>
<style lang=""></style>

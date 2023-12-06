<template>
  <div
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    class="font-NotoSansJP"
  >
    <ThePageMinTitle>システム開発</ThePageMinTitle>
    <div class="mt-[60px] flex justify-between">
      <div
        class="text-cobalt_blue w-[710px] text-[1rem] leading-[2rem] font-[400]"
      >
        <div>
          <p>
            私たちの会社では、長年のシステム開発の経験を持つエンジニアが、お客様のニーズに合わせた最適なシステムを開発することを目指しています。
          </p>
          <br />
          <p>
            私たちは、お客様のビジネスの成功を支援するために、要件定義から導入までのすべてのフェーズにわたり、密接に協力して取り組んでいます。
          </p>
        </div>
        <div class="mt-[30px]">
          <p>
            私たちは、お客様のビジネスにとって最適なソリューションを提供するために、多くのプログラミング言語やフレームワークに熟練しています。
          </p>
          <br />
          <p>
            また、高度なセキュリティ技術やクラウドテクノロジーを活用し、お客様のデータの保護と安全性に最大限の配慮をしています。
          </p>
        </div>
      </div>
      <div class="w-[460px]">
        <img
          src="@/assets/images/si-service-business/si_7.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>

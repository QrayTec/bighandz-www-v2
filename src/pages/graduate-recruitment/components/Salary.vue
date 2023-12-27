<template>
  <div
    id="Salary&Benefits"
    class="font-NotoSansJP relative h-auto flex justify-center px-[15px] text-white lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div
      class="bg-deep_blue absolute z-[-1] h-full w-[calc(100%-60px)] lg:w-[calc(100%-120px)]"
    ></div>
    <div class="w-full">
      <ThePageMinTitle2 data-aos="fade-up">給与</ThePageMinTitle2>
      <div
        class="px-[30px] lg:px-[90px]"
        data-aos="fade-up"
      >
        <div class="mt-[60px]">
          <img
            v-if="MAIN_CONTENT_WIDTH === 1200"
            src="@/assets/images/graduate-recruitment/industrial-finance.png"
          />
          <photo-provider v-else>
            <photo-consumer
              intro="給与"
              :src="financePhone"
            >
              <img
                src="@/assets/images/graduate-recruitment/industrial-financePhone.png"
                class="view-box"
              />
            </photo-consumer>
          </photo-provider>
        </div>
        <div
          class="mt-[60px] px-[30px] text-[.875rem] leading-normal font-[400] lg:px-[90px]"
        >
          <div data-aos="fade-up">
            <div>※通勤手当別途支給。</div>
            <div class="mt-[30px] h-[1px] w-full bg-[#fff] bg-opacity-30"></div>
          </div>
          <div
            class="mt-[30px]"
            data-aos="fade-up"
          >
            <div class="text-[1rem] font-[700]">賞与・昇給</div>
            <div class="mt-[20px]">賞与 年2回（6月・12月）</div>
            <div class="mt-[20px]">昇給 年1回（4月）</div>
            <div class="mt-[30px] h-[1px] w-full bg-[#fff] bg-opacity-30"></div>
          </div>
          <div
            class="mt-[30px]"
            data-aos="fade-up"
          >
            <div class="text-[1rem] font-[700]">平均年間給与</div>
            <div class="mt-[20px]">600万円 （2020年3月現在 正社員）</div>
            <div class="mt-[30px] h-[1px] w-full bg-[#fff] bg-opacity-30"></div>
          </div>
          <div
            class="mt-[30px]"
            data-aos="fade-up"
          >
            <div class="mt-[20px]">
              ※基準外賃金および賞与を含む税込支給額。通勤費は別途支給。
            </div>
            <div
              data-aos="fade-up"
              class="mt-[30px] h-[1px] w-full bg-[#fff] bg-opacity-30"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import financePhone from '@/assets/images/graduate-recruitment/industrial-financePhone.png'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>

<template>
  <div
    id="OpenPositions"
    class="font-NotoSansJP relative h-auto flex justify-center text-white"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <div class="bg-deep_blue absolute z-[-1] h-full w-[calc(100%-120px)]"></div>
    <div class="w-full">
      <ThePageMinTitle2 data-aos="fade-right">募集職種</ThePageMinTitle2>
      <div class="w-full flex flex-col items-center justify-center px-[90px]">
        <div
          class="mt-[60px] w-full flex"
          data-aos="fade-up"
        >
          <div class="w-[50%] flex">
            <div
              class="w-[80px] flex items-center bg-[#597BE5] px-[30px] py-[20px]"
            >
              技 術 系
            </div>
            <div
              class="w-[calc(100%-80px)] flex flex-col text-[1rem] font-[700]"
            >
              <div
                class="text-deep_blue border border-[#597BE5] border-solid bg-[#fff] px-[30px] py-[20px]"
              >
                開発エンジニア
              </div>
              <div
                class="text-deep_blue border border-[#597BE5] border-solid bg-[#fff] px-[30px] py-[20px]"
              >
                インフラエンジニア
              </div>
            </div>
          </div>
          <div class="w-[50%] flex">
            <div
              class="w-[80px] flex items-center bg-[#597BE5] px-[30px] py-[20px]"
            >
              事 務 系
            </div>
            <div
              class="text-deep_blue h-[132px] w-[calc(100%-80px)] flex flex-col text-[1rem] font-[700]"
            >
              <div
                class="h-full flex items-center border border-[#597BE5] border-solid bg-[#fff] px-[30px] py-[20px]"
              >
                営業
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          class="text-deep_blue mt-[30px] flex bg-[#fff] p-[30px]"
        >
          <div>
            <li class="w-full flex items-center">
              <div class="text-deep_blue ml-[10px] flex font-[400]">
                <div
                  class="mt-[calc(16px-0.8rem)] h-full min-w-[16px] flex items-center"
                >
                  <img
                    class="h-16px w-[16px]"
                    src="@/assets/images/graduate-recruitment/Graduates_2.svg"
                    alt=""
                  />
                </div>
                <p class="ml-[10px]">
                  上記の募集職種は、応募者の方々がどの職種からキャリアをスタートするのか、選んでいただくためのものですが、その後のキャリアにおいては、個人の適性や成長を考慮して他の仕事に携わる可能性もあります。たとえば、「技術系」として入社した方が、キャリアの中で適性を見出されて「事務系」の仕事に携わることや、その逆の場合もあります。
                </p>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
</script>
<style lang=""></style>

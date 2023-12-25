<template>
  <div class="w-full flex justify-center bg-[#142458] pb-[120px] text-[#fff]">
    <div
      class="font-NotoSansJP px-[15px] md:px-0"
      :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
    >
      <div
        class="mt-[35px] w-full text-[2.25rem] leading-[3.375rem] font-[500]"
      >
        事業内容<br v-if="MAIN_CONTENT_WIDTH === 375" />
        グループ企業
      </div>

      <div
        v-for="(item, index) in CompaniesData1"
        :key="index"
        class="mt-[30px] flex"
      >
        <div class="h-[16px] w-[16px] translate-y-[50%]">
          <img
            class="h-full w-full"
            :src="item.icon"
          />
        </div>
        <div class="ml-[10px]">
          <router-link to="/associated-company">
            <div class="text-[1rem] leading-normal font-[700]">
              {{ item.BigTitle }}
            </div>
          </router-link>
          <div class="mt-[10px] text-[.875rem] leading-normal font-[400]">
            <ul class="list-disc pl-[27px]">
              <li
                v-for="(content, i) in item.content"
                :key="i"
              >
                {{ content.list }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-[30px] h-[1px] w-full bg-[#6785C1]"></div>
      <div
        v-for="(item, index) in CompaniesData2"
        :key="index"
        class="mt-[30px] flex"
      >
        <div class="h-[16px] w-[16px] translate-y-[50%]">
          <img
            class="h-full w-full"
            :src="item.Icon2"
          />
        </div>
        <div class="ml-[10px]">
          <div class="text-[1rem] leading-normal font-[700]">
            {{ item.Title }}
          </div>
          <div class="mt-[10px] text-[.875rem] leading-normal font-[400]">
            <ul class="list-disc pl-[27px]">
              <li
                v-for="(content, i) in item.content"
                :key="i"
              >
                {{ content.list }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import { CompaniesData1, CompaniesData2 } from '../data/index'
</script>
<style lang=""></style>

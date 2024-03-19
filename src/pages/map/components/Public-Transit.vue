<template>
  <div
    class="font-NotoSansJP px-[15px] lg:px-0"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinIconTitle
      id="TrainTravel"
      data-aos="fade-up"
      :img="train"
      >電車で行く</ThePageMinIconTitle
    >
    <div
      class="mt-[60px] w-full flex flex-col lg:flex-row lg:justify-between"
      data-aos="fade-up"
    >
      <div class="order-1 w-full lg:order-0 lg:w-[calc(50%-30px)]">
        <TheIconList class="mt-[30px]"
          >東京メトロ「東西線」麹町駅出口徒歩3分</TheIconList
        >
        <!-- <TheIconList class="mt-[30px]"
          >東京メトロ「東西線」茅場町駅3番出口徒歩10分</TheIconList
        >
        <TheIconList class="mt-[30px]"
          >東京メトロ「日比谷線」茅場町駅1番出口徒歩8分</TheIconList
        >
        <TheIconList class="mt-[30px]"
          >東京メトロ「日比谷線」八丁堀駅A4番出口徒歩7分</TheIconList
        > -->
      </div>
      <div
        class="order-0 mt-[30px] h-[215px] w-full lg:order-1 lg:mt-0 lg:h-[380px] lg:w-[calc(50%-30px)] md:h-[360px]"
      >
        <iframe
          class="h-full w-full"
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1620.3529010152038!2d139.7355119776595!3d35.68424538708252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x60188c7ad8b67b87%3A0x4c9861eac48e98cf!2z5pel5pys5Lic5Lqs6YO95Y2D5Luj55Sw5Yy66bq555S6IDMgQ2hvbWUsIOm6ueeUuumnhQ!3m2!1d35.6847194!2d139.7373252!4m5!1s0x60188c6316c817e3%3A0x644a9eb6de817c33!2z5pel5pys44CSMTAyLTAwODMgVG9reW8sIENoaXlvZGEgQ2l0eSwgS8WNamltYWNoaSwgNC1jaMWNbWXiiJI04oiSNCDpurnnlLrjg5Hjgrfjg5XjgqPjg4Pjgq_jg5Pjg6sgNmY!3m2!1d35.6842793!2d139.7354129!5e0!3m2!1szh-CN!2shk!4v1710836460242!5m2!1szh-CN!2shk"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <!-- <ThePageMinIconTitle
      id="BusTravel"
      class="mt-[120px]"
      :img="bus"
      data-aos="fade-up"
      >バスで行く</ThePageMinIconTitle
    >
    <div
      class="mt-[60px] w-full flex flex-col lg:flex-row lg:justify-between"
      data-aos="fade-up"
    >
      <div
        class="order-1 mt-[30px] w-full lg:order-0 lg:mt-0 lg:w-[calc(50%-30px)]"
      >
        <div>
          <TheIconList>東京駅八重洲口から</TheIconList>
          <div
            class="text-deep_blue mt-[30px] pl-[60px] text-[1rem] leading-[2rem] font-[400]"
          >
            <p
              v-for="(item, index) in ListData1"
              :key="index"
              :class="index === 0 ? '' : 'mt-[10px]'"
            >
              {{ item.list }}
            </p>
          </div>
        </div>
        <div class="mt-[60px]">
          <TheIconList>東京駅八重洲口から</TheIconList>
          <div
            class="text-deep_blue mt-[30px] pl-[60px] text-[1rem] leading-[2rem] font-[400]"
          >
            <p
              v-for="(item, index) in ListData2"
              :key="index"
              :class="index === 0 ? '' : 'mt-[10px]'"
            >
              {{ item.list }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="order-0 mt-[30px] w-full lg:order-1 lg:mt-0 lg:w-[calc(50%-30px)]"
      >
        <img src="@/assets/images/map/bus_2.png" />
      </div>
    </div> -->

    <!-- <ThePageMinTitle
      id="free-shuttle-bus"
      class="mt-[60px]"
      >無料シャトルバス
    </ThePageMinTitle>
    <div class="flex flex-col">
      <div
        class="text-deep_blue order-1 mt-[30px] text-[1rem] font-[400] lg:order-0 lg:mt-[60px]"
      >
        <p>
          「東京ダイヤビルディング」には、無料シャトルバスが運行しております。
        </p>
        <p class="mt-[2rem]">運行ルートについて、下図を参照してください。</p>
      </div>
      <div
        class="order-0 mt-[60px] lg:order-1"
        data-aos="fade-up"
      >
        <img
          v-if="MAIN_CONTENT_WIDTH === 1200"
          src="@/assets/images/map/bus_timer_map.png"
        />
        <photo-provider v-else>
          <photo-consumer
            intro="無料シャトルバス"
            :src="BusTimerMap"
          >
            <img
              :src="BusTimerMap"
              class="view-box"
            />
          </photo-consumer>
        </photo-provider>
      </div>
    </div>
    <div
      class="mt-[30px]"
      data-aos="fade-up"
    >
      <div class="w-full flex text-[1rem] leading-[2rem] font-[400]">
        <div
          class="h-[32px] w-[40px] flex items-center justify-center bg-[#6785C1] text-[#fff]"
        >
          1
        </div>
        <div
          class="text-deep_blue ml-[12px] text-[1.5rem] leading-[1.875rem] font-[700]"
        >
          青ルート（茅場町駅・八丁堀駅巡回ルート）
        </div>
      </div>
      <div
        class="mt-[45px] w-full flex flex-col items-center lg:flex-row lg:justify-between"
      >
        <div class="w-full lg:w-[530px]">
          <table class="w-full">
            <thead>
              <tr>
                <th colspan="7">【1】東京ダイヤビルバス停</th>
              </tr>
            </thead>
            <tbody class="">
              <tr
                class="bg-[#6785C1] text-[1rem] leading-normal font-[400] text-[#fff]"
              >
                <td class="w-[50px]">時刻</td>
                <td colspan="6">平日</td>
              </tr>
              <tr
                v-for="(item, index) in BusTimerData1"
                :key="index"
              >
                <td class="td_1 text-cobalt_blue text-[1rem] font-[700]">
                  {{ item.title }}
                </td>
                <td
                  v-for="(items, i) in item.content"
                  :key="i"
                  class="text-cobalt_blue td_1 w-[80px] text-[1rem] font-[400]"
                  :class="items.list !== '' ? 'bg-[#DFE4F2]' : ''"
                >
                  {{ items.list }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="mt-[30px] h-[80px] w-[80px] rotate-90 lg:mt-0 lg:h-auto lg:rotate-0"
        >
          <img src="@/assets/images/map/arrow-right_1.svg" />
        </div>
        <div class="mt-[30px] w-full lg:mt-0 lg:w-[530px]">
          <table class="w-full">
            <thead>
              <tr>
                <th colspan="7">【2】茅場町駅バス停</th>
              </tr>
            </thead>
            <tbody class="">
              <tr
                class="bg-[#6785C1] text-[1rem] leading-normal font-[400] text-[#fff]"
              >
                <td class="w-[50px]">時刻</td>
                <td colspan="6">平日</td>
              </tr>
              <tr
                v-for="(item, index) in BusTimerData2"
                :key="index"
              >
                <td class="td_1 text-cobalt_blue text-[1rem] font-[700]">
                  {{ item.title }}
                </td>
                <td
                  v-for="(items, i) in item.content"
                  :key="i"
                  class="td_1 text-cobalt_blue w-[80px] text-[1rem] font-[400]"
                  :class="items.list !== '' ? 'bg-[#DFE4F2]' : ''"
                >
                  {{ items.list }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      class="mt-[60px]"
      data-aos="fade-up"
    >
      <div class="w-full flex text-[1rem] leading-[2rem] font-[400]">
        <div
          class="h-[32px] w-[40px] flex items-center justify-center bg-[#D2331D] text-[#fff]"
        >
          2
        </div>
        <div
          class="text-deep_blue ml-[12px] text-[1.5rem] leading-[1.875rem] font-[700]"
        >
          赤ルート（八重洲地下街入口・日本橋駅・茅場町巡回ルート）
        </div>
      </div>
      <div
        class="mt-[45px] w-full flex flex-col items-center lg:flex-row lg:justify-between"
      >
        <div class="w-full lg:w-[306px]">
          <table class="w-full">
            <thead>
              <tr>
                <th colspan="7">【1】東京ダイヤビルバス停</th>
              </tr>
            </thead>
            <tbody class="">
              <tr
                class="bg-[#D2331D] text-[1rem] leading-normal font-[400] text-[#fff]"
              >
                <td class="w-[50px]">時刻</td>
                <td colspan="3">平日</td>
              </tr>
              <tr
                v-for="(item, index) in BusTimerData3"
                :key="index"
              >
                <td class="text-cobalt_blue td_2 text-[1rem] font-[700]">
                  {{ item.title }}
                </td>
                <td
                  v-for="(items, i) in item.content"
                  :key="i"
                  class="text-cobalt_blue td_2 w-[128px] text-[1rem] font-[400]"
                  :class="items.list !== '' ? 'bg-[#FFF2F0]' : ''"
                >
                  {{ items.list }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="mt-[30px] h-[80px] w-[80px] rotate-90 lg:mt-0 lg:h-auto lg:rotate-0"
        >
          <img src="@/assets/images/map/arrow-right_2.svg" />
        </div>
        <div class="mt-[30px] w-full lg:mt-0 lg:w-[306px]">
          <table class="w-full">
            <thead>
              <tr>
                <th colspan="7">【2】日本橋バス停</th>
              </tr>
            </thead>
            <tbody class="">
              <tr
                class="bg-[#D2331D] text-[1rem] leading-normal font-[400] text-[#fff]"
              >
                <td class="w-[50px]">時刻</td>
                <td colspan="3">平日</td>
              </tr>
              <tr
                v-for="(item, index) in BusTimerData4"
                :key="index"
              >
                <td class="td_2 text-cobalt_blue text-[1rem] font-[700]">
                  {{ item.title }}
                </td>
                <td
                  v-for="(items, i) in item.content"
                  :key="i"
                  class="text-cobalt_blue td_2 w-[128px] text-[1rem] font-[400]"
                  :class="items.list !== '' ? 'bg-[#FFF2F0]' : ''"
                >
                  {{ items.list }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="mt-[30px] h-[80px] w-[80px] rotate-90 lg:mt-0 lg:h-auto lg:rotate-0"
        >
          <img src="@/assets/images/map/arrow-right_2.svg" />
        </div>
        <div class="mt-[30px] w-full lg:mt-0 lg:w-[306px]">
          <table class="w-full">
            <thead>
              <tr>
                <th colspan="7">【3】茅場町駅バス停</th>
              </tr>
            </thead>
            <tbody class="">
              <tr
                class="bg-[#D2331D] text-[1rem] leading-normal font-[400] text-[#fff]"
              >
                <td class="w-[50px]">時刻</td>
                <td colspan="3">平日</td>
              </tr>
              <tr
                v-for="(item, index) in BusTimerData5"
                :key="index"
              >
                <td class="td_2 text-cobalt_blue text-[1rem] font-[700]">
                  {{ item.title }}
                </td>
                <td
                  v-for="(items, i) in item.content"
                  :key="i"
                  class="text-cobalt_blue td_2 w-[128px] text-[1rem] font-[400]"
                  :class="items.list !== '' ? 'bg-[#FFF2F0]' : ''"
                >
                  {{ items.list }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-up"
      class="text-deep_blue font-[400 mt-[30px] text-[1rem] leading-normal"
    >
      <p>※土曜・日曜・祝日は、運休といたします。</p>
      <p class="mt-[30px]">※運行ダイヤは、予告なく変更することがございます。</p>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import train from '@/assets/images/map/train_1.svg'
import bus from '@/assets/images/map/bus_1.svg'
import BusTimerMap from '@/assets/images/map/bus_timer_map.png'

import { ListType } from '../types/index'
import {
  BusTimerData1,
  BusTimerData2,
  BusTimerData3,
  BusTimerData4,
  BusTimerData5
} from '../data/index'

const ListData1 = ref<ListType[]>([
  { list: '東16系統「東京ビッグサイト」行き' },
  { list: '東16系統「深川車庫前」行き' },
  { list: '東16系統「豊洲駅前」行き' },
  { list: 'または　東12系統「晴海埠頭」行き' },
  { list: 'のバス乗車　「住友ツインビル前」停留所(八重洲通り)より徒歩３分' }
])

const ListData2 = ref<ListType[]>([
  { list: '東16系統「住友ツインビル前」行き' },
  { list: 'のバス乗車　「住友ツインビル前」停留所より徒歩１分' }
])
</script>
<style scoped>
td {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}
.td_1 {
  border: solid 1px #6785c1;
}
.td_2 {
  border: solid 1px #d2331d;
}
</style>

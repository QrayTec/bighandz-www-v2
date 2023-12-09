<template>
  <div
    class="font-NotoSansJP"
    :style="{ width: MAIN_CONTENT_WIDTH + 'px' }"
  >
    <ThePageMinIconTitle :img="train">電車で行く</ThePageMinIconTitle>
    <div class="mt-[60px] w-full flex justify-between">
      <div class="w-[calc(50%-30px)]">
        <TheIconList class="mt-[30px]"
          >東京メトロ「東西線」茅場町駅3番出口徒歩10分</TheIconList
        >
        <TheIconList class="mt-[30px]"
          >東京メトロ「日比谷線」茅場町駅1番出口徒歩8分</TheIconList
        >
        <TheIconList class="mt-[30px]"
          >東京メトロ「日比谷線」八丁堀駅A4番出口徒歩7分</TheIconList
        >
      </div>
      <div class="w-[50%]">
        <img
          src="@/assets/images/map/Map-2.png"
          alt=""
        />
      </div>
    </div>
    <ThePageMinIconTitle
      class="mt-[120px]"
      :img="bus"
      >バスで行く</ThePageMinIconTitle
    >
    <div class="mt-[60px] w-full flex justify-between">
      <div class="w-[calc(50%-30px)]">
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
      <div class="w-[50%]">
        <img
          src="@/assets/images/map/bus_2.png"
          alt=""
        />
      </div>
    </div>

    <ThePageMinIconTitle
      class="mt-[120px]"
      :img="BusTimer"
      >「東京ダイヤビルディング」無料シャトルバス運行ルート</ThePageMinIconTitle
    >
    <div class="mt-[60px]">
      <img
        src="@/assets/images/map/bus_timer_map.png"
        alt=""
      />
    </div>
    <div class="mt-[60px]">
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
      <div class="mt-[45px] w-full flex items-center justify-between">
        <div class="w-[530px]">
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
        <div class="w-[80px]">
          <img
            src="@/assets/images/map/arrow-right_1.svg"
            alt=""
          />
        </div>
        <div class="w-[530px]">
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
    <div class="mt-[60px]">
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
      <div class="mt-[45px] w-full flex items-center justify-between">
        <div class="w-[306px]">
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
        <div class="w-[80px]">
          <img
            src="@/assets/images/map/arrow-right_2.svg"
            alt=""
          />
        </div>
        <div class="w-[306px]">
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
        <div class="w-[80px]">
          <img
            src="@/assets/images/map/arrow-right_2.svg"
            alt=""
          />
        </div>
        <div class="w-[306px]">
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
    <div class="text-deep_blue font-[400 mt-[30px] text-[1rem] leading-normal">
      <p>※土曜・日曜・祝日は、運休といたします。</p>
      <p class="mt-[30px]">※運行ダイヤは、予告なく変更することがございます。</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MAIN_CONTENT_WIDTH } from '@/config/UI'
import train from '@/assets/images/map/train_1.svg'
import bus from '@/assets/images/map/bus_1.svg'
import BusTimer from '@/assets/images/map/bus_timer.svg'

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

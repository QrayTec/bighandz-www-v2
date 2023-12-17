<template>
  <div
    class="group relative"
    :class="Data.style"
    @mouseenter="infoTrue"
    @mouseleave="infoFalse"
  >
    <img
      class="absolute left-0 top-0 h-full w-full object-cover"
      :src="Data.background_image"
      alt=""
    />
    <div
      class="absolute left-0 top-0 h-full w-full bg-[#2d2d2d] bg-opacity-50"
    ></div>
    <div
      class="relative h-full w-full flex flex-wrap items-center justify-center text-white group-hover:block group-hover:bg-[#071027] group-hover:bg-opacity-60 group-hover:p-[15px]"
    >
      <div
        v-show="!infoFlag"
        class="flex flex-wrap items-center justify-center px-[50px] group-hover:flex-nowrap group-hover:px-0"
      >
        <div class="w-full flex items-center justify-center">
          <img
            :src="Data.title_icon"
            alt=""
            srcset=""
          />
        </div>
        <p
          class="font-NotoSansJP mt-[10px] text-center text-[1.5rem] leading-[1.375rem] font-[500] group-hover:ml-[10px] group-hover:mt-0"
        >
          {{ Data.title_1 }}<br v-if="Data.title_2" />
          {{ Data.title_2 }}
        </p>
      </div>
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <div
          v-show="infoFlag"
          class="hidden h-full w-full px-[40px] group-hover:block group-hover:px-0"
        >
          <router-link
            class="h-full w-full flex flex-wrap items-center justify-start"
            :to="Data.link"
          >
            <div
              class="flex flex-wrap items-center justify-start px-[50px] group-hover:flex-nowrap group-hover:px-0"
            >
              <img
                :src="Data.title_icon"
                alt=""
                srcset=""
              />
              <p
                class="font-NotoSansJP mt-[10px] text-[1.5rem] leading-[1.375rem] font-[500] group-hover:ml-[10px] group-hover:mt-0"
              >
                {{ Data.title_1 }}<br v-if="Data.title_2" />
                {{ Data.title_2 }}
              </p>
            </div>
            <div
              data-aos="fade-up"
              class="font-NotoSansJP mt-[15px] text-[20px] leading-[24px] font-[400]"
            >
              <p>{{ Data.info_content_1 }}</p>
              <p>{{ Data.info_content_2 }}</p>
            </div>
            <div
              data-aos="fade-up"
              class="font-NotoSansJP mt-[1rem] flex text-[14px] font-[400]"
            >
              <p>詳細はこちら</p>
              <img
                class="ml-[20px]"
                src="@/assets/images/index_Business/link.svg"
              />
            </div>
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { BusinessItemType } from '../types/index'

const props = defineProps<{ businessitemdata: BusinessItemType }>()

const Data = ref<BusinessItemType>(props.businessitemdata)
const infoFlag = ref<boolean>(false)

const infoTrue = () => {
  infoFlag.value = true
}
const infoFalse = () => {
  infoFlag.value = false
}
</script>
<style></style>

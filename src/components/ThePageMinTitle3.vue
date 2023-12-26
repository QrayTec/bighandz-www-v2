<template>
  <div class="font-NotoSansJP w-full">
    <div
      class="flex items-center justify-between text-[1.7rem] font-[400] lg:text-[2.25rem]"
      data-aos="fade-up"
    >
      <div class="flex items-center">
        <div class="h-[32px] w-[5px] bg-[#F6C103]"></div>
        <div class="ml-[10px]">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="mt-[12px] h-[1px] w-full bg-[#D8D8D8]"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang=""></style>

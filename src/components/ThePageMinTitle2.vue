<template>
  <div class="font-Shippori relative inline-block bg-white px-[30px] py-[20px]">
    <div
      class="text-deep_blue relative z-2 text-[2.5rem] leading-[2.75rem] font-[700]"
    >
      <slot></slot>
    </div>
    <div
      class="bg-primarygradient absolute bottom-0 right-0 z-0 h-[50%] w-[calc(100%-60px)]"
    ></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang=""></style>

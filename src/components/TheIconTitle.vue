<template>
  <div>
    <li class="w-full flex">
      <div class="h-[41px] w-[41px]">
        <img
          class="h-full w-full"
          src="@/assets/images/IconTitle/icon.svg"
          alt=""
        />
      </div>
      <p
        class="text-cobalt_blue ml-[10px] w-full flex items-center text-[1.5rem] leading-[30px] font-[700]"
      >
        <slot></slot>
      </p>
    </li>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>

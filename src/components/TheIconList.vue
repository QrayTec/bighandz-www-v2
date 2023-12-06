<template>
  <div>
    <li class="w-full flex">
      <div class="mt-[8px] h-full min-w-[16px]">
        <img
          class="h-16px w-[16px]"
          src="@/assets/images/company_profile/rhombic.svg"
          alt=""
        />
      </div>
      <p class="text-deep_blue ml-[10px] text-[1rem] leading-[2rem] font-[400]">
        <slot></slot>
      </p>
    </li>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>

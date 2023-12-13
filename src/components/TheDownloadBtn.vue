<template>
  <div class="inline-block items-center bg-[#597be5] px-[30px] py-[20px]">
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      class="w-full flex justify-between decoration-none"
    >
      <img
        src="@/assets/images/download.svg"
        alt=""
        srcset=""
      />
      <p
        class="font-NotoSansJP ml-[16px] text-[20px] leading-none font-[400] not-italic text-[#fff]"
      >
        <slot></slot>
      </p>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>

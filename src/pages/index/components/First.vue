<template>
  <div
    data-aos="fade-in"
    class="relative min-h-[100vh] w-full flex justify-center"
  >
    <div class="relative mt-[320px] w-[1200px]">
      <div
        class="absolute left-[-160px] top-[-120px] h-[531px] w-[531px] fill-[#00dbff33] blur-[100px]"
      >
        <img
          class="h-full w-full"
          src="/src/assets/images/index_main/filters.svg"
          alt=""
        />
      </div>
      <div
        class="absolute left-[-264px] top-[338px] h-[152px] w-[52px] animate-[moveContainer_3s_infinite_alternate]"
      >
        <div
          class="font-NotoSansJP h-[21px] w-[52px] rotate-[-90deg] text-[14px] font-[400] text-white"
        >
          SCROLL
        </div>
        <div
          class="Scroll_Line mx-auto mt-[20px] h-[80px] w-[1px] flex-shrink-0 translate-y-[50%]"
        ></div>
      </div>
      <div class="absolute top-[120px]">
        <div class="h-[77px] w-[1100px] flex translate-x-[-30px]">
          <img
            class="h-full"
            src="/src/assets/images/index_main/speed_1.png"
            alt=""
          />
          <div class="mx-[20px] h-full w-[5px] bg-white"></div>
          <img
            class="h-full"
            src="/src/assets/images/index_main/speed_2.png"
            alt=""
          />
        </div>
        <div class="mt-[123.5px] w-[800px]">
          <div
            class="font-NotoSansJP h-[60px] w-[751px] flex items-center bg-[#597BE5] py-[3px] p-r-[12px] text-[36px] leading-none font-[700] not-italic text-white"
          >
            「IT×ビジネス×教育」× SPEED ＝ POWER
          </div>
          <div
            class="font-NotoSansJP mt-[60px] text-[20px] font-[400] text-white"
          >
            <p>
              ITからビジネスへ、ビジネスからITへ、教育からIT・ビジネスへと三位一体でスピーディに社会の発展に貢献しつづけます。
            </p>
          </div>
        </div>
      </div>
      <div class="absolute bottom-[120px] right-[120px] h-[120px] w-[120px]">
        <img
          src="/src/assets/images/index_main/25th.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.Scroll_Line {
  background: linear-gradient(
    297deg,
    rgba(255, 255, 255, 0) -33.34%,
    #fff 133.34%
  );
}
</style>

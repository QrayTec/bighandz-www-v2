<template>
  <div class="Index_First">
    <div class="Index_First_Content">
      <div class="Index_First_Filters">
        <img
          src="/src/assets/images/index_main/filters.svg"
          alt=""
        />
      </div>
      <div class="Index_Scroll">
        <div class="Scroll_Text">SCROLL</div>
        <div class="Scroll_Line"></div>
      </div>
      <div class="Index_Image_title">
        <img
          src="/src/assets/images/index_main/pic_Speed_is_the_Power.png"
          alt=""
        />
      </div>
      <div class="Index_Text_title">常に先へ</div>
      <div class="Index_Text_Content">
        <p>顧客様より先に考えること | 顧客様より先に行動すること</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.Index_First {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
}
.Index_First_Filters {
  position: absolute;
  left: -160px;
  top: -120px;
  width: 531px;
  height: 531px;
  fill: rgba(0, 219, 255, 0.2);
  filter: blur(100px);
}
.Index_First_Content {
  width: 1200px;
  margin-top: 320px;
  position: relative;
}
.Index_Image_title {
  width: 1110px;
  height: 77px;
  transform: translateX(-30px);
}
.Index_Image_title img {
  width: 100%;
  height: 100%;
}
.Index_Text_title {
  width: 192px;
  height: 70px;
  margin-top: 120px;
  color: #fff;
  font-family: Noto Sans JP;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 69.504px; /* 144.8% */
}
.Index_Text_Content {
  display: flex;
  width: 627px;
  height: 35px;
  padding: 6px 20px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  background: #597be5;
}
.Index_Text_Content p {
  color: #fff;
  font-family: Noto Sans JP;
  font-size: 22.6px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.Index_Scroll {
  position: absolute;
  left: -264px;
  top: 338px;
  width: 52px;
  height: 152px;
  animation: moveContainer 3s infinite alternate;
}

@keyframes moveContainer {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30%); /* 根据需要调整移动距离 */
  }
}

.Scroll_Text {
  color: #fff;
  width: 52px;
  height: 21px;
  transform: rotate(-90deg) translateX(-50%);
}

.Scroll_Line {
  width: 1px;
  height: 80px;
  flex-shrink: 0;
  background: linear-gradient(
    297deg,
    rgba(255, 255, 255, 0) -33.34%,
    #fff 133.34%
  );
  margin: 20px auto 0;
  transform: translateY(50%);
}
</style>

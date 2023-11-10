<template>
  <div class="Download_btn">
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="@/assets/images/download.svg"
        alt=""
        srcset=""
      />
      <p class="download_text m_l_16">テンプレートのダウンロード</p>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.Download_btn {
  width: calc(240px + 60px);
  display: flex;
  padding: 20px 30px;
  align-items: center;
  background: var(---, #597be5);
}
.download_text {
  color: #fff;
  font-feature-settings: 'clig' off, 'liga' off;

  /* 正文 */
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>

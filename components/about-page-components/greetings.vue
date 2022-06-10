<template>
  <div class="greetings-wrapper">
    <h1>{{ $t("about.aboutTitle") }}</h1>
  </div>
</template>

<style lang="scss">
.greetings-wrapper {
  width: 100%;
  height: 350px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/about-page/greeting-bg.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px !important;
    font-weight: 900 !important;
    color: #ffffff;
  }
}
</style>
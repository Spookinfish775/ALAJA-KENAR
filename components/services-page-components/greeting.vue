<template>
  <div class="services-greeting-wrapper">
    <h1>{{ $t("servicesPage.greetingTitle") }}</h1>
  </div>
</template>


<style lang="scss">
.services-greeting-wrapper {
  width: 100%;
  height: 350px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/services-page/greeting-bg.jpg") center no-repeat;
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
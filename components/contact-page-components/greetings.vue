<template>
  <div class="contact-greeting-wrapper">
    <h1>{{ $t("contact.greetingTitle") }}</h1>
  </div>
</template>

<style lang="scss">
.contact-greeting-wrapper {
  width: 100%;
  height: 350px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/contact-page/greeting-bg.jpg") center no-repeat;
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
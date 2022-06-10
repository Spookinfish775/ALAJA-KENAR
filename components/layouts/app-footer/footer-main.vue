<template>
  <div class="footer-main-wrapper">
    <h1 class="main-title">
      <!-- {{ $t("footer.footerMain.mainTitle") }} -->
      {{ mainTitle }}
    </h1>
    <p class="main-description">
      <!-- {{ $t("footer.footerMain.mainDescription") }} -->
      {{ mainDescription }}
    </p>
    <div class="button-group">
      <v-btn depressed class="rounded-l-pill btn-contact btn" dark>
        {{ $t("footer.footerMain.mainButtonContact") }}
      </v-btn>
      <v-btn depressed class="rounded-r-pill btn-get btn" dark @click="test">
        {{ $t("footer.footerMain.mainButtonGet") }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mainTitle", "mainDescription"],
  methods: {
    test() {
      console.log($nuxt.$route.path);
    },
  },
};
</script>

<style lang="scss">
.footer-main-wrapper {
  width: 100%;
  height: 290px;
  background: linear-gradient(
      90deg,
      rgba(81, 123, 214, 0.8) 0%,
      rgba(73, 158, 27, 0.6) 53%,
      rgba(47, 180, 54, 0.8) 100%
    ),
    url("/images/footer/footer-background.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main-title {
    color: #ffffff;
  }
  .main-description {
    color: #ffffff;
  }
  .button-group {
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      width: 165px;
      height: 57px !important;
    }
    .btn-contact {
      background-color: #0b6a95 !important;
    }
    .btn-get {
      background-color: $button-main-color !important;
    }
  }
}
</style>
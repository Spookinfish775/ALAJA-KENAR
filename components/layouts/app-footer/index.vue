<template>
  <div class="footer-wrapper">
    <!-- <FooterMain :mainTitle="123"></FooterMain> -->
    <FooterInfo />
    <FooterDate />
  </div>
</template>

<script>
// import FooterMain from "./footer-main.vue";
import FooterInfo from "./footer-info.vue";
import FooterDate from "./footer-date.vue";
export default {
  components: {
    // FooterMain,
    FooterInfo,
    FooterDate,
  },
  data() {
    return {
      footerMain: {},
    };
  },
};
</script>

<style lang="scss">
.footer-wrapper {
  width: 100%;
}
</style>
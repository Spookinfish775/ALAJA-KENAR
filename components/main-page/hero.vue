<template>
  <div class="main-page-hero">
    <v-parallax :height="imageHeight" src="/images/main-page/hero.jpeg">
      <div class="contain">
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="500"
          class="blue-box-group"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="2000"
            class="logo"
          >
            <img src="/logo3.webp" alt="logo" />
          </div>
          <h1 data-aos-delay="900" data-aos="fade-up" data-aos-duration="2000">
            {{ $t("heroPage.hero.title") }}
          </h1>
          <p data-aos-delay="1100" data-aos="fade-up" data-aos-duration="2000">
            {{ $t("heroPage.hero.subTitle") }}
          </p>
          <nuxt-link to="/contact-us">
            <v-btn
              data-aos="fade-left"
              data-aos-delay="1300"
              data-aos-duration="2000"
              large
              style="text-transform: none"
              color="#1c89ba"
              class="main-page-hero-contact-btn"
              dark
              depressed
            >
              {{ $t("buttons.contactUs") }}
              <span>&#10148;</span>
            </v-btn>
          </nuxt-link>
        </div>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageHeight: 590,
    };
  },
};
</script>

<style lang="scss">
.main-page-hero {
  width: 100%;
  height: 590px;
  .contain {
    width: $container-lg;
    margin: 0 auto;
  }
  .blue-box-group {
    width: 680px;
    height: 445px;
    background-color: rgb(255, 255, 255);
    padding: 40px;
    @include max($medium) {
      width: 290px;
      height: 385px;
      padding: 30px 15px;
      .main-page-hero-contact-btn {
        margin: 40px 0 0 0;
      }
    }
    .logo {
      img {
        width: 75px;
      }
    }
    h1 {
      font-size: 50px;
      word-break: break-word;
      color: rgb(10, 43, 73);
      font-family: "Poppins", "Roboto";
      @include max($medium) {
        font-size: 22px;
      }
    }
    p {
      color: rgb(10, 43, 73);
      font-weight: 500;
      @include max($medium) {
        margin: 10px 0 0 0;
      }
    }
  }
}
</style>
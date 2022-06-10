<template>
  <div class="main-page-description">
    <div class="contain">
      <h4>{{ $t("heroPage.description.title") }}</h4>
      <h1 v-html="$t('heroPage.description.subTitle')"></h1>
      <div class="some-text-description">
        <div class="description-with-photo">
          <div class="text-padding">
            <p>
              {{ $t("heroPage.description.paragraph1") }}
            </p>
            <p>
              {{ $t("heroPage.description.paragraph2") }}
            </p>
            <p>
              {{ $t("heroPage.description.paragraph3") }}
            </p>
          </div>
          <img
            src="/images/home-page/generalTradingCompany.jpeg"
            alt="generalTradingCompany"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-page-description {
  .contain {
    width: $container-lg;
    margin: 0 auto;
    @include max($middle) {
      width: 100%;
      padding: 30px 10px;
    }
    padding: 30px 0;
    h4 {
      color: #1c89ba;
      margin: 0 auto;
      padding: 0 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      @include max($medium) {
        padding: 0 10px;
        text-align: center;
      }
      &::before {
        content: "";
        width: 37px;
        height: 3px;
        display: block;
        background-color: #1c89ba;
        margin: 0 10px 0 0;
      }
      &::after {
        display: block;
        background-color: #1c89ba;
        margin: 0 0 0 10px;
        content: "";
        width: 37px;
        height: 3px;
      }
    }
    h1 {
      margin: 10px 0 0 0;
      font-family: "Poppins", "Roboto";
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include max($medium) {
        text-align: center;
      }
      b {
        color: #67b12e;
      }
    }
    .some-text-description {
      margin: 30px 0 0 0;
      p {
        font-size: 17px;
      }
      .text-padding {
        padding: 0 70px;
        @include max($middle) {
          padding: 0;
        }
      }
      .description-with-photo {
        display: flex;
        @include max($medium) {
          display: block;
        }
        img {
          width: 370px;

          @include max($medium) {
            width: 330px;
            height: 185px;
            display: block;
            margin: 15px auto;
          }
        }
      }
    }
  }
}
</style>
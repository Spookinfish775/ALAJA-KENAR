<template>
  <div class="servicesTitleText">
    <div class="contain">
      <h1 class="title">{{ $t("servicesPage.titleText") }}</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.servicesTitleText {
  width: 100%;
  padding: 2% 0 0 0;
  display: flex;
  justify-content: center;
  .contain {
    width: $container-lg;
    text-align: center;
    .title {
      font-size: 36px !important;
      font-weight: 800 !important;
      line-height: 44px !important;
    }
  }
  @include max($medium-x) {
    .contain {
      text-align: left;
      padding: 2%;
      .title {
        font-size: 30px !important;
      }
    }
  }
}
</style>
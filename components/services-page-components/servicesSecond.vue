<template>
  <div class="service-second-wrapper">
    <div class="contain">
      <div
        class="image-content"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <img src="/images/services-page/manpowerService.jpeg" alt="" />
        <p>{{ $t("servicesPage.secondServiceTitle.headerSide") }}</p>
      </div>
      <div class="right-content">
        <div
          class="header"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <div class="description">
            <p>{{ $t("servicesPage.secondServiceTitle.headerDescription") }}</p>
            <div class="line"></div>
          </div>
          <h1 class="title">
            {{ $t("servicesPage.secondServiceTitle.headerTitle") }}
          </h1>
        </div>
        <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          {{ $t("servicesPage.secondServiceContent.textOne") }}
        </p>
      </div>
      <div class="bottom-content">
        <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          {{ $t("servicesPage.secondServiceContent.textTwo") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.service-second-wrapper {
  width: 100%;
  padding: 3% 0;
  display: flex;
  justify-content: center;
  .contain {
    width: $container-lg;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .image-content {
      width: 50%;
      padding: 1.5% 1.5% 1.5% 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
        box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.6);
      }
      p {
        width: 90%;
        text-align: center;
        font-size: 23px;
        font-weight: 400;
        margin: 7% 0 0 0;
      }
    }
    .right-content {
      width: 50%;
      padding: 1.5% 0 1.5% 1.5%;
      .header {
        .description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .line {
            width: 45px;
            height: 3.5px;
            background-color: #064d6d;
          }
          p {
            margin: 0 3% 0 0;
            font-weight: 600;
          }
        }
        .title {
          text-align: right !important;
          margin-top: 2%;
          width: 90%;
          font-size: 36px !important;
          font-weight: 800 !important;
          line-height: 44px !important;
        }
      }
      p {
        margin: 4% 0 0 0;
        font-size: 18px;
        line-height: 34px;
      }
    }
    .bottom-content {
      width: 100%;
      padding: 1.5% 0 0 0;
      p {
        font-size: 18px;
        line-height: 34px;
        margin: 2% 0 0 0;
      }
    }
  }
  @include max($middle) {
    .contain {
      width: 100%;
      padding: 2%;
    }
  }
  @include max($medium-x) {
    .contain {
      .right-content {
        margin-top: 4%;
        width: 100%;
        padding: 0;
      }
      .image-content {
        width: 100%;
        padding: 0;

        p {
          margin: 4% 0 0 0;
        }
      }
    }
  }
}
</style>
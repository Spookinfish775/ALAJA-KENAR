<template>
  <div class="about-content-wrapper">
    <div class="contain">
      <div class="left-content">
        <div
          class="header"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <p class="title">{{ $t("about.aboutTitle") }}</p>
          <h1 class="description">
            {{ $t("about.content.aboutTitle") }}
          </h1>
        </div>
        <p
          class="mt-10"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          {{ $t("about.content.aboutTextOne") }}
        </p>
        <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          {{ $t("about.content.aboutTextTwo") }}
        </p>
      </div>
      <div
        class="image-content"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <img src="/images/about-page/content-img.jpg" alt="" />
        <p>{{ $t("about.content.aboutDescription") }}</p>
      </div>
      <div
        class="bottom-content"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <p>{{ $t("about.content.aboutTextThree") }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about-content-wrapper {
  margin-top: 3%;
  width: 100%;
  display: flex;
  justify-content: center;
  .contain {
    width: $container-lg;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .left-content {
      width: 50%;
      .header {
        display: flex;
        position: relative;
        justify-content: flex-start;
        align-items: center;
        .title {
          display: inline-block;
          font-size: 18px;
          letter-spacing: 0.3em !important;
          color: #666666;
          margin: 0;
          position: absolute;
          left: -8%;
          transform: rotate(-90deg);
          display: flex;
          flex-direction: column;
          &::after {
            content: "";
            width: 100%;
            margin-top: 10px;
            height: 4px !important;
            background-color: #064d6d;
          }
        }
        .description {
          margin-left: 10%;
          font-size: 36px !important;
          font-weight: 900 !important;
          line-height: 44px !important;
          width: 70% !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      p {
        margin: 3% 0 0 0;
        font-size: 18px;
        line-height: 34px;
      }
    }
    .image-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 90%;
        box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.6);
      }
      p {
        margin-top: 8%;
        width: 90%;
        font-size: 23px;
        font-weight: 400;
        text-align: center;
      }
    }
    .bottom-content {
      width: 100%;
      p {
        margin: 3% 0 0 0;
        font-size: 18px;
        line-height: 34px;
      }
    }
  }
  @include max($middle) {
    .contain {
      width: 100%;
      padding: 0 2%;
      .left-content {
        width: 60%;
        .header {
          .title {
            font-size: 16px !important;
            letter-spacing: 0.1em !important;
            left: -3%;
          }
          .description {
            font-size: 29px !important;
            width: 80% !important;
            font-weight: 700 !important;
            margin-left: 16%;
          }
        }
        p {
          margin-top: 4%;
          font-size: 16px;
          line-height: 26px;
        }
      }
      .image-content {
        width: 40%;
        img {
          width: 85%;
          margin-top: 3%;
        }
      }
      .bottom-content {
        p {
          font-size: 16px;
          line-height: 26px;
          margin: 1.5% 0 0 0;
        }
      }
    }
  }
  @include max($medium) {
    .contain {
      .left-content {
        width: 100%;
        .header {
          .description {
            width: 90% !important;
            margin-left: 18%;
            font-size: 24px !important;
          }
        }
        p {
          margin-top: 3%;
        }
      }
      .image-content {
        width: 100%;
        img {
          width: 100%;
          margin-top: 6%;
        }
        p {
          margin-top: 4%;
        }
      }
      .bottom-content {
        p {
          margin-top: 3%;
        }
      }
    }
  }
}
</style>
<template>
  <div class="facts-main-wrapper">
    <div class="contain">
      <div class="picture-block">
        <div class="image">
          <img src="/images/home-page/facts-picture.jpg" alt="" />
        </div>
      </div>
      <div class="text-block">
        <h1 class="title" v-html="$t('facts.factsTitle')"></h1>
        <p class="description">{{ $t("facts.factsDescription") }}</p>
        <div class="counter-block">
          <div class="count">
            <div class="count-number-block">
              <h1 class="count-number-one">0</h1>
              <span>+</span>
            </div>
            <h3>{{ $t("facts.factsClients") }}</h3>
            <div class="line"></div>
          </div>
          <div class="count">
            <div class="count-number-block">
              <h1 class="count-number-two">0</h1>
              <span>+</span>
            </div>
            <h3>{{ $t("facts.factsPartners") }}</h3>
            <div class="line"></div>
          </div>
          <div class="count">
            <div class="count-number-block">
              <h1 class="count-number-three">0</h1>
              <span>+</span>
            </div>
            <h3>{{ $t("facts.factsTeam") }}</h3>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    animateCounterOne() {
      this.$anime({
        targets: ".count-number-one",
        textContent: [0, 950],
        round: 1,
        easing: "easeInOutQuad",
        duration: 2000,
      });
    },
    animateCounterTwo() {
      this.$anime({
        targets: ".count-number-two",
        textContent: [0, 30],
        round: 1,
        easing: "easeInOutQuad",
        duration: 2000,
      });
    },
    animateCounterThree() {
      this.$anime({
        targets: ".count-number-three",
        textContent: [0, 18],
        round: 1,
        easing: "easeInOutQuad",
        duration: 2000,
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.animateCounterOne();
      this.animateCounterTwo();
      this.animateCounterThree();
    }, 600);
  },
};
</script>

<style lang="scss">
.facts-main-wrapper {
  width: 100%;
  height: 340px;
  background: url("/images/home-page/down-background.png") center no-repeat,
    #ebebeb;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .contain {
    width: $container-lg;
    height: 90%;
    display: flex;
    justify-content: space-between;
    .picture-block {
      width: 48%;
      height: 100%;
      display: flex;
      justify-content: center;
      .image {
        width: 100%;
        img {
          width: 93%;
        }
      }
    }
    .text-block {
      width: 48%;
      height: 100%;
      .title {
        font-size: 28px !important;
        font-weight: 900;
        span {
          color: $first-main-color;
        }
      }
      .description {
        font-size: 17px;
        margin: 5% 0 0 0;
      }
      .counter-block {
        height: 50%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .count {
          height: 100%;
          display: flex;
          flex-direction: column;
          .count-number-block {
            display: flex;
            h1 {
              font-size: 48px !important;
              color: $first-main-color;
            }
            span {
              font-size: 48px !important;
              color: #184372;
            }
          }
          h3 {
            font-size: 20px !important;
          }
          .line {
            width: 24px;
            height: 3px;
            margin-top: 5%;
            background-color: $first-main-color;
          }
        }
      }
    }
  }
  @include max($middle) {
    .contain {
      width: 100%;
      padding: 0 3%;
      .picture-block {
        width: 48%;
        height: 100%;
        display: flex;
        justify-content: center;
        .image {
          width: 100%;
          img {
            width: 93%;
          }
        }
      }
    }
  }
  @include max($medium-x) {
    height: 670px;
    padding: 1%;
    .contain {
      height: 100%;
      flex-direction: column;
      align-items: center;
      .picture-block {
        width: 60%;
        height: 35%;
        .image {
          img {
            width: 100%;
          }
        }
      }
      .text-block {
        width: 100%;
        height: 50%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .description {
          margin: 2% 0 0 0;
        }
        .counter-block {
          margin: 0;
          margin-top: 5%;
          height: 50%;
          width: 80%;
          .count {
            height: 100%;
            align-items: center;
            .line {
              width: 40px;
              margin-top: 15%;
            }
          }
        }
      }
    }
  }
  @include max($medium) {
    .contain {
      padding: 0 4%;
      .picture-block {
        align-self: flex-start;
        height: 60%;
        width: 100%;
      }
      .text-block {
        height: 40%;
        .title {
          font-size: 24px !important;
          font-weight: 900;
          span {
            color: $first-main-color;
          }
        }
        .description {
          font-size: 16px;
          margin: 1% 0 0 0;
        }
        .counter-block {
          margin: 0;
          height: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          .count {
            height: 100%;
            display: flex;
            flex-direction: column;
            .count-number-block {
              display: flex;
              h1 {
                font-size: 48px !important;
                color: $first-main-color;
              }
              span {
                font-size: 48px !important;
                color: #184372;
              }
            }
            h3 {
              font-size: 20px !important;
            }
            .line {
              width: 24px;
              height: 3px;
              margin-top: 5%;
              background-color: $first-main-color;
            }
          }
        }
      }
    }
  }
  @include max($small) {
    height: 450px;
    .contain {
      padding: 0 4%;
      .picture-block {
        align-self: center;
        height: 50%;
        width: 70%;
      }
      .text-block {
        height: 50%;
        .title {
          font-size: 22px !important;
        }
        .description {
          font-size: 15px;
          margin: 1% 0 0 0;
        }
        .counter-block {
          margin: 0;
          height: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          .count {
            height: 100%;
            display: flex;
            flex-direction: column;
            .count-number-block {
              display: flex;
              h1 {
                font-size: 38px !important;
              }
              span {
                font-size: 38px !important;
              }
            }
            h3 {
              font-size: 18px !important;
            }
            .line {
              margin-top: 3%;
            }
          }
        }
      }
    }
  }
}
</style>
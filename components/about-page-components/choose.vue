<template>
  <div class="choose-wrapper">
    <div class="contain">
      <div class="header">
        <div
          class="title-block"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <div class="main">
            <div class="line"></div>
            <h4>{{ $t("about.choose.chooseTitle.description") }}</h4>
          </div>
          <h1>{{ $t("about.choose.chooseTitle.title") }}</h1>
        </div>
        <div
          class="description-block"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <p>{{ $t("about.choose.chooseTitle.side") }}</p>
        </div>
      </div>
      <div class="cards-block">
        <div class="card" v-for="(card, index) in cardsData" :key="index">
          <div class="icon">
            <img :src="card.image" alt="" />
          </div>
          <h3 class="card-title">{{ card.title }}</h3>
          <!-- <p class="card-description">{{ card.description }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardsData: {
        firstCard: {
          title: this.$t("about.choose.chooseCards.cardOne.title"),
          // description: this.$t("about.choose.chooseCards.cardOne.description"),
          image: "/images/about-page/icon-first.png",
        },
        secondCard: {
          title: this.$t("about.choose.chooseCards.cardTwo.title"),
          // description: this.$t("about.choose.chooseCards.cardTwo.description"),
          image: "/images/about-page/icon-second.png",
        },
        thirdCard: {
          title: this.$t("about.choose.chooseCards.cardThree.title"),
          // description: this.$t(
          //   "about.choose.chooseCards.cardThree.description"
          // ),
          image: "/images/about-page/icon-third.png",
        },
        fourCard: {
          title: this.$t("about.choose.chooseCards.cardFour.title"),
          // description: this.$t("about.choose.chooseCards.cardFour.description"),
          image: "/images/about-page/icon-four.png",
        },
        fiveCard: {
          title: this.$t("about.choose.chooseCards.cardFive.title"),
          // description: this.$t("about.choose.chooseCards.cardFive.description"),
          image: "/images/about-page/icon-five.png",
        },
        sixCard: {
          title: this.$t("about.choose.chooseCards.cardSix.title"),
          // description: this.$t("about.choose.chooseCards.cardSix.description"),
          image: "/images/about-page/icon-six.png",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.choose-wrapper {
  margin-top: 6%;
  width: 100%;
  display: flex;
  justify-content: center;
  .contain {
    width: $container-lg;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .title-block {
        height: 100%;
        width: 30%;
        .main {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          .line {
            width: 45px;
            height: 3px;
            background-color: #064d6d;
          }
          h4 {
            font-size: 16px !important;
            margin-left: 15px;
          }
        }
        h1 {
          font-size: 38px !important;
          font-weight: 700 !important ;
        }
      }
      .description-block {
        height: 100%;
        width: 40%;
        p {
          font-size: 18px;
          line-height: 34px;
        }
      }
    }
    .cards-block {
      margin-top: 6%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background-color: #f9fbfd;
      .card {
        padding: 5% 2%;
        width: 33.33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #ebeffc;
        .icon {
          width: 19%;
          height: 30%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
          }
        }
        .card-title {
          margin-top: 4%;
          font-size: 22px !important;
          font-weight: 800 !important;
          width: 80% !important;
          text-align: center !important;
        }
        .card-description {
          margin-top: 4%;
          font-size: 17px;
          line-height: 26px;
          text-align: center;
          width: 80% !important;
        }
      }
    }
  }
  @include max($medium-x) {
    .contain {
      width: 100% !important;
      .header {
        padding: 0 3%;
      }
      .cards-block {
        .card {
          width: 50%;
        }
      }
    }
  }
  @include max($medium) {
    .contain {
      .header {
        flex-direction: column;
        .title-block {
          width: 100%;
        }
        .description-block {
          margin-top: 3%;
          width: 100%;
        }
      }
      .cards-block {
        .card {
          .card-title {
            width: 100% !important;
          }
          .card-description {
            width: 100% !important;
          }
        }
      }
    }
  }
  @include max($small) {
    .contain {
      .cards-block {
        .card {
          width: 100%;
          .icon {
            width: 11.8%;
          }
          .card-title {
            width: 80% !important;
          }
          .card-description {
            width: 80% !important;
          }
        }
      }
    }
  }
}
</style>
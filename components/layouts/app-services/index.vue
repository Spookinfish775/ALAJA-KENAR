<template>
  <div class="services-wrapper">
    <div class="contain">
      <p class="main-text">{{ $t("services.servicesMain") }}</p>
      <h1 class="services-title">{{ $t("services.servicesTitle") }}</h1>
      <p class="services-description">
        {{ $t("services.servicesDescription") }}
      </p>
      <div class="cards">
        <div class="card" v-for="(card, index) in cardsData" :key="index">
          <div class="image"><img :src="card.icon" alt="" /></div>
          <h1 class="title">{{ card.title }}</h1>
          <p class="description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardsData: [
        {
          icon: "/images/home-page/import-icon.png",
          title: this.$t("services.cards.first.title"),
          description: this.$t("services.cards.first.description"),
        },
        {
          icon: "/images/home-page/search-icon.png",
          title: this.$t("services.cards.second.title"),
          description: this.$t("services.cards.second.description"),
        },
        {
          icon: "/images/home-page/global-icon.png",
          title: this.$t("services.cards.third.title"),
          description: this.$t("services.cards.third.description"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.services-wrapper {
  width: 100%;
  height: 560px;
  display: flex;
  justify-content: center;
  .contain {
    padding: 1%;
    width: $container-lg;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .main-text {
      color: #1c89ba;
      font-weight: 600;
    }
    .services-title {
      font-size: 36px !important;
      font-weight: 900 !important;
      text-align: center;
    }
    .services-description {
      margin: 1% 0 0 0;
      font-size: 17px;
      text-align: center;
    }
    .cards {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 6%;
      .card {
        width: 22%;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.6s;
        .image {
          width: 33%;
          img {
            width: 100%;
            transition: 0.6s;
          }
        }
        .title {
          font-weight: 700;
          text-align: center;
          margin-top: 4%;
        }
        .description {
          margin-top: 3%;
          text-align: center;
        }
        &:hover {
          cursor: default;
          transform: translateY(-12%);
          .image {
            img {
              transform: rotateY(360deg);
            }
          }
        }
      }
    }
  }
  @include max($medium) {
    height: 630px;
    .contain {
      width: 100%;
      padding: 2%;
      .cards {
        .card {
          width: 30%;
        }
      }
    }
  }
  @include max($small) {
    height: 1000px;
    .contain {
      width: 100%;
      padding: 15px;
      .services-title {
        font-size: 30px !important;
      }
      .cards {
        flex-direction: column;
        .card {
          width: 100%;
          .image {
            width: 14%;
          }
          &:hover {
            cursor: default;
            transform: none;
            .image {
              img {
                transform: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>